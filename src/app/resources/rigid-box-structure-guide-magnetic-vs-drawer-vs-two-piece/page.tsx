/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL =
  "https://www.sorivapackaging.com/resources/rigid-box-structure-guide-magnetic-vs-drawer-vs-two-piece/";

export const metadata: Metadata = {
  title:
    "Rigid Box Structure Guide: Magnetic vs Drawer vs Two-Piece | SORIVA Packaging",
  description:
    "Compare magnetic rigid boxes, drawer boxes and two-piece rigid boxes by opening experience, presentation, packing efficiency and common applications.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title:
      "Rigid Box Structure Guide: Magnetic vs Drawer vs Two-Piece | SORIVA Packaging",
    description:
      "Compare magnetic rigid boxes, drawer boxes and two-piece rigid boxes by opening experience, presentation, packing efficiency and common applications.",
  },
};

const sidebarLinks = [
  { href: "/rfq/", label: "Request a Quote" },
  { href: "/products/", label: "Products" },
  { href: "/products/magnetic-rigid-boxes/", label: "Magnetic Rigid Boxes" },
  { href: "/products/drawer-boxes/", label: "Drawer Boxes" },
  { href: "/products/two-piece-rigid-boxes/", label: "Two-Piece Rigid Boxes" },
  { href: "/products/foldable-magnetic-rigid-boxes/", label: "Foldable Rigid Boxes" },
  { href: "/custom-packaging/", label: "Custom Packaging" },
  { href: "/resources/how-to-measure-product-for-custom-box-packaging/", label: "Product Measurement Guide" },
  { href: "/resources/custom-gift-box-sample-checklist/", label: "Sample Checklist" },
];

const structureComparison = [
  {
    structure: "Magnetic Rigid Box",
    opening: "Hinged or book-style opening with magnetic closure",
    suited: "Gift sets, cosmetics, luxury beauty, premium corporate gifts",
  },
  {
    structure: "Drawer Box",
    opening: "Sliding tray pulled from outer sleeve with ribbon or notch",
    suited: "Jewelry, beauty, accessories, compact luxury products",
  },
  {
    structure: "Two-Piece Rigid Box",
    opening: "Separate lid and base lift-off reveal",
    suited: "Classic luxury presentation, apparel, gifts, boxed sets",
  },
];

const checklistItems = [
  "Product size and weight",
  "Desired opening experience",
  "Insert requirement",
  "Retail display format",
  "Shipping volume and logistics plan",
  "Assembly requirement",
  "Target market and price tier",
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
          name: "Rigid Box Structure Guide: Magnetic vs Drawer vs Two-Piece",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline:
        "Rigid Box Structure Guide: Magnetic vs Drawer vs Two-Piece",
      description:
        "Compare magnetic rigid boxes, drawer boxes and two-piece rigid boxes by opening experience, presentation, packing efficiency and common applications.",
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
            <a href="/">Home</a> / <a href="/resources/">Resources</a> / Structure Guide
          </p>
          <div className="mrb-hero-copy" style={{ maxWidth: 860 }}>
            <span className="mrb-eyebrow">BUYER GUIDE</span>
            <h1>
              Rigid Box Structure Guide: Magnetic vs Drawer vs Two-Piece
            </h1>
            <p className="mrb-lead">
              Compare magnetic rigid boxes, drawer boxes and two-piece rigid
              boxes by opening experience, presentation, packing efficiency and
              common applications.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Article Content ---------- */}
      <section className="mrb-section">
        <div className="container mrb-article">
          <article className="mrb-article-main">
            <p>
              Magnetic, drawer and two-piece rigid boxes can all create a premium
              presentation, but the opening experience, production structure and
              packing efficiency are different.
            </p>

            <h2>Quick Comparison</h2>
            <div className="mrb-table-wrap">
              <table className="mrb-table">
                <thead>
                  <tr>
                    <th>Structure</th>
                    <th>Opening Experience</th>
                    <th>Best Suited For</th>
                  </tr>
                </thead>
                <tbody>
                  {structureComparison.map((r) => (
                    <tr key={r.structure}>
                      <td><b>{r.structure}</b></td>
                      <td>{r.opening}</td>
                      <td>{r.suited}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Magnetic Rigid Boxes</h2>
            <p>
              Magnetic structures are often selected when the buyer wants a
              strong unboxing moment and a presentation-style lid. Foldable
              magnetic constructions may also be considered when shipping volume
              is important.
            </p>

            <h2>Drawer Boxes</h2>
            <p>
              Drawer boxes create a sliding reveal and can be effective for
              compact products. Insert precision and sleeve fit are important
              because the tray needs to move smoothly.
            </p>

            <h2>Two-Piece Rigid Boxes</h2>
            <p>
              A lid-and-base structure offers a traditional luxury look and can
              work across many categories. Lid depth and fit should be confirmed
              during sampling.
            </p>

            <div className="mrb-note">
              <b>Buyer Tip:</b> Choose the structure based on product size,
              opening experience, insert requirements and shipping plan—not
              only appearance.
            </div>

            <h2>Which Structure Is More Shipping-Efficient?</h2>
            <p>
              Fully assembled rigid boxes occupy more space than flat structures.
              Foldable designs can improve packing density for suitable
              projects, but structure, assembly experience and brand presentation
              should still be evaluated together.
            </p>

            <h2>Structure Selection Checklist</h2>
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
