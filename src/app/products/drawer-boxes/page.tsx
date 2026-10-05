/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import ProductCrossLinks from "../../components/ProductCrossLinks";
import ProductBuyerGuides from "../../components/ProductBuyerGuides";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../product-page.css";

const PAGE_URL = "https://www.sorivapackaging.com/products/drawer-boxes/";

export const metadata: Metadata = {
  title: {
    absolute: "Custom Drawer Boxes Manufacturer & Supplier | SORIVA Packaging",
  },
  description:
    "Custom rigid drawer boxes with sliding trays, ribbon pulls, tailored inserts and premium finishing for jewelry, perfume, cosmetics and gift packaging.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Custom Drawer Boxes Manufacturer & Supplier | SORIVA Packaging",
    description:
      "Custom rigid drawer boxes with tailored sizes, inserts, paper materials, printing and premium finishing. OEM/ODM support, sampling and flexible customization for global brands.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
    images: [
      {
        url: "https://www.sorivapackaging.com/img/drawer-box.webp",
        width: 1200,
        height: 900,
        alt: "Custom rigid drawer boxes for premium packaging",
      },
    ],
  },
};

const customizationPillars = [
  {
    num: "01",
    title: "Custom Sizes & Proportions",
    desc: "Length × Width × Height dimensions are developed around product dimensions, tray clearance and insert layout.",
    href: "/resources/how-to-measure-product-for-custom-box-packaging/",
    linkText: "Measurement Guide →",
  },
  {
    num: "02",
    title: "Custom Board Thickness",
    desc: "Greyboard thickness is selected according to box dimensions, product weight, sleeve depth and structural requirements.",
    href: "/resources/rigid-greyboard-thickness-guide-custom-boxes/",
    linkText: "Board Thickness Guide →",
  },
  {
    num: "03",
    title: "Custom Paper Materials",
    desc: "Specialty paper, printed paper, art paper, kraft paper where appropriate, soft-touch sheets, pearlized stock and tactile textured wraps.",
    href: "/resources/luxury-packaging-paper-types-art-paper-vs-specialty-paper-vs-kraft/",
    linkText: "Paper Types Guide →",
  },
  {
    num: "04",
    title: "Custom Product Inserts",
    desc: "Paperboard, EVA, EPE foam, sponge foam, molded pulp where suitable, satin or fabric presentation and custom divider compartments.",
    href: "/resources/packaging-inserts-eva-vs-paperboard-vs-molded-pulp/",
    linkText: "Insert Comparison Guide →",
  },
  {
    num: "05",
    title: "CMYK & Pantone Printing",
    desc: "High-definition offset printing for full-color artwork and Pantone (PMS) color matching based on approved artwork and production specifications.",
    href: "/resources/pantone-vs-cmyk-custom-packaging/",
    linkText: "Pantone vs CMYK Guide →",
  },
  {
    num: "06",
    title: "Luxury Surface Finishing",
    desc: "Metallic hot foil stamping, precision multi-level embossing, debossing, gloss spot UV coating and matte or gloss lamination.",
    href: "/resources/foil-stamping-vs-embossing-vs-spot-uv/",
    linkText: "Finishing Comparison →",
  },
  {
    num: "07",
    title: "Custom Pull Tabs & Ribbons",
    desc: "Ribbon pulls, satin loops, half-moon thumb cuts, metal ring pulls and woven tags can be considered according to the box size and structure.",
  },
];

const structureDetails = [
  {
    title: "Outer Rigid Sleeve",
    desc: "An outer sleeve formed with rigid greyboard and wrapped paper; sleeve tolerance is reviewed around the inner tray and project requirements.",
  },
  {
    title: "Inner Sliding Tray",
    desc: "An inner sliding tray designed around the selected insert, product dimensions and opening experience.",
  },
  {
    title: "Pull Mechanism",
    desc: "Satin ribbon loops, grosgrain tabs, embedded fabric pulls or notch cuts can be selected for the intended opening experience.",
  },
  {
    title: "Custom Insert Nesting",
    desc: "Tailored cavity layouts can hold jewelry, cosmetics, fragrance bottles or accessories according to product and presentation requirements.",
  },
  {
    title: "Opening Options",
    desc: "Ribbon pull, finger-notch and other pull-tab solutions can be considered according to the tray size and opening experience.",
  },
  {
    title: "Format Options",
    desc: "Matchbox-style, long-format and premium sleeve-and-tray proportions can be developed for the intended product presentation.",
  },
];

