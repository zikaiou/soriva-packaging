/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../lib/whatsapp";
import "../products/product-page.css";

const PAGE_URL = "https://www.sorivapackaging.com/resources/";

export const metadata: Metadata = {
  title: "Packaging Resources & Buyer Guides",
  description:
    "Buyer guides about custom rigid boxes, foldable packaging and luxury cosmetic packaging from SORIVA Packaging.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Packaging Resources & Buyer Guides | SORIVA Packaging",
    description:
      "Practical guides to compare box structures, materials, inserts, finishes, sampling and production options.",
  },
};

const guides = [
  {
    tag: "Rigid Boxes",
    title: "What Is a Magnetic Rigid Box?",
    desc: "Learn how magnetic rigid boxes are built, what products they suit, and which finishes and inserts can be customized.",
    href: "/resources/magnetic-rigid-box-guide/",
  },
  {
    tag: "Foldable Packaging",
    title: "Foldable vs Traditional Rigid Boxes",
    desc: "Compare presentation, storage, export packing and assembly considerations before choosing a structure.",
    href: "/resources/foldable-vs-traditional-rigid-box/",
  },
  {
    tag: "Beauty Packaging",
    title: "How to Choose Cosmetic Packaging",
    desc: "A practical overview of box structures, inserts, finishes, MOQ and sampling for skincare and beauty brands.",
    href: "/resources/cosmetic-packaging-guide/",
  },
  {
    tag: "MOQ & Ordering",
    title: "Custom Packaging MOQ: What Buyers Should Know",
    desc: "Understand minimum order quantities, what affects MOQ, and how brands can plan small and large production runs.",
    href: "/resources/custom-packaging-moq-guide/",
  },
  {
    tag: "Pricing",
    title: "How Much Does Custom Luxury Packaging Cost?",
    desc: "Learn the main factors that affect custom rigid box pricing, including structure, materials, inserts, finishes, quantity and shipping.",
    href: "/resources/custom-packaging-cost-guide/",
  },
  {
    tag: "Materials",
    title: "Luxury Packaging Materials: A Buyer's Guide",
    desc: "Compare greyboard, specialty paper, textured paper, fabric wraps and common insert materials used in premium custom packaging.",
    href: "/resources/luxury-packaging-materials-guide/",
  },
  {
    tag: "Perfume Packaging",
    title: "How to Source Custom Perfume Packaging",
    desc: "A sourcing guide for fragrance brands comparing rigid box structures, inserts, finishes, sampling and production.",
    href: "/resources/perfume-packaging-buyer-guide/",
  },
  {
    tag: "Jewelry Packaging",
    title: "How to Choose Custom Jewelry Packaging",
    desc: "A buyer guide for jewelry and watch brands comparing box structures, velvet and EVA inserts, finishes, MOQ and sampling.",
    href: "/resources/jewelry-packaging-buyer-guide/",
  },
  {
    tag: "RFQ Preparation",
    title: "How to Prepare an RFQ for Custom Packaging",
    desc: "A practical guide to preparing a clear custom packaging RFQ with size, quantity, materials, inserts, finishes, shipping details and reference files.",
    href: "/resources/how-to-prepare-custom-packaging-rfq/",
  },
  {
    tag: "Sampling",
    title: "Custom Gift Box Sample Checklist Before Mass Production",
    desc: "A pre-production checklist for reviewing custom gift box samples, including size, structure, color, logo, insert fit, finishing and packing.",
    href: "/resources/custom-gift-box-sample-checklist/",
  },
  {
    tag: "Packaging Inserts",
    title: "EVA vs Paperboard vs Molded Pulp Packaging Inserts",
    desc: "Compare EVA, paperboard and molded pulp inserts for custom gift boxes, including protection, presentation and common applications.",
    href: "/resources/packaging-inserts-eva-vs-paperboard-vs-molded-pulp/",
  },
  {
    tag: "Color & Printing",
    title: "Pantone vs CMYK for Custom Packaging",
    desc: "A buyer guide to choosing Pantone or CMYK printing for custom packaging, with practical differences in color consistency, artwork and production.",
    href: "/resources/pantone-vs-cmyk-custom-packaging/",
  },
  {
    tag: "Finishing Techniques",
    title: "Foil Stamping vs Embossing vs Spot UV",
    desc: "Compare foil stamping, embossing and spot UV for luxury packaging, including appearance, tactile effect and common uses.",
    href: "/resources/foil-stamping-vs-embossing-vs-spot-uv/",
  },
  {
    tag: "Freight & Logistics",
    title: "How to Reduce Custom Packaging Shipping Cost",
    desc: "Practical ways to reduce custom packaging shipping cost through structure, dimensions, carton optimization and freight planning.",
    href: "/resources/how-to-reduce-custom-packaging-shipping-cost/",
  },
  {
    tag: "Supplier Selection",
    title: "How to Choose a Custom Packaging Manufacturer in China",
    desc: "A practical buyer guide to evaluating custom packaging manufacturers in China, including factory capability, sampling, QC and shipping.",
    href: "/resources/how-to-choose-custom-packaging-manufacturer-china/",
  },
  {
    tag: "Trade Terms",
    title: "EXW vs FOB vs DDP for Custom Packaging Orders",
    desc: "Understand the practical differences between EXW, FOB and DDP when importing custom packaging, including freight and customs responsibilities.",
    href: "/resources/exw-vs-fob-vs-ddp-custom-packaging/",
  },
  {
    tag: "Quality Control",
    title: "How to Inspect Custom Packaging Before Shipment",
    desc: "A buyer checklist for inspecting custom packaging before shipment, including dimensions, printing, finishing, inserts and packing.",
    href: "/resources/how-to-inspect-custom-packaging-before-shipment/",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sorivapackaging.com/" },
        { "@type": "ListItem", position: 2, name: "Resources", item: PAGE_URL },
      ],
    },
    {
      "@type": "ItemList",
      name: "Packaging Buyer Guides",
      itemListElement: guides.map((g, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: g.title,
        url: `https://www.sorivapackaging.com${g.href}`,
      })),
    },
  ],
};

