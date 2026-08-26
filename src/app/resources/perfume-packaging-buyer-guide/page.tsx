/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL =
  "https://sorivapackaging.com/resources/perfume-packaging-buyer-guide/";

export const metadata: Metadata = {
  title: "How to Source Custom Perfume Packaging",
  description:
    "A sourcing guide for fragrance brands comparing rigid box structures, inserts, finishes, sampling and production for perfume packaging.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "How to Source Custom Perfume Packaging | SORIVA Packaging",
    description:
      "Structures, bottle protection, sampling and production guidance for fragrance brands.",
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
  "Magnetic rigid boxes",
  "Two-piece rigid boxes",
  "Drawer boxes",
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
        { "@type": "ListItem", position: 3, name: "Perfume Packaging Buyer Guide", item: PAGE_URL },
      ],
    },
    {
      "@type": "Article",
      headline: "How to Source Custom Perfume Packaging",
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
            Perfume Guide
          </p>
          <div className="mrb-hero-copy" style={{ maxWidth: 860 }}>
            <span className="mrb-eyebrow">PERFUME PACKAGING</span>
            <h1>How to Source Custom Perfume Packaging</h1>
            <p className="mrb-lead">
              A sourcing guide for fragrance brands comparing rigid box
              structures, inserts, finishes, sampling and production for
              perfume packaging.
            </p>
          </div>
        </div>
      </section>

      <section className="mrb-section">
        <div className="container mrb-article">
          <main className="mrb-article-main">
            <p>
              Perfume packaging must protect a glass bottle while creating a
              premium presentation.
            </p>
            <h2>Recommended Structures</h2>
            <ul>
              {structures.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <h2>Protecting the Bottle</h2>
            <p>
              EVA, velvet, paperboard and molded pulp inserts can be customized
              to secure the bottle.
            </p>
            <h2>Sampling</h2>
            <p>
              A prototype helps verify bottle fit, lid resistance, logo
              position and surface finish.
            </p>
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
