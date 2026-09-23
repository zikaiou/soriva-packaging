/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL =
  "https://www.sorivapackaging.com/resources/custom-gift-box-sample-checklist/";

export const metadata: Metadata = {
  title:
    "Custom Gift Box Sample Checklist Before Mass Production | SORIVA Packaging",
  description:
    "A pre-production checklist for reviewing custom gift box samples, including size, structure, color, logo, insert fit, finishing and packing.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title:
      "Custom Gift Box Sample Checklist Before Mass Production | SORIVA Packaging",
    description:
      "A pre-production checklist for reviewing custom gift box samples, including size, structure, color, logo, insert fit, finishing and packing.",
  },
};

const sidebarLinks = [
  { href: "/rfq/", label: "Request a Quote" },
  { href: "/products/", label: "Products" },
  { href: "/custom-packaging/", label: "Custom Packaging" },
  { href: "/factory/", label: "Factory" },
  { href: "/projects/", label: "Projects" },
  { href: "/resources/how-to-prepare-custom-packaging-rfq/", label: "How to Prepare an RFQ" },
  { href: "/resources/packaging-inserts-eva-vs-paperboard-vs-molded-pulp/", label: "Packaging Inserts Guide" },
];

const checkRows = [
  { area: "Dimensions", check: "Measure against approved specification." },
  { area: "Product fit", check: "Confirm the real product fits and can be removed safely." },
  { area: "Structure", check: "Check magnetic closure, drawer action, lid fit or foldable assembly." },
  { area: "Color", check: "Compare with approved artwork or physical references." },
  { area: "Finishing", check: "Check foil, emboss/deboss, spot UV and lamination alignment." },
  { area: "Insert", check: "Review cutout size, depth, thickness and product stability." },
  { area: "Packing", check: "Confirm individual protection and master carton requirements." },
];

const approvalList = [
  "Dimensions approved",
  "Structure approved",
  "Color approved",
  "Logo approved",
  "Finish approved",
  "Insert fit approved",
  "Packing approved",
];

const faqs = [
  {
    q: "Should I approve color from a screen only?",
    a: "Physical samples or approved color references are safer.",
  },
  {
    q: "Should the actual product be tested in the sample?",
    a: "Yes, especially when insert fit matters.",
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
          name: "Custom Gift Box Sample Checklist Before Mass Production",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Custom Gift Box Sample Checklist Before Mass Production",
      description:
        "A pre-production checklist for reviewing custom gift box samples, including size, structure, color, logo, insert fit, finishing and packing.",
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
            <a href="/">Home</a> / <a href="/resources/">Resources</a> / Sample Checklist
          </p>
          <div className="mrb-hero-copy" style={{ maxWidth: 860 }}>
            <span className="mrb-eyebrow">BUYER GUIDE</span>
            <h1>Custom Gift Box Sample Checklist Before Mass Production</h1>
            <p className="mrb-lead">
              A pre-production checklist for reviewing custom gift box samples,
              including size, structure, color, logo, insert fit, finishing and
              packing.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Article Content ---------- */}
      <section className="mrb-section">
        <div className="container mrb-article">
          <article className="mrb-article-main">
            <p>
              A packaging sample should be reviewed as a production decision
              tool, not only as a visual mockup.
            </p>

            <h2>What to Check</h2>
            <div className="mrb-table-wrap">
              <table className="mrb-table">
                <thead>
                  <tr>
                    <th>Area</th>
                    <th>Check</th>
                  </tr>
                </thead>
                <tbody>
                  {checkRows.map((r) => (
                    <tr key={r.area}>
                      <td><b>{r.area}</b></td>
                      <td>{r.check}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mrb-note">
              <b>Buyer Tip:</b> Photograph or annotate the approved sample
              before mass production.
            </div>

            <h2>Final Approval Checklist</h2>
            <div className="mrb-note" style={{ background: "#faf8f4", borderLeftColor: "#c79a51" }}>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {approvalList.map((item) => (
                  <li key={item}>{item}</li>
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
