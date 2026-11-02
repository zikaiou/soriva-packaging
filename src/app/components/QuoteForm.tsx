"use client";

import Link from "next/link";
import { waLink } from "../lib/whatsapp";

export default function QuoteForm() {
  return (
    <div className="quote-form-next">
      <p>
        For a more accurate quotation, share your packaging type, estimated quantity, dimensions, materials, logo finishing and delivery destination. You can also upload reference images or a PDF in the RFQ form.
      </p>
      <div className="quote-form-next-actions">
        <Link className="btn gold" href="/rfq/">
          Request a Quote
        </Link>
        <a
          className="btn-wa"
          href={waLink("Hello SORIVA Packaging, I would like a quote for custom packaging.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Discuss on WhatsApp
        </a>
      </div>
    </div>
  );
}
