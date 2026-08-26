/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL = "https://sorivapackaging.com/resources/magnetic-rigid-box-guide/";

export const metadata: Metadata = {
  title: "What Is a Magnetic Rigid Box?",
  description:
    "A practical guide to magnetic rigid box structure, materials, inserts, finishes, MOQ and applications.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "What Is a Magnetic Rigid Box? | SORIVA Packaging",
    description:
      "How magnetic rigid boxes are built, common applications and customization options.",
  },
};

const sidebarLinks = [
  { href: "/products/", label: "All Products" },
  { href: "/products/magnetic-rigid-boxes/", label: "Magnetic Rigid Boxes" },
  { href: "/products/foldable-magnetic-rigid-boxes/", label: "Foldable Rigid Boxes" },
  { href: "/custom-packaging/", label: "Custom Packaging" },
  { href: "/factory/", label: "Factory" },
];

const specRows = [
  ["Size", "Custom dimensions"],
  ["Surface", "Art paper, specialty paper, textured paper, fabric"],
  ["Finish", "Foil stamping, embossing, debossing, spot UV"],
  ["Insert", "EVA, velvet, paperboard, molded pulp"],
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sorivapackaging.com/" },
        { "@type": "ListItem", position: 2, name: "Resources", item: "https://sorivapackaging.com/resources/" },
        { "@type": "ListItem", position: 3, name: "What Is a Magnetic Rigid Box?", item: PAGE_URL },
      ],
    },
    {
      "@type": "Article",
      headline: "What Is a Magnetic Rigid Box?",
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
            <a href="/">Home</a> / <a href="/resources/">Resources</a> / Magnetic
            Rigid Box Guide
          </p>
          <div className="mrb-hero-copy" style={{ maxWidth: 860 }}>
            <span className="mrb-eyebrow">BUYER GUIDE</span>
            <h1>What Is a Magnetic Rigid Box?</h1>
            <p className="mrb-lead">
              A practical guide to magnetic rigid box structure, materials,
              inserts, finishes, MOQ and applications.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Article ---------- */}
      <section className="mrb-section">
        <div className="container mrb-article">
          <main className="mrb-article-main">
            <p>
              A magnetic rigid box is a premium paperboard box made with a
              thick rigid greyboard core and a hinged lid that closes with
              hidden magnets. It is commonly used when brands want a stronger
              structure and a more refined opening experience than a standard
              folding carton.
            </p>
            <h2>How a Magnetic Rigid Box Is Built</h2>
            <ul>
              <li>Rigid greyboard core for strength</li>
              <li>Custom wrapping or specialty paper</li>
              <li>Hidden magnetic closure</li>
              <li>Optional EVA, velvet, paperboard or molded pulp insert</li>
              <li>Custom printing and finishing</li>
            </ul>
            <h2>Common Applications</h2>
            <p>
              Magnetic rigid boxes are widely used for cosmetics, perfume,
              jewelry, watches, corporate gifts and premium product sets.
            </p>
            <h2>Customization Options</h2>
            <table className="mrb-table">
              <thead>
                <tr>
                  <th>Area</th>
                  <th>Common Options</th>
                </tr>
              </thead>
              <tbody>
                {specRows.map(([k, v]) => (
                  <tr key={k}>
                    <td>{k}</td>
                    <td>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mrb-note">
              <b>Buyer Tip:</b> Confirm your product dimensions and insert
              requirements before finalizing the outer box size.
            </div>
            <h2>MOQ, Sampling and Production</h2>
            <p>
              SORIVA supports selected projects from 100 pcs, 1 pc prototypes,
              fast sample support from 48 hours and fast production support
              from around 7 days depending on structure, material and
              finishing complexity.
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
