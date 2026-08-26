/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL =
  "https://sorivapackaging.com/resources/cosmetic-packaging-guide/";

export const metadata: Metadata = {
  title: "How to Choose Custom Cosmetic Packaging",
  description:
    "A buyer guide to cosmetic packaging structures, inserts, finishes, sampling and MOQ for beauty brands.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "How to Choose Custom Cosmetic Packaging | SORIVA Packaging",
    description:
      "Structures, inserts, finishes and sampling guidance for beauty brands.",
  },
};

const sidebarLinks = [
  { href: "/products/", label: "All Products" },
  { href: "/products/magnetic-rigid-boxes/", label: "Magnetic Rigid Boxes" },
  { href: "/products/foldable-magnetic-rigid-boxes/", label: "Foldable Rigid Boxes" },
  { href: "/custom-packaging/", label: "Custom Packaging" },
  { href: "/factory/", label: "Factory" },
];

const structureOptions = [
  ["Magnetic Rigid Boxes", "ideal for premium skincare and gift sets"],
  ["Foldable Magnetic Boxes", "useful for export-heavy brands"],
  ["Drawer Boxes", "strong for sets and layered presentation"],
  ["Two-Piece Rigid Boxes", "a classic option for beauty and retail gifting"],
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sorivapackaging.com/" },
        { "@type": "ListItem", position: 2, name: "Resources", item: "https://sorivapackaging.com/resources/" },
        { "@type": "ListItem", position: 3, name: "How to Choose Custom Cosmetic Packaging", item: PAGE_URL },
      ],
    },
    {
      "@type": "Article",
      headline: "How to Choose Custom Cosmetic Packaging",
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
            Cosmetic Packaging Guide
          </p>
          <div className="mrb-hero-copy" style={{ maxWidth: 860 }}>
            <span className="mrb-eyebrow">BUYER GUIDE</span>
            <h1>How to Choose Custom Cosmetic Packaging</h1>
            <p className="mrb-lead">
              A buyer guide to cosmetic packaging structures, inserts,
              finishes, sampling and MOQ for beauty brands.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Article ---------- */}
      <section className="mrb-section">
        <div className="container mrb-article">
          <main className="mrb-article-main">
            <p>
              Cosmetic packaging needs to balance product protection, brand
              presentation, insert fit and production cost. The right
              structure depends on the product format, sales channel and
              unboxing experience you want to create.
            </p>
            <h2>Choose the Box Structure First</h2>
            <ul>
              {structureOptions.map(([name, fit]) => (
                <li key={name}>
                  <b>{name}:</b> {fit}
                </li>
              ))}
            </ul>
            <h2>Plan the Insert Around the Product</h2>
            <p>
              Glass bottles, jars and serums often require a custom insert to
              control movement and protect the product. EVA, velvet,
              paperboard and molded pulp can be selected according to
              appearance, sustainability goals and budget.
            </p>
            <h2>Select Finishes That Support the Brand</h2>
            <p>
              Foil stamping, embossing, debossing, textured paper and spot UV
              can add visual hierarchy without overcomplicating the design.
            </p>
            <h2>Sampling Before Mass Production</h2>
            <p>
              A physical prototype helps verify fit, opening experience, color,
              logo placement and insert accuracy before bulk production.
            </p>
            <div className="mrb-note">
              <b>Buyer Tip:</b> Prepare product dimensions, quantity, artwork
              and target delivery date before requesting a quote.
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
