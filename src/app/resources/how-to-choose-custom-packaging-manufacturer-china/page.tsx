/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL =
  "https://www.sorivapackaging.com/resources/how-to-choose-custom-packaging-manufacturer-china/";

export const metadata: Metadata = {
  title:
    "How to Choose a Custom Packaging Manufacturer in China | SORIVA Packaging",
  description:
    "A practical buyer guide to evaluating custom packaging manufacturers in China, including factory capability, sampling, QC, communication, lead time and shipping support.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title:
      "How to Choose a Custom Packaging Manufacturer in China | SORIVA Packaging",
    description:
      "A practical buyer guide to evaluating custom packaging manufacturers in China, including factory capability, sampling, QC, communication, lead time and shipping support.",
  },
};

const sidebarLinks = [
  { href: "/rfq/", label: "Request a Quote" },
  { href: "/products/", label: "All Products" },
  { href: "/custom-packaging/", label: "Custom Packaging" },
  { href: "/factory/", label: "Factory" },
  { href: "/projects/", label: "Projects" },
  { href: "/resources/how-to-prepare-custom-packaging-rfq/", label: "RFQ Preparation Guide" },
  { href: "/resources/custom-gift-box-sample-checklist/", label: "Sample Checklist" },
  { href: "/resources/how-to-inspect-custom-packaging-before-shipment/", label: "Pre-Shipment Inspection" },
  { href: "/resources/exw-vs-fob-vs-ddp-custom-packaging/", label: "EXW vs FOB vs DDP" },
];

const evaluationAreas = [
  { area: "Factory capability", check: "Printing, finishing, assembly, QC and production capacity." },
  { area: "Product specialization", check: "Experience with the box structure and industry you need." },
  { area: "Sampling", check: "Prototype process, revision handling and approval method." },
  { area: "Quality control", check: "Inspection points before and during production." },
  { area: "Communication", check: "Clear answers on size, materials, tolerances and timing." },
  { area: "Export support", check: "Carton data, shipping documents and freight coordination." },
  { area: "Transparency", check: "Factory photos, production updates and pre-shipment evidence." },
];

const samplingQuestions = [
  "What board thickness do you recommend?",
  "Which paper or wrap is suitable?",
  "What insert options are available?",
  "How will the sample differ from mass production?",
  "What is the production process?",
  "What QC checks are performed?",
  "What information is needed for shipping estimation?",
];

const checklistItems = [
  "Factory evidence",
  "Clear specification",
  "Physical sample option",
  "Production updates",
  "QC process",
  "Packing details",
  "Shipping support",
];

const faqs = [
  {
    q: "Should I choose the lowest quotation?",
    a: "Not necessarily. Compare the full specification, sample quality, QC process and logistics support.",
  },
  {
    q: "How can I verify a packaging factory?",
    a: "Ask for factory photos, videos, production evidence and project-specific updates.",
  },
  {
    q: "Should I order a sample first?",
    a: "For custom rigid packaging, a physical sample is often useful before bulk production.",
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
          name: "How to Choose a Custom Packaging Manufacturer in China",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline: "How to Choose a Custom Packaging Manufacturer in China",
      description:
        "A practical buyer guide to evaluating custom packaging manufacturers in China, including factory capability, sampling, QC, communication, lead time and shipping support.",
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
            <a href="/">Home</a> / <a href="/resources/">Resources</a> / Supplier Selection
          </p>
          <div className="mrb-hero-copy" style={{ maxWidth: 860 }}>
            <span className="mrb-eyebrow">BUYER GUIDE</span>
            <h1>How to Choose a Custom Packaging Manufacturer in China</h1>
            <p className="mrb-lead">
              A practical buyer guide to evaluating custom packaging manufacturers
              in China, including factory capability, sampling, QC, communication,
              lead time and shipping support.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Article Content ---------- */}
      <section className="mrb-section">
        <div className="container mrb-article">
          <article className="mrb-article-main">
            <p>
              Choosing a packaging supplier should be based on more than unit
              price. A reliable manufacturer should be able to explain structure,
              materials, sampling, production control and shipment clearly.
            </p>

            <h2>7 Areas to Evaluate</h2>
            <div className="mrb-table-wrap">
              <table className="mrb-table">
                <thead>
                  <tr>
                    <th>Area</th>
                    <th>What to Check</th>
                  </tr>
                </thead>
                <tbody>
                  {evaluationAreas.map((r) => (
                    <tr key={r.area}>
                      <td><b>{r.area}</b></td>
                      <td>{r.check}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Ask for More Than a Price</h2>
            <p>
              A useful quotation should explain the structure, material, insert,
              finishing, quantity and shipping assumptions. Comparing only a unit
              price can hide differences in specification.
            </p>

            <div className="mrb-note">
              <b>Buyer Tip:</b> Ask suppliers to quote against the same
              specification. This makes comparison more meaningful.
            </div>

            <h2>Questions to Ask Before Sampling</h2>
            <ul>
              {samplingQuestions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>

            <h2>Supplier Evaluation Checklist</h2>
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
