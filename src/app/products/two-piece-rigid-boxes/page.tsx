/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import ProductCrossLinks from "../../components/ProductCrossLinks";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../product-page.css";

const PAGE_URL = "https://sorivapackaging.com/products/two-piece-rigid-boxes/";

export const metadata: Metadata = {
  title: "Custom Two Piece Rigid Boxes Manufacturer",
  description:
    "Custom Two Piece Rigid Boxes from SORIVA Packaging with separate lid and base construction, premium materials and tailored inserts. MOQ from 100 pcs, 1 pc prototype, 48-hour sample support and global shipping.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Custom Two-Piece Rigid Boxes | SORIVA Packaging",
    description:
      "Classic lid-and-base rigid boxes with premium structure, strong protection and flexible customization. MOQ from 100 pcs, 1 pc prototype, 48-hour sample support.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
    images: [
      {
        url: "https://sorivapackaging.com/img/two-piece-rigid.webp",
        width: 1200,
        height: 900,
        alt: "Two piece rigid gift box",
      },
    ],
  },
};

const features = [
  {
    title: "Premium Presentation",
    desc: "Separate lid and base construction delivers a timeless, high-end reveal.",
  },
  {
    title: "Strong Protection",
    desc: "Heavyweight greyboard structure protects contents during handling and transit.",
  },
  {
    title: "Flexible Customization",
    desc: "Size, paper, printing, finishing and inserts developed around your product.",
  },
  {
    title: "Multiple Applications",
    desc: "Widely used for cosmetics, perfume, jewelry, gifts and retail brands.",
  },
];

const specs = [
  { label: "Structure", value: "Lid & Base Rigid Box" },
  { label: "Material", value: "Greyboard + Specialty Paper" },
  { label: "Surface", value: "Matte / Texture / Fabric" },
  { label: "Printing", value: "CMYK / Pantone" },
  { label: "Finish", value: "Foil / Emboss / UV" },
  { label: "Insert", value: "EVA / Velvet / Paper" },
  { label: "MOQ", value: "From 100 pcs" },
  { label: "Sample", value: "1 pc Prototype / 48 Hours" },
  { label: "Production", value: "From around 7 days" },
];

const structure = [
  "Premium Lid",
  "Rigid Base",
  "Custom Product Insert",
  "Luxury Product Presentation",
];

const details = [
  { img: "/img/two-piece-rigid.webp", caption: "Lid & Base Presentation" },
  { img: "/img/foil-clean.webp", caption: "Gold Foil & Branding" },
  { img: "/img/emboss-clean.webp", caption: "Embossing / Debossing" },
  { img: "/img/insert-clean.webp", caption: "Custom Product Insert" },
  { img: "/img/project-jewelry.webp", caption: "Jewelry Packaging" },
  { img: "/img/project-skincare.webp", caption: "Skincare Gift Set" },
];

