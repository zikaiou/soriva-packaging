/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL = "https://sorivapackaging.com/industries/cosmetic-packaging/";

export const metadata: Metadata = {
  title: "Custom Cosmetic Packaging Boxes Manufacturer",
  description:
    "Custom cosmetic packaging boxes from SORIVA Packaging: magnetic rigid boxes, drawer boxes and two-piece rigid boxes for skincare, makeup, beauty gift sets and sample kits. MOQ from 100 pcs, 1 pc prototype, 48-hour sample support.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Custom Cosmetic Packaging Boxes | SORIVA Packaging",
    description:
      "Luxury packaging solutions for beauty brands: premium rigid boxes, custom inserts and luxury finishes. MOQ from 100 pcs.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
    images: [
      {
        url: "https://sorivapackaging.com/img/cosmetics.webp",
        width: 1200,
        height: 900,
        alt: "Custom cosmetic packaging",
      },
    ],
  },
};

const pills = ["Custom Size", "Luxury Finishes", "Product Protection", "MOQ From 100 pcs"];

const reasons = [
  {
    title: "Premium Brand Presentation",
    desc: "Premium rigid structures that elevate the perceived value of your cosmetic products.",
  },
  {
    title: "Custom Inserts",
    desc: "EVA, velvet and paperboard inserts that hold bottles, jars and tubes securely.",
  },
  {
    title: "Luxury Finishes",
    desc: "Foil stamping, embossing, debossing and UV spot coating for distinctive branding.",
  },
  {
    title: "Flexible Production",
    desc: "MOQ from 100 pcs, 1 pc prototype and fast sample support for beauty brands.",
  },
];

const solutions = [
  {
    img: "/img/magnetic-rigid.webp",
    alt: "Magnetic rigid box",
    title: "Magnetic Rigid Boxes",
    slug: "magnetic-rigid-boxes",
  },
  {
    img: "/img/foldable-rigid.webp",
    alt: "Foldable magnetic rigid box",
    title: "Foldable Magnetic Rigid Boxes",
    slug: "foldable-magnetic-rigid-boxes",
  },
  {
    img: "/img/drawer-box.webp",
    alt: "Drawer box",
    title: "Drawer Boxes",
    slug: "drawer-boxes",
  },
  {
    img: "/img/two-piece-rigid.webp",
    alt: "Two piece rigid box",
    title: "Two-Piece Rigid Boxes",
    slug: "two-piece-rigid-boxes",
  },
];

const applications = [
  {
    img: "/img/project-skincare.webp",
    title: "Skincare Packaging",
  },
  {
    img: "/img/cosmetics.webp",
    title: "Makeup Packaging",
  },
  {
    img: "/img/project-gift-clean.webp",
    title: "Beauty Gift Sets",
  },
  {
    img: "/img/project-perfume.webp",
    title: "Luxury Sample Kits",
  },
];

const customOptions = [
  {
    title: "Materials",
    items: ["Specialty Paper", "Textured Paper", "Fabric"],
  },
  {
    title: "Inserts",
    items: ["EVA", "Velvet", "Paper"],
  },
  {
    title: "Finishes",
    items: ["Foil", "Emboss", "Deboss", "UV"],
  },
];

const stats = [
  { value: "10,000㎡", label: "Factory" },
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
        { "@type": "ListItem", position: 3, name: "Cosmetic Packaging", item: PAGE_URL },
      ],
    },
    {
      "@type": "ItemList",
      name: "Recommended Cosmetic Packaging Solutions",
      itemListElement: solutions.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.title,
        url: `https://sorivapackaging.com/products/${s.slug}/`,
      })),
    },
  ],
};

