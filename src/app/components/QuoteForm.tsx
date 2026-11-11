"use client";

import Link from "next/link";
import { waLink } from "../lib/whatsapp";

type QuoteFormProps = { href?: string; whatsappMessage?: string };

export default function QuoteForm({ href = "/rfq/", whatsappMessage = "Hello SORIVA Packaging, I would like a quote for custom packaging." }: QuoteFormProps) {
  return (
    <div className="quote-form-next">
      <p>
        For a structured quotation, send your packaging details and reference
        files through our RFQ form. Your inquiry is saved securely for review.
      </p>
      <div className="quote-form-next-actions">
        <Link className="btn gold" href={href}>
          Open RFQ Form
        </Link>
        <a
          className="btn-wa"
          href={waLink(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