const applications = [
  {
    img: "/img/project-skincare.webp",
    title: "Cosmetics & Skincare",
    desc: "Serums, creams and beauty gift sets.",
  },
  {
    img: "/img/project-perfume.webp",
    title: "Perfume & Fragrance",
    desc: "Fragrance bottles and luxury sets.",
  },
  {
    img: "/img/project-jewelry.webp",
    title: "Jewelry & Watches",
    desc: "Rings, necklaces and premium accessories.",
  },
  {
    img: "/img/project-gift-clean.webp",
    title: "Corporate Gifts",
    desc: "Brand campaigns and executive gift sets.",
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
    q: "Can I customize the box size?",
    a: "Yes. Dimensions can be developed according to your products and packaging requirements.",
  },
  {
    q: "Can I add inserts?",
    a: "Yes. EVA, velvet and paper insert options are available.",
  },
  {
    q: "What is the MOQ?",
    a: "Selected custom projects can start from 100 pcs, depending on materials, size and finishing.",
  },
  {
    q: "Can I order a prototype?",
    a: "Yes. A 1 pc prototype can be produced for structure, size, artwork and finish confirmation.",
  },
  {
    q: "How fast can samples be made?",
    a: "Fast sample support can start from 48 hours for suitable projects; complex structures or finishes may require more time.",
  },
  {
    q: "How long does production take?",
    a: "Fast production can start from around 7 days for suitable confirmed projects, depending on quantity and finishing complexity.",
  },
  {
    q: "Where do you ship?",
    a: "We support customers in the USA, Europe, Japan, Korea and other international markets by sea, air and express.",
  },
  {
    q: "Are two-piece rigid boxes suitable for premium products?",
    a: "Yes. They provide a timeless packaging solution for luxury products, gifts and retail brands.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Custom Two-Piece Rigid Boxes",
      description:
        "Classic lid-and-base rigid boxes with premium structure, strong protection and flexible customization. MOQ from 100 pcs, 1 pc prototype and 48-hour sample support.",
      image: "https://sorivapackaging.com/img/two-piece-rigid.webp",
      brand: { "@type": "Brand", name: "SORIVA Packaging" },
      category: "Custom Luxury Packaging",
      material: "Greyboard + specialty paper",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sorivapackaging.com/" },
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
      {/* Hero */}
      <section className="mrb-hero">
        <div className="container">
          <nav className="mrb-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a> / Products / Two-Piece Rigid Boxes
          </nav>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">CUSTOM PACKAGING SOLUTIONS</span>
              <h1>Custom Two-Piece Rigid Boxes</h1>
              <p className="mrb-subtitle">
                Classic Luxury Packaging With Premium Structure
              </p>
              <p className="mrb-lead">
                Two-piece rigid boxes feature a separate lid and base
                construction, providing a timeless packaging solution for
                luxury products, gifts and retail brands.
              </p>
              <div className="mrb-tags">
                <span>MOQ From 100 pcs</span>
                <span>1 Pc Prototype</span>
                <span>48H Sample</span>
                <span>7-Day Production</span>
              </div>
              <div className="mrb-hero-actions">
                <a href="#quote" className="btn gold">
                  Get A Quote
                </a>
                <a
                  href={waLink(WA_MESSAGES.twoPiece)}
                  target="_blank"
                  rel="noopener"
                  className="btn-wa"
                >
                  <WhatsAppIcon /> Chat on WhatsApp
                </a>
                <a href="#details" className="btn ghost">
                  View Details
                </a>
              </div>
            </div>
            <div className="mrb-hero-media">
              <img
                src="/img/two-piece-rigid.webp"
                alt="Custom two piece rigid gift box with luxury finish"
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
            <span className="eyebrow dark">PRODUCT OVERVIEW</span>
            <h2>Why Choose Two-Piece Rigid Boxes?</h2>
            <p>
              A classic structure that combines premium presentation with
              reliable protection for luxury products.
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

      {/* Technical details */}
      <section className="mrb-section soft">
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
              <h2>Materials & Structure</h2>
            </div>
            <ol>
              {structure.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Details gallery */}
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
                <figcaption>{d.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">APPLICATIONS</span>
            <h2>Designed For Premium Products</h2>
          </div>
          <div className="mrb-apps">
            {applications.map((a) => (
              <article className="mrb-app" key={a.title}>
                <img src={a.img} alt={a.title} />
                <div>
                  <b>{a.title}</b>
                  <span>{a.desc}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing stats */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">MANUFACTURING CAPABILITY</span>
            <h2>Professional Packaging Manufacturer</h2>
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

      {/* Real production video */}
      <section className="mrb-section dark">
        <div className="container mrb-video-grid">
          <div>
            <span className="mrb-eyebrow">REAL PRODUCTION</span>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 3.4vw, 40px)", fontWeight: 500, lineHeight: 1.12, margin: "14px 0 12px" }}>
              From Design to Production
            </h2>
            <p style={{ color: "#c5c5c5", lineHeight: 1.65 }}>
              Material preparation, printing, box forming, assembly and quality
              control are coordinated through the production process.
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

      {/* FAQ */}
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

      {/* Quote */}
      <section className="mrb-quote" id="quote">
        <div className="container mrb-quote-grid">
          <div>
            <span className="mrb-eyebrow">START A PROJECT</span>
            <h2>Ready to Create Your Custom Packaging?</h2>
            <ul style={{ color: "#c5c5c5", lineHeight: 2, paddingLeft: 18, margin: "16px 0" }}>
              <li>MOQ from 100 pcs</li>
              <li>1 pc prototype available</li>
              <li>Fast sample support from 48 hours</li>
              <li>Air / Sea / Express delivery</li>
            </ul>
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
            <a className="mrb-back" href="/">
              ← Back to homepage
            </a>
          </div>
          <QuoteForm />
        </div>
      </section>

      <ProductCrossLinks industryHref="/industries/cosmetic-packaging/" industryLabel="Cosmetics Packaging" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  );
}