const sizeGuide = [
  {
    category: "Small (Jewelry / Rings / Watches)",
    dimensions: "Reference proportions only",
    idealFor: "Rings, earrings, pendants, luxury watches, cufflinks and delicate jewelry sets.",
  },
  {
    category: "Medium (Cosmetics / Perfume / Gifts)",
    dimensions: "Reference proportions only",
    idealFor: "Skincare serums, luxury perfume bottles, compact palettes, scented candles and gift cards.",
  },
  {
    category: "Large (Apparel / Presentation Sets)",
    dimensions: "Reference proportions only",
    idealFor: "Silk scarves, designer accessories, eyewear cases, multi-product corporate gift sets and VIP launch kits.",
  },
  {
    category: "Custom Dimensions",
    dimensions: "Fully Tailored Proportions",
    idealFor: "Bespoke dimensions engineered around your specific product size, accessory layout and shipping carton requirements.",
  },
];

const greyboardGuide = [
  {
    thickness: "Reference size only",
    rigidity: "Selected by project requirements",
    bestFor: "Small jewelry boxes, lightweight beauty compacts and small accessory drawer boxes.",
  },
  {
    thickness: "Reference size only",
    rigidity: "Selected by project requirements",
    bestFor: "Cosmetics gift boxes, perfume drawer packaging, candle gift sets and general retail presentation.",
  },
  {
    thickness: "Reference size only",
    rigidity: "Selected by project requirements",
    bestFor: "Large presentation hampers, heavier glass bottles, multi-tier sliding drawers and premium collectors' editions.",
  },
];

const materials = [
  {
    name: "Coated Art Paper",
    features: "Smooth white surface ideal for crisp photographic printing, vibrant CMYK graphics, soft-touch coating and hot foil.",
  },
  {
    name: "Specialty Textured Paper",
    features: "Distinctive linen, felt, woodgrain or geometric embossed textures providing high tactile luxury.",
    href: "/resources/luxury-packaging-paper-types-art-paper-vs-specialty-paper-vs-kraft/",
    linkText: "Paper Types Guide →",
  },
  {
    name: "Dyed Black Cardstock",
    features: "Solid black core stock selected for the artwork, edge appearance and finishing requirements of the project.",
  },
  {
    name: "Natural Kraft Paper",
    features: "Organic brown or bleached white kraft paper for selected projects where a natural visual direction is required.",
  },
  {
    name: "Metallic & Pearlized Card",
    features: "Shimmering reflective coatings that interact elegantly with ambient light across luxury retail displays.",
  },
  {
    name: "Fabric & Velvet Wraps",
    features: "Linen, silk or velvet laminated wraps for heirloom jewelry packaging and high-end presentation cases.",
  },
];

const insertOptions = [
  {
    name: "High-Density EVA Foam",
    desc: "EVA foam can be selected for shaped cavities and presentation requirements; color and surface treatment depend on the project.",
    href: "/resources/packaging-inserts-eva-vs-paperboard-vs-molded-pulp/",
    linkText: "EVA vs Paperboard Guide →",
  },
  {
    name: "Velvet-Covered Trays",
    desc: "Velvet-covered trays can be considered for delicate products where a soft presentation surface is required.",
  },
  {
    name: "Folded Paperboard Inserts",
    desc: "Recyclable, mono-material custom folded card inserts with die-cut tabs holding cosmetics or gift accessories firmly in place.",
  },
  {
    name: "Custom Molded Pulp Trays",
    desc: "Molded pulp trays can be considered where the product, layout and material direction suit the project.",
    href: "/resources/molded-pulp-vs-eva-sustainable-packaging-inserts/",
    linkText: "Molded Pulp vs EVA Guide →",
  },
  {
    name: "Rigid Cardboard Dividers",
    desc: "Cross-hatched or slotted grid partitions for modular multi-product advent calendars and gift collections.",
  },
];

