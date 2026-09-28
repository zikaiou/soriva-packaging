/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import ProductBuyerGuides from "../../components/ProductBuyerGuides";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL = "https://www.sorivapackaging.com/solutions/luxury-paper-bags-for-cosmetics/";

export const metadata: Metadata = {
  title: {
    absolute: "Luxury Paper Bags for Cosmetics | Custom Cosmetic Shopping Bags | SORIVA Packaging",
  },
  description:
    "Custom luxury paper bags for cosmetics, skincare and beauty brands. Tailored sizes, premium paper stocks, Pantone color matching, ribbon handles and foil stamping.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Luxury Paper Bags for Cosmetics | Custom Cosmetic Shopping Bags | SORIVA Packaging",
    description:
      "Custom luxury paper bags for cosmetics, skincare and beauty brands. Tailored sizes, premium paper stocks, Pantone color matching, ribbon handles and foil stamping.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
    images: [
      {
        url: "https://www.sorivapackaging.com/img/sample-paperbag-ribbon-minimal.jpg",
        width: 1200,
        height: 900,
        alt: "Custom luxury paper bags for cosmetics and skincare",
      },
    ],
  },
};

const priorities = [
  {
    title: "Product Weight & Protection",
    desc: "Cosmetic bottles and glass skincare jars require reinforced top turnovers and heavy bottom boards to ensure no sagging or bottom puncture.",
  },
  {
    title: "Refined Tactile Unboxing",
    desc: "Velvety soft-touch matte lamination and smooth ribbon handles extend the premium cosmetic experience from retail counter to home unboxing.",
  },
  {
    title: "Pantone Color Precision",
    desc: "Exact spot color formulation ensures your signature pastel or bold beauty brand shades remain identical across all bags and boxes.",
  },
  {
    title: "Compact & Slender Proportions",
    desc: "Engineered narrow gussets and vertical proportions tailored for skincare droppers, compact cases, lipstick collections and beauty kits.",
  },
];

const materials = [
  {
    name: "Coated Art Paper (210–250 GSM)",
    desc: "Smooth white surface ideal for vibrant cosmetic photography, multi-color gradient artwork and flawless surface lamination.",
  },
  {
    name: "White Card Paper (C1S / C2S)",
    desc: "High stiffness and crisp edge folds providing a clean, architectural silhouette for modern minimalist cosmetic brands.",
  },
  {
    name: "Specialty Textured Paper",
    desc: "Embossed linen, felt, pearlized or laid paper wraps providing distinctive organic tactile sophistication for clean beauty brands.",
  },
  {
    name: "Dyed Black Cardstock",
    desc: "Solid dyed black core paper; perfect for metallic gold, rose gold foil stamping and high-contrast luxury beauty presentation.",
  },
];

const handles = [
  {
    title: "Satin Ribbon Handles",
    desc: "Silky, lustrous satin ribbons embedded seamlessly inside turnover boards for an elegant, feminine retail feel.",
  },
  {
    title: "Grosgrain Ribbon Handles",
    desc: "Durable ribbed texture ribbons offering strong grip and contemporary Parisian boutique aesthetics.",
  },
  {
    title: "Cotton Rope Handles",
    desc: "Soft braided natural cotton ropes capped or knotted for comfortable hand carrying of heavier skincare sets.",
  },
  {
    title: "Hidden Glued Ribbon",
    desc: "Ribbon ends securely glued between turnover folds without exterior eyelets or knots for clean lines.",
  },
];

const samples = [
  {
    img: "/img/sample-paperbag-ribbon-minimal.jpg",
    title: "Minimal Boutique Cosmetic Bag",
    desc: "Beige art paper with embedded satin ribbon handles and precision metallic foil typography.",
  },
  {
    img: "/img/sample-paperbag-coordinated-floral.jpg",
    title: "Full-Pattern Beauty Shopping Bag",
    desc: "Full-bleed CMYK botanical pattern printing paired with gold hot foil accents for beauty gift sets.",
  },
  {
    img: "/img/sample-paperbag-matching-set.jpg",
    title: "Matching Bag & Skincare Box Suite",
    desc: "Coordinated luxury paper shopping bag developed alongside a matching rigid skincare gift box.",
  },
];

