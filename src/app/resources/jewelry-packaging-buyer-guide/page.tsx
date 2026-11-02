import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL = "https://www.sorivapackaging.com/resources/jewelry-packaging-buyer-guide/";

export const metadata: Metadata = {
  title: "Custom Jewelry Boxes Wholesale: Jewelry Packaging Buyer Guide | SORIVA",
  description: "Compare custom jewelry box structures, inserts, materials, logo finishes, MOQ and sampling. A practical wholesale sourcing and RFQ guide for jewelry brands.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Custom Jewelry Boxes Wholesale: Jewelry Packaging Buyer Guide | SORIVA",
    description: "A sourcing guide to custom jewelry boxes, fitted inserts, pouches and matching paper bags for jewelry brands and wholesale buyers.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
  },
};

const structures = [
  ["Drawer box", "A sliding tray with a sleeve or outer case.", "Rings, earrings, pendants and compact gift sets.", "Tray clearance, ribbon pull, insert position and ease of opening."],
  ["Two-piece rigid box", "A separate lid and base.", "Classic jewelry presentation, watches and gift collections.", "Lid fit, wall height, shoulder detail and insert depth."],
  ["Magnetic rigid box", "A hinged or book-style lid with magnetic closure.", "Premium multi-piece sets and gift-ready presentation.", "Magnet alignment, closure strength, hinge movement and packed volume."],
  ["Flip-top jewelry box", "A connected lid that opens on a hinge.", "Ring, necklace and earring presentation where the lid remains attached.", "Hinge construction, opening angle, insert fit and lid stability."],
  ["PU leather jewelry box", "A leather-look exterior with a lined interior.", "Portable or presentation formats for selected jewelry pieces.", "Surface material, lining, cushion fit, available colors and whether the design is stocked or custom."],
];

const quoteChecklist = [
  "Jewelry type and exact product dimensions, including chain or clasp when relevant",
  "Quantity by jewelry type, box size, color and artwork version",
  "Preferred structure and opening style, with reference images if available",
  "Insert layout: ring slot, earring holes, pendant tab, necklace hook or bracelet cushion",
  "Exterior material, interior lining, color references and logo artwork",
  "Finishing: foil stamping, embossing, debossing, print or other approved treatment",
  "Whether a matching pouch, polishing cloth, card or paper bag is required",
  "Sample requirement, destination country and target delivery date",
  "Carton packing, quantity per carton, dimensions, gross weight and total CBM",
];

const faqs = [
  ["Can jewelry boxes be customized for rings, necklaces and earrings?", "Yes. The outer box and insert can be developed around the jewelry type and dimensions. Provide measurements and the preferred display orientation so the cavity, slit, tab or cushion can be reviewed."],
  ["Which insert is best for jewelry boxes?", "The suitable insert depends on product weight, surface sensitivity, presentation and material preference. Velvet-covered foam, EVA, paperboard and molded pulp are possible options for different projects. Approve the insert fit with a sample."],
  ["Can jewelry packaging include matching pouches and shopping bags?", "Yes. A coordinated set can include a presentation box, pouch and retail paper bag. Confirm the color references, logo position, material and quantity for each component so the set can be quoted consistently."],
  ["What is the MOQ for custom jewelry boxes wholesale?", "Selected SORIVA custom packaging projects can start from 100 pieces. The confirmed MOQ depends on the structure, dimensions, insert, material, logo finish and quantity per design."],
  ["Should I order a sample before bulk production?", "A sample is recommended to check jewelry fit, insert retention, lid or drawer movement, surface material, color and logo finishing before approving the production specification."],
  ["What information helps a jewelry box manufacturer quote accurately?", "Send jewelry dimensions, quantity by style, box structure, insert layout, material and color references, logo artwork, sample needs and delivery destination. Reference photos or drawings help clarify the intended result."],
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sorivapackaging.com/" },
        { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.sorivapackaging.com/resources/" },
        { "@type": "ListItem", position: 3, name: "Jewelry Packaging Buyer Guide", item: PAGE_URL },
      ],
    },
    {
      "@type": "Article",
      headline: "Custom Jewelry Boxes Wholesale: Jewelry Packaging Buyer Guide",
      description: "A practical wholesale sourcing guide to jewelry box structures, inserts, branding and RFQ preparation.",
      author: { "@type": "Organization", name: "SORIVA Packaging" },
      publisher: { "@type": "Organization", name: "SORIVA Packaging" },
      mainEntityOfPage: PAGE_URL,
    },
  ],
};

