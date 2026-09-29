/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import ProductCrossLinks from "../../components/ProductCrossLinks";
import ProductBuyerGuides from "../../components/ProductBuyerGuides";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../product-page.css";

const PAGE_URL = "https://www.sorivapackaging.com/products/two-piece-rigid-boxes/";

export const metadata: Metadata = {
  title: {
    absolute: "Custom Two-Piece Rigid Boxes Manufacturer & Supplier | SORIVA Packaging",
  },
  description:
    "Custom two-piece rigid boxes with classic separate lid and base construction, premium paper wraps, bespoke inserts and luxury finishes. MOQ from 100 pcs, 1 pc prototype and global export.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Custom Two-Piece Rigid Boxes | SORIVA Packaging",
    description:
      "Classic lid-and-base rigid boxes with premium structure, dependable protection and flexible customization. MOQ from 100 pcs, 1 pc prototype and global export.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
    images: [
      {
        url: "https://www.sorivapackaging.com/img/two-piece-rigid.webp",
        width: 1200,
        height: 900,
        alt: "Two piece rigid gift box",
      },
    ],
  },
};

const features = [
  {
    title: "Timeless Lift-Off Reveal",
    desc: "Separate lid and base construction delivers a classic, high-end unboxing presentation.",
  },
  {
    title: "Solid Structural Protection",
    desc: "Durable greyboard core provides dependable protection during handling and transit.",
  },
  {
    title: "Flexible Customization",
    desc: "Size, paper, printing, finishing and inserts developed around your product.",
  },
  {
    title: "Multiple Applications",
    desc: "Widely used for cosmetics, perfume, jewelry, corporate gifts and retail brands.",
  },
];

const twoPieceSolutions = [
  {
    tag: "FRAGRANCE & PERFUME",
    title: "Two-Piece Rigid Boxes for Perfume",
    desc: "Classic lid and base structure, custom-cut velvet EVA inserts, Pantone color matching and luxury foil stamping.",
    href: "/solutions/two-piece-rigid-boxes-for-perfume/",
  },
  {
    tag: "JEWELRY & ACCESSORIES",
    title: "Two-Piece Rigid Boxes for Jewelry",
    desc: "Compact luxury proportions, plush velvet inserts, custom ring/necklace slits and precision foil branding.",
    href: "/solutions/two-piece-rigid-boxes-for-jewelry/",
  },
  {
    tag: "CORPORATE & VIP GIFTS",
    title: "Two-Piece Rigid Gift Boxes for Corporate Gifts",
    desc: "Executive presentation, multi-compartment inserts and metallic foil branding for VIP corporate sets.",
    href: "/solutions/two-piece-rigid-boxes-for-corporate-gifts/",
  },
];

const twoPieceProjects = [
  {
    tag: "RETAIL CASE STUDY",
    title: "Premium Two-Piece Gift Box Project",
    desc: "Classic lid and base rigid box featuring controlled air-friction fit, textured wrap and gold foil typography.",
    href: "/projects/premium-two-piece-gift-box-project/",
  },
  {
    tag: "JEWELRY CASE STUDY",
    title: "Jewelry Two-Piece Rigid Box Project",
    desc: "Compact lift-off lid rigid box with precision velvet-lined insert, custom ring slits and gold foil branding.",
    href: "/projects/jewelry-two-piece-rigid-box-project/",
  },
];

const specs = [
  { label: "Product Type", value: "Custom Two-Piece Rigid Boxes" },
  { label: "Core Material", value: "Greyboard thickness selected according to box size and structural requirements" },
  { label: "Surface Options", value: "Coated Art Paper / Specialty Textured Paper / Black Card / Metallic Card" },
  { label: "Printing", value: "CMYK Full-Color / Pantone (PMS) Spot Color Matching" },
  { label: "Finishing", value: "Gold/Silver Foil / 3D Embossing / Debossing / Spot UV / Soft-Touch Lamination" },
  { label: "Insert Options", value: "EVA / Velvet / Paperboard / Molded Pulp" },
  { label: "MOQ", value: "From 100 pcs, subject to project specification" },
  { label: "Prototype", value: "1 pc prototype sample available" },
  {
    label: "Lead Time",
    value: "Lead time depends on design complexity, quantity, materials and finishing requirements.",
  },
];

const structure = [
  "Premium wrapping paper surface (Art / Specialty / Textured)",
  "Rigid greyboard core tailored to size requirements",
  "Separate lid and base construction (Full or Partial Telescope)",
  "Controlled air-release friction fit",
  "Custom-engineered product cavity insert",
];

