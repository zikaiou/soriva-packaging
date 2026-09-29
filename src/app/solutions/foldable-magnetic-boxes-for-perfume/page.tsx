/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import ProductBuyerGuides from "../../components/ProductBuyerGuides";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL = "https://www.sorivapackaging.com/solutions/foldable-magnetic-boxes-for-perfume/";

export const metadata: Metadata = {
  title: {
    absolute: "Foldable Magnetic Boxes for Perfume | Luxury Flat-Pack Packaging | SORIVA Packaging",
  },
  description:
    "Custom foldable magnetic boxes for perfume and fragrance brands. Space-saving flat-pack shipping, tailored inserts, Pantone matching and luxury foil stamping.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Foldable Magnetic Boxes for Perfume | Luxury Flat-Pack Packaging | SORIVA Packaging",
    description:
      "Custom foldable magnetic boxes for perfume and fragrance brands. Space-saving flat-pack shipping, tailored inserts, Pantone matching and luxury foil stamping.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
    images: [
      {
        url: "https://www.sorivapackaging.com/img/project-perfume.webp",
        width: 1200,
        height: 900,
        alt: "Custom foldable magnetic boxes for perfume and fragrance bottles",
      },
    ],
  },
};

const priorities = [
  {
    title: "Flat-Pack Shipping Efficiency",
    desc: "Foldable structures can improve packing efficiency and reduce shipping volume for suitable projects.",
  },
  {
    title: "Rigid Box Presentation",
    desc: "Engineered with sturdy greyboard panels that pop up into a solid, premium presentation box upon assembly.",
  },
  {
    title: "Concealed Magnetic Closure",
    desc: "Concealed magnets embedded inside the front flap provide a smooth, reliable magnetic closure upon closing.",
  },
  {
    title: "Custom Perfume Insert Alignment",
    desc: "EVA, velvet-covered, paperboard or molded pulp inserts can be selected according to product protection and presentation requirements.",
  },
];

const assemblySteps = [
  {
    title: "1. Flat Storage",
    desc: "Boxes ship and store completely flat in export cartons, minimizing warehouse storage footprint.",
  },
  {
    title: "2. Peel Adhesive Liners",
    desc: "Remove the protective release liners from the 4 pre-applied corner adhesive tabs.",
  },
  {
    title: "3. Form Rigid Structure",
    desc: "Lift the side panels and press the corners together for instant structural bond.",
  },
  {
    title: "4. Insert & Close",
    desc: "Place the custom fragrance insert inside and close the magnetic flap with a satisfying snap.",
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
    title: "Fragrance Gift Set Foldable Box",
    desc: "Collapsible magnetic box with soft-touch matte wrap, gold foil typography and velvet-covered EVA insert.",
  },
  {
    img: "/img/perfume.webp",
    title: "Double-Bottle Perfume Carrier",
    desc: "Foldable magnetic closure box engineered with custom dual cavities for fragrance collections.",
  },
  {
    img: "/img/foldable-rigid.webp",
    title: "Luxury Discovery Foldable Presentation",
    desc: "Space-saving foldable rigid box with metallic hot stamping and precision interior insert dividers.",
  },
];

