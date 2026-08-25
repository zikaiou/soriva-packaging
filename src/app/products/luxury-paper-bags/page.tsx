/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import ProductCrossLinks from "../../components/ProductCrossLinks";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../product-page.css";

const PAGE_URL = "https://sorivapackaging.com/products/luxury-paper-bags/";

export const metadata: Metadata = {
  title: "Custom Luxury Paper Bags Manufacturer",
  description:
    "Custom luxury paper bags with premium papers, reinforced handles, foil, embossing and custom sizes for cosmetics, perfume, jewelry, fashion and gift brands. MOQ from 100 pcs.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Custom Luxury Paper Bags | SORIVA Packaging",
    description:
      "Premium shopping and gift bags developed around your brand, product size and retail experience. MOQ from 100 pcs, 1 pc prototype, global shipping.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
    images: [
      {
        url: "https://sorivapackaging.com/img/paper-bags.webp",
        width: 1200,
        height: 900,
        alt: "Custom luxury paper bags",
      },
    ],
  },
};

const features = [
  {
    title: "Premium Papers",
    desc: "Coated, uncoated, specialty and textured papers selected according to brand look, print and strength requirements.",
  },
  {
    title: "Reinforced Structure",
    desc: "Board reinforcement and folded top construction can be adapted for heavier products and premium presentation.",
  },
  {
    title: "Custom Handles",
    desc: "Ribbon, cotton rope, PP rope or die-cut handle options according to design and application.",
  },
  {
    title: "Luxury Finishes",
    desc: "Foil stamping, embossing, debossing, spot UV, lamination and custom Pantone printing.",
  },
];

const specs = [
  { label: "Size", value: "Fully custom to product and retail requirements" },
  { label: "Paper", value: "Art paper / Kraft paper / Specialty paper / Textured paper" },
  { label: "Paper Weight", value: "Customized according to size, load and structure" },
  { label: "Handle", value: "Ribbon / Cotton rope / PP rope / Die-cut handle" },
  { label: "Printing", value: "CMYK / Pantone / Custom brand colors" },
  { label: "Finishing", value: "Gold foil / Silver foil / Emboss / Deboss / Spot UV / Lamination" },
  { label: "Reinforcement", value: "Optional reinforced top and bottom board" },
  { label: "MOQ", value: "From 100 pcs for selected custom projects" },
  { label: "Prototype", value: "1 pc prototype available for selected projects" },
  { label: "Shipping", value: "Sea / Air / Express" },
];

const handles = [
  {
    title: "Ribbon Handle",
    desc: "Popular for jewelry, perfume, cosmetics and luxury gifting.",
  },
  {
    title: "Cotton Rope",
    desc: "Comfortable grip and strong premium retail appearance.",
  },
  {
    title: "PP Rope",
    desc: "Durable and practical for retail and promotional applications.",
  },
  {
    title: "Die-Cut Handle",
    desc: "Clean integrated structure for modern and minimal packaging concepts.",
  },
];

const finishing = [
  {
    title: "Foil Stamping",
    desc: "Gold, silver or custom foil accents for logos and typography.",
  },
  {
    title: "Emboss & Deboss",
    desc: "Add tactile depth to logos, patterns and premium graphic details.",
  },
  {
    title: "Spot UV & Lamination",
    desc: "Use gloss contrast, matte lamination or soft-touch effects to control the final look and feel.",
  },
];

const applications = [
  {
    img: "/img/project-skincare.webp",
    title: "Cosmetics",
    desc: "Skincare, makeup and beauty retail bags.",
  },
  {
    img: "/img/project-perfume.webp",
    title: "Perfume",
    desc: "Fragrance boutiques, gift sets and launch packaging.",
  },
  {
    img: "/img/project-jewelry.webp",
    title: "Jewelry",
    desc: "Ring, necklace, bracelet and watch brand shopping bags.",
  },
  {
    img: "/img/project-gift-clean.webp",
    title: "Fashion & Gifts",
    desc: "Apparel, accessories, corporate gifts and premium retail products.",
  },
];

const processSteps = [
  { title: "Artwork & Size Confirmation", sub: "Design approval" },
  { title: "Paper Preparation", sub: "Material selection" },
  { title: "Printing", sub: "CMYK / Pantone" },
  { title: "Surface Finishing", sub: "Foil / Emboss / UV" },
  { title: "Bag Forming & Handle Assembly", sub: "Structure & handle" },
  { title: "Inspection & Packing", sub: "Quality control" },
];

const stats = [
  { value: "10,000㎡", label: "Factory Area" },
  { value: "400+", label: "Employees" },
  { value: "50M+", label: "Annual Capacity" },
  { value: "20 Years", label: "Production Experience" },
];

