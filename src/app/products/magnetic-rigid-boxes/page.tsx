/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import ProductCrossLinks from "../../components/ProductCrossLinks";
import ProductBuyerGuides from "../../components/ProductBuyerGuides";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../product-page.css";

const PAGE_URL = "https://www.sorivapackaging.com/products/magnetic-rigid-boxes/";

export const metadata: Metadata = {
  title: {
    absolute: "Custom Magnetic Rigid Boxes Manufacturer & Supplier | SORIVA Packaging",
  },
  description:
    "Custom magnetic rigid boxes with book-style structures, tailored inserts, specialty papers and premium finishing for perfume, cosmetics, jewelry and gift packaging.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Custom Magnetic Rigid Boxes | SORIVA Packaging",
    description:
      "Premium magnetic rigid boxes with hidden magnetic closures, custom inserts and luxury finishes. MOQ from 100 pcs, 1 pc prototype and global shipping.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
    images: [
      {
        url: "https://www.sorivapackaging.com/img/magnetic-rigid.webp",
        width: 1200,
        height: 900,
        alt: "Custom magnetic rigid box",
      },
    ],
  },
};

const features = [
  {
    title: "Premium Rigid Construction",
    desc: "Durable greyboard structure designed for a solid, prestigious presentation.",
  },
  {
    title: "Custom Size & Structure",
    desc: "Book-style, front-flap and collapsible foldable structures tailored around your product.",
  },
  {
    title: "Precision Inserts",
    desc: "EVA, velvet-covered, paperboard or molded pulp inserts can be selected according to product protection and presentation requirements.",
  },
  {
    title: "Luxury Finishes",
    desc: "Metallic hot foil, 3D embossing, debossing, gloss spot UV and soft-touch lamination.",
  },
];

const magneticSolutions = [
  {
    tag: "FRAGRANCE & PERFUME",
    title: "Magnetic Rigid Boxes for Perfume",
    desc: "Bottle protection, concealed magnetic closure and velvet-covered EVA inserts for fragrance collections.",
    href: "/solutions/magnetic-rigid-boxes-for-perfume/",
  },
  {
    tag: "COSMETICS & BEAUTY",
    title: "Magnetic Gift Boxes for Cosmetics",
    desc: "Multi-product cavity organization, soft-touch velvet finish and foldable packaging options for skincare sets.",
    href: "/solutions/magnetic-gift-boxes-for-cosmetics/",
  },
  {
    tag: "JEWELRY & ACCESSORIES",
    title: "Magnetic Rigid Boxes for Jewelry",
    desc: "Compact luxury proportions, velvet-covered linings, custom ring slits and smooth magnetic closures.",
    href: "/solutions/magnetic-rigid-boxes-for-jewelry/",
  },
];

const magneticProjects = [
  {
    tag: "CAPABILITY CASE STUDY",
    title: "Premium Magnetic Gift Box Project",
    desc: "Book-style front-opening rigid box with rigid greyboard, concealed magnets and metallic gold foil.",
    href: "/projects/premium-magnetic-gift-box-project/",
  },
  {
    tag: "SKINCARE CASE STUDY",
    title: "Cosmetic Magnetic Packaging Project",
    desc: "Foldable magnetic rigid box with multi-cavity bottle insert, rose gold foil and improved packing efficiency.",
    href: "/projects/cosmetic-magnetic-packaging-project/",
  },
];

const specs = [
  { label: "Product Type", value: "Custom Magnetic Rigid Boxes" },
  { label: "Core Material", value: "Greyboard thickness selected according to box size and structural requirements" },
  {
    label: "Surface Options",
    value: "Coated Art Paper / Specialty Textured Paper / Black Card / Metallic Card",
  },
  { label: "Printing", value: "CMYK Full-Color / Pantone (PMS) Spot Color Matching" },
  {
    label: "Finishing",
    value: "Gold/Silver Hot Foil / 3D Embossing / Debossing / Spot UV / Soft-Touch Lamination",
  },
  { label: "Insert Options", value: "EVA / Velvet / Paperboard / Molded Pulp" },
  { label: "MOQ", value: "From 100 pcs, subject to project specification" },
  { label: "Prototype", value: "1 pc prototype sample available" },
  {
    label: "Lead Time",
    value: "Lead time depends on design complexity, quantity, materials and finishing requirements.",
  },
];

const structure = [
  "Premium wrapping paper surface (Art / Specialty / Textured)",
  "Rigid greyboard core tailored to size requirements",
  "Precision V-grooved sharp corner edges",
  "Concealed magnetic closure",
  "Custom-engineered product cavity insert",
];