const faqs = [
  {
    q: "What makes a foldable perfume box different from a standard rigid box?",
    a: "The foldable format is reviewed around flat storage, corner assembly, bottle cavity and the required fragrance opening experience.",
  },
  {
    q: "What is the MOQ for a custom foldable perfume box?",
    a: "Selected custom projects can start from 100 pcs, depending on structure, materials, size and finishing.",
  },
  {
    q: "Can I request a prototype?",
    a: "A 1 pc prototype is available for selected projects to review assembly, insert fit, artwork and finishing.",
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
        { "@type": "ListItem", position: 3, name: "Foldable Perfume Boxes", item: PAGE_URL },
      ],
    },
    {
      "@type": "Service",
      name: "Custom Foldable Magnetic Boxes for Perfume",
      description:
        "OEM/ODM custom foldable magnetic rigid box manufacturing for perfume and fragrance brands.",
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

export default function FoldablePerfumeBoxesSolution() {
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
            <a href="/">Home</a> / <a href="/custom-packaging/">Solutions</a> / Foldable Magnetic Boxes for Perfume
          </nav>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">FRAGRANCE &amp; PERFUME PACKAGING</span>
              <h1>Custom Foldable Magnetic Boxes for Perfume</h1>
              <p className="mrb-lead">
                Combine luxury presentation with flat-pack shipping efficiency.
                Our custom foldable magnetic boxes feature sturdy greyboard panels,
                concealed magnetic closure, custom bottle inserts and metallic foil stamping for fragrance brands.
              </p>
              <div className="mrb-tags">
                <span>MOQ From 100 pcs</span>
                <span>Flat-Pack Shipping Efficiency</span>
                <span>Concealed Magnetic Closure</span>
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
                <a href="/products/foldable-magnetic-rigid-boxes/" className="btn ghost">
                  Foldable Boxes Catalog
                </a>
              </div>
            </div>
            <div className="mrb-hero-media">
              <img
                src="/img/project-perfume.webp"
                alt="Custom foldable magnetic boxes for perfume and fragrance bottles"
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
            <span className="eyebrow dark">FLAT-PACK FRAGRANCE DECISION</span>
            <h2>Buyer Decision Notes</h2>
            <p>For foldable perfume packaging, the buyer is balancing a rigid presentation with flat-pack storage and distribution. The structural decision is where folding joints, corner assembly and the magnetic flap should sit around the bottle cavity. A single fragrance bottle may need a centered cavity and cap clearance, while a discovery set may need dividers that remain aligned after assembly. The design brief should state whether boxes will be assembled at the factory, at a warehouse or close to a retail launch. This affects how the insert is handled and how the opening sequence is reviewed in the prototype. Product dimensions, carton strategy, campaign quantity and artwork hierarchy should be confirmed together so that the flat format supports the fragrance presentation instead of becoming a generic rigid-box variation.</p>
          </div>
        </div>
      </section>


      {/* Priorities */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">FRAGRANCE PACKAGING PRIORITIES</span>
            <h2>Why Foldable Magnetic Boxes Suit Perfume</h2>
            <p>Foldable structures combine rigid presentation with flat-pack storage and logistics advantages.</p>
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

      {/* Assembly Steps */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">ASSEMBLY WORKFLOW</span>
            <h2>Flat-Pack Structure &amp; Simple Pop-Up Assembly</h2>
            <p>Foldable structures can improve packing efficiency and reduce shipping volume for suitable projects.</p>
          </div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {assemblySteps.map((s) => (
              <article className="mrb-feature" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Inserts & Finishing */}
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
            <h2>Real Perfume Foldable Box References</h2>
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
              In addition to foldable magnetic boxes, we engineer traditional magnetic rigid boxes,
              two-piece lid-and-base boxes and matching boutique shopping bags for perfume brands:
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="/industries/perfume-packaging/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                Perfume Packaging Industry Hub →
              </a>
              <a href="/products/foldable-magnetic-rigid-boxes/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                Foldable Magnetic Rigid Boxes Catalog →
              </a>
              <a href="/products/magnetic-rigid-boxes/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                Traditional Magnetic Boxes →
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
            <p>Common questions about custom foldable magnetic boxes for perfume and fragrance packaging.</p>
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
            tag: "Foldable Comparison",
            title: "Foldable vs Traditional Rigid Boxes",
            desc: "Understand how foldable magnetic rigid boxes optimize storage space and international shipping costs.",
            href: "/resources/foldable-vs-traditional-rigid-box/",
          },
          {
            tag: "Shipping Costs",
            title: "How to Reduce Custom Packaging Shipping Cost",
            desc: "Explore packaging design choices that optimize export shipping volume and container load.",
            href: "/resources/how-to-reduce-custom-packaging-shipping-cost/",
          },
        ]}
      />

      {/* Final Quote & Contact */}
      <section className="mrb-quote" id="quote">
        <div className="container mrb-quote-grid">
          <div>
            <span className="mrb-eyebrow">START A PROJECT</span>
            <h2>Develop Your Custom Foldable Perfume Boxes</h2>
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