export default function JewelryPackagingBuyerGuide() {
  return (
    <main className="mrb-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="mrb-hero">
        <div className="container">
          <p className="mrb-breadcrumb"><a href="/">Home</a> / <a href="/resources/">Resources</a> / Jewelry Packaging Buyer Guide</p>
          <div className="mrb-hero-copy" style={{ maxWidth: 900 }}>
            <span className="mrb-eyebrow">JEWELRY WHOLESALE BUYER GUIDE</span>
            <h1>Custom Jewelry Boxes Wholesale: How to Choose the Right Packaging</h1>
            <p className="mrb-lead">Compare jewelry box structures, fitted inserts, materials and branding before requesting a wholesale quotation from a jewelry packaging manufacturer.</p>
            <div className="mrb-hero-actions" style={{ marginTop: 24 }}>
              <a href="/rfq/" className="btn gold">Request a Jewelry Packaging Quote</a>
              <a href="/industries/jewelry-packaging/" className="btn ghost">Explore Jewelry Packaging</a>
            </div>
          </div>
        </div>
      </section>

      <section className="mrb-section">
        <div className="container mrb-article">
          <article className="mrb-article-main">
            <p><strong>Quick answer:</strong> The right custom jewelry box starts with the jewelry dimensions and the way the piece should be displayed. Choose the box structure and insert together, then confirm the material, logo finish, sample standard, quantity and shipping details in the RFQ.</p>

            <h2>1. Choose a box structure for the jewelry and retail experience</h2>
            <div className="mrb-table-wrap">
              <table className="mrb-table">
                <thead><tr><th>Box type</th><th>Construction</th><th>Common use</th><th>What to confirm</th></tr></thead>
                <tbody>{structures.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody>
              </table>
            </div>
            <p>Explore <a href="/products/flip-top-jewelry-boxes/">flip-top jewelry boxes</a>, <a href="/products/pu-leather-jewelry-boxes/">PU leather jewelry boxes</a>, <a href="/products/drawer-boxes/">drawer boxes</a>, <a href="/products/two-piece-rigid-boxes/">two-piece rigid boxes</a> and <a href="/products/magnetic-rigid-boxes/">magnetic rigid boxes</a>. Each structure creates a different opening experience and has different packing requirements.</p>

            <h2>2. Design the insert around the real jewelry</h2>
            <p>Do not specify an insert only by saying “velvet” or “foam.” Provide the product dimensions, thickness, weight and display orientation. For necklaces, include chain length and pendant dimensions; for earrings, include post or hook details; for rings, confirm band width and the desired angle of presentation.</p>
            <p>Possible insert materials include velvet-covered EVA, plain EVA, paperboard and molded pulp. The choice depends on protection, appearance, sustainability goals and budget. See the <a href="/resources/packaging-inserts-eva-vs-paperboard-vs-molded-pulp/">EVA vs paperboard vs molded pulp guide</a>.</p>

            <h2>3. Match exterior material and logo finishing</h2>
            <p>Common exterior choices include coated art paper, specialty textured paper and selected leather-look materials. Confirm the exterior and interior color references separately. For branding, specify logo artwork, position, finished size and the required process, such as hot foil stamping, embossing or debossing.</p>
            <p>Review <a href="/resources/luxury-packaging-paper-types-art-paper-vs-specialty-paper-vs-kraft/">luxury packaging paper types</a> and <a href="/resources/foil-stamping-vs-embossing-vs-spot-uv/">foil stamping vs embossing vs spot UV</a> before approving the artwork.</p>

            <h2>4. Plan a coordinated jewelry packaging set</h2>
            <p>Jewelry brands may need more than a box. A coordinated system can include a presentation box, microfiber or suede-style pouch, care card, polishing cloth and a branded paper shopping bag. Specify each item separately, then confirm how the colors, logo size and finish will match across the set.</p>
            <p>Explore <a href="/products/luxury-paper-bags/">custom luxury paper bags</a> and the <a href="/resources/matching-paper-bags-gift-boxes-brand-packaging-guide/">matching bags and gift boxes guide</a>.</p>

            <h2>5. Prepare a wholesale jewelry box RFQ</h2>
            <p>Include as many of these details as possible to reduce quotation revisions:</p>
            <div className="mrb-note"><ul>{quoteChecklist.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <p>If the final size is not known, send the physical jewelry dimensions and reference photos. The manufacturer can review a suitable box and insert concept for sampling. Use the <a href="/resources/how-to-measure-product-for-custom-box-packaging/">product measurement guide</a> and <a href="/resources/how-to-prepare-custom-packaging-rfq/">RFQ preparation guide</a>.</p>

            <h2>6. Review the sample before bulk production</h2>
            <p>Check whether the jewelry sits securely, can be removed easily and remains in the intended display position. Inspect the lid or drawer movement, insert edges, lining, surface texture, color, logo position and foil registration. Record any approved changes before the production run.</p>
            <p>For a structured review, use the <a href="/resources/custom-gift-box-sample-checklist/">custom gift box sample checklist</a> and <a href="/resources/how-to-inspect-custom-packaging-before-shipment/">pre-shipment inspection guide</a>.</p>

            <h2>7. Compare quotations and shipping assumptions</h2>
            <p>Compare suppliers using the same structure, dimensions, insert, material, finish, quantity and sample standard. Ask for unit price by quantity, sample or setup costs, packing quantity per carton, carton dimensions, gross weight and total CBM. If you are ordering boxes and bags together, request the pricing and packing details for each component as well as the coordinated set.</p>

            <h2>Frequently asked questions</h2>
            <div className="mrb-faq">{faqs.map(([q, a]) => <div className="mrb-faq-item" key={q}><b>{q}</b><p>{a}</p></div>)}</div>

            <h2>Explore custom jewelry packaging</h2>
            <ul>
              <li><a href="/industries/jewelry-packaging/">Custom jewelry packaging for brands</a></li>
              <li><a href="/products/custom-jewelry-boxes/">Custom jewelry boxes</a></li>
              <li><a href="/products/custom-ring-boxes/">Custom ring boxes</a></li>
              <li><a href="/products/custom-necklace-earring-boxes/">Custom necklace and earring boxes</a></li>
              <li><a href="/products/luxury-paper-bags/">Matching luxury paper bags</a></li>
            </ul>
          </main>
          <aside className="mrb-sidebar">
            <b>Request a jewelry packaging quote</b>
            <p>Send jewelry dimensions, quantity, structure, insert, material, logo artwork and destination.</p>
            <a className="btn gold" href="/rfq/">Submit a Jewelry RFQ</a>
            <hr />
            <b>Related product pages</b>
            <a href="/products/flip-top-jewelry-boxes/">Flip-top jewelry boxes</a>
            <a href="/products/pu-leather-jewelry-boxes/">PU leather jewelry boxes</a>
            <a href="/products/custom-ring-boxes/">Custom ring boxes</a>
            <a href="/products/custom-necklace-earring-boxes/">Necklace &amp; earring boxes</a>
          </aside>
        </div>
      </section>

      <section className="mrb-section dark">
        <div className="container">
          <div className="mrb-head"><span className="mrb-eyebrow">START A PROJECT</span><h2>Request a Custom Jewelry Packaging Wholesale Quote</h2><p>Share your jewelry dimensions, quantity by style, preferred box structure, insert and branding details. SORIVA can review the specification and prepare a quotation for your project.</p></div>
          <div className="mrb-hero-actions" style={{ justifyContent: "center", marginTop: 24 }}>
            <a href="/rfq/" className="btn gold">Request a Quote</a>
            <a href={waLink(WA_MESSAGES.guide)} target="_blank" rel="noopener noreferrer" className="btn-wa"><WhatsAppIcon /> Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </main>
  );
}
