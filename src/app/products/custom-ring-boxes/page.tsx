/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import ProductBuyerGuides from "../../components/ProductBuyerGuides";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../product-page.css";

const PAGE_URL="https://www.sorivapackaging.com/products/custom-ring-boxes/";
export const metadata:Metadata={
  title:{absolute:"Custom Ring Boxes Manufacturer | Luxury Ring Packaging | SORIVA"},
  description:"Custom ring boxes for jewelry brands, bridal collections and premium retail. Tailored sizes, ring inserts, specialty papers, logo printing, foil and embossing.",
  alternates:{canonical:PAGE_URL},
  openGraph:{type:"website",url:PAGE_URL,title:"Custom Ring Boxes Manufacturer | SORIVA Packaging",description:"Custom luxury ring boxes with fitted inserts, premium papers and branded finishing.",siteName:"SORIVA Packaging",locale:"en_US",images:[{url:"https://www.sorivapackaging.com/img/project-jewelry.webp",width:1200,height:900,alt:"Custom ring box packaging"}]}
};
const options=[
  ["Single Ring Boxes","Compact presentation for engagement rings, fine rings and branded retail collections."],
  ["Double Ring Boxes","Layouts for paired rings, wedding bands and coordinated ring presentations."],
  ["Two-Piece Ring Boxes","Classic lift-off lid structure for compact jewelry presentation."],
  ["Drawer Ring Boxes","Sliding tray format with optional ribbon pull and fitted insert."],
  ["Premium Presentation Ring Boxes","Larger rigid structures for gifting, bridal collections and special editions."],
  ["Matching Retail Packaging","Coordinate ring boxes with jewelry paper bags and larger gift packaging."],
];
const faqs=[
  {q:"Can ring box dimensions be fully customized?",a:"Yes. Dimensions and insert geometry can be developed around the ring size, orientation and presentation requirements."},
  {q:"What insert can hold the ring?",a:"Depending on the design, ring slots can be developed using EVA, foam, fabric-covered materials or other suitable insert constructions."},
  {q:"Can you make boxes for two rings?",a:"Yes. Double-ring layouts can be developed for wedding bands, paired rings or coordinated sets."},
  {q:"Can I add foil or embossing?",a:"Yes. Logo finishing can include foil stamping, embossing, debossing or printing depending on the paper and artwork."},
  {q:"What is the MOQ?",a:"Selected custom ring box projects can start from 100 pcs. Final MOQ depends on materials, structure, insert and finishing."},
];
const structuredData={"@context":"https://schema.org","@graph":[
  {"@type":"Product",name:"Custom Ring Boxes",image:"https://www.sorivapackaging.com/img/project-jewelry.webp",description:"Custom ring boxes for jewelry brands and premium retail.",brand:{"@type":"Brand",name:"SORIVA Packaging"},url:PAGE_URL},
  {"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://www.sorivapackaging.com/"},{"@type":"ListItem",position:2,name:"Products",item:"https://www.sorivapackaging.com/products/"},{"@type":"ListItem",position:3,name:"Custom Ring Boxes",item:PAGE_URL}]},
  {"@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))}
]};
export default function CustomRingBoxesPage(){return <main className="mrb-page">
<section className="mrb-hero"><div className="container"><nav className="mrb-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/products/">Products</a> / Custom Ring Boxes</nav><div className="mrb-hero-grid">
<div className="mrb-hero-copy"><span className="mrb-eyebrow">RING &amp; BRIDAL JEWELRY PACKAGING</span><h1>Custom Ring Boxes Manufacturer for Jewelry Brands</h1><p className="mrb-lead">Create custom ring boxes for engagement rings, wedding bands and fine jewelry with tailored dimensions, fitted ring inserts, specialty papers and premium branded finishing.</p><div className="mrb-tags"><span>MOQ From 100 pcs</span><span>Single / Double Ring Layouts</span><span>Custom Inserts</span><span>Foil / Emboss / Print</span></div><div className="mrb-hero-actions"><a className="btn gold" href="/rfq/">Request Ring Box Quote</a><a href={waLink(WA_MESSAGES.products)} target="_blank" rel="noopener" className="btn-wa"><WhatsAppIcon /> Chat on WhatsApp</a></div></div>
<div className="mrb-hero-media"><img src="/img/project-jewelry.webp" alt="Custom ring box for jewelry packaging" width="1200" height="900"/></div>
</div></div></section>
<section className="mrb-section soft"><div className="container"><div className="mrb-head center"><span className="eyebrow dark">RING BOX OPTIONS</span><h2>Ring Packaging Formats for Different Collections</h2><p>Choose a compact structure and insert layout around the ring, brand presentation and gifting experience.</p></div><div className="mrb-features">{options.map(([t,d],i)=><article className="mrb-feature" key={t}><strong>{String(i+1).padStart(2,"0")}</strong><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
<section className="mrb-section"><div className="container"><div className="mrb-head center"><span className="eyebrow dark">RELATED JEWELRY PACKAGING</span><h2>Build a Complete Jewelry Packaging System</h2><p>Use a dedicated ring box for the product, then coordinate larger gift boxes and retail paper bags where needed.</p><div className="mrb-hero-actions" style={{justifyContent:"center"}}><a className="btn ghost" href="/products/custom-jewelry-boxes/">Custom Jewelry Boxes →</a><a className="btn ghost" href="/products/drawer-boxes/">Drawer Boxes →</a><a className="btn ghost" href="/products/two-piece-rigid-boxes/">Two-Piece Boxes →</a><a className="btn ghost" href="/products/luxury-paper-bags/">Luxury Paper Bags →</a></div></div></div></section>
<ProductBuyerGuides title="Ring Box Buyer Guides" subtitle="Plan inserts, dimensions and finishing for compact jewelry packaging." guides={[
{tag:"Jewelry Packaging",title:"Jewelry Packaging Buyer Guide",desc:"Compare box structures, insert choices and branding options.",href:"/resources/jewelry-packaging-buyer-guide/"},
{tag:"Custom Inserts",title:"Packaging Inserts: EVA vs Paperboard vs Molded Pulp",desc:"Review insert materials and fitted presentation options.",href:"/resources/packaging-inserts-eva-vs-paperboard-vs-molded-pulp/"},
{tag:"Finishing",title:"Foil Stamping vs Embossing vs Spot UV",desc:"Choose an appropriate logo finish for your ring box.",href:"/resources/foil-stamping-vs-embossing-vs-spot-uv/"}
]} />
<section className="mrb-section soft"><div className="container"><div className="mrb-head center"><span className="eyebrow dark">FAQ</span><h2>Custom Ring Box Questions</h2></div><div className="mrb-faq">{faqs.map(f=><div className="mrb-faq-item" key={f.q}><b>{f.q}</b><p>{f.a}</p></div>)}</div></div></section>
<section className="mrb-quote"><div className="container mrb-quote-grid"><div><span className="mrb-eyebrow">START A PROJECT</span><h2>Request a Custom Ring Box Quote</h2><p style={{color:"#c5c5c5",lineHeight:1.7}}>Send your box or ring dimensions, quantity, insert preference, logo artwork and destination. Lead time depends on design complexity, quantity, materials and finishing requirements.</p></div><QuoteForm/></div></section>
<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/>
</main>}
