/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import ProductCrossLinks from "../../components/ProductCrossLinks";
import ProductBuyerGuides from "../../components/ProductBuyerGuides";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../product-page.css";

const PAGE_URL = "https://www.sorivapackaging.com/products/luxury-paper-bags/";

export const metadata: Metadata = {
  title: {
    absolute: "Custom Luxury Paper Bags Manufacturer & Supplier | SORIVA Packaging",
  },
  description:
    "Custom luxury paper bags with tailored sizes, materials, printing, handles and premium finishing options. OEM/ODM support, sampling and flexible customization for global brands.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Custom Luxury Paper Bags Manufacturer & Supplier | SORIVA Packaging",
    description:
      "Custom luxury paper bags with tailored sizes, materials, printing, handles and premium finishing options. OEM/ODM support, sampling and flexible customization for global brands.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
    images: [
      {
        url: "https://www.sorivapackaging.com/img/paper-bags.webp",
        width: 1200,
        height: 900,
        alt: "Custom luxury paper bags for premium brands",
      },
    ],
  },
};

const customizationPillars = [
  {
    num: "01",
    title: "Custom Sizes",
    desc: "Engineered Length × Width × Height proportions tailored to your product lines, boutique items or gift sets.",
  },
  {
    num: "02",
    title: "Custom Materials",
    desc: "Coated art paper, white & black cardstock, natural kraft, textured specialty paper and metallic cardstocks.",
  },
  {
    num: "03",
    title: "Custom Colors",
    desc: "Full-color CMYK printing and precise Pantone (PMS) matching for absolute brand identity consistency.",
    href: "/resources/pantone-vs-cmyk-custom-packaging/",
    linkText: "Pantone vs CMYK Guide →",
  },
  {
    num: "04",
    title: "Custom Printing",
    desc: "High-precision offset printing, interior pattern lining, edge-to-edge printing and foil embellishment.",
  },
  {
    num: "05",
    title: "Custom Finishing",
    desc: "Hot foil stamping, multi-level embossing, debossing, spot UV coating, soft-touch and anti-scratch lamination.",
    href: "/resources/foil-stamping-vs-embossing-vs-spot-uv/",
    linkText: "Finishing Comparison →",
  },
  {
    num: "06",
    title: "Custom Handles",
    desc: "Grosgrain ribbon, satin ribbon, woven cotton rope, twisted paper cords, embedded handles and die-cut slots.",
  },
];

const bagStyles = [
  {
    title: "Vertical Paper Bags",
    desc: "Tall vertical proportions ideal for wine, fragrance bottles, cosmetics, jewelry boxes and slender luxury items.",
  },
  {
    title: "Horizontal Paper Bags",
    desc: "Wide-format landscape orientation designed for apparel, shoe boxes, fashion accessories and luxury gift hampers.",
  },
  {
    title: "Luxury Shopping Bags",
    desc: "Heavyweight boutique shopping bags with reinforced top turn-overs and bottom greyboard inserts for retail durability.",
  },
  {
    title: "Gift & Presentation Bags",
    desc: "Refined presentation bags featuring ribbon bow closures, custom tissue lining and delicate tactile finishes.",
  },
  {
    title: "Die-Cut Handle Bags",
    desc: "Integrated die-cut oval handles offering a sleek, minimalist aesthetic without external cords.",
  },
  {
    title: "Rope Handle Bags",
    desc: "Classic cotton or PP rope handles knotted or tipped with metal aglets for a sturdy, comfortable grip.",
  },
  {
    title: "Twisted Handle Bags",
    desc: "Modern twisted paper handle bags suitable for upscale eco-conscious retail and department store packaging.",
  },
];

