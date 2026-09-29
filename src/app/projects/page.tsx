/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../lib/whatsapp";
import "../products/product-page.css";

const PAGE_URL = "https://www.sorivapackaging.com/projects/";

export const metadata: Metadata = {
  title: "Custom Packaging Projects & Case Studies | SORIVA Packaging",
  description:
    "Explore SORIVA Packaging custom packaging projects for beauty, skincare, fragrance, jewelry, fashion and corporate gift brands — magnetic rigid boxes, foldable boxes, drawer boxes and luxury paper bags.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Custom Packaging Projects | SORIVA Packaging",
    description:
      "Real packaging projects developed for beauty, fragrance, jewelry, fashion and premium gift brands.",
    images: [
      {
        url: "https://www.sorivapackaging.com/img/hero-boxes.webp",
        width: 1200,
        height: 630,
        alt: "SORIVA Packaging projects",
      },
    ],
  },
};

const projects = [
  {
    img: "/img/foldable-rigid.webp",
    alt: "Foldable magnetic gift box project reference",
    slug: "foldable-magnetic-gift-box-project",
    title: "Foldable Magnetic Gift Box Project",
    fields: [
      ["Industry", "Luxury Retail & Gifting"],
      ["Packaging", "Foldable Magnetic Box"],
      ["Material", "Rigid Greyboard + Soft-Touch"],
      ["Finish", "Gold Foil + Matte Lamination"],
      ["Insert", "Custom-Cut Velvet EVA"],
    ],
  },
  {
    img: "/img/project-gift-clean.webp",
    alt: "Flat-pack corporate gift box project reference",
    slug: "flat-pack-corporate-gift-box-project",
    title: "Flat-Pack Corporate Gift Box Project",
    fields: [
      ["Industry", "Corporate Gifting & VIP"],
      ["Packaging", "Foldable Presentation Box"],
      ["Material", "Rigid Board + Black Wrap"],
      ["Finish", "Silver Foil + Matte Lamination"],
      ["Insert", "Multi-Compartment EVA"],
    ],
  },
  {
    img: "/img/magnetic-rigid.webp",
    alt: "Premium magnetic gift box project reference",
    slug: "premium-magnetic-gift-box-project",
    title: "Premium Magnetic Gift Box Project",
    fields: [
      ["Industry", "Luxury Gifting & VIP"],
      ["Packaging", "Book-Style Magnetic Box"],
      ["Material", "Rigid Greyboard + Specialty Paper"],
      ["Finish", "Gold Foil + Velvet Matte"],
      ["Insert", "Velvet-Covered EVA Insert"],
    ],
  },
  {
    img: "/img/project-skincare.webp",
    alt: "Cosmetic magnetic gift packaging project reference",
    slug: "cosmetic-magnetic-packaging-project",
    title: "Cosmetic Magnetic Packaging Project",
    fields: [
      ["Industry", "Beauty & Skincare"],
      ["Packaging", "Foldable Magnetic Box"],
      ["Material", "Rigid Greyboard + Art Paper"],
      ["Finish", "Rose Gold Foil + Soft-Touch"],
      ["Insert", "Multi-Cavity Bottle Insert"],
    ],
  },
  {
    img: "/img/sample-paperbag-ribbon-minimal.jpg",
    alt: "Minimal luxury paper bag project with satin ribbon handles",
    slug: "minimal-luxury-paper-bag-project",
    title: "Minimal Luxury Paper Bag Project",
    fields: [
      ["Industry", "Boutique Retail & Cosmetics"],
      ["Packaging", "Luxury Paper Shopping Bag"],
      ["Material", "250 GSM Coated Art Paper"],
      ["Finish", "Soft-Touch Matte + Gold Foil"],
      ["Handles", "Embedded Satin Ribbon"],
    ],
  },
  {
    img: "/img/sample-paperbag-matching-set.jpg",
    alt: "Coordinated luxury paper bag and rigid gift box packaging suite",
    slug: "coordinated-paper-bag-gift-box-packaging",
    title: "Coordinated Paper Bag & Gift Box Suite",
    fields: [
      ["Industry", "Luxury Gifting & Fragrance"],
      ["Packaging", "Matching Bag & Rigid Box Suite"],
      ["Material", "Rigid Greyboard + 250 GSM Bag"],
      ["Finish", "Pantone Matching + Gold Foil"],
      ["Insert", "Velvet-Covered EVA Insert"],
    ],
  },
  {
    img: "/img/project-skincare.webp",
    alt: "Luxury skincare gift box project",
    slug: "luxury-skincare-gift-box",
    title: "Luxury Skincare Gift Box Project",
    fields: [
      ["Industry", "Beauty & Skincare"],
      ["Packaging", "Foldable Magnetic Rigid Box"],
      ["Material", "Specialty Paper + Greyboard"],
      ["Finish", "Gold Foil + Emboss Logo"],
      ["Insert", "Custom EVA Insert"],
    ],
  },
  {
    img: "/img/project-perfume.webp",
    alt: "Premium perfume packaging project",
    slug: "premium-perfume-packaging",
    title: "Premium Perfume Packaging Project",
    fields: [
      ["Industry", "Fragrance"],
      ["Packaging", "Magnetic Rigid Box"],
      ["Finish", "Soft Touch Paper + Gold Foil"],
      ["Insert", "Velvet Insert"],
    ],
  },
  {
    img: "/img/project-jewelry.webp",
    alt: "Fine jewelry presentation box project",
    slug: "fine-jewelry-presentation-box",
    title: "Fine Jewelry Presentation Box Project",
    fields: [
      ["Industry", "Jewelry"],
      ["Packaging", "Drawer Box"],
      ["Structure", "Sliding Drawer"],
      ["Insert", "Velvet + EVA"],
    ],
  },
  {
    img: "/img/project-gift-clean.webp",
    alt: "Corporate luxury gift box project",
    slug: "corporate-luxury-gift-box",
    title: "Corporate Luxury Gift Box Project",
    fields: [
      ["Industry", "Corporate Gifts"],
      ["Packaging", "Two-Piece Rigid Box"],
      ["Application", "Premium Gift Collections"],
    ],
  },
];

