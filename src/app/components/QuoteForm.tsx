"use client";

import Link from "next/link";
import { waLink } from "../lib/whatsapp";

type QuoteFormProps = { href?: string };

export default function QuoteForm({ href = "/rfq/" }: QuoteFormProps) {
  const isPaperBag = href.includes("product=Luxury%20Paper%20Bag");
  return (
    <div className="quote-form-next">
      <p>
        {isPaperBag
          ? "Request a quote for your custom paper bags. Share quantity, delivery country and your logo or reference image. Not sure about the size or material? Tell us what the bags need to carry and we can discuss options."
          : "For a structured quotation, send your packaging details and reference files through our RFQ form. Your inquiry is saved securely for review."}
      </p>
      <div className="quote-form-next-actions">
        <Link className="btn gold" href={href}>
          {isPaperBag ? "Get My Paper Bag Quote" : "Open RFQ Form"}
        </Link>
        <a
          className="btn-wa"
          href={waLink(isPaperBag ? "Hello SORIVA Packaging, I would like a quote for custom paper shopping bags with my logo. Quantity: __. Bag size or product: __. Delivery country: __." : "Hello SORIVA Packaging, I would like a quote for custom packaging.")}
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
