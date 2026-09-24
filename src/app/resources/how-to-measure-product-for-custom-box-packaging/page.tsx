/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL =
  "https://www.sorivapackaging.com/resources/how-to-measure-product-for-custom-box-packaging/";

export const metadata: Metadata = {
  title:
    "How to Measure a Product for Custom Box Packaging | SORIVA Packaging",
  description:
    "A practical buyer guide to measuring product dimensions for custom box packaging, including clearance, inserts, orientation and shipping considerations.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title:
      "How to Measure a Product for Custom Box Packaging | SORIVA Packaging",
    description:
      "A practical buyer guide to measuring product dimensions for custom box packaging, including clearance, inserts, orientation and shipping considerations.",
  },
};

const sidebarLinks = [
  { href: "/rfq/", label: "Request a Quote" },
  { href: "/products/", label: "Products" },
  { href: "/products/magnetic-rigid-boxes/", label: "Magnetic Rigid Boxes" },
  { href: "/products/drawer-boxes/", label: "Drawer Boxes" },
  { href: "/products/two-piece-rigid-boxes/", label: "Two-Piece Rigid Boxes" },
  { href: "/custom-packaging/", label: "Custom Packaging" },
  { href: "/resources/rigid-box-structure-guide-magnetic-vs-drawer-vs-two-piece/", label: "Box Structure Guide" },
  { href: "/resources/custom-gift-box-sample-checklist/", label: "Sample Checklist" },
  { href: "/resources/how-to-prepare-custom-packaging-rfq/", label: "RFQ Preparation Guide" },
];

const dimensionTable = [
  {
    measurement: "Length",
    record: "The longest horizontal dimension in the intended packing orientation.",
  },
  {
    measurement: "Width",
    record: "The side-to-side dimension perpendicular to length.",
  },
  {
    measurement: "Height",
    record: "The vertical dimension in the packed position.",
  },
  {
    measurement: "Weight",
    record: "Net product weight including accessories placed inside the same box.",
  },
];

const accessoryList = [
  "Charging cables",
  "Manuals & literature",
  "Brand cards & envelopes",
  "Replacement parts",
  "Bottles or refills",
  "Gift accessories",
];

const checklistItems = [
  "Product L × W × H (mm)",
  "Product weight",
  "Front / side / top photos with scale",
  "Accessory list",
  "Preferred presentation orientation",
  "Insert preference",
  "Target order quantity",
  "Destination market",
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
          name: "How to Measure a Product for Custom Box Packaging",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline: "How to Measure a Product for Custom Box Packaging",
      description:
        "A practical buyer guide to measuring product dimensions for custom box packaging, including clearance, inserts, orientation and shipping considerations.",
      author: { "@type": "Organization", name: "SORIVA Packaging" },
      publisher: { "@type": "Organization", name: "SORIVA Packaging" },
      mainEntityOfPage: PAGE_URL,
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
            <a href="/">Home</a> / <a href="/resources/">Resources</a> / Sizing Guide
          </p>
          <div className="mrb-hero-copy" style={{ maxWidth: 860 }}>
            <span className="mrb-eyebrow">BUYER GUIDE</span>
            <h1>How to Measure a Product for Custom Box Packaging</h1>
            <p className="mrb-lead">
              A practical buyer guide to measuring product dimensions for custom
              box packaging, including clearance, inserts, orientation and
              shipping considerations.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Article Content ---------- */}
      <section className="mrb-section">
        <div className="container mrb-article">
          <article className="mrb-article-main">
            <p>
              Accurate product dimensions are the starting point for a reliable
              custom box quotation. The supplier needs more than a rough product
              size because inserts, clearance and box structure all affect the
              final dimensions.
            </p>

            <h2>Start With L × W × H</h2>
            <p>
              Measure the product at its widest, deepest and tallest points. If
              the product has handles, caps, cables, accessories or irregular
              shapes, include those in the measurement.
            </p>

            <div className="mrb-table-wrap">
              <table className="mrb-table">
                <thead>
                  <tr>
                    <th>Measurement</th>
                    <th>What to Record</th>
                  </tr>
                </thead>
                <tbody>
                  {dimensionTable.map((r) => (
                    <tr key={r.measurement}>
                      <td><b>{r.measurement}</b></td>
                      <td>{r.record}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Do Not Make the Box Exactly the Same Size as the Product</h2>
            <p>
              Custom packaging normally requires clearance for inserts,
              wrapping materials, tolerances and easy product removal. The exact
              allowance depends on structure and insert type.
            </p>

            <div className="mrb-note">
              <b>Buyer Tip:</b> Send product photos with a ruler or dimension
              drawing whenever possible. This reduces misunderstanding when the
              product shape is irregular.
            </div>

            <h2>Consider Product Orientation</h2>
            <p>
              The same product can require a very different box depending on
              whether it lies flat, stands upright or is displayed at an angle.
              Orientation also affects insert design and shipping efficiency.
            </p>

            <h2>Include Accessories</h2>
            <ul>
              {accessoryList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>What to Send With Dimensions</h2>
            <div className="mrb-note" style={{ background: "#faf8f4", borderLeftColor: "#c79a51" }}>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {checklistItems.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
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
            <span className="mrb-eyebrow">PLAN YOUR CUSTOM BOX</span>
            <h2>Plan Your Custom Box Project</h2>
            <p>
              Send your product dimensions, quantity, reference images and
              destination so the right structure and sample plan can be reviewed.
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
