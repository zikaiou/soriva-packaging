/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../lib/whatsapp";
import "../products/product-page.css";

const PAGE_URL = "https://www.sorivapackaging.com/about/";

export const metadata: Metadata = {
  title: { absolute: "About SORIVA Packaging | Custom Luxury Packaging Manufacturer" },
  description:
    "Learn about SORIVA Packaging, a custom luxury packaging manufacturer with a 10,000㎡ factory, 400+ employees, 50M+ annual capacity and 20 years of production experience.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "About SORIVA Packaging | Custom Luxury Packaging Manufacturer",
    description:
      "SORIVA manufactures custom rigid boxes, luxury paper bags and jewelry packaging for global brands, with sampling, customization and worldwide shipping support.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
    images: [{ url: "https://www.sorivapackaging.com/img/factory-v1-workshop-overview.jpg", alt: "SORIVA custom packaging manufacturing" }],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      name: "About SORIVA Packaging",
      url: PAGE_URL,
      mainEntity: { "@id": "https://www.sorivapackaging.com/#organization" }
    },
    {
      "@type": "Organization",
      "@id": "https://www.sorivapackaging.com/#organization",
      name: "SORIVA Packaging",
      url: "https://www.sorivapackaging.com/",
      email: "AMY@XINGYUE.STORE",
      description: "Custom luxury packaging manufacturer for rigid gift boxes, luxury paper bags, jewelry packaging and other premium packaging projects.",
      numberOfEmployees: { "@type": "QuantitativeValue", minValue: 400 },
      knowsAbout: ["Custom luxury packaging","Rigid gift boxes","Luxury paper bags","Jewelry packaging","Packaging inserts","Foil stamping","Embossing"],
      additionalProperty: [
        { "@type": "PropertyValue", name: "Factory Area", value: "10,000㎡" },
        { "@type": "PropertyValue", name: "Annual Capacity", value: "50M+ boxes" },
        { "@type": "PropertyValue", name: "Production Experience", value: "20 years" },
        { "@type": "PropertyValue", name: "Custom Packaging MOQ", value: "From 100 pcs for selected projects" }
      ]
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sorivapackaging.com/" },
        { "@type": "ListItem", position: 2, name: "About SORIVA", item: PAGE_URL }
      ]
    }
  ]
};

