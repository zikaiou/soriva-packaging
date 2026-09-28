/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../lib/whatsapp";
import "../products/product-page.css";

const PAGE_URL = "https://www.sorivapackaging.com/resources/";

export const metadata: Metadata = {
  title: {
    absolute: "Packaging Buyer Guides & Resources | SORIVA Packaging",
  },
  description:
    "Explore practical custom packaging buyer guides covering sourcing, MOQ, cost, materials, printing, sampling, quality control and international shipping.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Packaging Buyer Guides & Resources | SORIVA Packaging",
    description:
      "Explore practical custom packaging buyer guides covering sourcing, MOQ, cost, materials, printing, sampling, quality control and international shipping.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
  },
};

const startHereGuides = [
  {
    step: "STEP 01",
    tag: "RFQ Preparation",
    title: "How to Prepare an RFQ for Custom Packaging",
    desc: "A practical guide to preparing a clear custom packaging RFQ with size, quantity, materials, inserts, finishes and reference files.",
    href: "/resources/how-to-prepare-custom-packaging-rfq/",
    linkText: "Read RFQ Guide →",
  },
  {
    step: "STEP 02",
    tag: "Supplier Selection",
    title: "How to Choose a Custom Packaging Manufacturer in China",
    desc: "A buyer guide to evaluating packaging factories in China, including manufacturing capability, sampling, QC and communication.",
    href: "/resources/how-to-choose-custom-packaging-manufacturer-china/",
    linkText: "Read Manufacturer Guide →",
  },
  {
    step: "STEP 03",
    tag: "Product Measurement",
    title: "How to Measure a Product for Custom Box Packaging",
    desc: "Learn how to measure product dimensions and calculate appropriate box clearances, insert cavity depths and orientations.",
    href: "/resources/how-to-measure-product-for-custom-box-packaging/",
    linkText: "Read Measurement Guide →",
  },
];

const featuredGuides = [
  {
    tag: "Cost Breakdown",
    title: "Custom Packaging Cost Breakdown: What Buyers Are Paying For",
    desc: "Understand the main cost drivers in custom packaging, including materials, structure, printing, finishing, inserts and freight.",
    href: "/resources/custom-packaging-cost-breakdown/",
  },
  {
    tag: "MOQ & Pricing",
    title: "How Custom Packaging MOQ Affects Unit Cost",
    desc: "A buyer guide to understanding how MOQ affects unit cost, setup cost allocation, materials, finishing and shipping efficiency.",
    href: "/resources/how-custom-packaging-moq-affects-unit-cost/",
  },
  {
    tag: "Color & Printing",
    title: "Pantone vs CMYK for Custom Packaging",
    desc: "A buyer guide to choosing Pantone or CMYK printing for custom packaging, with practical differences in color consistency.",
    href: "/resources/pantone-vs-cmyk-custom-packaging/",
  },
  {
    tag: "Finishing Techniques",
    title: "Foil Stamping vs Embossing vs Spot UV",
    desc: "Compare foil stamping, embossing and spot UV for luxury packaging, including appearance, tactile effect and common uses.",
    href: "/resources/foil-stamping-vs-embossing-vs-spot-uv/",
  },
  {
    tag: "Sampling",
    title: "Prototype Sample vs Pre-Production Sample",
    desc: "Understand the difference between prototype and pre-production samples for custom packaging before mass manufacturing.",
    href: "/resources/prototype-sample-vs-pre-production-sample/",
  },
  {
    tag: "Trade Terms",
    title: "EXW vs FOB vs DDP for Custom Packaging Orders",
    desc: "Understand the practical differences between EXW, FOB and DDP when importing custom packaging, including freight responsibilities.",
    href: "/resources/exw-vs-fob-vs-ddp-custom-packaging/",
  },
];

const gettingStartedGuides = [
  {
    tag: "RFQ Preparation",
    title: "How to Prepare an RFQ for Custom Packaging",
    desc: "Key details to include in an RFQ to get faster, more accurate quotations.",
    href: "/resources/how-to-prepare-custom-packaging-rfq/",
  },
  {
    tag: "Supplier Selection",
    title: "How to Choose a Custom Packaging Manufacturer in China",
    desc: "Practical checklist for evaluating factory equipment, QC and communication.",
    href: "/resources/how-to-choose-custom-packaging-manufacturer-china/",
  },
  {
    tag: "Product Measurement",
    title: "How to Measure a Product for Custom Box Packaging",
    desc: "Step-by-step measurement guide for box proportions and insert tolerances.",
    href: "/resources/how-to-measure-product-for-custom-box-packaging/",
  },
  {
    tag: "Box Structures",
    title: "Rigid Box Structure Guide: Magnetic vs Drawer vs Two-Piece",
    desc: "Compare opening styles, assembly, presentation and packing efficiency.",
    href: "/resources/rigid-box-structure-guide-magnetic-vs-drawer-vs-two-piece/",
  },
];

