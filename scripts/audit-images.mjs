/**
 * SORIVA image asset audit.
 * Read-only: no image replacements, file deletion or deployment changes.
 * Usage: npm run audit:images
 */
import { readdir, readFile, stat } from "node:fs/promises";
import { join, relative, extname, basename } from "node:path";
import { createHash } from "node:crypto";

const root = process.cwd();
const assetDir = join(root, "public", "img");
const appDir = join(root, "src", "app");
const walk = async (dir) => {
  const out = [];
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, item.name);
    if (item.isDirectory()) out.push(...await walk(path));
    else if (item.isFile()) out.push(path);
  }
  return out;
};
const imagePattern = /\.(?:webp|png|jpe?g|svg)$/i;
function dimensions(buf, ext) {
  if (ext === ".png" && buf.toString("ascii", 1, 4) === "PNG") {
    return [buf.readUInt32BE(16), buf.readUInt32BE(20)];
  }
  if (ext === ".webp" && buf.toString("ascii", 0, 4) === "RIFF") {
    const type = buf.toString("ascii", 12, 16);
    if (type === "VP8 ") return [buf.readUInt16LE(26) & 0x3fff, buf.readUInt16LE(28) & 0x3fff];
    if (type === "VP8L") return [1 + (((buf[22] & 63) << 8) | buf[21]), 1 + (((buf[24] & 15) << 10) | (buf[23] << 2) | ((buf[22] & 192) >> 6))];
    if (type === "VP8X") return [1 + buf[24] + (buf[25] << 8) + (buf[26] << 16), 1 + buf[27] + (buf[28] << 8) + (buf[29] << 16)];
  }
  return null;
}
const sourcePaths = (await walk(appDir)).filter(p => /\.(?:tsx|ts|css)$/.test(p));
const sources = await Promise.all(sourcePaths.map(async p => ({ path: relative(root, p), content: await readFile(p, "utf8") })));
const usage = new Map();
const missingAlt = [];
for (const { path, content } of sources) {
  for (const m of content.matchAll(/\/img\/[\w.-]+\.(?:webp|png|jpe?g|svg)/g)) {
    const key = basename(m[0]);
    if (!usage.has(key)) usage.set(key, new Set());
    usage.get(key).add(path);
  }
  for (const m of content.matchAll(/<img\b[^>]*>/gs)) {
    if (!/\balt\s*=/.test(m[0])) missingAlt.push(path);
  }
}
const assets = (await walk(assetDir)).filter(p => imagePattern.test(p));
const found = new Set();
const small = [], large = [], duplicate = new Map();
for (const path of assets) {
  const name = basename(path);
  found.add(name);
  const bytes = (await stat(path)).size;
  const buf = await readFile(path);
  const dim = dimensions(buf, extname(path).toLowerCase());
  const refs = usage.get(name)?.size || 0;
  if (refs && dim && dim[0] < 800) small.push({ name, width: dim[0], height: dim[1], refs });
  if (refs && bytes > 1024 * 1024) large.push({ name, MB: +(bytes / 1048576).toFixed(2), refs });
  const digest = createHash("sha256").update(buf).digest("hex");
  if (!duplicate.has(digest)) duplicate.set(digest, []);
  duplicate.get(digest).push(name);
}
const missing = [...usage.keys()].filter(name => !found.has(name));
console.log("SORIVA image audit —", sources.length, "source files;", assets.length, "image assets");
console.log("\nLow-width images referenced on site (<800px; inspect visually):", JSON.stringify(small, null, 2));
console.log("\nLarge referenced assets (>1MB; optimize before replacing):", JSON.stringify(large, null, 2));
console.log("\nExact duplicate assets:", JSON.stringify([...duplicate.values()].filter(v => v.length > 1), null, 2));
console.log("\nSource files with <img> missing alt:", [...new Set(missingAlt)]);
console.log("\nMissing referenced image assets:", missing);
if (missing.length) process.exitCode = 1;
