/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import ProductCrossLinks from "../../components/ProductCrossLinks";
import ProductBuyerGuides from "../../components/ProductBuyerGuides";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../product-page.css";

const PAGE_URL =
  "https://www.sorivapackaging.com/products/foldable-magnetic-rigid-boxes/";

export const metadata: Metadata = {
  title: {
    absolute: "Custom Foldable Magnetic Rigid Boxes Manufacturer & Supplier | SORIVA Packaging",
  },
  description:
    "Custom foldable magnetic rigid boxes with flat-pack structures, tailored inserts, specialty papers and premium finishing for perfume, cosmetics and corporate gift packaging.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Custom Foldable Magnetic Rigid Boxes | SORIVA Packaging",
    description:
      "Foldable magnetic rigid boxes with premium presentation and space-saving logistics. MOQ from 100 pcs, 1 pc prototype and global export.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
    images: [
      {
        url: "https://www.sorivapackaging.com/img/foldable-rigid.webp",
        width: 1200,
        height: 900,
        alt: "Custom foldable magnetic rigid box",
      },
    ],
  },
};

const features = [
  {
    title: "Premium Rigid Construction",
    desc: "Durable greyboard structure designed for a premium presentation.",
  },
  {
    title: "Custom Size & Structure",
    desc: "Dimensions and structure developed around your product.",
  },
  {
    title: "Custom Inserts",
    desc: "EVA, velvet-covered, paperboard or molded pulp inserts can be selected according to product protection and presentation requirements.",
  },
  {
    title: "Luxury Finishes",
    desc: "Metallic foil, embossing, debossing, spot UV and specialty paper options.",
  },
];

const foldableSolutions = [
  {
    tag: "FRAGRANCE & PERFUME",
    title: "Foldable Magnetic Boxes for Perfume",
    desc: "Combines fragrance presentation with a flatter supply form, custom bottle inserts and Pantone (PMS) color matching based on approved artwork and production specifications.",
    href: "/solutions/foldable-magnetic-boxes-for-perfume/",
  },
  {
    tag: "COSMETICS & BEAUTY",
    title: "Foldable Magnetic Boxes for Cosmetics",
    desc: "Multi-product cavity inserts, selected matte or soft-touch lamination and a flatter supply form for skincare sets.",
    href: "/solutions/foldable-magnetic-boxes-for-cosmetics/",
  },
  {
    tag: "CORPORATE & VIP GIFTS",
    title: "Foldable Magnetic Gift Boxes for Corporate Gifts",
    desc: "A flatter supply form for on-site storage, event assembly, multi-item compartment inserts and metallic foil branding.",
    href: "/solutions/foldable-magnetic-boxes-for-corporate-gifts/",
  },
];

const foldableProjects = [
  {
    tag: "RETAIL CAPABILITY REFERENCE",
    title: "Foldable Magnetic Gift Box Project",
    desc: "Collapsible rigid gift box featuring V-grooved folding hinges, concealed magnetic closure and soft-touch wrap.",
    href: "/projects/foldable-magnetic-gift-box-project/",
  },
  {
    tag: "EVENT CAPABILITY REFERENCE",
    title: "Flat-Pack Corporate Gift Box Project",
    desc: "Flat-pack corporate presentation box with multi-compartment velvet EVA insert and silver foil branding.",
    href: "/projects/flat-pack-corporate-gift-box-project/",
  },
];

const logistics = [
  {
    title: "Flat-Pack Shipping",
    desc: "Foldable structures can improve packing efficiency and reduce shipping volume for suitable projects.",
  },
  {
    title: "Space-Saving Storage",
    desc: "Can support a flatter storage form before boxes are assembled for product loading, subject to the selected structure.",
  },
  {
    title: "Premium Appearance",
    desc: "Maintains the rigid presentation and magnetic closure expected from a selected luxury packaging structure.",
  },
  {
    title: "Easy Assembly",
    desc: "Assembly guidance can be prepared for the selected corner fixing method and fulfillment workflow.",
  },
];

