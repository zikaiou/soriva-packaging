/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import "./styles.css";

const PAGE_URL = "https://sorivapackaging.com/products/magnetic-rigid-boxes/";

export const metadata: Metadata = {
  title: "Custom Magnetic Rigid Boxes",
  description:
    "Custom magnetic rigid boxes with strong closure, rigid board construction, custom inserts and luxury finishes. Premium packaging for cosmetics, perfume, jewelry and corporate gifts. Flexible MOQ and worldwide shipping.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Custom Magnetic Rigid Boxes | SORIVA Packaging",
    description:
      "Luxury magnetic rigid boxes with premium materials, refined finishes and tailored inserts. OEM packaging for cosmetics, perfume, jewelry and corporate gifts.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
    images: [
      {
        url: "https://sorivapackaging.com/img/magnetic-rigid.webp",
        width: 1200,
        height: 900,
        alt: "Custom magnetic rigid box",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Custom Magnetic Rigid Boxes",
      description:
        "Custom magnetic rigid boxes with strong magnetic closure, rigid board construction, custom inserts and luxury finishes. Available for cosmetics, perfume, jewelry and corporate gift packaging.",
      image: "https://sorivapackaging.com/img/magnetic-rigid.webp",
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
          name: "Custom Magnetic Rigid Boxes",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

const features = [
  {
    num: "01",
    title: "Strong Magnetic Closure",
    desc: "Integrated magnets create a secure, satisfying close that protects contents during handling and transit.",
  },
  {
    num: "02",
    title: "Rigid Board Construction",
    desc: "Durable board construction gives the box structure and weight, reinforcing the premium feel of your product.",
  },
  {
    num: "03",
    title: "Custom Inserts",
    desc: "Paper, EVA or velvet inserts tailored to hold your product precisely in place.",
  },
  {
    num: "04",
    title: "Luxury Finishes",
    desc: "Foil stamping, embossing, textured paper and premium edge finishing for a distinctive presentation.",
  },
];

const details = [
  {
    img: "/img/foil-clean.webp",
    alt: "Gold foil stamping on magnetic rigid box",
    caption: "Gold Foil Stamping",
  },
  {
    img: "/img/emboss-clean.webp",
    alt: "Embossed logo detail on rigid box",
    caption: "Embossing / Debossing",
  },
  {
    img: "/img/insert-clean.webp",
    alt: "Custom insert inside magnetic rigid box",
    caption: "Custom Inserts",
  },
];

const applications = [
  {
    img: "/img/cosmetics.webp",
    alt: "Cosmetics and skincare magnetic rigid box",
    title: "Cosmetics Packaging",
    desc: "Refined boxes for serums, creams and skincare kits.",
  },
  {
    img: "/img/perfume.webp",
    alt: "Perfume packaging with custom insert",
    title: "Perfume Packaging",
    desc: "Presentation boxes with inserts for bottles and fragrance sets.",
  },
  {
    img: "/img/jewelry.webp",
    alt: "Jewelry and watches packaging",
    title: "Jewelry Packaging",
    desc: "Compact rigid structures for rings, necklaces and accessories.",
  },
  {
    img: "/img/corporate.webp",
    alt: "Corporate gift packaging",
    title: "Corporate Gift Packaging",
    desc: "Gift set packaging for campaigns, events and executive presents.",
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

export default function MagneticRigidBoxesPage() {
  return (
    <main className="mrb-page">
      {/* Hero */}
      <section className="mrb-hero">
        <div className="container">
          <nav className="mrb-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a> / Products / Magnetic Rigid Boxes
          </nav>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">CUSTOM PACKAGING SOLUTIONS</span>
              <h1>Custom Magnetic Rigid Boxes</h1>
              <p className="mrb-subtitle">
                Luxury Packaging Designed for Premium Brands
              </p>
              <p className="mrb-lead">
                Create exceptional unboxing experiences with custom magnetic
                rigid boxes featuring premium materials, refined finishes and
                tailored inserts.
              </p>
              <div className="mrb-hero-actions">
                <a href="#quote" className="btn gold">
                  Get a Quote
                </a>
                <a href="#details" className="btn ghost">
                  Explore Details
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

      {/* Features */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">PREMIUM FEATURES</span>
            <h2>Premium Magnetic Rigid Box Solutions</h2>
            <p>
              Engineered structure, refined materials and tailored finishing
              built around your product.
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

      {/* Details gallery */}
      <section className="mrb-section dark" id="details">
        <div className="container">
          <div className="mrb-head">
            <span className="mrb-eyebrow">PRODUCT DETAILS</span>
            <h2>Explore Magnetic Rigid Box Details</h2>
            <p>
              Finishing and insert options that define the look and feel of the
              finished box.
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

      {/* Applications */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">APPLICATIONS</span>
            <h2>Perfect For Premium Products</h2>
            <p>
              Magnetic rigid boxes are widely used across premium categories.
            </p>
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

      {/* Customization */}
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

      {/* Process */}
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

      {/* Quote */}
      <section className="mrb-quote" id="quote">
        <div className="container mrb-quote-grid">
          <div>
            <span className="mrb-eyebrow">START A PROJECT</span>
            <h2>Ready to Create Your Custom Magnetic Rigid Box?</h2>
            <p>
              Tell us your product, approximate quantity and packaging idea.
              The form will prepare a WhatsApp inquiry so you can send the full
              project details directly.
            </p>
            <div className="mrb-contact">
              <div className="mrb-contact-note">
                <b>WhatsApp</b>
                <a
                  href="https://wa.me/8615913881634"
                  target="_blank"
                  rel="noopener"
                >
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