export default function Page() {
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
            <a href="/">Home</a> / Resources
          </p>
          <div className="mrb-hero-copy" style={{ maxWidth: 860 }}>
            <span className="mrb-eyebrow">PACKAGING RESOURCES</span>
            <h1>Buyer Guides for Custom Packaging</h1>
            <p className="mrb-lead">
              Practical guides to help brands compare box structures, materials,
              inserts, finishes, sampling and production options before starting
              a custom packaging project.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Guides ---------- */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head">
            <span className="eyebrow dark">RESOURCES</span>
            <h2>Buyer Guides</h2>
            <p>
              Free guides for brands planning their next custom packaging
              project.
            </p>
          </div>
          <div className="mrb-res-cards">
            {guides.map((g) => (
              <article className="mrb-res-card" key={g.href}>
                <small>{g.tag}</small>
                <h3>{g.title}</h3>
                <p>{g.desc}</p>
                <a href={g.href}>Read Guide →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Quote ---------- */}
      <section className="mrb-section dark">
        <div className="container">
          <div className="mrb-head">
            <span className="mrb-eyebrow">GET STARTED</span>
            <h2>Need Help Choosing a Packaging Structure?</h2>
            <p>
              Tell us your product size, target quantity and packaging idea.
              SORIVA can help compare structures and develop a prototype.
            </p>
          </div>
          <div className="mrb-hero-actions" style={{ justifyContent: "center", marginTop: 28 }}>
            <a href="/custom-packaging/" className="btn gold">
              Explore Custom Packaging
            </a>
            <a
              href={waLink(WA_MESSAGES.resources)}
              target="_blank"
              rel="noopener"
              className="btn-wa"
            >
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
