import json
import sys
import urllib.request
import urllib.error

KEY = sys.argv[1] if len(sys.argv) > 1 else ""
if not KEY:
    print("Usage: python indexnow_push.py <your-indexnow-key>")
    sys.exit(1)

HOST = "sorivapackaging.com"
BASE = "https://" + HOST

paths = [
    "/",
    "/products/",
    "/industries/cosmetic-packaging/",
    "/industries/perfume-packaging/",
    "/projects/",
    "/custom-packaging/",
    "/factory/",
    "/resources/",
    "/resources/magnetic-rigid-box-guide/",
    "/resources/foldable-vs-traditional-rigid-box/",
    "/resources/cosmetic-packaging-guide/",
    "/resources/custom-packaging-moq-guide/",
    "/resources/custom-packaging-cost-guide/",
    "/resources/luxury-packaging-materials-guide/",
    "/resources/perfume-packaging-buyer-guide/",
    "/resources/jewelry-packaging-buyer-guide/",
    "/products/magnetic-rigid-boxes/",
    "/products/foldable-magnetic-rigid-boxes/",
    "/products/drawer-boxes/",
    "/products/two-piece-rigid-boxes/",
    "/products/paper-bags/",
    "/contact/",
]
url_list = [BASE + p for p in paths]

# Step 1: verify key file is live at site root
key_url = BASE + "/" + KEY + ".txt"
try:
    req = urllib.request.Request(key_url, headers={"User-Agent": "Mozilla/5.0"})
    r = urllib.request.urlopen(req, timeout=15)
    body = r.read().decode("utf-8", "ignore").strip()
    if r.status == 200 and body == KEY:
        print("OK key file live:", key_url)
    else:
        print("WARN key file status", r.status, "content mismatch:", body[:60])
except Exception as e:
    print("ERROR key file not accessible:", key_url, type(e).__name__, e)
    sys.exit(1)

# Step 2: submit URLs via IndexNow
payload = {"host": HOST, "key": KEY, "urlList": url_list}
req = urllib.request.Request(
    "https://api.indexnow.org/indexnow",
    data=json.dumps(payload).encode("utf-8"),
    headers={"Content-Type": "application/json; charset=utf-8"},
    method="POST",
)
try:
    r = urllib.request.urlopen(req, timeout=30)
    print("HTTP", r.status, "- submitted", len(url_list), "URLs")
    if r.status == 200:
        print("SUCCESS: Bing/IndexNow accepted all URLs")
    elif r.status == 202:
        print("ACCEPTED: received, key validation pending")
except urllib.error.HTTPError as e:
    print("HTTP", e.code, e.reason)
    print(e.read().decode("utf-8", "ignore"))
    sys.exit(1)
