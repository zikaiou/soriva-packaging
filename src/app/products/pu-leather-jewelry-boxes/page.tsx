/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../product-page.css";

const PAGE_URL = "https://www.sorivapackaging.com/products/pu-leather-jewelry-boxes/";
export const metadata: Metadata = {
  title: { absolute: "Custom PU Leather Jewelry Boxes Manufacturer | SORIVA" },
  description: "Custom PU leather jewelry presentation boxes for rings, necklaces, bracelets and gift sets. Explore velvet interiors, inserts, branding and coordinated retail packaging.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website", url: PAGE_URL,
    title: "Custom PU Leather Jewelry Boxes Manufacturer | SORIVA",
    description: "Custom PU leather jewelry presentation boxes for rings, necklaces, bracelets and gift sets. Explore velvet interiors, inserts, branding and coordinated retail packaging.",
    siteName: "SORIVA Packaging", locale: "en_US",
    images: [{ url: "https://www.sorivapackaging.com/img/portable-ring-box-hero.webp", width: 1200, height: 900, alt: "Example of SORIVA PU leather portable ring box with velvet lining; custom jewelry box specifications vary" }],
  },
};
const formats = [{title:"Ring & Earring Boxes",desc:"Compact single-piece and paired-jewelry presentations with slots, cushions or fitted recesses."},
{title:"Necklace & Pendant Cases",desc:"Longer formats with chain retention and pendant positioning tailored to the jewelry."},
{title:"Bracelet & Watch Boxes",desc:"Cushion and tray formats for bangles, bracelets and watches."},
{title:"Coordinated Collection Sets",desc:"Consistent exterior color and logo treatment across multiple box sizes."}];
const materials = [{title:"Exterior Wrap",desc:"PU leather or leather-look surface options, with color and texture subject to sampling."},
{title:"Interior Lining",desc:"Velvet-style, suede-look or fabric-covered interior options selected for product presentation."},
{title:"Fitted Inserts",desc:"Ring slots, necklace tabs, earring holes and bracelet cushions designed around product dimensions."},
{title:"Branding",desc:"Foil, printing, debossing or logo plates can be reviewed depending on material compatibility."}];
const faqs = [{q:"Can I order matching jewelry boxes for different pieces?",a:"Yes. Share the ring, necklace, bracelet or watch dimensions and preferred presentation. We can review coordinated sizes and insert layouts."},
{q:"Can the PU leather color and texture be customized?",a:"Color, grain and texture options are evaluated against available materials and approved samples. Exact matching is confirmed during quotation."},
{q:"Are velvet interiors and inserts available?",a:"Fabric-covered interiors and fitted jewelry inserts can be reviewed based on the box construction and jewelry dimensions."},
{q:"What is the minimum order quantity?",a:"MOQ is quoted per construction, material, color and logo process. Please send your target quantity for confirmation; the in-stock portable ring box is a separate product with its own MOQ."},
{q:"Can I see a sample before production?",a:"Sampling availability, cost and lead time are confirmed after the box specifications and materials are reviewed."}];
const related = [{title:"In-Stock PU Leather Portable Ring Box",href:"/products/portable-ring-box/"},
{title:"Custom Ring Boxes",href:"/products/custom-ring-boxes/"},
{title:"Flip-Top Jewelry Boxes",href:"/products/flip-top-jewelry-boxes/"},
{title:"Jewelry Packaging & Matching Bags",href:"/industries/jewelry-packaging/"}];
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Service", name: "PU Leather Jewelry Boxes Custom Manufacturing", description: "Custom PU leather jewelry presentation boxes for rings, necklaces, bracelets and gift sets. Explore velvet interiors, inserts, branding and coordinated retail packaging.", serviceType: "Custom Jewelry Packaging", url: PAGE_URL, provider: { "@type": "Organization", name: "SORIVA Packaging", url: "https://www.sorivapackaging.com/" }, areaServed: "Worldwide" },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sorivapackaging.com/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://www.sorivapackaging.com/products/" },
      { "@type": "ListItem", position: 3, name: "PU Leather Jewelry Boxes", item: PAGE_URL },
    ] },
    { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};
