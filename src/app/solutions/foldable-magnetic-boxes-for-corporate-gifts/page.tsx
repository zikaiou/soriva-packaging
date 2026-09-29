/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import ProductBuyerGuides from "../../components/ProductBuyerGuides";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL = "https://www.sorivapackaging.com/solutions/foldable-magnetic-boxes-for-corporate-gifts/";

export const metadata: Metadata = {
  title: {
    absolute: "Foldable Magnetic Gift Boxes for Corporate Gifts | SORIVA Packaging",
  },
  description:
    "Custom foldable magnetic gift boxes for corporate gifting, VIP onboarding and executive merchandise. Flat-pack storage, custom inserts and premium foil branding.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Foldable Magnetic Gift Boxes for Corporate Gifts | SORIVA Packaging",
    description:
      "Custom foldable magnetic gift boxes for corporate gifting, VIP onboarding and executive merchandise. Flat-pack storage, custom inserts and premium foil branding.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
    images: [
      {
        url: "https://www.sorivapackaging.com/img/project-gift-clean.webp",
        width: 1200,
        height: 900,
        alt: "Custom foldable magnetic gift boxes for corporate gifting",
      },
    ],
  },
};

const priorities = [
  {
    title: "Flat-Pack Storage & Event Logistics",
    desc: "Foldable structures can improve packing efficiency and reduce shipping volume for suitable projects.",
  },
  {
    title: "Multi-Item Compartment Inserts",
    desc: "EVA, velvet-covered, paperboard or molded pulp inserts can be selected according to product protection and presentation requirements.",
  },
  {
    title: "Smooth Magnetic Closure",
    desc: "Concealed magnets embedded inside the front flap provide a smooth, reliable magnetic closure upon closing.",
  },
  {
    title: "Executive Foil Branding",
    desc: "High-precision metallic foil stamping and embossing create an authoritative, premium corporate brand presence.",
  },
];

const assemblySteps = [
  {
    title: "1. Flat Storage",
    desc: "Boxes store flat at your office or warehouse, minimizing space requirements before events.",
  },
  {
    title: "2. Peel Adhesive Liners",
    desc: "Remove the corner release liners on the 4 pre-applied double-sided adhesive tabs.",
  },
  {
    title: "3. Form Rigid Structure",
    desc: "Lift the side panels and press the corners together for instant structural bond.",
  },
  {
    title: "4. Load Merchandise & Close",
    desc: "Insert corporate gifts (notebooks, pens, tumblers, tech accessories) and snap closed.",
  },
];

const inserts = [
  {
    title: "Multi-Compartment EVA Foam",
    desc: "Precision-routed EVA cavities tailored around notebooks, metal pens, drinkware and tech accessories.",
  },
  {
    title: "Velvet-Covered Trays",
    desc: "Plush velvet coating in executive black, navy blue or charcoal grey matching corporate palettes.",
  },
  {
    title: "Structured Cardboard Dividers",
    desc: "100% recyclable folded card partitions engineered for lightweight corporate gift assortments.",
  },
  {
    title: "Custom Molded Pulp Trays",
    desc: "Biodegradable molded fiber trays engineered for eco-conscious corporate ESG gifting initiatives.",
  },
];

const samples = [
  {
    img: "/img/project-gift-clean.webp",
    title: "Executive Onboarding Gift Box",
    desc: "Collapsible magnetic presentation box with silver foil branding and multi-compartment velvet EVA insert.",
  },
  {
    img: "/img/foldable-rigid.webp",
    title: "Corporate Event Launch Box",
    desc: "Foldable magnetic rigid box engineered for flat storage and rapid on-site assembly at corporate conferences.",
  },
  {
    img: "/img/hero-boxes.webp",
    title: "VIP Annual Presentation Suite",
    desc: "Luxury rigid presentation box with gold foil logo and tailored executive merchandise dividers.",
  },
];

