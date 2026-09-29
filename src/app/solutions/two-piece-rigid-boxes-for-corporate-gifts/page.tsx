/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import ProductBuyerGuides from "../../components/ProductBuyerGuides";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL = "https://www.sorivapackaging.com/solutions/two-piece-rigid-boxes-for-corporate-gifts/";

export const metadata: Metadata = {
  title: {
    absolute: "Two-Piece Rigid Gift Boxes for Corporate Gifts | SORIVA Packaging",
  },
  description:
    "Custom two-piece rigid gift boxes for corporate gifting, executive merchandising and VIP event kits. Lid and base structure, custom inserts and precision foil branding.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Two-Piece Rigid Gift Boxes for Corporate Gifts | SORIVA Packaging",
    description:
      "Custom two-piece rigid gift boxes for corporate gifting, executive merchandising and VIP event kits. Lid and base structure, custom inserts and precision foil branding.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
    images: [
      {
        url: "https://www.sorivapackaging.com/img/project-gift-clean.webp",
        width: 1200,
        height: 900,
        alt: "Custom two-piece rigid gift boxes for corporate gifting",
      },
    ],
  },
};

const priorities = [
  {
    title: "Executive Presentation & Unboxing",
    desc: "Separate lid and base construction creates an authoritative, prestigious gift reveal suitable for VIP clients and corporate milestones.",
  },
  {
    title: "Multi-Item Compartment Planning",
    desc: "EVA, velvet-covered, paperboard or molded pulp inserts can be selected according to product protection and presentation requirements.",
  },
  {
    title: "Sturdy Rigid Construction",
    desc: "Greyboard thickness is selected according to box size, product weight and structural requirements to ensure structural stability during handling.",
  },
  {
    title: "Precision Corporate Branding",
    desc: "High-precision metallic foil stamping and embossing create an authoritative, premium corporate brand presence.",
  },
];

const structures = [
  {
    title: "Deep Lid Presentation Box",
    desc: "Full-telescope lid covering the base completely, delivering maximum structural strength for heavier corporate gift sets.",
    ideal: "Executive onboarding hampers, premium drinkware sets and anniversary collections.",
  },
  {
    title: "Shoulder / Neck Corporate Box",
    desc: "Features an exposed interior neck in contrasting gold, silver or black that creates a refined color reveal band when closed.",
    ideal: "VIP executive gifts, tech luxury kits and corporate award presentations.",
  },
  {
    title: "Partial-Telescope Gift Box",
    desc: "Features a shallow lid covering the upper section of the base, creating an easy-to-grip lip for fast opening at corporate events.",
    ideal: "Conference attendee kits, branded employee swag and promotional event gift sets.",
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
    title: "Corporate Luxury Gift Box",
    desc: "Two-piece lid-and-base presentation box with gold foil branding and multi-compartment velvet insert.",
  },
  {
    img: "/img/two-piece-rigid.webp",
    title: "Executive Presentation Box",
    desc: "Classic two-piece rigid box engineered for executive merchandise and corporate anniversary gifting.",
  },
  {
    img: "/img/hero-boxes.webp",
    title: "VIP Annual Gift Suite",
    desc: "Luxury rigid presentation box with metallic foil typography and tailored executive dividers.",
  },
];

