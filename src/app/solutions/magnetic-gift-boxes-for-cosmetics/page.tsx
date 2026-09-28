/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import ProductBuyerGuides from "../../components/ProductBuyerGuides";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL = "https://www.sorivapackaging.com/solutions/magnetic-gift-boxes-for-cosmetics/";

export const metadata: Metadata = {
  title: {
    absolute: "Magnetic Gift Boxes for Cosmetics | Custom Luxury Cosmetic Packaging | SORIVA Packaging",
  },
  description:
    "Custom magnetic gift boxes for cosmetics and luxury skincare collections. Tailored rigid box structures, multi-product cavity inserts, brand finishes and global shipping.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Magnetic Gift Boxes for Cosmetics | Custom Luxury Cosmetic Packaging | SORIVA Packaging",
    description:
      "Custom magnetic gift boxes for cosmetics and luxury skincare collections. Tailored rigid box structures, multi-product cavity inserts, brand finishes and global shipping.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
    images: [
      {
        url: "https://www.sorivapackaging.com/img/cosmetics.webp",
        width: 1200,
        height: 900,
        alt: "Custom magnetic gift boxes for cosmetics and luxury skincare",
      },
    ],
  },
};

const priorities = [
  {
    title: "Multi-Product Cavity Organization",
    desc: "Cosmetic gift sets often combine serums, creams, toners and spatulas. We engineer custom-cut inserts holding each item securely in its designated place.",
  },
  {
    title: "Smooth Magnetic Closure",
    desc: "Concealed magnets inside the front flap provide a smooth, reliable magnetic closure that reinforces product presentation upon every use.",
  },
  {
    title: "Velvet Soft-Touch Finish",
    desc: "Smooth soft-touch matte lamination creates a refined tactile surface suitable for cosmetic retail presentation.",
  },
  {
    title: "Foldable Packaging Option",
    desc: "Foldable structures can improve packing efficiency and reduce shipping volume for suitable projects.",
  },
];

const structures = [
  {
    title: "Book-Style Magnetic Box",
    desc: "Classic three-panel rigid construction opening like an encyclopedia, perfect for displaying multi-step skincare routines on the interior lid.",
    ideal: "Skincare starter kits, anti-aging regimens and holiday gift collections.",
  },
  {
    title: "Collapsible Foldable Magnetic Box",
    desc: "Foldable structures can improve packing efficiency and reduce shipping volume for suitable projects.",
    ideal: "Ecommerce brands, subscription beauty boxes and retail programs.",
  },
  {
    title: "Deep Base Magnetic Box",
    desc: "Engineered with tailored vertical gussets to accommodate glass jars, pump bottles and foundation compacts.",
    ideal: "Comprehensive full-routine beauty sets and luxury cosmetic hampers.",
  },
];

const inserts = [
  {
    title: "Custom EVA Foam Inserts",
    desc: "Custom-cut EVA foam with precision depth stepped around droppers, jars and applicators.",
  },
  {
    title: "Velvet-Covered Custom Trays",
    desc: "Plush velvet flocking in black, white, pastel pink or nude tones matching your brand aesthetic.",
  },
  {
    title: "Sustainable Molded Pulp",
    desc: "Biodegradable wet-pressed molded fiber trays engineered for eco-conscious clean beauty brands.",
  },
  {
    title: "Cardboard Cushion Dividers",
    desc: "Recyclable folded paperboard partitions for lightweight cosmetic sets and promotional kits.",
  },
];

const samples = [
  {
    img: "/img/project-skincare.webp",
    title: "Multi-Product Skincare Magnetic Box",
    desc: "Foldable magnetic rigid box with rose gold foil stamping, custom-cut EVA insert and Pantone color matching.",
  },
  {
    img: "/img/cosmetics.webp",
    title: "Luxury Beauty Presentation Set",
    desc: "Book-style magnetic closure gift box with velvet-lined interior tray for skincare bottles and jars.",
  },
  {
    img: "/img/foldable-rigid.webp",
    title: "Collapsible Cosmetic Carrier Box",
    desc: "Space-saving foldable magnetic box engineered for efficient international shipping and retail display.",
  },
];

