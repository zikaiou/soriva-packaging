/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import ProductBuyerGuides from "../../components/ProductBuyerGuides";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL = "https://www.sorivapackaging.com/solutions/custom-paper-bags-with-matching-gift-boxes/";

export const metadata: Metadata = {
  title: {
    absolute: "Custom Paper Bags with Matching Gift Boxes | Coordinated Packaging | SORIVA Packaging",
  },
  description:
    "Custom paper bags with matching rigid gift boxes for a complete coordinated packaging experience. Unified Pantone color matching, materials, foils and dieline alignment.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Custom Paper Bags with Matching Gift Boxes | Coordinated Packaging | SORIVA Packaging",
    description:
      "Custom paper bags with matching rigid gift boxes for a complete coordinated packaging experience. Unified Pantone color matching, materials, foils and dieline alignment.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
    images: [
      {
        url: "https://www.sorivapackaging.com/img/sample-paperbag-matching-set.jpg",
        width: 1200,
        height: 900,
        alt: "Custom paper bags with matching rigid gift boxes",
      },
    ],
  },
};

const benefits = [
  {
    title: "Seamless Brand Consistency",
    desc: "Ensure exact color formula, paper grain texture, logo scale and foil sheen remain unified between the outer carrier bag and the inner presentation gift box.",
  },
  {
    title: "Elevated Unboxing Journey",
    desc: "A two-tier packaging sequence — from luxury shopping bag with ribbon handles to opening the rigid gift box — significantly increases customer perceived value.",
  },
  {
    title: "Single Sourcing Partner",
    desc: "Eliminate color drift and sizing mismatch caused by working with multiple separate vendors for boxes and bags. One engineering team coordinates both dielines.",
  },
  {
    title: "Optimized Flat-Packed Shipping",
    desc: "Paper bags fold flat while rigid boxes can be nested or engineered as foldable magnetic structures, maximizing shipping container efficiency and reducing freight CBM.",
  },
];

const combinations = [
  {
    title: "Magnetic Rigid Box + Ribbon Carrier Bag",
    desc: "The ultimate luxury pairing. Book-style front-opening magnetic box paired with a matching boutique shopping bag featuring satin ribbon handles.",
    ideal: "Perfume sets, luxury skincare, high-end electronics and executive VIP gifting.",
    href: "/products/magnetic-rigid-boxes/",
  },
  {
    title: "Sliding Drawer Box + Boutique Shopper",
    desc: "Matchbox-style slide-out rigid box with satin ribbon pull tab, paired with a matching vertical or square luxury shopping bag.",
    ideal: "Fine jewelry, watches, confectionery, accessories and boutique cosmetics.",
    href: "/products/drawer-boxes/",
  },
  {
    title: "Two-Piece Rigid Box + Branded Gift Bag",
    desc: "Classic lid-and-base rigid presentation box accompanied by a coordinated retail carrier bag.",
    ideal: "Corporate gift collections, fashion apparel, luxury candles and holiday hampers.",
    href: "/products/two-piece-rigid-boxes/",
  },
  {
    title: "Foldable Magnetic Box + Retail Shopping Bag",
    desc: "Space-saving collapsible luxury rigid box paired with matching flat-packed shopping bags for maximum export freight efficiency.",
    ideal: "Apparel collections, footwear, department store retail and cross-border ecommerce.",
    href: "/products/foldable-magnetic-rigid-boxes/",
  },
];

const alignmentSteps = [
  {
    num: "01",
    title: "Dieline & Clearance Engineering",
    desc: "We engineer bag internal width, depth and gusset allowance around the exact outer dimensions of the rigid box for easy insertion and snug fit.",
  },
  {
    num: "02",
    title: "Pantone (PMS) Ink Synchronization",
    desc: "Exact spot ink formulation is calibrated across coated art paper (bag) and specialty wrapped board (box) to achieve identical visual color temperature.",
  },
  {
    num: "03",
    title: "Foil & Embellishment Alignment",
    desc: "Shared vector dies ensure hot foil stamping, embossing depth and spot UV logos maintain identical proportions and optical brilliance across all items.",
  },
  {
    num: "04",
    title: "Accessories & Interior Wrap",
    desc: "Complement the suite with color-matched tissue paper, custom branded stickers, thank you cards and matching grosgrain ribbon closures.",
  },
];

