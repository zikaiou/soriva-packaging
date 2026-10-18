/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import ProductBuyerGuides from "../../components/ProductBuyerGuides";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../product-page.css";

const PAGE_URL="https://www.sorivapackaging.com/products/portable-ring-box/";

export const metadata:Metadata={
  title:{absolute:"Portable Ring Box | PU Leather Travel Ring Case | MOQ 20 | SORIVA"},
  description:"In-stock portable ring box made with PU leather and velvet lining. Compact 10 × 4.8 × 3.3 cm jewelry case for rings and travel. MOQ from 20 pcs.",
  alternates:{canonical:PAGE_URL},
  openGraph:{
    type:"website",url:PAGE_URL,
    title:"Portable Ring Box | PU Leather Travel Ring Case | SORIVA",
    description:"In-stock fingertip ring box with PU leather exterior, velvet lining and MOQ from 20 pcs.",
    siteName:"SORIVA Packaging",locale:"en_US",
    images:[{url:"https://www.sorivapackaging.com/img/project-jewelry.webp",width:1200,height:900,alt:"Portable ring box for jewelry storage"}]
  }
};

const specs=[
  ["Material","PU Leather + Velvet Lining"],
  ["Product Size","10 × 4.8 × 3.3 cm"],
  ["Net Weight","0.05 kg"],
  ["Carton Size","34 × 29 × 31 cm"],
  ["Carton Quantity","105 pcs"],
  ["Stock Status","In Stock"],
  ["MOQ","20 pcs"],
];

const features=[
  ["Compact Portable Size","Slim 10 cm format for travel, handbag storage and daily jewelry organization."],
  ["PU Leather Exterior","Clean leather-look surface with gold-tone metal frame for a refined presentation."],
  ["Velvet Lining","Soft inner lining and ring slots designed for neat jewelry presentation."],
  ["Multiple Ring Slots","Interior layout accommodates different ring sizes and multiple pieces."],
  ["Four Style Options","Available in jacquard blue, jacquard pink, black and beige stock styles."],
  ["Low MOQ Stock Order","In-stock configuration can start from 20 pcs for selected orders."],
];

const faqs=[
  {q:"Is this portable ring box in stock?",a:"Yes. This style is currently offered as an in-stock item, subject to inventory availability at the time of order."},
  {q:"What is the minimum order quantity?",a:"The MOQ for the in-stock version starts from 20 pcs."},
  {q:"What material is used?",a:"The exterior is PU leather and the interior uses a velvet lining."},
  {q:"What is the product size?",a:"The ring box measures approximately 10 × 4.8 × 3.3 cm."},
  {q:"Can I order different colors?",a:"Stock style options include jacquard blue, jacquard pink, black and beige. Availability should be confirmed before ordering."},
];

const structuredData={"@context":"https://schema.org","@graph":[
  {"@type":"Product",name:"Portable Ring Box",image:"https://www.sorivapackaging.com/img/project-jewelry.webp",description:"In-stock portable ring box made with PU leather and velvet lining.",brand:{"@type":"Brand",name:"SORIVA Packaging"},url:PAGE_URL},
  {"@type":"BreadcrumbList",itemListElement:[
    {"@type":"ListItem",position:1,name:"Home",item:"https://www.sorivapackaging.com/"},
    {"@type":"ListItem",position:2,name:"Products",item:"https://www.sorivapackaging.com/products/"},
    {"@type":"ListItem",position:3,name:"Portable Ring Box",item:PAGE_URL}
  ]},
  {"@type":"FAQPage",mainEntity:faqs.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))}
]};

