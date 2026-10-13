const site = "https://www.sorivapackaging.com";
const sitemapUrl = `${site}/sitemap.xml`;
const key = "7f3c9a1e4b6d8f2051a7c3e9b4d62f81";
const keyLocation = `${site}/${key}.txt`;

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchSitemap() {
  let lastError;
  for (let attempt = 1; attempt <= 6; attempt += 1) {
    try {
      const res = await fetch(sitemapUrl, { cache: "no-store" });
      if (!res.ok) throw new Error(`Sitemap HTTP ${res.status}`);
      const xml = await res.text();
      const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].trim());
      if (!urls.length) throw new Error("No URLs found in sitemap");
      return [...new Set(urls)];
    } catch (error) {
      lastError = error;
      if (attempt < 6) await sleep(20000);
    }
  }
  throw lastError;
}

const urls = await fetchSitemap();

const payload = {
  host: "www.sorivapackaging.com",
  key,
  keyLocation,
  urlList: urls,
};

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});

const body = await response.text();
console.log(`IndexNow submitted ${urls.length} URLs. HTTP ${response.status}`);
if (body) console.log(body);

if (![200, 202].includes(response.status)) {
  throw new Error(`IndexNow submission failed with HTTP ${response.status}`);
}
