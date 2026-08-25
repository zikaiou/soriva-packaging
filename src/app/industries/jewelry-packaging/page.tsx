/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL = "https://sorivapackaging.com/industries/jewelry-packaging/";

export const metadata: Metadata = {
  title: "Custom Jewelry Packaging Boxes Manufacturer",
  description:
    "Custom jewelry packaging boxes for rings, necklaces, watches and premium accessories, with tailored inserts, luxury papers and finishing options.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Custom Jewelry Packaging Boxes | SORIVA Packaging",
    description:
      "Premium jewelry packaging with custom rigid structures, velvet or EVA inserts and luxury finishing.",
    images: [
      {
        url: "https://sorivapackaging.com/img/jewelry.webp",
        width: 1200,
        height: 630,
        alt: "Custom jewelry packaging boxes",
      },
    ],
  },
};

const recommendations = [
  { img: "/img/magnetic-rigid.webp", alt: "Magnetic rigid jewelry box", title: "Magnetic Rigid Boxes", desc: "Premium opening experience for jewelry collections.", slug: "magnetic-rigid-boxes" },
  { img: "/img/drawer-box.webp", alt: "Drawer jewelry box", title: "Drawer Boxes", desc: "Sliding presentation for rings, necklaces and sets.", slug: "drawer-boxes" },
  { img: "/img/two-piece-rigid.webp", alt: "Two-piece jewelry box", title: "Two-Piece Rigid Boxes", desc: "Classic lid-and-base structure for premium accessories.", slug: "two-piece-rigid-boxes" },
  { img: "/img/paper-bags.webp", alt: "Luxury paper bag for jewelry retail", title: "Luxury Paper Bags", desc: "Branded bags that complete the retail packaging system.", slug: "luxury-paper-bags" },
];

const customization = [
  { title: "Structure", items: ["Magnetic Box", "Drawer Box", "Lid & Base Box"] },
  { title: "Insert", items: ["Velvet", "EVA", "Paperboard"] },
  { title: "Finish", items: ["Matte", "Texture Paper", "Foil", "Emboss"] },
];

const applications = [
  { img: "/img/jewelry.webp", alt: "Jewelry presentation packaging", title: "Jewelry Collections" },
  { img: "/img/project-jewelry.webp", alt: "Ring and necklace presentation box", title: "Rings & Necklaces" },
  { img: "/img/project-gift-clean.webp", alt: "Jewelry gift set packaging", title: "Gift Sets" },
  { img: "/img/foil-clean.webp", alt: "Luxury jewelry box with foil finish", title: "Luxury Retail Presentation" },
];

const stats = [
  { value: "10,000㎡", label: "Factory Area" },
  { value: "400+", label: "Employees" },
  { value: "50M+", label: "Annual Capacity" },
  { value: "20 Years", label: "Experience" },
];

