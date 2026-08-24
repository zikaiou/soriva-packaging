/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL =
  "https://sorivapackaging.com/resources/custom-packaging-cost-guide/";

export const metadata: Metadata = {
  title: "How Much Does Custom Luxury Packaging Cost?",
  description:
    "Learn the main factors that affect custom rigid box pricing, including structure, materials, inserts, finishes, quantity and shipping.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "How Much Does Custom Luxury Packaging Cost? | SORIVA Packaging",
    description:
      "The 7 main cost factors for custom rigid boxes and how to get an accurate quote.",
  },
};

const sidebarLinks = [
  { href: "/products/", label: "All Products" },
  { href: "/products/magnetic-rigid-boxes/", label: "Magnetic Rigid Boxes" },
  { href: "/products/foldable-magnetic-rigid-boxes/", label: "Foldable Rigid Boxes" },
  { href: "/custom-packaging/", label: "Custom Packaging" },
  { href: "/factory/", label: "Factory" },
];

const costFactors = [
  "Box dimensions",
  "Board thickness",
  "Surface paper",
  "Printing",
  "Foil or embossing",
  "Insert",
  "Quantity",
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sorivapackaging.com/" },
        { "@type": "ListItem", position: 2, name: "Resources", item: "https://sorivapackaging.com/resources/" },
        { "@type": "ListItem", position: 3, name: "Custom Packaging Cost Guide", item: PAGE_URL },
      ],
    },
    {
      "@type": "Article",
      headline: "How Much Does Custom Luxury Packaging Cost?",
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
            Cost Guide
          </p>
          <div className="mrb-hero-copy" style={{ maxWidth: 860 }}>
            <span className="mrb-eyebrow">PRICING</span>
            <h1>How Much Does Custom Luxury Packaging Cost?</h1>
            <p className="mrb-lead">
              Learn the main factors that affect custom rigid box pricing,
              including structure, materials, inserts, finishes, quantity and
              shipping.
            </p>
          </div>
        </div>
      </section>

      <section className="mrb-section">
        <div className="container mrb-article">
          <main className="mrb-article-main">
            <p>
              Custom packaging does not have one fixed price. The quotation
              changes with size, structure, material, finish and quantity.
            </p>
            <h2>7 Main Cost Factors</h2>
            <ol style={{ paddingLeft: 20, marginBottom: 18 }}>
              {costFactors.map((f, i) => (
                <li key={f} style={{ fontSize: 15, lineHeight: 1.7, marginBottom: 6 }}>
                  {f}
                </li>
              ))}
            </ol>
            <h2>For a More Accurate Quote</h2>
            <p>
              Provide product size, preferred structure, quantity, artwork or
              reference, destination and target delivery date.
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
