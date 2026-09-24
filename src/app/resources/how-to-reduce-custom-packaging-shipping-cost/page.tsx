/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL =
  "https://www.sorivapackaging.com/resources/how-to-reduce-custom-packaging-shipping-cost/";

export const metadata: Metadata = {
  title: "How to Reduce Custom Packaging Shipping Cost | SORIVA Packaging",
  description:
    "Practical ways to reduce custom packaging shipping cost through structure, dimensions, carton optimization and freight planning.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "How to Reduce Custom Packaging Shipping Cost | SORIVA Packaging",
    description:
      "Practical ways to reduce custom packaging shipping cost through structure, dimensions, carton optimization and freight planning.",
  },
};

const sidebarLinks = [
  { href: "/rfq/", label: "Request a Quote" },
  { href: "/products/", label: "Products" },
  { href: "/custom-packaging/", label: "Custom Packaging" },
  { href: "/factory/", label: "Factory" },
  { href: "/projects/", label: "Projects" },
  { href: "/resources/pantone-vs-cmyk-custom-packaging/", label: "Pantone vs CMYK Guide" },
  { href: "/resources/foil-stamping-vs-embossing-vs-spot-uv/", label: "Foil vs Emboss vs Spot UV" },
];

const cartonFactors = [
  { factor: "Units per carton", why: "Changes carton count and handling" },
  { factor: "Carton dimensions", why: "Affects volumetric freight" },
  { factor: "Protection level", why: "Must balance damage risk and volume" },
  { factor: "Flat-pack capability", why: "Can reduce unused internal space" },
];

const shippingMethods = [
  "Express for samples and small quantities",
  "Air freight for urgent commercial orders",
  "Sea freight for larger-volume shipments",
];

const checklistItems = [
  "Finished box size",
  "Flat-pack option",
  "Units per carton",
  "Master carton dimensions",
  "Total CBM",
  "Destination postcode",
  "Required delivery date",
];

const faqs = [
  {
    q: "Can foldable rigid boxes reduce shipping volume?",
    a: "They can for suitable structures because they may ship flat instead of fully assembled.",
  },
  {
    q: "Why is carton CBM important?",
    a: "CBM helps estimate sea freight volume and warehouse space.",
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
          name: "How to Reduce Custom Packaging Shipping Cost",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline: "How to Reduce Custom Packaging Shipping Cost",
      description:
        "Practical ways to reduce custom packaging shipping cost through structure, dimensions, carton optimization and freight planning.",
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
            <a href="/">Home</a> / <a href="/resources/">Resources</a> / Shipping Guide
          </p>
          <div className="mrb-hero-copy" style={{ maxWidth: 860 }}>
            <span className="mrb-eyebrow">BUYER GUIDE</span>
            <h1>How to Reduce Custom Packaging Shipping Cost</h1>
            <p className="mrb-lead">
              Practical ways to reduce custom packaging shipping cost through
              structure, dimensions, carton optimization and freight planning.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Article Content ---------- */}
      <section className="mrb-section">
        <div className="container mrb-article">
          <article className="mrb-article-main">
            <p>
              For international packaging orders, freight can become a major
              part of total landed cost. The best savings often come from
              reducing packaging volume before production begins.
            </p>

            <h2>1. Compare Rigid vs Foldable Structures</h2>
            <p>
              Traditional rigid boxes ship assembled, while foldable rigid boxes
              can ship flat. For suitable projects, this can reduce carton
              volume.
            </p>

            <h2>2. Optimize Finished Dimensions</h2>
            <p>
              Small reductions in unnecessary empty space can matter when
              multiplied across hundreds or thousands of units.
            </p>

            <h2>3. Review Master Carton Configuration</h2>
            <div className="mrb-table-wrap">
              <table className="mrb-table">
                <thead>
                  <tr>
                    <th>Factor</th>
                    <th>Why It Matters</th>
                  </tr>
                </thead>
                <tbody>
                  {cartonFactors.map((r) => (
                    <tr key={r.factor}>
                      <td><b>{r.factor}</b></td>
                      <td>{r.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>4. Understand Volumetric Weight</h2>
            <p>
              Air and express freight may charge based on volumetric weight
              rather than actual weight.
            </p>

            <h2>5. Choose the Right Shipping Method</h2>
            <ul>
              {shippingMethods.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>

            <div className="mrb-note">
              <b>Buyer Tip:</b> Ask for packed carton dimensions and total CBM
              before confirming production if freight cost is important.
            </div>

            <h2>Shipping Cost Checklist</h2>
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
