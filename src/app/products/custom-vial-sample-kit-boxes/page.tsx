/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import ProductCrossLinks from "../../components/ProductCrossLinks";
import ProductBuyerGuides from "../../components/ProductBuyerGuides";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../product-page.css";

const PAGE_URL = "https://www.sorivapackaging.com/products/custom-vial-sample-kit-boxes/";

export const metadata: Metadata = {
  title: { absolute: "Custom Vial & Sample Kit Boxes Manufacturer | SORIVA Packaging" },
  description:
    "Custom vial and sample kit boxes with fitted inserts for fragrance samples, cosmetic ampoules, essential oils, discovery sets and premium product sampling kits.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Custom Vial & Sample Kit Boxes | SORIVA Packaging",
    description:
      "Custom rigid packaging for fragrance vials, sample bottles, ampoules and multi-piece discovery sets with project-specific inserts and finishing.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
    images: [{
      url: "https://www.sorivapackaging.com/img/project-perfume.webp",
      width: 1200,
      height: 900,
      alt: "Custom vial and sample kit packaging reference",
    }],
  },
};

const applications = [
  { title: "Fragrance Discovery Sets", desc: "Multi-vial layouts for perfume sampling and discovery collections." },
  { title: "Sample Bottles", desc: "Compact packaging for miniature bottles and trial-size product formats." },
  { title: "Cosmetic Ampoules", desc: "Structured presentation for ampoules, serums and small beauty samples." },
  { title: "Essential Oil Sets", desc: "Multi-cavity layouts for small bottles and curated oil collections." },
  { title: "PR & Launch Kits", desc: "Sample-led presentation kits for launches, seeding and media outreach." },
  { title: "Retail Trial Sets", desc: "Branded trial packaging for compact multi-product retail sets." },
];

const structures = [
  {
    title: "Two-Piece Rigid Box",
    desc: "Separate lid-and-base structure for a classic presentation with a fitted vial insert.",
    href: "/products/two-piece-rigid-boxes/",
  },
  {
    title: "Magnetic Rigid Box",
    desc: "Hinged magnetic structure for discovery sets and premium product sampling.",
    href: "/products/magnetic-rigid-boxes/",
  },
  {
    title: "Drawer Box",
    desc: "Sliding tray format for directional reveal and multi-vial layouts.",
    href: "/products/drawer-boxes/",
  },
  {
    title: "Tube Packaging",
    desc: "Cylindrical presentation for selected single-bottle, sample or fragrance packaging concepts.",
    href: "/products/tube-packaging/",
  },
];

const insertOptions = [
  { title: "EVA Insert", desc: "Precision-cut cavities can be developed around approved vial or bottle dimensions." },
  { title: "Foam / Sponge Insert", desc: "Foam density and cavity layout can be reviewed according to product size and presentation requirements." },
  { title: "Paperboard Insert", desc: "Folded or die-cut paperboard inserts can be considered for lightweight samples and paper-forward packaging systems." },
  { title: "Fabric-Lined Insert", desc: "Velvet, satin or fabric-covered surfaces can be reviewed for premium presentation." },
  { title: "Multi-Row Layout", desc: "Rows and columns can be developed around bottle count, spacing and overall box dimensions." },
  { title: "Accessory Compartment", desc: "Additional areas can be planned for cards, blotters, applicators or other project-specific components." },
];

const references = [
  {
    img: "/img/project-perfume.webp",
    type: "APPLICATION REFERENCE",
    title: "Fragrance Packaging Direction",
    alt: "Fragrance vial sample kit packaging application reference",
  },
  {
    img: "/img/insert-clean.webp",
    type: "INSERT REFERENCE",
    title: "Fitted Product Insert",
    alt: "Fitted insert for custom vial and sample kit box",
  },
  {
    img: "/img/two-piece-rigid-box-perfume-application.png",
    type: "STRUCTURE REFERENCE",
    title: "Rigid Perfume Presentation",
    alt: "Rigid perfume presentation box structure reference",
  },
  {
    img: "/img/foldable-magnetic-box-insert-lining-options.png",
    type: "INSERT & LINING REFERENCE",
    title: "Insert & Lining Options",
    alt: "Insert and lining options for sample kit packaging",
  },
  {
    img: "/img/perfume.webp",
    type: "INDUSTRY REFERENCE",
    title: "Perfume & Fragrance Packaging",
    alt: "Perfume and fragrance packaging reference",
  },
  {
    img: "/img/tube-packaging-inner-material-options.jpg",
    type: "MATERIAL REFERENCE",
    title: "Inner Material Options",
    alt: "Inner material options for sample packaging",
  },
];

