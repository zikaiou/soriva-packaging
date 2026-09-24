/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL =
  "https://www.sorivapackaging.com/resources/foil-stamping-vs-embossing-vs-spot-uv/";

export const metadata: Metadata = {
  title: "Foil Stamping vs Embossing vs Spot UV | SORIVA Packaging",
  description:
    "Compare foil stamping, embossing and spot UV for luxury packaging, including appearance, tactile effect and common uses.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Foil Stamping vs Embossing vs Spot UV | SORIVA Packaging",
    description:
      "Compare foil stamping, embossing and spot UV for luxury packaging, including appearance, tactile effect and common uses.",
  },
};

const sidebarLinks = [
  { href: "/rfq/", label: "Request a Quote" },
  { href: "/products/", label: "Products" },
  { href: "/custom-packaging/", label: "Custom Packaging" },
  { href: "/factory/", label: "Factory" },
  { href: "/projects/", label: "Projects" },
  { href: "/resources/pantone-vs-cmyk-custom-packaging/", label: "Pantone vs CMYK Guide" },
  { href: "/resources/how-to-reduce-custom-packaging-shipping-cost/", label: "Reduce Shipping Cost" },
];

const finishComparison = [
  { finish: "Foil Stamping", visual: "Metallic or pigmented reflective detail", bestFor: "Logos, borders, highlights" },
  { finish: "Embossing", visual: "Raised tactile surface", bestFor: "Logos, patterns, texture" },
  { finish: "Spot UV", visual: "Gloss contrast on selected areas", bestFor: "Logos, patterns, black-on-black effects" },
];

const chooseGuide = [
  { goal: "Metallic luxury effect", consider: "Foil stamping" },
  { goal: "Tactile logo", consider: "Emboss or deboss" },
  { goal: "Gloss-on-matte contrast", consider: "Spot UV" },
  { goal: "Luxury logo with depth", consider: "Foil + emboss" },
];

const faqs = [
  {
    q: "Can foil stamping and embossing be combined?",
    a: "Yes. Foil plus embossing is commonly used for premium logos.",
  },
  {
    q: "Is spot UV suitable for matte black packaging?",
    a: "Yes. Gloss-on-matte contrast can create a subtle premium effect.",
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
          name: "Foil Stamping vs Embossing vs Spot UV",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Foil Stamping vs Embossing vs Spot UV",
      description:
        "Compare foil stamping, embossing and spot UV for luxury packaging, including appearance, tactile effect and common uses.",
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
            <a href="/">Home</a> / <a href="/resources/">Resources</a> / Finishing Guide
          </p>
          <div className="mrb-hero-copy" style={{ maxWidth: 860 }}>
            <span className="mrb-eyebrow">BUYER GUIDE</span>
            <h1>Foil Stamping vs Embossing vs Spot UV</h1>
            <p className="mrb-lead">
              Compare foil stamping, embossing and spot UV for luxury
              packaging, including appearance, tactile effect and common uses.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Article Content ---------- */}
      <section className="mrb-section">
        <div className="container mrb-article">
          <article className="mrb-article-main">
            <p>
              Foil stamping, embossing and spot UV are three common premium
              finishing techniques, but they create different visual and tactile
              effects.
            </p>

            <h2>Quick Comparison</h2>
            <div className="mrb-table-wrap">
              <table className="mrb-table">
                <thead>
                  <tr>
                    <th>Finish</th>
                    <th>Visual Effect</th>
                    <th>Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {finishComparison.map((r) => (
                    <tr key={r.finish}>
                      <td><b>{r.finish}</b></td>
                      <td>{r.visual}</td>
                      <td>{r.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Foil Stamping</h2>
            <p>
              Foil stamping uses heat and pressure to transfer foil onto the
              packaging surface.
            </p>

            <h2>Embossing and Debossing</h2>
            <p>
              Embossing raises the design; debossing presses it inward. Either
              can be used alone or with foil.
            </p>

            <h2>Spot UV</h2>
            <p>
              Spot UV creates gloss contrast on selected parts of a matte or
              uncoated surface.
            </p>

            <div className="mrb-note">
              <b>Buyer Tip:</b> One carefully chosen finish can look stronger
              than several competing effects.
            </div>

            <h2>Which Finish Should You Choose?</h2>
            <div className="mrb-table-wrap">
              <table className="mrb-table">
                <thead>
                  <tr>
                    <th>Goal</th>
                    <th>Often Consider</th>
                  </tr>
                </thead>
                <tbody>
                  {chooseGuide.map((r) => (
                    <tr key={r.goal}>
                      <td><b>{r.goal}</b></td>
                      <td>{r.consider}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
