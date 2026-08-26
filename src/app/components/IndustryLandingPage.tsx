/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "./WhatsAppIcon";
import { waLink } from "../lib/whatsapp";
import "../products/product-page.css";

export type IndustryLanding = {
  pageUrl: string;
  title: string;
  description: string;
  eyebrow: string;
  image: string;
  imageAlt: string;
  subtitle: string;
  message: string;
  recommendations: { img: string; alt: string; title: string; desc: string; slug: string }[];
  applications: string[];
  applicationImage: string;
  applicationAlt: string;
  customization: { title: string; items: string[] }[];
  faq: { question: string; answer: string }[];
};

export function industryMetadata(page: IndustryLanding): Metadata {
  return { title: page.title, description: page.description, alternates: { canonical: page.pageUrl }, openGraph: { type: "website", url: page.pageUrl, title: `${page.title} | SORIVA Packaging`, description: page.description, images: [{ url: `https://sorivapackaging.com${page.image}`, width: 1200, height: 630, alt: page.imageAlt }] } };
}

const stats = [
  { value: "10,000㎡", label: "Factory Area" },
  { value: "400+", label: "Employees" },
  { value: "50M+", label: "Annual Capacity" },
  { value: "20 Years", label: "Experience" },
];

export default function IndustryLandingPage({ page }: { page: IndustryLanding }) {
  const structuredData = { "@context": "https://schema.org", "@graph": [
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://sorivapackaging.com/" }, { "@type": "ListItem", position: 2, name: "Industries", item: "https://sorivapackaging.com/#industries" }, { "@type": "ListItem", position: 3, name: page.title, item: page.pageUrl }] },
    { "@type": "FAQPage", mainEntity: page.faq.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) },
  ] };
  return <main className="mrb-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <section className="mrb-hero"><div className="container"><p className="mrb-breadcrumb"><a href="/">Home</a> / <a href="/#industries">Industries</a> / {page.title}</p><div className="mrb-hero-grid"><div className="mrb-hero-copy"><span className="mrb-eyebrow">{page.eyebrow}</span><h1>{page.title}</h1><p className="mrb-subtitle">{page.subtitle}</p><p className="mrb-lead">{page.description}</p><div className="mrb-tags"><span>MOQ From 100 pcs</span><span>1 Pc Prototype</span><span>Fast Sample Support</span><span>Global Shipping</span></div><div className="mrb-hero-actions"><a href="/contact/" className="btn gold">Get a Quote</a><a href={waLink(page.message)} target="_blank" rel="noopener" className="btn-wa"><WhatsAppIcon /> Chat on WhatsApp</a></div></div><div className="mrb-hero-media"><img src={page.image} alt={page.imageAlt} loading="eager" /></div></div></div></section>
    <section className="mrb-section"><div className="container"><div className="mrb-head"><span className="eyebrow dark">RECOMMENDED PACKAGING</span><h2>Choose the Right Structure</h2><p>Product formats developed around your application, presentation and shipping requirements.</p></div><div className="mrb-apps">{page.recommendations.map((p) => <a className="mrb-app mrb-app-link" href={`/products/${p.slug}/`} key={p.title}><img src={p.img} alt={p.alt} loading="lazy" /><div><b>{p.title}</b><span>{p.desc}</span><em className="mrb-app-cta">VIEW DETAILS →</em></div></a>)}</div></div></section>
    <section className="mrb-section soft"><div className="container"><div className="mrb-head"><span className="eyebrow dark">APPLICATIONS</span><h2>Common Applications</h2></div><div className="mrb-apps">{page.applications.map((application, index) => <article className="mrb-app" key={application}><img src={page.applicationImage} alt={page.applicationAlt} loading="lazy" /><div><b>{application}</b></div></article>)}</div></div></section>
    <section className="mrb-section"><div className="container"><div className="mrb-head"><span className="eyebrow dark">CUSTOMIZATION</span><h2>Build Packaging Around Your Brand</h2><p>Coordinate structure, materials, finishing and inserts around your product and brand system.</p></div><div className="mrb-spec">{page.customization.map((item) => <div className="mrb-spec-item" key={item.title}><b>{item.title}</b><p>{item.items.join(" / ")}</p></div>)}</div></div></section>
    <section className="mrb-section soft"><div className="container"><div className="mrb-head"><span className="eyebrow dark">PROCESS</span><h2>From Idea to Production</h2></div><div className="mrb-process">{["Consultation", "Structure", "Material", "Prototype", "Production", "Shipping"].map((step, index) => <div className="mrb-step" key={step}><span>{String(index + 1).padStart(2, "0")}</span><b>{step}</b></div>)}</div></div></section>
    <section className="mrb-section dark"><div className="container"><div className="mrb-head"><span className="mrb-eyebrow">FACTORY</span><h2>Reliable Production</h2></div><div className="mrb-stats">{stats.map((stat) => <div key={stat.label}><b>{stat.value}</b><span>{stat.label}</span></div>)}</div><div className="mrb-hero-actions" style={{ justifyContent: "center", marginTop: 28 }}><a href="/factory/" className="btn gold">Visit Factory</a><a href={waLink(page.message)} target="_blank" rel="noopener" className="btn-wa"><WhatsAppIcon /> Chat on WhatsApp</a></div></div></section>
    <section className="mrb-section soft"><div className="container"><div className="mrb-head center"><span className="eyebrow dark">FAQ</span><h2>Frequently Asked Questions</h2></div><div className="mrb-faq">{page.faq.map((faq) => <div className="mrb-faq-item" key={faq.question}><b>{faq.question}</b><p>{faq.answer}</p></div>)}</div></div></section>
    <section className="mrb-quote"><div className="container"><div className="mrb-head center"><span className="mrb-eyebrow">START A PROJECT</span><h2>Start Your Packaging Project</h2><p>Send product dimensions, quantity, references and timeline.</p><div className="mrb-hero-actions" style={{ justifyContent: "center", marginTop: 22 }}><a href="/custom-packaging/" className="btn gold">Custom Packaging</a><a href={waLink(page.message)} target="_blank" rel="noopener" className="btn-wa"><WhatsAppIcon /> Chat on WhatsApp</a></div></div></div></section>
  </main>;
}