const faqs = [
  {
    q: "Can a single magnetic box hold multiple skincare products of different sizes?",
    a: "Yes. EVA, velvet-covered, paperboard or molded pulp inserts can be selected according to product protection and presentation requirements.",
  },
  {
    q: "How does the foldable magnetic rigid box work for cosmetics?",
    a: "The box is manufactured from rigid greyboard but engineered with pre-scored folding joints. Foldable structures can improve packing efficiency and reduce shipping volume for suitable projects.",
  },
  {
    q: "What is the MOQ for custom cosmetic magnetic boxes?",
    a: "Selected custom cosmetic magnetic box projects can start from 100 pcs. Production volume tiers of 500–3,000+ pcs provide optimal unit economics.",
  },
  {
    q: "Can you match our beauty brand's exact Pantone colors?",
    a: "Yes. We offer precise Pantone (PMS) spot color ink mixing for exterior wraps, inner lid printing and interior trays to maintain brand color fidelity.",
  },
  {
    q: "Can I get a prototype sample before placing a bulk order?",
    a: "Yes. 1 pc prototype sample (complete with custom insert and foil stamping) is available to verify bottle snugness and opening experience before bulk manufacturing.",
  },
  {
    q: "Can we develop matching paper bags for our cosmetic gift boxes?",
    a: "Yes. We produce matching luxury paper shopping bags with ribbon handles, coordinated Pantone printing and matching foil accents for a complete retail packaging suite.",
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
        { "@type": "ListItem", position: 3, name: "Cosmetic Magnetic Boxes", item: PAGE_URL },
      ],
    },
    {
      "@type": "Service",
      name: "Custom Magnetic Gift Boxes for Cosmetics",
      description:
        "OEM/ODM custom magnetic gift box manufacturing for cosmetics, beauty and skincare brands.",
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

export default function CosmeticMagneticBoxesSolution() {
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
            <a href="/">Home</a> / <a href="/custom-packaging/">Solutions</a> / Magnetic Gift Boxes for Cosmetics
          </nav>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">COSMETIC &amp; BEAUTY PACKAGING</span>
              <h1>Custom Magnetic Gift Boxes for Cosmetics</h1>
              <p className="mrb-lead">
                Create memorable beauty unboxing experiences with custom magnetic gift boxes.
                Engineered with multi-product cavity inserts, soft-touch velvet lamination,
                concealed magnetic closure and metallic foil stamping for premium skincare and cosmetic sets.
              </p>
              <div className="mrb-tags">
                <span>MOQ From 100 pcs</span>
                <span>Multi-Product Custom Inserts</span>
                <span>Foldable Packaging Option</span>
                <span>Soft-Touch Velvet Finish</span>
                <span>Worldwide Shipping</span>
              </div>
              <div className="mrb-hero-actions">
                <a href="/rfq/" className="btn gold">
                  Request Packaging Quote
                </a>
                <a
                  href={waLink(WA_MESSAGES.cosmetics)}
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
                src="/img/cosmetics.webp"
                alt="Custom magnetic gift boxes for cosmetics and luxury skincare"
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
            <span className="eyebrow dark">BEAUTY PACKAGING PRIORITIES</span>
            <h2>Why Magnetic Gift Boxes Suit Cosmetics</h2>
            <p>Multi-product skincare routines benefit from organized presentation, reliable protection and a refined tactile feel.</p>
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
            <h2>Magnetic Structures for Beauty Brands</h2>
            <p>Choose from classic book-style presentation boxes, collapsible foldable boxes and deep-base sets.</p>
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
              <span className="eyebrow dark">MULTI-PRODUCT INSERTS</span>
              <h2>Custom Inserts for Jars &amp; Bottles</h2>
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
              <span className="eyebrow dark">LUXURY FINISHING</span>
              <h2>Brand Aesthetics &amp; Embellishments</h2>
            </div>
            <p style={{ color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
              Create an elegant impression on retail counters:
            </p>
            <ul style={{ color: "#444", lineHeight: 1.8, paddingLeft: 20 }}>
              <li><strong>Pantone (PMS) Color Matching:</strong> Exact shades for pastel or vibrant beauty branding.</li>
              <li><strong>Metallic Foil Stamping:</strong> Rose gold, yellow gold, silver and holographic foil logos.</li>
              <li><strong>Multi-Level Embossing:</strong> 3D tactile relief on logos and brand patterns.</li>
              <li><strong>Soft-Touch Matte Lamination:</strong> Smooth matte finish with surface protection.</li>
            </ul>
            <div style={{ marginTop: 20 }}>
              <a href="/resources/pantone-vs-cmyk-custom-packaging/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                Read our Pantone vs CMYK Color Guide →
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
            <h2>Real Cosmetic Magnetic Box References</h2>
            <p>Explore real packaging capability samples produced for cosmetics and skincare brands.</p>
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

      {/* Internal Links to Cosmetic Hub & Projects */}
      <section className="mrb-section">
        <div className="container mrb-spec-wrap">
          <div>
            <div className="mrb-head">
              <span className="eyebrow dark">COSMETIC PACKAGING NETWORK</span>
              <h2>Complete Beauty Packaging Solutions</h2>
            </div>
            <p style={{ lineHeight: 1.7, color: "#444", marginBottom: 16 }}>
              In addition to magnetic rigid boxes, we produce foldable boxes, sliding drawer boxes
              and matching boutique shopping bags for cosmetics and skincare brands:
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="/industries/cosmetic-packaging/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                Cosmetic Packaging Industry Hub →
              </a>
              <a href="/projects/luxury-skincare-gift-box/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                Skincare Gift Box Case Study →
              </a>
              <a href="/products/foldable-magnetic-rigid-boxes/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                Foldable Magnetic Rigid Boxes →
              </a>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <img
              src="/img/project-skincare.webp"
              alt="Skincare presentation packaging solutions"
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
            <p>Common questions about custom magnetic gift boxes for cosmetics and skincare.</p>
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
        title="Cosmetic Packaging Guides & Resources"
        subtitle="Technical advice on box structures, custom insert foam and cost drivers."
        guides={[
          {
            tag: "Box Structures",
            title: "Rigid Box Structure Guide: Magnetic vs Drawer vs Two-Piece",
            desc: "Compare opening styles, unboxing presentation and packing efficiency for cosmetic sets.",
            href: "/resources/rigid-box-structure-guide-magnetic-vs-drawer-vs-two-piece/",
          },
          {
            tag: "Inserts Comparison",
            title: "EVA vs Paperboard vs Molded Pulp Packaging Inserts",
            desc: "Understand protection, presentation and sustainability differences across insert materials.",
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

      {/* Final Quote & Contact */}
      <section className="mrb-quote" id="quote">
        <div className="container mrb-quote-grid">
          <div>
            <span className="mrb-eyebrow">START A PROJECT</span>
            <h2>Develop Your Custom Cosmetic Magnetic Boxes</h2>
            <p style={{ color: "#c5c5c5", lineHeight: 1.7, margin: "12px 0 16px" }}>
              Send us your product sizes, target quantity, artwork files and insert preferences.
              Our packaging specialists will provide dielines, material recommendations and quotation.
            </p>
            <div className="mrb-contact">
              <div className="mrb-contact-note">
                <b>WhatsApp</b>
                <a href={waLink(WA_MESSAGES.cosmetics)} target="_blank" rel="noopener">
                  +86 159 1388 1634
                </a>
              </div>
              <div className="mrb-contact-note">
                <b>Email</b>
                <a href="mailto:AMY@XINGYUE.STORE">AMY@XINGYUE.STORE</a>
              </div>
            </div>
            <a className="mrb-back" href="/industries/cosmetic-packaging/">
              Back to Cosmetic Packaging Hub →
            </a>
          </div>
          <QuoteForm />
        </div>
      </section>
    </main>
  );
}
