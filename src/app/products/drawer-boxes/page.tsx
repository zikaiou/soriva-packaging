/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../product-page.css";

const PAGE_URL = "https://sorivapackaging.com/products/drawer-boxes/";

export const metadata: Metadata = {
  title: "Custom Drawer Boxes",
  description:
    "Custom drawer boxes with smooth sliding action, rigid construction and tailored inserts. Elegant packaging for jewelry, perfume, cosmetics and corporate gifts.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Custom Drawer Boxes | SORIVA Packaging",
    description:
      "Elegant sliding drawer boxes with premium finishes and custom inserts. OEM packaging for jewelry, beauty and fragrance brands.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
    images: [
      {
        url: "https://sorivapackaging.com/img/drawer-box.webp",
        width: 1200,
        height: 900,
        alt: "Custom drawer packaging box",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Custom Drawer Boxes",
      description:
        "Custom drawer boxes with smooth sliding action, rigid construction, custom inserts and luxury finishing for jewelry, perfume, cosmetics and corporate gifts.",
      image: "https://sorivapackaging.com/img/drawer-box.webp",
      brand: { "@type": "Brand", name: "SORIVA Packaging" },
      category: "Custom Luxury Packaging",
      material: "Rigid board, specialty paper",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sorivapackaging.com/" },
        { "@type": "ListItem", position: 2, name: "Custom Drawer Boxes", item: PAGE_URL },
      ],
    },
  ],
};

const features = [
  {
    num: "01",
    title: "Smooth Drawer Action",
    desc: "Precision-fit sliding drawer glides smoothly, creating a memorable reveal moment.",
  },
  {
    num: "02",
    title: "Rigid Box Structure",
    desc: "Durable board construction protects contents and reinforces the premium feel.",
  },
  {
    num: "03",
    title: "Custom Inserts",
    desc: "Paper, EVA or velvet inserts tailored to hold your product precisely in place.",
  },
  {
    num: "04",
    title: "Luxury Finishes",
    desc: "Foil stamping, embossing, textured paper and premium edge finishing.",
  },
];

const details = [
  {
    img: "/img/insert-clean.webp",
    alt: "Custom insert inside drawer box",
    caption: "Custom Inserts",
  },
  {
    img: "/img/foil-clean.webp",
    alt: "Gold foil stamping on drawer box",
    caption: "Gold Foil Stamping",
  },
  {
    img: "/img/edge-clean.webp",
    alt: "Premium edge finish on drawer box",
    caption: "Premium Edge Finish",
  },
];

const applications = [
  {
    img: "/img/jewelry.webp",
    alt: "Jewelry and watches packaging",
    title: "Jewelry & Watches",
    desc: "Compact rigid structures for rings, necklaces and accessories.",
  },
  {
    img: "/img/perfume.webp",
    alt: "Perfume and fragrance packaging",
    title: "Perfume & Fragrance",
    desc: "Presentation boxes for bottles and fragrance sets.",
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

export default function DrawerBoxesPage() {
  return (
    <main className="mrb-page">
      <section className="mrb-hero">
        <div className="container">
          <nav className="mrb-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a> / Products / Drawer Boxes
          </nav>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">CUSTOM PACKAGING SOLUTIONS</span>
              <h1>Custom Drawer Boxes</h1>
              <p className="mrb-subtitle">
                Elegant Sliding Presentation for Premium Products
              </p>
              <p className="mrb-lead">
                A smooth sliding drawer that reveals your product with
                intention. Drawer boxes combine rigid construction, tailored
                inserts and refined finishes for a premium unboxing
                experience.
              </p>
              <div className="mrb-hero-actions">
                <a href="#quote" className="btn gold">
                  Get a Quote
                </a>
                <a
                  href={waLink(WA_MESSAGES.drawer)}
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
                src="/img/drawer-box.webp"
                alt="Custom drawer packaging box with luxury finish"
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
            <h2>Drawer Box Solutions</h2>
            <p>
              A refined reveal, engineered structure and tailored finishing.
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
            <h2>Explore Drawer Box Details</h2>
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

      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">APPLICATIONS</span>
            <h2>Perfect For Premium Products</h2>
            <p>
              Drawer boxes are widely used across premium categories.
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
            <h2>Ready to Create Your Custom Drawer Box?</h2>
            <p>
              Tell us your product, approximate quantity and packaging idea.
              The form will prepare a WhatsApp inquiry so you can send the full
              project details directly.
            </p>
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
