/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../lib/whatsapp";
import "./factory-page.css";

const PAGE_URL = "https://www.sorivapackaging.com/factory/";

export const metadata: Metadata = {
  title: "Custom Packaging Factory | Production & Quality Control | SORIVA Packaging",
  description:
    "Explore SORIVA Packaging factory capability, production equipment, workshop processes, QC, production updates and verification options for custom luxury packaging projects.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Custom Packaging Factory | Production & Quality Control | SORIVA Packaging",
    description:
      "Explore SORIVA Packaging factory capability, production equipment, workshop processes, QC, production updates and verification options for custom luxury packaging projects.",
    images: [{ url: "https://www.sorivapackaging.com/img/factory-v1-workshop-overview.jpg", alt: "SORIVA packaging production workshops" }],
  },
};

const stats = [
  ["10,000㎡", "Factory Area"],
  ["400+", "Employees"],
  ["50M+", "Annual Capacity"],
  ["20 Years", "Experience"],
];

const verification = [
  ["01", "Factory Video", "Request current factory and workshop video material for production verification."],
  ["02", "Production Photos", "Project-specific progress photos can be shared during key production stages."],
  ["03", "Sample Inspection", "Review structure, finish, insert fit and visual details before mass production."],
  ["04", "QC Before Shipment", "Request QC and packing photos before the order is prepared for shipment."],
];

const updates = ["Printing", "Lamination", "Die Cutting", "Hot Stamping", "Assembly & QC", "Packing"];

const equipment = [
  ["Printing Equipment", "Multi-color printing capability for custom packaging graphics and brand colors."],
  ["Laminating Equipment", "Laminating support for selected coated and finished packaging projects."],
  ["Die-Cutting Equipment", "Cutting and forming support for repeatable packaging dimensions and structures."],
  ["Hot Stamping Equipment", "Foil and decorative finishing capability for premium branding details."],
  ["Paper Bag Forming", "Production support for selected luxury paper bag structures."],
  ["Manual Assembly", "Hand finishing and assembly for complex rigid boxes, inserts and premium details."],
];

const delivery = [
  ["Design Support", "Structure and artwork coordination based on your project requirements."],
  ["Source Factory", "Direct communication with production for custom packaging development."],
  ["Production Team", "Coordination across printing, finishing, assembly and quality control."],
  ["Logistics Support", "Sea, air and express shipping options according to project needs."],
];

const beforeShipment = [
  ["Finished Appearance", "Review representative finished packaging appearance and finishing details."],
  ["QC Check", "Confirm basic quality checks according to the agreed packaging specification."],
  ["Packing Confirmation", "Verify packing preparation and master-carton arrangement where applicable."],
  ["Shipment Preparation", "Confirm shipment readiness before sea, air or express dispatch."],
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sorivapackaging.com/" },
        { "@type": "ListItem", position: 2, name: "Factory", item: PAGE_URL },
      ],
    },
    { "@type": "Organization", name: "SORIVA Packaging", url: "https://www.sorivapackaging.com/" },
  ],
};

function CtaButtons({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`factory-actions${compact ? " compact" : ""}`}>
      <a className="factory-btn gold" href="/rfq/">Request Packaging Quote</a>
      <a className="factory-btn whatsapp" href={waLink(WA_MESSAGES.factory)} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon /> Chat on WhatsApp
      </a>
    </div>
  );
}