const costAndPlanningGuides = [
  {
    tag: "MOQ & Pricing",
    title: "How Custom Packaging MOQ Affects Unit Cost",
    desc: "Learn how order quantities spread fixed setup and tooling costs.",
    href: "/resources/how-custom-packaging-moq-affects-unit-cost/",
  },
  {
    tag: "Cost Breakdown",
    title: "Custom Packaging Cost Breakdown: What Buyers Are Paying For",
    desc: "Direct breakdown of materials, labor, finishing, inserts and tooling.",
    href: "/resources/custom-packaging-cost-breakdown/",
  },
  {
    tag: "Freight & Logistics",
    title: "How to Reduce Custom Packaging Shipping Cost",
    desc: "Optimize structure, flat-folding and master carton CBM to reduce freight.",
    href: "/resources/how-to-reduce-custom-packaging-shipping-cost/",
  },
  {
    tag: "Inventory Planning",
    title: "How to Plan Packaging Inventory for Seasonal or Launch Orders",
    desc: "Lead time buffers, safety stock and reorder timing for holiday campaigns.",
    href: "/resources/how-to-plan-packaging-inventory-seasonal-launch-orders/",
  },
];

const materialsAndStructureGuides = [
  {
    tag: "Materials & Structure",
    title: "Rigid Greyboard Thickness Guide for Custom Boxes",
    desc: "Choose from 1.5mm to 3.0mm greyboard based on box scale and rigidity.",
    href: "/resources/rigid-greyboard-thickness-guide-custom-boxes/",
  },
  {
    tag: "Paper & Finishing",
    title: "Luxury Packaging Paper Types: Art Paper vs Specialty vs Kraft",
    desc: "Compare coated art paper, tactile specialty sheets and natural kraft wraps.",
    href: "/resources/luxury-packaging-paper-types-art-paper-vs-specialty-paper-vs-kraft/",
  },
  {
    tag: "Packaging Inserts",
    title: "EVA vs Paperboard vs Molded Pulp Packaging Inserts",
    desc: "Compare protection, presentation and sustainability across insert materials.",
    href: "/resources/packaging-inserts-eva-vs-paperboard-vs-molded-pulp/",
  },
  {
    tag: "Sustainable Inserts",
    title: "Molded Pulp vs EVA for Sustainable Packaging Inserts",
    desc: "Biodegradable wet-press molded pulp versus precision-cut EVA foam.",
    href: "/resources/molded-pulp-vs-eva-sustainable-packaging-inserts/",
  },
  {
    tag: "Box Structures",
    title: "Rigid Box Structure Guide: Magnetic vs Drawer vs Two-Piece",
    desc: "Comprehensive structure comparison for luxury consumer packaging.",
    href: "/resources/rigid-box-structure-guide-magnetic-vs-drawer-vs-two-piece/",
  },
  {
    tag: "Foldable Packaging",
    title: "Foldable vs Traditional Rigid Boxes",
    desc: "Compare storage space, shipping efficiency and assembly considerations.",
    href: "/resources/foldable-vs-traditional-rigid-box/",
  },
  {
    tag: "Materials Guide",
    title: "Luxury Packaging Materials: A Buyer's Guide",
    desc: "Overview of greyboard calipers, specialty papers, wraps and insert foams.",
    href: "/resources/luxury-packaging-materials-guide/",
  },
  {
    tag: "Rigid Boxes",
    title: "What Is a Magnetic Rigid Box?",
    desc: "How magnetic closure boxes are constructed and customized for retail.",
    href: "/resources/magnetic-rigid-box-guide/",
  },
];

