import type { Metadata } from "next";
import WhatsAppIcon from "./WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../lib/whatsapp";
import "../products/product-page.css";

export type GuideFaq = { question: string; answer: string };
export type GuideTable = { headers: string[]; rows: string[][] };
export type HighIntentGuide = {
  pageUrl: string;
  title: string;
  description: string;
  eyebrow: string;
  intro: string;
  sections: { heading: string; body?: string; bullets?: string[]; table?: GuideTable }[];
  note?: string;
  buyerTip: string;
  checklist: string[];
  faqs: GuideFaq[];
};

export function guideMetadata(guide: HighIntentGuide): Metadata {
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: guide.pageUrl },
    openGraph: {
      type: "article",
      url: guide.pageUrl,
      title: `${guide.title} | SORIVA Packaging`,
      description: guide.description,
    },
  };
}

const links = [
  ["/products/", "All Products"],
  ["/products/magnetic-rigid-boxes/", "Magnetic Rigid Boxes"],
  ["/products/foldable-magnetic-rigid-boxes/", "Foldable Magnetic Boxes"],
  ["/products/drawer-boxes/", "Drawer Boxes"],
  ["/products/two-piece-rigid-boxes/", "Two-Piece Rigid Boxes"],
  ["/products/tube-packaging/", "Tube Packaging"],
  ["/products/luxury-paper-bags/", "Luxury Paper Bags"],
  ["/custom-packaging/", "Custom Packaging"],
  ["/projects/", "Projects"],
  ["/factory/", "Factory"],
];

export default function HighIntentGuidePage({ guide }: { guide: HighIntentGuide }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://sorivapackaging.com/" },
          { "@type": "ListItem", position: 2, name: "Resources", item: "https://sorivapackaging.com/resources/" },
          { "@type": "ListItem", position: 3, name: guide.title, item: guide.pageUrl },
        ],
      },
      {
        "@type": "Article",
        headline: guide.title,
        description: guide.description,
        author: { "@type": "Organization", name: "SORIVA Packaging" },
        publisher: { "@type": "Organization", name: "SORIVA Packaging" },
        mainEntityOfPage: guide.pageUrl,
      },
      {
        "@type": "FAQPage",
        mainEntity: guide.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <main className="mrb-page high-intent-guide">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="mrb-hero">
        <div className="container">
          <p className="mrb-breadcrumb"><a href="/">Home</a> / <a href="/resources/">Resources</a> / {guide.title}</p>
          <div className="mrb-hero-copy" style={{ maxWidth: 900 }}>
            <span className="mrb-eyebrow">{guide.eyebrow}</span>
            <h1>{guide.title}</h1>
            <p className="mrb-lead">{guide.description}</p>
          </div>
        </div>
      </section>

      <section className="mrb-section">
        <div className="container mrb-article">
          <article className="mrb-article-main">
            <p>{guide.intro}</p>
            {guide.sections.map((section) => (
              <section key={section.heading} className="guide-section">
                <h2>{section.heading}</h2>
                {section.body && <p>{section.body}</p>}
                {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
                {section.table && (
                  <div className="mrb-table-scroll">
                    <table className="mrb-table"><thead><tr>{section.table.headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{section.table.rows.map((row) => <tr key={row.join("-")}>{row.map((cell, index) => <td key={`${row[0]}-${index}`}>{cell}</td>)}</tr>)}</tbody></table>
                  </div>
                )}
              </section>
            ))}
            {guide.note && <div className="mrb-note"><b>SORIVA:</b> {guide.note}</div>}
            <div className="mrb-note"><b>Buyer Tip:</b> {guide.buyerTip}</div>
            <section className="guide-checklist"><h2>Buyer Checklist</h2><ul>{guide.checklist.map((item) => <li key={item}>{item}</li>)}</ul></section>
            <section className="guide-faq"><h2>Frequently Asked Questions</h2>{guide.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
          </article>
          <aside className="mrb-sidebar"><b>Related Pages</b>{links.map(([href, label]) => <a href={href} key={href}>{label}</a>)}</aside>
        </div>
      </section>

      <section className="mrb-quote">
        <div className="container case-quote-inner"><span className="mrb-eyebrow">START A PROJECT</span><h2>Need a Custom Packaging Quote?</h2><p>Send product dimensions, quantity, references and target market for a focused discussion.</p><div className="mrb-hero-actions"><a className="btn gold" href="/contact/">Get a Quote</a><a className="btn-wa" href={waLink(WA_MESSAGES.guide)} target="_blank" rel="noopener"><WhatsAppIcon /> Chat on WhatsApp</a></div></div>
      </section>
    </main>
  );
}