const details = [
  { img: "/img/magnetic-rigid.webp", caption: "Packaging Style Reference: Open Box Presentation" },
  { img: "/img/foil-clean.webp", caption: "Packaging Style Reference: Gold Foil & Branding" },
  { img: "/img/emboss-clean.webp", caption: "Packaging Style Reference: Embossing / Debossing" },
  { img: "/img/insert-clean.webp", caption: "Packaging Style Reference: Custom Product Insert" },
  { img: "/img/project-perfume.webp", caption: "Application Example: Premium Perfume Packaging", href: "/projects/premium-perfume-packaging/" },
  { img: "/img/project-skincare.webp", caption: "Application Example: Skincare Gift Set", href: "/projects/luxury-skincare-gift-box/" },
];

const realSamples = [
  {
    img: "/img/magnetic-rigid-box-satin-lining-sample.png",
    alt: "Custom magnetic rigid gift box with satin-style interior lining",
    caption: "Magnetic rigid gift box with satin-style interior presentation",
    note: "Real sample reference — interior presentation and ribbon detail",
  },
  {
    img: "/img/magnetic-rigid-box-brown-textured-sample.png",
    alt: "Brown textured book-style magnetic rigid gift box sample",
    caption: "Brown textured magnetic rigid box with book-style opening",
    note: "Real sample reference — surface texture and structure reference",
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
    img: "/img/candles.webp",
    title: "Candle & Home Fragrance",
    desc: "Luxury jar candles, diffusers and scented gift collections.",
    href: "/industries/candle-packaging/",
  },
  {
    img: "/img/project-jewelry.webp",
    title: "Jewelry & Watches",
    desc: "Rings, necklaces, watches and fine jewelry.",
    href: "/industries/jewelry-packaging/",
  },
  {
    img: "/img/fashion.webp",
    title: "Fashion & Accessories",
    desc: "Belts, wallets, silk scarves and sunglasses.",
    href: "/industries/fashion-packaging/",
  },
  {
    img: "/img/project-gift-clean.webp",
    title: "Corporate & VIP Gifts",
    desc: "Executive gift boxes, launch kits and corporate sets.",
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
  { title: "Design & Dieline", sub: "Size & structural planning" },
  { title: "Material Sourcing", sub: "Board & paper preparation" },
  { title: "Printing & Foil", sub: "CMYK, Pantone & finishing" },
  { title: "Box Assembly", sub: "Die-cutting, folding & magnets" },
  { title: "Quality Inspection", sub: "QC & export carton packing" },
];

const faqs = [
  {
    q: "Can magnetic rigid boxes be customized with a logo?",
    a: "Yes. Logo treatment can include printing, foil stamping, embossing, debossing or other suitable finishing depending on the paper and design.",
  },
  {
    q: "Can you customize the insert?",
    a: "Yes. Insert structure and material can be selected according to the product shape, dimensions, presentation and project requirements.",
  },
  {
    q: "What information is needed for a quote?",
    a: "Product or box dimensions, quantity, preferred structure, materials, printing or finishing, insert requirements and destination are useful for quotation.",
  },
  {
    q: "Can I order a sample before production?",
    a: "Prototype or sample support is available for selected projects. Timing depends on structure, materials and finishing requirements.",
  },
  {
    q: "What is the MOQ for custom magnetic rigid boxes?",
    a: "Selected custom magnetic rigid box projects can start from 100 pcs. The optimal production quantity depends on box size, paper material, insert complexity and surface finishing requirements.",
  },
  {
    q: "Can I customize the exact box dimensions and structure?",
    a: "Yes. Every dimension (Length × Width × Height) and structural opening style (book-style, front-flap, double-door or foldable) is fully customized around your product specifications.",
  },
  {
    q: "What types of product inserts can you produce?",
    a: "EVA, velvet-covered, paperboard or molded pulp inserts can be selected according to product protection and presentation requirements.",
  },
  {
    q: "How are the magnetic closures integrated?",
    a: "Magnetic closure specifications are selected according to box size, structure and project requirements.",
  },
  {
    q: "Can I order a physical sample before mass production?",
    a: "Yes. 1 pc custom prototype sample complete with custom insert, foil stamping and print colors is available for review and sign-off before commencing bulk manufacturing.",
  },
  {
    q: "Do you offer foldable magnetic box options for export shipping?",
    a: "Yes. Foldable structures can improve packing efficiency and reduce shipping volume for suitable projects, maintaining rigid box presentation upon assembly.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Custom Magnetic Rigid Boxes",
      image: "https://www.sorivapackaging.com/img/magnetic-rigid.webp",
      description:
        "Custom magnetic rigid boxes with book-style structures, tailored inserts, specialty papers and premium finishing for perfume, cosmetics, jewelry and gift packaging.",
      brand: { "@type": "Brand", name: "SORIVA Packaging" },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        price: "1.20",
        lowPrice: "0.80",
        highPrice: "5.00",
        offerCount: "1000",
        availability: "https://schema.org/InStock",
      },
      url: PAGE_URL,
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sorivapackaging.com/" },
        { "@type": "ListItem", position: 2, name: "Products", item: "https://www.sorivapackaging.com/products/" },
        { "@type": "ListItem", position: 3, name: "Magnetic Rigid Boxes", item: PAGE_URL },
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

export default function MagneticRigidBoxesPage() {
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
            <a href="/">Home</a> / <a href="/products/">Products</a> / Magnetic Rigid Boxes
          </nav>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">CUSTOM LUXURY PACKAGING</span>
              <h1>Custom Magnetic Rigid Boxes</h1>
              <p className="mrb-lead">
                Premium custom magnetic rigid boxes engineered with greyboard structures,
                concealed magnetic closure, precision-cut inserts and bespoke finishes for
                cosmetics, fragrance, jewelry and luxury gifting brands.
              </p>
              <div className="mrb-tags">
                <span>MOQ From 100 pcs</span>
                <span>Concealed Magnetic Closure</span>
                <span>Custom Foam / Pulp Inserts</span>
                <span>Foil / Emboss / Soft-Touch</span>
                <span>Worldwide Shipping</span>
              </div>
              <div className="mrb-hero-actions">
                <a href="/rfq/" className="btn gold">
                  Request Packaging Quote
                </a>
                <a
                  href={waLink(WA_MESSAGES.magnetic)}
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
                src="/img/magnetic-rigid.webp"
                alt="Custom magnetic rigid box with luxury finish"
                width="1200"
                height="900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product overview */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">PRODUCT OVERVIEW</span>
            <h2>Premium Custom Packaging Built Around Your Brand</h2>
            <p>
              Magnetic rigid boxes are premium presentation boxes built with a
              sturdy greyboard core, wrapped paper surfaces and hidden magnetic
              closures. They are widely used for cosmetics, perfume, jewelry,
              gifts and other premium products.
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

      {/* Real sample references */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">REAL MAGNETIC RIGID BOX SAMPLES</span>
            <h2>Sample Structure References</h2>
            <p>Explore real magnetic rigid box samples showing different interior presentation, surface texture and book-style opening structures. Final dimensions, materials, inserts and finishing are customized to each project.</p>
          </div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
            {realSamples.map((sample) => (
              <figure className="mrb-feature" key={sample.caption} style={{ margin: 0 }}>
                <img src={sample.img} alt={sample.alt} width="1200" height="1200" loading="lazy" style={{ width: "100%", height: "auto", display: "block", borderRadius: 6 }} />
                <figcaption style={{ marginTop: 14 }}><strong>{sample.caption}</strong><br /><span>{sample.note}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer decision */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">BUYER DECISION</span>
            <h2>When to Choose a Magnetic Rigid Box</h2>
            <p>Choose a magnetic rigid box when premium presentation, hinged opening and concealed magnetic closure are important to the unboxing experience. Final structure, insert fit, paper selection and finishing should be confirmed during sampling.</p>
          </div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            <article className="mrb-feature"><h3>Book-Style Magnetic Box</h3><p>A hinged book-style magnetic box creates a clear opening sequence for fragrance, jewelry and premium gift presentation.</p></article>
            <article className="mrb-feature"><h3>Custom Insert Presentation</h3><p>Insert material and layout are selected according to product dimensions, weight, presentation and protection requirements.</p></article>
            <article className="mrb-feature"><h3>Branding &amp; Finishing</h3><p>Printing, foil stamping, embossing, debossing, Spot UV, printed paper and specialty paper can be reviewed for the approved artwork.</p></article>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="mrb-section soft" id="solutions">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">INDUSTRY SOLUTIONS</span>
            <h2>Dedicated Magnetic Box Solutions by Industry</h2>
            <p>Explore specialized magnetic box configurations tailored for perfume, cosmetics and jewelry collections.</p>
          </div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {magneticSolutions.map((sol) => (
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

      {/* Technical details */}
      <section className="mrb-section">
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

      {/* Capability Projects */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">FEATURED CASE STUDIES</span>
            <h2>Magnetic Box Capability Projects</h2>
            <p>Explore real capability-based packaging case studies developed for luxury gifting and skincare.</p>
          </div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
            {magneticProjects.map((p) => (
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

      {/* Details gallery */}
      <section className="mrb-section dark" id="details">
        <div className="container">
          <div className="mrb-head">
            <span className="mrb-eyebrow">PACKAGING STYLE REFERENCES</span>
            <h2>Explore Box Details</h2>
            <p>
              Packaging style references for structure, finishing, inserts and premium applications. Real sample imagery is identified in the dedicated sample section above.
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

      {/* Applications */}
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

      {/* Manufacturing stats */}
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

      {/* Real production video */}
      <section className="mrb-section dark">
        <div className="container mrb-video-grid">
          <div>
            <span className="mrb-eyebrow">REAL PRODUCTION</span>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 3.4vw, 40px)", fontWeight: 500, lineHeight: 1.12, margin: "14px 0 12px" }}>
              From Design to Production
            </h2>
            <p style={{ color: "#c5c5c5", lineHeight: 1.65 }}>
              Material preparation, printing, box forming, assembly and quality
              control are coordinated through the production process.
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

      {/* FAQ */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">BUYER FAQ</span>
            <h2>Magnetic Rigid Box Buying Questions</h2>
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
        title="Magnetic Rigid Box Buyer Guides & Resources"
        subtitle="Explore practical advice on greyboard thickness, box structures, custom inserts and cost drivers."
        guides={[
          {
            tag: "Box Structures",
            title: "Rigid Box Structure Guide: Magnetic vs Drawer vs Two-Piece",
            desc: "Compare magnetic rigid boxes, drawer boxes and two-piece rigid boxes by opening experience, presentation and packing efficiency.",
            href: "/resources/rigid-box-structure-guide-magnetic-vs-drawer-vs-two-piece/",
          },
          {
            tag: "Board Caliper",
            title: "Rigid Greyboard Thickness Guide for Custom Boxes",
            desc: "A buyer guide to selecting greyboard thickness according to box dimensions, product weight and structural requirements.",
            href: "/resources/rigid-greyboard-thickness-guide-custom-boxes/",
          },
          {
            tag: "Packaging Inserts",
            title: "EVA vs Paperboard vs Molded Pulp Packaging Inserts",
            desc: "Compare protection, presentation and sustainability differences across insert materials.",
            href: "/resources/packaging-inserts-eva-vs-paperboard-vs-molded-pulp/",
          },
          {
            tag: "Foldable Option",
            title: "Foldable vs Traditional Rigid Boxes",
            desc: "Understand how suitable foldable magnetic rigid box structures can improve packing efficiency for selected export projects.",
            href: "/resources/foldable-vs-traditional-rigid-box/",
          },
        ]}
      />

      {/* Quote */}
      <section className="mrb-quote" id="quote">
        <div className="container mrb-quote-grid">
          <div>
            <span className="mrb-eyebrow">START A PROJECT</span>
            <h2>Request A Custom Magnetic Box Quote</h2>
            <p style={{ color: "#c5c5c5", lineHeight: 1.7, margin: "12px 0 16px" }}>
              Send us your product size, target quantity, material preferences and destination.
              Our packaging specialists will provide dielines, material recommendations and quotation.
            </p>
            <div className="mrb-contact">
              <div className="mrb-contact-note">
                <b>WhatsApp</b>
                <a href={waLink(WA_MESSAGES.magnetic)} target="_blank" rel="noopener">
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
          <div className="mrb-head center"><span className="eyebrow dark">MAGNETIC BOX BUYER RESOURCES</span><h2>Compare Applications, Inserts and Finishes</h2><p>Use these guides to prepare product dimensions, choose insert materials and review branding options before requesting a quote.</p><div className="mrb-hero-actions" style={{ justifyContent: "center" }}><a className="btn ghost" href="/industries/perfume-packaging/">Perfume Packaging →</a><a className="btn ghost" href="/industries/cosmetic-packaging/">Cosmetics Packaging →</a><a className="btn ghost" href="/industries/jewelry-packaging/">Jewelry Packaging →</a><a className="btn ghost" href="/industries/corporate-gift-packaging/">Corporate Gifts →</a><a className="btn ghost" href="/resources/how-to-measure-product-for-custom-box-packaging/">Product Measurement Guide →</a><a className="btn ghost" href="/resources/packaging-inserts-eva-vs-paperboard-vs-molded-pulp/">Insert Materials Guide →</a><a className="btn ghost" href="/resources/foil-stamping-vs-embossing-vs-spot-uv/">Finishing Guide →</a><a className="btn ghost" href="/resources/pantone-vs-cmyk-custom-packaging/">Pantone vs CMYK Guide →</a><a className="btn gold" href="/rfq/">Request an RFQ →</a></div></div>
        </div>
      </section>
      <ProductCrossLinks industryHref="/industries/cosmetic-packaging/" industryLabel="Cosmetic Packaging" />
    </main>
  );
}
