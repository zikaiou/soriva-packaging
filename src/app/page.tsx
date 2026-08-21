/* eslint-disable @next/next/no-img-element */
import QuoteForm from "./components/QuoteForm";

const products = [
  {
    img: "/img/magnetic-rigid.webp",
    alt: "Custom magnetic rigid box",
    title: "Magnetic Rigid Boxes",
    desc: "Premium magnetic closure packaging for cosmetics, gifts and luxury products.",
  },
  {
    img: "/img/two-piece-rigid.webp",
    alt: "Two piece rigid gift box",
    title: "Two-Piece Rigid Boxes",
    desc: "Classic lid-and-base presentation boxes with premium finishes and inserts.",
  },
  {
    img: "/img/drawer-box.webp",
    alt: "Custom drawer packaging box",
    title: "Drawer Boxes",
    desc: "Elegant sliding boxes ideal for jewelry, beauty products and fragrances.",
  },
  {
    img: "/img/foldable-rigid.webp",
    alt: "Foldable rigid gift box",
    title: "Foldable Rigid Boxes",
    desc: "Luxury presentation with reduced storage and international shipping volume.",
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
  },
];

const industries = [
  { img: "/img/cosmetics.webp", alt: "Cosmetics packaging", label: "Cosmetics & Skincare" },
  { img: "/img/perfume.webp", alt: "Perfume packaging", label: "Perfume & Fragrance" },
  { img: "/img/jewelry.webp", alt: "Jewelry packaging", label: "Jewelry & Watches" },
  { img: "/img/candles.webp", alt: "Candle packaging", label: "Candles" },
  { img: "/img/fashion.webp", alt: "Fashion packaging", label: "Fashion & Apparel" },
  { img: "/img/corporate.webp", alt: "Corporate gift packaging", label: "Corporate Gifts" },
];

const finishes = [
  { img: "/img/foil.webp", alt: "Gold foil stamping", label: "Gold Foil Stamping" },
  { img: "/img/emboss.webp", alt: "Embossing and debossing", label: "Embossing / Debossing" },
  { img: "/img/edge.webp", alt: "Premium edge finish", label: "Premium Edge Finish" },
  { img: "/img/ribbon.webp", alt: "Satin ribbon detail", label: "Ribbon & Accessories" },
  { img: "/img/insert.webp", alt: "Custom packaging inserts", label: "Custom Inserts" },
  { img: "/img/texture.webp", alt: "Textured paper finish", label: "Textured Paper" },
];

const benefits = [
  {
    num: "01",
    title: "Flexible MOQ",
    desc: "Selected structures can start from approximately 300 pcs, subject to material and finish.",
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

const projects = [
  { img: "/img/project-skincare.webp", alt: "Skincare gift box", title: "Skincare Gift Box", desc: "Magnetic rigid structure · premium insert" },
  { img: "/img/project-perfume.webp", alt: "Perfume packaging", title: "Perfume Packaging", desc: "Rigid presentation box · foil detailing" },
  { img: "/img/project-jewelry.webp", alt: "Jewelry packaging", title: "Jewelry Presentation", desc: "Premium insert · compact rigid structure" },
  { img: "/img/project-candle.webp", alt: "Candle gift packaging", title: "Candle Gift Packaging", desc: "Custom insert · textured paper finish" },
  { img: "/img/project-gift.webp", alt: "Corporate gift packaging", title: "Corporate Gift Set", desc: "Multi-product insert · branded presentation" },
  { img: "/img/project-pr.webp", alt: "PR packaging box", title: "PR / Influencer Box", desc: "Custom structure · campaign packaging" },
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
              <a href="#products" className="btn ghost">
                Explore Packaging
              </a>
            </div>
            <div className="trust-row">
              <span>Low MOQ</span>
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
            {products.map((item) => (
              <article className="card" key={item.title}>
                <img src={item.img} alt={item.alt} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <a href="#quote">Request pricing →</a>
                </div>
              </article>
            ))}
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
            {industries.map((item) => (
              <div className="industry" key={item.label}>
                <img src={item.img} alt={item.alt} />
                <b>{item.label}</b>
              </div>
            ))}
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
            {finishes.map((item) => (
              <div key={item.label}>
                <img src={item.img} alt={item.alt} />
                <b>{item.label}</b>
              </div>
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
            {benefits.map((item) => (
              <article key={item.num}>
                <strong>{item.num}</strong>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
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
            {steps.map((item) => (
              <li key={item.num}>
                <span>{item.num}</span>
                <b>{item.title}</b>
                <small>{item.desc}</small>
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
              videos below use real manufacturing footage provided for this
              project.
            </p>
            <ul>
              <li>Rigid box forming & assembly</li>
              <li>In-process quality checks</li>
              <li>Manual finishing and packing</li>
              <li>Production footage available for buyer review</li>
            </ul>
            <a className="btn dark" href="#quote">
              Discuss Your Project
            </a>
          </div>
          <div className="factory-video">
            <video
              controls
              muted
              preload="metadata"
              poster="/img/factory-poster.webp"
            >
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
            {projects.map((item) => (
              <article key={item.title}>
                <img src={item.img} alt={item.alt} />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sustainability">
        <div className="container sustain-grid">
          <div>
            <span className="eyebrow">BETTER MATERIAL CHOICES</span>
            <h2>
              Premium Packaging with Practical Sustainability Options
            </h2>
          </div>
          <div className="sustain-list">
            <span>FSC-certified paper options*</span>
            <span>Recyclable paper inserts</span>
            <span>Molded pulp inserts</span>
            <span>Reduced-plastic structures</span>
            <span>Space-saving foldable boxes</span>
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
            <div className="contact-note">
              <b>WhatsApp</b>
              <span>+86 159 1388 1634</span>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
    </main>
  );
}
