/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../lib/whatsapp";
import "../products/product-page.css";

const PAGE_URL = "https://sorivapackaging.com/resources/";

export const metadata: Metadata = {
  title: "Packaging Resources & Buyer Guides",
  description:
    "Buyer guides about custom rigid boxes, foldable packaging and luxury cosmetic packaging from SORIVA Packaging.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Packaging Resources & Buyer Guides | SORIVA Packaging",
    description:
      "Practical guides to compare box structures, materials, inserts, finishes, sampling and production options.",
  },
};

const guides = [
  {
    tag: "Rigid Boxes",
    title: "What Is a Magnetic Rigid Box?",
    desc: "Learn how magnetic rigid boxes are built, what products they suit, and which finishes and inserts can be customized.",
    href: "/resources/magnetic-rigid-box-guide/",
  },
  {
    tag: "Foldable Packaging",
    title: "Foldable vs Traditional Rigid Boxes",
    desc: "Compare presentation, storage, export packing and assembly considerations before choosing a structure.",
    href: "/resources/foldable-vs-traditional-rigid-box/",
  },
  {
    tag: "Beauty Packaging",
    title: "How to Choose Cosmetic Packaging",
    desc: "A practical overview of box structures, inserts, finishes, MOQ and sampling for skincare and beauty brands.",
    href: "/resources/cosmetic-packaging-guide/",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sorivapackaging.com/" },
        { "@type": "ListItem", position: 2, name: "Resources", item: PAGE_URL },
      ],
    },
    {
      "@type": "ItemList",
      name: "Packaging Buyer Guides",
      itemListElement: guides.map((g, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: g.title,
        url: `https://sorivapackaging.com${g.href}`,
      })),
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
            <a href="/">Home</a> / Resources
          </p>
          <div className="mrb-hero-copy" style={{ maxWidth: 860 }}>
            <span className="mrb-eyebrow">PACKAGING RESOURCES</span>
            <h1>Buyer Guides for Custom Packaging</h1>
            <p className="mrb-lead">
              Practical guides to help brands compare box structures, materials,
              inserts, finishes, sampling and production options before starting
              a custom packaging project.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Guides ---------- */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head">
            <span className="eyebrow dark">RESOURCES</span>
            <h2>Buyer Guides</h2>
            <p>
              Free guides for brands planning their next custom packaging
              project.
            </p>
          </div>
          <div className="mrb-res-cards">
            {guides.map((g) => (
              <article className="mrb-res-card" key={g.href}>
                <small>{g.tag}</small>
                <h3>{g.title}</h3>
                <p>{g.desc}</p>
                <a href={g.href}>Read Guide →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Quote ---------- */}
      <section className="mrb-section dark">
        <div className="container">
          <div className="mrb-head">
            <span className="mrb-eyebrow">GET STARTED</span>
            <h2>Need Help Choosing a Packaging Structure?</h2>
            <p>
              Tell us your product size, target quantity and packaging idea.
              SORIVA can help compare structures and develop a prototype.
            </p>
          </div>
          <div className="mrb-hero-actions" style={{ justifyContent: "center", marginTop: 28 }}>
            <a href="/custom-packaging/" className="btn gold">
              Custom Packaging
            </a>
            <a
              href={waLink(WA_MESSAGES.resources)}
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