const processSteps = [
  { title: "Structure Design", desc: "Tailored structure per product" },
  { title: "Prototype Development", desc: "1 pc prototype available" },
  { title: "Mass Production", desc: "From 100 pcs scalable volume" },
  { title: "Global Shipping", desc: "Air / Sea / Express" },
];

const stats = [
  { value: "10,000㎡", label: "Factory Area" },
  { value: "400+", label: "Employees" },
  { value: "50M+", label: "Annual Capacity" },
  { value: "20 Years", label: "Experience" },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sorivapackaging.com/" },
        { "@type": "ListItem", position: 2, name: "Projects", item: PAGE_URL },
      ],
    },
    {
      "@type": "ItemList",
      name: "Featured Packaging Projects",
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.title,
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
            <a href="/">Home</a> / Projects
          </p>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">CLIENT PROJECTS</span>
              <h1>Custom Packaging Projects</h1>
              <p className="mrb-subtitle">
                Luxury Packaging Solutions Developed For Global Brands
              </p>
              <p className="mrb-lead">
                Explore our custom packaging projects for beauty, fragrance,
                jewelry, fashion and premium gift brands.
              </p>
              <div className="mrb-hero-actions">
                <a href="#featured" className="btn gold">
                  View Projects
                </a>
                <a
                  href={waLink(WA_MESSAGES.projects)}
                  target="_blank"
                  rel="noopener"
                  className="btn-wa"
                >
                  <WhatsAppIcon /> Chat on WhatsApp
                </a>
                <a href="/rfq/" className="btn ghost">
                  Request Quote
                </a>
              </div>
            </div>
            <div className="mrb-hero-media">
              <img
                src="/img/hero-boxes.webp"
                alt="SORIVA Packaging custom projects"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Featured projects ---------- */}
      <section className="mrb-section" id="featured">
        <div className="container">
          <div className="mrb-head">
            <span className="eyebrow dark">FEATURED WORK</span>
            <h2>Featured Packaging Projects</h2>
            <p>
              A selection of custom packaging solutions delivered for global
              beauty, fragrance, jewelry, fashion and gift brands.
            </p>
          </div>
          <div className="mrb-cases">
            {projects.map((p) => (
              <article className="mrb-case" key={p.title}>
                <img src={p.img} alt={p.alt} loading="lazy" />
                <div className="mrb-case-body">
                  <h3>{p.title}</h3>
                  {p.fields.map(([k, v]) => (
                    <div className="row" key={k}>
                      <b>{k}</b>
                      <span>{v}</span>
                    </div>
                  ))}
                  <a className="mrb-case-cta" href={`/projects/${p.slug}/`}>View Case Study →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head">
            <span className="eyebrow dark">PROCESS</span>
            <h2>How We Deliver Custom Packaging</h2>
            <p>
              From structure development to sampling, mass production and
              global delivery.
            </p>
          </div>
          <div className="mrb-process">
            {processSteps.map((s, i) => (
              <div className="mrb-step" key={s.title}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <b>{s.title}</b>
                <small>{s.desc}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Factory & Stats ---------- */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">CAPABILITY</span>
            <h2>Factory-Direct Manufacturing</h2>
            <p>
              Complete in-house production with strict quality control.
            </p>
          </div>
          <div className="mrb-stats">
            {stats.map((s) => (
              <div className="mrb-stat" key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="mrb-quote">
        <div className="container mrb-quote-grid">
          <div>
            <span className="mrb-eyebrow">START A PROJECT</span>
            <h2>Have a Packaging Project in Mind?</h2>
            <p style={{ color: "#c5c5c5", lineHeight: 1.7, margin: "12px 0 16px" }}>
              Tell us your product size, quantity and material preferences.
              We will help review suitable structures and provide quotations.
            </p>
            <div className="mrb-contact">
              <div className="mrb-contact-note">
                <b>WhatsApp</b>
                <a
                  href={waLink(WA_MESSAGES.projects)}
                  target="_blank"
                  rel="noopener"
                >
                  +86 159 1388 1634
                </a>
              </div>
              <div className="mrb-contact-note">
                <b>Email</b>
                <a href="mailto:AMY@XINGYUE.STORE">AMY@XINGYUE.STORE</a>
              </div>
            </div>
            <a className="mrb-back" href="/products/foldable-magnetic-rigid-boxes/">
              Explore Foldable Magnetic Boxes →
            </a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, justifyContent: "center", alignItems: "flex-start" }}>
            <a href="/rfq/" className="btn gold" style={{ minWidth: 200, textAlign: "center" }}>
              Request Packaging Quote
            </a>
            <a
              href={waLink(WA_MESSAGES.projects)}
              target="_blank"
              rel="noopener"
              className="btn-wa"
              style={{ minWidth: 200 }}
            >
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