const faqs = [
  { q: "Can jewelry box inserts be customized?", a: "Yes. Velvet, EVA, paperboard and other custom insert solutions can be developed around your jewelry dimensions." },
  { q: "Which jewelry packaging structures are available?", a: "Magnetic rigid boxes, drawer boxes, two-piece boxes and custom structures are available." },
  { q: "Can you match our brand colors?", a: "Yes. CMYK, Pantone, specialty papers, foil and embossing can be specified for your project." },
  { q: "What is the MOQ?", a: "Selected custom jewelry packaging projects can start from 100 pcs, subject to the final specification." },
  { q: "Can I request a prototype?", a: "A 1 pc prototype is available for selected projects before bulk production." },
  { q: "How are jewelry boxes shipped?", a: "Sea freight, air freight and express shipping are supported." },
  { q: "Can you make matching retail bags?", a: "Yes. Luxury paper bags can be developed to coordinate with your jewelry box system." },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sorivapackaging.com/" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://sorivapackaging.com/#industries" },
        { "@type": "ListItem", position: 3, name: "Jewelry Packaging", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

export default function JewelryPackagingPage() {
  return (
    <main className="mrb-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="mrb-hero">
        <div className="container">
          <p className="mrb-breadcrumb"><a href="/">Home</a> / <a href="/#industries">Industries</a> / Jewelry Packaging</p>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">JEWELRY PACKAGING</span>
              <h1>Custom Jewelry Packaging Boxes</h1>
              <p className="mrb-subtitle">Luxury Presentation for Jewelry &amp; Accessories</p>
              <p className="mrb-lead">Create a refined presentation for rings, necklaces, watches and jewelry gift sets with custom structures, protective inserts and premium finishes.</p>
              <div className="mrb-tags"><span>Premium Presentation</span><span>Custom Inserts</span><span>Luxury Finishes</span><span>MOQ From 100 pcs</span></div>
              <div className="mrb-hero-actions">
                <a href="/contact/" className="btn gold">Get a Quote</a>
                <a href={waLink(WA_MESSAGES.industries)} target="_blank" rel="noopener" className="btn-wa"><WhatsAppIcon /> Chat on WhatsApp</a>
              </div>
            </div>
            <div className="mrb-hero-media"><img src="/img/jewelry.webp" alt="Custom jewelry packaging boxes" loading="eager" /></div>
          </div>
        </div>
      </section>

      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head"><span className="eyebrow dark">RECOMMENDED SOLUTIONS</span><h2>Jewelry Packaging Solutions</h2><p>Rigid packaging formats developed for product protection, gifting and premium retail presentation.</p></div>
          <div className="mrb-apps">
            {recommendations.map((p) => <a className="mrb-app mrb-app-link" href={`/products/${p.slug}/`} key={p.title}><img src={p.img} alt={p.alt} loading="lazy" /><div><b>{p.title}</b><span>{p.desc}</span><em className="mrb-app-cta">VIEW DETAILS →</em></div></a>)}
          </div>
        </div>
      </section>

      <section className="mrb-section soft">
        <div className="container"><div className="mrb-head"><span className="eyebrow dark">CUSTOMIZATION OPTIONS</span><h2>Tailored to Your Jewelry Brand</h2><p>Coordinate structure, insert, paper and finishing around the product and brand experience.</p></div><div className="mrb-spec">{customization.map((c) => <div className="mrb-spec-item" key={c.title}><b>{c.title}</b><p>{c.items.join(" / ")}</p></div>)}</div></div>
      </section>

      <section className="mrb-section">
        <div className="container"><div className="mrb-head"><span className="eyebrow dark">APPLICATIONS</span><h2>Jewelry Packaging Applications</h2><p>Presentation solutions for collections, individual pieces and coordinated gift programs.</p></div><div className="mrb-apps">{applications.map((a) => <article className="mrb-app" key={a.title}><img src={a.img} alt={a.alt} loading="lazy" /><div><b>{a.title}</b></div></article>)}</div></div>
      </section>

      <section className="mrb-section dark"><div className="container"><div className="mrb-head"><span className="mrb-eyebrow">PROFESSIONAL MANUFACTURER</span><h2>Your Reliable Jewelry Packaging Manufacturer</h2><p>From structure design and insert fitting to finishing, assembly and inspection, SORIVA supports custom jewelry packaging projects for global brands.</p></div><div className="mrb-stats">{stats.map((s) => <div key={s.label}><b>{s.value}</b><span>{s.label}</span></div>)}</div><div className="mrb-hero-actions" style={{ justifyContent: "center", marginTop: 28 }}><a href="/contact/" className="btn gold">Get a Quote</a><a href={waLink(WA_MESSAGES.industries)} target="_blank" rel="noopener" className="btn-wa"><WhatsAppIcon /> Chat on WhatsApp</a></div></div></section>

      <section className="mrb-section soft"><div className="container"><div className="mrb-head center"><span className="eyebrow dark">FAQ</span><h2>Jewelry Packaging FAQs</h2></div><div className="mrb-faq">{faqs.map((f) => <div className="mrb-faq-item" key={f.q}><b>{f.q}</b><p>{f.a}</p></div>)}</div></div></section>

      <section className="mrb-quote" id="quote"><div className="container"><div className="mrb-head center"><span className="mrb-eyebrow">START A PROJECT</span><h2>Ready to Create Your Jewelry Packaging?</h2><p>Send your jewelry dimensions, quantity, insert preference and references for a tailored quotation.</p><div className="mrb-hero-actions" style={{ justifyContent: "center", marginTop: 22 }}><a href="/contact/" className="btn gold">Request a Quote</a><a href={waLink(WA_MESSAGES.industries)} target="_blank" rel="noopener" className="btn-wa"><WhatsAppIcon /> Chat on WhatsApp</a></div></div></div></section>
    </main>
  );
}
