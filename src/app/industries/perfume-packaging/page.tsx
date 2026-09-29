/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import ProductCrossLinks from "../../components/ProductCrossLinks";
import ProductBuyerGuides from "../../components/ProductBuyerGuides";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL = "https://www.sorivapackaging.com/industries/perfume-packaging/";

export const metadata: Metadata = {
  title: {
    absolute: "Custom Perfume Packaging Manufacturer | Luxury Perfume Boxes | SORIVA Packaging",
  },
  description:
    "Custom perfume packaging and luxury perfume boxes with tailored rigid structures, inserts, premium papers, printing and finishing. OEM/ODM support for fragrance brands.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Custom Perfume Packaging Manufacturer | Luxury Perfume Boxes | SORIVA Packaging",
    description:
      "Custom perfume packaging and luxury perfume boxes with tailored rigid structures, inserts, premium papers, printing and finishing. OEM/ODM support for fragrance brands.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
    images: [
      {
        url: "https://www.sorivapackaging.com/img/perfume.webp",
        width: 1200,
        height: 630,
        alt: "Custom luxury perfume packaging boxes",
      },
    ],
  },
};

const perfumePriorities = [
  {
    num: "01",
    title: "Bottle Protection & Shock Absorption",
    desc: "Rigid board construction and precision-fit inserts prevent glass breakage, neck strain and cap loosening during transit.",
  },
  {
    num: "02",
    title: "Insert Cavity Stability",
    desc: "Engineered cavity cutouts cradle flacons, sprayers and decorative caps firmly in place to prevent rattling or shifting.",
  },
  {
    num: "03",
    title: "Presentation & Unboxing Reveal",
    desc: "Magnetic flaps, sliding trays or lid-and-base openings that stage the fragrance bottle elegantly upon opening.",
  },
  {
    num: "04",
    title: "Brand-Color & Pantone Fidelity",
    desc: "Precise PMS spot color formulation and rich offset printing for consistent brand identity across full product lines.",
  },
  {
    num: "05",
    title: "Luxury Tactile Embellishment",
    desc: "Metallic hot stamping, multi-level embossing, gloss spot UV and velvety soft-touch laminations that elevate perceived value.",
  },
  {
    num: "06",
    title: "Export & Transit Durability",
    desc: "Heavyweight greyboard cores and protective barrier coatings resist humidity, scuffing and international shipping handling.",
  },
];

const recommendedStructures = [
  {
    img: "/img/magnetic-rigid.webp",
    alt: "Magnetic rigid perfume packaging box",
    title: "Magnetic Rigid Boxes",
    desc: "Book-style or front-opening magnetic closure boxes delivering an upscale retail opening experience.",
    slug: "magnetic-rigid-boxes",
  },
  {
    img: "/img/two-piece-rigid.webp",
    alt: "Two piece rigid perfume gift box",
    title: "Two-Piece Rigid Boxes",
    desc: "Classic lid-and-base presentation boxes with neck shoulders or full-telescoping lids for perfume sets.",
    slug: "two-piece-rigid-boxes",
  },
  {
    img: "/img/drawer-box.webp",
    alt: "Drawer slide perfume box",
    title: "Sliding Drawer Boxes",
    desc: "Interactive sliding matchbox structures featuring satin ribbon pulls for luxury fragrance reveal.",
    slug: "drawer-boxes",
  },
  {
    img: "/img/foldable-rigid.webp",
    alt: "Foldable magnetic perfume box",
    title: "Foldable Magnetic Boxes",
    desc: "Collapsible luxury rigid boxes that ship flat to significantly reduce international freight and storage volume.",
    slug: "foldable-magnetic-rigid-boxes",
  },
];

