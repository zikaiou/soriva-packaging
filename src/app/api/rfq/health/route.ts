import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "../../../lib/supabase-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Public, read-only status endpoint for checking whether RFQs can reach Supabase.
// Never expose credentials, customer data or database error details to callers.
export async function GET() {
  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase
      .from("rfq_submissions")
      .select("id")
      .limit(1)
      .abortSignal(AbortSignal.timeout(8000));

    if (error) {
      console.error("RFQ database health check failed", error);
      return NextResponse.json(
        { ok: false, service: "rfq-database" },
        { status: 503, headers: { "Cache-Control": "no-store" } },
      );
    }

    return NextResponse.json(
      { ok: true, service: "rfq-database" },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    console.error("RFQ database health check unavailable", error);
    return NextResponse.json(
      { ok: false, service: "rfq-database" },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }
}
