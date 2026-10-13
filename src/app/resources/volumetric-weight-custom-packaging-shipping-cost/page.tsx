/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL =
  "https://www.sorivapackaging.com/resources/volumetric-weight-custom-packaging-shipping-cost/";

export const metadata: Metadata = {
  title: "Volumetric Weight & Custom Packaging Shipping Cost | SORIVA Packaging",
  description:
    "Learn how volumetric weight can increase custom packaging shipping cost, how carton dimensions affect air and express freight, and what buyers should check before approving a box.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Volumetric Weight & Custom Packaging Shipping Cost | SORIVA Packaging",
    description:
      "A practical guide to dimensional weight, carton size, shipping quotes and packaging choices that can protect margin.",
  },
};

const examples = [
  {
    scenario: "Compact product + oversized rigid box",
    risk: "Low actual weight but high parcel volume",
    action: "Reduce empty space and review a smaller finished box size",
  },
  {
    scenario: "Compressed product upgraded to rigid presentation packaging",
    risk: "Package can move into a higher dimensional-weight bracket",
    action: "Quote freight using packed dimensions before approving the packaging",
  },
  {
    scenario: "Multiple small products in one large gift set",
    risk: "Decorative spacing increases carton volume",
    action: "Rework insert layout and remove unnecessary air space",
  },
  {
    scenario: "Assembled rigid boxes shipped in bulk",
    risk: "Empty boxes consume freight volume",
    action: "Compare foldable rigid structures when the project allows",
  },
];

const preApprovalChecklist = [
  "Finished box dimensions",
  "Packed product dimensions",
  "Actual gross weight",
  "Estimated volumetric weight for the intended route",
  "Units per master carton",
  "Master carton dimensions",
  "Master carton gross weight",
  "Total carton count",
  "Estimated CBM",
  "Air / express / sea freight comparison",
];

const costReductionMoves = [
  "Design the box around packed product dimensions rather than display-only proportions.",
  "Reduce unnecessary headspace and side clearance.",
  "Review whether a slimmer insert can hold the product securely.",
  "Use shared box sizes across SKUs where practical.",
  "Compare assembled rigid boxes with foldable rigid structures.",
  "Ask the supplier to quote master-carton packing before production.",
  "Run a pilot shipment through the real logistics route when freight sensitivity is high.",
];

