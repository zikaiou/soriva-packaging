/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import ProductBuyerGuides from "../../components/ProductBuyerGuides";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL = "https://www.sorivapackaging.com/solutions/two-piece-rigid-boxes-for-jewelry/";

export const metadata: Metadata = {
  title: {
    absolute: "Two-Piece Rigid Boxes for Jewelry | Luxury Jewelry Packaging | SORIVA Packaging",
  },
  description:
    "Custom two-piece rigid boxes for jewelry, rings, necklaces and luxury accessories. Classic lid and base structures, plush velvet inserts, custom slits and foil branding.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Two-Piece Rigid Boxes for Jewelry | Luxury Jewelry Packaging | SORIVA Packaging",
    description:
      "Custom two-piece rigid boxes for jewelry, rings, necklaces and luxury accessories. Classic lid and base structures, plush velvet inserts, custom slits and foil branding.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
    images: [
      {
        url: "https://www.sorivapackaging.com/img/jewelry.webp",
        width: 1200,
        height: 900,
        alt: "Custom two-piece rigid boxes for jewelry and luxury accessories",
      },
    ],
  },
};

const priorities = [
  {
    title: "Jewelry Presentation & Delicate Protection",
    desc: "Plush velvet linings and smooth paper wraps help protect delicate jewelry surfaces during storage and display.",
  },
  {
    title: "Precision Cutout Slits & Tabs",
    desc: "Custom-cut slits engineered for rings, necklace chains, earring studs and bracelets ensure items remain centered when the lid is removed.",
  },
  {
    title: "Classic Lift-Off Lid Experience",
    desc: "Separate lid and base construction creates a deliberate, tactile reveal favored by luxury boutiques and fine jewelry houses.",
  },
  {
    title: "Compact Luxury Proportions",
    desc: "Greyboard thickness is selected according to box size, product weight and structural requirements to ensure compact, solid proportions.",
  },
];

const structures = [
  {
    title: "Classic Square Ring & Earring Box",
    desc: "Compact square lid and base proportions with internal velvet insert, ideal for diamond rings, studs and delicate pendants.",
    ideal: "Rings, earrings, brooches and single-item boutique gifting.",
  },
  {
    title: "Long Bracelet & Necklace Case",
    desc: "Elongated rectangular lid-and-base construction engineered with elastic corner tabs to display chains and tennis bracelets flat.",
    ideal: "Necklaces, tennis bracelets, bangles and bridal jewelry sets.",
  },
  {
    title: "Shoulder / Neck Luxury Box",
    desc: "Engineered with an exposed inner neck that creates an elegant visual reveal band between the lid and base upon opening.",
    ideal: "Luxury watches, high-jewelry suites and executive anniversary gifts.",
  },
];

const inserts = [
  {
    title: "Velvet-Covered Slotted EVA",
    desc: "EVA foam laminated with black, cream, grey or navy velvet, with custom-cut slits for rings and earrings.",
  },
  {
    title: "Pillow Cushion Inserts",
    desc: "Soft micro-fiber or satin-wrapped padded pillows engineered to support watches and bangle bracelets.",
  },
  {
    title: "Cardboard Velvet Folders",
    desc: "Recyclable structured card folders with elastic or ribbon loops to hold delicate necklace chains.",
  },
  {
    title: "Custom Molded Pulp Trays",
    desc: "Biodegradable molded pulp inserts contoured around jewelry presentation cases for eco-conscious brands.",
  },
];

const samples = [
  {
    img: "/img/project-jewelry.webp",
    title: "Fine Jewelry Two-Piece Box",
    desc: "Rigid lid-and-base presentation box with custom velvet-lined insert and metallic gold foil.",
  },
  {
    img: "/img/jewelry.webp",
    title: "Luxury Ring & Pendant Case",
    desc: "Classic two-piece rigid box with textured specialty paper wrap and precision ring slot cutouts.",
  },
  {
    img: "/img/two-piece-rigid.webp",
    title: "Bespoke Jewelry Suite Box",
    desc: "Two-piece rigid presentation box engineered for complete jewelry collection displays.",
  },
];