const details = [
  { img: "/img/two-piece-rigid.webp", caption: "Lid & Base Presentation" },
  { img: "/img/foil-clean.webp", caption: "Gold Foil & Branding" },
  { img: "/img/emboss-clean.webp", caption: "Embossing / Debossing" },
  { img: "/img/insert-clean.webp", caption: "Custom Product Insert" },
  { img: "/img/project-jewelry.webp", caption: "Jewelry Packaging", href: "/solutions/two-piece-rigid-boxes-for-jewelry/" },
  { img: "/img/project-perfume.webp", caption: "Perfume Packaging", href: "/solutions/two-piece-rigid-boxes-for-perfume/" },
];

const applications = [
  {
    img: "/img/project-perfume.webp",
    title: "Perfume & Fragrance",
    desc: "Fragrance bottles and luxury discovery sets.",
    href: "/industries/perfume-packaging/",
  },
  {
    img: "/img/project-jewelry.webp",
    title: "Jewelry & Watches",
    desc: "Rings, necklaces, watches and fine accessories.",
    href: "/industries/jewelry-packaging/",
  },
  {
    img: "/img/project-gift-clean.webp",
    title: "Corporate Gifts",
    desc: "Brand campaigns, onboarding kits and executive gift sets.",
    href: "/industries/corporate-gift-packaging/",
  },
  {
    img: "/img/project-skincare.webp",
    title: "Cosmetics & Skincare",
    desc: "Serums, creams and beauty gift collections.",
    href: "/industries/cosmetic-packaging/",
  },
  {
    img: "/img/candles.webp",
    title: "Candle & Home Fragrance",
    desc: "Jar candles, diffuser sets and scented home gifts.",
    href: "/industries/candle-packaging/",
  },
  {
    img: "/img/fashion.webp",
    title: "Fashion & Apparel Gifting",
    desc: "Scarves, belts and boutique retail presentation.",
    href: "/industries/fashion-packaging/",
  },
];

const stats = [
  { value: "10,000㎡", label: "Factory Area" },
  { value: "400+", label: "Employees" },
  { value: "50M+", label: "Annual Capacity" },
  { value: "20 Years", label: "Production Experience" },
];

const processSteps = [
  { title: "Material Preparation", sub: "Paper & board" },
  { title: "Printing & Finishing", sub: "Brand artwork" },
  { title: "Box Forming", sub: "Structure assembly" },
  { title: "Quality Inspection", sub: "Appearance & fit" },
  { title: "Global Delivery", sub: "Air / Sea / Express" },
];