const sampleShowcase = [
  {
    img: "/img/sample-paperbag-ribbon-minimal.jpg",
    alt: "Custom minimal luxury paper bag sample with satin ribbon handles",
    title: "Minimal Luxury Paper Bags with Ribbon Handles",
    desc: "Clean typography, matte lamination and premium satin ribbon handles engineered for boutique cosmetics and fine accessories.",
  },
  {
    img: "/img/sample-paperbag-coordinated-floral.jpg",
    alt: "Custom branded paper bag and coordinated packaging set with gold hot stamping",
    title: "Coordinated Floral Packaging & Shopping Bags",
    desc: "Full-bleed CMYK pattern printing paired with metallic hot foil stamping and matching gift packaging elements.",
  },
  {
    img: "/img/sample-paperbag-matching-set.jpg",
    alt: "Matching luxury paper bag and rigid gift box packaging suite",
    title: "Matching Paper Bag & Rigid Box Suite",
    desc: "Unified paper texture, Pantone brand color matching and foil accents across both retail carrier bags and rigid presentation boxes.",
  },
];

const showroomImages = [
  {
    img: "/img/showroom-wide-display.png",
    alt: "Custom luxury paper bags and gift boxes displayed in SORIVA packaging showroom",
    caption: "Wide Showroom Display — Comparing structures, dimensions and material options in person.",
  },
  {
    img: "/img/showroom-paperbag-assortment.png",
    alt: "Assortment of custom paper bags with different handle styles and colors in showroom",
    caption: "Handle & Color Assortment — Cotton ropes, satin ribbons, grosgrain and twisted paper cords.",
  },
  {
    img: "/img/showroom-giftbox-paperbag-variety.png",
    alt: "Packaging showroom featuring coordinated rigid boxes and boutique shopping bags",
    caption: "Coordinated Suites — Developing matching retail carrier bags alongside custom rigid gift boxes.",
  },
];

const sizeGuide = [
  {
    category: "Small (Boutique / Jewelry)",
    dimensions: "120 × 60 × 160 mm / 150 × 70 × 200 mm",
    idealFor: "Jewelry boxes, perfume bottles, cosmetics, watches and small luxury accessories.",
  },
  {
    category: "Medium (Cosmetics / Gifts)",
    dimensions: "200 × 100 × 250 mm / 260 × 100 × 320 mm",
    idealFor: "Skincare sets, jar candles, scarves, electronics, confectionery and boutique gifts.",
  },
  {
    category: "Large (Apparel / Footwear)",
    dimensions: "320 × 110 × 400 mm / 420 × 120 × 350 mm",
    idealFor: "Clothing, handbags, luxury footwear, winter knitwear and department store purchases.",
  },
  {
    category: "Custom Proportions",
    dimensions: "Fully Tailored Proportions",
    idealFor: "Custom length, width and gusset depth engineered around your specific product packaging box sizes.",
  },
];

const gsmGuide = [
  {
    gsm: "210 GSM",
    type: "Lightweight Premium",
    strength: "Moderate Load",
    bestFor: "Boutique jewelry, light cosmetics, confectionery, accessories and event favor bags.",
  },
  {
    gsm: "250 GSM",
    type: "Standard Luxury (Most Popular)",
    strength: "Balanced Sturdiness",
    bestFor: "General retail shopping bags, skincare gift sets, fashion items, luxury merchandise and corporate gifting.",
  },
  {
    gsm: "300+ GSM",
    type: "Heavyweight Rigid Structure",
    strength: "Maximum Load Capacity",
    bestFor: "Heavy bottles, apparel gift boxes, candle collections, multiple products and ultra-luxury brand presentation.",
  },
];

const materials = [
  {
    name: "Coated Art Paper",
    features: "Smooth white surface, excellent for vibrant CMYK photographic printing, sharp graphics and lamination.",
  },
  {
    name: "White Card Paper (C1S / C2S)",
    features: "Crisp white substrate with high tensile strength, stiffness and clean creasing lines for structured bags.",
  },
  {
    name: "Black Card Paper",
    features: "Solid dyed black core paper; perfect for metallic foil stamping, tone-on-tone gloss spot UV and minimal branding.",
  },
  {
    name: "Natural Kraft Paper (Brown / White)",
    features: "Durable unbleached or bleached kraft paper offering a raw organic texture and excellent tear resistance.",
  },
  {
    name: "Specialty Textured Paper",
    features: "Embossed linen, felt, laid or pearlized surfaces delivering high tactile sophistication.",
    href: "/resources/luxury-packaging-paper-types-art-paper-vs-specialty-paper-vs-kraft/",
    linkText: "Paper Types Guide →",
  },
  {
    name: "Gold / Silver Card Paper",
    features: "Reflective metallic laminated board creating an eye-catching, high-impact reflective packaging exterior.",
  },
];

