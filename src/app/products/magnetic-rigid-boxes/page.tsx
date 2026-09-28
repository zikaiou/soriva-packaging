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
    "Custom magnetic rigid boxes with hidden magnetic closures, premium paper wraps, bespoke inserts and luxury finishes. MOQ from 100 pcs, 1 pc prototype and global export.",
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
    desc: "Durable high-density greyboard structure designed for a solid, prestigious hand feel.",
  },
  {
    title: "Custom Size & Structure",
    desc: "Book-style, front-flap and collapsible foldable structures tailored around your product.",
  },
  {
    title: "Precision Inserts",
    desc: "Custom-cut EVA foam, velvet-flocked trays, structured paperboard or molded pulp.",
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
    desc: "Heavyweight bottle protection, concealed neodymium magnets and custom velvet-flocked EVA inserts for fragrance collections.",
    href: "/solutions/magnetic-rigid-boxes-for-perfume/",
  },
  {
    tag: "COSMETICS & BEAUTY",
    title: "Magnetic Gift Boxes for Cosmetics",
    desc: "Multi-product cavity organization, soft-touch velvet finish and foldable flat-shipping options for skincare sets.",
    href: "/solutions/magnetic-gift-boxes-for-cosmetics/",
  },
  {
    tag: "JEWELRY & ACCESSORIES",
    title: "Magnetic Rigid Boxes for Jewelry",
    desc: "Compact luxury proportions, anti-tarnish velvet linings, custom ring slits and quiet magnetic closures.",
    href: "/solutions/magnetic-rigid-boxes-for-jewelry/",
  },
];

const magneticProjects = [
  {
    tag: "CAPABILITY CASE STUDY",
    title: "Premium Magnetic Gift Box Project",
    desc: "Book-style front-opening rigid box with 2.0mm greyboard, concealed neodymium magnets and metallic gold foil.",
    href: "/projects/premium-magnetic-gift-box-project/",
  },
  {
    tag: "SKINCARE CASE STUDY",
    title: "Cosmetic Magnetic Packaging Project",
    desc: "Foldable magnetic rigid box with multi-cavity bottle insert, rose gold foil and 80% export volume savings.",
    href: "/projects/cosmetic-magnetic-packaging-project/",
  },
];

const specs = [
  { label: "Product Type", value: "Custom Magnetic Rigid Boxes" },
  { label: "Core Material", value: "1.5mm–3.0mm Rigid Greyboard + Custom Wrapping Paper" },
  {
    label: "Surface Options",
    value: "Coated Art Paper / Specialty Textured Paper / Black Card / Metallic Card",
  },
  { label: "Printing", value: "CMYK Full-Color / Pantone (PMS) Spot Color Matching" },
  {
    label: "Finishing",
    value: "Gold/Silver Hot Foil / 3D Embossing / Debossing / Spot UV / Soft-Touch Lamination",
  },
  { label: "Insert Options", value: "High-Density EVA / Velvet / Paperboard / Molded Pulp" },
  { label: "MOQ", value: "From 100 pcs, subject to project specification" },
  { label: "Prototype", value: "1 pc prototype sample available" },
  {
    label: "Lead Time",
    value: "Lead time depends on design complexity, quantity, materials and finishing requirements.",
  },
];

const structure = [
  "Premium wrapping paper surface (Art / Specialty / Textured)",
  "Rigid greyboard core (1.5mm to 3.0mm caliper)",
  "Precision V-grooved sharp corner edges",
  "Concealed high-strength neodymium magnets",
  "Custom-engineered product cavity insert",
];

const details = [
  { img: "/img/magnetic-rigid.webp", caption: "Open Box Presentation" },
  { img: "/img/foil-clean.webp", caption: "Gold Foil & Branding" },
  { img: "/img/emboss-clean.webp", caption: "Embossing / Debossing" },
  { img: "/img/insert-clean.webp", caption: "Custom Product Insert" },
  { img: "/img/project-perfume.webp", caption: "Premium Perfume Project", href: "/projects/premium-perfume-packaging/" },
  { img: "/img/project-skincare.webp", caption: "Skincare Gift Set", href: "/projects/luxury-skincare-gift-box/" },
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
  { title: "100% Inspection", sub: "QC & export carton packing" },
];

const faqs = [
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
    a: "We offer high-density EVA foam (with or without velvet flocking), structured paperboard dividers, wet-press molded pulp trays, thermoformed blister trays and satin-lined cushions.",
  },
  {
    q: "How strong are the concealed magnetic closures?",
    a: "We embed high-grade neodymium magnets (N35/N38) calibrated to the size and weight of the box. They provide a firm, reliable snap that stays securely closed during transit and handling.",
  },
  {
    q: "Can I order a physical sample before mass production?",
    a: "Yes. 1 pc custom prototype sample complete with custom insert, foil stamping and print colors is available for review and sign-off before commencing bulk manufacturing.",
  },
  {
    q: "Do you offer foldable magnetic box options for export shipping?",
    a: "Yes. Our foldable magnetic rigid boxes ship completely flat to save up to 80% container volume, reducing international freight costs while maintaining rigid box luxury upon assembly.",
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
        "Custom magnetic rigid boxes with hidden magnetic closures, premium paper wraps, bespoke inserts and luxury finishes.",
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
                Premium custom magnetic rigid boxes engineered with high-density greyboard,
                concealed neodymium magnets, precision-cut inserts and bespoke finishes for
                cosmetics, fragrance, jewelry and luxury gifting brands.
              </p>
              <div className="mrb-tags">
                <span>MOQ From 100 pcs</span>
                <span>Concealed Neodymium Magnets</span>
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
            desc: "A buyer guide to choosing greyboard thickness from 1.5mm to 3.0mm based on box size and product weight.",
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
            desc: "Understand how foldable magnetic rigid boxes optimize storage space and international shipping costs.",
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

      <ProductCrossLinks industryHref="/industries/cosmetic-packaging/" industryLabel="Cosmetic Packaging" />
    </main>
  );
}