const faqs = [
  {
    q: "Why choose foldable magnetic boxes for corporate gifts and events?",
    a: "Foldable structures can improve packing efficiency and reduce shipping volume for suitable projects, while providing an executive rigid presentation and satisfying magnetic closure.",
  },
  {
    q: "Can the interior insert hold varied items like pens, tumblers and tech accessories?",
    a: "Yes. EVA, velvet-covered, paperboard or molded pulp inserts can be selected according to product protection and presentation requirements.",
  },
  {
    q: "What is the MOQ for custom corporate foldable boxes?",
    a: "Selected custom corporate gift box projects can start from 100 pcs. Production volume tiers of 500–3,000+ pcs provide optimal unit economics.",
  },
  {
    q: "What paper wraps work best for corporate branding?",
    a: "Specialty textured papers (linen, ribbed, soft-touch matte) and dyed black or colored cardstock are popular choices for crisp foil stamping and blind embossing.",
  },
  {
    q: "Can I request a prototype sample before mass production?",
    a: "Yes. 1 pc prototype sample complete with custom insert, foil stamping and print colors is available for review and sign-off before commencing bulk manufacturing.",
  },
  {
    q: "Can we develop matching corporate paper shopping bags?",
    a: "Yes. We produce matching luxury paper shopping bags with ribbon or cotton rope handles, coordinated Pantone printing and matching foil accents for a complete event suite.",
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
        { "@type": "ListItem", position: 3, name: "Corporate Gift Boxes", item: PAGE_URL },
      ],
    },
    {
      "@type": "Service",
      name: "Custom Foldable Magnetic Boxes for Corporate Gifts",
      description:
        "OEM/ODM custom foldable magnetic rigid box manufacturing for corporate gifting, executive merchandising and events.",
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

export default function FoldableCorporateGiftBoxesSolution() {
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
            <a href="/">Home</a> / <a href="/custom-packaging/">Solutions</a> / Foldable Magnetic Gift Boxes for Corporate Gifts
          </nav>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">CORPORATE &amp; VIP GIFT PACKAGING</span>
              <h1>Custom Foldable Magnetic Boxes for Corporate Gifts</h1>
              <p className="mrb-lead">
                Elevate corporate onboarding and executive gifting with space-saving foldable magnetic boxes.
                Engineered with rigid board construction, multi-compartment inserts,
                concealed magnetic closure and metallic foil branding for global organizations.
              </p>
              <div className="mrb-tags">
                <span>MOQ From 100 pcs</span>
                <span>Flat-Pack Storage Efficiency</span>
                <span>Multi-Item Compartments</span>
                <span>Metallic Foil Stamping</span>
                <span>Worldwide Shipping</span>
              </div>
              <div className="mrb-hero-actions">
                <a href="/rfq/" className="btn gold">
                  Request Packaging Quote
                </a>
                <a
                  href={waLink(WA_MESSAGES.gifts)}
                  target="_blank"
                  rel="noopener"
                  className="btn-wa"
                >
                  <WhatsAppIcon /> Chat on WhatsApp
                </a>
                <a href="/industries/corporate-gift-packaging/" className="btn ghost">
                  Corporate Gift Packaging Hub
                </a>
              </div>
            </div>
            <div className="mrb-hero-media">
              <img
                src="/img/project-gift-clean.webp"
                alt="Custom foldable magnetic gift boxes for corporate gifting"
                width="1200"
                height="900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Priorities */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">CORPORATE GIFT PRIORITIES</span>
            <h2>Why Foldable Magnetic Boxes Suit Corporate Gifting</h2>
            <p>Corporate events require compact on-site storage, easy assembly and prestigious brand presentation.</p>
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
            <h2>Flat-Pack Structure &amp; Event Assembly</h2>
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
              <span className="eyebrow dark">MULTI-ITEM INSERTS</span>
              <h2>Custom Compartment Organization</h2>
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
              <span className="eyebrow dark">EXECUTIVE FINISHING</span>
              <h2>Brand Craftsmanship</h2>
            </div>
            <p style={{ color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
              Create an authoritative corporate impression:
            </p>
            <ul style={{ color: "#444", lineHeight: 1.8, paddingLeft: 20 }}>
              <li><strong>Metallic Hot Foil Stamping:</strong> Gold, silver, copper and holographic corporate logos.</li>
              <li><strong>Blind Embossing:</strong> Subtle raised monograms with tactile relief.</li>
              <li><strong>Specialty Textured Papers:</strong> Linen, ribbed and soft-touch tactile sheets.</li>
              <li><strong>Satin Ribbon Pulls:</strong> Integrated ribbon tabs for smooth opening.</li>
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
            <h2>Real Corporate Gift Box References</h2>
            <p>Explore real packaging capability samples produced for corporate gifting and VIP events.</p>
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

      {/* Internal Links to Corporate Hub & Projects */}
      <section className="mrb-section">
        <div className="container mrb-spec-wrap">
          <div>
            <div className="mrb-head">
              <span className="eyebrow dark">CORPORATE PACKAGING NETWORK</span>
              <h2>Complete Corporate Gifting Solutions</h2>
            </div>
            <p style={{ lineHeight: 1.7, color: "#444", marginBottom: 16 }}>
              In addition to foldable magnetic boxes, we engineer traditional two-piece gift boxes,
              sliding drawer boxes and matching corporate gift bags:
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="/industries/corporate-gift-packaging/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                Corporate Gift Packaging Hub →
              </a>
              <a href="/projects/corporate-luxury-gift-box/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                Corporate Luxury Gift Box Case Study →
              </a>
              <a href="/products/foldable-magnetic-rigid-boxes/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                Foldable Magnetic Rigid Boxes Catalog →
              </a>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <img
              src="/img/project-gift-clean.webp"
              alt="Corporate gift packaging solutions"
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
            <p>Common questions about custom foldable magnetic gift boxes for corporate events and VIP kits.</p>
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
        title="Corporate Packaging Guides & Resources"
        subtitle="Practical advice on box structures, custom insert foam and cost drivers."
        guides={[
          {
            tag: "Box Structures",
            title: "Rigid Box Structure Guide: Magnetic vs Drawer vs Two-Piece",
            desc: "Compare sliding drawer boxes, magnetic cases and lid-and-base boxes for gift presentations.",
            href: "/resources/rigid-box-structure-guide-magnetic-vs-drawer-vs-two-piece/",
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
            <h2>Develop Your Custom Corporate Foldable Boxes</h2>
            <p style={{ color: "#c5c5c5", lineHeight: 1.7, margin: "12px 0 16px" }}>
              Send us your gift set dimensions, target quantity, artwork files and insert preferences.
              Our packaging specialists will provide dielines, material recommendations and quotation.
            </p>
            <div className="mrb-contact">
              <div className="mrb-contact-note">
                <b>WhatsApp</b>
                <a href={waLink(WA_MESSAGES.gifts)} target="_blank" rel="noopener">
                  +86 159 1388 1634
                </a>
              </div>
              <div className="mrb-contact-note">
                <b>Email</b>
                <a href="mailto:AMY@XINGYUE.STORE">AMY@XINGYUE.STORE</a>
              </div>
            </div>
            <a className="mrb-back" href="/industries/corporate-gift-packaging/">
              Back to Corporate Gift Packaging Hub →
            </a>
          </div>
          <QuoteForm />
        </div>
      </section>
    </main>
  );
}
