/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import type { Metadata } from "next";

import QuoteForm from "./components/QuoteForm";
import WhatsAppIcon from "./components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "./lib/whatsapp";

export const metadata: Metadata = {
  title: { absolute: "Custom Gift Boxes & Paper Bags Manufacturer | SORIVA" },
  description: "Explore magnetic gift boxes, drawer boxes, lid-and-base boxes, foldable packaging, jewelry boxes, paper tubes and custom paper bags. View details and request a quote.",
  openGraph: {
    title: "Custom Gift Boxes & Paper Bags Manufacturer | SORIVA",
    description: "Compare custom gift box structures, jewelry packaging and paper shopping bags, with dedicated details and quotation options for every product type.",
    url: "https://www.sorivapackaging.com/",
    images: [{ url: "/img/hero-boxes.webp", width: 1200, height: 820, alt: "Custom luxury gift box packaging" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Gift Boxes & Paper Bags Manufacturer | SORIVA",
    description: "Custom gift boxes, jewelry packaging and printed paper bags. Compare structures and request a project quote.",
    images: ["/img/hero-boxes.webp"],
  },
};

const products: { slug: string; title: string; img: string; alt: string; structure: string; use: string; options: string; description?: string; href?: string }[] = [
  {
    "slug": "custom-magnetic-rigid-gift-box",
    "title": "Custom Magnetic Rigid Gift Box",
    "img": "/img/magnetic-rigid.webp",
    "alt": "Black magnetic rigid gift box with a fitted perfume insert and gold branding",
    "structure": "Rigid greyboard · hinged magnetic flap",
    "use": "Cosmetics, fragrance and premium gift sets",
    "options": "Custom insert, logo printing and surface finishes",
    description: "Rigid magnetic gift boxes with fitted inserts and branded finishes for premium product presentation."
  },
  {
    "slug": "two-piece-rigid-boxes",
    "title": "Two-Piece Lid & Base Boxes",
    "img": "/img/two-piece-rigid-box-correct.png.png",
    "alt": "Two-Piece Lid & Base Boxes packaging reference",
    "structure": "Separate lid and base",
    "use": "Jewelry, apparel and premium gifts",
    "options": "Custom dimensions, paper wrap and inserts",
    description: "Classic lift-off lid boxes with custom wraps and fitted interiors for premium retail packaging."
  },
  {
    "slug": "drawer-boxes",
    "title": "Sliding Drawer Boxes",
    "img": "/img/drawer-box.webp",
    "alt": "Sliding Drawer Boxes packaging reference",
    "structure": "Sliding sleeve and tray",
    "use": "Jewelry, accessories and discovery sets",
    "options": "Tray layout, ribbon pulls and logo finishes",
    description: "Sliding drawer packaging with tailored trays and ribbon pulls for a refined product reveal."
  },
  {
    "slug": "foldable-magnetic-rigid-boxes",
    "title": "Foldable Magnetic Boxes",
    "img": "/img/foldable-magnetic-box-structure-reference.png",
    "alt": "Foldable Magnetic Boxes packaging reference",
    "structure": "Collapsible rigid construction",
    "use": "Apparel and corporate gift programs",
    "options": "Fold-flat structure, colors and branding",
    description: "Collapsible magnetic rigid boxes designed for compact shipping and premium gift presentation."
  },
  {
    "slug": "tube-packaging",
    "title": "Custom Paper Tube Packaging",
    "img": "/img/tube-packaging-black-gold-reference.jpg",
    "alt": "Custom Paper Tube Packaging packaging reference",
    "structure": "Cylindrical paper structure",
    "use": "Fragrance, candles and specialty gifts",
    "options": "Diameter, height, wrap and logo printing",
    description: "Custom cylindrical paper packaging with tailored dimensions and branded wraps for specialty products."
  },
  {
    "slug": "luxury-paper-bags",
    "title": "Custom Printed Paper Bags",
    "img": "/img/sample-paperbag-ribbon-minimal.jpg",
    "alt": "Custom Printed Paper Bags packaging reference",
    "structure": "Paper shopping bag with handles",
    "use": "Fashion boutiques and retail collections",
    "options": "Size, paper, handles and logo printing",
    description: "Branded paper shopping bags with customizable handles, paper finishes and sizes for retail collections."
  },
  {
    "slug": "custom-jewelry-boxes",
    "title": "Custom Jewelry Packaging",
    "img": "/img/soriva-custom-jewelry-packaging.png",
    "alt": "Coordinated custom jewelry packaging collection, design reference",
    "structure": "Coordinated jewelry box collection",
    "use": "Jewelry brands and retail gifting",
    "options": "Box structure, fitted inserts and finishing",
    description: "Coordinated custom jewelry packaging across multiple box sizes, fitted inserts and branded finishes."
  },
  {
    "slug": "custom-ring-boxes",
    "title": "Custom Ring Boxes",
    "img": "/img/soriva-custom-ring-boxes.webp",
    "alt": "Custom ring presentation box with fitted insert, design reference",
    "structure": "Compact ring presentation box",
    "use": "Fine jewelry and bridal collections",
    "options": "Ring inserts, dimensions and brand finishes",
    description: "Compact custom ring boxes with dedicated ring slots for bridal and fine jewelry collections."
  },
  {
    "slug": "custom-necklace-earring-boxes",
    "title": "Necklace & Earring Boxes",
    "img": "/img/soriva-necklace-earring-boxes.webp",
    "alt": "Custom necklace and earring gift box, design reference",
    "structure": "Fitted jewelry presentation",
    "use": "Necklaces, pendants and earring sets",
    "options": "Insert layout, lining and logo placement",
    description: "Tailored necklace and earring boxes with chain retention and dedicated earring inserts."
  },
  {
    "slug": "flip-top-jewelry-boxes",
    "title": "Flip-Top Jewelry Boxes",
    "img": "/img/soriva-flip-top-jewelry-boxes-hd.webp",
    "alt": "Flip-Top Jewelry Boxes packaging reference",
    "structure": "Attached flip-top lid",
    "use": "Jewelry collections and premium retail",
    "options": "Interior presentation, outer wrap and branding",
    description: "Connected flip-top lids with fitted jewelry inserts and customized exterior finishes."
  },
  {
    "slug": "pu-leather-jewelry-boxes",
    "title": "Custom PU Leather Jewelry Boxes",
    "img": "/img/soriva-pu-leather-jewelry-boxes.webp",
    "alt": "Custom PU leather jewelry box collection, design reference",
    "structure": "PU-covered presentation box",
    "use": "Jewelry retail and coordinated gift sets",
    "options": "Covering, lining, insert and logo options",
    description: "Custom PU leather jewelry boxes with coordinated textures, soft linings and fitted inserts."
  },
  {
    "slug": "portable-ring-box",
    "title": "Portable Ring Boxes",
    "img": "/img/portable-ring-box-hero.webp",
    "alt": "Portable Ring Boxes packaging reference",
    "structure": "Compact portable ring case",
    "use": "Ring presentation and travel use",
    "options": "Stock styles and order quantities; MOQ from 20 pcs",
    description: "Compact ready-stock travel ring cases with velvet lining and multiple ring slots."
  },
  {
    "slug": "custom-gift-boxes-with-inserts",
    "title": "Custom Gift Boxes with Inserts",
    "img": "/img/two-piece-rigid-box-perfume-application.png",
    "alt": "Custom Gift Boxes with Inserts packaging reference",
    "structure": "Rigid box with a fitted insert",
    "use": "Multi-product gifts and presentation sets",
    "options": "Box dimensions, insert cavities and finishes",
    description: "Custom gift boxes with fitted cavities designed around coordinated products and premium presentation."
  },
  {
    "slug": "custom-vial-sample-kit-boxes",
    "title": "Vial & Sample Kit Boxes",
    "img": "/img/project-perfume.webp",
    "alt": "Vial & Sample Kit Boxes packaging reference",
    "structure": "Box with individual sample cavities",
    "use": "Fragrance discovery and sample programs",
    "options": "Cavity size, sample layout and branding",
    description: "Custom sample kit boxes with individual vial cavities for fragrance discovery and sampling programs."
  },
  {
    slug: "custom-perfume-magnetic-gift-boxes",
    title: "Custom Perfume Magnetic Gift Boxes",
    href: "/solutions/magnetic-rigid-boxes-for-perfume/",
    img: "/img/perfume-magnetic-gift-box-champagne-v2.webp",
    alt: "Open champagne gold book-style magnetic perfume gift box with fitted insert and magnetic closure flap",
    structure: "Rigid greyboard · magnetic closure",
    use: "Perfume bottles, fragrance collections and gift sets",
    options: "Fitted bottle inserts, custom dimensions and logo finishes",
    description: "Custom magnetic rigid boxes with fitted perfume bottle inserts and premium branded finishes."
  },
  {
    slug: "custom-cosmetic-magnetic-gift-boxes",
    title: "Custom Cosmetic Magnetic Gift Boxes",
    href: "/solutions/magnetic-gift-boxes-for-cosmetics/",
    img: "/img/cosmetic-magnetic-gift-box-pink.webp",
    alt: "Pink magnetic cosmetic gift box with fitted skincare inserts, design visualization",
    structure: "Rigid greyboard · magnetic closure",
    use: "Skincare routines, beauty launches and cosmetic gift sets",
    options: "Multi-product inserts, custom cavity layouts and brand finishes",
    description: "Custom magnetic gift boxes with individual cavities for coordinated skincare and beauty sets."
  }
];

const industries = [
  {
    img: "/img/project-skincare.webp",
    alt: "Cosmetics and skincare packaging",
    title: "Cosmetics & Skincare",
    desc: "Refined gift boxes for serums, creams and skincare kits.",
    href: "/industries/cosmetic-packaging/",
  },
  {
    img: "/img/project-perfume.webp",
    alt: "Perfume and fragrance packaging",
    title: "Perfume & Fragrance",
    desc: "Presentation boxes with inserts for bottles and fragrance sets.",
    href: "/industries/perfume-packaging/",
  },
  {
    img: "/img/soriva-flip-top-jewelry-boxes-hd.webp",
    alt: "Black flip-top jewelry presentation box with necklace and gold branding, design visualization",
    title: "Jewelry & Watches",
    desc: "Compact rigid structures for rings, necklaces and premium accessories.",
    href: "/industries/jewelry-packaging/",
  },
  {
    img: "/img/v20-candle-sets.webp",
    alt: "Candle gift packaging",
    title: "Candles",
    desc: "Protective box formats for candle jars and luxury home fragrance.",
    href: "/industries/candle-packaging/",
  },
  {
    img: "/img/sample-paperbag-coordinated-floral.jpg",
    alt: "Fashion and apparel packaging",
    title: "Fashion & Apparel",
    desc: "Premium boxes and bags for garments, scarves and retail presentation.",
    href: "/industries/fashion-packaging/",
  },
  {
    img: "/img/v18-corporate.webp",
    alt: "Corporate gift packaging",
    title: "Corporate Gifts",
    desc: "Gift set packaging for campaigns, events and executive presents.",
    href: "/industries/corporate-gift-packaging/",
  },
];

const benefits = [
  {
    num: "01",
    title: "Flexible MOQ",
    desc: "Selected custom packaging projects can start from 100 pcs, subject to size, material and finishing requirements.",
  },
  {
    num: "02",
    title: "Fast Prototyping",
    desc: "Review structure, paper, color and finish before moving into bulk production.",
  },
  {
    num: "03",
    title: "Full Customization",
    desc: "Custom size, materials, printing, inserts and finishing developed for your product.",
  },
  {
    num: "04",
    title: "One-to-One Support",
    desc: "Project support from initial concept through sampling, production and shipment.",
  },
];

const steps = [
  { num: "01", title: "Tell Us Your Project", desc: "Product / size / quantity / logo / idea" },
  { num: "02", title: "Design & Materials", desc: "Structure / paper / insert / finish" },
  { num: "03", title: "Prototype", desc: "Physical sample for approval" },
  { num: "04", title: "Production & QC", desc: "Printing / assembly / inspection" },
  { num: "05", title: "Worldwide Delivery", desc: "Shipment to warehouse or fulfillment center" },
];

const factoryPoints = [
  "Rigid box forming & assembly",
  "In-process quality checks",
  "Manual finishing and packing",
  "Production footage available for buyer review",
];

const projects = [
  { img: "/img/project-skincare.webp", alt: "Skincare gift box", title: "Skincare Gift Box", desc: "Magnetic rigid structure · premium insert" },
  { img: "/img/project-perfume.webp", alt: "Perfume packaging", title: "Perfume Packaging", desc: "Rigid presentation box · foil detailing" },
  { img: "/img/sample-paperbag-coordinated-floral.jpg", alt: "Luxury paper bag packaging project", title: "Luxury Paper Bag Project", desc: "Premium paper finish · custom retail presentation" },
  { img: "/img/v20-candle-sets.webp", alt: "Candle gift packaging", title: "Candle Gift Packaging", desc: "Custom insert · textured paper finish" },
  { img: "/img/project-gift-clean.webp", alt: "Corporate gift packaging", title: "Corporate Gift Set", desc: "Multi-product insert · branded presentation" },
  { img: "/img/project-pr-clean.webp", alt: "PR packaging box", title: "PR / Influencer Box", desc: "Custom structure · campaign packaging" },
];

const sustainList = [
  "FSC-certified paper options*",
  "Recyclable paper inserts",
  "Molded pulp inserts",
  "Reduced-plastic structures",
  "Space-saving foldable boxes",
];

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "ItemList", name: "SORIVA Custom Packaging Types",
        numberOfItems: products.length,
        itemListElement: products.map((product, index) => ({ "@type": "ListItem", position: index + 1, name: product.title, url: `https://www.sorivapackaging.com${product.href ?? `/products/${product.slug}/`}` })),
      }) }} />
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">CUSTOM LUXURY PACKAGING</span>
            <h1>
              Custom Gift Boxes
              <br />
              &amp; Branded Paper Bags
            </h1>
            <p>
              Compare magnetic, lid-and-base, drawer and foldable gift boxes,
              jewelry packaging, paper tubes and custom printed shopping bags.
              Choose a product type to explore structures, materials and branding options.
            </p>
            <div className="hero-actions">
              <a href="#quote" className="btn gold">
                Get A Quote
              </a>
              <a
                href={waLink(WA_MESSAGES.home)}
                target="_blank"
                rel="noopener"
                className="btn-wa"
              >
                <WhatsAppIcon /> Chat on WhatsApp
              </a>
              <a href="#products" className="btn ghost">
                Explore All Packaging Types
              </a>
            </div>
            <div className="trust-row">
              <span>MOQ From 100 pcs</span>
              <span>Custom Design</span>
              <span>Fast Prototyping</span>
              <span>Worldwide Shipping</span>
            </div>
          </div>
          <div className="hero-media">
            <Image
              src="/img/hero-boxes.webp"
              alt="Custom luxury gift boxes for branded product packaging"
              width={1200}
              height={820}
              priority
              fetchPriority="high"
              sizes="(max-width: 980px) 100vw, 54vw"
              quality={80}
            />
          </div>
        </div>
      </section>

      <section className="section home-catalog" id="products" aria-labelledby="packaging-catalog-title">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow dark">COMPLETE PACKAGING COLLECTION</span>
            <h2 id="packaging-catalog-title">Explore All Custom Packaging Types</h2>
            <p>Compare all {products.length} current product categories. Open any type for its construction, materials, customization options and quotation details.</p>
          </div>
          <div className="home-catalog-grid">
            {products.map((product) => (
              <article className="home-product-card" key={product.slug}>
                <a className="home-product-image" href={(product.href ?? `/products/${product.slug}/`)} aria-label={`Explore ${product.title}`}>
                  <Image src={product.img} alt={product.alt} width={800} height={600} sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 33vw" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </a>
                <div className="home-product-body">
                  <h3><a href={(product.href ?? `/products/${product.slug}/`)}>{product.title}</a></h3>
                  <p className="home-product-description">{product.description ?? product.structure}</p>
                  <div className="home-product-actions">
                    <a href={(product.href ?? `/products/${product.slug}/`)}>View Details <span aria-hidden="true">→</span><span className="home-sr-only">: {product.title}</span></a>
                    <a href={`/rfq/?source_page=%2F&interest=${encodeURIComponent(product.title)}`}>Request a Quote<span className="home-sr-only">: {product.title}</span></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="home-catalog-note">Images show product or design references. Final dimensions, materials, minimum quantities, pricing and production schedules are confirmed for each project.</p>
          <div className="section-cta"><a href="/products/" className="btn dark">Browse the Product Directory →</a><a href="/rfq/" className="btn ghost factory-verify-cta">Help Me Choose a Structure</a></div>
        </div>
      </section>

      <section className="section soft" aria-label="Paper shopping bags for fashion brands">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow dark">FASHION &amp; BOUTIQUE PAPER BAGS</span>
            <h2>Paper Shopping Bags for Fashion &amp; Boutiques</h2>
            <p>Explore logo printing, bag proportions, paper materials and handles for clothing, footwear and accessories. Paper bag sampling takes approximately 5 days and bulk production approximately 15–20 days, subject to project confirmation. Shipping time is quoted separately.</p>
          </div>
          <a href="/solutions/luxury-paper-bags-for-fashion/" className="btn dark">Explore Fashion Paper Bags →</a>
        </div>
      </section>

      <section className="section soft" aria-label="SORIVA manufacturer facts">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow dark">SORIVA AT A GLANCE</span>
            <h2>Custom Packaging Manufacturing for Global Brands</h2>
            <p>SORIVA Packaging manufactures custom rigid boxes, luxury paper bags and jewelry packaging with flexible customization, sampling and international shipping support.</p>
          </div>
          <div className="benefit-grid">
            <article><strong>10,000㎡</strong><h3>Factory Area</h3><p>Custom packaging production and assembly capability.</p></article>
            <article><strong>400+</strong><h3>Employees</h3><p>Production support across printing, finishing, assembly and packing.</p></article>
            <article><strong>50M+</strong><h3>Annual Capacity</h3><p>Manufacturing capacity across supported packaging categories.</p></article>
            <article><strong>20 Years</strong><h3>Production Experience</h3><p>Experience supporting custom packaging development and production.</p></article>
          </div>
          <div className="section-cta">
            <a href="/about/" className="btn dark">About SORIVA →</a>
            <a href="/factory/" className="btn ghost factory-verify-cta">Verify Factory Capability →</a>
          </div>
        </div>
      </section>


      <section className="section soft" id="industries">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow dark">PACKAGING BY INDUSTRY</span>
            <h2>Made for Your Market</h2>
            <p>
              Industry-specific structures, inserts and finishes for premium
              product presentation.
            </p>
          </div>
          <div className="industry-grid">
            {industries.map((i) => (
              <a className="industry" href={i.href ?? "#quote"} key={i.title}>
                <img src={i.img} alt={i.alt} loading="lazy" decoding="async" />
                <div className="industry-copy">
                  <b>{i.title}</b>
                  <span>{i.desc}</span>
                </div>
              </a>
            ))}
          </div>
          <div className="section-cta">
            <a
              href={waLink(WA_MESSAGES.industries)}
              target="_blank"
              rel="noopener"
              className="btn-wa"
            >
              <WhatsAppIcon /> Discuss packaging for your industry
            </a>
          </div>
        </div>
      </section>

      <section className="section custom" id="custom" aria-label="Premium Packaging Details">
        <div className="container">
          <figure style={{ margin: 0 }}>
            <img
              src="/img/soriva-premium-packaging-details.svg"
              alt="Premium Packaging Details: Gold foil stamping, embossing and debossing, premium edge finish, ribbon and accessories, custom inserts, and textured paper."
              loading="lazy"
              decoding="async"
              width={1536}
              height={1024}
              style={{ display: "block", width: "100%", height: "auto", borderRadius: 2 }}
            />
            <figcaption style={{ fontSize: 14, lineHeight: 1.6, color: "#d6d0c8", textAlign: "center", paddingTop: 16 }}>
              Custom foil, embossed logos, precise edges, ribbons, inserts and textured papers for luxury packaging projects.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container split-title">
          <div>
            <span className="eyebrow dark">WHY SORIVA</span>
            <h2>Built for Growing Brands</h2>
          </div>
          <div className="benefit-grid">
            {benefits.map((b) => (
              <article key={b.num}>
                <strong>{b.num}</strong>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section process">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow dark">HOW IT WORKS</span>
            <h2>From Idea to Finished Packaging</h2>
          </div>
          <ol className="steps">
            {steps.map((s) => (
              <li key={s.num}>
                <span>{s.num}</span>
                <b>{s.title}</b>
                <small>{s.desc}</small>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section factory" id="factory">
        <div className="container factory-grid">
          <div className="factory-copy">
            <span className="eyebrow dark">MANUFACTURING</span>
            <h2>Manufacturing Behind Every Box</h2>
            <p>
              From forming and printing to assembly and quality inspection,
              packaging projects are controlled throughout production. The
              video below uses real manufacturing footage provided for this
              project and is displayed in full frame to preserve the original
              content.
            </p>
            <ul>
              {factoryPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <a className="btn dark" href="/factory/">
              Explore Factory Verification →
            </a>
            <a className="btn ghost" href="/resources/">
              Browse Buyer Resources →
            </a>
            <a className="btn gold" href="/rfq/">
              Request a Packaging Quote →
            </a>
            <a
              className="btn-wa"
              href={waLink(WA_MESSAGES.factory)}
              target="_blank"
              rel="noopener"
              style={{ marginTop: 12 }}
            >
              <WhatsAppIcon /> Chat about manufacturing
            </a>
          </div>
          <div className="factory-video">
            <video controls muted preload="none" poster="/img/factory-poster.webp">
              <source src="/video/factory-tour.mp4" type="video/mp4" />
              Your browser does not support video.
            </video>
          </div>
        </div>
      </section>

      <section className="section soft" id="projects">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow dark">APPLICATION IDEAS</span>
            <h2>Packaging Created for Brands</h2>
            <p>
              Reference visuals for common packaging directions. Final
              production is developed to your actual dimensions, artwork and
              materials.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((p) => (
              <article key={p.title}>
                <img src={p.img} alt={p.alt} loading="lazy" decoding="async" />
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </article>
            ))}
          </div>
          <div className="section-cta">
            <a
              href={waLink(WA_MESSAGES.projects)}
              target="_blank"
              rel="noopener"
              className="btn-wa"
            >
              <WhatsAppIcon /> Start a project like these
            </a>
          </div>
        </div>
      </section>

      <section className="section sustainability">
        <div className="container sustain-grid">
          <div>
            <span className="eyebrow">BETTER MATERIAL CHOICES</span>
            <h2>Premium Packaging with Practical Sustainability Options</h2>
          </div>
          <div className="sustain-list">
            {sustainList.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <small>
            *Availability depends on the selected supplier, paper mill and
            project specification. Certification claims should be confirmed
            before final order.
          </small>
        </div>
      </section>

      <section className="quote" id="quote">
        <div className="container quote-grid">
          <div>
            <span className="eyebrow">START A PROJECT</span>
            <h2>Ready to Create Your Packaging?</h2>
            <p>
              Tell us your product, approximate quantity and packaging idea.
              The form will prepare a WhatsApp inquiry so you can send the full
              project details directly.
            </p>
            <div className="contact-list">
              <div className="contact-note">
                <b>WhatsApp</b>
                <a href="https://wa.me/8615913881634" target="_blank" rel="noopener">
                  +86 159 1388 1634
                </a>
              </div>
              <div className="contact-note">
                <b>Email</b>
                <a href="mailto:AMY@XINGYUE.STORE">AMY@XINGYUE.STORE</a>
              </div>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
    </main>
  );
}
