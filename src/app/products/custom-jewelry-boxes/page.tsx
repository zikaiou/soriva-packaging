/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import ProductBuyerGuides from "../../components/ProductBuyerGuides";
import ProductCrossLinks from "../../components/ProductCrossLinks";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../product-page.css";

const PAGE_URL = "https://www.sorivapackaging.com/products/custom-jewelry-boxes/";

export const metadata: Metadata = {
  title: { absolute: "Custom Jewelry Boxes Manufacturer | Luxury Jewelry Packaging | SORIVA" },
  description: "Custom jewelry boxes for rings, necklaces, earrings, bracelets and jewelry sets. Choose rigid structures, fitted inserts, specialty papers, logo printing, foil and embossing.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website", url: PAGE_URL,
    title: "Custom Jewelry Boxes Manufacturer | SORIVA Packaging",
    description: "Custom luxury jewelry boxes with tailored structures, inserts, materials and branding for jewelry brands.",
    siteName: "SORIVA Packaging", locale: "en_US",
    images: [{ url: "https://www.sorivapackaging.com/img/jewelry.webp", width: 1200, height: 900, alt: "Custom luxury jewelry boxes" }],
  },
};

const types = [
  ["Ring Boxes","Compact presentation boxes for single rings, paired rings and bridal jewelry."],
  ["Necklace & Pendant Boxes","Longer-format boxes with insert layouts designed to control chain and pendant presentation."],
  ["Earring Boxes","Small-format boxes for studs, drops, hoops and coordinated earring sets."],
  ["Bracelet & Watch Boxes","Presentation boxes with cushions or fitted inserts for bracelets, bangles and watches."],
  ["Jewelry Gift Sets","Multi-compartment layouts for coordinated ring, necklace, earring and bracelet collections."],
  ["Drawer Jewelry Boxes","Sliding sleeve-and-tray structures for premium presentation and layered unboxing."],
];

const structures = [
  { title:"Two-Piece Rigid Boxes", desc:"Classic lid-and-base presentation for compact jewelry packaging.", href:"/products/two-piece-rigid-boxes/" },
  { title:"Drawer Boxes", desc:"Sliding rigid jewelry boxes with ribbon pulls and fitted inserts for rings, necklaces, earrings and gift sets.", href:"/products/drawer-boxes/" },
  { title:"Magnetic Rigid Boxes", desc:"Hinged presentation boxes for larger jewelry sets and luxury gifting.", href:"/products/magnetic-rigid-boxes/" },
  { title:"Gift Boxes with Inserts", desc:"Compare fitted insert options for different jewelry products.", href:"/products/custom-gift-boxes-with-inserts/" },
];

const faqs = [
  { q:"Can you customize jewelry boxes for different jewelry products?", a:"Yes. Box dimensions, insert layout and presentation can be developed around rings, necklaces, earrings, bracelets, watches and multi-piece sets." },
  { q:"What insert materials can be used?", a:"Depending on the project, options can include EVA, paperboard, foam, fabric-covered trays, velvet-style presentation surfaces and custom cushions." },
  { q:"Can the boxes include our logo?", a:"Yes. Logo options can include printing, foil stamping, embossing, debossing and other suitable finishing based on the selected paper and artwork." },
  { q:"What is the MOQ?", a:"Selected custom jewelry box projects can start from 100 pcs. Final MOQ depends on structure, materials, insert complexity and finishing." },
  { q:"Can I order a sample first?", a:"Prototype or pre-production sample support is available for selected projects to review structure, fit, materials and branding before production." },
];

const structuredData = {
  "@context":"https://schema.org",
  "@graph":[
    { "@type":"Product", name:"Custom Jewelry Boxes", image:"https://www.sorivapackaging.com/img/jewelry.webp", description:"Custom jewelry boxes for rings, necklaces, earrings, bracelets and jewelry sets.", brand:{"@type":"Brand",name:"SORIVA Packaging"}, url:PAGE_URL, additionalProperty:[
      {"@type":"PropertyValue",name:"MOQ",value:"From 100 pcs for selected custom projects"},
      {"@type":"PropertyValue",name:"In-stock option",value:"Portable ring box from 20 pcs"},
      {"@type":"PropertyValue",name:"Customization",value:"Size, structure, inserts, papers and logo finishing"}
    ] },
    { "@type":"Organization", name:"SORIVA Packaging", url:"https://www.sorivapackaging.com/", email:"AMY@XINGYUE.STORE", description:"Custom luxury packaging manufacturer with a 10,000㎡ factory, 400+ employees, 50M+ annual capacity and 20 years of production experience.", knowsAbout:["Jewelry packaging","Custom jewelry boxes","Ring boxes","Drawer boxes","Packaging inserts","Luxury finishing"] },
    { "@type":"BreadcrumbList", itemListElement:[
      {"@type":"ListItem",position:1,name:"Home",item:"https://www.sorivapackaging.com/"},
      {"@type":"ListItem",position:2,name:"Products",item:"https://www.sorivapackaging.com/products/"},
      {"@type":"ListItem",position:3,name:"Custom Jewelry Boxes",item:PAGE_URL}
    ]},
    { "@type":"FAQPage", mainEntity:faqs.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}})) }
  ]
};

