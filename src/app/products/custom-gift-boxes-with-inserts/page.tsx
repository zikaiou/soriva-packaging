/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import ProductCrossLinks from "../../components/ProductCrossLinks";
import ProductBuyerGuides from "../../components/ProductBuyerGuides";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../product-page.css";

const PAGE_URL = "https://www.sorivapackaging.com/products/custom-gift-boxes-with-inserts/";

export const metadata: Metadata = {
  title: { absolute: "Custom Gift Boxes with Inserts Manufacturer | SORIVA Packaging" },
  description:
    "Custom rigid gift boxes with EVA, paperboard, molded pulp, foam and fabric-lined inserts for perfume, cosmetics, jewelry, candles, sample kits and premium gift sets.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Custom Gift Boxes with Inserts | SORIVA Packaging",
    description:
      "Custom rigid gift boxes with project-specific inserts, structure, printing and finishing for premium product presentation.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
    images: [
      {
        url: "https://www.sorivapackaging.com/img/insert-clean.webp",
        width: 1200,
        height: 900,
        alt: "Custom gift box with insert",
      },
    ],
  },
};

const insertOptions = [
  {
    title: "EVA Insert",
    desc: "Precision-cut EVA can be reviewed for bottles, devices, jewelry, accessories and sample components that need defined cavities.",
  },
  {
    title: "Paperboard Insert",
    desc: "Folded or die-cut paperboard inserts can create a clean all-paper presentation for lightweight products and gift sets.",
  },
  {
    title: "Molded Pulp Insert",
    desc: "Molded pulp can be considered where fiber-based presentation and product support are priorities.",
  },
  {
    title: "Foam / Sponge Insert",
    desc: "Foam or sponge can be selected according to product weight, cavity shape and desired presentation.",
  },
  {
    title: "Fabric-Lined Insert",
    desc: "Velvet, satin or fabric-covered insert surfaces can be reviewed for jewelry, fragrance and premium gifting.",
  },
  {
    title: "Multi-Compartment Insert",
    desc: "Multiple cavities and compartments can be developed for discovery sets, PR kits, cosmetic sets and curated gifts.",
  },
];

const applications = [
  {
    img: "/img/project-perfume.webp",
    title: "Perfume & Fragrance",
    desc: "Bottle cavities, discovery sets and premium fragrance presentation.",
    href: "/industries/perfume-packaging/",
  },
  {
    img: "/img/project-skincare.webp",
    title: "Cosmetics & Skincare",
    desc: "Serums, creams, jars and multi-product beauty sets.",
    href: "/industries/cosmetic-packaging/",
  },
  {
    img: "/img/project-jewelry.webp",
    title: "Jewelry & Watches",
    desc: "Rings, necklaces, bracelets, watches and premium accessories.",
    href: "/industries/jewelry-packaging/",
  },
  {
    img: "/img/candles.webp",
    title: "Candles & Home Fragrance",
    desc: "Candles, diffusers and multi-item home fragrance gift sets.",
    href: "/industries/candle-packaging/",
  },
  {
    img: "/img/project-gift-clean.webp",
    title: "Corporate & PR Gifts",
    desc: "Presentation kits, launch sets, VIP gifts and curated brand campaigns.",
    href: "/industries/corporate-gift-packaging/",
  },
  {
    img: "/img/tube-packaging-application-grid.jpg",
    title: "Vials & Sample Kits",
    desc: "Sample bottles, fragrance vials, trial sets and compact presentation kits.",
    href: "/products/tube-packaging/",
  },
];

const boxStructures = [
  {
    title: "Magnetic Rigid Box + Insert",
    desc: "Hinged magnetic presentation box combined with a project-specific insert.",
    href: "/products/magnetic-rigid-boxes/",
  },
  {
    title: "Drawer Box + Insert",
    desc: "Sliding tray structure paired with a fitted insert for directional reveal.",
    href: "/products/drawer-boxes/",
  },
  {
    title: "Two-Piece Box + Insert",
    desc: "Classic separate lid-and-base rigid structure with a fitted insert.",
    href: "/products/two-piece-rigid-boxes/",
  },
  {
    title: "Foldable Magnetic Box + Insert",
    desc: "Flat-pack rigid structure with insert options selected around the project.",
    href: "/products/foldable-magnetic-rigid-boxes/",
  },
];

