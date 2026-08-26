/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import ProductCrossLinks from "../../components/ProductCrossLinks";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../product-page.css";

const PAGE_URL = "https://sorivapackaging.com/products/tube-packaging/";

export const metadata: Metadata = {
  title: "Custom Tube Packaging Manufacturer | Paper Tube Boxes",
  description:
    "Custom paper tube packaging for cosmetics, perfume, candles, tea and premium gifts. Custom sizes, inserts and luxury finishes. MOQ from 100 pcs.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Custom Tube Packaging | SORIVA Packaging",
    description:
      "Premium cylindrical paper packaging developed around your product size, retail presentation and branding requirements. MOQ from 100 pcs.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
    images: [
      {
        url: "https://sorivapackaging.com/img/tube-packaging.webp",
        width: 1200,
        height: 900,
        alt: "Custom paper tube packaging",
      },
    ],
  },
};

const features = [
  {
    title: "Custom Structure",
    desc: "Diameter, height and lid structure developed around your product.",
  },
  {
    title: "Premium Papers",
    desc: "Art paper, specialty paper, textured paper and kraft-style wraps.",
  },
  {
    title: "Custom Inserts",
    desc: "EVA, paperboard, molded pulp and other insert solutions.",
  },
  {
    title: "Luxury Finishes",
    desc: "Foil, embossing, debossing, spot UV and lamination.",
  },
];

const specs = [
  { label: "Size", value: "Custom diameter and height" },
  { label: "Structure", value: "Paper Tube / Telescopic Tube / Shoulder-Neck Tube / Custom Cylindrical Structure" },
  { label: "Core Material", value: "Paperboard tube with customized wall thickness" },
  { label: "Outer Wrap", value: "Art Paper / Kraft Paper / Specialty Paper / Textured Paper" },
  { label: "Printing", value: "CMYK / Pantone" },
  { label: "Finishing", value: "Gold Foil / Silver Foil / Emboss / Deboss / Spot UV / Lamination" },
  { label: "Insert", value: "EVA / Paperboard / Molded Pulp / Custom" },
  { label: "MOQ", value: "From 100 pcs for selected custom projects" },
  { label: "Prototype", value: "1 pc prototype available for selected projects" },
  { label: "Shipping", value: "Sea / Air / Express" },
];

const structures = [
  {
    title: "Classic Paper Tube",
    desc: "Clean cylindrical packaging for cosmetics, tea and gifts.",
  },
  {
    title: "Telescopic Tube",
    desc: "Separate lid and base for premium presentation.",
  },
  {
    title: "Shoulder-Neck Tube",
    desc: "Inner shoulder construction for refined opening and fit.",
  },
  {
    title: "Custom Insert Tube",
    desc: "Internal support for bottles, jars and fragile products.",
  },
];

const applications = [
  {
    img: "/img/project-skincare.webp",
    title: "Cosmetics & Skincare",
    desc: "Bottles, jars, serums and gift sets.",
  },
  {
    img: "/img/project-perfume.webp",
    title: "Perfume",
    desc: "Premium cylindrical fragrance presentation.",
  },
  {
    img: "/img/candles.webp",
    title: "Candles",
    desc: "Decorative and protective candle packaging.",
  },
  {
    img: "/img/project-gift-clean.webp",
    title: "Tea & Gifts",
    desc: "Distinctive packaging for specialty retail products.",
  },
];

const processSteps = [
  { title: "Size & Structure", sub: "Dimensions approval" },
  { title: "Tube Core", sub: "Paperboard wall" },
  { title: "Printing", sub: "CMYK / Pantone" },
  { title: "Finishing", sub: "Foil / Emboss / UV" },
  { title: "Assembly", sub: "Lid, insert & wrap" },
  { title: "QC & Packing", sub: "Inspection" },
];

const stats = [
  { value: "10,000㎡", label: "Factory Area" },
  { value: "400+", label: "Employees" },
  { value: "50M+", label: "Annual Capacity" },
  { value: "20 Years", label: "Production Experience" },
];