const faqs = [
  {
    q: "How should a layered corporate gift set be planned?",
    a: "Define the item list, stacking order, presentation height and compartment layout before the lid and base are finalized.",
  },
  {
    q: "What is the MOQ for a custom corporate two-piece box?",
    a: "Selected custom projects can start from 100 pcs, depending on structure, materials, size and finishing.",
  },
  {
    q: "Can I request a prototype?",
    a: "A 1 pc prototype is available for selected projects to review compartments, lid fit, artwork and finishing.",
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
        { "@type": "ListItem", position: 3, name: "Corporate Two-Piece Boxes", item: PAGE_URL },
      ],
    },
    {
      "@type": "Service",
      name: "Custom Two-Piece Rigid Boxes for Corporate Gifts",
      description:
        "OEM/ODM custom two-piece lid and base rigid box manufacturing for corporate gifting, executive merchandising and events.",
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

export default function TwoPieceCorporateGiftBoxesSolution() {
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
            <a href="/">Home</a> / <a href="/custom-packaging/">Solutions</a> / Two-Piece Rigid Gift Boxes for Corporate Gifts
          </nav>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">CORPORATE &amp; VIP GIFT PACKAGING</span>
              <h1>Custom Two-Piece Rigid Boxes for Corporate Gifts</h1>
              <p className="mrb-lead">
                Elevate corporate onboarding and executive gifting with bespoke two-piece lid and base rigid boxes.
                Engineered with sturdy greyboard construction, multi-compartment inserts
                and metallic foil branding for global organizations.
              </p>
              <div className="mrb-tags">
                <span>MOQ From 100 pcs</span>
                <span>Classic Lid &amp; Base Design</span>
                <span>Multi-Item Compartments</span>
                <span>Metallic Foil Stamping</span>
                <span>Worldwide Shipping</span>
              </div>
              <div className="mrb-hero-actions">
                <a href="/rfq/" className="btn gold">
                  Request Packaging Quote
                </a>
                <a
                  href={waLink(WA_MESSAGES.corporateGift)}
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
                alt="Custom two-piece rigid gift boxes for corporate gifting"
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
            <span className="eyebrow dark">LAYERED CORPORATE GIFT DECISION</span>
            <h2>Buyer Decision Notes</h2>
            <p>Corporate two-piece boxes are suited to larger-format presentation where a lid-and-base reveal can stage several items in layers. The buyer decision is compartment planning: a deep base may hold drinkware, notebooks, accessories or a seasonal assortment, while a raised tray or divider can create a clear first view. The specification should define item dimensions, stacking order, presentation height and whether a paperboard, EVA, velvet-covered or molded pulp insert is appropriate. A corporate milestone, VIP event or employee onboarding kit may each require a different visual sequence and message panel. Sampling should review the assembled set, lid clearance and logo placement together. This keeps the project anchored in layered corporate presentation instead of repeating the compact jewelry or bottle-fit logic used by other two-piece pages.</p>
          </div>
        </div>
      </section>


      {/* Priorities */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">CORPORATE GIFT PRIORITIES</span>
            <h2>Why Two-Piece Rigid Boxes Suit Corporate Gifting</h2>
            <p>Corporate events and VIP gifting benefit from classic unboxing, robust protection and prestigious brand presentation.</p>
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
            <h2>Two-Piece Structures for Executive Merchandise</h2>
            <p>Select tailored lid configurations engineered for multi-item gift sets, VIP hampers and award kits.</p>
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
              In addition to two-piece rigid boxes, we engineer foldable magnetic boxes,
              sliding drawer boxes and matching corporate gift bags:
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="/industries/corporate-gift-packaging/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                Corporate Gift Packaging Hub →
              </a>
              <a href="/products/two-piece-rigid-boxes/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                Two-Piece Rigid Boxes Catalog →
              </a>
              <a href="/projects/corporate-luxury-gift-box/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                Corporate Luxury Gift Box Case Study →
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
            <p>Common questions about custom two-piece rigid gift boxes for corporate events and VIP kits.</p>
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
            tag: "Board Caliper",
            title: "Rigid Greyboard Thickness Guide for Custom Boxes",
            desc: "A buyer guide to choosing greyboard thickness based on box size and product weight.",
            href: "/resources/rigid-greyboard-thickness-guide-custom-boxes/",
          },
          {
            tag: "Cost Breakdown",
            title: "Custom Packaging Cost Breakdown: What Buyers Are Paying For",
            desc: "Understand what drives custom packaging costs, including board thickness, inserts and freight.",
            href: "/resources/custom-packaging-cost-breakdown/",
          },
        ]}
      />

      {/* Final Quote & Contact */}
      <section className="mrb-quote" id="quote">
        <div className="container mrb-quote-grid">
          <div>
            <span className="mrb-eyebrow">START A PROJECT</span>
            <h2>Develop Your Custom Corporate Two-Piece Boxes</h2>
            <p style={{ color: "#c5c5c5", lineHeight: 1.7, margin: "12px 0 16px" }}>
              Send us your gift set dimensions, target quantity, artwork files and insert preferences.
              Our packaging specialists will provide dielines, material recommendations and quotation.
            </p>
            <div className="mrb-contact">
              <div className="mrb-contact-note">
                <b>WhatsApp</b>
                <a href={waLink(WA_MESSAGES.corporateGift)} target="_blank" rel="noopener">
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
