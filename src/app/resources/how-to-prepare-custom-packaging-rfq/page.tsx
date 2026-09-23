/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL =
  "https://www.sorivapackaging.com/resources/how-to-prepare-custom-packaging-rfq/";

export const metadata: Metadata = {
  title: "How to Prepare an RFQ for Custom Packaging | SORIVA Packaging",
  description:
    "A practical guide to preparing a clear custom packaging RFQ with size, quantity, materials, inserts, finishes, shipping details and reference files.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "How to Prepare an RFQ for Custom Packaging | SORIVA Packaging",
    description:
      "A practical guide to preparing a clear custom packaging RFQ with size, quantity, materials, inserts, finishes, shipping details and reference files.",
  },
};

const sidebarLinks = [
  { href: "/rfq/", label: "Request a Quote" },
  { href: "/products/", label: "Products" },
  { href: "/custom-packaging/", label: "Custom Packaging" },
  { href: "/factory/", label: "Factory" },
  { href: "/projects/", label: "Projects" },
  { href: "/resources/custom-gift-box-sample-checklist/", label: "Sample Approval Checklist" },
  { href: "/resources/packaging-inserts-eva-vs-paperboard-vs-molded-pulp/", label: "Packaging Inserts Guide" },
];

const rfqItems = [
  { item: "Packaging type", provide: "Magnetic, foldable, drawer, two-piece, tube, paper bag or need recommendation." },
  { item: "Finished size", provide: "L × W × H in mm." },
  { item: "Product size", provide: "Dimensions and approximate weight." },
  { item: "Quantity", provide: "Target quantity and future volume if known." },
  { item: "Material", provide: "Rigid board, specialty paper, kraft or reference." },
  { item: "Insert", provide: "EVA, velvet, paperboard, molded pulp or none." },
  { item: "Printing", provide: "CMYK, Pantone or logo-only." },
  { item: "Finishing", provide: "Foil, emboss, deboss, spot UV, lamination." },
  { item: "Destination", provide: "Country and postcode." },
  { item: "Timeline", provide: "Target sample and delivery dates." },
];

const checklistItems = [
  "Box type",
  "Size",
  "Quantity",
  "Insert",
  "Finishes",
  "Reference image",
  "Destination",
  "Target date",
];

const faqs = [
  {
    q: "Can I quote without knowing the exact material?",
    a: "Yes. Send product information and reference images and ask for a recommendation.",
  },
  {
    q: "Should I include shipping information?",
    a: "Yes. Country and postcode help when freight estimation is required.",
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
          name: "How to Prepare an RFQ for Custom Packaging",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline: "How to Prepare an RFQ for Custom Packaging",
      description:
        "A practical guide to preparing a clear custom packaging RFQ with size, quantity, materials, inserts, finishes, shipping details and reference files.",
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
            <a href="/">Home</a> / <a href="/resources/">Resources</a> / RFQ Guide
          </p>
          <div className="mrb-hero-copy" style={{ maxWidth: 860 }}>
            <span className="mrb-eyebrow">BUYER GUIDE</span>
            <h1>How to Prepare an RFQ for Custom Packaging</h1>
            <p className="mrb-lead">
              A practical guide to preparing a clear custom packaging RFQ with
              size, quantity, materials, inserts, finishes, shipping details and
              reference files.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Article Content ---------- */}
      <section className="mrb-section">
        <div className="container mrb-article">
          <article className="mrb-article-main">
            <p>
              A clear RFQ helps suppliers quote faster and reduces
              back-and-forth before sampling.
            </p>

            <h2>10 Details to Include</h2>
            <div className="mrb-table-wrap">
              <table className="mrb-table">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>What to Provide</th>
                  </tr>
                </thead>
                <tbody>
                  {rfqItems.map((r) => (
                    <tr key={r.item}>
                      <td><b>{r.item}</b></td>
                      <td>{r.provide}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mrb-note">
              <b>Buyer Tip:</b> If you do not know the exact structure or
              material, send product dimensions and a reference image.
            </div>

            <h2>Why Reference Images Matter</h2>
            <p>
              They communicate opening style, proportion, finish and insert
              layout quickly.
            </p>

            <h2>Common RFQ Problems</h2>
            <ul>
              <li>No dimensions</li>
              <li>No quantity</li>
              <li>No destination</li>
              <li>Only asking for “best price”</li>
              <li>Conflicting size information</li>
            </ul>

            <h2>Fast RFQ Checklist</h2>
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
            <h2>Ready to Quote Your Packaging Project?</h2>
            <p>
              Upload reference images, provide size and quantity, and tell us
              your destination market.
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
