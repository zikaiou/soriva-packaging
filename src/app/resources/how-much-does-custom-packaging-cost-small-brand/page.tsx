/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL =
  "https://www.sorivapackaging.com/resources/how-much-does-custom-packaging-cost-small-brand/";

export const metadata: Metadata = {
  title: "How Much Does Custom Packaging Cost for a Small Brand? | SORIVA Packaging",
  description:
    "A practical budgeting guide for small brands buying custom packaging, covering MOQ, setup, materials, printing, inserts, freight and how to compare quotes without overordering.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "How Much Does Custom Packaging Cost for a Small Brand? | SORIVA Packaging",
    description:
      "Learn what really drives custom packaging cost for a small brand and how to compare first-run options without sacrificing presentation.",
  },
};

const budgetAreas = [
  { area: "Box structure", impact: "Rigid, drawer, magnetic, foldable and tube structures have different material and labor requirements." },
  { area: "Finished size", impact: "Larger dimensions increase board, wrap paper, insert material and shipping volume." },
  { area: "Order quantity", impact: "Lower quantities spread setup and tooling across fewer units." },
  { area: "Printing", impact: "Color count, coverage and print method affect setup and production cost." },
  { area: "Finishing", impact: "Foil, embossing, debossing and spot UV add separate production steps." },
  { area: "Insert", impact: "EVA, paperboard, molded pulp or fabric-lined inserts can materially change cost." },
  { area: "Packing & freight", impact: "Master carton efficiency, CBM and shipping method affect landed cost." },
];

const compareOptions = [
  { option: "Plain stock packaging + labels", best: "Very early validation", watch: "Lowest branding control but low commitment" },
  { option: "Standard-size box + custom print", best: "Small first launch", watch: "Less structural freedom" },
  { option: "Fully custom rigid box", best: "Premium retail or gifting", watch: "Higher setup and low-MOQ unit cost" },
  { option: "Foldable rigid box", best: "Premium presentation with logistics sensitivity", watch: "Assembly and structure need review" },
];

const quoteChecklist = [
  "Finished box size or product dimensions",
  "Target quantity and possible reorder quantity",
  "Preferred box structure",
  "Board and wrap paper preference",
  "Printing colors and logo file",
  "Finishing requirements",
  "Insert requirement",
  "Sample requirement",
  "Destination country / postcode",
  "Preferred trade term or shipping method",
];