const workflow = [
  { title: "Product Dimensions", sub: "Diameter / height" },
  { title: "Bottle Count", sub: "Quantity & arrangement" },
  { title: "Box Structure", sub: "Rigid format" },
  { title: "Insert Layout", sub: "Cavity & spacing" },
  { title: "Prototype Review", sub: "Fit & removal" },
  { title: "Artwork", sub: "Print & branding" },
  { title: "Production", sub: "Box & insert" },
  { title: "Quality Inspection", sub: "Fit & appearance" },
];

const faqs = [
  {
    q: "What is a custom vial box?",
    a: "A custom vial box is packaging developed around one or more small bottles or vials, often with a fitted insert to organize the product and support presentation.",
  },
  {
    q: "Can you make packaging for perfume sample vials?",
    a: "Yes. Fragrance sample and discovery-set packaging can be developed around approved vial dimensions, bottle count, layout and desired box structure.",
  },
  {
    q: "Can you produce a vial box with an EVA insert?",
    a: "Yes. EVA insert cavities can be developed according to approved vial or bottle dimensions for selected projects.",
  },
  {
    q: "How many vials can fit in one box?",
    a: "The count depends on vial diameter, height, spacing, box dimensions and insert layout. Multi-row and multi-column layouts can be reviewed during structure development.",
  },
  {
    q: "Can the box include different vial sizes?",
    a: "Yes. Mixed cavity sizes can be considered when accurate dimensions are provided for each product.",
  },
  {
    q: "What information do you need for quotation?",
    a: "Please provide vial or bottle dimensions, bottle count, quantity, preferred box style, insert preference, artwork, finishing requirements and destination.",
  },
  {
    q: "Can I order a prototype before bulk production?",
    a: "Prototype or sample support is available for selected projects. Timing depends on structure, insert material, artwork and finishing requirements.",
  },
  {
    q: "What is the MOQ?",
    a: "Selected custom projects can start from 100 pcs, depending on structure, insert material, dimensions and finishing requirements.",
  },
  {
    q: "Can you make sample kit boxes for cosmetics or essential oils?",
    a: "Yes. The same packaging approach can be adapted to cosmetic ampoules, essential oils, trial-size bottles and other compact sample sets.",
  },
  {
    q: "What affects the cost of a vial sample kit box?",
    a: "Main cost drivers include box structure, dimensions, insert material, cavity count, printing, finishing, quantity and shipping.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Custom Vial & Sample Kit Boxes",
      description:
        "Custom rigid packaging with fitted inserts for fragrance vials, sample bottles, ampoules and premium discovery sets.",
      image: "https://www.sorivapackaging.com/img/project-perfume.webp",
      brand: { "@type": "Brand", name: "SORIVA Packaging" },
      category: "Custom Luxury Packaging",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sorivapackaging.com/" },
        { "@type": "ListItem", position: 2, name: "Products", item: "https://www.sorivapackaging.com/products/" },
        { "@type": "ListItem", position: 3, name: "Custom Vial & Sample Kit Boxes", item: PAGE_URL },
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

export default function CustomVialSampleKitBoxesPage() {
  return (
    <main className="mrb-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="mrb-hero">
        <div className="container">
          <p className="mrb-breadcrumb"><a href="/">Home</a> / <a href="/products/">Products</a> / Custom Vial &amp; Sample Kit Boxes</p>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">VIAL & SAMPLE PACKAGING</span>
              <h1>Custom Vial &amp; Sample Kit Boxes</h1>
              <p className="mrb-subtitle">Premium Packaging for Fragrance Vials, Samples & Discovery Sets</p>
              <p className="mrb-lead">
                Custom vial and sample kit boxes are developed around bottle dimensions, vial count, cavity spacing, insert material and opening experience. Suitable directions include fragrance discovery sets, cosmetic ampoules, essential oils, PR kits and retail trial sets.
              </p>
              <div className="mrb-tags">
                <span>MOQ From 100 pcs</span>
                <span>Custom Multi-Vial Layouts</span>
                <span>EVA / Foam / Paperboard Inserts</span>
                <span>Prototype Support</span>
                <span>Worldwide Shipping</span>
              </div>
              <div className="mrb-hero-actions">
                <a href="/rfq/" className="btn gold">Request Packaging Quote</a>
                <a href={waLink(WA_MESSAGES.products)} target="_blank" rel="noopener" className="btn-wa"><WhatsAppIcon /> Chat on WhatsApp</a>
                <a href="#insert-options" className="btn ghost">View Insert Options</a>
              </div>
            </div>
            <div className="mrb-hero-media">
              <img src="/img/project-perfume.webp" alt="Custom vial and fragrance sample kit packaging" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">BUYER DECISION</span>
            <h2>Design the Box Around Vial Size, Count & Layout</h2>
            <p>The correct packaging structure starts with accurate product dimensions. Vial diameter, height, cap shape, bottle count and removal clearance all influence the box and insert design.</p>
          </div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            <article className="mrb-feature"><strong>01</strong><h3>Confirm Dimensions</h3><p>Provide diameter, total height and any cap or closure dimensions that affect cavity fit.</p></article>
            <article className="mrb-feature"><strong>02</strong><h3>Set Bottle Count</h3><p>Define the number of vials or samples and preferred row, column or grouped arrangement.</p></article>
            <article className="mrb-feature"><strong>03</strong><h3>Choose the Insert</h3><p>Select EVA, foam, paperboard or another suitable insert direction according to presentation and project needs.</p></article>
            <article className="mrb-feature"><strong>04</strong><h3>Prototype the Fit</h3><p>Check cavity dimensions, removal clearance and overall presentation before bulk production where appropriate.</p></article>
          </div>
        </div>
      </section>

      <section className="mrb-section soft" id="insert-options">
        <div className="container">
          <div className="mrb-head center"><span className="eyebrow dark">INSERT OPTIONS</span><h2>Fitted Inserts for Vials, Bottles & Sample Sets</h2><p>Insert layout is selected according to bottle geometry, quantity, presentation requirements and project specifications.</p></div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {insertOptions.map((item, i) => <article className="mrb-feature" key={item.title}><strong>{String(i + 1).padStart(2, "0")}</strong><h3>{item.title}</h3><p>{item.desc}</p></article>)}
          </div>
        </div>
      </section>

      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center"><span className="eyebrow dark">BOX STRUCTURES</span><h2>Choose the Presentation Format</h2><p>Different rigid structures can be paired with fitted inserts according to opening experience, product count and logistics requirements.</p></div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {structures.map((item) => <article className="mrb-feature" key={item.title}><h3>{item.title}</h3><p>{item.desc}</p><p><a href={item.href}>Explore Structure →</a></p></article>)}
          </div>
        </div>
      </section>

      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center"><span className="eyebrow dark">REFERENCE LIBRARY</span><h2>Vial, Insert & Fragrance Packaging References</h2><p>Images below are structure, insert and application references. They are not presented as documentary evidence of completed customer projects unless separately stated.</p></div>
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
          <div className="mrb-head center"><span className="eyebrow dark">APPLICATIONS</span><h2>Common Vial & Sample Kit Applications</h2></div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {applications.map((item) => <article className="mrb-feature" key={item.title}><h3>{item.title}</h3><p>{item.desc}</p></article>)}
          </div>
        </div>
      </section>

      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center"><span className="eyebrow dark">CUSTOMIZATION</span><h2>Branding, Materials & Finishing</h2><p>Box structure, insert layout, paper, printing and finishing can be coordinated around the approved artwork and project requirements.</p></div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))" }}>
            <article className="mrb-feature"><strong>01</strong><h3>Paper & Board</h3><p>Rigid greyboard with coated, art, specialty, textured or other suitable wrap papers.</p><p><a href="/resources/luxury-packaging-paper-types-art-paper-vs-specialty-paper-vs-kraft/">Paper Types Guide →</a></p></article>
            <article className="mrb-feature"><strong>02</strong><h3>Color & Printing</h3><p>CMYK process printing and Pantone (PMS) color matching based on approved artwork and production specifications.</p><p><a href="/resources/pantone-vs-cmyk-custom-packaging/">Pantone vs CMYK →</a></p></article>
            <article className="mrb-feature"><strong>03</strong><h3>Finishing</h3><p>Foil stamping, embossing, debossing, spot UV, matte or gloss lamination and project-dependent finishes.</p><p><a href="/resources/foil-stamping-vs-embossing-vs-spot-uv/">Finishing Guide →</a></p></article>
            <article className="mrb-feature"><strong>04</strong><h3>Measurement</h3><p>Accurate bottle dimensions and planned spacing are important before developing the insert and box footprint.</p><p><a href="/resources/how-to-measure-product-for-custom-box-packaging/">Measurement Guide →</a></p></article>
          </div>
        </div>
      </section>

      <section className="mrb-section dark">
        <div className="container">
          <div className="mrb-head"><span className="mrb-eyebrow">WORKFLOW</span><h2>8-Step Vial Sample Kit Development</h2><p>Exact steps depend on bottle geometry, box structure, insert material, artwork and project requirements.</p></div>
          <div className="mrb-process-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}>
            {workflow.map((step, i) => <div className="mrb-step" key={step.title}><span>{String(i + 1).padStart(2, "0")}</span><b>{step.title}</b><small>{step.sub}</small></div>)}
          </div>
        </div>
      </section>

      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center"><span className="eyebrow dark">FAQ</span><h2>Vial & Sample Kit Packaging Questions</h2></div>
          <div className="mrb-faq">
            {faqs.map((f) => <div className="mrb-faq-item" key={f.q}><b>{f.q}</b><p>{f.a}</p></div>)}
          </div>
        </div>
      </section>

      <ProductBuyerGuides
        title="Vial & Sample Kit Buyer Guides"
        subtitle="Plan product dimensions, inserts, samples and finishing before requesting a packaging quote."
        guides={[
          {
            tag: "Measurement",
            title: "How to Measure a Product for Custom Box Packaging",
            desc: "Prepare accurate dimensions before developing vial cavities and box structure.",
            href: "/resources/how-to-measure-product-for-custom-box-packaging/",
          },
          {
            tag: "Insert Comparison",
            title: "EVA vs Paperboard vs Molded Pulp Packaging Inserts",
            desc: "Compare common insert materials for presentation and structural requirements.",
            href: "/resources/packaging-inserts-eva-vs-paperboard-vs-molded-pulp/",
          },
          {
            tag: "Sampling",
            title: "Custom Gift Box Sample Checklist",
            desc: "Review fit, insert clearance, artwork and finishing before mass production.",
            href: "/resources/custom-gift-box-sample-checklist/",
          },
          {
            tag: "Perfume Guide",
            title: "Perfume Packaging Buyer Guide",
            desc: "Review structure and sourcing considerations for fragrance packaging projects.",
            href: "/resources/perfume-packaging-buyer-guide/",
          },
        ]}
      />

      <section className="mrb-quote" id="quote">
        <div className="container mrb-quote-grid">
          <div>
            <span className="mrb-eyebrow">START A PROJECT</span>
            <h2>Request a Vial or Sample Kit Quote</h2>
            <p style={{ color: "#c5c5c5", lineHeight: 1.7, margin: "12px 0 16px" }}>
              Send vial diameter, total height, bottle count, preferred layout, quantity, box structure, artwork and destination. We can review the packaging direction and suitable insert options for quotation.
            </p>
            <div className="mrb-contact">
              <div className="mrb-contact-note"><b>WhatsApp</b><a href={waLink(WA_MESSAGES.products)} target="_blank" rel="noopener">+86 159 1388 1634</a></div>
              <div className="mrb-contact-note"><b>Email</b><a href="mailto:AMY@XINGYUE.STORE">AMY@XINGYUE.STORE</a></div>
            </div>
            <a className="mrb-back" href="/custom-packaging/">Explore Custom Packaging System →</a>
          </div>
          <QuoteForm />
        </div>
      </section>

      <ProductCrossLinks industryHref="/industries/perfume-packaging/" industryLabel="Perfume Packaging" />
    </main>
  );
}