const specs = [
  { label: "Product Type", value: "Custom Foldable Magnetic Rigid Boxes" },
  { label: "Core Material", value: "Greyboard thickness selected according to box size and structural requirements" },
  {
    label: "Surface Options",
    value: "Art Paper / Specialty Paper / Textured Paper / Fabric / Leatherette",
  },
  { label: "Printing", value: "CMYK Full-Color / Pantone (PMS) Color Matching Based on Approved Artwork" },
  {
    label: "Finishing",
    value: "Gold/Silver Foil / Emboss / Deboss / Spot UV / Soft-Touch Lamination",
  },
  { label: "Insert Options", value: "EVA / Velvet / Paperboard / Molded Pulp" },
  { label: "MOQ", value: "From 100 pcs, subject to project specification" },
  { label: "Prototype", value: "1 pc prototype available for selected projects" },
  {
    label: "Lead Time",
    value: "Lead time depends on design complexity, quantity, materials and finishing requirements.",
  },
];

const structure = [
  "Premium wrapping paper surface (Art / Specialty / Textured)",
  "Rigid greyboard core tailored to structural needs",
  "Foldable hinge structure with pre-scored joints",
  "Concealed magnetic closure",
  "Custom product insert",
];

const details = [
  { img: "/img/foldable-rigid.webp", caption: "Open Box Presentation" },
  { img: "/img/foil-clean.webp", caption: "Gold Foil & Branding" },
  { img: "/img/emboss-clean.webp", caption: "Embossing / Debossing" },
  { img: "/img/insert-clean.webp", caption: "Custom Product Insert" },
  { img: "/img/project-perfume.webp", caption: "Perfume Packaging", href: "/solutions/foldable-magnetic-boxes-for-perfume/" },
  { img: "/img/project-skincare.webp", caption: "Skincare Gift Set", href: "/solutions/foldable-magnetic-boxes-for-cosmetics/" },
];

const conceptReferences = [
  {
    img: "/img/foldable-magnetic-box-structure-reference.png",
    alt: "Flat-pack foldable magnetic rigid box structure reference",
    eyebrow: "STRUCTURE REFERENCE",
    title: "Foldable Magnetic Box Structure",
    caption: "Flat-pack foldable magnetic rigid box shown in flat and assembled form",
  },
  {
    img: "/img/foldable-magnetic-box-assembly-guide.png",
    alt: "Foldable magnetic rigid box assembly steps from flat form to finished box",
    eyebrow: "ASSEMBLY GUIDE",
    title: "How the Foldable Structure Assembles",
    caption: "Four-step assembly reference for a foldable magnetic rigid box",
  },
  {
    img: "/img/foldable-magnetic-box-customization-options.png",
    alt: "Customization options for foldable magnetic rigid boxes",
    eyebrow: "CUSTOMIZATION REFERENCE",
    title: "Customization Options",
    caption: "Material, surface finishing and ribbon options for foldable magnetic boxes",
  },
  {
    img: "/img/foldable-magnetic-box-insert-lining-options.png",
    alt: "Insert and lining options for custom foldable magnetic gift boxes",
    eyebrow: "INSERT & LINING REFERENCE",
    title: "Insert & Lining Options",
    caption: "Insert and lining options selected according to product and presentation needs",
  },
  {
    img: "/img/foldable-magnetic-box-production-workflow.png",
    alt: "Foldable magnetic rigid box production workflow illustration",
    eyebrow: "WORKFLOW ILLUSTRATION",
    title: "Production Workflow",
    caption: "Illustrated workflow from design review to packing for foldable magnetic rigid boxes",
  },
];

const applications = [
  {
    img: "/img/project-skincare.webp",
    title: "Cosmetics & Skincare",
    desc: "Serums, creams and beauty gift sets.",
    href: "/industries/cosmetic-packaging/",
  },
  {
    img: "/img/project-perfume.webp",
    title: "Perfume & Fragrance",
    desc: "Fragrance bottles and luxury sets.",
    href: "/industries/perfume-packaging/",
  },
  {
    img: "/img/project-jewelry.webp",
    title: "Jewelry & Watches",
    desc: "Rings, necklaces and premium accessories.",
    href: "/industries/jewelry-packaging/",
  },
  {
    img: "/img/project-gift-clean.webp",
    title: "Corporate Gifts",
    desc: "Brand campaigns and executive gift sets.",
    href: "/industries/corporate-gift-packaging/",
  },
];

const stats = [
  { value: "10,000㎡", label: "Factory Area" },
  { value: "400+", label: "Employees" },
  { value: "50M+", label: "Annual Capacity" },
  { value: "20 Years", label: "Production Experience" },
];

