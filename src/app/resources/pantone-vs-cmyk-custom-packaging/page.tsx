/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL =
  "https://www.sorivapackaging.com/resources/pantone-vs-cmyk-custom-packaging/";

export const metadata: Metadata = {
  title: "Pantone vs CMYK for Custom Packaging | SORIVA Packaging",
  description:
    "A buyer guide to choosing Pantone or CMYK printing for custom packaging, with practical differences in color consistency, artwork and production.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Pantone vs CMYK for Custom Packaging | SORIVA Packaging",
    description:
      "A buyer guide to choosing Pantone or CMYK printing for custom packaging, with practical differences in color consistency, artwork and production.",
  },
};

const sidebarLinks = [
  { href: "/rfq/", label: "Request a Quote" },
  { href: "/products/", label: "Products" },
  { href: "/custom-packaging/", label: "Custom Packaging" },
  { href: "/factory/", label: "Factory" },
  { href: "/projects/", label: "Projects" },
  { href: "/resources/foil-stamping-vs-embossing-vs-spot-uv/", label: "Foil vs Emboss vs Spot UV" },
  { href: "/resources/how-to-reduce-custom-packaging-shipping-cost/", label: "Reduce Shipping Cost" },
];

const colorComparison = [
  { system: "CMYK", bestFor: "Full-color graphics, photos, gradients", advantage: "Efficient for multi-color artwork" },
  { system: "Pantone", bestFor: "Brand colors, logos, spot colors", advantage: "More controlled color targeting" },
];

const colorFactors = [
  "Paper color and texture",
  "Lamination",
  "Coated vs uncoated material",
  "Ink coverage",
  "Printing process",
];

const checklistItems = [
  "Confirm Pantone number if required",
  "Review physical paper",
  "Review printed proof",
  "Approve after lamination",
  "Keep an approved reference sample",
];

const faqs = [
  {
    q: "Is Pantone always more accurate than CMYK?",
    a: "Pantone is often preferred for controlled spot colors, but the best choice depends on artwork, paper and printing process.",
  },
  {
    q: "Should color be approved on a physical sample?",
    a: "For critical brand colors, physical approval is strongly recommended.",
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
          name: "Pantone vs CMYK for Custom Packaging",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Pantone vs CMYK for Custom Packaging",
      description:
        "A buyer guide to choosing Pantone or CMYK printing for custom packaging, with practical differences in color consistency, artwork and production.",
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
            <a href="/">Home</a> / <a href="/resources/">Resources</a> / Color Guide
          </p>
          <div className="mrb-hero-copy" style={{ maxWidth: 860 }}>
            <span className="mrb-eyebrow">BUYER GUIDE</span>
            <h1>Pantone vs CMYK for Custom Packaging</h1>
            <p className="mrb-lead">
              A buyer guide to choosing Pantone or CMYK printing for custom
              packaging, with practical differences in color consistency, artwork
              and production.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Article Content ---------- */}
      <section className="mrb-section">
        <div className="container mrb-article">
          <article className="mrb-article-main">
            <p>
              Color is one of the first things buyers notice on packaging, but
              Pantone and CMYK are designed for different printing goals.
            </p>

            <h2>Quick Comparison</h2>
            <div className="mrb-table-wrap">
              <table className="mrb-table">
                <thead>
                  <tr>
                    <th>Color System</th>
                    <th>Best For</th>
                    <th>Main Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  {colorComparison.map((r) => (
                    <tr key={r.system}>
                      <td><b>{r.system}</b></td>
                      <td>{r.bestFor}</td>
                      <td>{r.advantage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>When CMYK Makes Sense</h2>
            <p>
              CMYK is often suitable for photography, illustrations, gradients or
              artwork using many colors.
            </p>

            <h2>When Pantone Makes Sense</h2>
            <p>
              Pantone is useful when a specific brand color needs to be repeated
              more consistently across packaging.
            </p>

            <div className="mrb-note">
              <b>Buyer Tip:</b> For critical brand colors, provide a Pantone
              reference or approved physical sample rather than relying only on a
              screen image.
            </div>

            <h2>What Can Change Final Printed Color?</h2>
            <ul>
              {colorFactors.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>Color Approval Checklist</h2>
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
