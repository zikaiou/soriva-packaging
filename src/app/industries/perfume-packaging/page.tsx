/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL = "https://sorivapackaging.com/industries/perfume-packaging/";

export const metadata: Metadata = {
  title: "Custom Perfume Packaging Boxes Manufacturer",
  description:
    "Custom perfume packaging boxes from SORIVA Packaging: magnetic boxes, drawer boxes and lid-and-base rigid boxes with EVA or velvet inserts, matte texture paper, foil and emboss finishes.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Custom Perfume Packaging Boxes | SORIVA Packaging",
    description:
      "Elegant custom perfume packaging with premium finishes, bottle protection inserts and MOQ from 100 pcs.",
    images: [
      {
        url: "https://sorivapackaging.com/img/perfume.webp",
        width: 1200,
        height: 630,
        alt: "Custom perfume packaging boxes",
      },
    ],
  },
};

const pills = [
  "Luxury Presentation",
  "Bottle Protection",
  "Premium Finishes",
  "MOQ From 100 pcs",
];

const recommendations = [
  {
    img: "/img/magnetic-rigid.webp",
    alt: "Magnetic rigid box for perfume",
    title: "Magnetic Rigid Boxes",
    desc: "Premium magnetic closure boxes for fragrance collections.",
    slug: "magnetic-rigid-boxes",
  },
  {
    img: "/img/foldable-rigid.webp",
    alt: "Foldable magnetic box for perfume",
    title: "Foldable Magnetic Boxes",
    desc: "Space-saving presentation boxes that ship flat.",
    slug: "foldable-magnetic-rigid-boxes",
  },
  {
    img: "/img/drawer-box.webp",
    alt: "Drawer box for perfume",
    title: "Drawer Boxes",
    desc: "Elegant sliding boxes for luxury fragrance reveals.",
    slug: "drawer-boxes",
  },
  {
    img: "/img/two-piece-rigid.webp",
    alt: "Two piece rigid box for perfume",
    title: "Two-Piece Rigid Boxes",
    desc: "Classic lid-and-base boxes for premium perfume sets.",
    slug: "two-piece-rigid-boxes",
  },
];

const customization = [
  {
    title: "Structure",
    items: ["Magnetic Box", "Drawer Box", "Lid & Base Box"],
  },
  {
    title: "Insert",
    items: ["EVA", "Velvet", "Paper Tray"],
  },
  {
    title: "Finish",
    items: ["Matte", "Texture Paper", "Foil", "Emboss"],
  },
];

const applications = [
  {
    img: "/img/perfume.webp",
    alt: "Eau de parfum box",
    title: "Eau De Parfum Boxes",
  },
  {
    img: "/img/project-gift-clean.webp",
    alt: "Perfume gift set box",
    title: "Gift Sets",
  },
  {
    img: "/img/project-perfume.webp",
    alt: "Perfume sample collection box",
    title: "Sample Collection Boxes",
  },
  {
    img: "/img/foil-clean.webp",
    alt: "Luxury fragrance collection box with gold foil",
    title: "Luxury Fragrance Collections",
  },
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
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://sorivapackaging.com/#industries" },
        { "@type": "ListItem", position: 3, name: "Perfume Packaging", item: PAGE_URL },
      ],
    },
    {
      "@type": "ItemList",
      name: "Recommended Perfume Packaging Solutions",
      itemListElement: recommendations.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.title,
        url: `https://sorivapackaging.com/products/${p.slug}/`,
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
            <a href="/">Home</a> / <a href="/#industries">Industries</a> / Perfume
            Packaging
          </p>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">PERFUME PACKAGING</span>
              <h1>Custom Perfume Packaging Boxes</h1>
              <p className="mrb-subtitle">
                Luxury Packaging Solutions For Fragrance Brands
              </p>
              <p className="mrb-lead">
                Create elegant perfume packaging that enhances product value and
                delivers a premium unboxing experience.
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
                  href={waLink(WA_MESSAGES.perfume)}
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
                src="/img/perfume.webp"
                alt="Custom perfume packaging boxes"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Recommended solutions ---------- */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head">
            <span className="eyebrow dark">RECOMMENDED SOLUTIONS</span>
            <h2>Recommended Perfume Packaging Solutions</h2>
            <p>
              Our most popular rigid box structures for fragrance brands, each
              available with custom inserts and finishes.
            </p>
          </div>
          <div className="mrb-apps">
            {recommendations.map((p) => (
              <a className="mrb-app mrb-app-link" href={`/products/${p.slug}/`} key={p.title}>
                <img src={p.img} alt={p.alt} loading="lazy" />
                <div>
                  <b>{p.title}</b>
                  <span>{p.desc}</span>
                  <em className="mrb-app-cta">VIEW DETAILS →</em>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Customization ---------- */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head">
            <span className="eyebrow dark">CUSTOMIZATION OPTIONS</span>
            <h2>Customization Options</h2>
            <p>
              Tailor structure, insert and finish to your fragrance brand
              identity.
            </p>
          </div>
          <div className="mrb-spec">
            {customization.map((c) => (
              <div className="mrb-spec-item" key={c.title}>
                <b>{c.title}</b>
                <p>{c.items.join(" / ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Applications ---------- */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head">
            <span className="eyebrow dark">APPLICATIONS</span>
            <h2>Perfume Packaging Applications</h2>
            <p>
              Packaging solutions designed for every fragrance product
              category.
            </p>
          </div>
          <div className="mrb-apps">
            {applications.map((a) => (
              <article className="mrb-app" key={a.title}>
                <img src={a.img} alt={a.alt} loading="lazy" />
                <div>
                  <b>{a.title}</b>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Factory trust ---------- */}
      <section className="mrb-section dark">
        <div className="container">
          <div className="mrb-head">
            <span className="mrb-eyebrow">PROFESSIONAL MANUFACTURER</span>
            <h2>Your Reliable Packaging Manufacturer</h2>
            <p>
              From structure design to mass production, SORIVA Packaging
              delivers consistent quality for global fragrance brands.
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
              href={waLink(WA_MESSAGES.perfume)}
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