const faqs = [
  {
    q: "How should a coordinated bag-and-box system be started?",
    a: "Start with the outer box dimensions, desired carry experience, artwork system and accessories so both dielines can be reviewed together.",
  },
  {
    q: "What is the MOQ for a coordinated packaging suite?",
    a: "Selected coordinated projects can start from 100 sets, depending on components, materials, size and finishing.",
  },
  {
    q: "Can I request a complete prototype set?",
    a: "A 1 pc prototype set is available for selected projects to review bag fit, box presentation, color and finishing.",
  },
  {
    q: "What is the lead time?",
    a: "Lead time depends on design complexity, quantity, materials and finishing requirements.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sorivapackaging.com/" },
        { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.sorivapackaging.com/custom-packaging/" },
        { "@type": "ListItem", position: 3, name: "Matching Bags & Boxes", item: PAGE_URL },
      ],
    },
    {
      "@type": "Service",
      name: "Custom Paper Bags with Matching Gift Boxes",
      description:
        "Complete coordinated packaging solutions pairing custom luxury paper bags with matching rigid gift boxes for global brands.",
      provider: { "@type": "Organization", name: "SORIVA Packaging", url: "https://www.sorivapackaging.com/" },
      url: PAGE_URL,
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

export default function MatchingBagsAndBoxesSolution() {
  return (
    <main className="mrb-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero */}
      <section className="mrb-hero">
        <div className="container">
          <nav className="mrb-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a> / <a href="/custom-packaging/">Solutions</a> / Custom Paper Bags with Matching Gift Boxes
          </nav>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">COORDINATED PACKAGING SUITES</span>
              <h1>Custom Paper Bags with Matching Gift Boxes</h1>
              <p className="mrb-lead">
                Create a cohesive, high-impact unboxing experience with custom paper shopping bags
                developed alongside matching rigid gift boxes. Single-source production ensures
                flawless Pantone color fidelity, synchronized hot foil finishes and precision sizing.
              </p>
              <div className="mrb-tags">
                <span>MOQ From 100 Sets</span>
                <span>Unified Pantone Matching</span>
                <span>Box + Bag Dimensional Alignment</span>
                <span>Matching Ribbon &amp; Tissue</span>
                <span>Global Export Shipping</span>
              </div>
              <div className="mrb-hero-actions">
                <a href="/rfq/" className="btn gold">
                  Request Suite Quotation
                </a>
                <a
                  href={waLink(WA_MESSAGES.paperBags)}
                  target="_blank"
                  rel="noopener"
                  className="btn-wa"
                >
                  <WhatsAppIcon /> Chat on WhatsApp
                </a>
                <a href="/custom-packaging/" className="btn ghost">
                  Custom Packaging System
                </a>
              </div>
            </div>
            <div className="mrb-hero-media">
              <img
                src="/img/sample-paperbag-matching-set.jpg"
                alt="Custom luxury paper bags with matching rigid gift box packaging suite"
                width="1200"
                height="900"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mrb-section soft p2-differentiation">
        <div className="container">
          <div className="mrb-head">
            <span className="eyebrow dark">COORDINATED SUITE DECISION</span>
            <h2>Buyer Decision Notes</h2>
            <p>A matching bag-and-box program is a coordination problem across two packaging formats. The buyer decision is the system: outer bag proportions must accept the selected box, while color, logo scale, paper texture, tissue, stickers and foil should read as one visual identity. The correct starting point is the outer dimensions of the box, the intended carry experience and the order in which the customer encounters the bag, tissue and gift box. A single source of dieline and artwork control can reduce avoidable mismatch during sampling, but each component still needs its own fit and finish review. This page is therefore about alignment between complementary packaging items, not about one bag shape or one box structure. The brief should include both products, accessories and the target retail or gifting occasion.</p>
          </div>
        </div>
      </section>


      {/* Why Coordinated Packaging */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">STRATEGIC ADVANTAGES</span>
            <h2>Why Use Coordinated Packaging Sets</h2>
            <p>Unify every customer touchpoint with harmonious design, color and structural proportion.</p>
          </div>
          <div className="mrb-features">
            {benefits.map((b) => (
              <article className="mrb-feature" key={b.title}>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Combinations */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">POPULAR COMBINATIONS</span>
            <h2>Paper Bag &amp; Rigid Box Combinations</h2>
            <p>Explore recommended pairings across our core rigid box structures and boutique shopping bags.</p>
          </div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {combinations.map((c) => (
              <article className="mrb-feature" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <div style={{ marginTop: 12, fontSize: 13, color: "#666" }}>
                  <strong>Ideal for:</strong> {c.ideal}
                </div>
                <p style={{ marginTop: 14 }}>
                  <a href={c.href} style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                    Compare Coordinated Structures →
                  </a>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Real Sample Showcase & Video */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">REAL SAMPLE PROOF</span>
            <h2>Real Coordinated Packaging Sets</h2>
            <p>Inspect physical samples demonstrating unified Pantone color matching, hot foil stamping and matching ribbon handles.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24, marginBottom: 32 }}>
            <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 10, overflow: "hidden" }}>
              <img
                src="/img/sample-paperbag-matching-set.jpg"
                alt="Matching paper bag and rigid box set"
                loading="lazy"
                style={{ width: "100%", height: 260, objectFit: "cover" }}
              />
              <div style={{ padding: "16px 20px" }}>
                <b style={{ fontSize: 16, color: "#111", display: "block", marginBottom: 6 }}>Matching Bag &amp; Rigid Presentation Box</b>
                <span style={{ fontSize: 13, color: "#555" }}>Unified paper grain and gold hot stamping across both carrier bag and presentation box.</span>
              </div>
            </div>
            <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 10, overflow: "hidden" }}>
              <img
                src="/img/sample-paperbag-coordinated-floral.jpg"
                alt="Coordinated floral packaging suite"
                loading="lazy"
                style={{ width: "100%", height: 260, objectFit: "cover" }}
              />
              <div style={{ padding: "16px 20px" }}>
                <b style={{ fontSize: 16, color: "#111", display: "block", marginBottom: 6 }}>Full-Bleed Pattern Printing Suite</b>
                <span style={{ fontSize: 13, color: "#555" }}>Multi-color offset pattern printing paired with metallic foil and matching grosgrain ribbon.</span>
              </div>
            </div>
            <div style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 10, overflow: "hidden" }}>
              <img
                src="/img/showroom-giftbox-paperbag-variety.png"
                alt="Showroom packaging suite variety"
                loading="lazy"
                style={{ width: "100%", height: 260, objectFit: "cover" }}
              />
              <div style={{ padding: "16px 20px" }}>
                <b style={{ fontSize: 16, color: "#111", display: "block", marginBottom: 6 }}>Packaging Showroom Display</b>
                <span style={{ fontSize: 13, color: "#555" }}>Compare coordinated bag and box sets in person at our manufacturing facility.</span>
              </div>
            </div>
          </div>

          {/* Video Demonstration */}
          <div style={{ maxWidth: 840, margin: "0 auto", background: "#000", borderRadius: 12, overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}>
            <video
              controls
              playsInline
              preload="none"
              poster="/img/sample-paperbag-matching-set.jpg"
              style={{ width: "100%", maxHeight: 460, display: "block" }}
            >
              <source src="/video/sample-matching-set-showcase.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p style={{ textAlign: "center", fontSize: 13, color: "#666", marginTop: 14 }}>
            <em>Video shows physical inspection of matching paper bag and rigid gift box packaging suite.</em>
          </p>
        </div>
      </section>

      {/* Alignment Workflow */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">DEVELOPMENT PROCESS</span>
            <h2>How We Synchronize Bags &amp; Boxes</h2>
            <p>Our 4-step engineering workflow ensures zero discrepancy between box and bag components.</p>
          </div>
          <div className="mrb-features">
            {alignmentSteps.map((s) => (
              <article className="mrb-feature" key={s.title}>
                <strong>{s.num}</strong>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about ordering custom paper bags with matching gift boxes.</p>
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

      {/* Guides */}
      <ProductBuyerGuides
        title="Coordinated Packaging Guides & Resources"
        subtitle="Technical advice on box structures, Pantone color matching and cost breakdown."
        guides={[
          {
            tag: "Box Structures",
            title: "Rigid Box Structure Guide: Magnetic vs Drawer vs Two-Piece",
            desc: "Compare opening styles and presentation across magnetic boxes, drawer boxes and lid-and-base sets.",
            href: "/resources/rigid-box-structure-guide-magnetic-vs-drawer-vs-two-piece/",
          },
          {
            tag: "Color Precision",
            title: "Pantone vs CMYK for Custom Packaging",
            desc: "Learn how Pantone spot colors ensure identical color temperature across boxes and bags.",
            href: "/resources/pantone-vs-cmyk-custom-packaging/",
          },
          {
            tag: "Cost Optimization",
            title: "Custom Packaging Cost Breakdown: What Buyers Are Paying For",
            desc: "Understand the key cost drivers when ordering coordinated box and bag packaging suites.",
            href: "/resources/custom-packaging-cost-breakdown/",
          },
        ]}
      />

      {/* Final Quote & Contact */}
      <section className="mrb-quote" id="quote">
        <div className="container mrb-quote-grid">
          <div>
            <span className="mrb-eyebrow">START A PROJECT</span>
            <h2>Develop Your Matching Box &amp; Bag Suite</h2>
            <p style={{ color: "#c5c5c5", lineHeight: 1.7, margin: "12px 0 16px" }}>
              Send us your product size, desired box structure, bag preferences and logo artwork.
              Our packaging specialists will develop a synchronized prototype and tier-based quotation.
            </p>
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
            <a className="mrb-back" href="/custom-packaging/">
              Start a Coordinated Packaging RFQ →
            </a>
          </div>
          <QuoteForm />
        </div>
      </section>
    </main>
  );
}
