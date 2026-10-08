/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import ProductCrossLinks from "../../components/ProductCrossLinks";
import ProductBuyerGuides from "../../components/ProductBuyerGuides";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../product-page.css";

const PAGE_URL = "https://www.sorivapackaging.com/products/tube-packaging/";

export const metadata: Metadata = {
  title: "Custom Paper Tube Packaging Manufacturer | SORIVA Packaging",
  description:
    "Custom paper tube packaging with telescopic, shoulder-neck and cylindrical structures, tailored inserts, specialty papers and premium finishing for perfume, cosmetics, candles and gifts.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Custom Tube Packaging | SORIVA Packaging",
    description:
      "Custom paper tube packaging developed around product size, retail presentation, branding requirements and project-dependent inserts.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
    images: [
      {
        url: "https://www.sorivapackaging.com/img/tube-packaging.webp",
        width: 1200,
        height: 900,
        alt: "Custom paper tube packaging",
      },
    ],
  },
};

const features = [
  {
    title: "Custom Structure",
    desc: "Diameter, height and lid structure developed around your product.",
  },
  {
    title: "Premium Papers",
    desc: "Art paper, specialty paper, textured paper and kraft-style wraps.",
  },
  {
    title: "Custom Inserts",
    desc: "EVA, paperboard, molded pulp and other insert solutions.",
  },
  {
    title: "Luxury Finishes",
    desc: "Foil, embossing, debossing, spot UV and lamination.",
  },
];

const specs = [
  { label: "Size", value: "Custom diameter and height" },
  { label: "Structure", value: "Paper Tube / Telescopic Tube / Shoulder-Neck Tube / Custom Cylindrical Structure" },
  { label: "Core Material", value: "Paperboard tube with wall thickness selected according to project requirements" },
  { label: "Outer Wrap", value: "Art Paper / Kraft Paper / Specialty Paper / Textured Paper" },
  { label: "Printing", value: "CMYK / Pantone" },
  { label: "Finishing", value: "Gold Foil / Silver Foil / Emboss / Deboss / Spot UV / Lamination" },
  { label: "Insert", value: "EVA / Paperboard / Molded Pulp / Custom" },
  { label: "MOQ", value: "From 100 pcs for selected custom projects" },
  { label: "Prototype", value: "1 pc prototype available for selected projects" },
  { label: "Shipping", value: "Sea / Air / Express" },
];

const structures = [
  { title: "Telescopic Tube", desc: "A lid overlaps the base to create a defined cylindrical opening." },
  { title: "Shoulder-Neck Tube", desc: "An inner raised section creates a clear reveal and alignment between lid and base." },
  { title: "Full-Cover Tube", desc: "A full-cover structure can be reviewed for the intended product presentation." },
  { title: "Two-Piece Tube", desc: "Separate lid and base construction for a clean presentation format." },
  { title: "Rolled-Edge Tube", desc: "A rolled edge can be selected where the opening and tactile detail suit the project." },
  { title: "Flat-Edge / Window Tube", desc: "Flat-edge or window / hollow structures can be considered where suitable." },
];

const applications = [
  {
    img: "/img/project-skincare.webp",
    title: "Cosmetics & Skincare",
    desc: "Bottles, jars, serums and gift sets.",
  },
  {
    img: "/img/project-perfume.webp",
    title: "Perfume",
    desc: "Premium cylindrical fragrance presentation.",
  },
  {
    img: "/img/candles.webp",
    title: "Candles",
    desc: "Decorative and protective candle packaging.",
  },
  {
    img: "/img/project-gift-clean.webp",
    title: "Tea & Gifts",
    desc: "Distinctive packaging for specialty retail products.",
  },
];

