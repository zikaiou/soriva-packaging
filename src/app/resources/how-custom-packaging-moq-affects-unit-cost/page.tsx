/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL =
  "https://www.sorivapackaging.com/resources/how-custom-packaging-moq-affects-unit-cost/";

export const metadata: Metadata = {
  title: "How Custom Packaging MOQ Affects Unit Cost | SORIVA Packaging",
  description:
    "A buyer guide to understanding how MOQ affects unit cost, setup cost allocation, materials, finishing, tooling and shipping efficiency.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "How Custom Packaging MOQ Affects Unit Cost | SORIVA Packaging",
    description:
      "A buyer guide to understanding how MOQ affects unit cost, setup cost allocation, materials, finishing, tooling and shipping efficiency.",
  },
};

const sidebarLinks = [
  { href: "/rfq/", label: "Request a Quote" },
  { href: "/products/", label: "Products" },
  { href: "/custom-packaging/", label: "Custom Packaging" },
  { href: "/factory/", label: "Factory" },
  { href: "/resources/custom-packaging-cost-breakdown/", label: "Cost Breakdown Guide" },
  { href: "/resources/how-to-plan-packaging-inventory-seasonal-launch-orders/", label: "Inventory Planning Guide" },
  { href: "/resources/custom-packaging-moq-guide/", label: "MOQ Basics Guide" },
  { href: "/resources/how-to-reduce-custom-packaging-shipping-cost/", label: "Shipping Cost Guide" },
];

const costAreaTable = [
  {
    area: "Setup",
    why: "Machine preparation and production setup are shared across fewer units.",
  },
  {
    area: "Tooling",
    why: "Dies, plates, molds or setup-related costs may be spread over the full order quantity.",
  },
  {
    area: "Printing",
    why: "Short runs may have less efficient press utilization and higher setup allocation.",
  },
  {
    area: "Finishing",
    why: "Foil, emboss, spot UV and other processes may require separate setup steps.",
  },
  {
    area: "Material purchasing",
    why: "Larger orders may allow more efficient sheet, paper and board usage.",
  },
  {
    area: "Packing",
    why: "Labor and carton preparation can be more efficient at scale.",
  },
];

const comparisonPoints = [
  "Unit price at each quantity tier",
  "Tooling or setup charges",
  "Sample cost",
  "Carton quantity and CBM",
  "Freight estimate",
  "Storage requirements",
  "Expected sales rate",
];

const checklistItems = [
  "Launch quantity",
  "Unit price tiers",
  "Setup/tooling cost",
  "Storage capacity",
  "Freight cost",
  "Sales forecast",
  "Reorder timing",
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
          name: "How Custom Packaging MOQ Affects Unit Cost",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline: "How Custom Packaging MOQ Affects Unit Cost",
      description:
        "A buyer guide to understanding how MOQ affects unit cost, setup cost allocation, materials, finishing, tooling and shipping efficiency.",
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
            <a href="/">Home</a> / <a href="/resources/">Resources</a> / MOQ & Pricing
          </p>
          <div className="mrb-hero-copy" style={{ maxWidth: 860 }}>
            <span className="mrb-eyebrow">BUYER GUIDE</span>
            <h1>How Custom Packaging MOQ Affects Unit Cost</h1>
            <p className="mrb-lead">
              A buyer guide to understanding how MOQ affects unit cost, setup
              cost allocation, materials, finishing, tooling and shipping
              efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Article Content ---------- */}
      <section className="mrb-section">
        <div className="container mrb-article">
          <article className="mrb-article-main">
            <p>
              MOQ is not only a supplier policy. In custom packaging, quantity
              affects how setup, tooling, printing, finishing and production
              time are spread across the order.
            </p>

            <h2>Why Lower Quantities Often Cost More Per Unit</h2>
            <div className="mrb-table-wrap">
              <table className="mrb-table">
                <thead>
                  <tr>
                    <th>Cost Area</th>
                    <th>Why MOQ Matters</th>
                  </tr>
                </thead>
                <tbody>
                  {costAreaTable.map((r) => (
                    <tr key={r.area}>
                      <td><b>{r.area}</b></td>
                      <td>{r.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>MOQ Does Not Mean “Always Order More”</h2>
            <p>
              A larger order can reduce unit cost, but it may increase inventory,
              storage and cash commitment. The right quantity should balance
              unit economics with realistic sales and launch plans.
            </p>

            <div className="mrb-note">
              <b>Buyer Tip:</b> Ask for quotes at two or three quantity levels
              such as 100 / 500 / 1,000 pcs. This helps you see where unit cost
              changes meaningfully.
            </div>

            <h2>What Buyers Should Compare</h2>
            <ul>
              {comparisonPoints.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>

            <h2>MOQ Decision Checklist</h2>
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
