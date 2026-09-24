/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL =
  "https://www.sorivapackaging.com/resources/exw-vs-fob-vs-ddp-custom-packaging/";

export const metadata: Metadata = {
  title: "EXW vs FOB vs DDP for Custom Packaging Orders | SORIVA Packaging",
  description:
    "Understand the practical differences between EXW, FOB and DDP when importing custom packaging, including responsibilities, freight and customs considerations.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "EXW vs FOB vs DDP for Custom Packaging Orders | SORIVA Packaging",
    description:
      "Understand the practical differences between EXW, FOB and DDP when importing custom packaging, including responsibilities, freight and customs considerations.",
  },
};

const sidebarLinks = [
  { href: "/rfq/", label: "Request a Quote" },
  { href: "/products/", label: "All Products" },
  { href: "/custom-packaging/", label: "Custom Packaging" },
  { href: "/factory/", label: "Factory" },
  { href: "/projects/", label: "Projects" },
  { href: "/resources/how-to-reduce-custom-packaging-shipping-cost/", label: "Shipping Cost Guide" },
  { href: "/resources/how-to-choose-custom-packaging-manufacturer-china/", label: "Supplier Selection Guide" },
  { href: "/resources/how-to-inspect-custom-packaging-before-shipment/", label: "Pre-Shipment Inspection" },
];

const incotermComparison = [
  {
    term: "EXW",
    supplier: "Makes goods available at the agreed location",
    buyer: "Pickup, export handling, freight, import and delivery",
  },
  {
    term: "FOB",
    supplier: "Handles export process to the named port and loads goods on board",
    buyer: "Main freight, import clearance and destination delivery",
  },
  {
    term: "DDP",
    supplier: "Arranges transport to the agreed destination, including import handling as agreed",
    buyer: "Receives goods at destination",
  },
];

const quoteQuestions = [
  "Incoterm and named place/port",
  "Carton quantity",
  "Master carton dimensions",
  "Gross weight",
  "Total CBM",
  "Estimated transit time",
  "Whether duties/taxes are included",
  "Final delivery postcode",
];

const checklistItems = [
  "Use the same quantity",
  "Use the same destination",
  "Confirm the same Incoterm",
  "Check included charges",
  "Check whether customs duties are included",
];

const faqs = [
  {
    q: "Which Incoterm is best for first-time buyers?",
    a: "It depends on how much logistics control you want and whether you already work with a freight forwarder.",
  },
  {
    q: "Does DDP always include duties and taxes?",
    a: "The exact scope should be confirmed in writing because service coverage can vary.",
  },
  {
    q: "Why does the named port or place matter?",
    a: "Incoterms define responsibilities relative to a specific location, so the place should be stated clearly.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sorivapackaging.com/" },
        { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.sorivapackaging.com/resources/" },
        {
          "@type": "ListItem",
          position: 3,
          name: "EXW vs FOB vs DDP for Custom Packaging Orders",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline: "EXW vs FOB vs DDP for Custom Packaging Orders",
      description:
        "Understand the practical differences between EXW, FOB and DDP when importing custom packaging, including responsibilities, freight and customs considerations.",
      author: { "@type": "Organization", name: "SORIVA Packaging" },
      publisher: { "@type": "Organization", name: "SORIVA Packaging" },
      mainEntityOfPage: PAGE_URL,
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Page() {
  return (
    <main className="mrb-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ---------- Hero ---------- */}
      <section className="mrb-hero">
        <div className="container">
          <p className="mrb-breadcrumb">
            <a href="/">Home</a> / <a href="/resources/">Resources</a> / Trade Terms
          </p>
          <div className="mrb-hero-copy" style={{ maxWidth: 860 }}>
            <span className="mrb-eyebrow">BUYER GUIDE</span>
            <h1>EXW vs FOB vs DDP for Custom Packaging Orders</h1>
            <p className="mrb-lead">
              Understand the practical differences between EXW, FOB and DDP when
              importing custom packaging, including responsibilities, freight
              and customs considerations.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Article Content ---------- */}
      <section className="mrb-section">
        <div className="container mrb-article">
          <article className="mrb-article-main">
            <p>
              EXW, FOB and DDP describe different levels of responsibility
              between buyer and supplier. The right choice depends on your
              logistics experience, destination and preferred level of control.
            </p>

            <h2>Quick Comparison</h2>
            <div className="mrb-table-wrap">
              <table className="mrb-table">
                <thead>
                  <tr>
                    <th>Term</th>
                    <th>Supplier Responsibility</th>
                    <th>Buyer Responsibility</th>
                  </tr>
                </thead>
                <tbody>
                  {incotermComparison.map((r) => (
                    <tr key={r.term}>
                      <td><b>{r.term}</b></td>
                      <td>{r.supplier}</td>
                      <td>{r.buyer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>When EXW May Be Suitable</h2>
            <p>
              EXW can suit buyers with their own freight forwarder in China who
              want maximum control of logistics from factory pickup onward.
            </p>

            <h2>When FOB May Be Suitable</h2>
            <p>
              FOB is common when buyers want the supplier to handle export
              procedures while the buyer controls international freight and
              destination clearance.
            </p>

            <h2>When DDP May Be Suitable</h2>
            <p>
              DDP can simplify logistics for buyers who prefer one delivered
              quotation, but the exact scope should be confirmed carefully,
              especially duties, taxes, delivery area and any destination
              surcharges.
            </p>

            <div className="mrb-note">
              <b>Buyer Tip:</b> Always confirm the named place or port. “FOB” or
              “DDP” alone is incomplete without a location.
            </div>

            <h2>What to Ask for in a Shipping Quote</h2>
            <ul>
              {quoteQuestions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>

            <h2>Before Comparing Freight Quotes</h2>
            <div className="mrb-note" style={{ background: "#faf8f4", borderLeftColor: "#c79a51" }}>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {checklistItems.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>

            <h2>Frequently Asked Questions</h2>
            <div className="mrb-faq" style={{ margin: "20px 0" }}>
              {faqs.map((f) => (
                <div className="mrb-faq-item" key={f.q} style={{ borderBottom: "1px solid #e3ddd5", padding: "16px 0" }}>
                  <b style={{ display: "block", fontSize: 16, marginBottom: 8, color: "var(--ink)" }}>{f.q}</b>
                  <p style={{ margin: 0, color: "var(--muted)", fontSize: 14 }}>{f.a}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className="mrb-sidebar">
            <b>Related Pages</b>
            {sidebarLinks.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </aside>
        </div>
      </section>

      {/* ---------- Quote CTA ---------- */}
      <section className="mrb-section dark">
        <div className="container">
          <div className="mrb-head center">
            <span className="mrb-eyebrow">READY TO QUOTE?</span>
            <h2>Discuss Your Packaging Project</h2>
            <p>
              Send size, quantity, reference images and destination details for a
              more accurate quotation.
            </p>
          </div>
          <div
            className="mrb-hero-actions"
            style={{ justifyContent: "center", marginTop: 28 }}
          >
            <a href="/rfq/" className="btn gold">
              Request Packaging Quote
            </a>
            <a
              href={waLink(WA_MESSAGES.guide)}
              target="_blank"
              rel="noopener"
              className="btn-wa"
            >
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