const faqs = [
  {
    q: "How much does custom packaging cost for a small business?",
    a: "There is no reliable universal price because cost depends on size, structure, quantity, material, printing, finishing, inserts and freight. The most useful approach is to compare several quantity tiers against the same specification.",
  },
  {
    q: "Why is low MOQ custom packaging expensive per unit?",
    a: "Short runs still require setup, cutting, printing and finishing preparation. Those fixed costs are spread across fewer units, increasing the unit price.",
  },
  {
    q: "Is it cheaper to use a standard box and add branding?",
    a: "It can reduce upfront cost and tooling for early-stage brands, especially when a standard size fits the product well. The tradeoff is less control over structure and presentation.",
  },
  {
    q: "What usually makes custom packaging expensive?",
    a: "Large dimensions, specialty papers, multiple premium finishes, complex inserts, low quantities, manual assembly and high shipping volume are common cost drivers.",
  },
  {
    q: "How can I make packaging look premium without spending too much?",
    a: "Focus first on proportion, paper quality, clean artwork and one or two strong details. A simple structure with disciplined branding often looks more premium than a box overloaded with finishes.",
  },
  {
    q: "Should I include shipping when comparing packaging quotes?",
    a: "Yes. Compare landed cost rather than factory unit price alone, especially for bulky rigid packaging where volumetric weight and CBM can materially affect freight.",
  },
  {
    q: "What quantity should a small brand order first?",
    a: "The first order should balance launch demand, cash flow, storage and reorder timing. Comparing 100, 300 and 500-piece scenarios can help reveal the tradeoff between unit cost and inventory risk.",
  },
  {
    q: "Can SORIVA make low MOQ custom packaging?",
    a: "For selected projects, MOQ can start from 100 pcs, subject to structure, size, material, printing, finishing and insert requirements.",
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
        { "@type": "ListItem", position: 3, name: "How Much Does Custom Packaging Cost for a Small Brand?", item: PAGE_URL },
      ],
    },
    {
      "@type": "Article",
      headline: "How Much Does Custom Packaging Cost for a Small Brand?",
      description:
        "A practical budgeting guide for small brands comparing first-run custom packaging options.",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="mrb-hero">
        <div className="container">
          <p className="mrb-breadcrumb">
            <a href="/">Home</a> / <a href="/resources/">Resources</a> / Small Brand Packaging Cost
          </p>
          <div className="mrb-hero-copy" style={{ maxWidth: 900 }}>
            <span className="mrb-eyebrow">SMALL BRAND BUDGET GUIDE</span>
            <h1>How Much Does Custom Packaging Cost for a Small Brand?</h1>
            <p className="mrb-lead">
              A practical first-order budgeting guide for startups and growing brands comparing low-MOQ custom boxes, premium finishes, inserts and international freight.
            </p>
            <div className="mrb-tags">
              <span>Custom Packaging Cost</span>
              <span>Small Business Packaging</span>
              <span>Low MOQ</span>
              <span>First Packaging Order</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mrb-section">
        <div className="container mrb-article">
          <article className="mrb-article-main">
            <p>
              Small brands often ask for a simple number: “How much should custom packaging cost?” The difficult part is that packaging is not priced like a standard retail item. Two boxes with the same outside appearance can have very different costs because of board thickness, paper, structure, insert, finishing, quantity and shipping volume.
            </p>

            <div className="mrb-note">
              <b>Buyer takeaway:</b> do not compare custom packaging by unit price alone. Compare the full specification, the order quantity and the landed cost.
            </div>

            <h2>What Actually Determines Custom Packaging Cost?</h2>
            <div className="mrb-table-wrap">
              <table className="mrb-table">
                <thead>
                  <tr><th>Cost Area</th><th>Why It Matters</th></tr>
                </thead>
                <tbody>
                  {budgetAreas.map((r) => (
                    <tr key={r.area}>
                      <td><b>{r.area}</b></td>
                      <td>{r.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Why Small Orders Often Feel Expensive</h2>
            <p>
              Reddit discussions from small-business owners repeatedly show the same problem: a founder wants professional packaging but does not want to commit to hundreds or thousands of units before sales are proven. That tension is normal because setup costs still exist even when the production run is small.
            </p>
            <p>
              This is why a 100-piece run can have a much higher unit price than a 500-piece run even when the box itself has not changed. The correct question is not “Why is the small run expensive?” but “How much inventory risk am I avoiding by testing at a smaller quantity?”
            </p>

            <h2>Four First-Run Packaging Strategies</h2>
            <div className="mrb-table-wrap">
              <table className="mrb-table">
                <thead>
                  <tr><th>Option</th><th>Best For</th><th>Tradeoff</th></tr>
                </thead>
                <tbody>
                  {compareOptions.map((r) => (
                    <tr key={r.option}>
                      <td><b>{r.option}</b></td>
                      <td>{r.best}</td>
                      <td>{r.watch}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>How to Estimate a Realistic First Packaging Budget</h2>
            <p>
              Start with total cash commitment, not target unit price. Decide how many units you realistically expect to sell before a reorder, then compare packaging options at two or three quantity tiers.
            </p>
            <p>
              A useful comparison is 100 / 300 / 500 pcs when the structure supports those quantities. This reveals where unit economics improve and whether the larger order is worth the extra inventory.
            </p>

            <h2>How to Keep Premium Packaging Affordable</h2>
            <ul>
              <li>Use one box size across several SKUs where practical.</li>
              <li>Prioritize paper quality and clean artwork before adding several finishes.</li>
              <li>Choose one strong finishing detail instead of stacking foil, embossing and spot UV.</li>
              <li>Keep insert geometry efficient and avoid unnecessary empty space.</li>
              <li>Compare standard-size and fully custom structures.</li>
              <li>Ask for packed carton dimensions before approving production.</li>
            </ul>

            <h2>Do Not Forget Freight</h2>
            <p>
              A low factory price can become a poor deal if the box consumes too much shipping volume. This matters especially for assembled rigid boxes, where volumetric weight or CBM can materially change landed cost.
            </p>
            <p>
              Read our <a href="/resources/volumetric-weight-custom-packaging-shipping-cost/">volumetric weight guide</a> and <a href="/resources/how-to-reduce-custom-packaging-shipping-cost/">shipping cost guide</a> before comparing international quotes.
            </p>

            <h2>What to Send Suppliers So Quotes Are Comparable</h2>
            <div className="mrb-note" style={{ background: "#faf8f4", borderLeftColor: "#c79a51" }}>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {quoteChecklist.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>

            <h2>Why the Cheapest Quote May Not Be the Cheapest Packaging</h2>
            <p>
              A lower quote can be based on thinner board, different paper, fewer finishing steps, a simpler insert or a different packing configuration. Ask suppliers to quote the same specification and clearly identify what is included.
            </p>
            <p>
              For a deeper line-by-line explanation, see our <a href="/resources/custom-packaging-cost-breakdown/">custom packaging cost breakdown</a>.
            </p>

            <h2>When a Small Brand Should Upgrade to Fully Custom Packaging</h2>
            <p>
              Fully custom packaging usually makes more sense once the brand understands product-market fit, repeat-order volume and the role packaging plays in presentation or retail value. Premium products, gifting, fragrance, jewelry and beauty products can justify the upgrade earlier when packaging is part of the customer experience.
            </p>

            <h2>FAQ</h2>
            <div className="mrb-faq">
              {faqs.map((f) => (
                <div className="mrb-faq-item" key={f.q}>
                  <b>{f.q}</b>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>

            <p style={{ fontSize: 13, color: "#777", marginTop: 28 }}>
              Packaging costs vary by specification, quantity and destination. Any project should be quoted against the actual requirements rather than a generic per-unit benchmark.
            </p>
          </article>

          <aside className="mrb-sidebar">
            <b>Related Buyer Guides</b>
            <a href="/resources/custom-packaging-cost-breakdown/">Custom Packaging Cost Breakdown</a>
            <a href="/resources/how-custom-packaging-moq-affects-unit-cost/">MOQ & Unit Cost</a>
            <a href="/resources/low-moq-custom-packaging-small-business-guide/">Low MOQ Small Business Guide</a>
            <a href="/resources/volumetric-weight-custom-packaging-shipping-cost/">Volumetric Weight Guide</a>
            <a href="/resources/how-to-prepare-custom-packaging-rfq/">Prepare an RFQ</a>
            <a href="/rfq/">Request a Quote</a>
          </aside>
        </div>
      </section>

      <section className="mrb-section dark">
        <div className="container">
          <div className="mrb-head center">
            <span className="mrb-eyebrow">COMPARE YOUR FIRST ORDER</span>
            <h2>Get a Packaging Quote Based on Your Actual Project</h2>
            <p>
              Send product size, structure, target quantity, finishing and destination. We can review suitable options and quantity tiers.
            </p>
          </div>
          <div className="mrb-hero-actions" style={{ justifyContent: "center", marginTop: 28 }}>
            <a href="/rfq/" className="btn gold">Request Packaging Quote</a>
            <a href={waLink(WA_MESSAGES.guide)} target="_blank" rel="noopener" className="btn-wa">
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