const finishingOptions = [
  {
    title: "Hot Foil Stamping",
    desc: "Metallic gold, silver, rose gold, copper or holographic foils applied with heated dies for crisp logo highlights.",
  },
  {
    title: "Embossing & Debossing",
    desc: "Raised or pressed relief can add textural branding on the outer sleeve or tray rim, subject to artwork and material selection.",
  },
  {
    title: "Gloss Spot UV Coating",
    desc: "Selective gloss spot UV can create contrast over a suitable matte or printed surface according to the artwork.",
  },
  {
    title: "Soft-Touch Matte Lamination",
    desc: "Soft-touch matte lamination selected according to the artwork, paper and handling requirements of the project.",
  },
  {
    title: "Matte Surface Lamination",
    desc: "Matte lamination selected according to the artwork, paper and handling requirements of the project.",
  },
  {
    title: "Custom Textured Embossing",
    desc: "All-over background texture patterns pressed directly onto art paper surfaces for unique tactile character.",
  },
];

const applications = [
  {
    img: "/img/project-jewelry.webp",
    title: "Jewelry & Fine Watches",
    desc: "Sliding presentation boxes for rings, necklaces, bracelets and luxury timepieces.",
    href: "/industries/jewelry-packaging/",
  },
  {
    img: "/img/project-perfume.webp",
    title: "Perfume & Fragrance",
    desc: "Sophisticated drawer packaging for fragrance bottles, travel atomizers and discovery sets.",
    href: "/industries/perfume-packaging/",
  },
  {
    img: "/img/project-skincare.webp",
    title: "Cosmetics & Skincare",
    desc: "Sleek sliding gift boxes for beauty ampoules, serums, creams and cosmetic collections.",
    href: "/industries/cosmetic-packaging/",
  },
  {
    img: "/img/fashion.webp",
    title: "Fashion Accessories",
    desc: "Rigid drawer boxes for leather wallets, silk scarves, belts and luxury eyewear.",
    href: "/industries/fashion-packaging/",
  },
  {
    img: "/img/project-gift-clean.webp",
    title: "Corporate Gifts & VIP Kits",
    desc: "Executive gift packaging, membership welcome kits and brand milestone presentations.",
    href: "/industries/corporate-gift-packaging/",
  },
  {
    img: "/img/candles.webp",
    title: "Candle & Home Fragrance",
    desc: "Reinforced rigid sliding boxes for luxury jar candles, wick trimmers and diffuser sets.",
    href: "/industries/candle-packaging/",
  },
];

const conceptReferences = [
  {
    img: "/img/drawer-box-structure-reference.png",
    type: "STRUCTURE REFERENCE",
    title: "Custom Drawer Box Structure",
    alt: "Custom rigid drawer box with ribbon pull tab",
    caption: "Custom rigid drawer box with ribbon pull and sliding tray structure",
  },
  {
    img: "/img/drawer-box-minimal-structure-reference.png",
    type: "STRUCTURE REFERENCE",
    title: "Minimal Drawer Box Structure",
    alt: "Minimal rigid drawer gift box with sliding tray",
    caption: "Minimal two-piece rigid drawer box with sliding tray",
  },
  {
    img: "/img/drawer-box-jewelry-application.png",
    type: "APPLICATION EXAMPLE",
    title: "Jewelry & Watch Application",
    alt: "Custom drawer box for jewelry and watch packaging",
    caption: "Drawer-style rigid box for jewelry and watch presentation",
  },
  {
    img: "/img/drawer-box-ribbon-pull-reference.png",
    type: "RIBBON PULL REFERENCE",
    title: "Ribbon Pull Detail",
    alt: "Luxury rigid drawer box with ribbon pull",
    caption: "Long-format rigid drawer box with ribbon pull tab",
  },
  {
    img: "/img/drawer-box-application-grid.png",
    type: "APPLICATION EXAMPLE",
    title: "Applications & Packaging Ideas",
    alt: "Custom drawer box packaging application examples",
    caption: "Drawer box application references for jewelry, cosmetics, perfume, fashion and gifting",
  },
  {
    img: "/img/drawer-box-materials-finishes-reference.png",
    type: "MATERIALS & FINISHES REFERENCE",
    title: "Materials & Finishes",
    alt: "Materials and finishing options for custom drawer boxes",
    caption: "Paper materials and finishing options for custom drawer boxes",
  },
  {
    img: "/img/drawer-box-print-finishing-options.png",
    type: "MATERIALS & FINISHES REFERENCE",
    title: "Print & Surface Finishing",
    alt: "Printing and finishing options for rigid drawer boxes",
    caption: "Print and surface finishing references for rigid drawer packaging",
  },
  {
    img: "/img/drawer-box-production-workflow.png",
    type: "WORKFLOW ILLUSTRATION",
    title: "Production Workflow",
    alt: "Drawer box production workflow illustration",
    caption: "Illustrated workflow from design review to quality inspection for drawer boxes",
  },
];

