/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import ProductCrossLinks from "../../components/ProductCrossLinks";
import ProductBuyerGuides from "../../components/ProductBuyerGuides";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL = "https://www.sorivapackaging.com/industries/jewelry-packaging/";

export const metadata: Metadata = {
  title: {
    absolute: "Custom Jewelry Packaging Manufacturer | Luxury Jewelry Boxes | SORIVA Packaging",
  },
  description:
    "Custom jewelry packaging and luxury jewelry boxes with tailored rigid structures, inserts, premium materials, printing and finishing for jewelry and accessory brands.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Custom Jewelry Packaging Manufacturer | Luxury Jewelry Boxes | SORIVA Packaging",
    description:
      "Custom jewelry packaging and luxury jewelry boxes with tailored rigid structures, inserts, premium materials, printing and finishing for jewelry and accessory brands.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
    images: [
      {
        url: "https://www.sorivapackaging.com/img/jewelry.webp",
        width: 1200,
        height: 630,
        alt: "Custom luxury jewelry packaging boxes",
      },
    ],
  },
};

const jewelryPriorities = [
  {
    num: "01",
    title: "Delicate Surface & Scratch Protection",
    desc: "Soft-flocked velvet linings, plush cushions and microfiber pouches prevent micro-scratches on polished precious metals and gemstones.",
  },
  {
    num: "02",
    title: "High-Precision Cutout Slits & Recesses",
    desc: "Custom laser-cut and die-cut cavities engineered for ring bands, earring posts, necklace hooks and watch display cushions.",
  },
  {
    num: "03",
    title: "Compact Luxury Proportions",
    desc: "Refined outer box scales with crisp 90-degree edges and weighted structural cores that communicate high intrinsic value.",
  },
  {
    num: "04",
    title: "Tactile Paper & Fabric Wraps",
    desc: "Linen textures, leatherette papers, soft-touch art papers and metallic card wraps that delight during handling.",
  },
  {
    num: "05",
    title: "Brand-Color & Foil Precision",
    desc: "Precise Pantone spot color matching and razor-sharp metallic gold or silver hot foil stamping for monogram logos.",
  },
  {
    num: "06",
    title: "Gift-Ready Presentation Ceremony",
    desc: "Smooth sliding drawers, magnetic flip lids or classic two-piece boxes accompanied by matching luxury ribbon pulls.",
  },
];

const recommendedStructures = [
  {
    img: "/img/drawer-box.webp",
    alt: "Custom drawer jewelry box with velvet insert",
    title: "Sliding Drawer Boxes",
    desc: "Signature slide-out packaging with satin ribbon pulls; ideal for rings, pendants, earrings and bracelets.",
    slug: "drawer-boxes",
  },
  {
    img: "/img/two-piece-rigid.webp",
    alt: "Two piece rigid jewelry gift box",
    title: "Two-Piece Rigid Boxes",
    desc: "Classic lid-and-base presentation boxes with neck shoulders for heirloom jewelry collections and watches.",
    slug: "two-piece-rigid-boxes",
  },
  {
    img: "/img/magnetic-rigid.webp",
    alt: "Magnetic rigid jewelry box",
    title: "Magnetic Rigid Boxes",
    desc: "Front-opening magnetic closure boxes delivering an unboxing reveal for luxury jewelry sets and necklaces.",
    slug: "magnetic-rigid-boxes",
  },
  {
    img: "/img/paper-bags.webp",
    alt: "Luxury paper bag for jewelry retail",
    title: "Matching Paper Bags",
    desc: "Coordinated luxury boutique paper shopping bags with ribbon handles to complete your retail packaging suite.",
    slug: "luxury-paper-bags",
  },
];

const insertOptions = [
  {
    name: "Velvet-Flocked EVA Foam",
    desc: "High-density foam with ultra-soft plush velvet surface; provides rigid cavity support and scratch prevention.",
    href: "/resources/packaging-inserts-eva-vs-paperboard-vs-molded-pulp/",
    linkText: "EVA vs Paperboard Guide →",
  },
  {
    name: "High-Density EVA Foam",
    desc: "Precision CNC-cut white, black or grey foam offering clean geometric cutouts for watches and modern jewelry.",
  },
  {
    name: "Structured Paperboard Inserts",
    desc: "Eco-friendly recyclable folded cardstock trays with die-cut tabs holding delicate chains and cards securely.",
  },
  {
    name: "Custom Molded Pulp Trays",
    desc: "Engineered wet-press molded sugarcane or bamboo fiber inserts offering smooth organic contours for sustainable luxury.",
    href: "/resources/molded-pulp-vs-eva-sustainable-packaging-inserts/",
    linkText: "Molded Pulp vs EVA Guide →",
  },
  {
    name: "Velvet Pouches & Pillow Cushions",
    desc: "Custom microfiber pouches and plush watch pillows providing flexible nesting inside rigid boxes.",
  },
];

