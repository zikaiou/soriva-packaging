/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import ProductBuyerGuides from "../../components/ProductBuyerGuides";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL = "https://www.sorivapackaging.com/solutions/magnetic-rigid-boxes-for-perfume/";

export const metadata: Metadata = {
  title: {
    absolute: "Magnetic Rigid Boxes for Perfume | Custom Luxury Perfume Packaging | SORIVA Packaging",
  },
  description:
    "Custom magnetic rigid boxes for perfume and fragrance bottles. Premium board structures, custom-cut velvet EVA inserts, Pantone color matching and luxury foil stamping.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Magnetic Rigid Boxes for Perfume | Custom Luxury Perfume Packaging | SORIVA Packaging",
    description:
      "Custom magnetic rigid boxes for perfume and fragrance bottles. Premium board structures, custom-cut velvet EVA inserts, Pantone color matching and luxury foil stamping.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
    images: [
      {
        url: "https://www.sorivapackaging.com/img/project-perfume.webp",
        width: 1200,
        height: 900,
        alt: "Custom magnetic rigid boxes for perfume and fragrance bottles",
      },
    ],
  },
};

const priorities = [
  {
    title: "Glass Bottle Protection",
    desc: "Greyboard thickness is selected according to box size, product weight and structural requirements to ensure structural protection during transit.",
  },
  {
    title: "Concealed Magnetic Closure",
    desc: "Concealed magnets embedded inside the front flap provide a smooth, reliable magnetic closure upon closing.",
  },
  {
    title: "Precision Bottle Cavity Fit",
    desc: "EVA, velvet-covered, paperboard or molded pulp inserts can be selected according to product protection and presentation requirements.",
  },
  {
    title: "Pantone (PMS) Brand Fidelity",
    desc: "Calibrated spot color ink matching across wrap papers, interior lining and coordinated gift bags ensures cohesive brand color fidelity.",
  },
];

const structures = [
  {
    title: "Book-Style Magnetic Box",
    desc: "Three-panel rigid construction opening like a hardcover book, offering an expansive interior lid surface for brand presentation.",
    ideal: "Signature perfume collections, fragrance launches and gift sets.",
  },
  {
    title: "Front-Opening Flap Magnetic Box",
    desc: "Single or double magnetic flap extending over the front edge for a secure magnetic closure and clean exterior silhouette.",
    ideal: "Standard retail fragrance bottles, eau de parfum bottles and travel atomizers.",
  },
  {
    title: "Foldable Magnetic Rigid Box",
    desc: "Foldable structures can improve packing efficiency and reduce shipping volume for suitable projects.",
    ideal: "Retail distribution, boutique shipping and seasonal gift campaigns.",
  },
];

const inserts = [
  {
    title: "Custom EVA Foam Inserts",
    desc: "Shock-absorbing foam precision-cut to the contour of the fragrance bottle and cap.",
  },
  {
    title: "Velvet-Covered Trays",
    desc: "Plush velvet coating bonded over EVA or formed trays for a refined presentation cradle.",
  },
  {
    title: "Custom Molded Pulp Trays",
    desc: "Biodegradable wet-pressed molded fiber inserts contoured smoothly around the bottle for sustainable packaging programs.",
  },
  {
    title: "Structured Paperboard Dividers",
    desc: "Recyclable folded card partitions engineered to organize multi-bottle discovery sets and sample vials.",
  },
];

const samples = [
  {
    img: "/img/project-perfume.webp",
    title: "Signature Fragrance Magnetic Box",
    desc: "Book-style magnetic box with soft-touch matte wrap, gold foil typography and velvet-covered EVA insert.",
  },
  {
    img: "/img/perfume.webp",
    title: "Double-Bottle Fragrance Gift Set",
    desc: "Front-flap magnetic closure box engineered with custom dual cavities for 50ml and 100ml fragrance bottles.",
  },
  {
    img: "/img/magnetic-rigid.webp",
    title: "Luxury Discovery Presentation Box",
    desc: "Rigid magnetic presentation box with metallic hot stamping and precision interior insert dividers.",
  },
];