const printingAndFinishingGuides = [
  {
    tag: "Color & Printing",
    title: "Pantone vs CMYK for Custom Packaging",
    desc: "When to use CMYK process printing versus exact Pantone (PMS) spot colors.",
    href: "/resources/pantone-vs-cmyk-custom-packaging/",
  },
  {
    tag: "Finishing Techniques",
    title: "Foil Stamping vs Embossing vs Spot UV",
    desc: "Compare visual contrast, tactile relief and cost impact of luxury finishes.",
    href: "/resources/foil-stamping-vs-embossing-vs-spot-uv/",
  },
];

const samplingAndQcGuides = [
  {
    tag: "Sampling Checklist",
    title: "Custom Gift Box Sample Checklist Before Mass Production",
    desc: "Detailed checklist for verifying dimensions, logo alignment and insert snugness.",
    href: "/resources/custom-gift-box-sample-checklist/",
  },
  {
    tag: "Sampling Stages",
    title: "Prototype Sample vs Pre-Production Sample: What Buyers Should Know",
    desc: "Understand what each sample stage validates before releasing mass production.",
    href: "/resources/prototype-sample-vs-pre-production-sample/",
  },
  {
    tag: "Quality Control",
    title: "How to Inspect Custom Packaging Before Shipment",
    desc: "Pre-shipment inspection checklist covering cosmetic defects and carton packing.",
    href: "/resources/how-to-inspect-custom-packaging-before-shipment/",
  },
];

const shippingAndTradeGuides = [
  {
    tag: "Freight & Logistics",
    title: "How to Reduce Custom Packaging Shipping Cost",
    desc: "Actionable ways to lower international freight via volume and packaging design.",
    href: "/resources/how-to-reduce-custom-packaging-shipping-cost/",
  },
  {
    tag: "Trade Terms",
    title: "EXW vs FOB vs DDP for Custom Packaging Orders",
    desc: "Compare buyer and supplier responsibilities for customs, freight and insurance.",
    href: "/resources/exw-vs-fob-vs-ddp-custom-packaging/",
  },
];

const industryPackagingGuides = [
  {
    title: "Cosmetic & Skincare Packaging",
    desc: "Custom rigid boxes and gift sets for beauty bottles, jars and serums.",
    href: "/industries/cosmetic-packaging/",
  },
  {
    title: "Perfume & Fragrance Packaging",
    desc: "Luxury presentation packaging for fragrance bottles and sample sets.",
    href: "/industries/perfume-packaging/",
  },
  {
    title: "Jewelry & Watch Packaging",
    desc: "Refined drawer and two-piece boxes with velvet-flocked insert cushions.",
    href: "/industries/jewelry-packaging/",
  },
  {
    title: "Candle & Home Fragrance",
    desc: "Sturdy rigid packaging engineered for heavy jar candles and diffusers.",
    href: "/industries/candle-packaging/",
  },
  {
    title: "Fashion & Luxury Apparel",
    desc: "Boutique shopping bags, scarf boxes and premium apparel presentation.",
    href: "/industries/fashion-packaging/",
  },
  {
    title: "Corporate Gifts & VIP Kits",
    desc: "Executive gift boxes, launch kits and customized milestone presentation.",
    href: "/industries/corporate-gift-packaging/",
  },
];

const sourcingJourneySteps = [
  {
    num: "01",
    title: "Prepare Requirements",
    desc: "Define product size, target quantity, budget expectations and destination.",
    href: "/resources/how-to-prepare-custom-packaging-rfq/",
    linkText: "RFQ Guide →",
  },
  {
    num: "02",
    title: "Choose Structure & Materials",
    desc: "Select box structure, board thickness, paper wrap textures and insert foam.",
    href: "/resources/rigid-box-structure-guide-magnetic-vs-drawer-vs-two-piece/",
    linkText: "Structure Guide →",
  },
  {
    num: "03",
    title: "Review MOQ & Cost",
    desc: "Evaluate price breaks across quantity tiers and optimize tooling expenses.",
    href: "/resources/custom-packaging-cost-breakdown/",
    linkText: "Cost Guide →",
  },
  {
    num: "04",
    title: "Approve Sample",
    desc: "Test physical prototypes for product snugness, sliding feel and print colors.",
    href: "/resources/prototype-sample-vs-pre-production-sample/",
    linkText: "Sampling Guide →",
  },
  {
    num: "05",
    title: "Production & QC",
    desc: "Automated board cutting, printing, lamination, assembly and 100% inspection.",
    href: "/resources/how-to-inspect-custom-packaging-before-shipment/",
    linkText: "QC Checklist →",
  },
  {
    num: "06",
    title: "Shipping & Delivery",
    desc: "Coordinate Sea, Air or Express freight with protective export carton packing.",
    href: "/resources/exw-vs-fob-vs-ddp-custom-packaging/",
    linkText: "Trade Terms →",
  },
];