const conceptReferences = [
  { img: "/img/tube-packaging-customization-printing-guide.png", type: "CUSTOMIZATION REFERENCE", title: "Customization, Printing & Materials", alt: "Custom paper tube packaging printing and material guide", caption: "Customization flow, printing finishes, paper materials and artwork file guidance" },
  { img: "/img/tube-packaging-custom-size-guide.png", type: "CUSTOM SIZE GUIDE", title: "Diameter & Height Planning", alt: "Custom paper tube diameter and height size guide", caption: "Custom diameter and height planning around the product and required fit" },
  { img: "/img/tube-packaging-decorative-materials-reference.jpg", type: "MATERIALS REFERENCE", title: "Decorative Options & Materials", alt: "Decorative and material options for custom paper tubes", caption: "Decorative pulls, ribbons and paper materials as project-dependent options" },
  { img: "/img/tube-packaging-application-grid.jpg", type: "APPLICATION EXAMPLE", title: "Tube Packaging Applications", alt: "Custom paper tube packaging application examples", caption: "Application examples for cylindrical packaging across product categories" },
  { img: "/img/tube-packaging-black-gold-reference.jpg", type: "STRUCTURE REFERENCE", title: "Premium Tube Structure", alt: "Premium black and gold paper tube packaging reference", caption: "Premium black and metallic tube structure reference" },
  { img: "/img/tube-packaging-kraft-closed-end-reference.jpg", type: "STRUCTURE REFERENCE", title: "Kraft Closed-End Tube", alt: "Kraft paper tube closed-end structure reference", caption: "Kraft paper tube with a closed-end construction reference" },
  { img: "/img/tube-packaging-kraft-open-end-reference.jpg", type: "STRUCTURE REFERENCE", title: "Kraft Open-End Tube", alt: "Kraft paper tube open-end structure reference", caption: "Kraft paper tube open-end construction reference" },
  { img: "/img/tube-packaging-structure-customization-reference.jpg", type: "CUSTOMIZATION REFERENCE", title: "Structure & Closure Options", alt: "Custom paper tube structure and closure options", caption: "Shape, edge and closure customization reference" },
  { img: "/img/tube-packaging-print-color-reference.jpg", type: "PRINTING & FINISHING REFERENCE", title: "Printing Technology & Color", alt: "Paper tube printing and custom color options", caption: "Foil, embossing, debossing, UV, lamination and color reference" },
  { img: "/img/tube-packaging-various-styles-reference.jpg", type: "PRINTING & FINISHING REFERENCE", title: "Tube Styles & Printing", alt: "Various custom paper tube packaging styles", caption: "Various tube styles, printing and Pantone color reference" },
  { img: "/img/tube-packaging-inner-material-options.jpg", type: "INSERT / LINING REFERENCE", title: "Inner Material & Insert Options", alt: "Inner material options for custom paper tube packaging", caption: "Inner material and insert concepts for different presentation requirements" },
  { img: "/img/tube-packaging-lining-material-reference.jpg", type: "INSERT / LINING REFERENCE", title: "Lining Material Options", alt: "Paper tube inner lining material options", caption: "White, kraft, coated, black, aluminum foil and other lining references" },
];

const processSteps = [
  { title: "Design / Structure Review", sub: "Diameter, height & lid" },
  { title: "Sampling", sub: "Fit & insert review" },
  { title: "Material Selection", sub: "Board, wrap & lining" },
  { title: "Printing", sub: "CMYK / Pantone" },
  { title: "Finishing", sub: "Foil / Emboss / UV" },
  { title: "Tube Forming", sub: "Cylindrical structure" },
  { title: "Assembly", sub: "Lid, insert & wrap" },
  { title: "Quality Inspection", sub: "Appearance & fit" },
];

const stats = [
  { value: "10,000㎡", label: "Factory Area" },
  { value: "400+", label: "Employees" },
  { value: "50M+", label: "Annual Capacity" },
  { value: "20 Years", label: "Production Experience" },
];

