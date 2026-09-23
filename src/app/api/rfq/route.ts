import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  ALLOWED_FILES,
  RFQ_BUCKET,
  RFQ_MAX_FILES,
  getSupabaseAdmin,
  isAllowedFile,
} from "../../lib/supabase-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const WINDOW_MS = Number(process.env.RFQ_RATE_LIMIT_WINDOW_SECONDS || 3600) * 1000;
const MAX_REQUESTS = Number(process.env.RFQ_RATE_LIMIT_MAX_REQUESTS || 5);
const attempts = new Map<string, number[]>();

const json = (body: unknown, status = 200) =>
  NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });

function getClientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for") || "";
  return forwarded.split(",")[0].trim() || request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (attempts.get(key) || []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) return true;
  recent.push(now);
  attempts.set(key, recent);
  return false;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] || character);
}

function value(body: Record<string, unknown>, name: string, max = 4000) {
  return typeof body[name] === "string" ? String(body[name]).trim().slice(0, max) : "";
}

function isUploadedFile(valueToCheck: unknown): valueToCheck is {
  original_name: string;
  storage_path: string;
  mime_type: string;
  size_bytes: number;
} {
  if (!valueToCheck || typeof valueToCheck !== "object") return false;
  const file = valueToCheck as Record<string, unknown>;
  const originalName = typeof file.original_name === "string" ? file.original_name : "";
  const storagePath = typeof file.storage_path === "string" ? file.storage_path : "";
  const mimeType = typeof file.mime_type === "string" ? file.mime_type : "";
  const size = Number(file.size_bytes);
  return (
    originalName.length > 0 &&
    originalName.length <= 200 &&
    /^[a-f0-9-]{20,80}\/[a-f0-9-]{20,80}-[a-zA-Z0-9._-]+$/i.test(storagePath) &&
    isAllowedFile({ name: originalName, type: mimeType, size })
  );
}

