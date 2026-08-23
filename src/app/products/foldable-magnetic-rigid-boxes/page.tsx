/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../product-page.css";

const PAGE_URL =
  "https://sorivapackaging.com/products/foldable-magnetic-rigid-boxes/";

export const metadata: Metadata = {
  title: "Custom Foldable Magnetic Rigid Boxes",
  description:
    "Custom foldable magnetic rigid boxes that ship flat to cut freight and storage costs by up to 60%. Luxury presentation with tool-free assembly for cosmetics, candles, jewelry and corporate gifts.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Custom Foldable Magnetic Rigid Boxes | SORIVA Packaging",
    description:
      "Flat-shipping foldable magnetic boxes with luxury finishes. Reduced freight, premium unboxing. OEM packaging for growing brands.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
    images: [
      {
        url: "https://sorivapackaging.com/img/foldable-rigid.webp",
        width: 1200,
        height: 900,
        alt: "Custom foldable magnetic rigid box",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Custom Foldable Magnetic Rigid Boxes",
      description:
        "Foldable magnetic rigid boxes that ship flat to reduce freight and storage cost, with tool-free assembly and luxury finishing options.",
      image: "https://sorivapackaging.com/img/foldable-rigid.webp",
      brand: { "@type": "Brand", name: "SORIVA Packaging" },
      category: "Custom Luxury Packaging",
      material: "Rigid board, specialty paper",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sorivapackaging.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Custom Foldable Magnetic Rigid Boxes",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

const features = [
  {
    num: "01",
    title: "Ships Flat",
    desc: "Collapsible structure reduces freight and storage volume by up to 60% compared with pre-assembled rigid boxes.",
  },
  {
    num: "02",
    title: "Tool-Free Assembly",
    desc: "Unfold and press the corner tabs — the box takes its rigid shape in seconds, no tools required.",
  },
  {
    num: "03",
    title: "Magnetic Closure",
    desc: "Hidden magnets create a secure, premium close that protects contents and elevates the unboxing moment.",
  },
  {
    num: "04",
    title: "Luxury Finishes",
    desc: "Foil stamping, textured paper and satin ribbons deliver the same premium look as a rigid box.",
  },
];

const details = [
  {
    img: "/img/texture-clean.webp",
    alt: "Textured paper finish on foldable box",
    caption: "Textured Paper",
  },
  {
    img: "/img/foil-clean.webp",
    alt: "Gold foil stamping on foldable box",
    caption: "Gold Foil Stamping",
  },
  {
    img: "/img/ribbon-clean.webp",
    alt: "Satin ribbon closure on foldable box",
    caption: "Ribbon & Accessories",
  },
];

const applications = [
  {
    img: "/img/candles.webp",
    alt: "Candle gift packaging in foldable box",
    title: "Candle Packaging",
    desc: "Protective formats for candle jars and home fragrance.",
  },
  {
    img: "/img/cosmetics.webp",
    alt: "Cosmetics and skincare packaging",
    title: "Cosmetics & Skincare",
    desc: "Refined boxes for serums, creams and skincare kits.",
  },
  {
    img: "/img/corporate.webp",
    alt: "Corporate gift packaging",
    title: "Corporate Gifts",
    desc: "Gift set packaging for campaigns and events.",
  },
  {
    img: "/img/jewelry.webp",
    alt: "Jewelry and watches packaging",
    title: "Jewelry & Watches",
    desc: "Compact rigid structures for premium accessories.",
  },
];

const customOptions = [
  "Custom size & structure",
  "Specialty paper options",
  "Full-color printing",
  "Custom inserts",
  "Foil stamping",
  "Embossing / debossing",
  "Ribbons & accessories",
  "Logo & artwork development",
];

const processSteps = [
  "Material Preparation",
  "Box Forming",
  "Printing & Finishing",
  "Assembly",
  "Quality Inspection",
  "Global Delivery",
];

export default function FoldableRigidBoxesPage() {
  return (
    <main className="mrb-page">
      <section className="mrb-hero">
        <div className="container">
          <nav className="mrb-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a> / Products / Foldable Magnetic Rigid Boxes
          </nav>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">CUSTOM PACKAGING SOLUTIONS</span>
              <h1>Custom Foldable Magnetic Rigid Boxes</h1>
              <p className="mrb-subtitle">
                Premium Presentation with Space-Saving Logistics
              </p>
              <p className="mrb-lead">
                Combine the premium look of a rigid box with flat-shipping
                logistics. Foldable magnetic boxes reduce freight and storage
                cost while keeping the unboxing experience intact.
              </p>
              <div className="mrb-hero-actions">
                <a href="#quote" className="btn gold">
                  Get a Quote
                </a>
                <a
                  href={waLink(WA_MESSAGES.foldable)}
                  target="_blank"
                  rel="noopener"
                  className="btn-wa"
                >
                  <WhatsAppIcon /> Chat on WhatsApp
                </a>
                <a href="#details" className="btn ghost">
                  Explore Details
                </a>
              </div>
            </div>
            <div className="mrb-hero-media">
              <img
                src="/img/foldable-rigid.webp"
                alt="Custom foldable magnetic rigid box with luxury finish"
                width="1200"
                height="900"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">PREMIUM FEATURES</span>
            <h2>Foldable Box Solutions</h2>
            <p>
              The premium rigid look with practical, cost-saving logistics.
            </p>
          </div>
          <div className="mrb-features">
            {features.map((f) => (
              <article className="mrb-feature" key={f.num}>
                <strong>{f.num}</strong>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mrb-section dark" id="details">
        <div className="container">
          <div className="mrb-head">
            <span className="mrb-eyebrow">PRODUCT DETAILS</span>
            <h2>Explore Foldable Box Details</h2>
            <p>
              Finishing and material options that define the look and feel of
              the finished box.
            </p>
          </div>
          <div className="mrb-gallery">
            {details.map((d) => (
              <figure key={d.caption}>
                <img src={d.img} alt={d.alt} />
                <figcaption>{d.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">APPLICATIONS</span>
            <h2>Perfect For Premium Products</h2>
            <p>Ideal for brands that ship regularly and value logistics.</p>
          </div>
          <div className="mrb-industries">
            {applications.map((a) => (
              <article className="mrb-industry" key={a.title}>
                <img src={a.img} alt={a.alt} />
                <div className="mrb-industry-copy">
                  <b>{a.title}</b>
                  <span>{a.desc}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mrb-section">
        <div className="container mrb-custom">
          <div className="mrb-head">
            <span className="eyebrow dark">FULL CUSTOMIZATION</span>
            <h2>Made to Your Specification</h2>
            <p>
              Every element can be developed around your brand — custom size,
              paper, printing, inserts, foil stamping, embossing and
              accessories.
            </p>
            <a className="btn gold" href="#quote" style={{ marginTop: 8 }}>
              Discuss Your Project
            </a>
          </div>
          <ul>
            {customOptions.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mrb-section dark">
        <div className="container">
          <div className="mrb-head">
            <span className="mrb-eyebrow">PRODUCTION</span>
            <h2>From Design to Production</h2>
            <p>
              A controlled workflow from material preparation through final
              quality inspection and global delivery.
            </p>
          </div>
          <div className="mrb-process">
            {processSteps.map((s, i) => (
              <div className="mrb-step" key={s}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <b>{s}</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mrb-quote" id="quote">
        <div className="container mrb-quote-grid">
          <div>
            <span className="mrb-eyebrow">START A PROJECT</span>
            <h2>Ready to Create Your Foldable Magnetic Rigid Box?</h2>
            <p>
              Tell us your product, approximate quantity and packaging idea.
              The form will prepare a WhatsApp inquiry so you can send the full
              project details directly.
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
            <a className="mrb-back" href="/">
              ← Back to homepage
            </a>
          </div>
          <QuoteForm />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  );
}