const faqs = [
  {
    q: "Can I customize the box size and lid depth?",
    a: "Yes. Dimensions and lid depth (full telescope, partial telescope or shoulder neck style) are developed according to your product specifications.",
  },
  {
    q: "What types of product inserts can you produce?",
    a: "EVA, velvet-covered, paperboard or molded pulp inserts can be selected according to product protection and presentation requirements.",
  },
  {
    q: "What is the MOQ for custom two-piece rigid boxes?",
    a: "Selected custom projects can start from 100 pcs, depending on materials, size and finishing requirements.",
  },
  {
    q: "Can I order a physical prototype before bulk production?",
    a: "Yes. A 1 pc prototype sample can be produced for structure, size, artwork and finish confirmation.",
  },
  {
    q: "What is the typical production lead time?",
    a: "Lead time depends on design complexity, quantity, materials and finishing requirements.",
  },
  {
    q: "Where do you ship?",
    a: "We support customers in North America, Europe, Australia, Japan, Korea and other international markets by sea, air and express.",
  },
  {
    q: "Are two-piece rigid boxes suitable for premium products?",
    a: "Yes. They provide a timeless, prestigious packaging solution for luxury products, gifts and retail brands.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Custom Two-Piece Rigid Boxes",
      description:
        "Classic lid-and-base rigid boxes with premium structure, dependable protection and flexible customization. MOQ from 100 pcs, 1 pc prototype and global export.",
      image: "https://www.sorivapackaging.com/img/two-piece-rigid.webp",
      brand: { "@type": "Brand", name: "SORIVA Packaging" },
      category: "Custom Luxury Packaging",
      material: "Rigid greyboard + custom wrapping paper",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sorivapackaging.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Custom Two-Piece Rigid Boxes",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function TwoPieceRigidBoxesPage() {
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
            <a href="/">Home</a> / <a href="/products/">Products</a> / Two-Piece Rigid Boxes
          </p>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">CLASSIC LUXURY PACKAGING</span>
              <h1>Custom Two-Piece Rigid Boxes</h1>
              <p className="mrb-subtitle">
                Timeless Lid &amp; Base Packaging Built For Premium Brands
              </p>
              <p className="mrb-lead">
                Two-piece rigid boxes deliver a classic, high-end unboxing reveal
                with separate lid and base construction, sturdy greyboard core and bespoke finishes.
              </p>
              <div className="mrb-tags">
                <span>MOQ From 100 pcs</span>
                <span>Classic Lid &amp; Base Design</span>
                <span>Custom Foam / Pulp Inserts</span>
                <span>Foil / Emboss / Soft-Touch</span>
                <span>Worldwide Shipping</span>
              </div>
              <div className="mrb-hero-actions">
                <a href="/rfq/" className="btn gold">
                  Request Packaging Quote
                </a>
                <a
                  href={waLink(WA_MESSAGES.twoPiece)}
                  target="_blank"
                  rel="noopener"
                  className="btn-wa"
                >
                  <WhatsAppIcon /> Chat on WhatsApp
                </a>
                <a href="#solutions" className="btn ghost">
                  Industry Solutions
                </a>
              </div>
            </div>
            <div className="mrb-hero-media">
              <img
                src="/img/two-piece-rigid.webp"
                alt="Custom two piece rigid gift box"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Features ---------- */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">WHY CHOOSE TWO-PIECE</span>
            <h2>Classic Presentation &amp; Protection</h2>
            <p>
              The separate lid and base format is a proven standard in luxury packaging,
              offering a deliberate lifting reveal and solid structural integrity.
            </p>
          </div>
          <div className="mrb-features">
            {features.map((f, i) => (
              <article className="mrb-feature" key={f.title}>
                <strong>{String(i + 1).padStart(2, "0")}</strong>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Industry Solutions ---------- */}
      <section className="mrb-section soft" id="solutions">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">INDUSTRY SOLUTIONS</span>
            <h2>Dedicated Two-Piece Box Solutions by Industry</h2>
            <p>Explore specialized two-piece lid-and-base configurations tailored for perfume, jewelry and corporate gifts.</p>
          </div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {twoPieceSolutions.map((sol) => (
              <article className="mrb-feature" key={sol.title}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "var(--color-gold, #c79a51)", display: "block", marginBottom: 6 }}>
                  {sol.tag}
                </span>
                <h3>{sol.title}</h3>
                <p>{sol.desc}</p>
                <p style={{ marginTop: 14 }}>
                  <a href={sol.href} style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                    View Solution →
                  </a>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Technical specs ---------- */}
      <section className="mrb-section">
        <div className="container mrb-spec-wrap">
          <div>
            <div className="mrb-head">
              <span className="eyebrow dark">TECHNICAL DETAILS</span>
              <h2>Product Specifications</h2>
            </div>
            <div className="mrb-spec" style={{ display: "grid", gap: 10 }}>
              {specs.map((s) => (
                <div className="mrb-spec-row" key={s.label}>
                  <b>{s.label}</b>
                  <span>{s.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mrb-structure">
            <div className="mrb-head">
              <span className="eyebrow dark">STRUCTURE</span>
              <h2>Materials &amp; Construction</h2>
            </div>
            <ol>
              {structure.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- Capability Projects ---------- */}
      <section className="mrb-section soft" id="projects">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">FEATURED CASE STUDIES</span>
            <h2>Two-Piece Box Capability Projects</h2>
            <p>Explore real capability-based packaging case studies developed for retail and fine jewelry.</p>
          </div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
            {twoPieceProjects.map((p) => (
              <article className="mrb-feature" key={p.title}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "var(--color-gold, #c79a51)", display: "block", marginBottom: 6 }}>
                  {p.tag}
                </span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <p style={{ marginTop: 14 }}>
                  <a href={p.href} style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                    Read Case Study →
                  </a>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Details gallery ---------- */}
      <section className="mrb-section dark" id="details">
        <div className="container">
          <div className="mrb-head">
            <span className="mrb-eyebrow">PRODUCT DETAILS</span>
            <h2>Explore Box Details</h2>
            <p>
              Visual references for structure, finishing, inserts and premium
              applications.
            </p>
          </div>
          <div className="mrb-gallery">
            {details.map((d) => (
              <figure key={d.caption}>
                <img src={d.img} alt={d.caption} />
                <figcaption>{d.href ? <a href={d.href} style={{ color: "inherit", textDecoration: "underline" }}>{d.caption} →</a> : d.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Applications ---------- */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">APPLICATIONS</span>
            <h2>Designed for Premium Products</h2>
          </div>
          <div className="mrb-apps">
            {applications.map((a) => (
              <article className="mrb-app" key={a.title}>
                <img src={a.img} alt={a.title} />
                <div>
                  <b>{a.href ? <a href={a.href} style={{ color: "inherit", textDecoration: "none" }}>{a.title} →</a> : a.title}</b>
                  <span>{a.desc}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Stats ---------- */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">MANUFACTURING CAPABILITY</span>
            <h2>Built for Sampling and Scalable Production</h2>
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

      {/* ---------- Video & Process ---------- */}
      <section className="mrb-section dark">
        <div className="container mrb-video-grid">
          <div>
            <span className="mrb-eyebrow">REAL PRODUCTION</span>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 3.4vw, 40px)", fontWeight: 500, lineHeight: 1.12, margin: "14px 0 12px" }}>
              From Material to Finished Box
            </h2>
            <p style={{ color: "#c5c5c5", lineHeight: 1.65 }}>
              Precision die-cutting, corner taping, wrapping and automated lid forming
              ensure crisp edges and consistent fit.
            </p>
            <div className="mrb-process-5" style={{ marginTop: 26 }}>
              {processSteps.map((s, i) => (
                <div className="mrb-step" key={s.title}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <b>{s.title}</b>
                  <small>{s.sub}</small>
                </div>
              ))}
            </div>
          </div>
          <div className="mrb-factory-video" style={{ marginTop: 0 }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              poster="/img/factory-poster.webp"
            >
              <source src="/video/factory-production.mp4" type="video/mp4" />
              Your browser does not support video.
            </video>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">FAQ</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="mrb-faq">
            {faqs.map((f) => (
              <div className="mrb-faq-item" key={f.q}>
                <b>{f.q}</b>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Guides ---------- */}
      <ProductBuyerGuides
        title="Two-Piece Rigid Box Buyer Guides & Resources"
        subtitle="Explore practical advice on greyboard thickness, box structures, custom inserts and cost drivers."
        guides={[
          {
            tag: "Structure Guide",
            title: "Rigid Box Structure Guide: Magnetic vs Drawer vs Two-Piece",
            desc: "Compare two-piece lid-and-base boxes, magnetic rigid boxes and sliding drawer boxes.",
            href: "/resources/rigid-box-structure-guide-magnetic-vs-drawer-vs-two-piece/",
          },
          {
            tag: "Board Caliper",
            title: "Rigid Greyboard Thickness Guide for Custom Boxes",
            desc: "A buyer guide to choosing greyboard thickness based on box size and product weight.",
            href: "/resources/rigid-greyboard-thickness-guide-custom-boxes/",
          },
          {
            tag: "Packaging Inserts",
            title: "EVA vs Paperboard vs Molded Pulp Packaging Inserts",
            desc: "Compare protection, presentation and sustainability differences across insert materials.",
            href: "/resources/packaging-inserts-eva-vs-paperboard-vs-molded-pulp/",
          },
          {
            tag: "Cost Breakdown",
            title: "Custom Packaging Cost Breakdown: What Buyers Are Paying For",
            desc: "Understand what drives custom packaging costs, including board thickness, inserts and freight.",
            href: "/resources/custom-packaging-cost-breakdown/",
          },
        ]}
      />

      {/* ---------- Quote ---------- */}
      <section className="mrb-quote" id="quote">
        <div className="container mrb-quote-grid">
          <div>
            <span className="mrb-eyebrow">START A PROJECT</span>
            <h2>Request A Two-Piece Box Quote</h2>
            <p style={{ color: "#c5c5c5", lineHeight: 1.7, margin: "12px 0 16px" }}>
              Send us your product size, target quantity, material preferences and destination.
              Our packaging specialists will provide dielines, material recommendations and quotation.
            </p>
            <div className="mrb-contact">
              <div className="mrb-contact-note">
                <b>WhatsApp</b>
                <a href={waLink(WA_MESSAGES.twoPiece)} target="_blank" rel="noopener">
                  +86 159 1388 1634
                </a>
              </div>
              <div className="mrb-contact-note">
                <b>Email</b>
                <a href="mailto:AMY@XINGYUE.STORE">AMY@XINGYUE.STORE</a>
              </div>
            </div>
            <a className="mrb-back" href="/custom-packaging/">
              Explore Custom Packaging System →
            </a>
          </div>
          <QuoteForm />
        </div>
      </section>

      <ProductCrossLinks industryHref="/industries/perfume-packaging/" industryLabel="Perfume Packaging" />
    </main>
  );
}