export default function PortableRingBoxPage(){return <main className="mrb-page">
<section className="mrb-hero"><div className="container">
<nav className="mrb-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/products/">Products</a> / Portable Ring Box</nav>
<div className="mrb-hero-grid">
<div className="mrb-hero-copy">
<span className="mrb-eyebrow">IN-STOCK JEWELRY PACKAGING</span>
<h1>Portable Fingertip Ring Box</h1>
<p className="mrb-lead">Compact PU leather ring case with velvet lining for travel, retail and daily jewelry storage. In stock with a low MOQ from 20 pcs.</p>
<div className="mrb-tags"><span>In Stock</span><span>MOQ From 20 pcs</span><span>PU Leather + Velvet</span><span>10 × 4.8 × 3.3 cm</span></div>
<div className="mrb-hero-actions"><a className="btn gold" href="/rfq/">Request Stock Quote</a><a href={waLink(WA_MESSAGES.products)} target="_blank" rel="noopener" className="btn-wa"><WhatsAppIcon /> Chat on WhatsApp</a></div>
</div>
<div className="mrb-hero-media"><img src="/img/project-jewelry.webp" alt="Portable fingertip ring box with velvet lining" width="1200" height="900"/></div>
</div></div></section>

<section className="mrb-section soft"><div className="container">
<div className="mrb-head center"><span className="eyebrow dark">PRODUCT FEATURES</span><h2>Compact Ring Storage for Travel &amp; Retail</h2><p>A ready-stock jewelry case for buyers who need a small order quantity and a refined ring presentation.</p></div>
<div className="mrb-features">{features.map(([t,d],i)=><article className="mrb-feature" key={t}><strong>{String(i+1).padStart(2,"0")}</strong><h3>{t}</h3><p>{d}</p></article>)}</div>
</div></section>

<section className="mrb-section"><div className="container">
<div className="mrb-head center"><span className="eyebrow dark">PRODUCT SPECIFICATIONS</span><h2>Portable Ring Box Details</h2></div>
<div className="mrb-features">{specs.map(([k,v])=><article className="mrb-feature" key={k}><h3>{k}</h3><p>{v}</p></article>)}</div>
</div></section>

<section className="mrb-section soft"><div className="container">
<div className="mrb-head center"><span className="eyebrow dark">STYLE OPTIONS</span><h2>Available Stock Colors</h2><p>Jacquard Blue · Jacquard Pink · Black · Beige</p></div>
<div className="mrb-hero-actions" style={{justifyContent:"center"}}>
<a className="btn ghost" style={{color:"#2f241d",borderColor:"#b9a48d",background:"transparent"}} href="/products/custom-ring-boxes/">Custom Ring Boxes →</a>
<a className="btn ghost" style={{color:"#2f241d",borderColor:"#b9a48d",background:"transparent"}} href="/products/custom-jewelry-boxes/">Custom Jewelry Boxes →</a>
<a className="btn ghost" style={{color:"#2f241d",borderColor:"#b9a48d",background:"transparent"}} href="/industries/jewelry-packaging/">Jewelry Packaging →</a>
</div>
</div></section>

<ProductBuyerGuides title="Jewelry Packaging Guides" subtitle="Compare custom packaging options if you need branded or fully customized jewelry boxes." guides={[
{tag:"Jewelry Packaging",title:"Jewelry Packaging Buyer Guide",desc:"Compare structures, inserts and finishing for jewelry packaging.",href:"/resources/jewelry-packaging-buyer-guide/"},
{tag:"Custom Ring Boxes",title:"Custom Ring Boxes",desc:"Explore fully customized ring box structures and branding options.",href:"/products/custom-ring-boxes/"},
{tag:"Custom Inserts",title:"Packaging Inserts Guide",desc:"Compare insert materials for different jewelry packaging projects.",href:"/resources/packaging-inserts-eva-vs-paperboard-vs-molded-pulp/"}
]} />

<section className="mrb-section soft"><div className="container"><div className="mrb-head center"><span className="eyebrow dark">FAQ</span><h2>Portable Ring Box Questions</h2></div><div className="mrb-faq">{faqs.map(f=><div className="mrb-faq-item" key={f.q}><b>{f.q}</b><p>{f.a}</p></div>)}</div></div></section>

<section className="mrb-quote"><div className="container mrb-quote-grid"><div><span className="mrb-eyebrow">STOCK ORDER</span><h2>Request a Portable Ring Box Quote</h2><p style={{color:"#c5c5c5",lineHeight:1.7}}>Send the quantity, preferred color mix and destination. Stock availability is confirmed before order placement.</p><ul style={{color:"#c5c5c5",lineHeight:2,paddingLeft:18}}><li>MOQ from 20 pcs</li><li>PU leather + velvet lining</li><li>Four stock style options</li><li>Sea, Air &amp; Express shipping available</li></ul></div><QuoteForm/></div></section>

<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/>
</main>}