const processSteps = [
  { num: "01", title: "Design / Structure Review", desc: "Review product dimensions, opening experience, sleeve-to-tray structure and artwork requirements." },
  { num: "02", title: "Sampling", desc: "Prototype or sample support can be used to review tray fit, insert layout, artwork and finishing." },
  { num: "03", title: "Material Selection", desc: "Select paper, board, insert and pull-tab options according to the project." },
  { num: "04", title: "Printing", desc: "Prepare CMYK artwork or Pantone color matching based on approved artwork and production specifications." },
  { num: "05", title: "Lamination / Finishing", desc: "Review matte or gloss lamination, foil, embossing, debossing and spot UV options." },
  { num: "06", title: "Die-Cutting", desc: "Cut sleeve, tray and insert components according to the reviewed structure." },
  { num: "07", title: "Box Assembly", desc: "Assemble the sleeve, tray, pull mechanism and selected insert layout." },
  { num: "08", title: "Quality Inspection", desc: "Review appearance, dimensions, structure, sliding fit and finishing before packing." },
];

const stats = [
  { value: "10,000㎡", label: "Factory Area" },
  { value: "400+", label: "Employees" },
  { value: "50M+", label: "Annual Capacity" },
  { value: "20 Years", label: "Production Experience" },
];

const faqs = [
  {
    q: "What is the difference between a drawer box and a two-piece rigid box?",
    a: "A drawer box uses a sliding inner tray and outer sleeve, while a two-piece rigid box typically uses a separate lid and base. The best structure depends on product shape, presentation and opening experience.",
  },
  {
    q: "Can drawer boxes be customized with a logo?",
    a: "Yes. Logo treatments can include printing, foil stamping, embossing, debossing or suitable finishing depending on paper and artwork.",
  },
  {
    q: "Can I add a ribbon pull?",
    a: "Yes. Ribbon pulls or other pull-tab solutions can be considered depending on the box size and structure.",
  },
  {
    q: "What information is needed for a quote?",
    a: "Product or box dimensions, quantity, preferred structure, materials, printing or finishing, insert requirements and destination are useful for quotation.",
  },
  {
    q: "What is a drawer box?",
    a: "A drawer box (also known as a slide box or matchbox style rigid box) consists of an outer rigid sleeve and an inner sliding tray. The structure can be customized in size, materials, inserts, pull ribbons and finishing according to the project.",
  },
  {
    q: "Are these drawer gift boxes for jewelry and gifts?",
    a: "Yes. These drawer gift boxes can be developed for jewelry, perfume, cosmetics and corporate gifting, with structure and inserts selected for the project.",
  },
  {
    q: "Can you make matchbox style boxes?",
    a: "Yes. Matchbox style boxes use an outer sleeve and sliding tray; proportions, materials and pull solutions are customized according to the product.",
  },
  {
    q: "Can you make drawer boxes with ribbon pull?",
    a: "Yes. Drawer boxes with ribbon pull can be developed with satin, grosgrain or other suitable pull-tab solutions.",
  },
  {
    q: "Can I order drawer gift boxes with logo?",
    a: "Yes. Drawer gift boxes with logo can use printing, foil stamping, embossing, debossing or suitable finishing based on the artwork.",
  },
  {
    q: "Are you a drawer box manufacturer and drawer box supplier?",
    a: "SORIVA supports buyers comparing a drawer box manufacturer and drawer box supplier for custom rigid sliding packaging projects.",
  },
  {
    q: "Do you offer wholesale drawer boxes?",
    a: "Wholesale drawer boxes are available for selected custom projects; quantity, materials, inserts and finishing are reviewed before quotation.",
  },
  {
    q: "Can drawer boxes be customized to my product size?",
    a: "Yes. The outer sleeve, inner tray and custom insert are developed around product dimensions, orientation and presentation requirements.",
  },
  {
    q: "What insert materials are available for drawer boxes?",
    a: "Options can include paperboard, EVA, EPE foam, sponge foam, molded pulp, satin or fabric presentation depending on product dimensions, weight, presentation and project requirements.",
  },
  {
    q: "Can I customize the pull tab, ribbon or handle?",
    a: "Yes. Satin ribbon loops, grosgrain tabs, embedded fabric pulls, half-moon thumb cuts and woven tags can be considered according to the box size and structure.",
  },
  {
    q: "Can you match specific Pantone (PMS) brand colors?",
    a: "Pantone (PMS) color matching is based on approved artwork and production specifications, alongside high-definition CMYK process printing.",
  },
  {
    q: "What luxury finishing options are available?",
    a: "Available finishes include hot foil stamping (gold, silver, rose gold, holographic), multi-level embossing, debossing, gloss spot UV coating, soft-touch matte lamination and matte or gloss lamination.",
  },
  {
    q: "Can I order a physical sample before mass production?",
    a: "Prototype or pre-production sample support is available for selected projects to review tray fit, insert layout, materials and printing before production.",
  },
  {
    q: "What is the MOQ for custom drawer boxes?",
    a: "Selected custom drawer box projects can start from 100 pcs. Quantity depends on box size, board selection, paper, insert complexity and finishing requirements.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Custom Rigid Drawer Boxes",
      image: "https://www.sorivapackaging.com/img/drawer-box.webp",
      description:
        "Custom rigid drawer boxes with tailored sizes, inserts, paper materials, printing and premium finishing. OEM/ODM support, sampling and flexible customization for global brands.",
      brand: { "@type": "Brand", name: "SORIVA Packaging" },
      url: PAGE_URL,
    },
    {
      "@type": "Service",
      name: "Custom Drawer Box Manufacturing",
      description:
        "Custom rigid drawer box manufacturing and supply for jewelry, cosmetics, perfume, accessories and corporate gift packaging projects.",
      url: PAGE_URL,
      serviceType: "Custom Rigid Packaging Manufacturing",
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
          name: "Drawer Boxes",
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

export default function DrawerBoxesPage() {
  return (
    <main className="mrb-page">
      {/* Hero */}
      <section className="mrb-hero">
        <div className="container">
          <nav className="mrb-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a> / <a href="/products/">Products</a> / Drawer Boxes
          </nav>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">CUSTOM RIGID PACKAGING</span>
              <h1>Custom Rigid Drawer Boxes for Premium Packaging</h1>
              <p className="mrb-lead">
                Create an unforgettable unboxing experience with custom drawer boxes featuring a
                smooth sliding mechanism, rigid greyboard construction, tailored product inserts
                and luxury finishing. Ideal for jewelry, cosmetics, fragrances and luxury gifts.
              </p>
              <div className="mrb-tags">
                <span>MOQ From 100 pcs</span>
                <span>Custom Size &amp; Inserts</span>
                <span>Satin / Grosgrain Ribbon Pulls</span>
                <span>Foil / Emboss / Spot UV</span>
                <span>Global Shipping</span>
              </div>
              <div className="mrb-hero-actions">
                <a href="/rfq/" className="btn gold">
                  Request Packaging Quote
                </a>
                <a
                  href={waLink(WA_MESSAGES.drawer)}
                  target="_blank"
                  rel="noopener"
                  className="btn-wa"
                >
                  <WhatsAppIcon /> Chat on WhatsApp
                </a>
                <a href="#structure" className="btn ghost">
                  Explore Structure
                </a>
              </div>
            </div>
            <div className="mrb-hero-media">
              <img
                src="/img/drawer-box.webp"
                alt="Custom rigid drawer box with sliding tray and gold foil branding"
                width="1200"
                height="900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 1. Drawer Box Structure */}
      <section className="mrb-section" id="structure">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">STRUCTURAL ENGINEERING</span>
            <h2>How Drawer Box Packaging Works</h2>
            <p>
              A drawer box uses an outer sleeve with a sliding inner tray to create a controlled reveal during opening. It is commonly selected for jewelry, perfume, cosmetics, accessories and gift packaging where presentation and insert layout are important.
            </p>
          </div>
          <div className="mrb-features">
            {structureDetails.map((item, idx) => (
              <article className="mrb-feature" key={item.title}>
                <strong>{String(idx + 1).padStart(2, "0")}</strong>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
          <div className="mrb-note" style={{ marginTop: 24 }}>
            <b>Buyer Decision Note:</b> Choose a drawer box when the sliding reveal, insert layout and pull mechanism are important to the product presentation. Final sleeve tolerance, tray fit and insert clearance should be confirmed during sampling.
          </div>
        </div>
      </section>

      {/* Reference images: generated structure/application/process guidance only */}
      <section className="mrb-section soft" id="references">
        <div className="container">
          <div className="mrb-head center"><span className="eyebrow dark">STRUCTURE, APPLICATION &amp; PROCESS REFERENCES</span><h2>Drawer Box Packaging Reference Guides</h2><p>These generated or optimized images are reference illustrations only. They are not real customer projects, factory photos, production samples or shipped orders.</p></div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {conceptReferences.map((ref) => <figure className="mrb-feature" key={ref.img} style={{ margin: 0 }}><img src={ref.img} alt={ref.alt} loading="lazy" style={{ width: "100%", borderRadius: 8 }} /><span style={{ display: "block", marginTop: 14, color: "var(--color-gold, #c79a51)", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>{ref.type}</span><h3>{ref.title}</h3><figcaption>{ref.caption}</figcaption></figure>)}
          </div>
        </div>
      </section>

      {/* Generated reference imagery: structure, application, materials and workflow only */}
      <section className="mrb-section soft" id="references">
        <div className="container">
          <div className="mrb-head center"><span className="eyebrow dark">REFERENCE IMAGE LIBRARY</span><h2>Drawer Box Structure, Application &amp; Workflow References</h2><p>All images in this section are generated or optimized reference illustrations only. They are not real customer cases, factory photos, production samples or shipped orders, and pictured equipment is not claimed as verified factory equipment.</p></div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {conceptReferences.map((ref) => <figure className="mrb-feature" key={ref.img} style={{ margin: 0 }}><img src={ref.img} alt={ref.alt} loading="lazy" style={{ width: "100%", borderRadius: 8 }} /><span style={{ display: "block", marginTop: 14, color: "var(--color-gold, #c79a51)", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>{ref.type}</span><h3>{ref.title}</h3><figcaption>{ref.caption}</figcaption></figure>)}
          </div>
        </div>
      </section>

      {/* 2. Customization Overview */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">CUSTOMIZATION OVERVIEW</span>
            <h2>Customize Every Detail of Your Drawer Boxes</h2>
            <p>
              From specialty paper and board selection to inserts, pull tabs and finishing, drawer box components are developed according to the product, brand artwork and project requirements.
            </p>
          </div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
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

      {/* 3. Size & Structure Guide */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">SIZE &amp; DIMENSIONS</span>
            <h2>Custom Sizes Built Around Your Product</h2>
            <p>
              Provide your product dimensions, weight and orientation. We calculate the required
              clearance, insert cavity depths and sleeve proportions.
            </p>
          </div>
          <div className="mrb-table-wrap">
            <table className="mrb-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Reference Proportions Only (L × W × H)</th>
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
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <a
              href="/resources/how-to-measure-product-for-custom-box-packaging/"
              style={{ color: "var(--color-gold, #c79a51)", fontWeight: 600 }}
            >
              Read our step-by-step Product Measurement Guide →
            </a>
          </div>
        </div>
      </section>

      {/* 4. Greyboard Thickness */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">CORE RIGIDITY</span>
            <h2>Rigid Board Options for Different Box Sizes</h2>
            <p>
              Greyboard thickness is matched to box dimensions, product weight and sleeve depth.
              Thicker board increases rigidity, while balanced thickness ensures optimal sliding feel.
            </p>
          </div>
          <div className="mrb-table-wrap">
            <table className="mrb-table">
              <thead>
                <tr>
                  <th>Greyboard Reference</th>
                  <th>Rigidity Classification</th>
                  <th>Recommended Applications</th>
                </tr>
              </thead>
              <tbody>
                {greyboardGuide.map((g) => (
                  <tr key={g.thickness}>
                    <td><strong style={{ color: "var(--color-gold, #c79a51)" }}>{g.thickness}</strong></td>
                    <td>{g.rigidity}</td>
                    <td>{g.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <p style={{ color: "#555", marginBottom: 10 }}>Reference sizes only — final dimensions are customized to the product.</p>
            <a
              href="/resources/rigid-greyboard-thickness-guide-custom-boxes/"
              style={{ color: "var(--color-gold, #c79a51)", fontWeight: 600 }}
            >
              Explore our comprehensive Greyboard Thickness Guide →
            </a>
          </div>
        </div>
      </section>

      {/* 5. Material Options */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">MATERIAL OPTIONS</span>
            <h2>Paper and Wrap Materials</h2>
            <p>
              Choose from smooth coated art paper, dyed cardstocks, organic kraft papers and tactile
              embossed specialty wraps.
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

      {/* 6. Insert Options */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">INSERT OPTIONS</span>
            <h2>Custom Inserts for Product Protection and Presentation</h2>
            <p>
              The inner insert secures products in position and prevents movement when the drawer is
              pulled open.
            </p>
          </div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
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

      {/* Mid-Page Call to Action */}
      <section className="mrb-section dark" style={{ textAlign: "center", padding: "48px 0" }}>
        <div className="container">
          <span className="mrb-eyebrow">CUSTOM PACKAGING SUPPORT</span>
          <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(26px, 3.2vw, 36px)", fontWeight: 500, margin: "12px 0 16px" }}>
            Ready to Develop Your Custom Drawer Boxes?
          </h2>
          <p style={{ color: "#c5c5c5", maxWidth: 680, margin: "0 auto 24px", lineHeight: 1.65 }}>
            Send us your product dimensions, target order quantity and reference images. We will
            provide structure advice, dieline templates and tier-based quotations.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/rfq/" className="btn gold">
              Request Packaging Quote
            </a>
            <a
              href={waLink(WA_MESSAGES.drawer)}
              target="_blank"
              rel="noopener"
              className="btn-wa"
            >
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 7. Printing & Color */}
      <section className="mrb-section">
        <div className="container mrb-spec-wrap">
          <div>
            <div className="mrb-head">
              <span className="eyebrow dark">COLOR &amp; PRINTING</span>
              <h2>CMYK Process &amp; Pantone Color Matching</h2>
            </div>
            <p style={{ lineHeight: 1.7, color: "#444", marginBottom: 16 }}>
              Whether you need rich full-color graphics or Pantone (PMS) color matching based on approved artwork and production specifications across the outer sleeve and inner tray:
            </p>
            <ul style={{ lineHeight: 1.8, color: "#444", paddingLeft: 20, marginBottom: 20 }}>
              <li>
                <strong>CMYK Offset Printing:</strong> High-resolution full-color printing for
                illustrations, photographic imagery and multi-color artwork.
              </li>
              <li>
                <strong>Pantone (PMS) Color Matching:</strong> Color matching is based on approved artwork and production specifications.
              </li>
              <li>
                <strong>Inner Tray Printing:</strong> Contrast color flooding or branded patterns
                revealed inside the drawer tray upon sliding.
              </li>
            </ul>
            <p>
              <a
                href="/resources/pantone-vs-cmyk-custom-packaging/"
                style={{ color: "var(--color-gold, #c79a51)", fontWeight: 600 }}
              >
                Read our Pantone vs CMYK Color Guide →
              </a>
            </p>
          </div>
          <div className="mrb-structure">
            <div className="mrb-head">
              <span className="eyebrow dark">PULL ACCESSORIES</span>
              <h2>Pull Tabs, Ribbons &amp; Opening Hardware</h2>
            </div>
            <p style={{ lineHeight: 1.7, color: "#444", marginBottom: 14 }}>
              The pull mechanism completes the interactive sliding experience:
            </p>
            <ul style={{ lineHeight: 1.8, color: "#444", paddingLeft: 20 }}>
              <li><strong>Satin &amp; Grosgrain Ribbons:</strong> Elegant silky pull loops anchored inside the tray.</li>
              <li><strong>Half-Moon Notch Cuts:</strong> Clean finger recesses on the sleeve edge for push-through sliding.</li>
              <li><strong>Metal Pull Hardware:</strong> Minimalist metal ring or knob attachments for luxury collections.</li>
              <li><strong>Custom Woven Tags:</strong> Branded woven textile pull labels for apparel and boutique gifts.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8. Finishing Options */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">LUXURY FINISHING</span>
            <h2>Premium Finishing for Drawer Boxes</h2>
            <p>
              Enhance visual contrast and tactile sophistication with hot stamping, embossing and
              selective gloss coatings.
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

      {/* 9. Application Industries */}
      <section className="mrb-section" id="details">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">APPLICATIONS</span>
            <h2>Drawer Boxes for Different Industries</h2>
            <p>
              Application examples include jewelry, watches, cosmetics, perfume, fashion accessories, candles and corporate gift packaging. The generated image references on this page illustrate possibilities and are not customer project claims.
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
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">ORDER PROCESS</span>
            <h2>From Structure Review to Mass Production</h2>
            <p>
              A project workflow can include structure review, sampling, material selection, printing, finishing, assembly and quality inspection. Exact steps depend on the selected structure and requirements.
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

      {/* 11. Why SORIVA (Factory capability) */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">FACTORY CAPABILITY</span>
            <h2>Custom Packaging Support for Global Buyers</h2>
            <p>
              Review the factory capability page for general production, quality-control and packing information. Any pictured equipment or process illustration should be treated as reference unless separately verified.
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
              Review Factory Production &amp; QC Information →
            </a>
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>Answers to common questions about drawer box structures, sizes, inserts, sampling and MOQ.</p>
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
        title="Drawer Box Buyer Guides & Resources"
        subtitle="Learn how to choose rigid box structures, measure product dimensions, select greyboard thickness and custom finishes."
        guides={[
          {
            tag: "Box Structures",
            title: "Rigid Box Structure Guide: Magnetic vs Drawer vs Two-Piece",
            desc: "Compare sliding drawer boxes with magnetic and lid-and-base structures for luxury presentation.",
            href: "/resources/rigid-box-structure-guide-magnetic-vs-drawer-vs-two-piece/",
          },
          {
            tag: "Product Measurement",
            title: "How to Measure a Product for Custom Box Packaging",
            desc: "Learn how to measure product dimensions and calculate sliding tray clearance and insert depth.",
            href: "/resources/how-to-measure-product-for-custom-box-packaging/",
          },
          {
            tag: "Materials & Structure",
            title: "Rigid Greyboard Thickness Guide for Custom Boxes",
             desc: "A buyer guide to selecting greyboard thickness according to box dimensions, product weight and structural requirements.",
            href: "/resources/rigid-greyboard-thickness-guide-custom-boxes/",
          },
          {
             tag: "Cost & Pricing",
             title: "Custom Packaging Cost Breakdown Guide",
              desc: "Learn which project factors contribute to custom drawer box cost, including quantity, materials, inserts and finishing.",
             href: "/resources/custom-packaging-cost-breakdown/",
           },
           {
             tag: "MOQ & Pricing",
             title: "How Custom Packaging MOQ Affects Unit Cost",
             desc: "Learn how order quantity affects custom drawer box planning and quotation.",
             href: "/resources/how-custom-packaging-moq-affects-unit-cost/",
          },
        ]}
      />

      {/* 13 & 14. Final Quote & WhatsApp CTA */}
      <section className="mrb-quote" id="quote">
        <div className="container mrb-quote-grid">
          <div>
            <span className="mrb-eyebrow">START A PROJECT</span>
            <h2>Start Your Custom Drawer Box Project</h2>
            <p style={{ color: "#c5c5c5", lineHeight: 1.7, margin: "12px 0 16px" }}>
              Send us your product dimensions, quantity, artwork, insert preference and destination.
              Our packaging engineering team will help review a suitable drawer box structure and
              customization plan.
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
                <a href={waLink(WA_MESSAGES.drawer)} target="_blank" rel="noopener">
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
          <div className="mrb-head center"><span className="eyebrow dark">RELATED INDUSTRIES &amp; GUIDES</span><h2>Plan Your Drawer Box Project</h2><p>Compare drawer box requirements across jewelry, cosmetics and perfume projects before preparing an RFQ.</p><div className="mrb-hero-actions" style={{ justifyContent: "center" }}><a className="btn ghost" href="/industries/jewelry-packaging/">Jewelry Packaging →</a><a className="btn ghost" href="/industries/cosmetic-packaging/">Cosmetics Packaging →</a><a className="btn ghost" href="/industries/perfume-packaging/">Perfume Packaging →</a><a className="btn ghost" href="/resources/how-to-measure-product-for-custom-box-packaging/">Measurement Guide →</a><a className="btn ghost" href="/resources/packaging-inserts-eva-vs-paperboard-vs-molded-pulp/">Insert Guide →</a><a className="btn ghost" href="/resources/pantone-vs-cmyk-custom-packaging/">Pantone Guide →</a><a className="btn ghost" href="/resources/foil-stamping-vs-embossing-vs-spot-uv/">Finishing Guide →</a><a className="btn gold" href="/rfq/">Request an RFQ →</a></div></div>
        </div>
      </section>
      <ProductCrossLinks industryHref="/industries/jewelry-packaging/" industryLabel="Jewelry Packaging" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  );
}
