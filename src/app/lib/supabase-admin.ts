import { createClient } from "@supabase/supabase-js";

let client: ReturnType<typeof createClient> | undefined;

export function getSupabaseAdmin() {
  if (client) return client;

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error("Missing Supabase server environment variables");
  }

  client = createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
  return client;
}

export const RFQ_BUCKET = process.env.SUPABASE_STORAGE_BUCKET || "rfq-files";
export const RFQ_MAX_FILE_SIZE = Number(
  process.env.RFQ_MAX_FILE_SIZE_BYTES || 10485760
);
export const RFQ_MAX_FILES = Number(process.env.RFQ_MAX_FILES || 5);

export const ALLOWED_FILES = {
  "image/jpeg": ["jpg", "jpeg"],
  "image/png": ["png"],
  "application/pdf": ["pdf"],
} as const;

export type AllowedMime = keyof typeof ALLOWED_FILES;

export function getFileExtension(name: string) {
  return name.toLowerCase().split(".").pop() || "";
}

export function isAllowedFile(file: { name: string; type: string; size: number }) {
  const extensions = ALLOWED_FILES[file.type as AllowedMime];
  return Boolean(
    extensions &&
      file.size > 0 &&
      file.size <= RFQ_MAX_FILE_SIZE &&
      extensions.includes(getFileExtension(file.name) as never)
  );
}
