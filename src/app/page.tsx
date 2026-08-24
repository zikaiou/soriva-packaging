/* eslint-disable @next/next/no-img-element */
import QuoteForm from "./components/QuoteForm";
import WhatsAppIcon from "./components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "./lib/whatsapp";

const products = [
  {
    img: "/img/magnetic-rigid.webp",
    alt: "Custom magnetic rigid box",
    title: "Magnetic Rigid Boxes",
    desc: "Premium magnetic closure packaging for cosmetics, gifts and luxury products.",
    slug: "magnetic-rigid-boxes",
  },
  {
    img: "/img/two-piece-rigid.webp",
    alt: "Two piece rigid gift box",
    title: "Two-Piece Rigid Boxes",
    desc: "Classic lid-and-base presentation boxes with premium finishes and inserts.",
    slug: "two-piece-rigid-boxes",
  },
  {
    img: "/img/drawer-box.webp",
    alt: "Custom drawer packaging box",
    title: "Drawer Boxes",
    desc: "Elegant sliding boxes ideal for jewelry, beauty products and fragrances.",
    slug: "drawer-boxes",
  },
  {
    img: "/img/foldable-rigid.webp",
    alt: "Foldable rigid gift box",
    title: "Foldable Rigid Boxes",
    desc: "Luxury presentation with reduced storage and international shipping volume.",
    slug: "foldable-magnetic-rigid-boxes",
  },
  {
    img: "/img/tube-packaging.webp",
    alt: "Luxury tube packaging",
    title: "Tube Packaging",
    desc: "Custom cylindrical packaging for fragrance, candles, bottles and gifts.",
  },
  {
    img: "/img/paper-bags.webp",
    alt: "Custom luxury paper bags",
    title: "Luxury Paper Bags",
    desc: "Branded retail bags designed to complete your premium packaging system.",
    slug: "luxury-paper-bags",
  },
];

const industries = [
  {
    img: "/img/cosmetics.webp",
    alt: "Cosmetics and skincare packaging",
    title: "Cosmetics & Skincare",
    desc: "Refined gift boxes for serums, creams and skincare kits.",
  },
  {
    img: "/img/perfume.webp",
    alt: "Perfume and fragrance packaging",
    title: "Perfume & Fragrance",
    desc: "Presentation boxes with inserts for bottles and fragrance sets.",
  },
  {
    img: "/img/jewelry.webp",
    alt: "Jewelry and watches packaging",
    title: "Jewelry & Watches",
    desc: "Compact rigid structures for rings, necklaces and premium accessories.",
  },
  {
    img: "/img/candles.webp",
    alt: "Candle gift packaging",
    title: "Candles",
    desc: "Protective box formats for candle jars and luxury home fragrance.",
  },
  {
    img: "/img/fashion.webp",
    alt: "Fashion and apparel packaging",
    title: "Fashion & Apparel",
    desc: "Premium boxes and bags for garments, scarves and retail presentation.",
  },
  {
    img: "/img/corporate.webp",
    alt: "Corporate gift packaging",
    title: "Corporate Gifts",
    desc: "Gift set packaging for campaigns, events and executive presents.",
  },
];

const finishes = [
  {
    img: "/img/foil-clean.webp",
    alt: "Gold foil stamping",
    title: "Gold Foil Stamping",
    desc: "Metallic logo detailing for a premium first impression.",
  },
  {
    img: "/img/emboss-clean.webp",
    alt: "Embossing and debossing",
    title: "Embossing / Debossing",
    desc: "Raised or recessed logo effects that add tactile depth.",
  },
  {
    img: "/img/edge-clean.webp",
    alt: "Premium edge finish",
    title: "Premium Edge Finish",
    desc: "Clean wrapped corners and precise edge alignment.",
  },
  {
    img: "/img/ribbon-clean.webp",
    alt: "Satin ribbon detail",
    title: "Ribbon & Accessories",
    desc: "Luxury closures and add-ons to elevate the unboxing experience.",
  },
  {
    img: "/img/insert-clean.webp",
    alt: "Custom packaging inserts",
    title: "Custom Inserts",
    desc: "Paper, EVA or velvet inserts tailored to your product fit.",
  },
  {
    img: "/img/texture-clean.webp",
    alt: "Textured paper finish",
    title: "Textured Paper",
    desc: "Specialty papers and surface textures for a more distinctive look.",
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
  { img: "/img/project-jewelry.webp", alt: "Jewelry packaging", title: "Jewelry Presentation", desc: "Premium insert · compact rigid structure" },
  { img: "/img/project-candle-clean.webp", alt: "Candle gift packaging", title: "Candle Gift Packaging", desc: "Custom insert · textured paper finish" },
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
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">CUSTOM LUXURY PACKAGING</span>
            <h1>
              Packaging That Makes
              <br />
              Your Brand Stand Out.
            </h1>
            <p>
              Premium rigid boxes, magnetic gift boxes and custom packaging
              solutions developed for growing brands worldwide.
            </p>
            <div className="hero-actions">
              <a href="#quote" className="btn gold">
                Get a Quote
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
                Explore Packaging
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
            <img
              src="/img/hero-boxes.webp"
              alt="SORIVA custom luxury rigid packaging boxes"
              width="1200"
              height="820"
            />
          </div>
        </div>
      </section>

      <section className="section" id="products">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow dark">OUR PACKAGING</span>
            <h2>Explore Our Packaging</h2>
            <p>
              Premium custom packaging built around your product, brand and
              customer experience.
            </p>
          </div>
          <div className="product-grid">
            {products.map((p) => (
              <article className="card" key={p.title}>
                <img src={p.img} alt={p.alt} />
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <a href={p.slug ? `/products/${p.slug}/` : "#quote"}>
                    {p.slug ? "View details →" : "Request pricing →"}
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="section-cta">
            <a
              href={waLink(WA_MESSAGES.products)}
              target="_blank"
              rel="noopener"
              className="btn-wa"
            >
              <WhatsAppIcon /> Ask about our packaging products
            </a>
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
              <article className="industry" key={i.title}>
                <img src={i.img} alt={i.alt} />
                <div className="industry-copy">
                  <b>{i.title}</b>
                  <span>{i.desc}</span>
                </div>
              </article>
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

      <section className="section custom" id="custom">
        <div className="container">
          <div className="section-head inverse">
            <span className="eyebrow">FULL CUSTOMIZATION</span>
            <h2>Make It Uniquely Yours</h2>
            <p>
              From paper and structure to printing, finishing and inserts,
              every detail can be developed around your brand.
            </p>
          </div>
          <div className="finish-grid">
            {finishes.map((f) => (
              <article className="finish-card" key={f.title}>
                <img src={f.img} alt={f.alt} />
                <div>
                  <b>{f.title}</b>
                  <span>{f.desc}</span>
                </div>
              </article>
            ))}
          </div>
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
            <a className="btn dark" href="#quote">
              Discuss Your Project
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
            <video controls muted preload="metadata" poster="/img/factory-poster.webp">
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
                <img src={p.img} alt={p.alt} />
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
