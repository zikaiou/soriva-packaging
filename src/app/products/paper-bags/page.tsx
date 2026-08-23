/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../product-page.css";

const PAGE_URL = "https://sorivapackaging.com/products/paper-bags/";

export const metadata: Metadata = {
  title: "Custom Luxury Paper Bags",
  description:
    "Custom luxury paper bags with rope or ribbon handles, lamination, spot UV and foil accents. Branded retail bags that complete your premium packaging system.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Custom Luxury Paper Bags | SORIVA Packaging",
    description:
      "Branded retail paper bags with premium handles, lamination and foil accents. OEM packaging for fashion, retail and gifting brands.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
    images: [
      {
        url: "https://sorivapackaging.com/img/paper-bags.webp",
        width: 1200,
        height: 900,
        alt: "Custom luxury paper bags",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Custom Luxury Paper Bags",
      description:
        "Custom luxury paper bags with rope or ribbon handles, gloss or matte lamination, spot UV and foil accents for retail and gifting brands.",
      image: "https://sorivapackaging.com/img/paper-bags.webp",
      brand: { "@type": "Brand", name: "SORIVA Packaging" },
      category: "Custom Luxury Packaging",
      material: "Paper, specialty board",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sorivapackaging.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Custom Luxury Paper Bags",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

const features = [
  {
    num: "01",
    title: "Rope & Ribbon Handles",
    desc: "Twisted paper rope or satin ribbon handles with reinforced attachment points.",
  },
  {
    num: "02",
    title: "Lamination Options",
    desc: "Gloss or matte lamination for a polished surface and consistent brand color.",
  },
  {
    num: "03",
    title: "Spot UV & Foil Accents",
    desc: "Selective gloss and metallic foil details that make branding stand out.",
  },
  {
    num: "04",
    title: "Reinforced Base",
    desc: "Heavyweight board base that keeps the bag stable when carrying heavier items.",
  },
];

const details = [
  {
    img: "/img/foil-clean.webp",
    alt: "Gold foil stamping on paper bag",
    caption: "Gold Foil Stamping",
  },
  {
    img: "/img/texture-clean.webp",
    alt: "Textured paper finish on paper bag",
    caption: "Textured Paper",
  },
  {
    img: "/img/ribbon-clean.webp",
    alt: "Satin ribbon handle detail",
    caption: "Ribbon & Accessories",
  },
];

const applications = [
  {
    img: "/img/fashion.webp",
    alt: "Fashion and apparel packaging",
    title: "Fashion & Apparel",
    desc: "Premium bags for garments, scarves and retail presentation.",
  },
  {
    img: "/img/corporate.webp",
    alt: "Corporate gift packaging",
    title: "Corporate Gifts",
    desc: "Branded bags for campaigns, events and client gifting.",
  },
  {
    img: "/img/cosmetics.webp",
    alt: "Cosmetics and skincare packaging",
    title: "Cosmetics & Skincare",
    desc: "Retail bags for beauty products and store presentation.",
  },
  {
    img: "/img/jewelry.webp",
    alt: "Jewelry and watches packaging",
    title: "Jewelry & Watches",
    desc: "Compact bags for boutique and retail jewelry sales.",
  },
];

const customOptions = [
  "Custom size & structure",
  "Specialty paper options",
  "Full-color printing",
  "Handle options",
  "Foil stamping",
  "Spot UV coating",
  "Tissue paper & accessories",
  "Logo & artwork development",
];

const processSteps = [
  "Material Preparation",
  "Bag Forming",
  "Printing & Finishing",
  "Assembly",
  "Quality Inspection",
  "Global Delivery",
];

export default function PaperBagsPage() {
  return (
    <main className="mrb-page">
      <section className="mrb-hero">
        <div className="container">
          <nav className="mrb-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a> / Products / Luxury Paper Bags
          </nav>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">CUSTOM PACKAGING SOLUTIONS</span>
              <h1>Custom Luxury Paper Bags</h1>
              <p className="mrb-subtitle">
                Branded Retail Bags That Complete Your Packaging System
              </p>
              <p className="mrb-lead">
                Premium paper bags with rope or ribbon handles, lamination,
                spot UV and foil accents — designed to carry your brand out
                the door and into your customers' hands.
              </p>
              <div className="mrb-hero-actions">
                <a href="#quote" className="btn gold">
                  Get a Quote
                </a>
                <a
                  href={waLink(WA_MESSAGES.paperBags)}
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
                src="/img/paper-bags.webp"
                alt="Custom luxury paper bags with branded handles"
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
            <h2>Paper Bag Solutions</h2>
            <p>
              Branded retail bags built to complement your packaging range.
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
            <h2>Explore Paper Bag Details</h2>
            <p>
              Finishing and material options that define the look and feel of
              the finished bag.
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
            <h2>Perfect For Retail & Gifting</h2>
            <p>
              Paper bags are widely used across retail and gifting categories.
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
              paper, printing, handles, foil stamping, spot UV and accessories.
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
            <h2>Ready to Create Your Custom Paper Bags?</h2>
            <p>
              Tell us your product, approximate quantity and packaging idea.
              The form will prepare a WhatsApp inquiry so you can send the full
              project details directly.
            </p>
            <div className="mrb-contact">
              <div className="mrb-contact-note">
                <b>WhatsApp</b>
                <a href={waLink(WA_MESSAGES.paperBags)} target="_blank" rel="noopener">
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