const faqs = [
  {
    q: "What is the MOQ?",
    a: "Selected custom tube packaging projects can start from 100 pcs.",
  },
  {
    q: "Can diameter and height be customized?",
    a: "Yes. Dimensions and wall thickness can be developed around your product.",
  },
  {
    q: "What tube structures are available?",
    a: "Classic, telescopic, shoulder-neck and custom cylindrical structures are available.",
  },
  {
    q: "Can you make custom inserts?",
    a: "Yes. EVA, paperboard, molded pulp and custom inserts are available.",
  },
  {
    q: "Can you match Pantone colors?",
    a: "Yes. CMYK and Pantone printing are available.",
  },
  {
    q: "Can I get a prototype?",
    a: "A 1 pc prototype is available for selected projects.",
  },
  {
    q: "How do you ship?",
    a: "Sea freight, air freight and express shipping are supported.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Custom Paper Tube Packaging",
      description:
        "Custom cylindrical paper packaging for cosmetics, perfume, candles, tea and premium gifts. MOQ from 100 pcs.",
      image: "https://sorivapackaging.com/img/tube-packaging.webp",
      brand: { "@type": "Brand", name: "SORIVA Packaging" },
      category: "Custom Luxury Packaging",
      material: "Paperboard tube + specialty paper",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sorivapackaging.com/" },
        { "@type": "ListItem", position: 2, name: "Products", item: "https://sorivapackaging.com/products/" },
        { "@type": "ListItem", position: 3, name: "Tube Packaging", item: PAGE_URL },
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

export default function TubePackagingPage() {
  return (
    <main className="mrb-page">
      {/* Hero */}
      <section className="mrb-hero">
        <div className="container">
          <nav className="mrb-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a> / <a href="/products/">Products</a> / Tube
            Packaging
          </nav>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">CUSTOM TUBE PACKAGING</span>
              <h1>Premium Paper Tube Packaging for Brands</h1>
              <p className="mrb-lead">
                Custom cylindrical paper packaging developed around your
                product size, retail presentation and branding requirements.
              </p>
              <div className="mrb-tags">
                <span>MOQ From 100 pcs</span>
                <span>Custom Diameter &amp; Height</span>
                <span>Custom Inserts</span>
                <span>Foil / Emboss / Spot UV</span>
              </div>
              <div className="mrb-hero-actions">
                <a href="#quote" className="btn gold">
                  Get A Quote
                </a>
                <a
                  href={waLink(WA_MESSAGES.tube)}
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
                src="/img/tube-packaging.webp"
                alt="Custom paper tube packaging with luxury finish"
                width="1200"
                height="900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product overview */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">PRODUCT OVERVIEW</span>
            <h2>Distinctive Cylindrical Packaging</h2>
            <p>
              A custom tube program covering structure, papers, inserts and
              luxury finishing.
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

      {/* Specifications */}
      <section className="mrb-section soft">
        <div className="container mrb-spec-wrap">
          <div>
            <div className="mrb-head">
              <span className="eyebrow dark">SPECIFICATIONS</span>
              <h2>Custom Tube Packaging Specifications</h2>
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
              <span className="eyebrow dark">STRUCTURE OPTIONS</span>
              <h2>Tube Structures</h2>
            </div>
            <ol>
              {structures.map((s) => (
                <li key={s.title}>
                  <b>{s.title}</b> — {s.desc}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="mrb-section" id="details">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">APPLICATIONS</span>
            <h2>Premium Product Categories</h2>
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

      {/* Production process */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">PRODUCTION PROCESS</span>
            <h2>From Structure to Shipment</h2>
          </div>
          <div className="mrb-process">
            {processSteps.map((s, i) => (
              <div className="mrb-step" key={s.title}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <b>{s.title}</b>
                <small>{s.sub}</small>
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
              See Our Manufacturing Environment
            </h2>
            <p style={{ color: "#c5c5c5", lineHeight: 1.65 }}>
              Tube core forming, printing, finishing, assembly and quality
              control are coordinated through the production process.
            </p>
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
              <source src="/video/tube-packaging-production.mp4" type="video/mp4" />
              Your browser does not support video.
            </video>
          </div>
        </div>
      </section>

      {/* Factory capability */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">FACTORY CAPABILITY</span>
            <h2>Reliable Custom Packaging Production</h2>
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

      {/* FAQ */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">FAQ</span>
            <h2>Tube Packaging FAQs</h2>
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
            <h2>Need Custom Tube Packaging?</h2>
            <p style={{ color: "#c5c5c5", lineHeight: 1.7, margin: "12px 0 16px" }}>
              Send your product dimensions, quantity, reference image and
              preferred finish. We can help develop a suitable tube packaging
              specification and quotation.
            </p>
            <ul style={{ color: "#c5c5c5", lineHeight: 2, paddingLeft: 18, margin: "16px 0" }}>
              <li>MOQ from 100 pcs</li>
              <li>1 pc prototype available</li>
              <li>Custom diameter, height, insert and finishing</li>
              <li>Air / Sea / Express delivery</li>
            </ul>
            <div className="mrb-contact">
              <div className="mrb-contact-note">
                <b>WhatsApp</b>
                <a href={waLink(WA_MESSAGES.tube)} target="_blank" rel="noopener">
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

      <ProductCrossLinks industryHref="/industries/perfume-packaging/" industryLabel="Perfume Packaging" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  );
}