const handleOptions = [
  {
    title: "Cotton Rope Handles",
    desc: "Soft natural cotton cords knotted or capped, providing a premium ergonomic hand feel and substantial strength.",
  },
  {
    title: "Satin / Grosgrain Ribbon",
    desc: "Silky satin or textured grosgrain ribbons threaded through eyelets or slotted into bag folds for elegant luxury gifting.",
  },
  {
    title: "Twisted Paper Cords",
    desc: "Firm twisted paper handles glued into the interior top turnover for clean, recyclable retail packaging.",
  },
  {
    title: "Embedded / Hidden Ribbon Handles",
    desc: "Ribbon ends seamlessly glued inside the reinforced turnover board without visible knots or eyelets on the outside.",
  },
  {
    title: "Die-Cut Handles",
    desc: "Reinforced cut-out handle slots integrated into the upper bag structure for minimalist modern carry bags.",
  },
  {
    title: "PP Cord / Synthetic Rope",
    desc: "High-strength braided synthetic ropes with plastic or metal aglets for commercial retail applications.",
  },
];

const finishingOptions = [
  {
    title: "Hot Foil Stamping",
    desc: "Metallic gold, silver, rose gold, copper, holographic or matte pigment foil applied with precision heat and pressure.",
  },
  {
    title: "Embossing & Debossing",
    desc: "Blind or registered 3D relief creating tactile raised or recessed logos, monograms and all-over patterns.",
  },
  {
    title: "Spot UV Coating",
    desc: "High-gloss selective polymer coating creating sharp visual and textural contrast against a velvet matte background.",
  },
  {
    title: "Soft-Touch Matte Lamination",
    desc: "Velvety tactile lamination offering scratch resistance, moisture protection and a signature premium hand feel.",
  },
  {
    title: "Gloss Lamination",
    desc: "Protective high-shine barrier enhancing color saturation, brilliance and exterior surface durability.",
  },
  {
    title: "Precision Die-Cutting & Embossed Borders",
    desc: "Custom die-cut window details, scalloped edges, textured borders and bespoke structural folds.",
  },
];