const packagingSolutions = [
  {
    title: "Magnetic Rigid Boxes",
    desc: "Book-style & front-opening luxury magnetic boxes.",
    href: "/products/magnetic-rigid-boxes/",
    img: "/img/magnetic-rigid.webp",
  },
  {
    title: "Foldable Magnetic Boxes",
    desc: "Flat-shipping collapsible luxury rigid packaging.",
    href: "/products/foldable-magnetic-rigid-boxes/",
    img: "/img/foldable-rigid.webp",
  },
  {
    title: "Sliding Drawer Boxes",
    desc: "Matchbox-style slide boxes with satin ribbon pulls.",
    href: "/products/drawer-boxes/",
    img: "/img/drawer-box.webp",
  },
  {
    title: "Two-Piece Rigid Boxes",
    desc: "Classic lid-and-base gift packaging boxes.",
    href: "/products/two-piece-rigid-boxes/",
    img: "/img/two-piece-rigid.webp",
  },
  {
    title: "Round Tube Packaging",
    desc: "Rigid cylindrical paperboard canisters and tubes.",
    href: "/products/tube-packaging/",
    img: "/img/tube-packaging.webp",
  },
  {
    title: "Luxury Paper Bags",
    desc: "Custom boutique paper shopping bags with rope handles.",
    href: "/products/luxury-paper-bags/",
    img: "/img/paper-bags.webp",
  },
];

const trustCards = [
  {
    tag: "MANUFACTURING",
    title: "Factory Verification",
    desc: "Explore our 10,000㎡ manufacturing facility, production machinery, equipment and quality control processes.",
    href: "/factory/",
    linkText: "Tour Factory Facilities →",
  },
  {
    tag: "PORTFOLIO",
    title: "Real Packaging Projects",
    desc: "Review real case studies across fragrance packaging, fine jewelry boxes, skincare sets and luxury gifting.",
    href: "/projects/",
    linkText: "Explore Projects →",
  },
  {
    tag: "CAPABILITIES",
    title: "Custom Packaging System",
    desc: "Explore our full range of box structures, materials, custom inserts and surface finishing capabilities.",
    href: "/custom-packaging/",
    linkText: "Explore System →",
  },
  {
    tag: "QUOTATION",
    title: "Request a Custom Quote",
    desc: "Submit your packaging project specifications for engineering review, dielines and tier-based pricing.",
    href: "/rfq/",
    linkText: "Request Quote →",
  },
];

const allGuidesList = [
  ...gettingStartedGuides,
  ...costAndPlanningGuides,
  ...materialsAndStructureGuides,
  ...printingAndFinishingGuides,
  ...samplingAndQcGuides,
  ...shippingAndTradeGuides,
];

// Deduplicate all guides for structured data
const uniqueGuidesMap = new Map<string, (typeof allGuidesList)[0]>();
allGuidesList.forEach((g) => {
  if (!uniqueGuidesMap.has(g.href)) {
    uniqueGuidesMap.set(g.href, g);
  }
});
const uniqueGuides = Array.from(uniqueGuidesMap.values());

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sorivapackaging.com/" },
        { "@type": "ListItem", position: 2, name: "Resources", item: PAGE_URL },
      ],
    },
    {
      "@type": "CollectionPage",
      name: "Packaging Buyer Guides & Resources",
      description:
        "Explore practical custom packaging buyer guides covering sourcing, MOQ, cost, materials, printing, sampling, quality control and international shipping.",
      url: PAGE_URL,
      mainEntity: {
        "@type": "ItemList",
        name: "Custom Packaging Buyer Guides",
        numberOfItems: uniqueGuides.length,
        itemListElement: uniqueGuides.map((g, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: g.title,
          url: `https://www.sorivapackaging.com${g.href}`,
        })),
      },
    },
  ],
};