const references = [
  {
    img: "/img/insert-clean.webp",
    type: "INSERT REFERENCE",
    title: "Custom Product Insert",
    alt: "Custom product insert for rigid gift box",
  },
  {
    img: "/img/two-piece-rigid-box-lining-options.png",
    type: "INSERT & LINING REFERENCE",
    title: "Insert & Lining Options",
    alt: "Insert and lining material options for rigid gift boxes",
  },
  {
    img: "/img/foldable-magnetic-box-insert-lining-options.png",
    type: "CUSTOMIZATION REFERENCE",
    title: "Insert Configuration Reference",
    alt: "Custom insert and lining options for foldable rigid packaging",
  },
  {
    img: "/img/drawer-box-materials-finishes-reference.png",
    type: "MATERIALS & FINISHES",
    title: "Materials & Finishing Reference",
    alt: "Materials and finishing options for custom gift boxes",
  },
  {
    img: "/img/two-piece-rigid-box-perfume-application.png",
    type: "APPLICATION EXAMPLE",
    title: "Perfume Presentation",
    alt: "Perfume gift box with custom insert application reference",
  },
  {
    img: "/img/project-skincare.webp",
    type: "APPLICATION EXAMPLE",
    title: "Skincare Gift Set",
    alt: "Skincare gift box packaging application reference",
  },
];

const processSteps = [
  { title: "Product Measurement", sub: "Dimensions & layout" },
  { title: "Structure Selection", sub: "Box format" },
  { title: "Insert Engineering", sub: "Cavities & clearance" },
  { title: "Prototype Review", sub: "Fit & presentation" },
  { title: "Artwork & Finishing", sub: "Print / foil / texture" },
  { title: "Production", sub: "Box & insert" },
  { title: "Assembly", sub: "Insert integration" },
  { title: "Quality Inspection", sub: "Fit & appearance" },
];

