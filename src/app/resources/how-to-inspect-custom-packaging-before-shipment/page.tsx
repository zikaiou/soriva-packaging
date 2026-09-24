/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL =
  "https://www.sorivapackaging.com/resources/how-to-inspect-custom-packaging-before-shipment/";

export const metadata: Metadata = {
  title:
    "How to Inspect Custom Packaging Before Shipment | SORIVA Packaging",
  description:
    "A buyer checklist for inspecting custom packaging before shipment, including dimensions, printing, finishing, inserts, quantity, packing and shipping readiness.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title:
      "How to Inspect Custom Packaging Before Shipment | SORIVA Packaging",
    description:
      "A buyer checklist for inspecting custom packaging before shipment, including dimensions, printing, finishing, inserts, quantity, packing and shipping readiness.",
  },
};

const sidebarLinks = [
  { href: "/rfq/", label: "Request a Quote" },
  { href: "/products/", label: "All Products" },
  { href: "/custom-packaging/", label: "Custom Packaging" },
  { href: "/factory/", label: "Factory" },
  { href: "/projects/", label: "Projects" },
  { href: "/resources/custom-gift-box-sample-checklist/", label: "Sample Approval Checklist" },
  { href: "/resources/how-to-choose-custom-packaging-manufacturer-china/", label: "Supplier Selection Guide" },
  { href: "/resources/exw-vs-fob-vs-ddp-custom-packaging/", label: "EXW vs FOB vs DDP" },
];

const dimensionChecks = [
  { check: "Dimensions", review: "Finished L × W × H against approved specification." },
  { check: "Structure", review: "Opening, closure, drawer movement or lid fit." },
  { check: "Board", review: "Rigidity and agreed construction." },
  { check: "Insert", review: "Fit, cutout position and product stability." },
];

const finishingChecks = [
  "Logo position",
  "Print registration",
  "Color consistency",
  "Foil stamping",
  "Embossing/debossing",
  "Spot UV",
  "Lamination quality",
];

const preShipmentChecklist = [
  "Quantity checked",
  "Dimensions checked",
  "Structure checked",
  "Printing checked",
  "Finishing checked",
  "Insert checked",
  "Packing checked",
  "Shipping data confirmed",
];

const faqs = [
  {
    q: "Can inspection be done from photos?",
    a: "Photos can help with remote verification, but the appropriate inspection method depends on the project and risk level.",
  },
  {
    q: "What should be compared with the approved sample?",
    a: "Structure, dimensions, printing, finishing, insert fit and general appearance.",
  },
  {
    q: "Should carton data be checked before shipment?",
    a: "Yes. Carton quantity, dimensions, weight and total CBM affect shipping and receiving.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sorivapackaging.com/" },
        { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.sorivapackaging.com/resources/" },
        {
          "@type": "ListItem",
          position: 3,
          name: "How to Inspect Custom Packaging Before Shipment",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline: "How to Inspect Custom Packaging Before Shipment",
      description:
        "A buyer checklist for inspecting custom packaging before shipment, including dimensions, printing, finishing, inserts, quantity, packing and shipping readiness.",
      author: { "@type": "Organization", name: "SORIVA Packaging" },
      publisher: { "@type": "Organization", name: "SORIVA Packaging" },
      mainEntityOfPage: PAGE_URL,
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

export default function Page() {
  return (
    <main className="mrb-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ---------- Hero ---------- */}
      <section className="mrb-hero">
        <div className="container">
          <p className="mrb-breadcrumb">
            <a href="/">Home</a> / <a href="/resources/">Resources</a> / Inspection Guide
          </p>
          <div className="mrb-hero-copy" style={{ maxWidth: 860 }}>
            <span className="mrb-eyebrow">BUYER GUIDE</span>
            <h1>How to Inspect Custom Packaging Before Shipment</h1>
            <p className="mrb-lead">
              A buyer checklist for inspecting custom packaging before
              shipment, including dimensions, printing, finishing, inserts,
              quantity, packing and shipping readiness.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Article Content ---------- */}
      <section className="mrb-section">
        <div className="container mrb-article">
          <article className="mrb-article-main">
            <p>
              Pre-shipment inspection helps confirm that bulk packaging matches
              the approved sample and agreed specification before the order
              leaves the factory.
            </p>

            <h2>1. Check Quantity and Packaging Type</h2>
            <p>
              Confirm production quantity, finished box type, color version and
              any SKU differences.
            </p>

            <h2>2. Inspect Dimensions and Structure</h2>
            <div className="mrb-table-wrap">
              <table className="mrb-table">
                <thead>
                  <tr>
                    <th>Check</th>
                    <th>What to Review</th>
                  </tr>
                </thead>
                <tbody>
                  {dimensionChecks.map((r) => (
                    <tr key={r.check}>
                      <td><b>{r.check}</b></td>
                      <td>{r.review}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>3. Check Printing and Finishing</h2>
            <ul>
              {finishingChecks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>4. Check Cosmetic Defects</h2>
            <p>
              Review representative units for scratches, glue marks, dents, dirty
              surfaces, uneven edges and obvious assembly defects.
            </p>

            <h2>5. Confirm Packing</h2>
            <p>
              Check inner protection, units per carton, carton labels, master
              carton dimensions and total carton count.
            </p>

            <div className="mrb-note">
              <b>Buyer Tip:</b> Ask for representative QC photos and packing
              photos before shipment when an onsite inspection is not practical.
            </div>

            <h2>6. Confirm Shipping Readiness</h2>
            <p>
              Before dispatch, confirm final carton data, total CBM, gross
              weight, shipping method and delivery details.
            </p>

            <h2>Pre-Shipment Checklist</h2>
            <div className="mrb-note" style={{ background: "#faf8f4", borderLeftColor: "#c79a51" }}>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {preShipmentChecklist.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>

            <h2>Frequently Asked Questions</h2>
            <div className="mrb-faq" style={{ margin: "20px 0" }}>
              {faqs.map((f) => (
                <div className="mrb-faq-item" key={f.q} style={{ borderBottom: "1px solid #e3ddd5", padding: "16px 0" }}>
                  <b style={{ display: "block", fontSize: 16, marginBottom: 8, color: "var(--ink)" }}>{f.q}</b>
                  <p style={{ margin: 0, color: "var(--muted)", fontSize: 14 }}>{f.a}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className="mrb-sidebar">
            <b>Related Pages</b>
            {sidebarLinks.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </aside>
        </div>
      </section>

      {/* ---------- Quote CTA ---------- */}
      <section className="mrb-section dark">
        <div className="container">
          <div className="mrb-head center">
            <span className="mrb-eyebrow">READY TO QUOTE?</span>
            <h2>Discuss Your Packaging Project</h2>
            <p>
              Send size, quantity, reference images and destination details for a
              more accurate quotation.
            </p>
          </div>
          <div
            className="mrb-hero-actions"
            style={{ justifyContent: "center", marginTop: 28 }}
          >
            <a href="/rfq/" className="btn gold">
              Request Packaging Quote
            </a>
            <a
              href={waLink(WA_MESSAGES.guide)}
              target="_blank"
              rel="noopener"
              className="btn-wa"
            >
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