export default function AboutPage() {
  return (
    <main className="mrb-page">
      <section className="mrb-hero">
        <div className="container">
          <nav className="mrb-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a> / About SORIVA</nav>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">ABOUT SORIVA PACKAGING</span>
              <h1>Custom Luxury Packaging Manufacturer for Global Brands</h1>
              <p className="mrb-lead">SORIVA Packaging develops and manufactures custom rigid gift boxes, luxury paper bags, jewelry packaging and coordinated packaging solutions for brands that need flexible customization, sampling and international delivery support.</p>
              <div className="mrb-tags"><span>10,000㎡ Factory</span><span>400+ Employees</span><span>50M+ Annual Capacity</span><span>20 Years Experience</span><span>MOQ From 100 pcs</span></div>
              <div className="mrb-hero-actions"><a href="/rfq/" className="btn gold">Request Packaging Quote</a><a href={waLink(WA_MESSAGES.home)} target="_blank" rel="noopener" className="btn-wa"><WhatsAppIcon /> Chat on WhatsApp</a></div>
            </div>
            <div className="mrb-hero-media"><img src="/img/factory-v1-workshop-overview.jpg" alt="SORIVA custom packaging factory and production environment" width="1200" height="900" /></div>
          </div>
        </div>
      </section>

      <section className="mrb-section soft"><div className="container">
        <div className="mrb-head center"><span className="eyebrow dark">QUICK COMPANY ANSWERS</span><h2>What Buyers Should Know About SORIVA</h2></div>
        <div className="mrb-features" style={{gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))"}}>
          <article className="mrb-feature"><h3>What does SORIVA manufacture?</h3><p>Custom rigid boxes, magnetic and foldable rigid boxes, drawer boxes, two-piece boxes, tube packaging, luxury paper bags and jewelry packaging.</p></article>
          <article className="mrb-feature"><h3>Who does SORIVA serve?</h3><p>Beauty, fragrance, jewelry, fashion, candle, corporate gift and other premium-product brands worldwide.</p></article>
          <article className="mrb-feature"><h3>What is the custom MOQ?</h3><p>Selected custom packaging projects can start from 100 pcs. The confirmed MOQ depends on structure, material, printing and finishing requirements.</p></article>
          <article className="mrb-feature"><h3>Can buyers request samples?</h3><p>Yes. A 1 pc prototype or pre-production sample is available for selected projects before mass production.</p></article>
        </div>
      </div></section>

      <section className="mrb-section"><div className="container">
        <div className="mrb-head center"><span className="eyebrow dark">MANUFACTURING PROFILE</span><h2>Verified Company Facts Used Across SORIVA</h2><p>These core facts are kept consistent across product, factory and sourcing pages.</p></div>
        <div className="mrb-stats">
          <div className="mrb-stat"><b>10,000㎡</b><span>Factory Area</span></div>
          <div className="mrb-stat"><b>400+</b><span>Employees</span></div>
          <div className="mrb-stat"><b>50M+</b><span>Annual Capacity</span></div>
          <div className="mrb-stat"><b>20 Years</b><span>Production Experience</span></div>
        </div>
        <div className="mrb-note" style={{marginTop:24}}><b>Commercial support:</b> custom sizes and specifications · MOQ from 100 pcs for selected projects · 1 pc prototype available for selected projects · Sea / Air / Express shipping. Lead time depends on design complexity, quantity, materials and finishing requirements.</div>
      </div></section>

      <section className="mrb-section soft"><div className="container">
        <div className="mrb-head center"><span className="eyebrow dark">WHAT WE MAKE</span><h2>Core Custom Packaging Categories</h2></div>
        <div className="mrb-features" style={{gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))"}}>
          <article className="mrb-feature"><h3>Rigid Gift Boxes</h3><p>Magnetic, foldable magnetic, drawer and two-piece rigid structures for premium products and gifting.</p><p><a href="/products/" style={{color:"var(--color-gold, #c79a51)",fontWeight:700}}>Explore Products →</a></p></article>
          <article className="mrb-feature"><h3>Luxury Paper Bags</h3><p>Custom retail bags with specialty papers, ribbon or rope handles, printing and premium finishing.</p><p><a href="/products/luxury-paper-bags/" style={{color:"var(--color-gold, #c79a51)",fontWeight:700}}>Explore Paper Bags →</a></p></article>
          <article className="mrb-feature"><h3>Jewelry Packaging</h3><p>Custom packaging for rings, necklaces, earrings, bracelets, watches and coordinated jewelry sets.</p><p><a href="/products/custom-jewelry-boxes/" style={{color:"var(--color-gold, #c79a51)",fontWeight:700}}>Explore Jewelry Packaging →</a></p></article>
          <article className="mrb-feature"><h3>Sampling &amp; Production</h3><p>Review structure, materials, finishing and manufacturing evidence before moving into bulk production.</p><p><a href="/factory/" style={{color:"var(--color-gold, #c79a51)",fontWeight:700}}>Verify Factory Capability →</a></p></article>
        </div>
      </div></section>

      <section className="mrb-quote"><div className="container mrb-quote-grid">
        <div><span className="mrb-eyebrow">START A PROJECT</span><h2>Discuss Your Custom Packaging Project</h2><p style={{color:"#c5c5c5",lineHeight:1.7}}>Send your product dimensions, target quantity, preferred structure, artwork or reference images and delivery destination.</p><div className="mrb-contact"><div className="mrb-contact-note"><b>WhatsApp</b><a href="https://wa.me/8615913881634" target="_blank" rel="noopener">+86 159 1388 1634</a></div><div className="mrb-contact-note"><b>Email</b><a href="mailto:AMY@XINGYUE.STORE">AMY@XINGYUE.STORE</a></div></div></div>
        <div><a className="btn gold" href="/rfq/">Request a Packaging Quote →</a></div>
      </div></section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}} />
    </main>
  );
}
