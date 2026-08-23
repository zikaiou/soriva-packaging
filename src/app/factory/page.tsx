/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../lib/whatsapp";
import "../products/product-page.css";

const PAGE_URL = "https://sorivapackaging.com/factory/";

export const metadata: Metadata = {
  title: "Packaging Manufacturer Factory | SORIVA",
  description:
    "SORIVA Packaging factory: 10,000㎡ manufacturing facility with 400+ employees, in-house structural development, printing, finishing, box assembly, quality inspection and global export to USA, Europe, Japan and Korea.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "SORIVA Packaging Factory | Advanced Manufacturing",
    description:
      "Advanced manufacturing for premium packaging — structural development, printing, finishing, assembly and QC.",
    images: [
      {
        url: "https://sorivapackaging.com/img/factory-poster.webp",
        width: 1200,
        height: 630,
        alt: "SORIVA Packaging factory",
      },
    ],
  },
};

const stats = [
  { value: "10,000㎡", label: "Factory Area" },
  { value: "400+", label: "Employees" },
  { value: "50M+", label: "Annual Capacity" },
  { value: "20 Years", label: "Experience" },
];

const capabilities = [
  { title: "Structural Development", desc: "Box structure design, prototypes and custom solutions." },
  { title: "Printing & Finishing", desc: "Foil stamping, embossing, UV and premium finishes." },
  { title: "Box Assembly", desc: "Assembly process and production control." },
  { title: "Quality Inspection", desc: "Material, appearance and final checking." },
];

const processSteps = [
  "Design Confirmation",
  "Material Preparation",
  "Printing",
  "Surface Finishing",
  "Box Assembly",
  "Quality Inspection",
  "Shipment",
];

const qcSteps = [
  "Material Control",
  "Production Control",
  "Final Inspection",
  "Shipment Readiness",
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sorivapackaging.com/" },
        { "@type": "ListItem", position: 2, name: "Factory", item: PAGE_URL },
      ],
    },
    {
      "@type": "Organization",
      name: "SORIVA Packaging",
      description:
        "Packaging manufacturer with 10,000㎡ factory, 400+ employees and 20 years experience.",
      address: { "@type": "PostalAddress", addressCountry: "CN" },
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
            <a href="/">Home</a> / Factory
          </p>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">OUR FACTORY</span>
              <h1>Advanced Manufacturing For Premium Packaging</h1>
              <p className="mrb-lead">
                From material selection to final inspection, SORIVA provides
                reliable packaging production for global brands.
              </p>
              <div className="mrb-stats">
                {stats.map((s) => (
                  <div key={s.label}>
                    <b>{s.value}</b>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="mrb-hero-actions">
                <a href="/contact/" className="btn gold">
                  Get a Quote
                </a>
                <a
                  href={waLink(WA_MESSAGES.factory)}
                  target="_blank"
                  rel="noopener"
                  className="btn-wa"
                >
                  <WhatsAppIcon /> Chat on WhatsApp
                </a>
              </div>
            </div>
            <div className="mrb-hero-media">
              <img
                src="/img/factory-poster.webp"
                alt="SORIVA Packaging factory floor"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Manufacturing capability ---------- */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head">
            <span className="eyebrow dark">CAPABILITY</span>
            <h2>Our Manufacturing Capability</h2>
            <p>
              In-house production from structure to finished box.
            </p>
          </div>
          <div className="mrb-features">
            {capabilities.map((c, i) => (
              <div className="mrb-feature" key={c.title}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <b>{c.title}</b>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Production process ---------- */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head">
            <span className="eyebrow dark">PROCESS</span>
            <h2>Production Process</h2>
            <p>
              A controlled 7-step manufacturing flow.
            </p>
          </div>
          <div className="mrb-process mrb-process-7">
            {processSteps.map((s, i) => (
              <div className="mrb-step" key={s}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <b>{s}</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Real factory production ---------- */}
      <section className="mrb-section dark">
        <div className="container">
          <div className="mrb-head">
            <span className="mrb-eyebrow">FACTORY VIDEO</span>
            <h2>Real Factory Production</h2>
            <p>
              Real production footage from our factory floor.
            </p>
          </div>
          <div className="mrb-factory-video">
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
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* ---------- Quality control ---------- */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head">
            <span className="eyebrow dark">QUALITY</span>
            <h2>Quality Control</h2>
            <p>
              Multi-stage quality checks from material to shipment.
            </p>
          </div>
          <div className="mrb-features">
            {qcSteps.map((s, i) => (
              <div className="mrb-feature" key={s}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <b>{s}</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Global export ---------- */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head">
            <span className="eyebrow dark">GLOBAL EXPORT</span>
            <h2>Global Export Capability</h2>
          </div>
          <div className="mrb-export">
            <b>Serving customers in USA, Europe, Japan and Korea.</b>
            <p>Shipping: Sea Freight / Air Freight / Express</p>
          </div>
        </div>
      </section>

      {/* ---------- Ready to start ---------- */}
      <section className="mrb-section dark">
        <div className="container">
          <div className="mrb-head">
            <span className="mrb-eyebrow">GET STARTED</span>
            <h2>Ready To Start Your Packaging Project?</h2>
            <p>
              Share your product details and we will respond with a tailored
              proposal.
            </p>
          </div>
          <div className="mrb-contact">
            <span>
              <b>WhatsApp</b> +86 159 1388 1634
            </span>
            <span>
              <b>Email</b> AMY@XINGYUE.STORE
            </span>
          </div>
          <div className="mrb-hero-actions" style={{ justifyContent: "center", marginTop: 28 }}>
            <a href="/contact/" className="btn gold">
              Get a Quote
            </a>
            <a
              href={waLink(WA_MESSAGES.factory)}
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
