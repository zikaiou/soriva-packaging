/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL =
  "https://sorivapackaging.com/resources/foldable-vs-traditional-rigid-box/";

export const metadata: Metadata = {
  title: "Foldable Rigid Boxes vs Traditional Rigid Boxes",
  description:
    "Compare foldable and traditional rigid boxes for presentation, storage, export packing and assembly.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Foldable Rigid Boxes vs Traditional Rigid Boxes | SORIVA Packaging",
    description:
      "Key differences in presentation, shipping form, warehouse space and assembly.",
  },
};

const sidebarLinks = [
  { href: "/products/", label: "All Products" },
  { href: "/products/magnetic-rigid-boxes/", label: "Magnetic Rigid Boxes" },
  { href: "/products/foldable-magnetic-rigid-boxes/", label: "Foldable Rigid Boxes" },
  { href: "/custom-packaging/", label: "Custom Packaging" },
  { href: "/factory/", label: "Factory" },
];

const compareRows = [
  ["Presentation", "Premium", "Premium"],
  ["Shipping Form", "Pre-assembled", "Flat packed"],
  ["Warehouse Space", "Higher", "More efficient before assembly"],
  ["Assembly", "None", "Required before packing"],
  ["Best Fit", "Local or premium presentation projects", "Export, e-commerce and distributed fulfillment"],
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sorivapackaging.com/" },
        { "@type": "ListItem", position: 2, name: "Resources", item: "https://sorivapackaging.com/resources/" },
        { "@type": "ListItem", position: 3, name: "Foldable vs Traditional Rigid Boxes", item: PAGE_URL },
      ],
    },
    {
      "@type": "Article",
      headline: "Foldable Rigid Boxes vs Traditional Rigid Boxes",
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
            <a href="/">Home</a> / <a href="/resources/">Resources</a> /
            Foldable vs Traditional
          </p>
          <div className="mrb-hero-copy" style={{ maxWidth: 860 }}>
            <span className="mrb-eyebrow">BUYER GUIDE</span>
            <h1>Foldable Rigid Boxes vs Traditional Rigid Boxes</h1>
            <p className="mrb-lead">
              Compare foldable and traditional rigid boxes for presentation,
              storage, export packing and assembly.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Article ---------- */}
      <section className="mrb-section">
        <div className="container mrb-article">
          <main className="mrb-article-main">
            <p>
              Traditional rigid boxes are delivered fully formed, while
              foldable rigid boxes use a collapsible structure that can be
              shipped flat and assembled before product packing. Both can
              deliver a premium appearance, but their logistics requirements
              differ.
            </p>
            <h2>Key Differences</h2>
            <table className="mrb-table">
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>Traditional Rigid Box</th>
                  <th>Foldable Rigid Box</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map(([f, t, fb]) => (
                  <tr key={f}>
                    <td>{f}</td>
                    <td>{t}</td>
                    <td>{fb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h2>When Foldable Boxes Make Sense</h2>
            <p>
              Foldable rigid boxes are especially useful when brands need
              luxury presentation but also want to use freight and warehouse
              space more efficiently.
            </p>
            <h2>When Traditional Rigid Boxes Make Sense</h2>
            <p>
              Traditional rigid boxes are a strong choice when immediate
              presentation and a fully assembled structure are the priorities.
            </p>
            <div className="mrb-note">
              <b>Buyer Tip:</b> Compare total logistics, warehouse and packing
              requirements—not only the unit box price.
            </div>
          </main>
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

      {/* ---------- Quote ---------- */}
      <section className="mrb-section dark">
        <div className="container">
          <div className="mrb-head">
            <span className="mrb-eyebrow">GET STARTED</span>
            <h2>Start Your Custom Packaging Project</h2>
            <p>
              MOQ from 100 pcs · 1 pc prototype available · fast sample support
              from 48 hours · global shipping.
            </p>
          </div>
          <div className="mrb-hero-actions" style={{ justifyContent: "center", marginTop: 28 }}>
            <a href="/contact/" className="btn gold">
              Get A Quote
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