const faqs = [
  {
    q: "What is a custom gift box with an insert?",
    a: "It is a presentation box combined with a fitted internal component designed to position, separate or present the product. The insert can be made from EVA, paperboard, molded pulp, foam, fabric-covered materials or other suitable options.",
  },
  {
    q: "What insert material should I choose?",
    a: "The best insert depends on product dimensions, weight, fragility, presentation goals, sustainability priorities and target budget. Sampling is recommended before bulk production.",
  },
  {
    q: "Can you make a gift box with an EVA insert?",
    a: "Yes. EVA cavities can be developed around approved product dimensions and layout requirements for selected projects.",
  },
  {
    q: "Can I use a paperboard insert instead of foam?",
    a: "Yes. Paperboard inserts can be a good option for lightweight products, paper-based presentation systems and projects where a folded or die-cut insert is suitable.",
  },
  {
    q: "Can the insert hold multiple products?",
    a: "Yes. Multi-compartment layouts can be developed for cosmetic sets, fragrance discovery sets, PR kits, corporate gifts and other curated product groups.",
  },
  {
    q: "Can the insert be covered with velvet or satin?",
    a: "Fabric-lined insert surfaces can be reviewed for jewelry, fragrance and other premium presentation projects.",
  },
  {
    q: "Which box structures can use custom inserts?",
    a: "Magnetic rigid boxes, drawer boxes, two-piece rigid boxes and selected foldable rigid boxes can all be developed with project-specific inserts.",
  },
  {
    q: "What information is needed for a quote?",
    a: "Please provide product dimensions, quantity, preferred box structure, insert preference, artwork or logo files, finishing requirements and shipping destination.",
  },
  {
    q: "Can I order a prototype before bulk production?",
    a: "Prototype or sample support is available for selected projects. Timing depends on structure, insert material, artwork and finishing requirements.",
  },
  {
    q: "What is the MOQ for custom gift boxes with inserts?",
    a: "Selected custom projects can start from 100 pcs, depending on structure, insert material, size and finishing requirements.",
  },
  {
    q: "How is insert fit confirmed?",
    a: "Fit should be checked against approved product dimensions and, where appropriate, a physical prototype before mass production.",
  },
  {
    q: "What affects the cost of a box with an insert?",
    a: "Key cost drivers include box structure, dimensions, board and paper selection, insert material, number of cavities, printing, finishing, quantity and freight.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Custom Gift Boxes with Inserts",
      description:
        "Custom rigid gift boxes with EVA, paperboard, molded pulp, foam and fabric-lined inserts for premium product presentation.",
      image: "https://www.sorivapackaging.com/img/insert-clean.webp",
      brand: { "@type": "Brand", name: "SORIVA Packaging" },
      category: "Custom Luxury Packaging",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sorivapackaging.com/" },
        { "@type": "ListItem", position: 2, name: "Products", item: "https://www.sorivapackaging.com/products/" },
        { "@type": "ListItem", position: 3, name: "Custom Gift Boxes with Inserts", item: PAGE_URL },
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

export default function CustomGiftBoxesWithInsertsPage() {
  return (
    <main className="mrb-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="mrb-hero">
        <div className="container">
          <p className="mrb-breadcrumb">
            <a href="/">Home</a> / <a href="/products/">Products</a> / Custom Gift Boxes with Inserts
          </p>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">CUSTOM INSERT PACKAGING</span>
              <h1>Custom Gift Boxes with Inserts</h1>
              <p className="mrb-subtitle">
                Rigid Gift Packaging Built Around Your Product
              </p>
              <p className="mrb-lead">
                Custom gift boxes with fitted inserts help organize, present and position products inside premium rigid packaging. Box structure, insert material, cavity layout and finishing are developed around the product and project requirements.
              </p>
              <div className="mrb-tags">
                <span>MOQ From 100 pcs</span>
                <span>EVA / Paperboard / Pulp / Foam</span>
                <span>Single or Multi-Product Layouts</span>
                <span>Prototype Support</span>
                <span>Worldwide Shipping</span>
              </div>
              <div className="mrb-hero-actions">
                <a href="/rfq/" className="btn gold">Request Packaging Quote</a>
                <a href={waLink(WA_MESSAGES.products)} target="_blank" rel="noopener" className="btn-wa">
                  <WhatsAppIcon /> Chat on WhatsApp
                </a>
                <a href="#insert-options" className="btn ghost">Compare Insert Options</a>
              </div>
            </div>
            <div className="mrb-hero-media">
              <img src="/img/insert-clean.webp" alt="Custom rigid gift box with insert" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">BUYER DECISION</span>
            <h2>Start With the Product, Then Engineer the Insert</h2>
            <p>
              The box and insert should be designed together. Product dimensions, weight, opening direction, visual presentation and shipping requirements all affect the final insert layout.
            </p>
          </div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            <article className="mrb-feature"><strong>01</strong><h3>Measure the Product</h3><p>Provide accurate dimensions for every item that needs its own cavity or compartment.</p></article>
            <article className="mrb-feature"><strong>02</strong><h3>Choose the Box Structure</h3><p>Select magnetic, drawer, two-piece or foldable rigid packaging according to the desired opening experience.</p></article>
            <article className="mrb-feature"><strong>03</strong><h3>Select Insert Material</h3><p>Compare EVA, paperboard, molded pulp, foam or fabric-lined options according to presentation and project needs.</p></article>
            <article className="mrb-feature"><strong>04</strong><h3>Prototype the Fit</h3><p>Review cavity size, clearance, product removal and appearance before bulk production where appropriate.</p></article>
          </div>
        </div>
      </section>

      <section className="mrb-section soft" id="insert-options">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">INSERT OPTIONS</span>
            <h2>Choose the Insert Around Your Product</h2>
            <p>
              Insert materials are selected according to product dimensions, weight, presentation, sustainability priorities and project requirements.
            </p>
          </div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {insertOptions.map((item, i) => (
              <article className="mrb-feature" key={item.title}>
                <strong>{String(i + 1).padStart(2, "0")}</strong>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">BOX STRUCTURES</span>
            <h2>Compatible Rigid Box Formats</h2>
            <p>
              The same insert strategy can be adapted to different rigid packaging structures depending on presentation and logistics requirements.
            </p>
          </div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {boxStructures.map((item) => (
              <article className="mrb-feature" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <p><a href={item.href}>Explore Structure →</a></p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">REFERENCE LIBRARY</span>
            <h2>Insert, Material & Application References</h2>
            <p>
              Images below are structure and application references. They are not presented as documentary evidence of completed customer projects unless separately stated.
            </p>
          </div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {references.map((ref) => (
              <figure className="mrb-feature" key={ref.img} style={{ margin: 0 }}>
                <img src={ref.img} alt={ref.alt} loading="lazy" style={{ width: "100%", borderRadius: 8 }} />
                <span style={{ display: "block", marginTop: 14, color: "var(--color-gold, #c79a51)", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>{ref.type}</span>
                <h3>{ref.title}</h3>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">APPLICATIONS</span>
            <h2>Common Uses for Gift Boxes with Inserts</h2>
          </div>
          <div className="mrb-apps">
            {applications.map((item) => (
              <article className="mrb-app" key={item.title}>
                <img src={item.img} alt={item.title} loading="lazy" />
                <div>
                  <b><a href={item.href} style={{ color: "inherit", textDecoration: "none" }}>{item.title} →</a></b>
                  <span>{item.desc}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">CUSTOMIZATION</span>
            <h2>Structure, Materials, Printing & Finishing</h2>
            <p>
              Box construction and insert layout can be coordinated with brand color, artwork and finishing requirements.
            </p>
          </div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))" }}>
            <article className="mrb-feature"><strong>01</strong><h3>Paper & Board</h3><p>Rigid greyboard core with coated, art, specialty, textured or other suitable wrapping papers.</p><p><a href="/resources/luxury-packaging-paper-types-art-paper-vs-specialty-paper-vs-kraft/">Paper Types Guide →</a></p></article>
            <article className="mrb-feature"><strong>02</strong><h3>Printing & Color</h3><p>CMYK process printing and Pantone (PMS) color matching based on approved artwork and production specifications.</p><p><a href="/resources/pantone-vs-cmyk-custom-packaging/">Pantone vs CMYK →</a></p></article>
            <article className="mrb-feature"><strong>03</strong><h3>Finishing</h3><p>Foil stamping, embossing, debossing, spot UV, matte or gloss lamination and project-dependent surface finishes.</p><p><a href="/resources/foil-stamping-vs-embossing-vs-spot-uv/">Finishing Guide →</a></p></article>
            <article className="mrb-feature"><strong>04</strong><h3>Insert Engineering</h3><p>Cavity dimensions, finger notches, removal clearance and compartment layout are reviewed around the product.</p><p><a href="/resources/how-to-measure-product-for-custom-box-packaging/">Measurement Guide →</a></p></article>
          </div>
        </div>
      </section>

      <section className="mrb-section dark">
        <div className="container">
          <div className="mrb-head">
            <span className="mrb-eyebrow">WORKFLOW</span>
            <h2>8-Step Gift Box & Insert Development</h2>
            <p>Exact steps depend on structure, insert material, artwork and project requirements.</p>
          </div>
          <div className="mrb-process-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}>
            {processSteps.map((step, i) => (
              <div className="mrb-step" key={step.title}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <b>{step.title}</b>
                <small>{step.sub}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">FAQ</span>
            <h2>Custom Gift Box Insert Questions</h2>
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

      <ProductBuyerGuides
        title="Gift Box Insert Buyer Guides"
        subtitle="Plan dimensions, insert material, samples and cost before requesting a custom packaging quote."
        guides={[
          {
            tag: "Insert Comparison",
            title: "EVA vs Paperboard vs Molded Pulp Packaging Inserts",
            desc: "Compare presentation, structure and sourcing considerations across common insert materials.",
            href: "/resources/packaging-inserts-eva-vs-paperboard-vs-molded-pulp/",
          },
          {
            tag: "Measurement",
            title: "How to Measure a Product for Custom Box Packaging",
            desc: "Prepare accurate dimensions before developing a fitted cavity or compartment layout.",
            href: "/resources/how-to-measure-product-for-custom-box-packaging/",
          },
          {
            tag: "Sampling",
            title: "Custom Gift Box Sample Checklist",
            desc: "Review fit, insert clearance, artwork and finishing before mass production.",
            href: "/resources/custom-gift-box-sample-checklist/",
          },
          {
            tag: "Cost",
            title: "Custom Packaging Cost Breakdown",
            desc: "Understand how structure, inserts, finishing, quantity and freight influence project cost.",
            href: "/resources/custom-packaging-cost-breakdown/",
          },
        ]}
      />

      <section className="mrb-quote" id="quote">
        <div className="container mrb-quote-grid">
          <div>
            <span className="mrb-eyebrow">START A PROJECT</span>
            <h2>Request a Gift Box with Insert Quote</h2>
            <p style={{ color: "#c5c5c5", lineHeight: 1.7, margin: "12px 0 16px" }}>
              Send product dimensions, quantity, preferred box structure, insert requirements, artwork and destination. We can review the structure and recommend suitable insert directions for quotation.
            </p>
            <div className="mrb-contact">
              <div className="mrb-contact-note">
                <b>WhatsApp</b>
                <a href={waLink(WA_MESSAGES.products)} target="_blank" rel="noopener">+86 159 1388 1634</a>
              </div>
              <div className="mrb-contact-note">
                <b>Email</b>
                <a href="mailto:AMY@XINGYUE.STORE">AMY@XINGYUE.STORE</a>
              </div>
            </div>
            <a className="mrb-back" href="/custom-packaging/">Explore Custom Packaging System →</a>
          </div>
          <QuoteForm />
        </div>
      </section>

      <ProductCrossLinks industryHref="/industries/cosmetic-packaging/" industryLabel="Cosmetics Packaging" />
    </main>
  );
}
