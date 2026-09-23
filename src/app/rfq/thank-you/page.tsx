import Link from "next/link";
import { waLink } from "../../lib/whatsapp";

export const metadata = {
  title: "Thank You | SORIVA Packaging",
  description: "Your custom packaging RFQ has been received by SORIVA Packaging.",
};

export default function RfqThankYouPage() {
  return (
    <main className="rfq-page rfq-thank-you">
      <section className="rfq-hero">
        <div className="rfq-wrap">
          <p className="rfq-eyebrow">REQUEST RECEIVED</p>
          <h1>Thank You for Your Inquiry</h1>
          <p>We have received your packaging project details. Our team will review the specification and reply by email.</p>
          <div className="rfq-thank-actions">
            <a className="btn-wa" href={waLink("Hello SORIVA Packaging, I have just submitted an RFQ and would like to continue the discussion.")} target="_blank" rel="noreferrer">Continue on WhatsApp</a>
            <Link className="rfq-secondary-button" href="/">Back to SORIVA Packaging</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