export async function POST(request: Request) {
  const clientKey = getClientKey(request);
  if (isRateLimited(clientKey)) {
    return json({ error: "Too many submissions. Please try again later." }, 429);
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid form submission." }, 400);
  }

  if (value(body, "website", 120)) return json({ error: "Invalid submission." }, 400);

  const fields = {
    name: value(body, "name", 120),
    company: value(body, "company", 160),
    email: value(body, "email", 254).toLowerCase(),
    whatsapp: value(body, "whatsapp", 80),
    country: value(body, "country", 100),
    postcode: value(body, "postcode", 40),
    packaging_type: value(body, "packaging_type", 120),
    quantity: value(body, "quantity", 100),
    finished_size: value(body, "finished_size", 160),
    product_size: value(body, "product_size", 160),
    preferred_material: value(body, "preferred_material", 200),
    insert_requirement: value(body, "insert_requirement", 300),
    finishing: value(body, "finishing", 300),
    target_delivery_date: value(body, "target_delivery_date", 30),
    destination_market: value(body, "destination_market", 160),
    project_details: value(body, "project_details", 4000),
    source_page: value(body, "source_page", 500) || "/rfq/",
  };

  if (!fields.name || !fields.email || !fields.country || !fields.packaging_type || !fields.quantity || !fields.project_details) {
    return json({ error: "Please complete all required fields." }, 400);
  }
  if (!/^\S+@\S+\.\S+$/.test(fields.email)) {
    return json({ error: "Please enter a valid email address." }, 400);
  }

  const uploaded = Array.isArray(body.uploaded_files) ? body.uploaded_files : [];
  if (uploaded.length > Number(process.env.RFQ_MAX_FILES || 5) || uploaded.some((file) => !isUploadedFile(file))) {
    return json({ error: "One or more uploaded files are invalid." }, 400);
  }
  const files = uploaded as Array<{
    original_name: string;
    storage_path: string;
    mime_type: string;
    size_bytes: number;
  }>;

  const supabase = getSupabaseAdmin();
  const rfqPayload: Record<string, unknown> = {
    ...fields,
    company: fields.company || null,
    whatsapp: fields.whatsapp || null,
    postcode: fields.postcode || null,
    finished_size: fields.finished_size || null,
    product_size: fields.product_size || null,
    preferred_material: fields.preferred_material || null,
    insert_requirement: fields.insert_requirement || null,
    finishing: fields.finishing || null,
    target_delivery_date: fields.target_delivery_date || null,
    destination_market: fields.destination_market || null,
    ip_hash: clientKey.slice(0, 160),
    user_agent: request.headers.get("user-agent")?.slice(0, 500) || null,
  };
  const { data: rfqData, error: rfqError } = await supabase
    .from("rfq_submissions")
    .insert(rfqPayload as never)
    .select("id, created_at")
    .single();
  const rfq = rfqData as { id: string; created_at: string } | null;

  if (rfqError || !rfq) {
    console.error("RFQ insert failed", rfqError);
    return json({ error: "We could not save your inquiry. Please try again." }, 500);
  }

  try {
    if (files.length) {
      const { error: filesError } = await supabase.from("rfq_files").insert(
        files.map((file) => ({ ...file, rfq_id: rfq.id })) as never
      );
      if (filesError) throw filesError;
    }

    const links: string[] = [];
    for (const file of files) {
      const { data, error } = await supabase.storage
        .from(RFQ_BUCKET)
        .createSignedUrl(file.storage_path, 60 * 60 * 24 * 7);
      if (!error && data?.signedUrl) {
        links.push(`<li><a href="${data.signedUrl}">${escapeHtml(file.original_name)}</a> (${escapeHtml(file.mime_type)}, ${Math.round(file.size_bytes / 1024)} KB)</li>`);
      }
    }

    const resendKey = process.env.RESEND_API_KEY;
    const from = process.env.RFQ_FROM_EMAIL;
    const to = process.env.RFQ_TO_EMAIL;
    if (!resendKey || !from || !to) throw new Error("Missing Resend server environment variables");

    const resend = new Resend(resendKey);
    const { error: emailError } = await resend.emails.send({
      from,
      to: [to],
      replyTo: fields.email,
      subject: `New RFQ | ${fields.packaging_type} | ${fields.quantity} | ${fields.country}`,
      html: `
        <h1>New SORIVA RFQ</h1>
        <p><strong>Received:</strong> ${escapeHtml(new Date().toISOString())}</p>
        <h2>Customer</h2>
        <p>Name: ${escapeHtml(fields.name)}<br>Company: ${escapeHtml(fields.company || "—")}<br>Email: ${escapeHtml(fields.email)}<br>WhatsApp: ${escapeHtml(fields.whatsapp || "—")}<br>Country: ${escapeHtml(fields.country)}<br>Postcode: ${escapeHtml(fields.postcode || "—")}</p>
        <h2>Project</h2>
        <p>Packaging type: ${escapeHtml(fields.packaging_type)}<br>Quantity: ${escapeHtml(fields.quantity)}<br>Finished size: ${escapeHtml(fields.finished_size || "—")}<br>Product size: ${escapeHtml(fields.product_size || "—")}<br>Preferred material: ${escapeHtml(fields.preferred_material || "—")}<br>Insert requirement: ${escapeHtml(fields.insert_requirement || "—")}<br>Finishing: ${escapeHtml(fields.finishing || "—")}<br>Target delivery date: ${escapeHtml(fields.target_delivery_date || "—")}<br>Destination market: ${escapeHtml(fields.destination_market || "—")}</p>
        <h2>Project details</h2><p>${escapeHtml(fields.project_details).replace(/\n/g, "<br>")}</p>
        <h2>Files</h2><ul>${links.join("") || "<li>No files uploaded</li>"}</ul>
        <p>RFQ ID: ${escapeHtml(rfq.id)}</p>
      `,
    });
    if (emailError) throw emailError;
  } catch (error) {
    console.error("RFQ notification failed", error);
    await supabase.from("rfq_submissions").update({ status: "reviewing" } as never).eq("id", rfq.id);
    return json({ error: "Your inquiry was saved, but notification processing failed. Please contact us on WhatsApp." }, 502);
  }

  return json({ ok: true, rfqId: rfq.id, redirect: "/rfq/thank-you/" });
}

export async function GET() {
  return json({ ok: true, maxFiles: RFQ_MAX_FILES, allowedTypes: Object.keys(ALLOWED_FILES) });
}