const processSteps = [
  { title: "Design / Structure Review", sub: "Dieline & fit" },
  { title: "Material Preparation", sub: "Paper & board" },
  { title: "Printing", sub: "Approved artwork" },
  { title: "Surface Finishing", sub: "Foil / UV / lamination" },
  { title: "Die-Cutting", sub: "Scored panels" },
  { title: "Structure Assembly", sub: "Corners & closure" },
  { title: "Quality Inspection", sub: "Appearance & fit" },
  { title: "Packing", sub: "Export preparation" },
];

const faqs = [
  {
    q: "What is the difference between a foldable magnetic box and a standard magnetic rigid box?",
    a: "A foldable magnetic box is designed to be supplied in a flatter form and assembled before use, while a standard magnetic rigid box is generally supplied in its finished rigid form. The best structure depends on product size, presentation and shipping requirements.",
  },
  {
    q: "Can foldable magnetic boxes be customized with a logo?",
    a: "Yes. Logo treatments can include printing, foil stamping, embossing, debossing or other suitable finishing depending on the selected paper and design.",
  },
  {
    q: "Can the insert be customized?",
    a: "Yes. Insert layout and material are selected according to product dimensions, weight, presentation and project requirements.",
  },
  {
    q: "Can I order a sample before production?",
    a: "Prototype or sample support is available for selected projects. Timing depends on structure, materials and finishing requirements.",
  },
  {
    q: "Are foldable magnetic boxes suitable for perfume, cosmetics and corporate gifts?",
    a: "They can be suitable for these applications when the structure, insert and dimensions are developed for the specific product.",
  },
  {
    q: "Can I customize the box size and dieline?",
    a: "Yes. Dimensions and dielines are developed according to your product dimensions and packaging requirements.",
  },
  {
    q: "What is the MOQ for custom foldable magnetic boxes?",
    a: "Selected custom projects can start from 100 pcs, depending on materials, size and finishing requirements.",
  },
  {
    q: "Can I order a physical prototype before bulk production?",
    a: "Yes. A 1 pc prototype sample can be produced for structure, size, artwork and finish confirmation.",
  },
  {
    q: "What is the typical production lead time?",
    a: "Lead time depends on design complexity, quantity, materials and finishing requirements.",
  },
  {
    q: "Where do you ship?",
    a: "We support customers in North America, Europe, Australia, Japan, Korea and other international markets by sea, air and express.",
  },
  {
    q: "Does the box require assembly?",
    a: "Yes. Foldable boxes are supplied in a flatter form and assembled by raising the walls and securing the selected corner fixing method. Exact assembly steps should be confirmed for the project structure.",
  },
  {
    q: "Are foldable rigid boxes suitable for international shipping?",
    a: "Yes. Foldable structures can improve packing efficiency and reduce shipping volume for suitable projects.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Custom Foldable Magnetic Rigid Boxes",
      description:
        "Custom foldable magnetic rigid boxes with flat-pack structures, concealed magnetic closures and tailored inserts. Final structure and project specifications are confirmed during sampling.",
      image: "https://www.sorivapackaging.com/img/foldable-rigid.webp",
      brand: { "@type": "Brand", name: "SORIVA Packaging" },
      category: "Custom Luxury Packaging",
      material: "Rigid greyboard + custom wrapping paper",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sorivapackaging.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Custom Foldable Magnetic Rigid Boxes",
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

export default function FoldableMagneticRigidBoxesPage() {
  return (
    <main className="mrb-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ---------- Hero ---------- */}
      <section className="mrb-hero">
        <div className="container">
          <p className="mrb-breadcrumb">
            <a href="/">Home</a> / <a href="/products/">Products</a> / Foldable Magnetic Rigid Boxes
          </p>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">FLAT-PACK LUXURY PACKAGING</span>
              <h1>Custom Foldable Magnetic Rigid Boxes</h1>
              <p className="mrb-subtitle">
                Space-Saving Logistics With Premium Rigid Presentation
              </p>
              <p className="mrb-lead">
                Foldable magnetic rigid boxes combine the structural elegance of
                traditional rigid gift boxes with flat-pack storage and shipping efficiency.
              </p>
              <div className="mrb-tags">
                <span>MOQ From 100 pcs</span>
                <span>Flat-Pack Shipping Efficiency</span>
                <span>Concealed Magnetic Closure</span>
                <span>Custom Foam / Pulp Inserts</span>
                <span>Worldwide Shipping</span>
              </div>
              <div className="mrb-hero-actions">
                <a href="/rfq/" className="btn gold">
                  Request Packaging Quote
                </a>
                <a
                  href={waLink(WA_MESSAGES.foldable)}
                  target="_blank"
                  rel="noopener"
                  className="btn-wa"
                >
                  <WhatsAppIcon /> Chat on WhatsApp
                </a>
                <a href="#solutions" className="btn ghost">
                  Industry Solutions
                </a>
              </div>
            </div>
            <div className="mrb-hero-media">
              <img
                src="/img/foldable-rigid.webp"
                alt="Custom foldable magnetic rigid box"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Features ---------- */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">WHY CHOOSE FOLDABLE</span>
            <h2>The Best of Both Worlds</h2>
            <p>
              Designed for brands that want premium rigid packaging presentation while evaluating a flatter supply form for storage and shipment.
            </p>
          </div>
          <div className="mrb-features">
            {features.map((f, i) => (
              <article className="mrb-feature" key={f.title}>
                <strong>{String(i + 1).padStart(2, "0")}</strong>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Structure & procurement guide ---------- */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">WHAT IS A FOLDABLE MAGNETIC RIGID BOX?</span>
            <h2>Flat-Pack Structure for Premium Presentation</h2>
            <p>A foldable magnetic rigid box is designed to ship and store in a flatter form, then assemble into a structured presentation box for use. The final structure, closure, reinforcement and interior layout should be confirmed during sampling according to box size, product weight and presentation requirements.</p>
          </div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            {[
              ["Flat storage form", "The box can be reviewed in its flatter supply and storage form."],
              ["Fold-up side walls", "Scored joints allow the walls and lid to be raised during assembly."],
              ["Closure and fixing", "Magnetic closure and corner fixing details are selected according to the project."],
              ["Assembled presentation", "The finished form is reviewed for product fit, insert clearance and presentation."],
            ].map(([title, desc]) => <article className="mrb-feature" key={title}><h3>{title}</h3><p>{desc}</p></article>)}
          </div>
          <div className="mrb-note" style={{ marginTop: 24 }}><b>Buyer Decision:</b> Choose a foldable magnetic rigid box when a premium rigid-box presentation is required together with a structure that can be supplied in a flatter form for storage or shipment. Final assembly method, reinforcement, insert fit and closure details should be confirmed during sampling.</div>
        </div>
      </section>

      <section className="mrb-section" id="references">
        <div className="container">
          <div className="mrb-head center"><span className="eyebrow dark">STRUCTURE &amp; PROCESS REFERENCES</span><h2>Foldable Magnetic Box Reference Guides</h2><p>These generated images are structure, assembly, customization, insert and workflow illustrations only. They are not real customer projects, factory photos, production samples or shipment photos.</p></div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {conceptReferences.map((ref) => <figure className="mrb-feature" key={ref.title} style={{ margin: 0 }}><img src={ref.img} alt={ref.alt} style={{ width: "100%", borderRadius: 8 }} loading="lazy" /><span style={{ display: "block", marginTop: 14, color: "var(--color-gold, #c79a51)", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>{ref.eyebrow}</span><h3>{ref.title}</h3><figcaption>{ref.caption}</figcaption></figure>)}
          </div>
        </div>
      </section>

      {/* ---------- Industry Solutions ---------- */}
      <section className="mrb-section soft" id="solutions">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">INDUSTRY SOLUTIONS</span>
            <h2>Dedicated Foldable Box Solutions by Industry</h2>
            <p>Explore specialized foldable magnetic box configurations for perfume, cosmetics and corporate gifts, then compare inserts, dimensions and finishing before requesting an RFQ.</p>
          </div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {foldableSolutions.map((sol) => (
              <article className="mrb-feature" key={sol.title}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "var(--color-gold, #c79a51)", display: "block", marginBottom: 6 }}>
                  {sol.tag}
                </span>
                <h3>{sol.title}</h3>
                <p>{sol.desc}</p>
                <p style={{ marginTop: 14 }}>
                  <a href={sol.href} style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                    View Solution →
                  </a>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Logistics advantage ---------- */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">LOGISTICS &amp; STORAGE</span>
            <h2>Engineered For Shipping Efficiency</h2>
            <p>
              Foldable structures can improve packing efficiency and reduce shipping volume for suitable projects.
            </p>
          </div>
          <div className="mrb-features">
            {logistics.map((l) => (
              <article className="mrb-feature" key={l.title}>
                <h3>{l.title}</h3>
                <p>{l.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Technical specs ---------- */}
      <section className="mrb-section soft">
        <div className="container mrb-spec-wrap">
          <div>
            <div className="mrb-head">
              <span className="eyebrow dark">TECHNICAL DETAILS</span>
              <h2>Product Specifications</h2>
            </div>
            <div className="mrb-spec" style={{ display: "grid", gap: 10 }}>
              {specs.map((s) => (
                <div className="mrb-spec-row" key={s.label}>
                  <b>{s.label}</b>
                  <span>{s.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mrb-structure">
            <div className="mrb-head">
              <span className="eyebrow dark">STRUCTURE</span>
              <h2>Materials &amp; Construction</h2>
            </div>
            <ol>
              {structure.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <p style={{ marginTop: 18, color: "#555", lineHeight: 1.7 }}><b>Customization options:</b> specialty paper, printed paper, matte or gloss lamination, foil stamping, embossing, debossing, spot UV, custom logo and suitable ribbon or pull-tab options.</p>
            <p style={{ marginTop: 12, color: "#555", lineHeight: 1.7 }}><b>Insert &amp; lining options:</b> EVA, EPE foam, sponge foam, paperboard, corrugated paper, molded pulp, satin lining or other suitable solutions. Insert material and layout are selected according to product dimensions, weight, presentation and protection requirements.</p>
          </div>
        </div>
      </section>

      {/* ---------- Capability Projects ---------- */}
      <section className="mrb-section" id="projects">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">CAPABILITY REFERENCES</span>
            <h2>Foldable Box Capability References</h2>
            <p>Explore capability-based packaging references for retail and corporate gift applications. These pages describe packaging approaches and are not claims of named customer results.</p>
          </div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
            {foldableProjects.map((p) => (
              <article className="mrb-feature" key={p.title}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "var(--color-gold, #c79a51)", display: "block", marginBottom: 6 }}>
                  {p.tag}
                </span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <p style={{ marginTop: 14 }}>
                  <a href={p.href} style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                    Read Capability Reference →
                  </a>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Details gallery ---------- */}
      <section className="mrb-section dark" id="details">
        <div className="container">
          <div className="mrb-head">
            <span className="mrb-eyebrow">PRODUCT DETAILS</span>
            <h2>Explore Box Details</h2>
            <p>
              Visual references for structure, finishing, inserts and premium
              applications.
            </p>
          </div>
          <div className="mrb-gallery">
            {details.map((d) => (
              <figure key={d.caption}>
                <img src={d.img} alt={d.caption} />
                <figcaption>{d.href ? <a href={d.href} style={{ color: "inherit", textDecoration: "underline" }}>{d.caption} →</a> : d.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Applications ---------- */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">APPLICATIONS</span>
            <h2>Designed for Premium Products</h2>
          </div>
          <div className="mrb-apps">
            {applications.map((a) => (
              <article className="mrb-app" key={a.title}>
                <img src={a.img} alt={a.title} />
                <div>
                  <b>{a.href ? <a href={a.href} style={{ color: "inherit", textDecoration: "none" }}>{a.title} →</a> : a.title}</b>
                  <span>{a.desc}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Stats ---------- */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">MANUFACTURING CAPABILITY</span>
            <h2>Built for Sampling and Scalable Production</h2>
          </div>
          <div className="mrb-stats">
            {stats.map((s) => (
              <div className="mrb-stat" key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Video & Process ---------- */}
      <section className="mrb-section dark">
        <div className="container mrb-video-grid">
          <div>
            <span className="mrb-eyebrow">PRODUCTION WORKFLOW REFERENCE</span>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 3.4vw, 40px)", fontWeight: 500, lineHeight: 1.12, margin: "14px 0 12px" }}>
              From Material to Finished Box
            </h2>
            <p style={{ color: "#c5c5c5", lineHeight: 1.65 }}>
              A typical project workflow may include design review, material preparation, printing, finishing, die-cutting, structure assembly, quality inspection and packing. Exact steps depend on the selected project structure and production requirements.
            </p>
            <div className="mrb-process-5" style={{ marginTop: 26 }}>
              {processSteps.map((s, i) => (
                <div className="mrb-step" key={s.title}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <b>{s.title}</b>
                  <small>{s.sub}</small>
                </div>
              ))}
            </div>
          </div>
          <div className="mrb-factory-video" style={{ marginTop: 0 }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              poster="/img/factory-poster.webp"
            >
              <source src="/video/factory-production.mp4" type="video/mp4" />
              Your browser does not support video.
            </video>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
              <span className="eyebrow dark">BUYER FAQ</span>
            <h2>Foldable Magnetic Box Buying Questions</h2>
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

      {/* ---------- Guides ---------- */}
      <ProductBuyerGuides
        title="Foldable Magnetic Box Buyer Guides & Resources"
         subtitle="Explore practical guidance on product measurement, inserts, finishing, color matching and sample review."
        guides={[
          {
            tag: "Structure Guide",
            title: "Rigid Box Structure Guide: Magnetic vs Drawer vs Two-Piece",
            desc: "Compare opening styles, unboxing presentation and packing efficiency for gift packaging.",
            href: "/resources/rigid-box-structure-guide-magnetic-vs-drawer-vs-two-piece/",
          },
          {
            tag: "Foldable Comparison",
            title: "Foldable vs Traditional Rigid Boxes",
             desc: "Compare flat-pack supply forms with traditional rigid box formats for storage and shipment planning.",
            href: "/resources/foldable-vs-traditional-rigid-box/",
          },
          {
            tag: "Shipping Optimization",
            title: "How to Reduce Custom Packaging Shipping Cost",
            desc: "Explore packaging design choices that optimize export shipping volume and container load.",
            href: "/resources/how-to-reduce-custom-packaging-shipping-cost/",
          },
          {
            tag: "Packaging Inserts",
            title: "EVA vs Paperboard vs Molded Pulp Packaging Inserts",
            desc: "Compare protection, presentation and sustainability differences across insert materials.",
            href: "/resources/packaging-inserts-eva-vs-paperboard-vs-molded-pulp/",
          },
        ]}
      />

      {/* ---------- Quote ---------- */}
      <section className="mrb-quote" id="quote">
        <div className="container mrb-quote-grid">
          <div>
            <span className="mrb-eyebrow">START A PROJECT</span>
            <h2>Request A Foldable Box Quote</h2>
            <p style={{ color: "#c5c5c5", lineHeight: 1.7, margin: "12px 0 16px" }}>
              Send us your product size, target quantity, material preferences and destination.
              Our packaging specialists will provide dielines, material recommendations and quotation.
            </p>
            <div className="mrb-contact">
              <div className="mrb-contact-note">
                <b>WhatsApp</b>
                <a href={waLink(WA_MESSAGES.foldable)} target="_blank" rel="noopener">
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
          <div className="mrb-head center"><span className="eyebrow dark">FOLDABLE BOX BUYER RESOURCES</span><h2>Prepare a Foldable Magnetic Box RFQ</h2><p>Compare applications, check product dimensions, review insert and finishing options, then send the project requirements for quotation.</p><div className="mrb-hero-actions" style={{ justifyContent: "center" }}><a className="btn ghost" href="/industries/perfume-packaging/">Perfume Packaging →</a><a className="btn ghost" href="/industries/cosmetic-packaging/">Cosmetics Packaging →</a><a className="btn ghost" href="/industries/corporate-gift-packaging/">Corporate Gifts →</a><a className="btn ghost" href="/resources/how-to-measure-product-for-custom-box-packaging/">Measurement Guide →</a><a className="btn ghost" href="/resources/packaging-inserts-eva-vs-paperboard-vs-molded-pulp/">Insert Guide →</a><a className="btn ghost" href="/resources/foil-stamping-vs-embossing-vs-spot-uv/">Finishing Guide →</a><a className="btn ghost" href="/resources/pantone-vs-cmyk-custom-packaging/">Pantone vs CMYK →</a><a className="btn gold" href="/rfq/">Request an RFQ →</a></div></div>
        </div>
      </section>
      <ProductCrossLinks industryHref="/industries/cosmetic-packaging/" industryLabel="Cosmetic Packaging" />
    </main>
  );
}