const faqs = [
  {
    q: "What paper weight (GSM) is recommended for cosmetic paper bags?",
    a: "210 GSM to 250 GSM coated art paper or white cardstock is the most popular choice for cosmetics. Heavier items such as glass cream jars and perfume sets benefit from 250–300 GSM paper with reinforced bottom board inserts.",
  },
  {
    q: "Can you produce matching paper bags and rigid cosmetic gift boxes?",
    a: "Yes. We specialize in coordinated packaging systems where paper bags, magnetic rigid boxes, drawer boxes, tissue paper and custom stickers share exact Pantone colors, paper textures and foil finishes.",
  },
  {
    q: "What is the MOQ for custom cosmetic paper bags?",
    a: "Custom cosmetic paper bag projects typically start from 100 pcs. Larger order volumes offer lower unit costs by spreading plate setup and printing tooling expenses.",
  },
  {
    q: "Can I request a prototype sample before mass production?",
    a: "Yes. 1 pc physical prototype is available to verify paper stiffness, ribbon feel, logo alignment and color accuracy before mass manufacturing.",
  },
  {
    q: "What handle styles are best for luxury skincare packaging?",
    a: "Satin and grosgrain ribbons are the top choices for luxury beauty and skincare brands because they offer a soft, luxurious hand feel and can be color-matched to your brand palette.",
  },
  {
    q: "Do you offer international shipping for flat-packed paper bags?",
    a: "Yes. Our paper bags are flat-packed in moisture-resistant master cartons to optimize container CBM and reduce international Sea, Air or Express freight costs.",
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
        { "@type": "ListItem", position: 3, name: "Cosmetic Paper Bags", item: PAGE_URL },
      ],
    },
    {
      "@type": "Service",
      name: "Custom Luxury Paper Bags for Cosmetics",
      description:
        "OEM/ODM custom luxury paper shopping bag manufacturing for cosmetics, beauty and skincare brands.",
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

export default function CosmeticPaperBagsSolution() {
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
            <a href="/">Home</a> / <a href="/custom-packaging/">Solutions</a> / Luxury Paper Bags for Cosmetics
          </nav>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">BEAUTY &amp; SKINCARE PACKAGING</span>
              <h1>Custom Luxury Paper Bags for Cosmetics</h1>
              <p className="mrb-lead">
                Elevate your cosmetic and skincare brand with bespoke luxury shopping bags.
                Engineered with high-tensile paper stocks, reinforced bottom boards, silky ribbon
                handles and precision Pantone color matching for beauty retail and VIP gifting.
              </p>
              <div className="mrb-tags">
                <span>MOQ From 100 pcs</span>
                <span>Reinforced Bottom Support</span>
                <span>Pantone (PMS) Matching</span>
                <span>Satin &amp; Grosgrain Ribbons</span>
                <span>Soft-Touch Velvet Finish</span>
              </div>
              <div className="mrb-hero-actions">
                <a href="/rfq/" className="btn gold">
                  Request Packaging Quote
                </a>
                <a
                  href={waLink(WA_MESSAGES.paperBags)}
                  target="_blank"
                  rel="noopener"
                  className="btn-wa"
                >
                  <WhatsAppIcon /> Chat on WhatsApp
                </a>
                <a href="/products/luxury-paper-bags/" className="btn ghost">
                  Paper Bags Catalog
                </a>
              </div>
            </div>
            <div className="mrb-hero-media">
              <img
                src="/img/sample-paperbag-ribbon-minimal.jpg"
                alt="Custom luxury paper bags for cosmetics and skincare"
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
            <span className="eyebrow dark">BEAUTY RETAIL PRIORITIES</span>
            <h2>Why Cosmetic Brands Choose Premium Paper Bags</h2>
            <p>Cosmetic packaging must balance product protection with refined boutique presentation.</p>
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

      {/* Materials & Handles */}
      <section className="mrb-section soft">
        <div className="container mrb-spec-wrap">
          <div>
            <div className="mrb-head">
              <span className="eyebrow dark">PREMIUM PAPERS</span>
              <h2>Recommended Papers for Cosmetics</h2>
            </div>
            <p style={{ color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
              Select high-tensile coated or textured papers that ensure clean folding lines and luxury tactile feel:
            </p>
            <div style={{ display: "grid", gap: 14 }}>
              {materials.map((m) => (
                <div key={m.name} style={{ background: "#fff", padding: "14px 18px", borderRadius: 8, border: "1px solid #e7e2d9" }}>
                  <b style={{ color: "#111", display: "block", marginBottom: 4 }}>{m.name}</b>
                  <span style={{ fontSize: 13, color: "#555" }}>{m.desc}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mrb-structure">
            <div className="mrb-head">
              <span className="eyebrow dark">HANDLE CRAFTSMANSHIP</span>
              <h2>Handle Styles for Beauty Bags</h2>
            </div>
            <p style={{ color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
              The handle defines the carrying comfort and feminine aesthetic of the bag:
            </p>
            <div style={{ display: "grid", gap: 14 }}>
              {handles.map((h) => (
                <div key={h.title} style={{ background: "#fff", padding: "14px 18px", borderRadius: 8, border: "1px solid #e7e2d9" }}>
                  <b style={{ color: "var(--color-gold, #c79a51)", display: "block", marginBottom: 4 }}>{h.title}</b>
                  <span style={{ fontSize: 13, color: "#555" }}>{h.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Real Sample Gallery */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">SAMPLE PROOF</span>
            <h2>Real Cosmetic Paper Bag Samples</h2>
            <p>Review real packaging capability samples produced for boutique beauty and skincare collections.</p>
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

      {/* Coordinated Packaging Integration */}
      <section className="mrb-section soft">
        <div className="container mrb-spec-wrap">
          <div>
            <div className="mrb-head">
              <span className="eyebrow dark">COMPLETE BEAUTY SUITES</span>
              <h2>Pair with Custom Cosmetic Gift Boxes</h2>
            </div>
            <p style={{ lineHeight: 1.7, color: "#444", marginBottom: 16 }}>
              Create an unforgettable retail experience by pairing your custom paper shopping bags
              with matching magnetic rigid boxes, sliding drawer boxes and custom EVA or paperboard inserts:
            </p>
            <ul style={{ lineHeight: 1.8, color: "#444", paddingLeft: 20, marginBottom: 20 }}>
              <li><strong>Drawer Boxes:</strong> Slide-out beauty presentation boxes with velvet cushions.</li>
              <li><strong>Magnetic Rigid Boxes:</strong> Premium front-opening gift packaging for skincare sets.</li>
              <li><strong>Custom Inserts:</strong> Precision-cut EVA foam or molded pulp for serums and bottles.</li>
            </ul>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="/products/drawer-boxes/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                Sliding Drawer Boxes →
              </a>
              <a href="/products/magnetic-rigid-boxes/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                Magnetic Rigid Boxes →
              </a>
              <a href="/industries/cosmetic-packaging/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                Explore Cosmetic Packaging →
              </a>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <img
              src="/img/sample-paperbag-matching-set.jpg"
              alt="Matching cosmetic paper bag and rigid gift box set"
              loading="lazy"
              style={{ width: "100%", borderRadius: 10, border: "1px solid #e7e2d9", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about custom luxury paper bags for cosmetics and skincare.</p>
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
        subtitle="Technical advice on Pantone color matching, luxury foil finishes and paper selections."
        guides={[
          {
            tag: "Color & Printing",
            title: "Pantone vs CMYK for Custom Packaging",
            desc: "Understand color accuracy and spot color matching for signature cosmetic brand palettes.",
            href: "/resources/pantone-vs-cmyk-custom-packaging/",
          },
          {
            tag: "Finishing Techniques",
            title: "Foil Stamping vs Embossing vs Spot UV",
            desc: "Compare hot foil stamping, embossing and spot UV coating for luxury cosmetic packaging.",
            href: "/resources/foil-stamping-vs-embossing-vs-spot-uv/",
          },
          {
            tag: "Paper Materials",
            title: "Luxury Packaging Paper Types: Art Paper vs Specialty Paper vs Kraft",
            desc: "Choose the right paper stock, texture and grammage for custom cosmetic shopping bags.",
            href: "/resources/luxury-packaging-paper-types-art-paper-vs-specialty-paper-vs-kraft/",
          },
        ]}
      />

      {/* Final Quote & Contact */}
      <section className="mrb-quote" id="quote">
        <div className="container mrb-quote-grid">
          <div>
            <span className="mrb-eyebrow">START A PROJECT</span>
            <h2>Develop Your Custom Cosmetic Paper Bags</h2>
            <p style={{ color: "#c5c5c5", lineHeight: 1.7, margin: "12px 0 16px" }}>
              Send us your target bag dimensions, quantity, artwork files and material preferences.
              Our packaging specialists will provide dielines, material recommendations and quotation.
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