const applications = [
  {
    img: "/img/project-skincare.webp",
    title: "Cosmetics & Skincare",
    desc: "Boutique retail bags for skincare bottles, makeup collections, beauty sets and launch kits.",
    href: "/industries/cosmetic-packaging/",
  },
  {
    img: "/img/project-perfume.webp",
    title: "Perfume & Fragrance",
    desc: "Elegant retail and gift shopping bags sized for luxury fragrance bottles and sample sets.",
    href: "/industries/perfume-packaging/",
  },
  {
    img: "/img/project-jewelry.webp",
    title: "Jewelry & Watches",
    desc: "Sturdy small-format bags with ribbon closures designed to accompany fine jewelry presentation boxes.",
    href: "/industries/jewelry-packaging/",
  },
  {
    img: "/img/fashion.webp",
    title: "Fashion & Apparel",
    desc: "Large-format branded carrier bags for designer clothing, luxury scarves, footwear and boutique accessories.",
    href: "/industries/fashion-packaging/",
  },
  {
    img: "/img/project-gift-clean.webp",
    title: "Corporate Gifting & Events",
    desc: "VIP event favor bags, corporate anniversary gifts, press kits and executive launch packaging.",
    href: "/industries/corporate-gift-packaging/",
  },
  {
    img: "/img/candles.webp",
    title: "Candle & Home Fragrance",
    desc: "Reinforced bottom shopping bags supporting heavy glass jars, home diffusers and holiday sets.",
    href: "/industries/candle-packaging/",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Requirements & Sizing",
    desc: "Send product dimensions, target bag size, preferred paper type, handle style, quantity and branding artwork.",
  },
  {
    num: "02",
    title: "Structure & Artwork Dieline",
    desc: "We verify bag proportions, material weight (GSM), handle attachment methods and prepare production dielines.",
  },
  {
    num: "03",
    title: "Quotation & Specification",
    desc: "Detailed pricing based on quantity tiers, print methods (CMYK/Pantone), finishing options and shipping terms.",
  },
  {
    num: "04",
    title: "Sampling & Prototyping",
    desc: "Physical prototype sample produced to verify bag structure, print colors, handle strength and finishing quality.",
  },
  {
    num: "05",
    title: "Mass Production & QC",
    desc: "Precision printing, surface lamination, die-cutting, folding, gluing, handle assembly and 100% inspection.",
  },
  {
    num: "06",
    title: "Packing & Global Delivery",
    desc: "Flat-packed in heavy-duty export cartons with moisture protection; delivered via Sea, Air or Express.",
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
    q: "What is the MOQ for custom luxury paper bags?",
    a: "Selected custom paper bag projects can start from around 100 pcs. The optimal production quantity depends on paper material, plate setup, printing complexity and handle assembly requirements.",
  },
  {
    q: "Can I customize the exact paper bag dimensions?",
    a: "Yes. Every dimension (Length × Width × Height / Gusset depth) is fully custom-engineered to fit your product packaging, retail boxes or gift merchandise perfectly.",
  },
  {
    q: "Can you match specific Pantone (PMS) brand colors?",
    a: "Yes. In addition to high-definition CMYK process printing, we offer Pantone spot color mixing to ensure precise color fidelity across your entire packaging program.",
  },
  {
    q: "What paper materials and weights (GSM) are available?",
    a: "We offer coated art paper (210–300 GSM), white cardstock, dyed black card, natural kraft paper (150–250 GSM), specialty textured papers and metallic laminated boards.",
  },
  {
    q: "What finishing options can be applied to custom paper bags?",
    a: "Finishing options include hot foil stamping (gold, silver, holographic, color foils), blind embossing, debossing, gloss spot UV coating, soft-touch matte lamination and custom die-cut borders.",
  },
  {
    q: "What handle styles and materials can I choose?",
    a: "We provide cotton rope, satin ribbon, grosgrain ribbon, twisted kraft cords, embedded ribbon handles, die-cut handle slots and synthetic cord options.",
  },
  {
    q: "Can I order a physical sample before mass production?",
    a: "Yes. 1 pc prototype or pre-production sample is available for custom projects to confirm size, paper thickness, print alignment, handle feel and finishing before mass manufacturing.",
  },
  {
    q: "What are the shipping options and production lead times?",
    a: "We support international Sea, Air and Express freight with flat-packed carton optimization. Production lead time is confirmed based on design complexity, quantity, materials and finishing requirements.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Custom Luxury Paper Bags",
      image: "https://www.sorivapackaging.com/img/paper-bags.webp",
      description:
        "Custom luxury paper bags with tailored sizes, materials, printing, handles and premium finishing options. OEM/ODM support, sampling and flexible customization for global brands.",
      brand: { "@type": "Brand", name: "SORIVA Packaging" },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        price: "0.50",
        lowPrice: "0.20",
        highPrice: "2.50",
        offerCount: "1000",
        availability: "https://schema.org/InStock",
      },
      url: PAGE_URL,
    },
    {
      "@type": "Service",
      name: "Custom Luxury Paper Bag Manufacturing",
      description:
        "OEM/ODM custom luxury paper bag manufacturing and supply for cosmetics, perfume, jewelry, fashion, corporate gift and retail brands.",
      url: PAGE_URL,
      serviceType: "Custom Paper Bag Manufacturing",
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
          name: "Products",
          item: "https://www.sorivapackaging.com/products/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Luxury Paper Bags",
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

export default function LuxuryPaperBagsPage() {
  return (
    <main className="mrb-page">
      {/* Hero */}
      <section className="mrb-hero">
        <div className="container">
          <nav className="mrb-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a> / <a href="/products/">Products</a> / Luxury Paper Bags
          </nav>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">CUSTOM LUXURY PACKAGING</span>
              <h1>Custom Luxury Paper Bags for Premium Brands</h1>
              <p className="mrb-lead">
                Create premium paper bags that reflect your brand identity through customized
                sizes, materials, colors, handles, printing and finishing. From boutique shopping
                bags to luxury gift packaging, SORIVA helps global brands produce refined, durable
                and retail-ready paper bags.
              </p>
              <div className="mrb-tags">
                <span>MOQ From 100 pcs</span>
                <span>Custom Size &amp; GSM</span>
                <span>CMYK &amp; Pantone Matching</span>
                <span>Foil / Emboss / Spot UV</span>
                <span>Worldwide Shipping</span>
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
                <a href="#customization" className="btn ghost">
                  Explore Options
                </a>
              </div>
            </div>
            <div className="mrb-hero-media">
              <img
                src="/img/paper-bags.webp"
                alt="Custom luxury paper bags with premium handles and gold foil"
                width="1200"
                height="900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 1. Customization Overview */}
      <section className="mrb-section" id="customization">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">CUSTOMIZATION OVERVIEW</span>
            <h2>Customize Every Detail of Your Paper Bags</h2>
            <p>
              Every element of our custom paper bags can be tailored to align with your brand
              aesthetics, product weight requirements and retail packaging standards.
            </p>
          </div>
          <div className="mrb-features">
            {customizationPillars.map((p) => (
              <article className="mrb-feature" key={p.title}>
                <strong>{p.num}</strong>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                {p.href && (
                  <p style={{ marginTop: 10 }}>
                    <a href={p.href} style={{ color: "var(--color-gold, #c79a51)", fontWeight: 600, fontSize: 13 }}>
                      {p.linkText}
                    </a>
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Real Custom Paper Bag Samples (Visual Trust Module A) */}
      <section className="mrb-section soft" id="samples">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">REAL SAMPLE SHOWCASE</span>
            <h2>Real Custom Paper Bag Samples</h2>
            <p>
              Explore real paper bag samples developed for different brand styles, sizes, handle
              structures and presentation requirements.
            </p>
          </div>
          <div className="mrb-apps" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            {sampleShowcase.map((s) => (
              <article className="mrb-app" key={s.title} style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 10, overflow: "hidden" }}>
                <img
                  src={s.img}
                  alt={s.alt}
                  loading="lazy"
                  style={{ width: "100%", height: 260, objectFit: "cover" }}
                />
                <div style={{ padding: "18px 20px" }}>
                  <b style={{ fontSize: 18, color: "#111", display: "block", marginBottom: 8 }}>{s.title}</b>
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

      {/* 2. Paper Bag Styles */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">BAG STYLES</span>
            <h2>Paper Bag Styles for Different Applications</h2>
            <p>
              Choose from classic vertical shoppers, wide horizontal carrier bags, die-cut handle
              styles and bespoke luxury gift bags.
            </p>
          </div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {bagStyles.map((style, idx) => (
              <article className="mrb-feature" key={style.title}>
                <strong>{String(idx + 1).padStart(2, "0")}</strong>
                <h3>{style.title}</h3>
                <p>{style.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Explore Packaging Showroom (Visual Trust Module B) */}
      <section className="mrb-section soft" id="showroom">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">SHOWROOM VERIFICATION</span>
            <h2>Explore Our Packaging Showroom</h2>
            <p>
              Our showroom displays a wide range of paper bags, rigid boxes and coordinated packaging
              solutions, helping buyers compare structures, materials, colors, handles and finishing options.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
            {showroomImages.map((item) => (
              <div key={item.img} style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 10, overflow: "hidden" }}>
                <img
                  src={item.img}
                  alt={item.alt}
                  loading="lazy"
                  style={{ width: "100%", height: 260, objectFit: "cover" }}
                />
                <div style={{ padding: "14px 18px" }}>
                  <p style={{ fontSize: 13, color: "#444", lineHeight: 1.5, margin: 0 }}>
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 24 }}>
            <a href="/factory/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 14 }}>
              Tour Factory Facilities &amp; Production Verification →
            </a>
          </div>
        </div>
      </section>

      {/* 3. Size & Dimension Guide */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">DIMENSION GUIDE</span>
            <h2>Custom Sizes Engineered to Fit Your Products</h2>
            <p>
              Paper bag dimensions are specified as Length × Width (Gusset) × Height. Below are
              common industry standard reference proportions.
            </p>
          </div>
          <div className="mrb-table-wrap">
            <table className="mrb-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Standard Reference Dimensions (L × W × H)</th>
                  <th>Typical Industry Applications</th>
                </tr>
              </thead>
              <tbody>
                {sizeGuide.map((row) => (
                  <tr key={row.category}>
                    <td><strong>{row.category}</strong></td>
                    <td>{row.dimensions}</td>
                    <td>{row.idealFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mrb-note" style={{ marginTop: 24 }}>
            <b>Buyer Tip:</b> If your product or gift set has irregular proportions, simply send us
            your product box dimensions or photos. Our engineering team will calculate the optimal
            bag dimensions with appropriate clearance allowances.
          </div>
        </div>
      </section>

      {/* 4. GSM / Thickness Guide */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">PAPER THICKNESS</span>
            <h2>Paper Weight &amp; Thickness (GSM) Options</h2>
            <p>
              Select the appropriate paper grammage (GSM) to balance structural stiffness, luxury
              hand feel and weight-bearing performance.
            </p>
          </div>
          <div className="mrb-table-wrap">
            <table className="mrb-table">
              <thead>
                <tr>
                  <th>Paper Weight</th>
                  <th>Grade Classification</th>
                  <th>Strength &amp; Rigidity</th>
                  <th>Recommended Applications</th>
                </tr>
              </thead>
              <tbody>
                {gsmGuide.map((g) => (
                  <tr key={g.gsm}>
                    <td><strong style={{ color: "var(--color-gold, #c79a51)" }}>{g.gsm}</strong></td>
                    <td>{g.type}</td>
                    <td>{g.strength}</td>
                    <td>{g.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 13, color: "#777", marginTop: 14, textAlign: "center" }}>
            <em>Disclaimer: Final material and GSM recommendations depend on actual project dimensions, handle styles and product load requirements.</em>
          </p>
        </div>
      </section>

      {/* 5. Paper Materials */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">MATERIAL OPTIONS</span>
            <h2>Paper Materials for Distinctive Brand Aesthetics</h2>
            <p>
              We source certified, premium-grade paper stocks tailored for vibrant color printing,
              deep embossing and durable retail usage.
            </p>
          </div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {materials.map((m) => (
              <article className="mrb-feature" key={m.name}>
                <h3>{m.name}</h3>
                <p>{m.features}</p>
                {m.href && (
                  <p style={{ marginTop: 10 }}>
                    <a href={m.href} style={{ color: "var(--color-gold, #c79a51)", fontWeight: 600, fontSize: 13 }}>
                      {m.linkText}
                    </a>
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Coordinated Packaging Set Capability (Visual Trust Module C) */}
      <section className="mrb-section soft">
        <div className="container mrb-spec-wrap">
          <div>
            <div className="mrb-head">
              <span className="eyebrow dark">COORDINATED PACKAGING</span>
              <h2>Build a Coordinated Packaging Set</h2>
            </div>
            <p style={{ lineHeight: 1.7, color: "#444", marginBottom: 16 }}>
              Paper bags can be developed together with matching rigid gift boxes, custom tissue paper,
              cards and ribbon closures for a consistent retail presentation across every touchpoint:
            </p>
            <ul style={{ lineHeight: 1.8, color: "#444", paddingLeft: 20, marginBottom: 20 }}>
              <li><strong>Matching Rigid Boxes:</strong> Pair with magnetic boxes, sliding drawer boxes or two-piece gift boxes.</li>
              <li><strong>Consistent Brand Colors:</strong> Precise Pantone (PMS) matching across paper bags and box wraps.</li>
              <li><strong>Unified Embellishments:</strong> Coordinated hot foil stamping, embossing and soft-touch textures.</li>
            </ul>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="/products/magnetic-rigid-boxes/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                Magnetic Rigid Boxes →
              </a>
              <a href="/products/drawer-boxes/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                Sliding Drawer Boxes →
              </a>
              <a href="/products/two-piece-rigid-boxes/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                Two-Piece Rigid Boxes →
              </a>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <img
              src="/img/sample-paperbag-matching-set.jpg"
              alt="Coordinated paper bag and gift box packaging set"
              loading="lazy"
              style={{ width: "100%", borderRadius: 10, border: "1px solid #e7e2d9", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* 6. CMYK & Pantone Printing */}
      <section className="mrb-section">
        <div className="container mrb-spec-wrap">
          <div>
            <div className="mrb-head">
              <span className="eyebrow dark">COLOR &amp; PRINTING</span>
              <h2>CMYK &amp; Pantone (PMS) Color Matching</h2>
            </div>
            <p style={{ lineHeight: 1.7, color: "#444", marginBottom: 16 }}>
              Color accuracy defines brand prestige. We offer both full-color process printing and
              exact spot color matching across all bag surfaces, gussets and interior linings:
            </p>
            <ul style={{ lineHeight: 1.8, color: "#444", paddingLeft: 20, marginBottom: 20 }}>
              <li>
                <strong>CMYK Process:</strong> Best for full-color graphic artwork, photography,
                subtle gradients and multi-color illustrations.
              </li>
              <li>
                <strong>Pantone (PMS) Spot Colors:</strong> Recommended for solid brand colors,
                monograms and consistent identity across multiple production runs.
              </li>
              <li>
                <strong>Inside Print &amp; Floods:</strong> Enhance the unboxing experience with
                colored interior flooding or contrasting inner patterns.
              </li>
            </ul>
            <p>
              <a
                href="/resources/pantone-vs-cmyk-custom-packaging/"
                style={{ color: "var(--color-gold, #c79a51)", fontWeight: 600 }}
              >
                Read our in-depth Pantone vs CMYK Printing Guide →
              </a>
            </p>
          </div>
          <div className="mrb-structure">
            <div className="mrb-head">
              <span className="eyebrow dark">SURFACE PROTECTION</span>
              <h2>Protective Lamination &amp; Coatings</h2>
            </div>
            <p style={{ lineHeight: 1.7, color: "#444", marginBottom: 14 }}>
              To ensure bag durability, prevent edge cracking along score lines and protect
              against moisture, we apply protective barrier coatings:
            </p>
            <ul style={{ lineHeight: 1.8, color: "#444", paddingLeft: 20 }}>
              <li><strong>Soft-Touch Matte:</strong> Velvety, anti-glare premium tactile feel.</li>
              <li><strong>Anti-Scratch Matte:</strong> Resists scuffs during transit and retail handling.</li>
              <li><strong>High-Gloss Lamination:</strong> Maximizes color brilliance and reflective shine.</li>
              <li><strong>Aqueous &amp; Varnish:</strong> Eco-conscious lightweight protective coats.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mid-Page Call to Action */}
      <section className="mrb-section dark" style={{ textAlign: "center", padding: "48px 0" }}>
        <div className="container">
          <span className="mrb-eyebrow">CUSTOM PACKAGING SUPPORT</span>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(26px, 3.2vw, 36px)", fontWeight: 500, margin: "12px 0 16px" }}>
            Ready to Develop Your Custom Luxury Paper Bags?
          </h2>
          <p style={{ color: "#c5c5c5", maxWidth: 680, margin: "0 auto 24px", lineHeight: 1.65 }}>
            Send us your target dimensions, artwork ideas or reference photos. We will provide
            material recommendations, dieline templates and tier-based quotations.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
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
          </div>
        </div>
      </section>

      {/* 7. Finishing Options */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">LUXURY FINISHING</span>
            <h2>Embellishments That Elevate Brand Value</h2>
            <p>
              Combine hot foil stamping, precision embossing and gloss textures to create visually
              captivating retail packaging.
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

      {/* 8. Handle Options */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">HANDLE CRAFTSMANSHIP</span>
            <h2>Custom Handle Options &amp; Attachments</h2>
            <p>
              The handle defines the carrying comfort and aesthetic closure of the bag. Choose from
              ribbons, ropes, cords or die-cut structures.
            </p>
          </div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {handleOptions.map((h) => (
              <article className="mrb-feature" key={h.title}>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Video Showcase (Visual Trust Module E) */}
      <section className="mrb-section" id="video-tour">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">VIDEO PROOF</span>
            <h2>See Our Paper Bag Samples &amp; Showroom</h2>
            <p>
              Watch our packaging showroom walk-through and physical sample inspections to verify
              craftsmanship, paper weight, ribbon feel and structural stability.
            </p>
          </div>
          <div style={{ maxWidth: 840, margin: "0 auto", background: "#000", borderRadius: 12, overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}>
            <video
              controls
              playsInline
              preload="none"
              poster="/img/showroom-wide-display.png"
              style={{ width: "100%", maxHeight: 480, display: "block" }}
            >
              <source src="/video/showroom-paperbag-tour.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p style={{ textAlign: "center", fontSize: 13, color: "#666", marginTop: 14 }}>
            <em>Video demonstrates real showroom displays and custom packaging samples.</em>
          </p>
        </div>
      </section>

      {/* 9. Application Industries */}
      <section className="mrb-section soft" id="details">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">APPLICATIONS</span>
            <h2>Custom Paper Bags for Leading Industry Categories</h2>
            <p>
              Designed for luxury retail, cosmetic boutiques, perfume launches, jewelry brands and
              corporate gift sets.
            </p>
          </div>
          <div className="mrb-apps">
            {applications.map((a) => (
              <article className="mrb-app" key={a.title}>
                <img src={a.img} alt={a.title} />
                <div>
                  <b>
                    {a.href ? (
                      <a href={a.href} style={{ color: "inherit", textDecoration: "none" }}>
                        {a.title} →
                      </a>
                    ) : (
                      a.title
                    )}
                  </b>
                  <span>{a.desc}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Sample & Order Process */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">ORDER PROCESS</span>
            <h2>From Idea to Finished Paper Bags</h2>
            <p>
              Our transparent OEM / ODM workflow ensures smooth communication, precision sampling
              and reliable bulk delivery.
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
        </div>
      </section>

      {/* 11. Why Work With SORIVA (Factory capability) */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">FACTORY CAPABILITY</span>
            <h2>Custom Packaging Support for Global Buyers</h2>
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

      {/* 12. FAQ */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>Answers to common questions about MOQ, dimensions, materials, sampling and logistics.</p>
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
        title="Luxury Paper Bag Buyer Guides & Resources"
        subtitle="Explore practical advice on paper types, MOQ economics, inventory planning, shipping and trade terms."
        guides={[
          {
            tag: "MOQ & Pricing",
            title: "How Custom Packaging MOQ Affects Unit Cost",
            desc: "Learn how order quantity affects paper bag plate setup, printing efficiency and overall unit costs.",
            href: "/resources/how-custom-packaging-moq-affects-unit-cost/",
          },
          {
            tag: "Inventory Planning",
            title: "How to Plan Packaging Inventory for Seasonal or Launch Orders",
            desc: "A buyer guide to planning custom retail shopping bag inventory for seasonal campaigns and brand launches.",
            href: "/resources/how-to-plan-packaging-inventory-seasonal-launch-orders/",
          },
          {
            tag: "Paper & Finishing",
            title: "Luxury Packaging Paper Types: Art Paper vs Specialty Paper vs Kraft",
            desc: "Compare white cardboard, coated art paper, kraft paper and specialty textured papers for luxury shopping bags.",
            href: "/resources/luxury-packaging-paper-types-art-paper-vs-specialty-paper-vs-kraft/",
          },
          {
            tag: "Freight & Logistics",
            title: "How to Reduce Custom Packaging Shipping Cost",
            desc: "Learn how flat-packed luxury paper bags optimize carton volume and reduce international freight costs.",
            href: "/resources/how-to-reduce-custom-packaging-shipping-cost/",
          },
        ]}
      />

      {/* 13 & 14. Final Quote & WhatsApp CTA */}
      <section className="mrb-quote" id="quote">
        <div className="container mrb-quote-grid">
          <div>
            <span className="mrb-eyebrow">START A PROJECT</span>
            <h2>Start Your Custom Paper Bag Project</h2>
            <p style={{ color: "#c5c5c5", lineHeight: 1.7, margin: "12px 0 16px" }}>
              Send us your target size, quantity, logo artwork, material preference and destination.
              Our packaging specialists can help review suitable paper, printing, finishing and
              handle options for your project.
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
              Explore Custom Packaging System →
            </a>
          </div>
          <QuoteForm />
        </div>
      </section>

      <ProductCrossLinks industryHref="/industries/fashion-packaging/" industryLabel="Fashion Packaging" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  );
}