const faqs = [
  {
    q: "Which perfume bottle details should be supplied for a cavity review?",
    a: "Provide bottle and cap dimensions, filled weight, orientation and any approved physical sample so the insert cavity can be reviewed.",
  },
  {
    q: "What is the MOQ for a custom perfume magnetic box?",
    a: "Selected custom projects can start from 100 pcs, depending on structure, materials, size and finishing.",
  },
  {
    q: "Can I request a prototype?",
    a: "A 1 pc prototype is available for selected projects to review cavity fit, closure, artwork and finishing.",
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
        { "@type": "ListItem", position: 3, name: "Perfume Magnetic Boxes", item: PAGE_URL },
      ],
    },
    {
      "@type": "Service",
      name: "Custom Magnetic Rigid Boxes for Perfume",
      description:
        "OEM/ODM custom magnetic rigid box manufacturing for perfume, fragrance and beauty brands.",
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

export default function PerfumeMagneticBoxesSolution() {
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
            <a href="/">Home</a> / <a href="/custom-packaging/">Solutions</a> / Magnetic Rigid Boxes for Perfume
          </nav>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">FRAGRANCE &amp; PERFUME PACKAGING</span>
              <h1>Custom Magnetic Rigid Boxes for Perfume</h1>
              <p className="mrb-lead">
                Elevate your fragrance presentation with bespoke magnetic rigid boxes.
                Engineered with sturdy greyboard structures, precision-cut velvet-covered EVA inserts,
                concealed magnetic closure and metallic hot foil stamping for luxury perfume brands.
              </p>
              <div className="mrb-tags">
                <span>MOQ From 100 pcs</span>
                <span>Concealed Magnetic Closure</span>
                <span>Velvet-Covered EVA Inserts</span>
                <span>Pantone (PMS) Color Matching</span>
                <span>Worldwide Shipping</span>
              </div>
              <div className="mrb-hero-actions">
                <a href="/rfq/" className="btn gold">
                  Request Packaging Quote
                </a>
                <a
                  href={waLink(WA_MESSAGES.perfume)}
                  target="_blank"
                  rel="noopener"
                  className="btn-wa"
                >
                  <WhatsAppIcon /> Chat on WhatsApp
                </a>
                <a href="/products/magnetic-rigid-boxes/" className="btn ghost">
                  Magnetic Boxes Catalog
                </a>
              </div>
            </div>
            <div className="mrb-hero-media">
              <img
                src="/img/project-perfume.webp"
                alt="Custom magnetic rigid boxes for perfume and fragrance bottles"
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
            <span className="eyebrow dark">PERFUME BOTTLE DECISION</span>
            <h2>Buyer Decision Notes</h2>
            <p>Perfume packaging buyers usually decide between a presentation-led opening and a cavity-led fit. For a magnetic rigid box, the important questions are the bottle orientation, cap clearance, insert cavity geometry and how the front flap presents the fragrance when opened. A book-style structure can give the inner lid room for artwork or a scent story, while a front-opening format can keep the bottle visually direct. Insert material is selected after reviewing the bottle, cap and filled weight rather than from a generic template. The sourcing brief should also state whether the box is for one bottle, a discovery set or a coordinated fragrance gift. This keeps the magnetic closure, interior layout, wrap paper and finishing aligned with the actual perfume presentation.</p>
          </div>
        </div>
      </section>


      {/* Priorities */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">FRAGRANCE PACKAGING PRIORITIES</span>
            <h2>Why Magnetic Rigid Boxes Work for Perfume</h2>
            <p>Fragrance bottles benefit from reliable structural support, organized presentation and an elegant unboxing reveal.</p>
          </div>
          <div className="mrb-features">
            {priorities.map((p) => (
              <article className="mrb-feature" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Box Structures */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">BOX STRUCTURE OPTIONS</span>
            <h2>Recommended Magnetic Structures for Perfume</h2>
            <p>Select tailored box silhouettes engineered for single bottles, travel atomizers or discovery sets.</p>
          </div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {structures.map((s) => (
              <article className="mrb-feature" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div style={{ marginTop: 12, fontSize: 13, color: "#666" }}>
                  <strong>Best for:</strong> {s.ideal}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Inserts & Materials */}
      <section className="mrb-section">
        <div className="container mrb-spec-wrap">
          <div>
            <div className="mrb-head">
              <span className="eyebrow dark">BOTTLE CAVITY INSERTS</span>
              <h2>Custom Inserts for Perfume Bottles</h2>
            </div>
            <p style={{ color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
              EVA, velvet-covered, paperboard or molded pulp inserts can be selected according to product protection and presentation requirements:
            </p>
            <div style={{ display: "grid", gap: 14 }}>
              {inserts.map((ins) => (
                <div key={ins.title} style={{ background: "#fcfbfa", padding: "14px 18px", borderRadius: 8, border: "1px solid #e7e2d9" }}>
                  <b style={{ color: "#111", display: "block", marginBottom: 4 }}>{ins.title}</b>
                  <span style={{ fontSize: 13, color: "#555" }}>{ins.desc}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mrb-structure">
            <div className="mrb-head">
              <span className="eyebrow dark">FINISHING &amp; EMBELLISHMENTS</span>
              <h2>Surface Craftsmanship</h2>
            </div>
            <p style={{ color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
              Add visual contrast and tactile refinement to your perfume box exterior:
            </p>
            <ul style={{ color: "#444", lineHeight: 1.8, paddingLeft: 20 }}>
              <li><strong>Metallic Hot Foil:</strong> Gold, silver, copper, rose gold and holographic foil.</li>
              <li><strong>3D Embossing &amp; Debossing:</strong> Raised monograms and tactile logo reliefs.</li>
              <li><strong>Soft-Touch Matte Lamination:</strong> Smooth matte tactile finish.</li>
              <li><strong>Gloss Spot UV:</strong> High-shine selective coating for sharp logo contrast.</li>
            </ul>
            <div style={{ marginTop: 20 }}>
              <a href="/resources/foil-stamping-vs-embossing-vs-spot-uv/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                Compare Foil Stamping vs Embossing Guide →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Real Sample Gallery */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">SAMPLE PROOF</span>
            <h2>Real Perfume Magnetic Box References</h2>
            <p>Explore real packaging capability samples produced for fragrance and perfume brands.</p>
          </div>
          <div className="mrb-apps" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            {samples.map((s) => (
              <article className="mrb-app" key={s.title} style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 10, overflow: "hidden" }}>
                <img src={s.img} alt={s.title} loading="lazy" style={{ width: "100%", height: 260, objectFit: "cover" }} />
                <div style={{ padding: "16px 20px" }}>
                  <b style={{ fontSize: 17, color: "#111", display: "block", marginBottom: 6 }}>{s.title}</b>
                  <span style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>{s.desc}</span>
                </div>
              </article>
            ))}
          </div>
          <p style={{ fontSize: 12, color: "#888", textAlign: "center", marginTop: 16 }}>
            <em>Sample displays shown for packaging capability reference.</em>
          </p>
        </div>
      </section>

      {/* Internal Links to Perfume Hub & Projects */}
      <section className="mrb-section">
        <div className="container mrb-spec-wrap">
          <div>
            <div className="mrb-head">
              <span className="eyebrow dark">PERFUME PACKAGING NETWORK</span>
              <h2>Complete Fragrance Packaging Solutions</h2>
            </div>
            <p style={{ lineHeight: 1.7, color: "#444", marginBottom: 16 }}>
              In addition to magnetic rigid boxes, we engineer two-piece lid-and-base boxes,
              sliding drawer structures and matching boutique paper shopping bags for perfume brands:
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="/industries/perfume-packaging/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                Perfume Packaging Industry Hub →
              </a>
              <a href="/projects/premium-perfume-packaging/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                Premium Perfume Case Study →
              </a>
              <a href="/products/magnetic-rigid-boxes/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                Magnetic Rigid Boxes Catalog →
              </a>
              <a href="/resources/perfume-packaging-buyer-guide/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                Guide to Custom Perfume Packaging →
              </a>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <img
              src="/img/perfume.webp"
              alt="Fragrance presentation packaging solutions"
              loading="lazy"
              style={{ width: "100%", borderRadius: 10, border: "1px solid #e7e2d9", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about custom magnetic rigid boxes for perfume and fragrance packaging.</p>
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
        title="Perfume Packaging Guides & Resources"
        subtitle="Practical buyer guides on bottle measurement, insert engineering and color control."
        guides={[
          {
            tag: "Bottle Measurement",
            title: "How to Measure a Product for Custom Box Packaging",
            desc: "Learn how to calculate clearances, cavity depth and bottle tolerances for perfume packaging.",
            href: "/resources/how-to-measure-product-for-custom-box-packaging/",
          },
          {
            tag: "Packaging Inserts",
            title: "EVA vs Paperboard vs Molded Pulp Packaging Inserts",
            desc: "Compare protection, presentation and sustainability across fragrance insert materials.",
            href: "/resources/packaging-inserts-eva-vs-paperboard-vs-molded-pulp/",
          },
          {
            tag: "Sampling",
            title: "Prototype Sample vs Pre-Production Sample: What Buyers Should Know",
            desc: "Understand what each sample stage verifies before releasing bulk perfume box manufacturing.",
            href: "/resources/prototype-sample-vs-pre-production-sample/",
          },
        ]}
      />

      {/* Final Quote & Contact */}
      <section className="mrb-quote" id="quote">
        <div className="container mrb-quote-grid">
          <div>
            <span className="mrb-eyebrow">START A PROJECT</span>
            <h2>Develop Your Custom Perfume Magnetic Boxes</h2>
            <p style={{ color: "#c5c5c5", lineHeight: 1.7, margin: "12px 0 16px" }}>
              Send us your perfume bottle dimensions, target quantity, artwork files and insert preferences.
              Our packaging specialists will provide dielines, material recommendations and quotation.
            </p>
            <div className="mrb-contact">
              <div className="mrb-contact-note">
                <b>WhatsApp</b>
                <a href={waLink(WA_MESSAGES.perfume)} target="_blank" rel="noopener">
                  +86 159 1388 1634
                </a>
              </div>
              <div className="mrb-contact-note">
                <b>Email</b>
                <a href="mailto:AMY@XINGYUE.STORE">AMY@XINGYUE.STORE</a>
              </div>
            </div>
            <a className="mrb-back" href="/industries/perfume-packaging/">
              Back to Perfume Packaging Hub →
            </a>
          </div>
          <QuoteForm />
        </div>
      </section>
    </main>
  );
}