export default function FactoryPage() {
  return (
    <main className="factory-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="factory-hero">
        <div className="factory-container factory-hero-grid">
          <div>
            <p className="factory-kicker"><a href="/">Home</a> / Factory</p>
            <span className="factory-eyebrow">OUR FACTORY</span>
            <h1>Production You Can Verify</h1>
            <p className="factory-lead">From printing and finishing to assembly, quality control and packing, SORIVA supports custom packaging projects with transparent production updates and real manufacturing evidence.</p>
            <div className="factory-stats">
              {stats.map(([value, label]) => <div className="factory-stat" key={label}><b>{value}</b><span>{label}</span></div>)}
            </div>
            <CtaButtons />
          </div>
          <img className="factory-image factory-hero-image" src="/img/factory-v1-workshop-overview.jpg" alt="SORIVA packaging production workshops" fetchPriority="high" />
        </div>
      </section>

      <section className="factory-section">
        <div className="factory-container">
          <div className="factory-heading"><span className="factory-eyebrow dark">FACTORY VERIFICATION</span><h2>Buyers Can Request Real Production Evidence</h2></div>
          <div className="factory-grid four">
            {verification.map(([number, title, text]) => <article className="factory-card" key={title}><span className="factory-number">{number}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="factory-section cream">
        <div className="factory-container factory-two-col">
          <div><span className="factory-eyebrow dark">PRODUCTION UPDATES</span><h2>Track Key Stages of Your Order</h2><div className="factory-process">{updates.map((item, index) => <div className="factory-step" key={item}><span>{String(index + 1).padStart(2, "0")}</span><b>{item}</b></div>)}</div><p className="factory-note">For suitable projects, production updates can be shared through photos or video at key stages. Exact update frequency depends on order type and production schedule.</p></div>
          <img className="factory-image" src="/img/factory-v1-production-equipment.jpg" alt="SORIVA packaging production equipment" loading="lazy" />
        </div>
      </section>

      <section className="factory-section">
        <div className="factory-container">
          <div className="factory-heading"><span className="factory-eyebrow dark">PRODUCTION EQUIPMENT</span><h2>Core Manufacturing Capability</h2><p>Equipment labels are intentionally generic and describe production capabilities without claiming specific brands or models.</p></div>
          <div className="factory-grid three">{equipment.map(([title, text]) => <article className="factory-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="factory-section cream">
        <div className="factory-container factory-two-col reverse-mobile">
          <img className="factory-image" src="/img/factory-v1-advantages.jpg" alt="SORIVA packaging design, factory, production team and logistics support" loading="lazy" />
          <div><span className="factory-eyebrow dark">FROM DESIGN TO DELIVERY</span><h2>One Workflow, Multiple Capabilities</h2><div className="factory-checklist">{delivery.map(([title, text]) => <div className="factory-check" key={title}><b>{title}</b><p>{text}</p></div>)}</div></div>
        </div>
      </section>

      <section className="factory-section factory-video-section">
        <div className="factory-container"><div className="factory-heading light"><span className="factory-eyebrow">REAL PRODUCTION VIDEO</span><h2>Inside Our Production Environment</h2></div><div className="factory-video-wrap"><video controls muted playsInline preload="metadata" poster="/img/factory-v1-workshop-overview.jpg"><source src="/video/factory-v1-production.mp4" type="video/mp4" />Your browser does not support the video tag.</video></div></div>
      </section>

      <section className="factory-section cream">
        <div className="factory-container"><div className="factory-heading"><span className="factory-eyebrow dark">BEFORE SHIPMENT</span><h2>What Buyers Can Confirm Before Dispatch</h2></div><div className="factory-grid four">{beforeShipment.map(([title, text]) => <article className="factory-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div>
      </section>

      <section className="factory-section">
        <div className="factory-container">
          <div className="factory-heading">
            <span className="factory-eyebrow dark">BUYER GUIDES & QC</span>
            <h2>Factory Verification & Quality Resources</h2>
            <p>Helpful guides on evaluating packaging manufacturers in China and inspecting bulk orders before shipment.</p>
          </div>
          <div className="factory-grid two">
            <article className="factory-card">
              <span className="factory-eyebrow dark" style={{ display: "block", marginBottom: 8, fontSize: 11 }}>SUPPLIER EVALUATION</span>
              <h3>How to Choose a Custom Packaging Manufacturer in China</h3>
              <p>A practical buyer guide to evaluating custom packaging manufacturers in China, including factory capability, sampling, QC, communication and shipping support.</p>
              <a href="/resources/how-to-choose-custom-packaging-manufacturer-china/" style={{ display: "inline-block", marginTop: 14, color: "var(--factory-gold)", fontWeight: 700 }}>Read Supplier Guide →</a>
            </article>
            <article className="factory-card">
              <span className="factory-eyebrow dark" style={{ display: "block", marginBottom: 8, fontSize: 11 }}>QUALITY CHECKLIST</span>
              <h3>How to Inspect Custom Packaging Before Shipment</h3>
              <p>A buyer checklist for inspecting custom packaging before shipment, including dimensions, printing, finishing, inserts, quantity, packing and shipping readiness.</p>
              <a href="/resources/how-to-inspect-custom-packaging-before-shipment/" style={{ display: "inline-block", marginTop: 14, color: "var(--factory-gold)", fontWeight: 700 }}>Read Inspection Guide →</a>
            </article>
          </div>
        </div>
      </section>

      <section className="factory-cta"><div className="factory-container"><span className="factory-eyebrow">VERIFY BEFORE YOU ORDER</span><h2>Want to Discuss Factory Capability or Your Packaging Project?</h2><p>Send your product dimensions, target quantity and reference images. You can also ask for factory material, sample support or production updates for suitable projects.</p><CtaButtons compact /></div></section>
    </main>
  );
}
