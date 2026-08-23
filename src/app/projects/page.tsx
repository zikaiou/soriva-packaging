/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../lib/whatsapp";
import "../products/product-page.css";

const PAGE_URL = "https://sorivapackaging.com/projects/";

export const metadata: Metadata = {
  title: "Custom Packaging Projects & Case Studies",
  description:
    "Explore SORIVA Packaging custom packaging projects for beauty, skincare, fragrance, jewelry and corporate gift brands — magnetic rigid boxes, foldable boxes, drawer boxes and two-piece rigid boxes with premium finishes.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Custom Packaging Projects | SORIVA Packaging",
    description:
      "Real packaging projects developed for beauty, fragrance, jewelry and premium gift brands.",
    images: [
      {
        url: "https://sorivapackaging.com/img/hero-boxes.webp",
        width: 1200,
        height: 630,
        alt: "SORIVA Packaging projects",
      },
    ],
  },
};

const projects = [
  {
    img: "/img/project-skincare.webp",
    alt: "Luxury skincare gift box project",
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
  { title: "Mass Production", desc: "From 100 pcs, 7-day cycle" },
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
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sorivapackaging.com/" },
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
                jewelry and premium gift brands.
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
                <a href="/contact/" className="btn ghost">
                  Get a Quote
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
              beauty, fragrance, jewelry and gift brands.
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
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- From concept to production ---------- */}
      <section className="mrb-section dark">
        <div className="container">
          <div className="mrb-head">
            <span className="mrb-eyebrow">WORKFLOW</span>
            <h2>From Concept To Production</h2>
            <p>
              A streamlined process from first sketch to delivered packaging.
            </p>
          </div>
          <div className="mrb-process mrb-process-4">
            {processSteps.map((s, i) => (
              <div className="mrb-step" key={s.title}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <b>{s.title}</b>
                <small>{s.desc}</small>
              </div>
            ))}
          </div>
          <div className="mrb-stats">
            {stats.map((s) => (
              <div key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <div className="mrb-contact">
            <span>
              <b>WhatsApp</b> +86 159 1388 1634
            </span>
            <span>
              <b>Email</b> AMY@XINGYUE.STORE
            </span>
          </div>
          <div className="mrb-hero-actions" style={{ justifyContent: "center", marginTop: 28 }}>
            <a href="/contact/" className="btn gold">
              Get a Quote
            </a>
            <a
              href={waLink(WA_MESSAGES.projects)}
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
