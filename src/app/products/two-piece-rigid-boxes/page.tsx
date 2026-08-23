/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../product-page.css";

const PAGE_URL = "https://sorivapackaging.com/products/two-piece-rigid-boxes/";

export const metadata: Metadata = {
  title: "Custom Two-Piece Rigid Boxes",
  description:
    "Custom two-piece rigid boxes with classic lid-and-base construction, heavyweight board and premium wrapping. Timeless presentation for cosmetics, perfume, jewelry and corporate gifts.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Custom Two-Piece Rigid Boxes | SORIVA Packaging",
    description:
      "Classic lid-and-base rigid presentation boxes with premium finishes and custom inserts. OEM packaging for luxury brands.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
    images: [
      {
        url: "https://sorivapackaging.com/img/two-piece-rigid.webp",
        width: 1200,
        height: 900,
        alt: "Two piece rigid gift box",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Custom Two-Piece Rigid Boxes",
      description:
        "Classic lid-and-base rigid boxes with heavyweight board, premium paper wrapping, custom inserts and luxury finishes.",
      image: "https://sorivapackaging.com/img/two-piece-rigid.webp",
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
          name: "Custom Two-Piece Rigid Boxes",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

const features = [
  {
    num: "01",
    title: "Lid & Base Construction",
    desc: "Classic two-piece structure that separates cleanly for a timeless presentation.",
  },
  {
    num: "02",
    title: "Heavyweight Board",
    desc: "Durable rigid board gives the box structure, weight and a substantial premium feel.",
  },
  {
    num: "03",
    title: "Premium Paper Wrapping",
    desc: "Wrapped in specialty paper, velvet or linen textures for a refined surface finish.",
  },
  {
    num: "04",
    title: "Custom Inserts",
    desc: "Paper, EVA or velvet inserts tailored to hold your product precisely in place.",
  },
];

const details = [
  {
    img: "/img/foil-clean.webp",
    alt: "Gold foil stamping on rigid box",
    caption: "Gold Foil Stamping",
  },
  {
    img: "/img/emboss-clean.webp",
    alt: "Embossed logo detail on rigid box",
    caption: "Embossing / Debossing",
  },
  {
    img: "/img/edge-clean.webp",
    alt: "Premium edge finish on rigid box",
    caption: "Premium Edge Finish",
  },
];

const applications = [
  {
    img: "/img/cosmetics.webp",
    alt: "Cosmetics and skincare packaging",
    title: "Cosmetics & Skincare",
    desc: "Refined boxes for serums, creams and skincare kits.",
  },
  {
    img: "/img/perfume.webp",
    alt: "Perfume and fragrance packaging",
    title: "Perfume & Fragrance",
    desc: "Presentation boxes for bottles and fragrance sets.",
  },
  {
    img: "/img/jewelry.webp",
    alt: "Jewelry and watches packaging",
    title: "Jewelry & Watches",
    desc: "Compact rigid structures for rings, necklaces and accessories.",
  },
  {
    img: "/img/corporate.webp",
    alt: "Corporate gift packaging",
    title: "Corporate Gifts",
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

export default function TwoPieceRigidBoxesPage() {
  return (
    <main className="mrb-page">
      <section className="mrb-hero">
        <div className="container">
          <nav className="mrb-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a> / Products / Two-Piece Rigid Boxes
          </nav>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">CUSTOM PACKAGING SOLUTIONS</span>
              <h1>Custom Two-Piece Rigid Boxes</h1>
              <p className="mrb-subtitle">
                Classic Lid-and-Base Presentation
              </p>
              <p className="mrb-lead">
                The timeless lid-and-base rigid box — heavyweight board,
                premium wrapping and refined finishing. A clean, structural
                presentation that lets the product and the brand speak.
              </p>
              <div className="mrb-hero-actions">
                <a href="#quote" className="btn gold">
                  Get a Quote
                </a>
                <a
                  href={waLink(WA_MESSAGES.twoPiece)}
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
                src="/img/two-piece-rigid.webp"
                alt="Custom two piece rigid gift box with luxury finish"
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
            <h2>Two-Piece Rigid Box Solutions</h2>
            <p>
              Structural elegance, premium materials and tailored finishing.
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
            <h2>Explore Two-Piece Rigid Box Details</h2>
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
            <p>
              Two-piece rigid boxes are widely used across premium categories.
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
            <h2>Ready to Create Your Custom Two-Piece Rigid Box?</h2>
            <p>
              Tell us your product, approximate quantity and packaging idea.
              The form will prepare a WhatsApp inquiry so you can send the full
              project details directly.
            </p>
            <div className="mrb-contact">
              <div className="mrb-contact-note">
                <b>WhatsApp</b>
                <a href={waLink(WA_MESSAGES.twoPiece)} target="_blank" rel="noopener">
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
