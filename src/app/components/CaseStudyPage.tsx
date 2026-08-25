/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "./WhatsAppIcon";
import { waLink } from "../lib/whatsapp";
import "../products/product-page.css";

export type CaseStudy = {
  slug: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  industry: string;
  structure: string;
  materials: string;
  finishing: string;
  insert: string;
  market: string;
  challenge: string;
  solution: string;
  benefits: string[];
  productHref: string;
  productLabel: string;
  industryHref: string;
  industryLabel: string;
  message: string;
};

export function caseStudyMetadata(study: CaseStudy): Metadata {
  const url = `https://sorivapackaging.com/projects/${study.slug}/`;
  return {
    title: `${study.title} | SORIVA Packaging`,
    description: study.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: `${study.title} | SORIVA Packaging`,
      description: study.description,
      images: [{ url: `https://sorivapackaging.com${study.image}`, width: 1200, height: 900, alt: study.imageAlt }],
    },
  };
}

export default function CaseStudyPage({ study }: { study: CaseStudy }) {
  const pageUrl = `https://sorivapackaging.com/projects/${study.slug}/`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://sorivapackaging.com/" },
          { "@type": "ListItem", position: 2, name: "Projects", item: "https://sorivapackaging.com/projects/" },
          { "@type": "ListItem", position: 3, name: study.title, item: pageUrl },
        ],
      },
      {
        "@type": "Article",
        headline: study.title,
        description: study.description,
        image: `https://sorivapackaging.com${study.image}`,
        mainEntityOfPage: pageUrl,
        publisher: { "@type": "Organization", name: "SORIVA Packaging", url: "https://sorivapackaging.com" },
      },
    ],
  };

  return (
    <main className="mrb-page case-study-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="mrb-hero">
        <div className="container">
          <p className="mrb-breadcrumb"><a href="/">Home</a> / <a href="/projects/">Projects</a> / {study.title}</p>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">PACKAGING CASE STUDY</span>
              <h1>{study.title}</h1>
              <p className="mrb-lead">{study.description}</p>
              <div className="mrb-hero-actions">
                <a href="#quote" className="btn gold">Get a Quote</a>
                <a href={waLink(study.message)} target="_blank" rel="noopener" className="btn-wa"><WhatsAppIcon /> Chat on WhatsApp</a>
                <a href="/projects/" className="btn ghost">All Projects</a>
              </div>
            </div>
            <div className="mrb-hero-media"><img src={study.image} alt={study.imageAlt} loading="eager" /></div>
          </div>
        </div>
      </section>

      <section className="mrb-section soft">
        <div className="container">
          <div className="case-meta-grid">
            {[["Industry", study.industry], ["Structure", study.structure], ["Materials", study.materials], ["Finishing", study.finishing], ["Insert", study.insert], ["Market", study.market]].map(([label, value]) => <div key={label}><b>{label}</b><span>{value}</span></div>)}
          </div>
        </div>
      </section>

      <section className="mrb-section">
        <div className="container case-two-col">
          <div><span className="eyebrow dark">PROJECT OVERVIEW</span><h2>Challenge</h2><p>{study.challenge}</p><h2>Our Solution</h2><p>{study.solution}</p></div>
          <div className="case-image-card"><img src={study.image} alt={`${study.title} approved project reference`} loading="lazy" /><span>Approved project reference image</span></div>
        </div>
      </section>

      <section className="mrb-section soft">
        <div className="container case-two-col">
          <div className="case-info-card"><h2>Materials &amp; Finishing</h2><p><b>Materials:</b> {study.materials}</p><p><b>Finishing:</b> {study.finishing}</p><p><b>Insert:</b> {study.insert}</p></div>
          <div className="case-info-card"><h2>Project Benefits</h2><ul>{study.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul></div>
        </div>
      </section>

      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center"><span className="eyebrow dark">RELATED SOLUTIONS</span><h2>Explore Similar Packaging</h2></div>
          <div className="case-related-actions"><a className="btn gold" href={study.productHref}>{study.productLabel}</a><a className="btn ghost" href={study.industryHref}>{study.industryLabel}</a><a className="btn ghost" href="/custom-packaging/">Custom Packaging</a></div>
        </div>
      </section>

      <section className="mrb-quote" id="quote">
        <div className="container case-quote-inner"><span className="mrb-eyebrow">START A SIMILAR PROJECT</span><h2>Have a Packaging Project Like This?</h2><p>Send your product size, target quantity, reference images and preferred structure. We can help develop a prototype and quotation.</p><div className="mrb-hero-actions"><a href="/contact/" className="btn gold">Get a Quote</a><a href={waLink(study.message)} target="_blank" rel="noopener" className="btn-wa"><WhatsAppIcon /> Chat on WhatsApp</a></div></div>
      </section>
    </main>
  );
}