export default function CustomJewelryBoxesPage() {
  return <main className="mrb-page">
    <section className="mrb-hero"><div className="container">
      <nav className="mrb-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/products/">Products</a> / Custom Jewelry Boxes</nav>
      <div className="mrb-hero-grid">
        <div className="mrb-hero-copy">
          <span className="mrb-eyebrow">CUSTOM JEWELRY PACKAGING</span>
          <h1>Custom Jewelry Boxes Manufacturer for Premium Brands</h1>
          <p className="mrb-lead">Develop branded jewelry boxes for rings, necklaces, earrings, bracelets, watches and gift sets with custom sizes, fitted inserts, specialty papers and premium logo finishing.</p>
          <div className="mrb-tags"><span>MOQ From 100 pcs</span><span>Custom Size &amp; Inserts</span><span>Foil / Emboss / Print</span><span>Rigid Box Structures</span><span>Global Shipping</span></div>
          <div className="mrb-hero-actions"><a href="/rfq/" className="btn gold">Request Jewelry Box Quote</a><a href={waLink(WA_MESSAGES.products)} target="_blank" rel="noopener" className="btn-wa"><WhatsAppIcon /> Chat on WhatsApp</a></div>
        </div>
        <div className="mrb-hero-media"><img src="/img/jewelry.webp" alt="Custom luxury jewelry box packaging" width="1200" height="900" /></div>
      </div>
    </div></section>

    <section className="mrb-section soft" style={{ paddingTop: 34, paddingBottom: 34 }}><div className="container">
      <div className="mrb-head center"><span className="eyebrow dark">QUICK BUYER ANSWERS</span><h2>Custom Jewelry Boxes — Key Sourcing Answers</h2></div>
      <div className="mrb-features" style={{gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))"}}>
        <article className="mrb-feature"><h3>What jewelry can be packaged?</h3><p>Rings, necklaces, pendants, earrings, bracelets, watches and coordinated jewelry gift sets.</p></article>
        <article className="mrb-feature"><h3>Which structures are available?</h3><p>Drawer boxes, two-piece rigid boxes, magnetic rigid boxes and other project-specific presentation structures.</p></article>
        <article className="mrb-feature"><h3>What is the custom MOQ?</h3><p>Selected custom jewelry box projects can start from 100 pcs. The in-stock portable ring box can start from 20 pcs.</p></article>
        <article className="mrb-feature"><h3>Can inserts be customized?</h3><p>Yes. Insert layout and material can be developed around the jewelry size, display direction and presentation requirements.</p></article>
      </div>
    </div></section>

    <section className="mrb-section"><div className="container">
      <div className="mrb-head center"><span className="eyebrow dark">MANUFACTURER FACTS</span><h2>SORIVA Jewelry Packaging Manufacturing Snapshot</h2></div>
      <div className="mrb-stats">
        <div className="mrb-stat"><b>10,000㎡</b><span>Factory Area</span></div>
        <div className="mrb-stat"><b>400+</b><span>Employees</span></div>
        <div className="mrb-stat"><b>50M+</b><span>Annual Capacity</span></div>
        <div className="mrb-stat"><b>20 Years</b><span>Production Experience</span></div>
      </div>
      <div className="mrb-note" style={{marginTop:24}}><b>Commercial terms:</b> Custom jewelry packaging MOQ from 100 pcs for selected projects · 1 pc prototype available for selected projects · Sea / Air / Express shipping. Lead time depends on design complexity, quantity, materials and finishing requirements.</div>
    </div></section>

    <section className="mrb-section soft"><div className="container">
      <div className="mrb-head center"><span className="eyebrow dark">BUYER COMPARISON</span><h2>Choose a Jewelry Box by Product Type</h2></div>
      <div className="mrb-table-wrap"><table className="mrb-table"><thead><tr><th>Jewelry Type</th><th>Recommended Packaging Direction</th><th>Insert Focus</th></tr></thead><tbody>
        <tr><td><strong>Rings</strong></td><td>Compact two-piece, drawer or dedicated ring box</td><td>Ring slot, orientation and presentation height.</td></tr>
        <tr><td><strong>Necklaces &amp; Pendants</strong></td><td>Longer rigid box or drawer format</td><td>Chain control, pendant position and anti-tangle layout.</td></tr>
        <tr><td><strong>Earrings</strong></td><td>Compact rigid box or coordinated set box</td><td>Post, hoop or drop-earring fixation.</td></tr>
        <tr><td><strong>Bracelets &amp; Watches</strong></td><td>Rigid presentation box with cushion or fitted insert</td><td>Circumference support and stable display position.</td></tr>
      </tbody></table></div>
    </div></section>

    <section className="mrb-section soft" style={{ paddingTop: 34, paddingBottom: 34 }}><div className="container">
      <div className="mrb-head center">
        <span className="eyebrow dark">IN-STOCK JEWELRY BOX</span>
        <h2>Portable Fingertip Ring Box — MOQ From 20 pcs</h2>
        <p>Ready-stock PU leather ring box with velvet lining, compact 10 × 4.8 × 3.3 cm size and multiple stock styles.</p>
      </div>
      <div className="mrb-apps mrb-apps-3">
        <a className="mrb-app mrb-app-link" href="/products/portable-ring-box/">
          <img src="/img/portable-ring-box-hero.webp" alt="Portable fingertip ring box in stock" />
          <div>
            <b>Portable Ring Box</b>
            <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.55, color: "#5b554e" }}>PU leather + velvet lining · In stock · MOQ from 20 pcs.</p>
            <span className="mrb-app-cta">View Product →</span>
          </div>
        </a>
      </div>
    </div></section>

    <section className="mrb-section soft"><div className="container">
      <div className="mrb-head center"><span className="eyebrow dark">JEWELRY BOX RANGE</span><h2>Custom Boxes by Jewelry Type</h2><p>Choose the packaging format around the jewelry piece, presentation style, insert and retail experience.</p></div>
      <div className="mrb-features">{types.map(([title,desc],i)=><article className="mrb-feature" key={title}><strong>{String(i+1).padStart(2,"0")}</strong><h3>{title}</h3><p>{desc}</p></article>)}</div>
    </div></section>

    <section className="mrb-section"><div className="container">
      <div className="mrb-head center"><span className="eyebrow dark">BOX STRUCTURES</span><h2>Choose a Structure for Your Jewelry Packaging</h2><p>Different jewelry products can use different rigid structures and insert systems.</p></div>
      <div className="mrb-apps mrb-apps-3">{structures.map(s=><a className="mrb-app mrb-app-link" href={s.href} key={s.href}><div><b>{s.title}</b><p>{s.desc}</p><span className="mrb-app-cta">Explore Structure →</span></div></a>)}</div>
    </div></section>

    <ProductBuyerGuides title="Jewelry Packaging Buyer Guides" subtitle="Plan dimensions, inserts, materials and finishing before requesting a quote." guides={[
      {tag:"Jewelry Packaging",title:"Jewelry Packaging Buyer Guide",desc:"A practical overview of structures, inserts and branding for jewelry packaging.",href:"/resources/jewelry-packaging-buyer-guide/"},
      {tag:"Custom Inserts",title:"EVA vs Paperboard vs Molded Pulp Inserts",desc:"Compare insert materials for jewelry and premium product presentation.",href:"/resources/packaging-inserts-eva-vs-paperboard-vs-molded-pulp/"},
      {tag:"Finishing",title:"Foil Stamping vs Embossing vs Spot UV",desc:"Compare premium logo and surface finishing options.",href:"/resources/foil-stamping-vs-embossing-vs-spot-uv/"},
      {tag:"Measurement",title:"How to Measure a Product for Custom Box Packaging",desc:"Prepare product and packaging dimensions before sampling.",href:"/resources/how-to-measure-product-for-custom-box-packaging/"}
    ]} />

    <section className="mrb-section soft"><div className="container"><div className="mrb-head center"><span className="eyebrow dark">FAQ</span><h2>Custom Jewelry Box Questions</h2></div><div className="mrb-faq">{faqs.map(f=><div className="mrb-faq-item" key={f.q}><b>{f.q}</b><p>{f.a}</p></div>)}</div></div></section>

    <section className="mrb-quote"><div className="container mrb-quote-grid"><div><span className="mrb-eyebrow">START A PROJECT</span><h2>Request a Custom Jewelry Box Quote</h2><p style={{color:"#c5c5c5",lineHeight:1.7}}>Send your jewelry dimensions, quantity, preferred box style, insert requirements, logo artwork and destination. Lead time depends on design complexity, quantity, materials and finishing requirements.</p></div><QuoteForm /></div></section>
    <ProductCrossLinks industryHref="/industries/jewelry-packaging/" industryLabel="Jewelry Packaging" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}} />
  </main>;
}