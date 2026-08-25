/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../lib/whatsapp";
import "./product-page.css";

const PAGE_URL = "https://sorivapackaging.com/products/";

export const metadata: Metadata = {
  title: "Custom Luxury Packaging Boxes",
  description:
    "Explore SORIVA custom magnetic rigid boxes, foldable rigid boxes, drawer boxes, two-piece boxes, tube packaging and luxury paper bags for premium brands.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Custom Luxury Packaging Solutions | SORIVA Packaging",
    description:
      "Premium rigid boxes and custom packaging solutions designed for global brands.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
    images: [
      {
        url: "https://sorivapackaging.com/img/magnetic-rigid.webp",
        width: 1200,
        height: 900,
        alt: "SORIVA custom luxury packaging",
      },
    ],
  },
};

const stats = [
  { value: "10,000㎡", label: "Factory" },
  { value: "400+", label: "Employees" },
  { value: "50M+", label: "Annual Capacity" },
  { value: "20 Years", label: "Experience" },
];

const products = [
  {
    img: "/img/magnetic-rigid.webp",
    alt: "Custom magnetic rigid box",
    title: "Magnetic Rigid Boxes",
    slug: "magnetic-rigid-boxes",
  },
  {
    img: "/img/foldable-rigid.webp",
    alt: "Custom foldable magnetic rigid box",
    title: "Foldable Magnetic Rigid Boxes",
    slug: "foldable-magnetic-rigid-boxes",
  },
  {
    img: "/img/drawer-box.webp",
    alt: "Custom drawer box",
    title: "Drawer Boxes",
    slug: "drawer-boxes",
  },
  {
    img: "/img/two-piece-rigid.webp",
    alt: "Custom two piece rigid box",
    title: "Two-Piece Rigid Boxes",
    slug: "two-piece-rigid-boxes",
  },
  {
    img: "/img/tube-packaging.webp",
    alt: "Custom tube packaging",
    title: "Tube Packaging",
    slug: "tube-packaging",
  },
  {
    img: "/img/paper-bags.webp",
    alt: "Custom luxury paper bags",
    title: "Luxury Paper Bags",
    slug: "luxury-paper-bags",
  },
];

const comparison = [
  { type: "Magnetic", bestFor: "Beauty, fragrance, gifts", advantage: "Premium unboxing" },
  { type: "Foldable Magnetic", bestFor: "Export, e-commerce", advantage: "Flat-pack efficiency" },
  { type: "Drawer", bestFor: "Jewelry, sets", advantage: "Sliding reveal" },
  { type: "Two-Piece", bestFor: "Cosmetics, gifting", advantage: "Classic premium structure" },
  { type: "Tube", bestFor: "Perfume, candles, tea", advantage: "Distinctive cylindrical format" },
  { type: "Paper Bags", bestFor: "Retail, gifting", advantage: "Completes brand system" },
];

const industries = [
  {
    img: "/img/cosmetics.webp",
    title: "Cosmetics Packaging",
    href: "/industries/cosmetic-packaging/",
  },
  {
    img: "/img/perfume.webp",
    title: "Perfume Packaging",
    href: "/industries/perfume-packaging/",
  },
  {
    img: "/img/jewelry.webp",
    title: "Jewelry Packaging",
    href: "/industries/jewelry-packaging/",
  },
  {
    img: "/img/fashion.webp",
    title: "Fashion Packaging",
    href: "/contact/",
  },
  {
    img: "/img/corporate.webp",
    title: "Corporate Gift Packaging",
    href: "/contact/",
  },
  {
    img: "/img/project-pr-clean.webp",
    title: "PR Packaging",
    href: "/contact/",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sorivapackaging.com/" },
        { "@type": "ListItem", position: 2, name: "Products", item: PAGE_URL },
      ],
    },
    {
      "@type": "ItemList",
      name: "SORIVA Packaging Products",
      itemListElement: products.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.title,
        url: `https://sorivapackaging.com/products/${p.slug}/`,
      })),
    },
  ],
};

