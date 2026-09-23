/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL =
  "https://www.sorivapackaging.com/resources/packaging-inserts-eva-vs-paperboard-vs-molded-pulp/";

export const metadata: Metadata = {
  title:
    "EVA vs Paperboard vs Molded Pulp Packaging Inserts | SORIVA Packaging",
  description:
    "Compare EVA, paperboard and molded pulp inserts for custom gift boxes, including protection, presentation and common applications.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title:
      "EVA vs Paperboard vs Molded Pulp Packaging Inserts | SORIVA Packaging",
    description:
      "Compare EVA, paperboard and molded pulp inserts for custom gift boxes, including protection, presentation and common applications.",
  },
};

const sidebarLinks = [
  { href: "/rfq/", label: "Request a Quote" },
  { href: "/products/", label: "Products" },
  { href: "/custom-packaging/", label: "Custom Packaging" },
  { href: "/factory/", label: "Factory" },
  { href: "/projects/", label: "Projects" },
  { href: "/resources/how-to-prepare-custom-packaging-rfq/", label: "How to Prepare an RFQ" },
  { href: "/resources/custom-gift-box-sample-checklist/", label: "Sample Approval Checklist" },
];

const insertComparison = [
  { insert: "EVA", strengths: "Precise cutouts and strong support", uses: "Perfume, cosmetics, electronics, premium sets" },
  { insert: "Paperboard", strengths: "Clean paper-based presentation", uses: "Skincare, cosmetics, retail sets" },
  { insert: "Molded Pulp", strengths: "Protective fiber-based form", uses: "Beauty, gifting, selected sustainability-focused packaging" },
];

const priorityGuidelines = [
  { priority: "High protection", consider: "EVA or molded pulp" },
  { priority: "Luxury jewelry/fragrance feel", consider: "Velvet-covered EVA" },
  { priority: "Paper-based presentation", consider: "Paperboard" },
  { priority: "Complex molded shape", consider: "Molded pulp" },
];

const faqs = [
  {
    q: "Which insert is best for perfume?",
    a: "EVA, velvet-covered EVA or molded pulp may be suitable depending on bottle weight and presentation.",
  },
  {
    q: "Should insert fit be sampled?",
    a: "Yes. Physical fit should be checked before bulk production.",
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
          name: "EVA vs Paperboard vs Molded Pulp Packaging Inserts",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline: "EVA vs Paperboard vs Molded Pulp Packaging Inserts",
      description:
        "Compare EVA, paperboard and molded pulp inserts for custom gift boxes, including protection, presentation and common applications.",
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
            <a href="/">Home</a> / <a href="/resources/">Resources</a> / Inserts Guide
          </p>
          <div className="mrb-hero-copy" style={{ maxWidth: 860 }}>
            <span className="mrb-eyebrow">BUYER GUIDE</span>
            <h1>EVA vs Paperboard vs Molded Pulp Packaging Inserts</h1>
            <p className="mrb-lead">
              Compare EVA, paperboard and molded pulp inserts for custom gift
              boxes, including protection, presentation and common applications.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Article Content ---------- */}
      <section className="mrb-section">
        <div className="container mrb-article">
          <article className="mrb-article-main">
            <p>
              The insert controls product fit, protection and presentation.
              EVA, paperboard and molded pulp serve different needs.
            </p>

            <h2>Quick Comparison</h2>
            <div className="mrb-table-wrap">
              <table className="mrb-table">
                <thead>
                  <tr>
                    <th>Insert</th>
                    <th>Strengths</th>
                    <th>Common Uses</th>
                  </tr>
                </thead>
                <tbody>
                  {insertComparison.map((r) => (
                    <tr key={r.insert}>
                      <td><b>{r.insert}</b></td>
                      <td>{r.strengths}</td>
                      <td>{r.uses}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Choosing the Right Insert</h2>
            <div className="mrb-table-wrap">
              <table className="mrb-table">
                <thead>
                  <tr>
                    <th>Priority</th>
                    <th>Often Consider</th>
                  </tr>
                </thead>
                <tbody>
                  {priorityGuidelines.map((r) => (
                    <tr key={r.priority}>
                      <td><b>{r.priority}</b></td>
                      <td>{r.consider}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mrb-note">
              <b>Buyer Tip:</b> Always send product dimensions and weight when
              requesting an insert recommendation.
            </div>

            <h2>Prototype Before Bulk</h2>
            <p>
              Insert fit should be checked with the real product whenever
              possible.
            </p>

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