export default function CosmeticPackagingPage() {
  return (
    <main className="mrb-page">
      {/* Hero */}
      <section className="mrb-hero">
        <div className="container">
          <nav className="mrb-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a> / <a href="/#industries">Industries</a> / Cosmetic Packaging
          </nav>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">COSMETIC PACKAGING</span>
              <h1>Custom Cosmetic Packaging Boxes</h1>
              <p className="mrb-subtitle">
                Luxury Packaging Solutions For Beauty Brands
              </p>
              <p className="mrb-lead">
                Create premium cosmetic packaging that enhances brand image and
                improves the customer unboxing experience.
              </p>
              <div className="mrb-tags">
                {pills.map((p) => (
                  <span key={p}>{p}</span>
                ))}
              </div>
              <div className="mrb-hero-actions">
                <a href="/contact/" className="btn gold">
                  Get A Quote
                </a>
                <a
                  href={waLink(WA_MESSAGES.cosmetics)}
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
                src="/img/cosmetics.webp"
                alt="Custom cosmetic packaging"
                width="1200"
                height="900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">WHY SORIVA</span>
            <h2>Why Cosmetic Brands Choose SORIVA</h2>
          </div>
          <div className="mrb-features">
            {reasons.map((r, i) => (
              <article className="mrb-feature" key={r.title}>
                <strong>{String(i + 1).padStart(2, "0")}</strong>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended solutions */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">RECOMMENDED</span>
            <h2>Recommended Cosmetic Packaging Solutions</h2>
          </div>
          <div className="mrb-apps">
            {solutions.map((s) => (
              <a
                className="mrb-app"
                key={s.slug}
                href={`/products/${s.slug}/`}
                style={{ display: "block", color: "inherit", textDecoration: "none" }}
              >
                <img src={s.img} alt={s.alt} />
                <div>
                  <b>{s.title}</b>
                  <span style={{ color: "#c79a51", fontWeight: 600, marginTop: 6 }}>
                    View Details
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">APPLICATIONS</span>
            <h2>Cosmetic Packaging Applications</h2>
          </div>
          <div className="mrb-apps mrb-apps-3">
            {applications.map((a) => (
              <article className="mrb-app" key={a.title}>
                <img src={a.img} alt={a.title} />
                <div>
                  <b>{a.title}</b>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Customization options */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">CUSTOMIZATION</span>
            <h2>Customization Options</h2>
          </div>
          <div className="mrb-apps mrb-apps-3">
            {customOptions.map((c) => (
              <article className="mrb-app" key={c.title}>
                <div style={{ padding: "22px 24px" }}>
                  <b style={{ fontSize: 16, marginBottom: 10 }}>{c.title}</b>
                  {c.items.map((it) => (
                    <span
                      key={it}
                      style={{ display: "block", fontSize: 14, color: "#666", lineHeight: 1.9 }}
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Factory partner */}
      <section className="mrb-quote">
        <div className="container">
          <div className="mrb-head center" style={{ textAlign: "center" }}>
            <span className="mrb-eyebrow">YOUR RELIABLE PARTNER</span>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 3.4vw, 40px)", fontWeight: 500, lineHeight: 1.12, margin: "14px 0 22px", color: "#fff" }}>
              Your Reliable Packaging Partner
            </h2>
          </div>
          <div className="mrb-stats">
            {stats.map((s) => (
              <div className="mrb-stat" key={s.label} style={{ background: "#151515", borderColor: "#2a2a2a" }}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <div
            className="mrb-hero-actions"
            style={{ justifyContent: "center", marginTop: 30 }}
          >
            <a href="/contact/" className="btn gold">
              Get A Quote
            </a>
            <a
              href={waLink(WA_MESSAGES.cosmetics)}
              target="_blank"
              rel="noopener"
              className="btn-wa"
            >
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
          </div>
          <div className="mrb-contact" style={{ justifyContent: "center", marginTop: 28 }}>
            <div className="mrb-contact-note">
              <b>WhatsApp</b>
              <a href={waLink(WA_MESSAGES.cosmetics)} target="_blank" rel="noopener">
                +86 159 1388 1634
              </a>
            </div>
            <div className="mrb-contact-note">
              <b>Email</b>
              <a href="mailto:AMY@XINGYUE.STORE">AMY@XINGYUE.STORE</a>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  );
}
