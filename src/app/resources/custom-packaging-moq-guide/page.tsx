/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL =
  "https://sorivapackaging.com/resources/custom-packaging-moq-guide/";

export const metadata: Metadata = {
  title: "Custom Packaging MOQ: What Buyers Should Know",
  description:
    "Understand custom packaging minimum order quantities, what affects MOQ, and how brands can plan small and large production runs.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Custom Packaging MOQ: What Buyers Should Know | SORIVA Packaging",
    description:
      "What affects MOQ, SORIVA's 100 pcs starting point and how to plan production runs.",
  },
};

const sidebarLinks = [
  { href: "/products/", label: "All Products" },
  { href: "/products/magnetic-rigid-boxes/", label: "Magnetic Rigid Boxes" },
  { href: "/products/foldable-magnetic-rigid-boxes/", label: "Foldable Rigid Boxes" },
  { href: "/custom-packaging/", label: "Custom Packaging" },
  { href: "/factory/", label: "Factory" },
];

const moqFactors = [
  "Box complexity",
  "Custom paper and printing",
  "Foil and embossing",
  "Insert tooling",
  "Assembly requirements",
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sorivapackaging.com/" },
        { "@type": "ListItem", position: 2, name: "Resources", item: "https://sorivapackaging.com/resources/" },
        { "@type": "ListItem", position: 3, name: "Custom Packaging MOQ Guide", item: PAGE_URL },
      ],
    },
    {
      "@type": "Article",
      headline: "Custom Packaging MOQ: What Buyers Should Know",
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
            <a href="/">Home</a> / <a href="/resources/">Resources</a> / MOQ
            Guide
          </p>
          <div className="mrb-hero-copy" style={{ maxWidth: 860 }}>
            <span className="mrb-eyebrow">MOQ &amp; ORDERING</span>
            <h1>Custom Packaging MOQ: What Buyers Should Know</h1>
            <p className="mrb-lead">
              Understand custom packaging minimum order quantities, what
              affects MOQ, and how brands can plan small and large production
              runs.
            </p>
          </div>
        </div>
      </section>

      <section className="mrb-section">
        <div className="container mrb-article">
          <main className="mrb-article-main">
            <p>
              MOQ depends on structure, materials, printing, finishing and
              production setup.
            </p>
            <h2>What Affects MOQ?</h2>
            <ul>
              {moqFactors.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <h2>SORIVA Support</h2>
            <p>
              Selected projects can start from <b>100 pcs</b>. A{" "}
              <b>1 pc prototype</b> is available before mass production.
            </p>
            <div className="mrb-note">
              <b>Buyer Tip:</b> Small orders usually have a higher unit cost
              because setup costs are spread over fewer boxes.
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
