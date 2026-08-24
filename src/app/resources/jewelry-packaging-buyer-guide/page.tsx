/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL =
  "https://sorivapackaging.com/resources/jewelry-packaging-buyer-guide/";

export const metadata: Metadata = {
  title: "How to Choose Custom Jewelry Packaging",
  description:
    "A buyer guide for jewelry and watch brands comparing box structures, velvet and EVA inserts, finishes, MOQ and sampling.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "How to Choose Custom Jewelry Packaging | SORIVA Packaging",
    description:
      "Structures, inserts, finishes and sampling guidance for jewelry and watch brands.",
  },
};

const sidebarLinks = [
  { href: "/products/", label: "All Products" },
  { href: "/products/magnetic-rigid-boxes/", label: "Magnetic Rigid Boxes" },
  { href: "/products/foldable-magnetic-rigid-boxes/", label: "Foldable Rigid Boxes" },
  { href: "/custom-packaging/", label: "Custom Packaging" },
  { href: "/factory/", label: "Factory" },
];

const structures = [
  "Drawer boxes",
  "Two-piece rigid boxes",
  "Magnetic rigid boxes",
  "Foldable magnetic boxes",
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sorivapackaging.com/" },
        { "@type": "ListItem", position: 2, name: "Resources", item: "https://sorivapackaging.com/resources/" },
        { "@type": "ListItem", position: 3, name: "Jewelry Packaging Buyer Guide", item: PAGE_URL },
      ],
    },
    {
      "@type": "Article",
      headline: "How to Choose Custom Jewelry Packaging",
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
            Jewelry Guide
          </p>
          <div className="mrb-hero-copy" style={{ maxWidth: 860 }}>
            <span className="mrb-eyebrow">JEWELRY PACKAGING</span>
            <h1>How to Choose Custom Jewelry Packaging</h1>
            <p className="mrb-lead">
              A buyer guide for jewelry and watch brands comparing box
              structures, velvet and EVA inserts, finishes, MOQ and sampling.
            </p>
          </div>
        </div>
      </section>

      <section className="mrb-section">
        <div className="container mrb-article">
          <main className="mrb-article-main">
            <p>
              Jewelry packaging needs to create a premium impression while
              securely positioning small, high-value products.
            </p>
            <h2>Popular Structures</h2>
            <ul>
              {structures.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <h2>Insert Options</h2>
            <p>
              Velvet and EVA are common choices for rings, necklaces, bracelets
              and watches.
            </p>
            <div className="mrb-note">
              <b>Buyer Tip:</b> Send product dimensions when requesting a quote
              so the insert can be engineered correctly.
            </div>
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
