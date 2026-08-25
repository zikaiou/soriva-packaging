/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../lib/whatsapp";
import "../products/product-page.css";

const PAGE_URL = "https://sorivapackaging.com/custom-packaging/";

export const metadata: Metadata = {
  title: "Custom Packaging Solutions Manufacturer",
  description:
    "Complete custom packaging solutions from SORIVA Packaging: structure design, material selection, prototyping, mass production and global delivery. MOQ from 100 pcs with 48H sample support.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Custom Packaging Solutions | SORIVA Packaging",
    description:
      "From concept to premium packaging production — structure design, materials, finishing and global delivery.",
    images: [
      {
        url: "https://sorivapackaging.com/img/foil-clean.webp",
        width: 1200,
        height: 630,
        alt: "Custom packaging solutions with gold foil",
      },
    ],
  },
};

const pills = [
  "Structural Design",
  "Material Selection",
  "Prototype Development",
  "Mass Production",
];

const processSteps = [
  { title: "Project Consultation", desc: "Product information, size, quantity and references." },
  { title: "Structure Development", desc: "Box style, opening method and insert design." },
  { title: "Material & Finishing", desc: "Paper, texture, foil and emboss options." },
  { title: "Prototype", desc: "1 pc prototype development." },
  { title: "Mass Production", desc: "Assembly, QC and packing." },
  { title: "Global Delivery", desc: "Sea, air and express shipping." },
];

const capabilities = [
  { title: "Box Structure", desc: "Magnetic / Drawer / Two-Piece / Foldable" },
  { title: "Materials", desc: "Specialty Paper / Texture Paper / Fabric" },
  { title: "Finishing", desc: "Foil / Emboss / Deboss / UV" },
  { title: "Inserts", desc: "EVA / Velvet / Paper" },
];

const industries = [
  { img: "/img/cosmetics.webp", alt: "Cosmetic packaging", title: "Cosmetic Packaging", href: "/industries/cosmetic-packaging/" },
  { img: "/img/perfume.webp", alt: "Perfume packaging", title: "Perfume Packaging", href: "/industries/perfume-packaging/" },
  { img: "/img/jewelry.webp", alt: "Jewelry packaging", title: "Jewelry Packaging", href: "/industries/jewelry-packaging/" },
  { img: "/img/fashion.webp", alt: "Fashion packaging", title: "Fashion Packaging", href: "/contact/" },
  { img: "/img/corporate.webp", alt: "Corporate gift packaging", title: "Corporate Gifts", href: "/contact/" },
  { img: "/img/candles.webp", alt: "Candle packaging", title: "Candle Packaging", href: "/contact/" },
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
        { "@type": "ListItem", position: 2, name: "Custom Packaging", item: PAGE_URL },
      ],
    },
    {
      "@type": "Service",
      name: "Custom Packaging Solutions",
      serviceType: "Custom packaging design and production",
      provider: { "@type": "Organization", name: "SORIVA Packaging" },
      areaServed: "Worldwide",
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
            <a href="/">Home</a> / Custom Packaging
          </p>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">CUSTOM SOLUTIONS</span>
              <h1>Custom Packaging Solutions</h1>
              <p className="mrb-subtitle">
                From Concept To Premium Packaging Production
              </p>
              <p className="mrb-lead">
                SORIVA provides complete custom packaging solutions from
                structure design, material selection, prototyping, production
                and global delivery.
              </p>
              <div className="mrb-tags">
                {pills.map((p) => (
                  <span key={p}>{p}</span>
                ))}
              </div>
              <div className="mrb-hero-actions">
                <a href="/contact/" className="btn gold">
                  Get a Quote
                </a>
                <a
                  href={waLink(WA_MESSAGES.custom)}
                  target="_blank"
                  rel="noopener"
                  className="btn-wa"
                >
                  <WhatsAppIcon /> Chat on WhatsApp
                </a>
              </div>
            </div>
            <div className="mrb-hero-media">
              <img
                src="/img/foil-clean.webp"
                alt="Custom packaging with gold foil finishing"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head">
            <span className="eyebrow dark">PROCESS</span>
            <h2>From Idea To Finished Packaging</h2>
            <p>
              A complete development flow managed by one dedicated team.
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

      {/* ---------- Capability ---------- */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head">
            <span className="eyebrow dark">CAPABILITY</span>
            <h2>Packaging Development Capability</h2>
            <p>
              In-house development across structure, materials, finishing and
              inserts.
            </p>
          </div>
          <div className="mrb-features">
            {capabilities.map((c, i) => (
              <div className="mrb-feature" key={c.title}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <b>{c.title}</b>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Industries ---------- */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head">
            <span className="eyebrow dark">INDUSTRIES</span>
            <h2>Industries We Serve</h2>
            <p>
              Custom packaging solutions for leading consumer categories.
            </p>
          </div>
          <div className="mrb-apps mrb-apps-3">
            {industries.map((i) => (
              <a className="mrb-app mrb-app-link" href={i.href} key={i.title}>
                <img src={i.img} alt={i.alt} loading="lazy" />
                <div>
                  <b>{i.title}</b>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Why choose ---------- */}
      <section className="mrb-section dark">
        <div className="container">
          <div className="mrb-head">
            <span className="mrb-eyebrow">WHY CHOOSE SORIVA</span>
            <h2>Why Choose SORIVA</h2>
            <p>
              Factory-direct custom packaging with flexible MOQ and fast
              development cycles.
            </p>
          </div>
          <div className="mrb-stats">
            {stats.map((s) => (
              <div key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <p className="mrb-moq-note">
            MOQ From 100 pcs · 1 Pc Prototype · 48H Sample · Global Export
          </p>
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
              href={waLink(WA_MESSAGES.custom)}
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
