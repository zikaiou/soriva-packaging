/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import ProductBuyerGuides from "../components/ProductBuyerGuides";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../lib/whatsapp";
import "../products/product-page.css";

const PAGE_URL = "https://www.sorivapackaging.com/custom-packaging/";

export const metadata: Metadata = {
  title: "Custom Packaging Solutions Manufacturer | SORIVA Packaging",
  description:
    "Complete custom packaging solutions from SORIVA Packaging: structure design, material selection, prototyping, mass production and global delivery. MOQ from 100 pcs.",
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
        url: "https://www.sorivapackaging.com/img/foil-clean.webp",
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
  { img: "/img/fashion.webp", alt: "Fashion packaging", title: "Fashion Packaging", href: "/industries/fashion-packaging/" },
  { img: "/img/corporate.webp", alt: "Corporate gift packaging", title: "Corporate Gifts", href: "/industries/corporate-gift-packaging/" },
  { img: "/img/candles.webp", alt: "Candle packaging", title: "Candle Packaging", href: "/industries/candle-packaging/" },
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
                <a href="/rfq/" className="btn gold">
                  Get A Quote
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

      {/* ---------- Custom Paper Bags & Coordinated Sets ---------- */}
      <section className="mrb-section">
        <div className="container mrb-spec-wrap">
          <div>
            <div className="mrb-head">
              <span className="eyebrow dark">COORDINATED SUITES</span>
              <h2>Custom Paper Bags &amp; Matching Packaging Sets</h2>
            </div>
            <p style={{ lineHeight: 1.7, color: "#444", marginBottom: 16 }}>
              Deliver a unified retail unboxing experience by pairing custom rigid gift boxes with
              matching luxury shopping bags, custom tissue paper and branded cards:
            </p>
            <ul style={{ lineHeight: 1.8, color: "#444", paddingLeft: 20, marginBottom: 20 }}>
              <li><strong>Matched Brand Colors:</strong> Precise Pantone (PMS) matching across paper bags and rigid boxes.</li>
              <li><strong>Custom Ribbon &amp; Rope Handles:</strong> Satin, grosgrain or natural cotton rope handles.</li>
              <li><strong>Unified Embellishments:</strong> Coordinated hot foil stamping, embossing and soft-touch lamination.</li>
            </ul>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="/products/luxury-paper-bags/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 14 }}>
                Explore Luxury Paper Bags →
              </a>
              <a href="/rfq/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 14 }}>
                Request Packaging Quote →
              </a>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <img
              src="/img/sample-paperbag-matching-set.jpg"
              alt="Coordinated custom luxury paper bag and rigid gift box set"
              loading="lazy"
              style={{ width: "100%", borderRadius: 10, border: "1px solid #e7e2d9", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* ---------- Industries ---------- */}
      <section className="mrb-section soft">
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

      {/* ---------- Buyer Guides ---------- */}
      <ProductBuyerGuides
        title="Custom Packaging Technical Guides & Resources"
        subtitle="Explore detailed buyer guides on product measurement, box structures, sampling stages, materials, cost breakdown and luxury finishing."
        guides={[
          {
            tag: "Box Structures",
            title: "Rigid Box Structure Guide: Magnetic vs Drawer vs Two-Piece",
            desc: "Compare magnetic rigid boxes, drawer boxes and two-piece rigid boxes by opening experience, presentation and packing efficiency.",
            href: "/resources/rigid-box-structure-guide-magnetic-vs-drawer-vs-two-piece/",
          },
          {
            tag: "Product Measurement",
            title: "How to Measure a Product for Custom Box Packaging",
            desc: "A practical buyer guide to measuring product dimensions for custom box packaging, including clearance, inserts and orientation.",
            href: "/resources/how-to-measure-product-for-custom-box-packaging/",
          },
          {
            tag: "Sampling",
            title: "Prototype Sample vs Pre-Production Sample: What Buyers Should Know",
            desc: "Understand the difference between prototype and pre-production samples for custom packaging before mass production.",
            href: "/resources/prototype-sample-vs-pre-production-sample/",
          },
          {
            tag: "Paper & Finishing",
            title: "Luxury Packaging Paper Types: Art Paper vs Specialty Paper vs Kraft",
            desc: "A comprehensive guide to choosing the right paper wrap, texture, GSM and coating for custom luxury packaging boxes.",
            href: "/resources/luxury-packaging-paper-types-art-paper-vs-specialty-paper-vs-kraft/",
          },
          {
            tag: "Cost Breakdown",
            title: "Custom Packaging Cost Breakdown: What Buyers Are Paying For",
            desc: "Understand what drives custom packaging costs, including board thickness, paper grade, print processes, inserts and freight.",
            href: "/resources/custom-packaging-cost-breakdown/",
          },
          {
            tag: "Luxury Finishing",
            title: "Foil Stamping vs Embossing vs Spot UV for Custom Packaging",
            desc: "Compare metallic foil stamping, 3D embossing, debossing and gloss spot UV coating for high-end packaging aesthetics.",
            href: "/resources/foil-stamping-vs-embossing-vs-spot-uv/",
          },
        ]}
      />

      {/* ---------- Factory & Trust Stats ---------- */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">FACTORY CAPABILITY</span>
            <h2>Manufacturing Infrastructure You Can Rely On</h2>
            <p>
              Direct factory production with strict in-house quality control and verified capacity.
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
          <div style={{ textAlign: "center", marginTop: 24 }}>
            <a href="/factory/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 14 }}>
              Tour Our Factory Facilities &amp; Equipment →
            </a>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="mrb-quote">
        <div className="container mrb-quote-grid">
          <div>
            <span className="mrb-eyebrow">GET STARTED</span>
            <h2>Start Your Packaging Project</h2>
            <p style={{ color: "#c5c5c5", lineHeight: 1.7, margin: "12px 0 16px" }}>
              Tell us your product size, quantity and material preferences.
              We will help review suitable structures and provide quotations.
            </p>
            <div className="mrb-contact">
              <div className="mrb-contact-note">
                <b>WhatsApp</b>
                <a
                  href={waLink(WA_MESSAGES.custom)}
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
            <a className="mrb-back" href="/products/magnetic-rigid-boxes/">
              Explore Magnetic Rigid Boxes →
            </a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, justifyContent: "center", alignItems: "flex-start" }}>
            <a href="/rfq/" className="btn gold" style={{ minWidth: 200, textAlign: "center" }}>
              Request Packaging Quote
            </a>
            <a
              href={waLink(WA_MESSAGES.custom)}
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