const faqs = [
  {
    q: "What is volumetric weight?",
    a: "Volumetric weight, also called dimensional weight, is a freight calculation based on the amount of space a parcel occupies. Many air and express routes compare this value with actual weight and charge according to the higher applicable value.",
  },
  {
    q: "Why can a light custom box cost so much to ship?",
    a: "A rigid box may be physically light but occupy a large amount of cargo space. If the parcel volume is high relative to its actual weight, dimensional pricing can increase the shipping charge.",
  },
  {
    q: "How is volumetric weight calculated?",
    a: "Carriers commonly use a length × width × height formula divided by a route-specific divisor. Divisors vary by carrier and service, so buyers should confirm the current formula with the logistics provider instead of assuming one universal number.",
  },
  {
    q: "Can a few centimeters really affect shipping cost?",
    a: "Yes. Small dimension changes can move a parcel into a different dimensional-weight or carrier pricing tier, especially when multiplied across many units.",
  },
  {
    q: "Do foldable rigid boxes reduce shipping cost?",
    a: "They can reduce shipping volume for suitable projects because the boxes may be packed flat. The actual saving depends on structure, carton packing and freight method.",
  },
  {
    q: "Should I compare shipping cost before approving the packaging design?",
    a: "Yes. Buyers should review packed dimensions, carton configuration, total CBM and the intended freight method before final approval when logistics cost matters.",
  },
  {
    q: "Is sea freight affected by volumetric weight the same way as air freight?",
    a: "Sea freight is usually priced differently and often focuses more directly on shipment volume, while air and express services commonly use dimensional-weight calculations. Exact pricing depends on the route and forwarder.",
  },
  {
    q: "What should I request from a packaging supplier?",
    a: "Ask for finished box dimensions, unit weight, units per carton, master-carton size, gross carton weight and total CBM for the planned order quantity.",
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
        { "@type": "ListItem", position: 3, name: "Volumetric Weight & Custom Packaging Shipping Cost", item: PAGE_URL },
      ],
    },
    {
      "@type": "Article",
      headline: "Volumetric Weight and Custom Packaging Shipping Cost: Why Box Size Can Kill Margin",
      description:
        "A practical guide to understanding how packaging dimensions can increase air and express freight cost.",
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
            <a href="/">Home</a> / <a href="/resources/">Resources</a> / Volumetric Weight
          </p>
          <div className="mrb-hero-copy" style={{ maxWidth: 900 }}>
            <span className="mrb-eyebrow">SHIPPING & MARGIN GUIDE</span>
            <h1>Volumetric Weight and Custom Packaging Shipping Cost: Why Box Size Can Kill Margin</h1>
            <p className="mrb-lead">
              A premium box can look inexpensive at the factory and still become expensive after freight. The reason is often dimensional weight: the package occupies more cargo space than its physical weight suggests.
            </p>
            <div className="mrb-tags">
              <span>Volumetric Weight</span>
              <span>Dimensional Weight</span>
              <span>Custom Packaging Shipping Cost</span>
              <span>Carton Optimization</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mrb-section">
        <div className="container mrb-article">
          <article className="mrb-article-main">
            <p>
              When brands upgrade from basic bags or compact mailers to premium rigid packaging, they often focus on the box price first. But for international fulfillment, the more important number may be the packed dimensions. A larger box can increase air or express freight even when the packaging itself is lightweight.
            </p>

            <div className="mrb-note">
              <b>Buyer takeaway:</b> never approve premium packaging on box price alone. Compare the packed dimensions and freight impact before confirming the final structure.
            </div>

            <h2>What Is Volumetric Weight?</h2>
            <p>
              Volumetric weight, also called dimensional weight, converts package size into a chargeable shipping weight. Carriers use it because a large lightweight carton still occupies valuable cargo space.
            </p>
            <p>
              Different carriers and routes can use different divisors, so there is no single formula that should be hard-coded into a sourcing decision. The practical rule is simple: ask your freight provider how the planned route calculates chargeable weight and compare that with the actual packed weight.
            </p>

            <h2>Why Custom Packaging Can Increase Freight Faster Than Expected</h2>
            <p>
              Rigid boxes are designed for presentation, so they may include extra lid depth, thicker walls, fitted inserts and visual spacing. Those design choices can be valuable for the brand, but every extra centimeter is multiplied across the parcel and again across the master carton.
            </p>

            <div className="mrb-table-wrap">
              <table className="mrb-table">
                <thead>
                  <tr>
                    <th>Scenario</th>
                    <th>Freight Risk</th>
                    <th>Practical Action</th>
                  </tr>
                </thead>
                <tbody>
                  {examples.map((r) => (
                    <tr key={r.scenario}>
                      <td><b>{r.scenario}</b></td>
                      <td>{r.risk}</td>
                      <td>{r.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>The Box May Be Cheap. Shipping the Air Is Not.</h2>
            <p>
              This is especially important when a product is currently shipped compressed, nested or in flexible packaging. Moving the same product into a rigid presentation box can create a large increase in parcel volume even if the packaging material itself adds little physical weight.
            </p>
            <p>
              For ecommerce brands, that extra logistics cost repeats on every order. A premium unboxing experience should therefore be evaluated together with average order value, shipping method and customer acquisition economics.
            </p>

            <h2>How a Few Centimeters Can Change the Result</h2>
            <p>
              Length, width and height are multiplied together in dimensional calculations. That means small increases on more than one side can create a much larger total volume change than expected. This is why oversize lids, deep decorative cavities and excess insert spacing should be reviewed before the dieline is approved.
            </p>

            <h2>Seven Ways to Reduce Freight Without Making Packaging Look Cheap</h2>
            <ol>
              {costReductionMoves.map((item) => <li key={item}>{item}</li>)}
            </ol>

            <h2>Rigid vs Foldable Packaging for International Freight</h2>
            <p>
              Traditional rigid boxes usually ship assembled, which means the carton contains the full internal volume of every box. <a href="/products/foldable-magnetic-rigid-boxes/">Foldable magnetic rigid boxes</a> can be packed flatter for suitable projects and may reduce storage and freight volume.
            </p>
            <p>
              Foldable structures are not automatically the right solution for every brand. Assembly method, visual requirements, product weight and order quantity should all be considered.
            </p>

            <h2>Insert Design Is Also a Freight Decision</h2>
            <p>
              An insert is not only about product protection and presentation. A thick insert or wide decorative spacing can increase the finished box footprint. For multi-product sets, redesigning the cavity layout can sometimes reduce the outer dimensions without changing the visible brand experience.
            </p>
            <p>
              See our <a href="/resources/design-one-packaging-insert-for-multiple-products/">multi-product insert guide</a> if several SKUs or components need to share one box.
            </p>

            <h2>What Buyers Should Request Before Approving Production</h2>
            <div className="mrb-note" style={{ background: "#faf8f4", borderLeftColor: "#c79a51" }}>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {preApprovalChecklist.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>

            <h2>Compare Packaging Options by Landed Cost</h2>
            <p>
              The most useful comparison is not “Box A costs less than Box B.” Compare the full landed impact: packaging price, packing labor, master-carton efficiency, freight, storage and expected damage or return risk.
            </p>
            <p>
              For a broader freight-planning checklist, read <a href="/resources/how-to-reduce-custom-packaging-shipping-cost/">How to Reduce Custom Packaging Shipping Cost</a>.
            </p>

            <h2>When to Run a Pilot Shipment</h2>
            <p>
              If the product is bulky, lightweight or highly sensitive to dimensional pricing, a small real-world shipment can reveal more than a theoretical quote. Use the actual packaging, actual logistics route and actual packing method before scaling the order.
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
          </article>

          <aside className="mrb-sidebar">
            <b>Related Pages</b>
            <a href="/resources/how-to-reduce-custom-packaging-shipping-cost/">Reduce Packaging Shipping Cost</a>
            <a href="/resources/exw-vs-fob-vs-ddp-custom-packaging/">EXW vs FOB vs DDP</a>
            <a href="/products/foldable-magnetic-rigid-boxes/">Foldable Magnetic Boxes</a>
            <a href="/resources/design-one-packaging-insert-for-multiple-products/">Multi-Product Insert Guide</a>
            <a href="/resources/custom-packaging-cost-breakdown/">Packaging Cost Breakdown</a>
            <a href="/rfq/">Request a Quote</a>
          </aside>
        </div>
      </section>

      <section className="mrb-section dark">
        <div className="container">
          <div className="mrb-head center">
            <span className="mrb-eyebrow">CHECK THE LANDED COST</span>
            <h2>Review Packaging Dimensions Before You Ship</h2>
            <p>
              Send product dimensions, target quantity, box structure and destination. We can review the packaging direction and prepare carton information for quotation.
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