const paperMaterials = [
  {
    name: "Specialty Textured Paper",
    features: "Embossed linen, felt, woodgrain or geometric texture wraps delivering high tactile luxury for boutique jewelry.",
    href: "/resources/luxury-packaging-paper-types-art-paper-vs-specialty-paper-vs-kraft/",
    linkText: "Paper Types Guide →",
  },
  {
    name: "Coated Art Paper",
    features: "Smooth white base paper optimal for full-color CMYK graphic printing, sharp typography and soft-touch lamination.",
  },
  {
    name: "Dyed Black Cardstock",
    features: "Solid dyed core black paper; eliminates raw white edges along folds, providing a dramatic backdrop for gold foil.",
  },
  {
    name: "Metallic & Pearlized Paper",
    features: "Subtle pearlescent sheen or reflective metallic laminated cardstock that glimmers under jewelry showroom lighting.",
  },
];

const finishingOptions = [
  {
    title: "Metallic Hot Foil Stamping",
    desc: "Gold, silver, rose gold, copper or holographic foils applied with heated brass dies for razor-sharp logo typography.",
  },
  {
    title: "Precision 3D Embossing",
    desc: "Multi-level raised relief creating tactile monograms, brand crests and decorative borders on lid surfaces.",
  },
  {
    title: "Debossing",
    desc: "Deep crisp indentation pressed into heavyweight greyboard wraps for an understated, modern luxury aesthetic.",
  },
  {
    title: "Gloss Spot UV Coating",
    desc: "High-shine selective polymer glaze creating striking visual and textural contrast against velvet matte backgrounds.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Send Product Dimensions",
    desc: "Share your ring, necklace, watch or bracelet measurements, display orientation and CAD files or physical samples.",
  },
  {
    num: "02",
    title: "Confirm Presentation & Structure",
    desc: "Select drawer box, magnetic box or lid-and-base structure based on brand positioning and retail ceremony.",
  },
  {
    num: "03",
    title: "Engineer Custom Cutout Inserts",
    desc: "We calculate exact slit widths, ring slot depths, chain holding tabs and material thickness for a snug fit.",
  },
  {
    num: "04",
    title: "Artwork Review & Dielines",
    desc: "Vector dielines provided for your branding artwork, hot foil stamping paths, embossing masks and Pantone callouts.",
  },
  {
    num: "05",
    title: "Sampling & Prototype Approval",
    desc: "1 pc physical prototype or pre-production sample manufactured to verify jewelry fit, ribbon feel and foil accuracy.",
  },
  {
    num: "06",
    title: "Mass Production & 100% QC",
    desc: "Precision board cutting, automated gluing, wrap positioning, insert fitting and strict manual cosmetic inspection.",
  },
  {
    num: "07",
    title: "Export Packing & Global Shipping",
    desc: "Packed in reinforced corrugated export cartons with protective corner guards; delivered via Sea, Air or Express.",
  },
];

const stats = [
  { value: "10,000㎡", label: "Factory Area" },
  { value: "400+", label: "Employees" },
  { value: "50M+", label: "Annual Capacity" },
  { value: "20 Years", label: "Production Experience" },
];

