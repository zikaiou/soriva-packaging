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
    "Custom foldable magnetic rigid boxes with space-saving flat-pack logistics, premium paper wraps, bespoke inserts and luxury finishes. MOQ from 100 pcs, 1 pc prototype and global export.",
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
    desc: "Combines fragrance presentation with space-saving flat-pack shipping, custom bottle inserts and Pantone matching.",
    href: "/solutions/foldable-magnetic-boxes-for-perfume/",
  },
  {
    tag: "COSMETICS & BEAUTY",
    title: "Foldable Magnetic Boxes for Cosmetics",
    desc: "Multi-product cavity inserts, soft-touch velvet lamination and flat-pack warehouse efficiency for skincare sets.",
    href: "/solutions/foldable-magnetic-boxes-for-cosmetics/",
  },
  {
    tag: "CORPORATE & VIP GIFTS",
    title: "Foldable Magnetic Gift Boxes for Corporate Gifts",
    desc: "Flat-pack on-site storage, quick event assembly, multi-item compartment inserts and metallic foil branding.",
    href: "/solutions/foldable-magnetic-boxes-for-corporate-gifts/",
  },
];

const foldableProjects = [
  {
    tag: "RETAIL CASE STUDY",
    title: "Foldable Magnetic Gift Box Project",
    desc: "Collapsible rigid gift box featuring V-grooved folding hinges, concealed magnetic closure and soft-touch wrap.",
    href: "/projects/foldable-magnetic-gift-box-project/",
  },
  {
    tag: "EVENT CASE STUDY",
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
    desc: "Reduces warehouse storage space before boxes are assembled for product loading.",
  },
  {
    title: "Premium Appearance",
    desc: "Maintains the rigid presentation and smooth magnetic closure expected from luxury packaging.",
  },
  {
    title: "Easy Assembly",
    desc: "Designed for quick setup at your warehouse or fulfillment location with pre-applied adhesive corners.",
  },
];

const specs = [
  { label: "Product Type", value: "Custom Foldable Magnetic Rigid Boxes" },
  { label: "Core Material", value: "Greyboard thickness selected according to box size and structural requirements" },
  {
    label: "Surface Options",
    value: "Art Paper / Specialty Paper / Textured Paper / Fabric / Leatherette",
  },
  { label: "Printing", value: "CMYK Full-Color / Pantone (PMS) Spot Color Matching" },
  {
    label: "Finishing",
    value: "Gold/Silver Foil / Emboss / Deboss / Spot UV / Soft-Touch Lamination",
  },
  { label: "Insert Options", value: "EVA / Velvet / Paperboard / Molded Pulp" },
  { label: "MOQ", value: "From 100 pcs, subject to project specification" },
  { label: "Prototype", value: "1 pc prototype available" },
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
  { title: "Material Preparation", sub: "Paper & board" },
  { title: "Printing & Finishing", sub: "Brand artwork" },
  { title: "Box Forming", sub: "Structure assembly" },
  { title: "Quality Inspection", sub: "Appearance & fit" },
  { title: "Global Delivery", sub: "Air / Sea / Express" },
];

const faqs = [
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
    a: "Yes. Foldable boxes ship flat and assemble in seconds by lifting the side walls and bonding the pre-applied corner adhesive tabs.",
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
        "Custom foldable magnetic rigid boxes with premium presentation and space-saving logistics. Rigid greyboard construction, concealed magnetic closures and tailored inserts. MOQ from 100 pcs.",
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
              Designed for brands that want premium rigid packaging presentation
              while optimizing international shipping volume and warehouse storage space.
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

      {/* ---------- Industry Solutions ---------- */}
      <section className="mrb-section soft" id="solutions">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">INDUSTRY SOLUTIONS</span>
            <h2>Dedicated Foldable Box Solutions by Industry</h2>
            <p>Explore specialized foldable magnetic box configurations tailored for perfume, cosmetics and corporate gifts.</p>
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
          </div>
        </div>
      </section>

      {/* ---------- Capability Projects ---------- */}
      <section className="mrb-section" id="projects">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">FEATURED CASE STUDIES</span>
            <h2>Foldable Box Capability Projects</h2>
            <p>Explore real capability-based packaging case studies developed for retail and corporate events.</p>
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
                    Read Case Study →
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
            <span className="mrb-eyebrow">REAL PRODUCTION</span>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 3.4vw, 40px)", fontWeight: 500, lineHeight: 1.12, margin: "14px 0 12px" }}>
              From Material to Finished Box
            </h2>
            <p style={{ color: "#c5c5c5", lineHeight: 1.65 }}>
              Precision die-cutting, pre-scored folding hinges, automated gluing
              and concealed magnetic insertion ensure reliable structural performance.
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
            <span className="eyebrow dark">FAQ</span>
            <h2>Frequently Asked Questions</h2>
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
        subtitle="Explore practical advice on packaging structures, shipping optimization and sample verification."
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
            desc: "Understand how foldable magnetic rigid boxes optimize storage space and international shipping costs.",
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

      <ProductCrossLinks industryHref="/industries/cosmetic-packaging/" industryLabel="Cosmetic Packaging" />
    </main>
  );
}
