/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL =
  "https://www.sorivapackaging.com/resources/prototype-sample-vs-pre-production-sample/";

export const metadata: Metadata = {
  title:
    "Prototype Sample vs Pre-Production Sample: What Buyers Should Know | SORIVA Packaging",
  description:
    "Understand the difference between prototype and pre-production samples for custom packaging, including what each sample is used to approve before mass production.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title:
      "Prototype Sample vs Pre-Production Sample: What Buyers Should Know | SORIVA Packaging",
    description:
      "Understand the difference between prototype and pre-production samples for custom packaging, including what each sample is used to approve before mass production.",
  },
};

const sidebarLinks = [
  { href: "/rfq/", label: "Request a Quote" },
  { href: "/products/", label: "Products" },
  { href: "/products/magnetic-rigid-boxes/", label: "Magnetic Rigid Boxes" },
  { href: "/products/drawer-boxes/", label: "Drawer Boxes" },
  { href: "/products/two-piece-rigid-boxes/", label: "Two-Piece Rigid Boxes" },
  { href: "/custom-packaging/", label: "Custom Packaging" },
  { href: "/resources/custom-gift-box-sample-checklist/", label: "Sample Checklist" },
  { href: "/resources/how-to-prepare-custom-packaging-rfq/", label: "RFQ Preparation Guide" },
  { href: "/resources/how-to-inspect-custom-packaging-before-shipment/", label: "Pre-Shipment Inspection" },
];

const sampleComparison = [
  {
    check: "Structure",
    prototype: "Primary focus",
    preprod: "Confirmed again",
  },
  {
    check: "Dimensions",
    prototype: "Primary focus",
    preprod: "Final confirmation",
  },
  {
    check: "Insert Fit",
    prototype: "Important",
    preprod: "Final check",
  },
  {
    check: "Printing",
    prototype: "May be simplified depending on sample method",
    preprod: "Closer to approved production intent",
  },
  {
    check: "Finishing",
    prototype: "May be simulated or limited",
    preprod: "Should be reviewed when applicable",
  },
  {
    check: "Mass Production Reference",
    prototype: "Not always final",
    preprod: "Often used as a stronger approval reference",
  },
];

const approvalItems = [
  "Finished dimensions",
  "Opening and closure",
  "Insert fit",
  "Paper and board feel",
  "Color accuracy",
  "Logo position",
  "Foil / emboss / spot UV",
  "General workmanship",
];

const checklistItems = [
  "Structure approved",
  "Size approved",
  "Insert approved",
  "Color approved",
  "Finishing approved",
  "Artwork approved",
  "Packing requirements confirmed",
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
          name: "Prototype Sample vs Pre-Production Sample: What Buyers Should Know",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline:
        "Prototype Sample vs Pre-Production Sample: What Buyers Should Know",
      description:
        "Understand the difference between prototype and pre-production samples for custom packaging, including what each sample is used to approve before mass production.",
      author: { "@type": "Organization", name: "SORIVA Packaging" },
      publisher: { "@type": "Organization", name: "SORIVA Packaging" },
      mainEntityOfPage: PAGE_URL,
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
            <a href="/">Home</a> / <a href="/resources/">Resources</a> / Sampling Guide
          </p>
          <div className="mrb-hero-copy" style={{ maxWidth: 860 }}>
            <span className="mrb-eyebrow">BUYER GUIDE</span>
            <h1>
              Prototype Sample vs Pre-Production Sample: What Buyers Should Know
            </h1>
            <p className="mrb-lead">
              Understand the difference between prototype and pre-production
              samples for custom packaging, including what each sample is used
              to approve before mass production.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Article Content ---------- */}
      <section className="mrb-section">
        <div className="container mrb-article">
          <article className="mrb-article-main">
            <p>
              Not every packaging sample serves the same purpose. A prototype is
              usually used to confirm structure and presentation, while a
              pre-production sample is closer to the intended mass-production
              specification.
            </p>

            <h2>Prototype Sample</h2>
            <p>
              A prototype helps verify dimensions, structure, opening
              experience, insert fit and overall presentation before the project
              moves further into production planning.
            </p>

            <h2>Pre-Production Sample</h2>
            <p>
              A pre-production sample is used when buyers need a closer check of
              the intended materials, printing, finishing and assembly before
              bulk production begins.
            </p>

            <div className="mrb-table-wrap">
              <table className="mrb-table">
                <thead>
                  <tr>
                    <th>Check Item</th>
                    <th>Prototype Sample</th>
                    <th>Pre-Production Sample</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleComparison.map((r) => (
                    <tr key={r.check}>
                      <td><b>{r.check}</b></td>
                      <td>{r.prototype}</td>
                      <td>{r.preprod}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mrb-note">
              <b>Buyer Tip:</b> Ask exactly what the sample is intended to
              verify. Do not assume every sample uses the same production method
              as mass production.
            </div>

            <h2>What Should Buyers Approve?</h2>
            <ul>
              {approvalItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>Keep an Approved Reference</h2>
            <p>
              For important projects, the approved sample should be clearly
              identified and retained as a reference for production and quality
              review.
            </p>

            <h2>Sample Approval Checklist</h2>
            <div className="mrb-note" style={{ background: "#faf8f4", borderLeftColor: "#c79a51" }}>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {checklistItems.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
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
            <span className="mrb-eyebrow">PLAN YOUR CUSTOM BOX</span>
            <h2>Plan Your Custom Box Project</h2>
            <p>
              Send your product dimensions, quantity, reference images and
              destination so the right structure and sample plan can be reviewed.
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
