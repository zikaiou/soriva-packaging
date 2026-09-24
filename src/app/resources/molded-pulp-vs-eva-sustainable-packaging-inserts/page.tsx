/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL =
  "https://www.sorivapackaging.com/resources/molded-pulp-vs-eva-sustainable-packaging-inserts/";

export const metadata: Metadata = {
  title:
    "Molded Pulp vs EVA for Sustainable Packaging Inserts | SORIVA Packaging",
  description:
    "Compare molded pulp and EVA inserts for custom packaging, including protection, fit, presentation, sustainability considerations and sampling.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title:
      "Molded Pulp vs EVA for Sustainable Packaging Inserts | SORIVA Packaging",
    description:
      "Compare molded pulp and EVA inserts for custom packaging, including protection, fit, presentation, sustainability considerations and sampling.",
  },
};

const sidebarLinks = [
  { href: "/rfq/", label: "Request a Quote" },
  { href: "/products/", label: "Products" },
  { href: "/custom-packaging/", label: "Custom Packaging" },
  { href: "/factory/", label: "Factory" },
  { href: "/resources/packaging-inserts-eva-vs-paperboard-vs-molded-pulp/", label: "Insert Comparison Guide" },
  { href: "/resources/rigid-greyboard-thickness-guide-custom-boxes/", label: "Greyboard Thickness Guide" },
  { href: "/resources/luxury-packaging-paper-types-art-paper-vs-specialty-paper-vs-kraft/", label: "Paper Types Guide" },
  { href: "/resources/pantone-vs-cmyk-custom-packaging/", label: "Pantone vs CMYK" },
];

const insertComparison = [
  {
    insert: "Molded Pulp",
    strengths: "Fiber-based, molded protection, paper-like appearance",
    considerations: "Tooling, surface texture, dimensional tolerance",
  },
  {
    insert: "EVA",
    strengths: "Precise cutouts, strong support, premium presentation",
    considerations: "Foam material and disposal requirements",
  },
];

const decisionChecklist = [
  "Protection level",
  "Fit precision",
  "Presentation",
  "Material composition",
  "Prototype performance",
  "End-of-life requirements",
];

const faqs = [
  {
    q: "Is molded pulp always more sustainable than EVA?",
    a: "Not automatically. Sustainability depends on material composition, manufacturing, transport and local end-of-life options.",
  },
  {
    q: "Should insert protection be tested?",
    a: "Yes. A physical sample with the real product is the best way to confirm fit and protection.",
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
          name: "Molded Pulp vs EVA for Sustainable Packaging Inserts",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Molded Pulp vs EVA for Sustainable Packaging Inserts",
      description:
        "Compare molded pulp and EVA inserts for custom packaging, including protection, fit, presentation, sustainability considerations and sampling.",
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
            <a href="/">Home</a> / <a href="/resources/">Resources</a> / Sustainable Inserts
          </p>
          <div className="mrb-hero-copy" style={{ maxWidth: 860 }}>
            <span className="mrb-eyebrow">BUYER GUIDE</span>
            <h1>Molded Pulp vs EVA for Sustainable Packaging Inserts</h1>
            <p className="mrb-lead">
              Compare molded pulp and EVA inserts for custom packaging,
              including protection, fit, presentation, sustainability
              considerations and sampling.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Article Content ---------- */}
      <section className="mrb-section">
        <div className="container mrb-article">
          <article className="mrb-article-main">
            <p>
              Molded pulp and EVA are both used for product protection, but they
              differ in material feel, precision, appearance and end-of-life
              considerations.
            </p>

            <h2>Quick Comparison</h2>
            <div className="mrb-table-wrap">
              <table className="mrb-table">
                <thead>
                  <tr>
                    <th>Insert</th>
                    <th>Strengths</th>
                    <th>Considerations</th>
                  </tr>
                </thead>
                <tbody>
                  {insertComparison.map((r) => (
                    <tr key={r.insert}>
                      <td><b>{r.insert}</b></td>
                      <td>{r.strengths}</td>
                      <td>{r.considerations}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>When Molded Pulp May Be Suitable</h2>
            <p>
              It can work well when brands want a fiber-based insert with shaped
              protection.
            </p>

            <h2>When EVA May Be Suitable</h2>
            <p>
              EVA is often preferred for heavier, fragile or high-value products
              that require precise cutouts and strong positioning.
            </p>

            <div className="mrb-note">
              <b>Buyer Tip:</b> Do not choose an insert only by material image.
              Test the real product inside the prototype to confirm fit and
              protection.
            </div>

            <h2>Sustainability Claims Need Care</h2>
            <p>
              Material selection should be evaluated using actual composition,
              local recycling conditions and the complete packaging system.
              Avoid broad environmental claims that cannot be verified.
            </p>

            <h2>Insert Decision Checklist</h2>
            <div className="mrb-note" style={{ background: "#faf8f4", borderLeftColor: "#c79a51" }}>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {decisionChecklist.map((c) => (
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
            <span className="mrb-eyebrow">DISCUSS MATERIALS</span>
            <h2>Discuss Materials for Your Packaging Project</h2>
            <p>
              Send product dimensions, quantity and reference images so the
              right structure and materials can be reviewed.
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