const faqs = [
  {
    q: "What sizes can paper tube packaging be made in?",
    a: "Diameter and height can be customized according to the product dimensions, insert requirements and desired fit. Final dimensions should be confirmed during sampling.",
  },
  {
    q: "What is the difference between telescopic and shoulder-neck tube packaging?",
    a: "A telescopic tube typically uses a lid that overlaps the base, while a shoulder-neck tube uses an inner raised section to create a defined reveal and alignment between lid and base.",
  },
  {
    q: "Can paper tubes be customized with a logo?",
    a: "Yes. Suitable options can include printing, foil stamping, embossing, debossing, spot UV or other finishing based on the selected paper and artwork.",
  },
  {
    q: "Can I customize the inside of the tube?",
    a: "Yes. Inner lining and insert options can be selected according to the product dimensions, presentation and project requirements.",
  },
  {
    q: "Are custom paper tubes suitable for perfume, cosmetics and candles?",
    a: "They can be suitable for these applications when the tube dimensions, lining, insert and structure are developed for the specific product.",
  },
  {
    q: "What information is needed for a quote?",
    a: "Product or tube dimensions, quantity, structure, materials, printing or finishing, insert requirements and destination are useful for quotation.",
  },
  {
    q: "Can I order a sample before production?",
    a: "Prototype or sample support is available for selected projects. Timing depends on structure, materials and finishing requirements.",
  },
  {
    q: "What is the difference between paper tube packaging, cardboard tube packaging and rigid paper tubes?",
    a: "These terms describe cylindrical paperboard packaging formats. Final construction, wall build, lining and closure are selected according to the product and project requirements.",
  },
  {
    q: "Do you support custom tube packaging and custom paper tubes with a logo?",
    a: "Yes. A tube packaging manufacturer or tube packaging supplier can review custom tube packaging, custom paper tubes and custom tube boxes with logo using approved artwork and suitable printing or finishing.",
  },
  {
    q: "Can you supply wholesale paper tubes?",
    a: "Wholesale paper tubes can be reviewed according to quantity, diameter, height, materials, structure, inserts, finishing and destination.",
  },
  {
    q: "Do you make paper tube boxes and rigid paper tubes?",
    a: "A paper tube manufacturer can develop paper tube boxes and rigid paper tubes in cylindrical formats with project-dependent wall build, lining, closure and finishing.",
  },
  {
    q: "What does a paper tube manufacturer or tube packaging supplier need for a quote?",
    a: "A paper tube manufacturer or tube packaging supplier typically reviews product dimensions, quantity, structure, materials, printing, inserts, finishing and destination.",
  },
  {
    q: "What is the MOQ?",
    a: "Selected custom tube packaging projects can start from 100 pcs.",
  },
  {
    q: "Can diameter and height be customized?",
    a: "Yes. Diameter and height are reviewed around your product, insert clearance and required fit; wall build is selected according to project requirements."
  },
  {
    q: "What tube structures are available?",
    a: "Classic, telescopic, shoulder-neck and custom cylindrical structures are available.",
  },
  {
    q: "Can you make custom inserts?",
    a: "Yes. EVA, velvet-covered, paperboard or molded pulp inserts can be selected according to project requirements.",
  },
  {
    q: "Can you match Pantone colors?",
    a: "CMYK process printing and Pantone (PMS) color matching based on approved artwork and production specifications can be reviewed."
  },
  {
    q: "Can I get a prototype?",
    a: "A 1 pc prototype is available for selected projects.",
  },
  {
    q: "How do you ship?",
    a: "Sea freight, air freight and express shipping are supported.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Custom Paper Tube Packaging",
      description:
        "Custom cylindrical paper packaging for cosmetics, perfume, candles, tea and premium gifts. MOQ from 100 pcs.",
      image: "https://www.sorivapackaging.com/img/tube-packaging.webp",
      brand: { "@type": "Brand", name: "SORIVA Packaging" },
      category: "Custom Luxury Packaging",
      material: "Paperboard tube + specialty paper",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sorivapackaging.com/" },
        { "@type": "ListItem", position: 2, name: "Products", item: "https://www.sorivapackaging.com/products/" },
        { "@type": "ListItem", position: 3, name: "Tube Packaging", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function TubePackagingPage() {
  return (
    <main className="mrb-page">
      {/* Hero */}
      <section className="mrb-hero">
        <div className="container">
          <nav className="mrb-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a> / <a href="/products/">Products</a> / Tube
            Packaging
          </nav>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">CUSTOM TUBE PACKAGING</span>
              <h1>Premium Paper Tube Packaging for Brands</h1>
              <p className="mrb-lead">
                Custom cylindrical paper packaging developed around your
                product size, retail presentation and branding requirements.
              </p>
              <div className="mrb-tags">
                <span>MOQ From 100 pcs</span>
                <span>Custom Diameter &amp; Height</span>
                <span>Custom Inserts</span>
                <span>Foil / Emboss / Spot UV</span>
              </div>
              <div className="mrb-hero-actions">
                <a href="/rfq/" className="btn gold">
                  Get A Quote
                </a>
                <a
                  href={waLink(WA_MESSAGES.tube)}
                  target="_blank"
                  rel="noopener"
                  className="btn-wa"
                >
                  <WhatsAppIcon /> Chat on WhatsApp
                </a>
                <a href="#details" className="btn ghost">
                  View Details
                </a>
              </div>
            </div>
            <div className="mrb-hero-media">
              <img
                src="/img/tube-packaging.webp"
                alt="Custom paper tube packaging with luxury finish"
                width="1200"
                height="900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product overview */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">PRODUCT OVERVIEW</span>
            <h2>Distinctive Cylindrical Packaging</h2>
            <p>
              A custom tube program covering structure, papers, inserts and
              luxury finishing.
            </p>
          </div>
          <div className="mrb-features">
            {features.map((f, i) => (
              <article className="mrb-feature" key={f.title}>
                <strong>{String(i + 1).padStart(2, "0")}</strong>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Procurement details and reference library */}
      <section className="mrb-section soft" id="tube-options">
        <div className="container">
          <div className="mrb-head center"><span className="eyebrow dark">WHAT IS PAPER TUBE PACKAGING?</span><h2>Custom Cylindrical Packaging for Product Presentation</h2><p>Paper tube packaging uses a cylindrical paperboard structure and can be customized in diameter, height, lid style, lining, printing and finishing. It is often selected for perfume, cosmetics, candles, gifts and other products where a distinctive cylindrical presentation is preferred.</p></div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))" }}>
            <article className="mrb-feature"><strong>01</strong><h3>Custom Size</h3><p>Custom diameter, custom height, product-based sizing, insert clearance and lid fit can be reviewed. Final dimensions should be confirmed according to product size, insert and required fit during sampling.</p><p><a href="/resources/how-to-measure-product-for-custom-box-packaging/">Product Measurement Guide →</a></p></article>
            <article className="mrb-feature"><strong>02</strong><h3>Lid &amp; Closure Options</h3><p>Paper lid, rigid paper cover, transparent cover, metal lid, pull-tab or easy-open structures can be considered where suitable for the project.</p></article>
            <article className="mrb-feature"><strong>03</strong><h3>Materials</h3><p>Greyboard / rigid paperboard, white linerboard, kraft paper, specialty paper, coated paper, black paper and pearlescent or metallic paper where suitable.</p></article>
            <article className="mrb-feature"><strong>04</strong><h3>Printing &amp; Finishing</h3><p>Offset printing, screen printing where suitable, foil stamping, embossing, debossing, spot UV, matte lamination, gloss lamination and custom artwork can be reviewed.</p><p><a href="/resources/foil-stamping-vs-embossing-vs-spot-uv/">Finishing Comparison →</a></p></article>
            <article className="mrb-feature"><strong>05</strong><h3>Inner Lining &amp; Inserts</h3><p>Paper lining, black or white coated paper, kraft lining, aluminum foil lining where appropriate, paper insert, EVA or foam insert and molded insert where suitable.</p><p><a href="/resources/packaging-inserts-eva-vs-paperboard-vs-molded-pulp/">Insert Comparison →</a></p></article>
            <article className="mrb-feature"><strong>06</strong><h3>Buyer Decision</h3><p>Choose paper tube packaging when cylindrical presentation, shelf differentiation and flexible diameter or height customization are important. Final structure, lid fit, lining, insert and finishing should be confirmed during sampling.</p></article>
          </div>
          <div className="mrb-head center" style={{ marginTop: 54 }}><span className="eyebrow dark">REFERENCE IMAGE LIBRARY</span><h2>Tube Structure, Materials &amp; Customization References</h2>            <p>All images below are reference or concept-support images only; they are illustrative concepts rather than documentary evidence of client work, facility photography, third-party compliance documentation or completed delivery records. Visible third-party marks are not presented as SORIVA customers.</p></div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))" }}>
            {conceptReferences.map((ref) => <figure className="mrb-feature" key={ref.img} style={{ margin: 0 }}><img src={ref.img} alt={ref.alt} loading="lazy" style={{ width: "100%", borderRadius: 8 }} /><span style={{ display: "block", marginTop: 14, color: "var(--color-gold, #c79a51)", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}>{ref.type}</span><h3>{ref.title}</h3><figcaption>{ref.caption}</figcaption></figure>)}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="mrb-section soft">
        <div className="container mrb-spec-wrap">
          <div>
            <div className="mrb-head">
              <span className="eyebrow dark">SPECIFICATIONS</span>
              <h2>Custom Tube Packaging Specifications</h2>
            </div>
            <div className="mrb-spec" style={{ display: "grid", gap: 10 }}>
              {specs.map((s) => (
                <div className="mrb-spec-row" key={s.label}>
                  <b>{s.label}</b>
                  <span>{s.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mrb-structure">
            <div className="mrb-head">
              <span className="eyebrow dark">STRUCTURE OPTIONS</span>
              <h2>Tube Structures</h2>
            </div>
            <ol>
              {structures.map((s) => (
                <li key={s.title}>
                  <b>{s.title}</b> — {s.desc}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="mrb-section" id="details">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">APPLICATIONS</span>
            <h2>Premium Product Categories</h2>
          </div>
          <div className="mrb-apps">
            {applications.map((a) => (
              <article className="mrb-app" key={a.title}>
                <img src={a.img} alt={a.title} />
                <div>
                  <b>{a.title}</b>
                  <span>{a.desc}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Production process */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">PRODUCTION PROCESS</span>
            <h2>From Structure to Shipment</h2>
          </div>
          <div className="mrb-process">
            {processSteps.map((s, i) => (
              <div className="mrb-step" key={s.title}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <b>{s.title}</b>
                <small>{s.sub}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow illustration / production information */}
      <section className="mrb-section dark">
        <div className="container mrb-video-grid">
          <div>
            <span className="mrb-eyebrow">WORKFLOW ILLUSTRATION</span>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "clamp(28px, 3.4vw, 40px)", fontWeight: 500, lineHeight: 1.12, margin: "14px 0 12px" }}>
              Tube Packaging Production Workflow
            </h2>
            <p style={{ color: "#c5c5c5", lineHeight: 1.65 }}>
              A typical workflow can include structure review, sampling, material selection, printing, finishing, tube forming, assembly and quality inspection. Exact steps depend on the selected structure and project requirements.
            </p>
          </div>
          <div className="mrb-factory-video" style={{ marginTop: 0 }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              poster="/img/factory-poster.webp"
            >
              <source src="/video/tube-packaging-production.mp4" type="video/mp4" />
              Your browser does not support video.
            </video>
          </div>
        </div>
      </section>

      {/* Company capability */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">COMPANY CAPABILITY</span>
            <h2>Custom Packaging Production Information</h2>
          </div>
          <div className="mrb-stats">
            {stats.map((s) => (
              <div className="mrb-stat" key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tube Solutions & Capability Projects */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">TUBE PACKAGING SOLUTIONS</span>
            <h2>Explore Tube Packaging by Application</h2>
            <p>Review dedicated solution pages and application references for perfume, cosmetics, candles and premium gifts. The concept images on this page are not claims of completed customer projects.</p>
          </div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {[
              ["Perfume Tube Packaging", "/solutions/tube-packaging-for-perfume/", "Perfume tube packaging for cylindrical fragrance presentation."],
              ["Cosmetic Tube Packaging", "/solutions/tube-packaging-for-cosmetics/", "Cosmetic tube packaging for skincare, jars and beauty gift sets."],
              ["Candle Tube Packaging", "/solutions/tube-packaging-for-candles/", "Candle tube packaging for candles and home fragrance."],
              ["Cylindrical Perfume Tube Project", "/projects/cylindrical-perfume-tube-packaging-project/", "Application reference for fragrance tube development."],
              ["Luxury Tube Gift Project", "/projects/luxury-tube-gift-packaging-project/", "Application reference for premium cylindrical gift packaging."],
              ["Perfume Packaging Industry", "/industries/perfume-packaging/", "Perfume packaging requirements for cylindrical formats."],
              ["Cosmetic Packaging Industry", "/industries/cosmetic-packaging/", "Cosmetic packaging options for skincare and beauty products."],
              ["Candle Packaging Industry", "/industries/candle-packaging/", "Candle packaging considerations for jars and home fragrance."],
              ["Measurement Guide", "/resources/how-to-measure-product-for-custom-box-packaging/", "Measure product size and clearance before preparing a tube quote."],
              ["Pantone vs CMYK", "/resources/pantone-vs-cmyk-custom-packaging/", "Compare process printing and spot-color matching for tube artwork."],
              ["Finishing Comparison", "/resources/foil-stamping-vs-embossing-vs-spot-uv/", "Compare foil, embossing, debossing and UV finishing."],
              ["Cost Breakdown", "/resources/custom-packaging-cost-breakdown/", "Review the factors that contribute to custom tube packaging cost."],
            ].map(([title, href, desc]) => (
              <article className="mrb-feature" key={href}>
                <h3>{title}</h3>
                <p>{desc}</p>
                <a href={href} style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>View Details →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">FAQ</span>
            <h2>Tube Packaging FAQs</h2>
          </div>
          <div className="mrb-faq">
            {faqs.map((f) => (
              <div className="mrb-faq-item" key={f.q}>
                <b>{f.q}</b>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="mrb-quote" id="quote">
        <div className="container mrb-quote-grid">
          <div>
            <span className="mrb-eyebrow">START A PROJECT</span>
            <h2>Need Custom Tube Packaging?</h2>
            <p style={{ color: "#c5c5c5", lineHeight: 1.7, margin: "12px 0 16px" }}>
              Send your product dimensions, quantity, reference image and
              preferred finish. We can help develop a suitable tube packaging
              specification and quotation.
            </p>
            <ul style={{ color: "#c5c5c5", lineHeight: 2, paddingLeft: 18, margin: "16px 0" }}>
              <li>MOQ from 100 pcs</li>
              <li>1 pc prototype available</li>
              <li>Custom diameter, height, insert and finishing</li>
              <li>Air / Sea / Express delivery</li>
            </ul>
            <div className="mrb-contact">
              <div className="mrb-contact-note">
                <b>WhatsApp</b>
                <a href={waLink(WA_MESSAGES.tube)} target="_blank" rel="noopener">
                  +86 159 1388 1634
                </a>
              </div>
              <div className="mrb-contact-note">
                <b>Email</b>
                <a href="mailto:AMY@XINGYUE.STORE">AMY@XINGYUE.STORE</a>
              </div>
            </div>
            <a className="mrb-back" href="/">
              ← Back to homepage
            </a>
          </div>
          <QuoteForm />
        </div>
      </section>

      <ProductBuyerGuides
        title="Tube Packaging Buyer Guides & Resources"
        subtitle="Learn how to choose paper wraps, color systems, inserts and prepare custom paper tube packaging RFQs."
        guides={[
          {
            tag: "Paper & Finishing",
            title: "Luxury Packaging Paper Types: Art Paper vs Specialty Paper vs Kraft",
            desc: "Compare paper wrap options for rigid paper tubes including coated art paper, kraft paper and specialty textures.",
            href: "/resources/luxury-packaging-paper-types-art-paper-vs-specialty-paper-vs-kraft/",
          },
          {
            tag: "Color & Printing",
            title: "Pantone vs CMYK for Custom Packaging",
            desc: "A buyer guide to choosing Pantone spot colors or CMYK printing for cylindrical tube packaging.",
            href: "/resources/pantone-vs-cmyk-custom-packaging/",
          },
          {
            tag: "Packaging Inserts",
            title: "EVA vs Paperboard vs Molded Pulp Packaging Inserts",
            desc: "Review insert options to hold bottles, candles and cosmetics securely inside tube packaging.",
            href: "/resources/packaging-inserts-eva-vs-paperboard-vs-molded-pulp/",
          },
          {
            tag: "RFQ Preparation",
            title: "How to Prepare an RFQ for Custom Packaging",
            desc: "Understand what diameter, height, material grade and quantity details to provide for accurate tube quotes.",
            href: "/resources/how-to-prepare-custom-packaging-rfq/",
          },
        ]}
      />

      <ProductCrossLinks industryHref="/industries/perfume-packaging/" industryLabel="Perfume Packaging" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  );
}