const faqs = [
  {
    q: "What is your MOQ for custom paper bags?",
    a: "Selected custom projects can start from 100 pcs. MOQ may vary with paper, handle, printing and finishing requirements.",
  },
  {
    q: "Can I customize the bag size?",
    a: "Yes. Length, width, gusset, paper weight and reinforcement can be developed around your product and retail requirements.",
  },
  {
    q: "What handle options are available?",
    a: "Common options include ribbon, cotton rope, PP rope and die-cut handles.",
  },
  {
    q: "Can you match Pantone colors?",
    a: "Yes. CMYK and Pantone printing can be used according to artwork and paper selection.",
  },
  {
    q: "Can you add foil or embossed logos?",
    a: "Yes. Foil stamping, embossing, debossing, spot UV and lamination are available.",
  },
  {
    q: "Can I get a prototype before production?",
    a: "A 1 pc prototype is available for selected custom projects so structure, size and appearance can be checked before mass production.",
  },
  {
    q: "How do you ship custom paper bags?",
    a: "Sea freight, air freight and express shipping are supported depending on quantity, destination and timeline.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Custom Luxury Paper Bags",
      description:
        "Premium shopping and gift bags developed around your brand, product size and retail experience. MOQ from 100 pcs.",
      image: "https://sorivapackaging.com/img/paper-bags.webp",
      brand: { "@type": "Brand", name: "SORIVA Packaging" },
      category: "Custom Luxury Packaging",
      material: "Art paper / Kraft paper / Specialty paper",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sorivapackaging.com/" },
        { "@type": "ListItem", position: 2, name: "Products", item: "https://sorivapackaging.com/products/" },
        { "@type": "ListItem", position: 3, name: "Luxury Paper Bags", item: PAGE_URL },
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

export default function LuxuryPaperBagsPage() {
  return (
    <main className="mrb-page">
      {/* Hero */}
      <section className="mrb-hero">
        <div className="container">
          <nav className="mrb-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a> / <a href="/products/">Products</a> / Luxury
            Paper Bags
          </nav>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">CUSTOM LUXURY PAPER BAGS</span>
              <h1>Premium Paper Bags for Luxury Brands</h1>
              <p className="mrb-lead">
                Custom shopping and gift bags developed around your brand,
                product size and retail experience. Choose paper, handle style,
                printing and luxury finishes to create a refined branded
                presentation.
              </p>
              <div className="mrb-tags">
                <span>MOQ From 100 pcs</span>
                <span>Custom Size &amp; Structure</span>
                <span>Foil / Emboss / Spot UV</span>
                <span>Global Shipping</span>
              </div>
              <div className="mrb-hero-actions">
                <a href="#quote" className="btn gold">
                  Get a Quote
                </a>
                <a
                  href={waLink(WA_MESSAGES.paperBags)}
                  target="_blank"
                  rel="noopener"
                  className="btn-wa"
                >
                  <WhatsAppIcon /> Chat on WhatsApp
                </a>
                <a href="#details" className="btn ghost">
                  Explore Details
                </a>
              </div>
            </div>
            <div className="mrb-hero-media">
              <img
                src="/img/paper-bags.webp"
                alt="Custom luxury paper bags with premium handles"
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
            <h2>Built for Retail, Gifting and Brand Presentation</h2>
            <p>
              A complete custom paper bag program covering paper, structure,
              handles, printing and finishing.
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
              <h2>Custom Paper Bag Specifications</h2>
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
              <span className="eyebrow dark">HANDLE OPTIONS</span>
              <h2>Handle &amp; Structure Options</h2>
            </div>
            <ol>
              {handles.map((h) => (
                <li key={h.title}>
                  <b>{h.title}</b> — {h.desc}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Finishing options */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">FINISHING OPTIONS</span>
            <h2>Luxury Brand Finishes</h2>
          </div>
          <div className="mrb-features">
            {finishing.map((f, i) => (
              <article className="mrb-feature" key={f.title}>
                <strong>{String(i + 1).padStart(2, "0")}</strong>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="mrb-section soft" id="details">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">APPLICATIONS</span>
            <h2>Designed for Premium Brand Categories</h2>
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
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">PRODUCTION</span>
            <h2>From Artwork to Finished Bags</h2>
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
              Paper preparation, printing, finishing, bag forming, handle
              assembly, inspection and packing are coordinated through the
              production process.
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
              <source src="/video/paper-bag-production.mp4" type="video/mp4" />
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
            <h2>Custom Paper Bag FAQs</h2>
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
            <h2>Need Custom Paper Bags for Your Brand?</h2>
            <p style={{ color: "#c5c5c5", lineHeight: 1.7, margin: "12px 0 16px" }}>
              Send your target size, quantity, logo or artwork, preferred paper
              and handle style. We can help develop a suitable paper bag
              specification and quotation.
            </p>
            <ul style={{ color: "#c5c5c5", lineHeight: 2, paddingLeft: 18, margin: "16px 0" }}>
              <li>MOQ from 100 pcs</li>
              <li>1 pc prototype available</li>
              <li>Custom size, paper, handle and finishing</li>
              <li>Air / Sea / Express delivery</li>
            </ul>
            <div className="mrb-contact">
              <div className="mrb-contact-note">
                <b>WhatsApp</b>
                <a href={waLink(WA_MESSAGES.paperBags)} target="_blank" rel="noopener">
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

      <ProductCrossLinks industryHref="/industries/jewelry-packaging/" industryLabel="Jewelry Packaging" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  );
}
