import { NextResponse } from "next/server";
import {
  RFQ_BUCKET,
  RFQ_MAX_FILE_SIZE,
  RFQ_MAX_FILES,
  getSupabaseAdmin,
  isAllowedFile,
} from "../../../lib/supabase-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const attempts = new Map<string, number[]>();
const json = (body: unknown, status = 200) =>
  NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });

function clientKey(request: Request) {
  return (request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown")
    .split(",")[0]
    .trim();
}

function limited(key: string) {
  const now = Date.now();
  const recent = (attempts.get(key) || []).filter((time) => now - time < 60 * 60 * 1000);
  if (recent.length >= 20) return true;
  recent.push(now);
  attempts.set(key, recent);
  return false;
}

export async function POST(request: Request) {
  if (limited(clientKey(request))) return json({ error: "Too many upload attempts. Please try again later." }, 429);

  let body: { draftId?: string; files?: Array<{ name?: string; type?: string; size?: number }> };
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid upload request." }, 400);
  }

  const draftId = typeof body.draftId === "string" && /^[a-f0-9-]{20,80}$/i.test(body.draftId)
    ? body.draftId
    : crypto.randomUUID();
  const files = Array.isArray(body.files) ? body.files : [];
  if (files.length > RFQ_MAX_FILES) return json({ error: `Please upload no more than ${RFQ_MAX_FILES} files.` }, 400);

  const supabase = getSupabaseAdmin();
  const signed = [] as Array<{ signedUrl: string; path: string; token: string; name: string; type: string; size: number }>;
  for (const file of files) {
    const candidate = {
      name: typeof file.name === "string" ? file.name.slice(0, 200) : "",
      type: typeof file.type === "string" ? file.type : "",
      size: Number(file.size || 0),
    };
    if (!isAllowedFile(candidate)) {
      return json({ error: `${candidate.name || "File"} must be JPG, PNG or PDF under ${Math.round(RFQ_MAX_FILE_SIZE / 1048576)}MB.` }, 400);
    }
    const safeName = candidate.name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(-120);
    const path = `${draftId}/${crypto.randomUUID()}-${safeName}`;
    const { data, error } = await supabase.storage.from(RFQ_BUCKET).createSignedUploadUrl(path, { upsert: false });
    if (error || !data) {
      console.error("Signed upload URL failed", error);
      return json({ error: "We could not prepare the file upload." }, 502);
    }
    signed.push({ signedUrl: data.signedUrl, path, token: data.token, name: candidate.name, type: candidate.type, size: candidate.size });
  }

  return json({ ok: true, draftId, files: signed });
}
