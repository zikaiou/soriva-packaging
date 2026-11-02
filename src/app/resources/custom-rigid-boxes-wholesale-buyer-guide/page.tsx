import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL = "https://www.sorivapackaging.com/resources/custom-rigid-boxes-wholesale-buyer-guide/";

export const metadata: Metadata = {
  title: "Custom Rigid Boxes Wholesale: Buyer & RFQ Guide | SORIVA",
  description: "A wholesale buyer guide to custom rigid boxes: compare magnetic, foldable, drawer and two-piece structures, inserts, finishes, sampling and freight before requesting a quote.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Custom Rigid Boxes Wholesale: Buyer & RFQ Guide | SORIVA",
    description: "Compare rigid box structures, materials, inserts, samples and shipping requirements before sending a custom wholesale packaging RFQ.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
  },
};

const structures = [
  ["Magnetic rigid box", "A hinged or book-style lid with concealed magnetic closure.", "Premium gift sets, cosmetics, fragrance and branded presentation.", "Confirm magnet position, lid alignment, insert fit and assembled carton volume."],
  ["Foldable magnetic rigid box", "A rigid presentation box designed to be supplied flat and assembled.", "Projects where storage and shipping volume are important.", "Ask for the corner-fixing method, included fittings, assembly instructions and a video."],
  ["Drawer rigid box", "A sliding tray and outer sleeve, often with a ribbon or fabric pull.", "Jewelry, accessories, small gift sets and layered unboxing.", "Check tray clearance, pull strength and how the insert stays in place."],
  ["Two-piece rigid box", "A separate lift-off lid and base.", "Simple premium presentation, apparel gifts and product sets.", "Specify lid depth, base wall height, fit tolerance and whether a shoulder is needed."],
];

const rfqItems = [
  "Product dimensions, approximate weight and a photo or drawing",
  "Required internal box size and preferred external size, if known",
  "Preferred opening style: magnetic, foldable magnetic, drawer or lift-off lid",
  "Quantity by size, color and artwork version",
  "Greyboard, wrapping paper, color reference and surface finish",
  "Insert material, cavity layout and any protection requirements",
  "Logo artwork and placement on the outside or inside lid",
  "Sample requirement, delivery destination and target arrival date",
  "Whether the quotation should separate unit price, tooling, sample and freight",
  "Master carton quantity, dimensions, gross weight and total CBM",
];

const faqs = [
  ["What is the difference between a rigid box and a folding carton?", "A rigid box is built around thick board wrapped with paper or another finish and is designed to hold its shape. A folding carton uses thinner paperboard and ships flat. The correct structure depends on the product, presentation and logistics requirements."],
  ["Which rigid box structure is best for wholesale orders?", "There is no universal best structure. Magnetic boxes create a hinged presentation, foldable magnetic boxes can reduce packed volume, drawer boxes provide a sliding reveal and two-piece boxes use a separate lid and base. Compare the same product fit, insert and shipping assumptions before choosing."],
  ["Can custom rigid boxes include inserts and logo finishing?", "Yes. Insert layout and material should be selected around the actual product dimensions and weight. Printing, foil stamping, embossing, debossing, spot UV and specialty papers can be reviewed against the artwork and selected wrap."],
  ["What is the MOQ for custom rigid boxes?", "Selected SORIVA custom packaging projects can start from 100 pieces. The confirmed MOQ depends on box dimensions, board and wrap materials, insert complexity, finishing and production setup. Request confirmation for the exact specification."],
  ["What should I compare in a rigid box quotation?", "Compare the same internal dimensions, board, wrap paper, insert, finish, quantity, sample standard and packing method. Ask suppliers to separate unit price, setup or tooling, sample cost and freight so the offers are comparable."],
  ["Do foldable magnetic boxes reduce shipping cost?", "They can reduce the space used by the empty box because they are supplied flat, but the actual saving depends on the assembled size, flat-packed dimensions, carton plan and destination. Request packed CBM for both foldable and assembled options."],
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sorivapackaging.com/" },
        { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.sorivapackaging.com/resources/" },
        { "@type": "ListItem", position: 3, name: "Custom Rigid Boxes Wholesale Buyer Guide", item: PAGE_URL },
      ],
    },
    {
      "@type": "Article",
      headline: "Custom Rigid Boxes Wholesale: Buyer & RFQ Guide",
      description: "A practical guide to choosing rigid box structures and preparing a wholesale packaging RFQ.",
      author: { "@type": "Organization", name: "SORIVA Packaging" },
      publisher: { "@type": "Organization", name: "SORIVA Packaging" },
      mainEntityOfPage: PAGE_URL,
    },
  ],
};

