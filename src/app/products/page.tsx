/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import ProductBuyerGuides from "../components/ProductBuyerGuides";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../lib/whatsapp";
import "./product-page.css";

const PAGE_URL = "https://www.sorivapackaging.com/products/";

export const metadata: Metadata = {
  title: { absolute: "Custom Luxury Packaging Boxes Manufacturer | SORIVA Packaging" },
  description:
    "Explore custom magnetic rigid boxes, foldable boxes, drawer boxes, two-piece boxes, tube packaging and luxury paper bags for premium brand packaging projects.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title:       "Custom Luxury Packaging Boxes Manufacturer | SORIVA Packaging",
    description:
      "Explore custom magnetic rigid boxes, foldable boxes, drawer boxes, two-piece boxes, tube packaging and luxury paper bags for premium brand packaging projects.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
    images: [
      {
        url: "https://www.sorivapackaging.com/img/magnetic-rigid.webp",
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
    buyerNote: "Premium hinged rigid boxes with magnetic closure for fragrance, beauty and gift presentation.",
  },
  {
    img: "/img/foldable-rigid.webp",
    alt: "Custom foldable magnetic rigid box",
    title: "Foldable Magnetic Rigid Boxes",
    slug: "foldable-magnetic-rigid-boxes",
    buyerNote: "Flat-pack rigid structures for projects where storage and export efficiency matter.",
  },
  {
    img: "/img/drawer-box.webp",
    alt: "Custom drawer box",
    title: "Drawer Boxes",
    slug: "drawer-boxes",
    buyerNote: "Sliding tray packaging for jewelry, cosmetics, accessories and curated gift sets.",
  },
  {
    img: "/img/two-piece-rigid.webp",
    alt: "Custom two piece rigid box",
    title: "Two-Piece Rigid Boxes",
    slug: "two-piece-rigid-boxes",
    buyerNote: "Classic lid-and-base rigid presentation boxes with optional shoulder-neck structures.",
  },
  {
    img: "/img/tube-packaging.webp",
    alt: "Custom tube packaging",
    title: "Tube Packaging",
    slug: "tube-packaging",
    buyerNote: "Cylindrical paper packaging for perfume, cosmetics, candles and premium gift products.",
  },
  {
    img: "/img/paper-bags.webp",
    alt: "Custom luxury paper bags",
    title: "Luxury Paper Bags",
    slug: "luxury-paper-bags",
    buyerNote: "Branded retail bags with custom paper, handles, printing and coordinated finishing.",
  },
];

const buyingPaths = [
  { title: "Perfume Magnetic Packaging", desc: "Rigid magnetic presentation structures for fragrance projects.", href: "/solutions/magnetic-rigid-boxes-for-perfume/" },
  { title: "Foldable Corporate Gift Boxes", desc: "Flat-pack premium structures for corporate gifting programs.", href: "/solutions/foldable-magnetic-boxes-for-corporate-gifts/" },
  { title: "Jewelry Drawer Packaging", desc: "Explore jewelry packaging requirements and presentation formats.", href: "/industries/jewelry-packaging/" },
  { title: "Two-Piece Jewelry Boxes", desc: "Lid-and-base rigid boxes for jewelry and premium accessories.", href: "/solutions/two-piece-rigid-boxes-for-jewelry/" },
  { title: "Perfume Tube Packaging", desc: "Cylindrical paper tube structures for fragrance packaging.", href: "/solutions/tube-packaging-for-perfume/" },
  { title: "Paper Bags + Gift Boxes", desc: "Coordinate branded shopping bags with matching rigid packaging.", href: "/solutions/custom-paper-bags-with-matching-gift-boxes/" },
];

const visualCatalog = [
  { img: "/img/magnetic-rigid.webp", alt: "Custom magnetic rigid gift box", category: "Magnetic", title: "Magnetic Rigid Box" },
  { img: "/img/magnetic-rigid-box-satin-lining-sample.png", alt: "Magnetic rigid box with satin lining reference", category: "Magnetic", title: "Satin Lining Reference" },
  { img: "/img/magnetic-rigid-box-brown-textured-sample.png", alt: "Brown textured magnetic rigid box reference", category: "Magnetic", title: "Textured Paper Reference" },
  { img: "/img/foldable-rigid.webp", alt: "Custom foldable magnetic rigid box", category: "Foldable", title: "Foldable Magnetic Box" },
  { img: "/img/foldable-magnetic-box-structure-reference.png", alt: "Foldable magnetic rigid box structure reference", category: "Foldable", title: "Flat-Pack Structure" },
  { img: "/img/foldable-magnetic-box-customization-options.png", alt: "Foldable magnetic box customization reference", category: "Foldable", title: "Customization Reference" },
  { img: "/img/drawer-box.webp", alt: "Custom rigid drawer box", category: "Drawer", title: "Rigid Drawer Box" },
  { img: "/img/drawer-box-jewelry-application.png", alt: "Drawer box jewelry application reference", category: "Drawer", title: "Jewelry Application" },
  { img: "/img/drawer-box-minimal-structure-reference.png", alt: "Minimal drawer box structure reference", category: "Drawer", title: "Minimal Structure" },
  { img: "/img/two-piece-rigid.webp", alt: "Custom two-piece rigid box", category: "Two-Piece", title: "Lid & Base Box" },
  { img: "/img/two-piece-rigid-box-shoulder-neck-reference.png", alt: "Shoulder-neck rigid box structure reference", category: "Two-Piece", title: "Shoulder-Neck Structure" },
  { img: "/img/two-piece-rigid-box-perfume-application.png", alt: "Two-piece rigid perfume packaging reference", category: "Two-Piece", title: "Perfume Application" },
  { img: "/img/tube-packaging.webp", alt: "Custom paper tube packaging", category: "Tube", title: "Paper Tube Packaging" },
  { img: "/img/tube-packaging-black-gold-reference.jpg", alt: "Black and gold paper tube packaging reference", category: "Tube", title: "Premium Tube Reference" },
  { img: "/img/tube-packaging-various-styles-reference.jpg", alt: "Various paper tube packaging styles", category: "Tube", title: "Tube Style Reference" },
  { img: "/img/paper-bags.webp", alt: "Custom luxury paper bags", category: "Paper Bags", title: "Luxury Paper Bags" },
  { img: "/img/sample-paperbag-ribbon-minimal.jpg", alt: "Ribbon handle paper bag sample reference", category: "Paper Bags", title: "Ribbon Handle Reference" },
  { img: "/img/sample-paperbag-matching-set.jpg", alt: "Coordinated paper bag and packaging set reference", category: "Paper Bags", title: "Coordinated Packaging Set" },
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
    href: "/industries/fashion-packaging/",
  },
  {
    img: "/img/corporate.webp",
    title: "Corporate Gift Packaging",
    href: "/industries/corporate-gift-packaging/",
  },
  {
    img: "/img/candles.webp",
    title: "Candle Packaging",
    href: "/industries/candle-packaging/",
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
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sorivapackaging.com/" },
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
        url: `https://www.sorivapackaging.com/products/${p.slug}/`,
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
                  Get A Quote
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
              budget, with flexible MOQ and sampling support. Sample timing depends on structure, materials, finishing and project requirements.
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
                  <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.55, color: "#5b554e" }}>
                    {p.buyerNote}
                  </p>
                  <span style={{ color: "#c79a51", fontWeight: 600, marginTop: 8 }}>
                    View Details
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer Paths */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">SHOP BY BUYING NEED</span>
            <h2>Start With Your Product or Packaging Goal</h2>
            <p>Use these focused paths to move from a packaging structure to a more specific industry or sourcing solution.</p>
          </div>
          <div className="mrb-apps mrb-apps-3">
            {buyingPaths.map((item) => (
              <a className="mrb-app mrb-app-link" href={item.href} key={item.href}>
                <div>
                  <b>{item.title}</b>
                  <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.55, color: "#5b554e" }}>{item.desc}</p>
                  <span className="mrb-app-cta">Explore Solution</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Catalog */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">PACKAGING VISUAL CATALOG</span>
            <h2>Explore Structures, Applications &amp; Finishes</h2>
            <p>A visual reference library across our six core packaging categories. Reference images illustrate structure, application and customization directions rather than confirmed customer projects unless stated otherwise.</p>
          </div>
          <div className="mrb-apps mrb-apps-3">
            {visualCatalog.map((item) => (
              <figure className="mrb-app" key={item.img} style={{ margin: 0 }}>
                <img src={item.img} alt={item.alt} loading="lazy" />
                <figcaption>
                  <span style={{ color: "#c79a51", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>{item.category}</span>
                  <b style={{ display: "block", marginTop: 6 }}>{item.title}</b>
                </figcaption>
              </figure>
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
                  <span className="mrb-app-cta">View Details</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer Guides */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center"><span className="eyebrow dark">NEXT STEPS</span><h2>From Product Selection to RFQ</h2><p>Compare the six product categories, review factory capability and prepare a practical sourcing brief.</p><div className="mrb-hero-actions" style={{ justifyContent: "center" }}><a className="btn ghost" href="/custom-packaging/">Custom Packaging System →</a><a className="btn ghost" href="/factory/">Factory Verification →</a><a className="btn ghost" href="/resources/">Buyer Resources →</a><a className="btn gold" href="/rfq/">Request a Packaging Quote →</a></div></div>
        </div>
      </section>

      <ProductBuyerGuides
        title="Packaging Sourcing, Cost & Planning Guides"
        subtitle="Practical guides on packaging cost components, MOQ economics, inventory planning and structure comparison."
        guides={[
          {
            tag: "Cost Breakdown",
            title: "Custom Packaging Cost Breakdown: What Buyers Are Paying For",
            desc: "Understand the main cost drivers in custom packaging, including materials, structure, printing, finishing and freight.",
            href: "/resources/custom-packaging-cost-breakdown/",
          },
          {
            tag: "MOQ & Pricing",
            title: "How Custom Packaging MOQ Affects Unit Cost",
            desc: "A buyer guide to understanding how MOQ affects unit cost, setup cost allocation and production efficiency.",
            href: "/resources/how-custom-packaging-moq-affects-unit-cost/",
          },
          {
            tag: "Inventory Planning",
            title: "How to Plan Packaging Inventory for Seasonal or Launch Orders",
            desc: "A buyer guide to planning custom packaging inventory for launches, holiday seasons and recurring orders.",
            href: "/resources/how-to-plan-packaging-inventory-seasonal-launch-orders/",
          },
        ]}
      />

      {/* Why choose SORIVA */}
      <section className="mrb-quote">
        <div className="container">
          <div className="mrb-head center" style={{ textAlign: "center" }}>
            <span className="mrb-eyebrow">WHY CHOOSE SORIVA</span>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 3.4vw, 40px)", fontWeight: 500, lineHeight: 1.12, margin: "14px 0 12px", color: "#fff" }}>
              Custom Packaging, Delivered
            </h2>
            <p style={{ color: "#e8c98a", fontSize: 15, letterSpacing: "0.02em", margin: "0 auto 26px" }}>
              MOQ From 100 pcs &nbsp;|&nbsp; 1 Pc Prototype &nbsp;|&nbsp; Sampling Support
              &nbsp;|&nbsp; Global Shipping
            </p>
          </div>
          <div
            className="mrb-hero-actions"
            style={{ justifyContent: "center", marginTop: 8 }}
          >
            <a href="/contact/" className="btn gold">
              Get A Quote
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
