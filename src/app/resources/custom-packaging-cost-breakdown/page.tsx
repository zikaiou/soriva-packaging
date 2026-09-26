/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL =
  "https://www.sorivapackaging.com/resources/custom-packaging-cost-breakdown/";

export const metadata: Metadata = {
  title:
    "Custom Packaging Cost Breakdown: What Buyers Are Paying For | SORIVA Packaging",
  description:
    "Understand the main cost drivers in custom packaging, including materials, structure, printing, finishing, inserts, tooling, labor, packing and freight.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title:
      "Custom Packaging Cost Breakdown: What Buyers Are Paying For | SORIVA Packaging",
    description:
      "Understand the main cost drivers in custom packaging, including materials, structure, printing, finishing, inserts, tooling, labor, packing and freight.",
  },
};

const sidebarLinks = [
  { href: "/rfq/", label: "Request a Quote" },
  { href: "/products/", label: "Products" },
  { href: "/custom-packaging/", label: "Custom Packaging" },
  { href: "/factory/", label: "Factory" },
  { href: "/resources/how-custom-packaging-moq-affects-unit-cost/", label: "MOQ vs Unit Cost Guide" },
  { href: "/resources/how-to-plan-packaging-inventory-seasonal-launch-orders/", label: "Inventory Planning Guide" },
  { href: "/resources/rigid-greyboard-thickness-guide-custom-boxes/", label: "Greyboard Thickness Guide" },
  { href: "/resources/how-to-reduce-custom-packaging-shipping-cost/", label: "Shipping Cost Guide" },
];

const costComponents = [
  {
    component: "Structure",
    includes: "Box style, size, board thickness and complexity.",
  },
  {
    component: "Outer paper",
    includes: "Art paper, specialty paper, kraft or other wrap material.",
  },
  {
    component: "Printing",
    includes: "CMYK, Pantone spot colors and print coverage.",
  },
  {
    component: "Finishing",
    includes: "Foil stamping, embossing, debossing, spot UV and lamination.",
  },
  {
    component: "Insert",
    includes: "EVA, paperboard, molded pulp, velvet or other support structures.",
  },
  {
    component: "Tooling / setup",
    includes: "Dies, molds, plates or production setup where applicable.",
  },
  {
    component: "Labor",
    includes: "Assembly, wrapping, finishing and QC.",
  },
  {
    component: "Packing",
    includes: "Inner protection, master cartons and labeling.",
  },
  {
    component: "Freight",
    includes: "Express, air or sea depending on volume, weight and destination.",
  },
];

const costDrivers = [
  "Larger dimensions",
  "Thicker rigid board",
  "Specialty papers",
  "Multiple premium finishes",
  "Complex inserts",
  "Low order quantity",
  "High manual assembly requirements",
  "Large shipping volume",
];

const checklistItems = [
  "Board thickness",
  "Paper type",
  "Printing",
  "Finishing",
  "Insert",
  "MOQ",
  "Packing",
  "Total CBM",
  "Shipping method",
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
          name: "Custom Packaging Cost Breakdown",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline:
        "Custom Packaging Cost Breakdown: What Buyers Are Paying For",
      description:
        "Understand the main cost drivers in custom packaging, including materials, structure, printing, finishing, inserts, tooling, labor, packing and freight.",
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
            <a href="/">Home</a> / <a href="/resources/">Resources</a> / Cost Breakdown
          </p>
          <div className="mrb-hero-copy" style={{ maxWidth: 860 }}>
            <span className="mrb-eyebrow">BUYER GUIDE</span>
            <h1>
              Custom Packaging Cost Breakdown: What Buyers Are Paying For
            </h1>
            <p className="mrb-lead">
              Understand the main cost drivers in custom packaging, including
              materials, structure, printing, finishing, inserts, tooling,
              labor, packing and freight.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Article Content ---------- */}
      <section className="mrb-section">
        <div className="container mrb-article">
          <article className="mrb-article-main">
            <p>
              Custom packaging cost is built from multiple components. Two
              boxes that look similar can have very different pricing because of
              board thickness, paper, inserts, finishing, labor and shipping
              volume.
            </p>

            <h2>Main Cost Components</h2>
            <div className="mrb-table-wrap">
              <table className="mrb-table">
                <thead>
                  <tr>
                    <th>Cost Component</th>
                    <th>What It Includes</th>
                  </tr>
                </thead>
                <tbody>
                  {costComponents.map((r) => (
                    <tr key={r.component}>
                      <td><b>{r.component}</b></td>
                      <td>{r.includes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>What Usually Increases Cost?</h2>
            <ul>
              {costDrivers.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>

            <div className="mrb-note">
              <b>Buyer Tip:</b> Ask suppliers to quote against the same
              specification. A lower quote may simply use a different board,
              paper, insert or finishing method.
            </div>

            <h2>How to Reduce Cost Without Making Packaging Look Cheap</h2>
            <p>
              Cost optimization can come from simplifying structure, reducing
              unnecessary finishing, optimizing box dimensions, changing insert
              material or selecting a more efficient paper.
            </p>

            <h2>Cost Review Checklist</h2>
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