export default function CustomRigidBoxesWholesaleGuide() {
  return (
    <main className="mrb-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="mrb-hero">
        <div className="container">
          <p className="mrb-breadcrumb"><a href="/">Home</a> / <a href="/resources/">Resources</a> / Rigid Box Wholesale Guide</p>
          <div className="mrb-hero-copy" style={{ maxWidth: 900 }}>
            <span className="mrb-eyebrow">WHOLESALE BUYER GUIDE</span>
            <h1>Custom Rigid Boxes Wholesale: How to Choose a Manufacturer and Prepare Your RFQ</h1>
            <p className="mrb-lead">A practical sourcing guide for brands, retailers and purchasing teams comparing magnetic, foldable, drawer and two-piece rigid gift boxes.</p>
            <div className="mrb-hero-actions" style={{ marginTop: 24 }}>
              <a href="/rfq/" className="btn gold">Request a Rigid Box Quote</a>
              <a href="/products/magnetic-rigid-boxes/" className="btn ghost">Explore Magnetic Rigid Boxes</a>
            </div>
          </div>
        </div>
      </section>

      <section className="mrb-section">
        <div className="container mrb-article">
          <article className="mrb-article-main">
            <p><strong>Quick answer:</strong> A useful wholesale rigid box RFQ defines the product fit, opening structure, board and wrap materials, insert, branding, quantity, sample standard and delivery destination. Ask every supplier to quote against the same specification so unit prices and freight assumptions can be compared fairly.</p>

            <h2>1. Compare the main rigid box structures</h2>
            <p>Start with the opening experience and how the empty boxes will be stored and shipped. These formats solve different packaging needs:</p>
            <div className="mrb-table-wrap">
              <table className="mrb-table">
                <thead><tr><th>Structure</th><th>How it opens</th><th>Typical application</th><th>What to confirm</th></tr></thead>
                <tbody>{structures.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody>
              </table>
            </div>
            <p>Explore the product pages for <a href="/products/magnetic-rigid-boxes/">magnetic rigid boxes</a>, <a href="/products/foldable-magnetic-rigid-boxes/">foldable magnetic rigid boxes</a>, <a href="/products/drawer-boxes/">drawer boxes</a> and <a href="/products/two-piece-rigid-boxes/">two-piece rigid boxes</a>.</p>

            <h2>2. Confirm product fit before choosing the insert</h2>
            <p>Provide the actual product dimensions, approximate weight, orientation and any fragile or scratch-sensitive surfaces. If the product is a set, include the dimensions of every component and the preferred arrangement. The insert should hold the product securely without excessive pressure or visible movement.</p>
            <p>Depending on the application, a supplier may recommend EVA foam, velvet-covered foam, paperboard, molded pulp or another suitable insert. Ask for a drawing or sample to confirm cavity position, depth, clearance and removal access. See the <a href="/resources/packaging-inserts-eva-vs-paperboard-vs-molded-pulp/">insert material comparison</a> before finalizing the specification.</p>

            <h2>3. Specify board, wrap paper and branding separately</h2>
            <p>“Rigid box” alone is not a complete material specification. Confirm the greyboard thickness, wrapping paper type, exterior and interior colors, and the finish on each printed surface. Hot foil, embossing, debossing, spot UV and lamination can affect both appearance and production setup.</p>
            <p>For board selection, review the <a href="/resources/rigid-greyboard-thickness-guide-custom-boxes/">greyboard thickness guide</a>. For surface choices, compare <a href="/resources/luxury-packaging-paper-types-art-paper-vs-specialty-paper-vs-kraft/">art paper, specialty paper and kraft paper</a> and the <a href="/resources/foil-stamping-vs-embossing-vs-spot-uv/">finishing guide</a>.</p>

            <h2>4. What to include in a wholesale rigid box RFQ</h2>
            <p>Use this checklist when requesting quotations from a rigid box manufacturer:</p>
            <div className="mrb-note"><ul>{rfqItems.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <p>If dimensions are not finalized, send a product photo, measurements and a reference box. The supplier can then recommend a structure for engineering review rather than guessing at a finished size. See <a href="/resources/how-to-measure-product-for-custom-box-packaging/">how to measure a product for custom box packaging</a> and <a href="/resources/how-to-prepare-custom-packaging-rfq/">how to prepare a packaging RFQ</a>.</p>

            <h2>5. Compare quotations on a like-for-like basis</h2>
            <p>A low unit price may reflect a thinner board, a different wrap paper, a simpler insert, fewer finishing steps or a different packing method. Ask each supplier to confirm the same construction and quantity breaks. Keep sample cost, tooling or setup, production price and freight as separate line items.</p>
            <p>For export orders, request master carton quantity, carton dimensions, gross weight and total CBM. Compare assembled and flat-pack options using the packed volume, not just the appearance of the empty box. The <a href="/resources/foldable-vs-traditional-rigid-box/">foldable vs traditional rigid box guide</a> explains the main logistics trade-offs.</p>

            <h2>6. Approve a sample before mass production</h2>
            <p>Use the sample to check the box dimensions, lid or drawer movement, magnet alignment where applicable, insert fit, paper color, logo position, foil registration and visible edges. Confirm what is included in the approved reference sample and require any agreed changes to be reflected in the production specification.</p>
            <p>Review the <a href="/resources/custom-gift-box-sample-checklist/">custom gift box sample checklist</a> and <a href="/resources/how-to-inspect-custom-packaging-before-shipment/">pre-shipment inspection guide</a> before releasing a bulk order.</p>

            <h2>7. Questions to ask a rigid box manufacturer</h2>
            <ul>
              <li>Can you produce the requested structure and insert, or are you proposing a substitute?</li>
              <li>What exact board, wrap paper and finishing are included in the quotation?</li>
              <li>Can you provide a physical sample and a written approval specification?</li>
              <li>For foldable boxes, are magnets and all assembly fittings included, and how are the corners secured?</li>
              <li>What are the packed carton dimensions, quantity per carton and total CBM?</li>
              <li>Which shipping terms and destination charges are included or excluded?</li>
            </ul>

            <h2>Frequently asked questions</h2>
            <div className="mrb-faq">{faqs.map(([q, a]) => <div className="mrb-faq-item" key={q}><b>{q}</b><p>{a}</p></div>)}</div>

            <h2>Related product and sourcing pages</h2>
            <ul>
              <li><a href="/products/magnetic-rigid-boxes/">Custom magnetic rigid boxes</a></li>
              <li><a href="/products/foldable-magnetic-rigid-boxes/">Foldable magnetic rigid boxes</a></li>
              <li><a href="/products/drawer-boxes/">Custom rigid drawer boxes</a></li>
              <li><a href="/products/two-piece-rigid-boxes/">Two-piece rigid boxes</a></li>
              <li><a href="/factory/">Factory and production capabilities</a></li>
            </ul>
          </main>
          <aside className="mrb-sidebar">
            <b>Request a quote</b>
            <p>Send the box structure, product size, quantity, insert, artwork and destination for a specification-based quotation.</p>
            <a className="btn gold" href="/rfq/">Submit a Rigid Box RFQ</a>
            <hr />
            <b>Related buyer guides</b>
            <a href="/resources/rigid-box-structure-guide-magnetic-vs-drawer-vs-two-piece/">Rigid box structure comparison</a>
            <a href="/resources/rigid-greyboard-thickness-guide-custom-boxes/">Greyboard thickness guide</a>
            <a href="/resources/foldable-vs-traditional-rigid-box/">Foldable vs traditional rigid boxes</a>
          </aside>
        </div>
      </section>

      <section className="mrb-section dark">
        <div className="container">
          <div className="mrb-head"><span className="mrb-eyebrow">START A PROJECT</span><h2>Request a Custom Rigid Box Wholesale Quote</h2><p>Share your product dimensions, box structure, quantity, insert, branding and shipping destination. SORIVA can review the specification and advise on a suitable quotation route.</p></div>
          <div className="mrb-hero-actions" style={{ justifyContent: "center", marginTop: 24 }}>
            <a href="/rfq/" className="btn gold">Request a Quote</a>
            <a href={waLink(WA_MESSAGES.guide)} target="_blank" rel="noopener noreferrer" className="btn-wa"><WhatsAppIcon /> Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </main>
  );
}