export default function JewelryBoxPage() {
  return <main className="mrb-page">
    <section className="mrb-hero"><div className="container">
      <nav className="mrb-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/products/">Products</a> / PU Leather Jewelry Boxes</nav>
      <div className="mrb-hero-grid">
        <div className="mrb-hero-copy">
          <span className="mrb-eyebrow">LEATHER-LOOK JEWELRY PRESENTATION</span>
          <h1>Custom PU Leather Jewelry Boxes for Premium Brands</h1>
          <p className="mrb-lead">Create a cohesive jewelry presentation with PU leather-look surfaces, soft-touch interior linings and tailored ring, earring, necklace or bracelet inserts. We review custom dimensions, color matching and logo treatments for each project.</p>
          <div className="mrb-tags"><span>PU Leather-Look Surfaces</span><span>Velvet-Style Interiors</span><span>Custom Inserts</span><span>Logo & Color Options</span></div>
          <div className="mrb-hero-actions">
            <a className="btn gold" href="/rfq/">Request PU Leather Jewelry Box Quote</a>
            <a href={waLink(WA_MESSAGES.products)} target="_blank" rel="noopener" className="btn-wa"><WhatsAppIcon /> Chat on WhatsApp</a>
          </div>
        </div>
        <div className="mrb-hero-media"><img src="/img/portable-ring-box-hero.webp" alt="Example of SORIVA PU leather portable ring box with velvet lining; custom jewelry box specifications vary" width="1200" height="900" /></div>
      </div>
    </div></section>
    <section className="mrb-section soft"><div className="container">
      <div className="mrb-head center"><span className="eyebrow dark">CUSTOM JEWELRY PRESENTATION</span><h2>Choose the Right Jewelry Box Format</h2><p>Choose the jewelry type first, then confirm construction and insert dimensions before quotation.</p></div>
      <div className="mrb-features">{formats.map((item, i) => <article className="mrb-feature" key={item.title}><strong>{String(i+1).padStart(2,"0")}</strong><h3>{item.title}</h3><p>{item.desc}</p></article>)}</div>
    </div></section>
    <section className="mrb-section"><div className="container">
      <div className="mrb-head center"><span className="eyebrow dark">MATERIALS &amp; CUSTOMIZATION</span><h2>Materials, Inserts and Brand Finishing</h2><p>Available construction and finishing options are reviewed against your approved specifications and samples.</p></div>
      <div className="mrb-features">{materials.map((item, i) => <article className="mrb-feature" key={item.title}><strong>{String(i+1).padStart(2,"0")}</strong><h3>{item.title}</h3><p>{item.desc}</p></article>)}</div>
      <div className="mrb-note" style={{marginTop:24}}><b>For accurate pricing:</b> Send target quantity, jewelry dimensions, preferred box structure, material, logo artwork and delivery country. MOQ, sampling and production lead time are confirmed for each specification.</div>
    </div></section>
    <section className="mrb-section soft"><div className="container">
      <div className="mrb-head center"><span className="eyebrow dark">COORDINATED PACKAGING</span><h2>Explore Related Jewelry Packaging</h2><p>Coordinate presentation boxes, protective inserts and matching paper bags across your jewelry collection.</p></div>
      <div className="mrb-hero-actions" style={{justifyContent:"center",flexWrap:"wrap"}}>{related.map(item=><a key={item.href} className="btn ghost" href={item.href}>{item.title} →</a>)}</div>
    </div></section>
    <section className="mrb-section"><div className="container">
      <div className="mrb-head center"><span className="eyebrow dark">FAQ</span><h2>Frequently Asked Questions</h2></div>
      <div className="mrb-faq">{faqs.map(f=><div className="mrb-faq-item" key={f.q}><b>{f.q}</b><p>{f.a}</p></div>)}</div>
    </div></section>
    <section className="mrb-quote" id="quote"><div className="container mrb-quote-grid">
      <div><span className="mrb-eyebrow">START YOUR PROJECT</span><h2>Request PU Leather Jewelry Box Quote</h2><p style={{color:"#c5c5c5",lineHeight:1.7,margin:"12px 0 16px"}}>Share your jewelry size, preferred box structure, materials, target quantity and shipping destination. We will review feasibility, sampling and quotation details.</p>
        <div className="mrb-contact"><div className="mrb-contact-note"><b>Email</b><a href="mailto:AMY@XINGYUE.STORE">AMY@XINGYUE.STORE</a></div><div className="mrb-contact-note"><b>WhatsApp</b><a href={waLink(WA_MESSAGES.products)} target="_blank" rel="noopener">Contact SORIVA</a></div></div>
      </div><QuoteForm />
    </div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}} />
  </main>;
}