export default function ProductsPage() {
  return (
    <main className="mrb-page">
      {/* Hero */}
      <section className="mrb-hero">
        <div className="container">
          <nav className="mrb-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a> / Products
          </nav>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">CUSTOM PACKAGING SOLUTIONS</span>
              <h1>Custom Luxury Packaging Solutions</h1>
              <p className="mrb-lead">
                Premium rigid boxes and custom packaging solutions designed for
                global brands.
              </p>
              <div className="mrb-hero-actions">
                <a href="/contact/" className="btn gold">
                  Get a Quote
                </a>
                <a
                  href={waLink(WA_MESSAGES.products)}
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
                src="/img/magnetic-rigid.webp"
                alt="SORIVA custom luxury packaging"
                width="1200"
                height="900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mrb-section" style={{ paddingTop: 34, paddingBottom: 34 }}>
        <div className="container">
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

      {/* Products */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">PRODUCT RANGE</span>
            <h2>Our Packaging Solutions</h2>
            <p>
              Custom structures developed around your product, brand and
              budget, with flexible MOQ and fast sampling.
            </p>
          </div>
          <div className="mrb-apps">
            {products.map((p) => (
              <a
                className="mrb-app"
                key={p.slug}
                href={`/products/${p.slug}/`}
                style={{ display: "block", color: "inherit", textDecoration: "none" }}
              >
                <img src={p.img} alt={p.alt} />
                <div>
                  <b>{p.title}</b>
                  <span style={{ color: "#c79a51", fontWeight: 600, marginTop: 6 }}>
                    View details →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">STRUCTURE GUIDE</span>
            <h2>Which Packaging Structure Fits Your Project?</h2>
          </div>
          <div className="mrb-table-wrap">
            <table className="mrb-table">
              <thead><tr><th>Type</th><th>Best For</th><th>Main Advantage</th></tr></thead>
              <tbody>{comparison.map((row) => <tr key={row.type}><td>{row.type}</td><td>{row.bestFor}</td><td>{row.advantage}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">INDUSTRIES</span>
            <h2>Packaging By Industry</h2>
          </div>
          <div className="mrb-apps mrb-apps-3">
            {industries.map((i) => (
              <a className="mrb-app mrb-app-link" href={i.href ?? "/contact/"} key={i.title}>
                <img src={i.img} alt={i.title} />
                <div>
                  <b>{i.title}</b>
                  <span className="mrb-app-cta">VIEW DETAILS →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose SORIVA */}
      <section className="mrb-quote">
        <div className="container">
          <div className="mrb-head center" style={{ textAlign: "center" }}>
            <span className="mrb-eyebrow">WHY CHOOSE SORIVA</span>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 3.4vw, 40px)", fontWeight: 500, lineHeight: 1.12, margin: "14px 0 12px", color: "#fff" }}>
              Custom Packaging, Delivered
            </h2>
            <p style={{ color: "#e8c98a", fontSize: 15, letterSpacing: "0.02em", margin: "0 auto 26px" }}>
              MOQ From 100 pcs &nbsp;|&nbsp; 1 Pc Prototype &nbsp;|&nbsp; 48H Sample
              &nbsp;|&nbsp; Global Shipping
            </p>
          </div>
          <div
            className="mrb-hero-actions"
            style={{ justifyContent: "center", marginTop: 8 }}
          >
            <a href="/contact/" className="btn gold">
              Get a Quote
            </a>
            <a
              href={waLink(WA_MESSAGES.products)}
              target="_blank"
              rel="noopener"
              className="btn-wa"
            >
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
          </div>
          <div className="mrb-contact" style={{ justifyContent: "center", marginTop: 30 }}>
            <div className="mrb-contact-note">
              <b>WhatsApp</b>
              <a href={waLink(WA_MESSAGES.products)} target="_blank" rel="noopener">
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