const insertOptions = [
  {
    name: "High-Density EVA Foam",
    desc: "Precision CNC-cut or die-cut foam providing maximum impact absorption; available with black, white or velvet-flocked tops.",
    href: "/resources/packaging-inserts-eva-vs-paperboard-vs-molded-pulp/",
    linkText: "EVA vs Paperboard Guide →",
  },
  {
    name: "Velvet-Covered Trays",
    desc: "Flocked thermoformed or foam inserts that cushion delicate glass bottles and prevent scratching on polished surfaces.",
  },
  {
    name: "Custom Molded Pulp Trays",
    desc: "Biodegradable wet-press molded sugarcane or bamboo fiber inserts offering organic contours and sustainable luxury appeal.",
    href: "/resources/molded-pulp-vs-eva-sustainable-packaging-inserts/",
    linkText: "Molded Pulp vs EVA Guide →",
  },
  {
    name: "Structured Paperboard Inserts",
    desc: "100% recyclable folded cardstock trays with custom cutouts holding fragrance bottles and travel atomizers firmly in place.",
  },
];

const paperMaterials = [
  {
    name: "Coated Art Paper",
    features: "Smooth surface for high-definition CMYK photographic printing, rich graphic illustrations and soft-touch lamination.",
  },
  {
    name: "Specialty Textured Paper",
    features: "Embossed linen, felt, laid or leatherette paper wraps delivering a distinct, tactile unboxing sensation.",
    href: "/resources/luxury-packaging-paper-types-art-paper-vs-specialty-paper-vs-kraft/",
    linkText: "Paper Types Guide →",
  },
  {
    name: "Dyed Black & Color Cardstock",
    features: "Solid dyed core paper stock that eliminates white raw edges along score lines; ideal for metallic hot foil stamping.",
  },
  {
    name: "Metallic & Pearlized Paper",
    features: "Subtle pearlescent or reflective metallic laminated sheets that shimmer under boutique retail lighting.",
  },
];

