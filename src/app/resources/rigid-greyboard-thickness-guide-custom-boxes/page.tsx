/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL =
  "https://www.sorivapackaging.com/resources/rigid-greyboard-thickness-guide-custom-boxes/";

export const metadata: Metadata = {
  title: "Rigid Greyboard Thickness Guide for Custom Boxes | SORIVA Packaging",
  description:
    "A buyer guide to choosing greyboard thickness for custom rigid boxes, including structure, product weight, box size, durability and presentation considerations.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Rigid Greyboard Thickness Guide for Custom Boxes | SORIVA Packaging",
    description:
      "A buyer guide to choosing greyboard thickness for custom rigid boxes, including structure, product weight, box size, durability and presentation considerations.",
  },
};

const sidebarLinks = [
  { href: "/rfq/", label: "Request a Quote" },
  { href: "/products/", label: "Products" },
  { href: "/custom-packaging/", label: "Custom Packaging" },
  { href: "/factory/", label: "Factory" },
  { href: "/resources/packaging-inserts-eva-vs-paperboard-vs-molded-pulp/", label: "Insert Comparison Guide" },
  { href: "/resources/pantone-vs-cmyk-custom-packaging/", label: "Pantone vs CMYK" },
  { href: "/resources/luxury-packaging-paper-types-art-paper-vs-specialty-paper-vs-kraft/", label: "Paper Types Guide" },
  { href: "/resources/molded-pulp-vs-eva-sustainable-packaging-inserts/", label: "Molded Pulp vs EVA" },
];

const thicknessRanges = [
  {
    thickness: "1.0–1.5 mm",
    typical: "Smaller or lighter rigid structures",
    considerations: "Lower weight, less rigidity",
  },
  {
    thickness: "1.5–2.0 mm",
    typical: "General premium rigid boxes",
    considerations: "Balanced structure and weight",
  },
  {
    thickness: "2.0–2.5 mm",
    typical: "Larger boxes or heavier products",
    considerations: "Stronger feel, higher material weight",
  },
  {
    thickness: "2.5 mm+",
    typical: "Selected large-format or heavy-duty projects",
    considerations: "Requires structural review",
  },
];

const determiningFactors = [
  "Finished box dimensions",
  "Product weight",
  "Insert structure",
  "Opening style",
  "Shipping method",
  "Desired premium feel",
];

const checklistItems = [
  "Box size",
  "Product weight",
  "Insert type",
  "Structure",
  "Shipping method",
  "Target presentation",
];

const faqs = [
  {
    q: "Is 2 mm greyboard suitable for rigid gift boxes?",
    a: "It is commonly used for many rigid box projects, but the right thickness depends on size, structure and product weight.",
  },
  {
    q: "Does thicker greyboard always mean better quality?",
    a: "No. The structure should be matched to the project rather than simply maximizing thickness.",
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
          name: "Rigid Greyboard Thickness Guide for Custom Boxes",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Rigid Greyboard Thickness Guide for Custom Boxes",
      description:
        "A buyer guide to choosing greyboard thickness for custom rigid boxes, including structure, product weight, box size, durability and presentation considerations.",
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
            <a href="/">Home</a> / <a href="/resources/">Resources</a> / Greyboard Guide
          </p>
          <div className="mrb-hero-copy" style={{ maxWidth: 860 }}>
            <span className="mrb-eyebrow">BUYER GUIDE</span>
            <h1>Rigid Greyboard Thickness Guide for Custom Boxes</h1>
            <p className="mrb-lead">
              A buyer guide to choosing greyboard thickness for custom rigid
              boxes, including structure, product weight, box size, durability
              and presentation considerations.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Article Content ---------- */}
      <section className="mrb-section">
        <div className="container mrb-article">
          <article className="mrb-article-main">
            <p>
              Greyboard thickness affects rigidity, weight, cost and the overall
              feel of a rigid box. The right thickness depends on box size,
              product weight and structure.
            </p>

            <h2>Common Greyboard Thickness Ranges</h2>
            <div className="mrb-table-wrap">
              <table className="mrb-table">
                <thead>
                  <tr>
                    <th>Thickness</th>
                    <th>Typical Use</th>
                    <th>Considerations</th>
                  </tr>
                </thead>
                <tbody>
                  {thicknessRanges.map((r) => (
                    <tr key={r.thickness}>
                      <td><b>{r.thickness}</b></td>
                      <td>{r.typical}</td>
                      <td>{r.considerations}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>What Determines the Right Thickness?</h2>
            <ul>
              {determiningFactors.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <div className="mrb-note">
              <b>Buyer Tip:</b> A thicker board is not automatically better.
              Overspecifying thickness can add weight and shipping cost without
              improving performance.
            </div>

            <h2>Sampling Matters</h2>
            <p>
              The safest way to confirm board thickness is to review a physical
              sample with the real product inside whenever possible.
            </p>

            <h2>Thickness Selection Checklist</h2>
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
