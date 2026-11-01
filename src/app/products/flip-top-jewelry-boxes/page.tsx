/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../product-page.css";

const PAGE_URL = "https://www.sorivapackaging.com/products/flip-top-jewelry-boxes/";
export const metadata: Metadata = {
  title: { absolute: "Custom Flip-Top Jewelry Gift Boxes | SORIVA Packaging" },
  description: "Explore custom flip-top jewelry gift boxes with hinged or lift-open lids, fitted velvet-style inserts and branded finishes for rings, earrings and necklace collections.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website", url: PAGE_URL,
    title: "Custom Flip-Top Jewelry Gift Boxes | SORIVA Packaging",
    description: "Explore custom flip-top jewelry gift boxes with hinged or lift-open lids, fitted velvet-style inserts and branded finishes for rings, earrings and necklace collections.",
    siteName: "SORIVA Packaging", locale: "en_US",
    images: [{ url: "https://www.sorivapackaging.com/img/soriva-flip-top-jewelry-boxes-hd.webp", width: 1018, height: 758, alt: "SORIVA flip-top jewelry box design visualization with gold necklace" }],
  },
};
const formats = [{title:"Hinged Ring Presentation Boxes",desc:"Compact flip-open boxes with fitted slots for engagement rings and fine jewelry."},
{title:"Flip-Top Earring Boxes",desc:"Square or rectangular formats with insert holes or slots for earrings."},
{title:"Necklace & Pendant Gift Boxes",desc:"Wider or longer boxes with tabs and cushions to present necklaces neatly."},
{title:"Decorative Gift Editions",desc:"Seasonal and premium presentation concepts with printed, foil or textured wraps."}];
const materials = [{title:"Lid Construction",desc:"Hinged, lift-open or other connected-lid construction reviewed for the intended opening action."},
{title:"Exterior Material",desc:"Wrapped paperboard, textured specialty papers or selected fabric-look surfaces, depending on structure."},
{title:"Protective Inserts",desc:"Velvet-style fabric, foam or paperboard inserts with jewelry-specific cutouts."},
{title:"Logo Finishes",desc:"Foil stamping, embossing, debossing and print options subject to approved substrate and artwork."}];
const faqs = [{q:"What is the difference between flip-top and two-piece jewelry boxes?",a:"A flip-top box has a connected lid that opens upward. A two-piece box has a separate lift-off lid. The best structure depends on display, budget and production requirements."},
{q:"Can I choose the opening angle and hinge style?",a:"Hinge and opening details can be evaluated during structural development and confirmed on a sample."},
{q:"Can the interior fit a necklace or earrings?",a:"Yes. Insert shape, slots and supports can be developed around your jewelry dimensions and display orientation."},
{q:"Do you offer logo printing and foil?",a:"Suitable print, foil and embossing methods can be reviewed based on the chosen paper or surface wrap."},
{q:"What is the MOQ and sample lead time?",a:"Both depend on the approved construction, materials and finishing. Send your quantity and dimensions to receive a project-specific quotation."}];
const related = [{title:"Custom Jewelry Boxes",href:"/products/custom-jewelry-boxes/"},
{title:"Two-Piece Rigid Boxes",href:"/products/two-piece-rigid-boxes/"},
{title:"PU Leather Jewelry Boxes",href:"/products/pu-leather-jewelry-boxes/"},
{title:"Jewelry Packaging & Matching Bags",href:"/industries/jewelry-packaging/"}];
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Service", name: "Flip-Top Jewelry Boxes Custom Manufacturing", description: "Explore custom flip-top jewelry gift boxes with hinged or lift-open lids, fitted velvet-style inserts and branded finishes for rings, earrings and necklace collections.", serviceType: "Custom Jewelry Packaging", url: PAGE_URL, provider: { "@type": "Organization", name: "SORIVA Packaging", url: "https://www.sorivapackaging.com/" }, areaServed: "Worldwide" },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sorivapackaging.com/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://www.sorivapackaging.com/products/" },
      { "@type": "ListItem", position: 3, name: "Flip-Top Jewelry Boxes", item: PAGE_URL },
    ] },
    { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};
export default function JewelryBoxPage() {
  return <main className="mrb-page">
    <section className="mrb-hero"><div className="container">
      <nav className="mrb-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/products/">Products</a> / Flip-Top Jewelry Boxes</nav>
      <div className="mrb-hero-grid">
        <div className="mrb-hero-copy">
          <span className="mrb-eyebrow">HINGED & LIFT-OPEN JEWELRY PACKAGING</span>
          <h1>Custom Flip-Top Jewelry Gift Boxes</h1>
          <p className="mrb-lead">Develop jewelry presentation boxes with a connected lift-open lid for a memorable retail reveal. Choose a suitable hinge or lid construction, fitted insert, exterior paper or wrap and branded finish for your collection.</p>
          <div className="mrb-tags"><span>Connected Lift-Open Lid</span><span>Ring / Earring / Necklace</span><span>Custom Insert Geometry</span><span>Logo & Surface Finishes</span></div>
          <div className="mrb-hero-actions">
            <a className="btn gold" href="/rfq/">Request Flip-Top Jewelry Box Quote</a>
            <a href={waLink(WA_MESSAGES.products)} target="_blank" rel="noopener" className="btn-wa"><WhatsAppIcon /> Chat on WhatsApp</a>
          </div>
        </div>
        <div className="mrb-hero-media"><img src="/img/soriva-flip-top-jewelry-boxes-hd.webp" alt="SORIVA flip-top jewelry box design visualization with gold necklace" width="1018" height="758" /></div>
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
      <div className="mrb-hero-actions" style={{justifyContent:"center",flexWrap:"wrap"}}>{related.map(item=><a key={item.href} className="btn ghost" style={{color:"#25211b",background:"#ffffff",border:"1px solid #a88b5b",fontWeight:700}} href={item.href}>{item.title} →</a>)}</div>
    </div></section>
    <section className="mrb-section"><div className="container">
      <div className="mrb-head center"><span className="eyebrow dark">FAQ</span><h2>Frequently Asked Questions</h2></div>
      <div className="mrb-faq">{faqs.map(f=><div className="mrb-faq-item" key={f.q}><b>{f.q}</b><p>{f.a}</p></div>)}</div>
    </div></section>
    <section className="mrb-quote" id="quote"><div className="container mrb-quote-grid">
      <div><span className="mrb-eyebrow">START YOUR PROJECT</span><h2>Request Flip-Top Jewelry Box Quote</h2><p style={{color:"#c5c5c5",lineHeight:1.7,margin:"12px 0 16px"}}>Share your jewelry size, preferred box structure, materials, target quantity and shipping destination. We will review feasibility, sampling and quotation details.</p>
        <div className="mrb-contact"><div className="mrb-contact-note"><b>Email</b><a href="mailto:AMY@XINGYUE.STORE">AMY@XINGYUE.STORE</a></div><div className="mrb-contact-note"><b>WhatsApp</b><a href={waLink(WA_MESSAGES.products)} target="_blank" rel="noopener">Contact SORIVA</a></div></div>
      </div><QuoteForm />
    </div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}} />
  </main>;
}
