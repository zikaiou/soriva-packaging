/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "./QuoteForm";
import WhatsAppIcon from "./WhatsAppIcon";
import ProductBuyerGuides from "./ProductBuyerGuides";
import { waLink } from "../lib/whatsapp";
import "../products/product-page.css";

export type TubeSolutionData = {
  pageUrl: string;
  title: string;
  description: string;
  eyebrow: string;
  image: string;
  imageAlt: string;
  message: string;
  industryHref: string;
  industryLabel: string;
  relatedProjectHref?: string;
  relatedProjectLabel?: string;
  priorities: { title: string; desc: string }[];
  structures: { title: string; desc: string }[];
  applications: string[];
  guides: { tag: string; title: string; desc: string; href: string }[];
  faq: { question: string; answer: string }[];
};

export function tubeSolutionMetadata(page: TubeSolutionData): Metadata {
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: page.pageUrl },
    openGraph: {
      type: "website",
      url: page.pageUrl,
      title: page.title,
      description: page.description,
      siteName: "SORIVA Packaging",
      locale: "en_US",
      images: [{ url: `https://www.sorivapackaging.com${page.image}`, width: 1200, height: 900, alt: page.imageAlt }],
    },
  };
}

export default function TubeSolutionPage({ page }: { page: TubeSolutionData }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sorivapackaging.com/" },
          { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.sorivapackaging.com/custom-packaging/" },
          { "@type": "ListItem", position: 3, name: page.title, item: page.pageUrl },
        ],
      },
      {
        "@type": "Service",
        name: page.title,
        description: page.description,
        provider: { "@type": "Organization", name: "SORIVA Packaging", url: "https://www.sorivapackaging.com/" },
        url: page.pageUrl,
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <main className="mrb-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="mrb-hero">
        <div className="container">
          <nav className="mrb-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a> / <a href="/custom-packaging/">Solutions</a> / {page.title}
          </nav>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">{page.eyebrow}</span>
              <h1>{`Custom ${page.title.replace(/ \|.*$/, "")}`}</h1>
              <p className="mrb-lead">{page.description}</p>
              <div className="mrb-tags">
                <span>MOQ From 100 pcs</span>
                <span>Custom Diameter &amp; Height</span>
                <span>Custom Inserts</span>
                <span>Pantone (PMS) Color Matching</span>
                <span>Worldwide Shipping</span>
              </div>
              <div className="mrb-hero-actions">
                <a href="/rfq/" className="btn gold">Request Packaging Quote</a>
                <a href={waLink(page.message)} target="_blank" rel="noopener" className="btn-wa"><WhatsAppIcon /> Chat on WhatsApp</a>
                <a href="/products/tube-packaging/" className="btn ghost">Tube Packaging Catalog</a>
              </div>
            </div>
            <div className="mrb-hero-media"><img src={page.image} alt={page.imageAlt} width="1200" height="900" loading="eager" /></div>
          </div>
        </div>
      </section>

      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center"><span className="eyebrow dark">PACKAGING PRIORITIES</span><h2>Why Cylindrical Tube Packaging Works</h2><p>Paper tube structures create a distinctive presentation while allowing diameter, height, materials and opening style to be developed around the product.</p></div>
          <div className="mrb-features">{page.priorities.map((item) => <article className="mrb-feature" key={item.title}><h3>{item.title}</h3><p>{item.desc}</p></article>)}</div>
        </div>
      </section>

      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center"><span className="eyebrow dark">TUBE STRUCTURE OPTIONS</span><h2>Choose the Right Opening Style</h2><p>Tube construction can be tailored to product fit, retail presentation and handling requirements.</p></div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>{page.structures.map((item) => <article className="mrb-feature" key={item.title}><h3>{item.title}</h3><p>{item.desc}</p></article>)}</div>
        </div>
      </section>

      <section className="mrb-section">
        <div className="container mrb-spec-wrap">
          <div>
            <div className="mrb-head"><span className="eyebrow dark">PRODUCT FIT &amp; INSERTS</span><h2>Developed Around Your Product</h2></div>
            <p style={{ color: "#444", lineHeight: 1.7 }}>EVA, velvet-covered, paperboard or molded pulp inserts can be selected according to project requirements. Diameter, height, lid clearance and insert depth are reviewed from product dimensions or physical samples.</p>
            <ul style={{ color: "#444", lineHeight: 1.9, paddingLeft: 20 }}><li>Custom bottle, jar, candle or gift-set cavity planning</li><li>Paperboard dividers for lightweight assortments</li><li>Velvet-covered presentation trays for premium products</li><li>Molded pulp options for selected sustainable packaging programs</li></ul>
          </div>
          <div className="mrb-structure">
            <div className="mrb-head"><span className="eyebrow dark">MATERIALS &amp; FINISHING</span><h2>Build a Distinctive Surface</h2></div>
            <p style={{ color: "#444", lineHeight: 1.7 }}>Art paper, kraft-style paper, specialty textures and coated wraps can be combined with CMYK or Pantone printing.</p>
            <ul style={{ color: "#444", lineHeight: 1.9, paddingLeft: 20 }}><li>Gold, silver, copper or rose gold foil</li><li>Embossing and debossing for tactile logos</li><li>Spot UV for selective gloss contrast</li><li>Matte, gloss or soft-touch lamination options</li></ul>
            <a href="/resources/luxury-packaging-paper-types-art-paper-vs-specialty-paper-vs-kraft/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>Read the Luxury Paper Types Guide →</a>
          </div>
        </div>
      </section>

      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center"><span className="eyebrow dark">APPLICATIONS</span><h2>Tube Packaging Applications</h2><p>{page.applications.join(" · ")}</p></div>
          <div className="mrb-apps" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>{page.applications.map((application) => <article className="mrb-app" key={application}><img src={page.image} alt={`${application} tube packaging`} loading="lazy" /><div><b>{application}</b><span>Custom tube diameter, height, insert and finishing options.</span></div></article>)}</div>
        </div>
      </section>

      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center"><span className="eyebrow dark">SAMPLING &amp; APPROVAL</span><h2>Confirm Fit Before Production</h2><p>A selected project can begin with a 1 pc prototype for structure, artwork, surface finish and product fit review.</p></div>
          <div className="mrb-process">{["Product dimensions", "Tube structure", "Insert planning", "Prototype review", "Production QC", "Air / Sea / Express"].map((step, index) => <div className="mrb-step" key={step}><span>{String(index + 1).padStart(2, "0")}</span><b>{step}</b></div>)}</div>
        </div>
      </section>

      <section className="mrb-section dark">
        <div className="container">
          <div className="mrb-head center"><span className="mrb-eyebrow">RELATED PACKAGING</span><h2>Continue Exploring SORIVA Solutions</h2><p>Connect this tube packaging route with product, industry, factory and capability resources.</p></div>
          <div className="mrb-hero-actions" style={{ justifyContent: "center" }}><a href="/products/tube-packaging/" className="btn gold">Tube Packaging Product Page</a><a href={page.industryHref} className="btn ghost">{page.industryLabel}</a><a href="/custom-packaging/" className="btn ghost">Custom Packaging System</a><a href="/factory/" className="btn ghost">Factory Verification</a>{page.relatedProjectHref && <a href={page.relatedProjectHref} className="btn ghost">{page.relatedProjectLabel}</a>}</div>
        </div>
      </section>

      <section className="mrb-section soft"><div className="container"><div className="mrb-head center"><span className="eyebrow dark">FAQ</span><h2>Frequently Asked Questions</h2></div><div className="mrb-faq">{page.faq.map((item) => <div className="mrb-faq-item" key={item.question}><b>{item.question}</b><p>{item.answer}</p></div>)}</div></div></section>

      <ProductBuyerGuides title="Tube Packaging Buyer Guides & Resources" subtitle="Practical guidance on paper types, printing, inserts and RFQ preparation." guides={page.guides} />

      <section className="mrb-quote" id="quote"><div className="container mrb-quote-grid"><div><span className="mrb-eyebrow">START A PROJECT</span><h2>Develop Your Custom Tube Packaging</h2><p style={{ color: "#c5c5c5", lineHeight: 1.7, margin: "12px 0 16px" }}>Send your product dimensions, target quantity, reference imagery and preferred finish. Lead time depends on design complexity, quantity, materials and finishing requirements.</p><div className="mrb-contact"><div className="mrb-contact-note"><b>WhatsApp</b><a href={waLink(page.message)} target="_blank" rel="noopener">+86 159 1388 1634</a></div><div className="mrb-contact-note"><b>Email</b><a href="mailto:AMY@XINGYUE.STORE">AMY@XINGYUE.STORE</a></div></div><a className="mrb-back" href="/rfq/">Request a Packaging Quote →</a></div><QuoteForm /></div></section>
    </main>
  );
}
