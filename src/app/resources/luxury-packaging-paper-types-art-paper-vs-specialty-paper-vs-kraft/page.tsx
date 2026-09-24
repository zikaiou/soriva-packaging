/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL =
  "https://www.sorivapackaging.com/resources/luxury-packaging-paper-types-art-paper-vs-specialty-paper-vs-kraft/";

export const metadata: Metadata = {
  title:
    "Luxury Packaging Paper Types: Art Paper vs Specialty Paper vs Kraft | SORIVA Packaging",
  description:
    "Compare art paper, specialty paper and kraft paper for custom luxury packaging, including printability, texture, finishing and brand presentation.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title:
      "Luxury Packaging Paper Types: Art Paper vs Specialty Paper vs Kraft | SORIVA Packaging",
    description:
      "Compare art paper, specialty paper and kraft paper for custom luxury packaging, including printability, texture, finishing and brand presentation.",
  },
};

const sidebarLinks = [
  { href: "/rfq/", label: "Request a Quote" },
  { href: "/products/", label: "Products" },
  { href: "/custom-packaging/", label: "Custom Packaging" },
  { href: "/factory/", label: "Factory" },
  { href: "/resources/rigid-greyboard-thickness-guide-custom-boxes/", label: "Greyboard Thickness Guide" },
  { href: "/resources/pantone-vs-cmyk-custom-packaging/", label: "Pantone vs CMYK" },
  { href: "/resources/foil-stamping-vs-embossing-vs-spot-uv/", label: "Foil vs Emboss vs Spot UV" },
  { href: "/resources/packaging-inserts-eva-vs-paperboard-vs-molded-pulp/", label: "Insert Comparison Guide" },
];

const paperComparison = [
  {
    type: "Art Paper",
    strengths: "Smooth print surface, strong color reproduction",
    uses: "Cosmetics, perfume, branded gift boxes",
  },
  {
    type: "Specialty Paper",
    strengths: "Texture, tactile feel, premium visual character",
    uses: "Luxury gifts, jewelry, premium collections",
  },
  {
    type: "Kraft Paper",
    strengths: "Natural appearance, strong paper identity",
    uses: "Minimal, natural or eco-positioned packaging",
  },
];

const finishConsiderations = [
  { finish: "Foil stamping", consideration: "Works well on many smooth and selected textured papers" },
  { finish: "Embossing", consideration: "Paper strength and texture affect the result" },
  { finish: "Spot UV", consideration: "Best contrast depends on surface and coating" },
  { finish: "Lamination", consideration: "Common on art paper and may alter tactile feel" },
];

const faqs = [
  {
    q: "Which paper is best for luxury packaging?",
    a: "There is no single best option. The choice depends on print, texture, brand style and finishing.",
  },
  {
    q: "Should paper color be approved physically?",
    a: "Yes. Physical samples are recommended for important brand colors and textures.",
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
          name: "Luxury Packaging Paper Types: Art Paper vs Specialty Paper vs Kraft",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline:
        "Luxury Packaging Paper Types: Art Paper vs Specialty Paper vs Kraft",
      description:
        "Compare art paper, specialty paper and kraft paper for custom luxury packaging, including printability, texture, finishing and brand presentation.",
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
            <a href="/">Home</a> / <a href="/resources/">Resources</a> / Paper Guide
          </p>
          <div className="mrb-hero-copy" style={{ maxWidth: 860 }}>
            <span className="mrb-eyebrow">BUYER GUIDE</span>
            <h1>
              Luxury Packaging Paper Types: Art Paper vs Specialty Paper vs Kraft
            </h1>
            <p className="mrb-lead">
              Compare art paper, specialty paper and kraft paper for custom
              luxury packaging, including printability, texture, finishing and
              brand presentation.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Article Content ---------- */}
      <section className="mrb-section">
        <div className="container mrb-article">
          <article className="mrb-article-main">
            <p>
              The outer wrap strongly affects how luxury packaging looks and
              feels. Art paper, specialty paper and kraft paper each serve
              different brand styles and finishing requirements.
            </p>

            <h2>Quick Comparison</h2>
            <div className="mrb-table-wrap">
              <table className="mrb-table">
                <thead>
                  <tr>
                    <th>Paper Type</th>
                    <th>Strengths</th>
                    <th>Common Uses</th>
                  </tr>
                </thead>
                <tbody>
                  {paperComparison.map((r) => (
                    <tr key={r.type}>
                      <td><b>{r.type}</b></td>
                      <td>{r.strengths}</td>
                      <td>{r.uses}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Art Paper</h2>
            <p>
              Suitable for full-color printing, gradients and highly controlled
              printed graphics.
            </p>

            <h2>Specialty Paper</h2>
            <p>
              Can include textured, pearlescent, embossed or colored stocks and
              often creates a premium feel with minimal printing.
            </p>

            <h2>Kraft Paper</h2>
            <p>
              Often chosen for a natural or understated look. The base paper
              color affects the final printed appearance.
            </p>

            <div className="mrb-note">
              <b>Buyer Tip:</b> Always review the actual paper sample. Texture,
              color and finishing behavior are difficult to judge accurately from
              a screen.
            </div>

            <h2>How Finishing Changes the Result</h2>
            <div className="mrb-table-wrap">
              <table className="mrb-table">
                <thead>
                  <tr>
                    <th>Finish</th>
                    <th>Paper Consideration</th>
                  </tr>
                </thead>
                <tbody>
                  {finishConsiderations.map((f) => (
                    <tr key={f.finish}>
                      <td><b>{f.finish}</b></td>
                      <td>{f.consideration}</td>
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
