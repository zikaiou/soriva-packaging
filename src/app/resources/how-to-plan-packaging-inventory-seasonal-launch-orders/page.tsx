/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL =
  "https://www.sorivapackaging.com/resources/how-to-plan-packaging-inventory-seasonal-launch-orders/";

export const metadata: Metadata = {
  title:
    "How to Plan Packaging Inventory for Seasonal or Launch Orders | SORIVA Packaging",
  description:
    "A buyer guide to planning custom packaging inventory for launches, holiday seasons and recurring orders, including demand, lead time, safety stock and reorder timing.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title:
      "How to Plan Packaging Inventory for Seasonal or Launch Orders | SORIVA Packaging",
    description:
      "A buyer guide to planning custom packaging inventory for launches, holiday seasons and recurring orders, including demand, lead time, safety stock and reorder timing.",
  },
};

const sidebarLinks = [
  { href: "/rfq/", label: "Request a Quote" },
  { href: "/products/", label: "Products" },
  { href: "/custom-packaging/", label: "Custom Packaging" },
  { href: "/factory/", label: "Factory" },
  { href: "/resources/how-custom-packaging-moq-affects-unit-cost/", label: "MOQ vs Unit Cost Guide" },
  { href: "/resources/custom-packaging-cost-breakdown/", label: "Cost Breakdown Guide" },
  { href: "/resources/how-to-reduce-custom-packaging-shipping-cost/", label: "Shipping Cost Guide" },
  { href: "/resources/custom-gift-box-sample-checklist/", label: "Sample Checklist" },
];

const timelineStages = [
  {
    stage: "Artwork / structure",
    consideration: "Allow time for revisions and approvals.",
  },
  {
    stage: "Sampling",
    consideration: "Include shipping time for physical sample review if needed.",
  },
  {
    stage: "Material preparation",
    consideration: "Specialty papers or inserts may require additional coordination.",
  },
  {
    stage: "Mass production",
    consideration: "Confirm realistic production timing for the quantity and finishing.",
  },
  {
    stage: "QC and packing",
    consideration: "Allow time for final inspection and carton preparation.",
  },
  {
    stage: "Freight",
    consideration: "Express, air and sea have very different transit times.",
  },
];

const checklistItems = [
  "Launch date",
  "Forecast quantity",
  "Sample approval date",
  "Production timing",
  "Freight method",
  "Storage capacity",
  "Safety stock",
  "Reorder point",
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
          name: "How to Plan Packaging Inventory for Seasonal or Launch Orders",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline:
        "How to Plan Packaging Inventory for Seasonal or Launch Orders",
      description:
        "A buyer guide to planning custom packaging inventory for launches, holiday seasons and recurring orders, including demand, lead time, safety stock and reorder timing.",
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
            <a href="/">Home</a> / <a href="/resources/">Resources</a> / Inventory Planning
          </p>
          <div className="mrb-hero-copy" style={{ maxWidth: 860 }}>
            <span className="mrb-eyebrow">BUYER GUIDE</span>
            <h1>
              How to Plan Packaging Inventory for Seasonal or Launch Orders
            </h1>
            <p className="mrb-lead">
              A buyer guide to planning custom packaging inventory for launches,
              holiday seasons and recurring orders, including demand, lead time,
              safety stock and reorder timing.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Article Content ---------- */}
      <section className="mrb-section">
        <div className="container mrb-article">
          <article className="mrb-article-main">
            <p>
              Custom packaging often has longer planning requirements than
              standard stock packaging because artwork, sampling, materials and
              production need to be confirmed before mass production.
            </p>

            <h2>Start With the Sales Window</h2>
            <p>
              Work backward from the date when finished goods need to be ready
              for sale, not only from the date packaging should leave the
              factory.
            </p>

            <h2>Build a Simple Packaging Timeline</h2>
            <div className="mrb-table-wrap">
              <table className="mrb-table">
                <thead>
                  <tr>
                    <th>Stage</th>
                    <th>Planning Consideration</th>
                  </tr>
                </thead>
                <tbody>
                  {timelineStages.map((r) => (
                    <tr key={r.stage}>
                      <td><b>{r.stage}</b></td>
                      <td>{r.consideration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Seasonal Orders Need More Buffer</h2>
            <p>
              Holiday periods, product launches and peak shipping seasons can
              create pressure on production and freight capacity. Buyers should
              avoid placing critical orders at the last possible moment.
            </p>

            <div className="mrb-note">
              <b>Buyer Tip:</b> For seasonal launches, decide your
              must-arrive-by date first, then work backward through freight,
              production, sample approval and artwork.
            </div>

            <h2>How Much Safety Stock?</h2>
            <p>
              There is no universal percentage. Safety stock should reflect
              sales volatility, reorder lead time, storage space and the cost of
              running out of packaging.
            </p>

            <h2>When to Reorder</h2>
            <p>
              A reorder point can be based on average packaging usage during
              supplier production and freight lead time, plus an additional
              safety buffer appropriate to your business.
            </p>

            <h2>Inventory Planning Checklist</h2>
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
            <span className="mrb-eyebrow">PLAN YOUR ORDER</span>
            <h2>Plan Your Packaging Order</h2>
            <p>
              Send target quantity, size, destination and launch timing for a
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