export default function ResourcesPage() {
  return (
    <main className="mrb-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* 1. Hero */}
      <section className="mrb-hero">
        <div className="container">
          <nav className="mrb-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a> / Resources
          </nav>
          <div className="mrb-hero-copy" style={{ maxWidth: 880 }}>
            <span className="mrb-eyebrow">PACKAGING KNOWLEDGE HUB</span>
            <h1>Packaging Buyer Guides &amp; Resources</h1>
            <p className="mrb-lead">
              Practical guides for sourcing, materials, sampling, cost, quality control and
              shipping of custom packaging. Designed to help brands make informed procurement
              decisions before starting production.
            </p>
            <div className="mrb-hero-actions" style={{ marginTop: 24 }}>
              <a href="/resources/how-to-prepare-custom-packaging-rfq/" className="btn gold">
                Start with RFQ Guide
              </a>
              <a href="/rfq/" className="btn ghost">
                Request a Quote
              </a>
              <a
                href={waLink(WA_MESSAGES.resources)}
                target="_blank"
                rel="noopener"
                className="btn-wa"
              >
                <WhatsAppIcon /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Start Here */}
      <section className="mrb-section" id="start-here">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">START HERE</span>
            <h2>Essential First Steps for Packaging Buyers</h2>
            <p>
              If you are planning a new custom packaging project, start with these core preparation
              guides.
            </p>
          </div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {startHereGuides.map((item) => (
              <article className="mrb-feature" key={item.title}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "var(--color-gold, #c79a51)", display: "block", marginBottom: 6 }}>
                  {item.step} • {item.tag}
                </span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <p style={{ marginTop: 14 }}>
                  <a href={item.href} style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 14 }}>
                    {item.linkText}
                  </a>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Guides */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">FEATURED GUIDES</span>
            <h2>Key Procurement &amp; Engineering Topics</h2>
            <p>In-depth buyer guides on cost breakdown, MOQ economics, color matching, finishes and trade terms.</p>
          </div>
          <div className="mrb-res-cards">
            {featuredGuides.map((g) => (
              <article className="mrb-res-card" key={g.href}>
                <small>{g.tag}</small>
                <h3>{g.title}</h3>
                <p>{g.desc}</p>
                <a href={g.href}>Read Guide →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Getting Started Category */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head">
            <span className="eyebrow dark">CATEGORY</span>
            <h2>Getting Started &amp; RFQ Preparation</h2>
            <p>Define your packaging specifications, measure products and evaluate factory partners.</p>
          </div>
          <div className="mrb-res-cards">
            {gettingStartedGuides.map((g) => (
              <article className="mrb-res-card" key={g.href}>
                <small>{g.tag}</small>
                <h3>{g.title}</h3>
                <p>{g.desc}</p>
                <a href={g.href}>Read Guide →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MOQ, Cost & Order Planning */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head">
            <span className="eyebrow dark">CATEGORY</span>
            <h2>MOQ, Cost &amp; Order Planning</h2>
            <p>Understand how order volume, tooling setup, freight planning and inventory timing affect total costs.</p>
          </div>
          <div className="mrb-res-cards">
            {costAndPlanningGuides.map((g) => (
              <article className="mrb-res-card" key={g.href}>
                <small>{g.tag}</small>
                <h3>{g.title}</h3>
                <p>{g.desc}</p>
                <a href={g.href}>Read Guide →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Materials, Inserts & Structure */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head">
            <span className="eyebrow dark">CATEGORY</span>
            <h2>Materials, Inserts &amp; Box Structures</h2>
            <p>Compare board calipers, wrap papers, custom insert cushions and opening mechanics.</p>
          </div>
          <div className="mrb-res-cards">
            {materialsAndStructureGuides.map((g) => (
              <article className="mrb-res-card" key={g.href}>
                <small>{g.tag}</small>
                <h3>{g.title}</h3>
                <p>{g.desc}</p>
                <a href={g.href}>Read Guide →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Printing, Color & Finishing */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head">
            <span className="eyebrow dark">CATEGORY</span>
            <h2>Printing, Color &amp; Luxury Finishing</h2>
            <p>Technical advice on Pantone color fidelity, CMYK offset printing, hot foil stamping and embossing.</p>
          </div>
          <div className="mrb-res-cards">
            {printingAndFinishingGuides.map((g) => (
              <article className="mrb-res-card" key={g.href}>
                <small>{g.tag}</small>
                <h3>{g.title}</h3>
                <p>{g.desc}</p>
                <a href={g.href}>Read Guide →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Sampling & Quality Control */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head">
            <span className="eyebrow dark">CATEGORY</span>
            <h2>Sampling &amp; Quality Control</h2>
            <p>Step-by-step checklists for reviewing prototypes, pre-production samples and final pre-shipment QC.</p>
          </div>
          <div className="mrb-res-cards">
            {samplingAndQcGuides.map((g) => (
              <article className="mrb-res-card" key={g.href}>
                <small>{g.tag}</small>
                <h3>{g.title}</h3>
                <p>{g.desc}</p>
                <a href={g.href}>Read Guide →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Shipping & Trade Terms */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head">
            <span className="eyebrow dark">CATEGORY</span>
            <h2>Shipping &amp; Trade Terms</h2>
            <p>Practical guidance on international logistics, volume optimization, EXW, FOB and DDP trade terms.</p>
          </div>
          <div className="mrb-res-cards">
            {shippingAndTradeGuides.map((g) => (
              <article className="mrb-res-card" key={g.href}>
                <small>{g.tag}</small>
                <h3>{g.title}</h3>
                <p>{g.desc}</p>
                <a href={g.href}>Read Guide →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Industry Packaging Guides */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">APPLICATIONS</span>
            <h2>Industry Packaging Solutions</h2>
            <p>Explore dedicated packaging requirements, box recommendations and custom dielines by sector.</p>
          </div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {industryPackagingGuides.map((ind) => (
              <article className="mrb-feature" key={ind.title}>
                <h3>{ind.title}</h3>
                <p>{ind.desc}</p>
                <p style={{ marginTop: 12 }}>
                  <a href={ind.href} style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                    View Industry Packaging →
                  </a>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Packaging Sourcing Journey */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">PROCESS</span>
            <h2>The Packaging Sourcing Journey</h2>
            <p>Follow the 6 key milestones from initial RFQ preparation to final warehouse delivery.</p>
          </div>
          <div className="mrb-process">
            {sourcingJourneySteps.map((s) => (
              <div className="mrb-step" key={s.title}>
                <span>{s.num}</span>
                <b>{s.title}</b>
                <small>{s.desc}</small>
                {s.href && (
                  <div style={{ marginTop: 8 }}>
                    <a href={s.href} style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 12 }}>
                      {s.linkText}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Explore Packaging Solutions */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">PRODUCTS</span>
            <h2>Explore Packaging Solutions</h2>
            <p>Browse our core custom rigid box structures, paper tubes and luxury shopping bags.</p>
          </div>
          <div className="mrb-apps">
            {packagingSolutions.map((p) => (
              <a className="mrb-app mrb-app-link" href={p.href} key={p.title}>
                <img src={p.img} alt={p.title} loading="lazy" />
                <div>
                  <b>{p.title}</b>
                  <span>{p.desc}</span>
                  <em className="mrb-app-cta">Explore Product →</em>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Buyer Verification & Trust */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">VERIFICATION</span>
            <h2>Factory Capabilities &amp; Verification</h2>
            <p>Direct access to our factory infrastructure, real project portfolio, dieline systems and custom quoting.</p>
          </div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {trustCards.map((card) => (
              <article className="mrb-feature" key={card.title}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "var(--color-gold, #c79a51)", display: "block", marginBottom: 6 }}>
                  {card.tag}
                </span>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <p style={{ marginTop: 12 }}>
                  <a href={card.href} style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                    {card.linkText}
                  </a>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Final CTA */}
      <section className="mrb-section dark" style={{ textAlign: "center", padding: "64px 0" }}>
        <div className="container">
          <span className="mrb-eyebrow">START A PROJECT</span>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(26px, 3.2vw, 36px)", fontWeight: 500, margin: "12px 0 16px" }}>
            Ready to Start Your Packaging Project?
          </h2>
          <p style={{ color: "#c5c5c5", maxWidth: 680, margin: "0 auto 28px", lineHeight: 1.7, fontSize: 16 }}>
            Send us your product size, quantity, reference images, material preferences and destination.
            We can help review suitable structures, materials and customization options for your project.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/rfq/" className="btn gold">
              Request a Quote
            </a>
            <a
              href={waLink(WA_MESSAGES.resources)}
              target="_blank"
              rel="noopener"
              className="btn-wa"
            >
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
            <a href="/custom-packaging/" className="btn ghost">
              Explore Custom Packaging
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
