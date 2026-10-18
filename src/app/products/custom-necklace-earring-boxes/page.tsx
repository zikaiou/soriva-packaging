/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import ProductBuyerGuides from "../../components/ProductBuyerGuides";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../product-page.css";

const PAGE_URL="https://www.sorivapackaging.com/products/custom-necklace-earring-boxes/";
export const metadata:Metadata={
 title:{absolute:"Custom Necklace & Earring Boxes Manufacturer | SORIVA Packaging"},
 description:"Custom necklace, pendant and earring boxes for jewelry brands with fitted inserts, chain-control layouts, premium papers, logo printing, foil and embossing.",
 alternates:{canonical:PAGE_URL},
 openGraph:{type:"website",url:PAGE_URL,title:"Custom Necklace & Earring Boxes | SORIVA Packaging",description:"Custom jewelry boxes for necklaces, pendants, earrings and coordinated sets.",siteName:"SORIVA Packaging",locale:"en_US",images:[{url:"https://www.sorivapackaging.com/img/jewelry.webp",width:1200,height:900,alt:"Custom necklace and earring packaging boxes"}]}
};
const applications=[
 ["Necklace Boxes","Longer-format layouts for chains, pendants and fine necklaces."],
 ["Pendant Boxes","Compact presentation with insert positions developed around the pendant and chain."],
 ["Earring Boxes","Small rigid boxes for studs, drops, hoops and statement earrings."],
 ["Necklace + Earring Sets","Coordinated multi-cavity inserts for matched jewelry collections."],
 ["Drawer Jewelry Boxes","Sliding trays for a directional reveal and premium gift presentation."],
 ["Retail Gift Packaging","Coordinate inner jewelry boxes with larger rigid boxes or branded paper bags."],
];
const faqs=[
 {q:"How do you keep necklaces arranged inside the box?",a:"Insert layouts can include suitable tabs, slots, recesses or other positioning features based on the chain length, pendant size and presentation direction."},
 {q:"Can one box hold both a necklace and earrings?",a:"Yes. Multi-cavity or compartment layouts can be developed for coordinated jewelry sets."},
 {q:"Can earring boxes be made for studs and drop earrings?",a:"Yes. Insert geometry can be adjusted for studs, hoops, drop earrings and other formats."},
 {q:"Can the paper and logo match our brand direction?",a:"Yes. Specialty papers, printed wraps, foil, embossing, debossing and other suitable finishes can be reviewed based on your artwork and sample approval."},
 {q:"What is the MOQ?",a:"Selected custom necklace and earring box projects can start from 100 pcs. Final MOQ depends on structure, size, insert and finishing requirements."},
];
const structuredData={"@context":"https://schema.org","@graph":[
 {"@type":"Product",name:"Custom Necklace and Earring Boxes",image:"https://www.sorivapackaging.com/img/jewelry.webp",description:"Custom necklace, pendant and earring boxes with fitted inserts and premium finishing.",brand:{"@type":"Brand",name:"SORIVA Packaging"},url:PAGE_URL},
 {"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://www.sorivapackaging.com/"},{"@type":"ListItem",position:2,name:"Products",item:"https://www.sorivapackaging.com/products/"},{"@type":"ListItem",position:3,name:"Necklace & Earring Boxes",item:PAGE_URL}]},
 {"@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))}
]};
export default function NecklaceEarringBoxesPage(){return <main className="mrb-page">
<section className="mrb-hero"><div className="container"><nav className="mrb-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/products/">Products</a> / Necklace &amp; Earring Boxes</nav><div className="mrb-hero-grid">
<div className="mrb-hero-copy"><span className="mrb-eyebrow">NECKLACE, PENDANT &amp; EARRING PACKAGING</span><h1>Custom Necklace &amp; Earring Boxes for Jewelry Brands</h1><p className="mrb-lead">Create branded boxes for necklaces, pendants, earrings and coordinated jewelry sets with tailored dimensions, fitted inserts, specialty papers and premium logo finishing.</p><div className="mrb-tags"><span>MOQ From 100 pcs</span><span>Custom Chain &amp; Earring Inserts</span><span>Rigid Box Structures</span><span>Foil / Emboss / Print</span></div><div className="mrb-hero-actions"><a className="btn gold" href="/rfq/">Request Jewelry Box Quote</a><a href={waLink(WA_MESSAGES.products)} target="_blank" rel="noopener" className="btn-wa"><WhatsAppIcon /> Chat on WhatsApp</a></div></div>
<div className="mrb-hero-media"><img src="/img/jewelry.webp" alt="Custom necklace and earring packaging boxes" width="1200" height="900"/></div>
</div></div></section>
<section className="mrb-section soft"><div className="container"><div className="mrb-head center"><span className="eyebrow dark">PRODUCT FORMATS</span><h2>Packaging for Necklaces, Pendants, Earrings &amp; Sets</h2><p>Different jewelry formats need different insert geometry and box proportions.</p></div><div className="mrb-features">{applications.map(([t,d],i)=><article className="mrb-feature" key={t}><strong>{String(i+1).padStart(2,"0")}</strong><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
<section className="mrb-section"><div className="container"><div className="mrb-head center"><span className="eyebrow dark">RELATED PRODUCTS</span><h2>Connect Jewelry Boxes with Your Packaging System</h2><p>Use dedicated jewelry boxes together with rigid gift boxes, inserts and matching retail bags.</p><div className="mrb-hero-actions" style={{justifyContent:"center"}}><a className="btn ghost" href="/products/custom-jewelry-boxes/">Custom Jewelry Boxes →</a><a className="btn ghost" href="/products/custom-ring-boxes/">Ring Boxes →</a><a className="btn ghost" href="/products/drawer-boxes/">Drawer Boxes →</a><a className="btn ghost" href="/products/custom-gift-boxes-with-inserts/">Boxes with Inserts →</a></div></div></div></section>
<ProductBuyerGuides title="Necklace & Earring Packaging Guides" subtitle="Plan fit, inserts, materials and branded finishing." guides={[
{tag:"Jewelry Packaging",title:"Jewelry Packaging Buyer Guide",desc:"Plan structures, inserts and branding for fine jewelry packaging.",href:"/resources/jewelry-packaging-buyer-guide/"},
{tag:"Custom Inserts",title:"EVA vs Paperboard vs Molded Pulp Inserts",desc:"Compare insert systems for different jewelry products.",href:"/resources/packaging-inserts-eva-vs-paperboard-vs-molded-pulp/"},
{tag:"Measurement",title:"How to Measure a Product for Custom Box Packaging",desc:"Prepare product measurements and presentation requirements for quotation.",href:"/resources/how-to-measure-product-for-custom-box-packaging/"}
]} />
<section className="mrb-section soft"><div className="container"><div className="mrb-head center"><span className="eyebrow dark">FAQ</span><h2>Necklace &amp; Earring Box Questions</h2></div><div className="mrb-faq">{faqs.map(f=><div className="mrb-faq-item" key={f.q}><b>{f.q}</b><p>{f.a}</p></div>)}</div></div></section>
<section className="mrb-quote"><div className="container mrb-quote-grid"><div><span className="mrb-eyebrow">START A PROJECT</span><h2>Request a Necklace or Earring Box Quote</h2><p style={{color:"#c5c5c5",lineHeight:1.7}}>Send your jewelry dimensions, quantity, preferred box format, insert layout, artwork and destination. Lead time depends on design complexity, quantity, materials and finishing requirements.</p></div><QuoteForm/></div></section>
<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/>
</main>}