const finishingOptions = [
  {
    title: "Hot Foil Stamping",
    desc: "Gold, silver, rose gold, copper, holographic or matte pigment foil applied with heated dies for crisp logos.",
  },
  {
    title: "Multi-Level Embossing / Debossing",
    desc: "Blind or registered 3D relief creating raised or recessed crests, monograms and all-over patterns.",
  },
  {
    title: "Gloss Spot UV Coating",
    desc: "High-shine selective polymer coating providing striking visual contrast against a velvety matte background.",
  },
  {
    title: "Soft-Touch Matte Lamination",
    desc: "Anti-glare velvety tactile lamination offering scratch resistance and signature luxury handling comfort.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Send Bottle Dimensions & Weight",
    desc: "Share your fragrance bottle height, width, diameter, cap style, weight and CAD drawings or samples.",
  },
  {
    num: "02",
    title: "Confirm Box Structure",
    desc: "Select magnetic, lid-and-base, drawer or foldable structure based on presentation goals and logistics budget.",
  },
  {
    num: "03",
    title: "Engineer Custom Insert",
    desc: "We calculate exact cutout tolerances, finger-access notches and choose EVA, velvet, paperboard or pulp.",
  },
  {
    num: "04",
    title: "Artwork Review & Dielines",
    desc: "Vector dielines provided for your branding artwork, foil stamping paths, emboss masks and Pantone callouts.",
  },
  {
    num: "05",
    title: "Sampling & Prototype Approval",
    desc: "1 pc physical prototype or pre-production sample manufactured to verify bottle fit, closing feel and finishing.",
  },
  {
    num: "06",
    title: "Mass Production & 100% QC",
    desc: "Precision board cutting, automated gluing, wrap positioning, insert fitting and strict manual cosmetic inspection.",
  },
  {
    num: "07",
    title: "Export Packing & Global Shipping",
    desc: "Packed in reinforced corrugated export cartons with moisture protection; shipped via Sea, Air or Express.",
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
    q: "Can you customize perfume boxes to fit specific bottle sizes?",
    a: "Yes. All box dimensions, sleeve tolerances and insert cavities are custom-engineered around your actual bottle height, diameter, pump sprayer and cap geometry.",
  },
  {
    q: "Which box structure is most suitable for premium perfume packaging?",
    a: "Magnetic rigid boxes, two-piece lid-and-base boxes and sliding drawer boxes are the most popular choices. The optimal structure depends on bottle weight, retail display orientation and unboxing ceremony.",
  },
  {
    q: "What insert materials are available for perfume bottles?",
    a: "Common options include high-density EVA foam (with or without velvet flocking), eco-friendly molded pulp, structured paperboard trays and thermoformed inserts designed for snug bottle retention.",
  },
  {
    q: "Can you match specific Pantone (PMS) brand colors?",
    a: "Yes. In addition to high-definition CMYK process printing, we offer Pantone spot color ink formulation to ensure exact brand color consistency across all packaging components.",
  },
  {
    q: "What luxury finishing options are available?",
    a: "Finishing options include hot foil stamping (gold, silver, rose gold, color foils), blind embossing, debossing, gloss spot UV coating, soft-touch matte lamination and custom die-cut borders.",
  },
  {
    q: "Can I get a physical sample before mass production?",
    a: "Yes. 1 pc prototype or pre-production sample is available for custom projects to confirm bottle snugness, structural closing feel, paper texture and foil alignment before mass manufacturing.",
  },
  {
    q: "What is the MOQ for custom perfume packaging?",
    a: "Selected custom perfume packaging projects can start from around 100 pcs. The confirmed MOQ depends on box structure, paper selection, insert complexity and finishing techniques.",
  },
  {
    q: "Can you support international shipping and logistics?",
    a: "Yes. We arrange global Sea freight, Air cargo and Express courier delivery with export-grade protective carton packaging to your warehouse or third-party fulfillment center.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Custom Luxury Perfume Packaging Boxes",
      image: "https://www.sorivapackaging.com/img/perfume.webp",
      description:
        "Custom perfume packaging and luxury perfume boxes with tailored rigid structures, inserts, premium papers, printing and finishing. OEM/ODM support for fragrance brands.",
      brand: { "@type": "Brand", name: "SORIVA Packaging" },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        price: "1.50",
        lowPrice: "0.80",
        highPrice: "5.50",
        offerCount: "1000",
        availability: "https://schema.org/InStock",
      },
      url: PAGE_URL,
    },
    {
      "@type": "Service",
      name: "Custom Perfume Packaging Manufacturing",
      description:
        "OEM/ODM custom rigid perfume packaging design and manufacturing for boutique perfumeries, niche fragrance houses and international cosmetics brands.",
      url: PAGE_URL,
      serviceType: "Fragrance Packaging Manufacturing",
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
          name: "Perfume Packaging",
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

export default function PerfumePackagingPage() {
  return (
    <main className="mrb-page">
      {/* Hero */}
      <section className="mrb-hero">
        <div className="container">
          <nav className="mrb-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a> / <a href="/#industries">Industries</a> / Perfume Packaging
          </nav>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">FRAGRANCE PACKAGING SOLUTIONS</span>
              <h1>Custom Luxury Perfume Packaging for Fragrance Brands</h1>
              <p className="mrb-lead">
                Create premium perfume packaging designed around bottle shape, product protection,
                brand positioning and unboxing experience. From niche artisan perfumeries to luxury
                eau de parfum launches, SORIVA helps brands build refined, protective rigid packaging.
              </p>
              <div className="mrb-tags">
                <span>MOQ From 100 pcs</span>
                <span>Custom Bottle Inserts</span>
                <span>CMYK &amp; Pantone Matching</span>
                <span>Foil / Emboss / Spot UV</span>
                <span>Global Shipping</span>
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
                <a href="#structures" className="btn ghost">
                  Explore Structures
                </a>
              </div>
            </div>
            <div className="mrb-hero-media">
              <img
                src="/img/perfume.webp"
                alt="Custom luxury perfume packaging box with gold foil branding"
                width="1200"
                height="630"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 1. Perfume Packaging Priorities */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">PACKAGING PRIORITIES</span>
            <h2>What Matters in Custom Perfume Packaging</h2>
            <p>
              Fragrance packaging must balance exquisite aesthetic allure with structural durability
              to safeguard fragile glass flacons and delicate pumps.
            </p>
          </div>
          <div className="mrb-features">
            {perfumePriorities.map((item) => (
              <article className="mrb-feature" key={item.title}>
                <strong>{item.num}</strong>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
          <div className="mrb-note" style={{ marginTop: 24 }}>
            <b>Buyer Tip:</b> Perfume packaging should always be engineered around your real bottle
            dimensions, glass thickness and total filled weight—not solely the outer dimensions.
          </div>
        </div>
      </section>

      {/* 2. Recommended Box Structures */}
      <section className="mrb-section soft" id="structures">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">RECOMMENDED STRUCTURES</span>
            <h2>Box Structures for Perfume Packaging</h2>
            <p>
              Explore rigid box formats engineered for fragrance bottle protection, gifting and
              boutique retail display.
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
            <span className="eyebrow dark">BOTTLE INSERTS</span>
            <h2>Custom Inserts for Perfume Bottles</h2>
            <p>
              The insert secures the bottle neck, base and cap, preventing internal movement during
              handling and transit.
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

      {/* 4. Materials & Color Control */}
      <section className="mrb-section soft">
        <div className="container mrb-spec-wrap">
          <div>
            <div className="mrb-head">
              <span className="eyebrow dark">PAPERS &amp; WRAPS</span>
              <h2>Premium Paper Materials</h2>
            </div>
            <p style={{ lineHeight: 1.7, color: "#444", marginBottom: 16 }}>
              Select from distinctive paper wraps that provide rich tactile quality and superior
              visual appeal:
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
              <span className="eyebrow dark">COLOR PRECISION</span>
              <h2>CMYK &amp; Pantone (PMS) Printing</h2>
            </div>
            <p style={{ lineHeight: 1.7, color: "#444", marginBottom: 14 }}>
              Brand colors require rigorous fidelity across full product lines and production batches:
            </p>
            <ul style={{ lineHeight: 1.8, color: "#444", paddingLeft: 20, marginBottom: 16 }}>
              <li><strong>Pantone Spot Color Matching:</strong> For exact formula-driven corporate brand colors.</li>
              <li><strong>CMYK Process Printing:</strong> High-definition multi-color graphics and imagery.</li>
              <li><strong>Interior Box Flooding:</strong> Contrast colors printed inside lids and bases.</li>
            </ul>
            <p>
              <a
                href="/resources/pantone-vs-cmyk-custom-packaging/"
                style={{ color: "var(--color-gold, #c79a51)", fontWeight: 600 }}
              >
                Read our in-depth Pantone vs CMYK Color Guide →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Mid-Page Call to Action */}
      <section className="mrb-section dark" style={{ textAlign: "center", padding: "48px 0" }}>
        <div className="container">
          <span className="mrb-eyebrow">CUSTOM FRAGRANCE PACKAGING</span>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(26px, 3.2vw, 36px)", fontWeight: 500, margin: "12px 0 16px" }}>
            Developing a New Perfume Packaging Project?
          </h2>
          <p style={{ color: "#c5c5c5", maxWidth: 680, margin: "0 auto 24px", lineHeight: 1.65 }}>
            Send us your bottle dimensions, target order quantity and artwork ideas. We will help
            review structure options, dieline templates and tier-based quotations.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
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
          </div>
        </div>
      </section>

      {/* 5. Finishing Options */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">LUXURY FINISHING</span>
            <h2>Luxury Finishing for Perfume Boxes</h2>
            <p>
              Elevate your fragrance box aesthetics with precision hot foil stamping, tactile
              embossing and selective gloss spot UV.
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

      {/* 6. Sample & Approval Process */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">SAMPLING WORKFLOW</span>
            <h2>From Bottle Measurement to Approved Sample</h2>
            <p>
              Our step-by-step sampling process ensures proper bottle clearance, closing feel and
              surface finishing approval prior to mass manufacturing.
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
            <h2>Featured Perfume Packaging Project</h2>
            <p>Review real custom fragrance packaging specifications and structural details.</p>
          </div>
          <div style={{ maxWidth: 880, margin: "0 auto", background: "#fbf9f6", border: "1px solid #e7e2d9", borderRadius: 12, padding: "28px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24, alignItems: "center" }}>
            <img
              src="/img/project-perfume.webp"
              alt="Premium perfume packaging project with custom insert and gold foil"
              style={{ width: "100%", borderRadius: 8, objectFit: "cover" }}
            />
            <div>
              <span style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--color-gold, #c79a51)", fontWeight: 700 }}>
                FEATURED PROJECT
              </span>
              <h3 style={{ fontFamily: "Georgia, serif", fontSize: 22, margin: "8px 0 12px", color: "#111" }}>
                Premium Perfume Packaging Case Study
              </h3>
              <p style={{ color: "#555", fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>
                Custom rigid presentation box developed for a luxury fragrance collection, featuring
                precision bottle-nesting EVA insert, matte paper wrap and metallic foil stamping.
              </p>
              <a
                href="/projects/premium-perfume-packaging/"
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
            <h2>Custom Packaging Support for Global Perfume Brands</h2>
            <p>
              Backed by robust production infrastructure, experienced craftsmen and strict QC
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
            <p>Answers to common questions about perfume box structures, bottle inserts, sampling and MOQ.</p>
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
        title="Perfume Packaging Buyer Guides & Resources"
        subtitle="Explore practical guides on bottle dimension measurement, protective inserts, paper types and perfume packaging budgeting."
        guides={[
          {
            tag: "Sustainable Inserts",
            title: "Molded Pulp vs EVA for Sustainable Packaging Inserts",
            desc: "Compare molded pulp and EVA inserts for custom perfume bottles, diffusers and discovery sets.",
            href: "/resources/molded-pulp-vs-eva-sustainable-packaging-inserts/",
          },
          {
            tag: "Product Measurement",
            title: "How to Measure a Product for Custom Box Packaging",
            desc: "Learn how to measure fragrance bottles, caps, sprayers and calculate appropriate box clearances.",
            href: "/resources/how-to-measure-product-for-custom-box-packaging/",
          },
          {
            tag: "Paper & Finishing",
            title: "Luxury Packaging Paper Types: Art Paper vs Specialty Paper vs Kraft",
            desc: "Explore textured specialty papers, soft-touch art papers and metallic wraps for perfume boxes.",
            href: "/resources/luxury-packaging-paper-types-art-paper-vs-specialty-paper-vs-kraft/",
          },
          {
            tag: "Pricing & Budget",
            title: "Custom Packaging Cost Breakdown: What Buyers Are Paying For",
            desc: "Understand what drives perfume packaging costs including rigid board, specialty papers, custom inserts and foil.",
            href: "/resources/custom-packaging-cost-breakdown/",
          },
        ]}
      />

      {/* Final Quote & WhatsApp CTA */}
      <section className="mrb-quote" id="quote">
        <div className="container mrb-quote-grid">
          <div>
            <span className="mrb-eyebrow">START A PROJECT</span>
            <h2>Start Your Custom Perfume Packaging Project</h2>
            <p style={{ color: "#c5c5c5", lineHeight: 1.7, margin: "12px 0 16px" }}>
              Send us your perfume bottle dimensions, target order quantity, artwork and insert
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
                <a href={waLink(WA_MESSAGES.perfume)} target="_blank" rel="noopener">
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

      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center"><span className="eyebrow dark">TUBE PACKAGING SOLUTION</span><h2>Cylindrical Perfume Packaging</h2><p>Explore a dedicated tube packaging route for fragrance bottles, discovery sets and premium scent gifts.</p><a className="btn gold" href="/solutions/tube-packaging-for-perfume/">View Tube Packaging for Perfume →</a></div>
        </div>
      </section>
      <ProductCrossLinks industryHref="/industries/cosmetic-packaging/" industryLabel="Cosmetics Packaging" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  );
}
