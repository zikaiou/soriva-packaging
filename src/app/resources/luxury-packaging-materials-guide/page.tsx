/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL =
  "https://sorivapackaging.com/resources/luxury-packaging-materials-guide/";

export const metadata: Metadata = {
  title: "Luxury Packaging Materials: A Buyer's Guide",
  description:
    "Compare greyboard, specialty paper, textured paper, fabric wraps and common insert materials used in premium custom packaging.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Luxury Packaging Materials: A Buyer's Guide | SORIVA Packaging",
    description:
      "Exterior and insert material options for premium custom packaging.",
  },
};

const sidebarLinks = [
  { href: "/products/", label: "All Products" },
  { href: "/products/magnetic-rigid-boxes/", label: "Magnetic Rigid Boxes" },
  { href: "/products/foldable-magnetic-rigid-boxes/", label: "Foldable Rigid Boxes" },
  { href: "/custom-packaging/", label: "Custom Packaging" },
  { href: "/factory/", label: "Factory" },
];

const exterior = [
  "Coated art paper",
  "Specialty paper",
  "Textured paper",
  "Fabric wrap",
];

const insertRows = [
  ["EVA", "Precise fit and bottles"],
  ["Velvet", "Jewelry and watches"],
  ["Paperboard", "Clean paper-based presentation"],
  ["Molded Pulp", "Protection and sustainability goals"],
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sorivapackaging.com/" },
        { "@type": "ListItem", position: 2, name: "Resources", item: "https://sorivapackaging.com/resources/" },
        { "@type": "ListItem", position: 3, name: "Luxury Packaging Materials Guide", item: PAGE_URL },
      ],
    },
    {
      "@type": "Article",
      headline: "Luxury Packaging Materials: A Buyer's Guide",
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

      <section className="mrb-hero">
        <div className="container">
          <p className="mrb-breadcrumb">
            <a href="/">Home</a> / <a href="/resources/">Resources</a> /
            Materials Guide
          </p>
          <div className="mrb-hero-copy" style={{ maxWidth: 860 }}>
            <span className="mrb-eyebrow">MATERIALS</span>
            <h1>Luxury Packaging Materials: A Buyer's Guide</h1>
            <p className="mrb-lead">
              Compare greyboard, specialty paper, textured paper, fabric wraps
              and common insert materials used in premium custom packaging.
            </p>
          </div>
        </div>
      </section>

      <section className="mrb-section">
        <div className="container mrb-article">
          <main className="mrb-article-main">
            <p>
              Luxury packaging normally combines a rigid structural core, an
              exterior wrap and an interior insert.
            </p>
            <h2>Exterior Materials</h2>
            <ul>
              {exterior.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
            <h2>Insert Materials</h2>
            <table className="mrb-table">
              <thead>
                <tr>
                  <th>Insert</th>
                  <th>Best For</th>
                </tr>
              </thead>
              <tbody>
                {insertRows.map(([k, v]) => (
                  <tr key={k}>
                    <td>{k}</td>
                    <td>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h2>Start With the Right Project Information</h2>
            <p>
              Prepare product dimensions, target quantity, preferred structure,
              artwork or reference images, insert requirement, destination and
              delivery timeline.
            </p>
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
              Get a Quote
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
