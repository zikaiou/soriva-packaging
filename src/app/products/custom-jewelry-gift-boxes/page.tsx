/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import ProductBuyerGuides from "../../components/ProductBuyerGuides";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../product-page.css";

const PAGE_URL="https://www.sorivapackaging.com/products/custom-jewelry-gift-boxes/";
export const metadata:Metadata={
  title:{absolute:"Custom Jewelry Gift Boxes Wholesale | SORIVA"},
  description:"Custom luxury jewelry gift boxes with magnetic closures, fitted inserts and branded logo finishes. Factory-direct wholesale packaging for jewelry brands.",
  alternates:{canonical:PAGE_URL},
  openGraph:{type:"website",url:PAGE_URL,title:"Custom Jewelry Gift Boxes Wholesale | SORIVA",description:"Custom magnetic jewelry gift boxes with fitted inserts and branded finishing.",siteName:"SORIVA Packaging",locale:"en_US",images:[{url:"https://www.sorivapackaging.com/img/soriva-custom-jewelry-gift-boxes.webp",width:1200,height:900,alt:"Custom jewelry gift box design reference"}]}
};
const options=[["Coordinated Jewelry Sets","Fitted layouts for necklaces, earrings and rings."],["Magnetic Rigid Boxes","Book-style magnetic closure with premium paper wrap."],["Custom Branding","Logo printing, foil or debossing subject to artwork."],["Wholesale Orders","Custom production from 200 pieces."]];
const faqs=[{q:"What is the minimum order quantity?",a:"200 pcs."},{q:"Can the insert fit a coordinated jewelry set?",a:"Yes, insert layouts can be tailored to your jewelry dimensions."},{q:"Can I customize the logo and color?",a:"Yes, paper wraps and logo finishes can be selected for your brand."}];
const structuredData={"@context":"https://schema.org","@graph":[
  {"@type":"Product",name:"Custom Jewelry Gift Boxes",image:"https://www.sorivapackaging.com/img/soriva-custom-jewelry-gift-boxes.webp",description:"Custom magnetic jewelry gift boxes for coordinated jewelry sets.",brand:{"@type":"Brand",name:"SORIVA Packaging"},url:PAGE_URL},
  {"@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:"https://www.sorivapackaging.com/"},{"@type":"ListItem",position:2,name:"Products",item:"https://www.sorivapackaging.com/products/"},{"@type":"ListItem",position:3,name:"Custom Jewelry Gift Boxes",item:PAGE_URL}]},
  {"@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))}
]};
export default function CustomJewelryGiftBoxesPage(){return <main className="mrb-page">
<section className="mrb-hero"><div className="container"><nav className="mrb-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/products/">Products</a> / Custom Jewelry Gift Boxes</nav><div className="mrb-hero-grid">
<div className="mrb-hero-copy"><span className="mrb-eyebrow">LUXURY JEWELRY PACKAGING</span><h1>Custom Jewelry Gift Boxes for Luxury Brands</h1><p className="mrb-lead">Premium magnetic closure jewelry gift boxes with tailored inserts, luxury paper finishes and custom branding, designed for coordinated jewelry sets, boutique collections and high-end retail gifting.</p><div className="mrb-tags"><span>MOQ 200 pcs</span><span>Magnetic Closure</span><span>Custom Inserts</span><span>Foil / Emboss / Print</span></div><div className="mrb-hero-actions"><a className="btn gold" href="/rfq/">Request Jewelry Gift Box Quote</a><a href={waLink(WA_MESSAGES.products)} target="_blank" rel="noopener" className="btn-wa"><WhatsAppIcon /> Chat on WhatsApp</a></div></div>
<div className="mrb-hero-media"><img src="/img/soriva-custom-jewelry-gift-boxes.webp" alt="Custom magnetic jewelry gift box with fitted inserts, design reference" width="1200" height="900"/></div>
</div></div></section>
<section className="mrb-section soft"><div className="container"><div className="mrb-head center"><span className="eyebrow dark">JEWELRY GIFT BOX OPTIONS</span><h2>Wholesale Jewelry Gift Boxes for Coordinated Collections</h2><p>Choose a fitted insert layout and premium rigid box finish for your jewelry collection.</p></div><div className="mrb-features">{options.map(([t,d],i)=><article className="mrb-feature" key={t}><strong>{String(i+1).padStart(2,"0")}</strong><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
<section className="mrb-section"><div className="container"><div className="mrb-head center"><span className="eyebrow dark">RELATED JEWELRY PACKAGING</span><h2>Build a Complete Jewelry Packaging System</h2><p>Coordinate jewelry gift boxes with individual presentation boxes and retail paper bags.</p><div className="mrb-hero-actions" style={{justifyContent:"center"}}><a className="btn ghost" style={{color:"#111111"}} href="/products/custom-jewelry-boxes/">Custom Jewelry Boxes →</a><a className="btn ghost" style={{color:"#111111"}} href="/products/drawer-boxes/">Drawer Boxes →</a><a className="btn ghost" style={{color:"#111111"}} href="/products/two-piece-rigid-boxes/">Two-Piece Boxes →</a><a className="btn ghost" style={{color:"#111111"}} href="/products/luxury-paper-bags/">Luxury Paper Bags →</a><a className="btn gold" href="/products/portable-ring-box/">In-Stock Portable Ring Box →</a></div></div></div></section>
<ProductBuyerGuides title="Jewelry Gift Box Buyer Guides" subtitle="Plan inserts, dimensions and finishing for jewelry gift packaging." guides={[
{tag:"Jewelry Packaging",title:"Jewelry Packaging Buyer Guide",desc:"Compare box structures, insert choices and branding options.",href:"/resources/jewelry-packaging-buyer-guide/"},
{tag:"Custom Inserts",title:"Packaging Inserts: EVA vs Paperboard vs Molded Pulp",desc:"Review insert materials and fitted presentation options.",href:"/resources/packaging-inserts-eva-vs-paperboard-vs-molded-pulp/"},
{tag:"Finishing",title:"Foil Stamping vs Embossing vs Spot UV",desc:"Choose an appropriate logo finish for your gift box.",href:"/resources/foil-stamping-vs-embossing-vs-spot-uv/"}
]} />
<section className="mrb-section soft"><div className="container"><div className="mrb-head center"><span className="eyebrow dark">FAQ</span><h2>Custom Jewelry Gift Box Questions</h2></div><div className="mrb-faq">{faqs.map(f=><div className="mrb-faq-item" key={f.q}><b>{f.q}</b><p>{f.a}</p></div>)}</div></div></section>
<section className="mrb-quote"><div className="container mrb-quote-grid"><div><span className="mrb-eyebrow">START A PROJECT</span><h2>Request a Custom Jewelry Gift Box Quote</h2><p style={{color:"#c5c5c5",lineHeight:1.7}}>Send your box or jewelry dimensions, quantity, insert preference, logo artwork and destination. Lead time depends on design complexity, quantity, materials and finishing requirements.</p></div><QuoteForm/></div></section>
<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/>
</main>}