const faqs = [
  {
    q: "Can you customize jewelry boxes for different jewelry pieces?",
    a: "Yes. Outer box dimensions and inner insert cavities can be custom-engineered for rings, earrings, pendants, necklaces, bracelets, luxury watches and multi-piece gift sets.",
  },
  {
    q: "Which box structures are most suitable for jewelry packaging?",
    a: "Sliding drawer boxes, two-piece lid-and-base boxes and magnetic rigid boxes are the most popular choices depending on product size, retail display and unboxing presentation.",
  },
  {
    q: "What custom insert options are available?",
    a: "We offer velvet-flocked EVA foam, high-density plain EVA, structured paperboard trays, molded pulp and custom plush pillow cushions engineered for scratch protection.",
  },
  {
    q: "Can you match our exact brand colors?",
    a: "Yes. In addition to CMYK process printing, we support Pantone (PMS) spot color matching across papers, ribbon pulls and box interior surfaces for complete color harmony.",
  },
  {
    q: "What luxury finishing options are available?",
    a: "Finishing options include metallic hot foil stamping (gold, silver, rose gold), multi-level embossing, debossing, gloss spot UV coating, soft-touch matte lamination and custom ribbon pulls.",
  },
  {
    q: "Can I order a physical sample before mass production?",
    a: "Yes. 1 pc prototype or pre-production sample is available for custom projects to confirm jewelry fit, structural rigidity, wrap texture and foil alignment before mass manufacturing.",
  },
  {
    q: "What is the MOQ for custom jewelry packaging?",
    a: "Selected custom jewelry packaging projects can start from around 100 pcs. The confirmed MOQ depends on box structure, paper selection, insert complexity and finishing techniques.",
  },
  {
    q: "Do you support international shipping and delivery?",
    a: "Yes. We arrange global Sea freight, Air cargo and Express courier delivery with export-grade protective carton packaging to your warehouse or fulfillment centers.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Custom Luxury Jewelry Packaging Boxes",
      image: "https://www.sorivapackaging.com/img/jewelry.webp",
      description:
        "Custom jewelry packaging and luxury jewelry boxes with tailored rigid structures, inserts, premium materials, printing and finishing for jewelry and accessory brands.",
      brand: { "@type": "Brand", name: "SORIVA Packaging" },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        price: "1.20",
        lowPrice: "0.60",
        highPrice: "4.80",
        offerCount: "1000",
        availability: "https://schema.org/InStock",
      },
      url: PAGE_URL,
    },
    {
      "@type": "Service",
      name: "Custom Jewelry Packaging Manufacturing",
      description:
        "OEM/ODM custom rigid jewelry box design and manufacturing for fine jewelry designers, watchmakers, boutique retailers and luxury accessory brands.",
      url: PAGE_URL,
      serviceType: "Jewelry Packaging Manufacturing",
      provider: {
        "@type": "Organization",
        name: "SORIVA Packaging",
        url: "https://www.sorivapackaging.com/",
      },
      areaServed: "Worldwide",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.sorivapackaging.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Industries",
          item: "https://www.sorivapackaging.com/#industries",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Jewelry Packaging",
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

export default function JewelryPackagingPage() {
  return (
    <main className="mrb-page">
      {/* Hero */}
      <section className="mrb-hero">
        <div className="container">
          <nav className="mrb-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a> / <a href="/#industries">Industries</a> / Jewelry Packaging
          </nav>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">FINE JEWELRY &amp; ACCESSORY PACKAGING</span>
              <h1>Custom Luxury Jewelry Packaging for Premium Brands</h1>
              <p className="mrb-lead">
                Create refined jewelry packaging designed around product presentation, protection and
                unboxing experience. SORIVA supports custom jewelry box projects for rings, necklaces,
                bracelets, watches and gift sets with precision inserts and luxury finishes.
              </p>
              <div className="mrb-tags">
                <span>MOQ From 100 pcs</span>
                <span>Custom Velvet &amp; EVA Inserts</span>
                <span>CMYK &amp; Pantone Matching</span>
                <span>Foil / Emboss / Deboss</span>
                <span>Global Shipping</span>
              </div>
              <div className="mrb-hero-actions">
                <a href="/rfq/" className="btn gold">
                  Request Packaging Quote
                </a>
                <a
                  href={waLink(WA_MESSAGES.industries)}
                  target="_blank"
                  rel="noopener"
                  className="btn-wa"
                >
                  <WhatsAppIcon /> Chat on WhatsApp
                </a>
                <a href="#structures" className="btn ghost">
                  Explore Structures
                </a>
              </div>
            </div>
            <div className="mrb-hero-media">
              <img
                src="/img/jewelry.webp"
                alt="Custom luxury jewelry packaging boxes with gold foil branding"
                width="1200"
                height="630"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 1. Jewelry Packaging Priorities */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">PACKAGING PRIORITIES</span>
            <h2>What Matters in Custom Jewelry Packaging</h2>
            <p>
              Fine jewelry packaging must protect delicate polished surfaces and gemstones while
              delivering an exquisite, heirloom-grade unboxing moment.
            </p>
          </div>
          <div className="mrb-features">
            {jewelryPriorities.map((item) => (
              <article className="mrb-feature" key={item.title}>
                <strong>{item.num}</strong>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
          <div className="mrb-note" style={{ marginTop: 24 }}>
            <b>Buyer Tip:</b> The most successful jewelry boxes are designed around exact jewelry
            proportions and display angle—ensuring rings stand upright and necklaces remain untangled.
          </div>
        </div>
      </section>

      {/* 2. Recommended Box Structures */}
      <section className="mrb-section soft" id="structures">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">RECOMMENDED STRUCTURES</span>
            <h2>Box Structures for Jewelry Packaging</h2>
            <p>
              Explore rigid packaging formats developed for scratch protection, gifting and luxury
              boutique display.
            </p>
          </div>
          <div className="mrb-apps">
            {recommendedStructures.map((p) => (
              <a className="mrb-app mrb-app-link" href={`/products/${p.slug}/`} key={p.title}>
                <img src={p.img} alt={p.alt} loading="lazy" />
                <div>
                  <b>{p.title}</b>
                  <span>{p.desc}</span>
                  <em className="mrb-app-cta">Explore Structure →</em>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Insert Options */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">CUSTOM INSERTS</span>
            <h2>Custom Inserts for Jewelry and Accessories</h2>
            <p>
              Insert design must match product shape, weight, scratch sensitivity and display
              orientation.
            </p>
          </div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {insertOptions.map((ins) => (
              <article className="mrb-feature" key={ins.name}>
                <h3>{ins.name}</h3>
                <p>{ins.desc}</p>
                {ins.href && (
                  <p style={{ marginTop: 10 }}>
                    <a href={ins.href} style={{ color: "var(--color-gold, #c79a51)", fontWeight: 600, fontSize: 13 }}>
                      {ins.linkText}
                    </a>
                  </p>
                )}
              </article>
            ))}
          </div>
          <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap", marginTop: 24 }}>
            <a
              href="/resources/packaging-inserts-eva-vs-paperboard-vs-molded-pulp/"
              style={{ color: "var(--color-gold, #c79a51)", fontWeight: 600 }}
            >
              Compare EVA vs Paperboard vs Molded Pulp →
            </a>
            <a
              href="/resources/molded-pulp-vs-eva-sustainable-packaging-inserts/"
              style={{ color: "var(--color-gold, #c79a51)", fontWeight: 600 }}
            >
              Sustainable Molded Pulp vs EVA Guide →
            </a>
          </div>
        </div>
      </section>

      {/* 4. Materials & Surface Papers */}
      <section className="mrb-section soft">
        <div className="container mrb-spec-wrap">
          <div>
            <div className="mrb-head">
              <span className="eyebrow dark">PAPERS &amp; WRAPS</span>
              <h2>Premium Papers and Surface Materials</h2>
            </div>
            <p style={{ lineHeight: 1.7, color: "#444", marginBottom: 16 }}>
              Choose from distinctive wrapping papers that convey prestige and refined craftsmanship:
            </p>
            <div style={{ display: "grid", gap: 12 }}>
              {paperMaterials.map((m) => (
                <div key={m.name} style={{ background: "#fff", padding: "14px 18px", borderRadius: 8, border: "1px solid #e5e0d8" }}>
                  <b style={{ color: "#111", display: "block", marginBottom: 4 }}>{m.name}</b>
                  <span style={{ fontSize: 13, color: "#555", lineHeight: 1.5 }}>{m.features}</span>
                  {m.href && (
                    <div style={{ marginTop: 6 }}>
                      <a href={m.href} style={{ color: "var(--color-gold, #c79a51)", fontWeight: 600, fontSize: 12 }}>
                        {m.linkText}
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mrb-structure">
            <div className="mrb-head">
              <span className="eyebrow dark">COLOR &amp; EMBELLISHMENT</span>
              <h2>Branding, Color &amp; Luxury Finishing</h2>
            </div>
            <p style={{ lineHeight: 1.7, color: "#444", marginBottom: 14 }}>
              Coordinate exact brand colors with metallic accents and tactile 3D relief:
            </p>
            <ul style={{ lineHeight: 1.8, color: "#444", paddingLeft: 20, marginBottom: 16 }}>
              <li><strong>Pantone (PMS) Color Matching:</strong> For flawless brand identity continuity.</li>
              <li><strong>Metallic Hot Foil Stamping:</strong> Gold, silver, rose gold or copper foil.</li>
              <li><strong>Multi-Level Embossing / Debossing:</strong> Subtle raised or recessed crests.</li>
              <li><strong>Gloss Spot UV Coating:</strong> High-shine highlights over soft-touch matte.</li>
            </ul>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a
                href="/resources/pantone-vs-cmyk-custom-packaging/"
                style={{ color: "var(--color-gold, #c79a51)", fontWeight: 600, fontSize: 13 }}
              >
                Pantone vs CMYK Guide →
              </a>
              <a
                href="/resources/foil-stamping-vs-embossing-vs-spot-uv/"
                style={{ color: "var(--color-gold, #c79a51)", fontWeight: 600, fontSize: 13 }}
              >
                Finishing Comparison Guide →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page Call to Action */}
      <section className="mrb-section dark" style={{ textAlign: "center", padding: "48px 0" }}>
        <div className="container">
          <span className="mrb-eyebrow">CUSTOM JEWELRY PACKAGING</span>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(26px, 3.2vw, 36px)", fontWeight: 500, margin: "12px 0 16px" }}>
            Ready to Create Your Custom Jewelry Packaging?
          </h2>
          <p style={{ color: "#c5c5c5", maxWidth: 680, margin: "0 auto 24px", lineHeight: 1.65 }}>
            Send us your jewelry dimensions, target order quantity and design ideas. We will provide
            structure recommendations, insert dielines and tier-based quotations.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/rfq/" className="btn gold">
              Request Packaging Quote
            </a>
            <a
              href={waLink(WA_MESSAGES.industries)}
              target="_blank"
              rel="noopener"
              className="btn-wa"
            >
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 5. Finishing Options */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">LUXURY FINISHING</span>
            <h2>Luxury Finishing for Jewelry Boxes</h2>
            <p>
              Enhance visual elegance and tactile sophistication with bespoke surface embellishments.
            </p>
          </div>
          <div className="mrb-features">
            {finishingOptions.map((f, i) => (
              <article className="mrb-feature" key={f.title}>
                <strong>{String(i + 1).padStart(2, "0")}</strong>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </article>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 24 }}>
            <a
              href="/resources/foil-stamping-vs-embossing-vs-spot-uv/"
              style={{ color: "var(--color-gold, #c79a51)", fontWeight: 600 }}
            >
              Compare Foil Stamping vs Embossing vs Spot UV in our guide →
            </a>
          </div>
        </div>
      </section>

      {/* 6. Product Measurement & Sampling */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">SAMPLING WORKFLOW</span>
            <h2>Build Packaging Around the Real Product</h2>
            <p>
              Our step-by-step sampling process ensures proper jewelry positioning, closure snugness
              and surface finishing approval prior to mass manufacturing.
            </p>
          </div>
          <div className="mrb-process">
            {processSteps.map((s) => (
              <div className="mrb-step" key={s.title}>
                <span>{s.num}</span>
                <b>{s.title}</b>
                <small>{s.desc}</small>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap", marginTop: 28 }}>
            <a
              href="/resources/how-to-measure-product-for-custom-box-packaging/"
              style={{ color: "var(--color-gold, #c79a51)", fontWeight: 600 }}
            >
              Read Product Measurement Guide →
            </a>
            <a
              href="/resources/prototype-sample-vs-pre-production-sample/"
              style={{ color: "var(--color-gold, #c79a51)", fontWeight: 600 }}
            >
              Prototype vs Pre-Production Sample Guide →
            </a>
          </div>
        </div>
      </section>

      {/* 7. Featured Project Reference */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">CASE STUDY</span>
            <h2>Featured Jewelry Packaging Project</h2>
            <p>Review real custom jewelry presentation box specifications and structural details.</p>
          </div>
          <div style={{ maxWidth: 880, margin: "0 auto", background: "#fbf9f6", border: "1px solid #e7e2d9", borderRadius: 12, padding: "28px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24, alignItems: "center" }}>
            <img
              src="/img/project-jewelry.webp"
              alt="Fine jewelry presentation box with custom velvet insert and gold foil"
              style={{ width: "100%", borderRadius: 8, objectFit: "cover" }}
            />
            <div>
              <span style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-gold, #c79a51)", fontWeight: 700 }}>
                FEATURED PROJECT
              </span>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: 22, margin: "8px 0 12px", color: "#111" }}>
                Fine Jewelry Presentation Box Case Study
              </h3>
              <p style={{ color: "#555", fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>
                Custom rigid presentation box developed for fine jewelry collections, featuring
                precision-cut velvet-flocked insert trays, textured wrapping paper and metallic foil.
              </p>
              <a
                href="/projects/fine-jewelry-presentation-box/"
                className="btn gold"
                style={{ display: "inline-block" }}
              >
                View Case Study Details →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Why Work With SORIVA (Factory Capability) */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">FACTORY CAPABILITY</span>
            <h2>Custom Packaging Support for Global Jewelry Brands</h2>
            <p>
              Backed by robust production infrastructure, skilled box craftsmen and strict QC
              inspections before international dispatch.
            </p>
          </div>
          <div className="mrb-stats">
            {stats.map((s) => (
              <div className="mrb-stat" key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 24 }}>
            <a href="/factory/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 600 }}>
              Tour our factory facilities &amp; QC verification →
            </a>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>Answers to common questions about jewelry box structures, velvet inserts, sampling and MOQ.</p>
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

      {/* Buyer Guides & Technical Resources */}
      <ProductBuyerGuides
        title="Jewelry Packaging Buyer Guides & Resources"
        subtitle="Explore practical guides on measuring jewelry items, choosing paper wraps, greyboard thickness and packaging specifications."
        guides={[
          {
            tag: "Product Measurement",
            title: "How to Measure a Product for Custom Box Packaging",
            desc: "Learn how to measure rings, necklaces, watches and sets for precise insert cutouts and box clearance.",
            href: "/resources/how-to-measure-product-for-custom-box-packaging/",
          },
          {
            tag: "Paper & Finishing",
            title: "Luxury Packaging Paper Types: Art Paper vs Specialty Paper vs Kraft",
            desc: "Explore textured specialty papers, soft-touch art papers and premium wrapping options for jewelry boxes.",
            href: "/resources/luxury-packaging-paper-types-art-paper-vs-specialty-paper-vs-kraft/",
          },
          {
            tag: "Materials & Structure",
            title: "Rigid Greyboard Thickness Guide for Custom Boxes",
            desc: "Learn how to choose the right greyboard thickness for sturdy, refined jewelry and watch presentation boxes.",
            href: "/resources/rigid-greyboard-thickness-guide-custom-boxes/",
          },
          {
            tag: "Jewelry Packaging",
            title: "How to Choose Custom Jewelry Packaging",
            desc: "A buyer guide for jewelry and watch brands comparing box structures, velvet and EVA inserts, finishes, MOQ and sampling.",
            href: "/resources/jewelry-packaging-buyer-guide/",
          },
        ]}
      />

      {/* Final Quote & WhatsApp CTA */}
      <section className="mrb-quote" id="quote">
        <div className="container mrb-quote-grid">
          <div>
            <span className="mrb-eyebrow">START A PROJECT</span>
            <h2>Start Your Custom Jewelry Packaging Project</h2>
            <p style={{ color: "#c5c5c5", lineHeight: 1.7, margin: "12px 0 16px" }}>
              Send us your jewelry dimensions, target order quantity, artwork and insert
              preference. Our packaging engineering team will help review suitable structures and
              provide tier-based quotations.
            </p>
            <ul style={{ color: "#c5c5c5", lineHeight: 2, paddingLeft: 18, margin: "16px 0" }}>
              <li>MOQ from 100 pcs for selected projects</li>
              <li>1 pc prototype available</li>
              <li>OEM / ODM custom dimensions &amp; branding</li>
              <li>Sea, Air &amp; Express global shipping</li>
            </ul>
            <div className="mrb-contact">
              <div className="mrb-contact-note">
                <b>WhatsApp</b>
                <a href={waLink(WA_MESSAGES.industries)} target="_blank" rel="noopener">
                  +86 159 1388 1634
                </a>
              </div>
              <div className="mrb-contact-note">
                <b>Email</b>
                <a href="mailto:AMY@XINGYUE.STORE">AMY@XINGYUE.STORE</a>
              </div>
            </div>
            <a className="mrb-back" href="/custom-packaging/">
              Explore Custom Packaging System →
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