const faqs = [
  {
    q: "Why choose two-piece rigid boxes for jewelry packaging?",
    a: "Two-piece lid-and-base boxes are the traditional gold standard in luxury jewelry, offering a timeless lifting reveal, excellent structural rigidity and compact countertop proportions.",
  },
  {
    q: "Can you create custom insert slits for specific jewelry pieces?",
    a: "Yes. We customize the exact slot geometry (ring slits, earring holes, necklace tabs, watch collars) based on your physical product samples or 2D/3D CAD drawings.",
  },
  {
    q: "What is the MOQ for custom jewelry two-piece boxes?",
    a: "Custom jewelry rigid box projects can start from 100 pcs for selected designs. Production runs of 500–3,000+ pcs achieve optimal unit economics.",
  },
  {
    q: "What paper wraps are best for luxury jewelry boxes?",
    a: "Specialty textured papers (linen, laid, soft-touch matte) and dyed black or colored cardstock are ideal because they provide a rich tactile feel and show crisp, sharp foil stamping.",
  },
  {
    q: "Can I request a prototype sample before mass production?",
    a: "Yes. 1 pc prototype sample with custom-cut velvet insert and foil stamped logo is available to verify fit, lid tolerance and finishing quality before bulk manufacturing.",
  },
  {
    q: "Can we develop matching jewelry shopping bags and pouches?",
    a: "Yes. We offer coordinated retail suites including small boutique paper bags with ribbon handles, velvet pouches, polishing cloths and branded warranty cards.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sorivapackaging.com/" },
        { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.sorivapackaging.com/custom-packaging/" },
        { "@type": "ListItem", position: 3, name: "Jewelry Two-Piece Boxes", item: PAGE_URL },
      ],
    },
    {
      "@type": "Service",
      name: "Custom Two-Piece Rigid Boxes for Jewelry",
      description:
        "OEM/ODM custom two-piece lid and base rigid box manufacturing for jewelry, watches and luxury accessory brands.",
      provider: { "@type": "Organization", name: "SORIVA Packaging", url: "https://www.sorivapackaging.com/" },
      url: PAGE_URL,
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

export default function TwoPieceJewelryBoxesSolution() {
  return (
    <main className="mrb-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero */}
      <section className="mrb-hero">
        <div className="container">
          <nav className="mrb-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a> / <a href="/custom-packaging/">Solutions</a> / Two-Piece Rigid Boxes for Jewelry
          </nav>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">JEWELRY &amp; ACCESSORY PACKAGING</span>
              <h1>Custom Two-Piece Rigid Boxes for Jewelry</h1>
              <p className="mrb-lead">
                Showcase fine jewelry with bespoke two-piece lid and base rigid boxes.
                Engineered with soft velvet inserts, separate lift-off lid construction,
                compact luxury proportions and metallic hot foil stamping for rings, necklaces and watches.
              </p>
              <div className="mrb-tags">
                <span>MOQ From 100 pcs</span>
                <span>Velvet-Covered Inserts</span>
                <span>Classic Lid &amp; Base Design</span>
                <span>Custom Ring &amp; Chain Slits</span>
                <span>Worldwide Shipping</span>
              </div>
              <div className="mrb-hero-actions">
                <a href="/rfq/" className="btn gold">
                  Request Packaging Quote
                </a>
                <a
                  href={waLink(WA_MESSAGES.jewelry)}
                  target="_blank"
                  rel="noopener"
                  className="btn-wa"
                >
                  <WhatsAppIcon /> Chat on WhatsApp
                </a>
                <a href="/industries/jewelry-packaging/" className="btn ghost">
                  Jewelry Packaging Hub
                </a>
              </div>
            </div>
            <div className="mrb-hero-media">
              <img
                src="/img/jewelry.webp"
                alt="Custom two-piece rigid boxes for jewelry and luxury accessories"
                width="1200"
                height="900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Priorities */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">JEWELRY PACKAGING PRIORITIES</span>
            <h2>Jewelry Presentation &amp; Delicate Protection</h2>
            <p>EVA, velvet-covered, paperboard or molded pulp inserts can be selected according to product protection and presentation requirements.</p>
          </div>
          <div className="mrb-features">
            {priorities.map((p) => (
              <article className="mrb-feature" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Box Structures */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">BOX STRUCTURE OPTIONS</span>
            <h2>Two-Piece Structures for Fine Jewelry</h2>
            <p>Select tailored lid silhouettes engineered for rings, pendants, watches and complete jewelry suites.</p>
          </div>
          <div className="mrb-features" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {structures.map((s) => (
              <article className="mrb-feature" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div style={{ marginTop: 12, fontSize: 13, color: "#666" }}>
                  <strong>Best for:</strong> {s.ideal}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Inserts & Materials */}
      <section className="mrb-section">
        <div className="container mrb-spec-wrap">
          <div>
            <div className="mrb-head">
              <span className="eyebrow dark">PRECISION INSERTS</span>
              <h2>Custom Velvet &amp; Foam Inserts</h2>
            </div>
            <p style={{ color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
              EVA, velvet-covered, paperboard or molded pulp inserts can be selected according to product protection and presentation requirements:
            </p>
            <div style={{ display: "grid", gap: 14 }}>
              {inserts.map((ins) => (
                <div key={ins.title} style={{ background: "#fcfbfa", padding: "14px 18px", borderRadius: 8, border: "1px solid #e7e2d9" }}>
                  <b style={{ color: "#111", display: "block", marginBottom: 4 }}>{ins.title}</b>
                  <span style={{ fontSize: 13, color: "#555" }}>{ins.desc}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mrb-structure">
            <div className="mrb-head">
              <span className="eyebrow dark">TACTILE WRAPS &amp; FOIL</span>
              <h2>Surface Craftsmanship</h2>
            </div>
            <p style={{ color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
              Enhance the perceived value of your jewelry with refined embellishments:
            </p>
            <ul style={{ color: "#444", lineHeight: 1.8, paddingLeft: 20 }}>
              <li><strong>Hot Foil Stamping:</strong> Metallic gold, silver or rose gold logos.</li>
              <li><strong>Blind Embossing:</strong> Subtle raised monograms with tactile relief.</li>
              <li><strong>Specialty Textured Papers:</strong> Linen, pearlized and soft-touch tactile sheets.</li>
              <li><strong>Satin Ribbon Pulls:</strong> Integrated ribbon tabs for smooth opening.</li>
            </ul>
            <div style={{ marginTop: 20 }}>
              <a href="/resources/luxury-packaging-paper-types-art-paper-vs-specialty-paper-vs-kraft/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                Read our Luxury Paper Types Guide →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Real Sample Gallery */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">SAMPLE PROOF</span>
            <h2>Real Jewelry Two-Piece Box References</h2>
            <p>Explore real packaging capability samples produced for fine jewelry and watch brands.</p>
          </div>
          <div className="mrb-apps" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            {samples.map((s) => (
              <article className="mrb-app" key={s.title} style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 10, overflow: "hidden" }}>
                <img src={s.img} alt={s.title} loading="lazy" style={{ width: "100%", height: 260, objectFit: "cover" }} />
                <div style={{ padding: "16px 20px" }}>
                  <b style={{ fontSize: 17, color: "#111", display: "block", marginBottom: 6 }}>{s.title}</b>
                  <span style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>{s.desc}</span>
                </div>
              </article>
            ))}
          </div>
          <p style={{ fontSize: 12, color: "#888", textAlign: "center", marginTop: 16 }}>
            <em>Sample displays shown for packaging capability reference.</em>
          </p>
        </div>
      </section>

      {/* Internal Links to Jewelry Hub & Projects */}
      <section className="mrb-section">
        <div className="container mrb-spec-wrap">
          <div>
            <div className="mrb-head">
              <span className="eyebrow dark">JEWELRY PACKAGING NETWORK</span>
              <h2>Complete Jewelry Packaging Solutions</h2>
            </div>
            <p style={{ lineHeight: 1.7, color: "#444", marginBottom: 16 }}>
              In addition to two-piece rigid boxes, we produce sliding drawer boxes, magnetic cases
              and matching small boutique shopping bags for jewelry brands:
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="/industries/jewelry-packaging/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                Jewelry Packaging Industry Hub →
              </a>
              <a href="/projects/fine-jewelry-presentation-box/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                Fine Jewelry Case Study →
              </a>
              <a href="/products/two-piece-rigid-boxes/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                Two-Piece Rigid Boxes Catalog →
              </a>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <img
              src="/img/jewelry.webp"
              alt="Jewelry presentation packaging solutions"
              loading="lazy"
              style={{ width: "100%", borderRadius: 10, border: "1px solid #e7e2d9", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about custom two-piece rigid boxes for jewelry and watches.</p>
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

      {/* Guides */}
      <ProductBuyerGuides
        title="Jewelry Packaging Guides & Resources"
        subtitle="Technical advice on box structures, foam insert materials and sample verification."
        guides={[
          {
            tag: "Box Structures",
            title: "Rigid Box Structure Guide: Magnetic vs Drawer vs Two-Piece",
            desc: "Compare sliding drawer boxes, magnetic cases and lid-and-base boxes for fine jewelry.",
            href: "/resources/rigid-box-structure-guide-magnetic-vs-drawer-vs-two-piece/",
          },
          {
            tag: "Inserts Comparison",
            title: "EVA vs Paperboard vs Molded Pulp Packaging Inserts",
            desc: "Understand protection, presentation and sustainability differences across jewelry insert materials.",
            href: "/resources/packaging-inserts-eva-vs-paperboard-vs-molded-pulp/",
          },
          {
            tag: "Sampling",
            title: "Prototype Sample vs Pre-Production Sample: What Buyers Should Know",
            desc: "Understand what each sample stage verifies before releasing bulk jewelry box manufacturing.",
            href: "/resources/prototype-sample-vs-pre-production-sample/",
          },
        ]}
      />

      {/* Final Quote & Contact */}
      <section className="mrb-quote" id="quote">
        <div className="container mrb-quote-grid">
          <div>
            <span className="mrb-eyebrow">START A PROJECT</span>
            <h2>Develop Your Custom Jewelry Two-Piece Boxes</h2>
            <p style={{ color: "#c5c5c5", lineHeight: 1.7, margin: "12px 0 16px" }}>
              Send us your jewelry dimensions, target quantity, artwork files and insert preferences.
              Our packaging specialists will provide dielines, material recommendations and quotation.
            </p>
            <div className="mrb-contact">
              <div className="mrb-contact-note">
                <b>WhatsApp</b>
                <a href={waLink(WA_MESSAGES.jewelry)} target="_blank" rel="noopener">
                  +86 159 1388 1634
                </a>
              </div>
              <div className="mrb-contact-note">
                <b>Email</b>
                <a href="mailto:AMY@XINGYUE.STORE">AMY@XINGYUE.STORE</a>
              </div>
            </div>
            <a className="mrb-back" href="/industries/jewelry-packaging/">
              Back to Jewelry Packaging Hub →
            </a>
          </div>
          <QuoteForm />
        </div>
      </section>
    </main>
  );
}
