/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Image from "next/image";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL =
  "https://www.sorivapackaging.com/resources/luxury-paper-bag-size-gsm-guide/";

export const metadata: Metadata = {
  title: { absolute: "Paper Bag Size Chart: cm, mm & Inches | SORIVA" },
  description:
    "Compare six manufacturable paper bag sizes in cm, mm and inches. Learn width, gusset and height measurement, loaded fit, GSM and reinforcement for fashion retail.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    modifiedTime: "2026-11-18",
    images: [{ url: "https://www.sorivapackaging.com/img/soriva-paper-bag-size-guide.png", alt: "SORIVA paper shopping bag size chart showing width, gusset and body height" }],
    url: PAGE_URL,
    title: "Paper Bag Size Chart: cm, mm & Inches | SORIVA",
    description:
      "A buyer guide to custom paper bag dimensions, gusset depth, paper weight and reinforcement for premium retail packaging.",
  },
};

const RFQ_URL = "/rfq/?product=Luxury%20Paper%20Bag&source_page=%2Fresources%2Fluxury-paper-bag-size-gsm-guide%2F";
const manufacturableSizes = [
  [26, 13, 33],
  [20, 10, 33],
  [30, 10, 40],
  [25, 20, 26],
  [40, 12, 26],
  [40, 12, 32],
];
const dimensionText = (dimensions: number[], multiplier: number, digits = 0) =>
  dimensions.map(value => (value * multiplier).toFixed(digits)).join(" × ");

const sizeExamples = [
  {
    category: "Small boutique bag",
    range: "Approx. 120 × 60 × 160 mm to 180 × 80 × 220 mm",
    use: "Jewelry boxes, perfume, cosmetics and small accessories",
  },
  {
    category: "Medium retail bag",
    range: "Approx. 200 × 100 × 250 mm to 280 × 120 × 320 mm",
    use: "Skincare sets, candles, scarves and gift boxes",
  },
  {
    category: "Large fashion bag",
    range: "Approx. 320 × 110 × 400 mm to 450 × 150 × 400 mm",
    use: "Apparel, shoe boxes, handbags and multi-item purchases",
  },
];

const gsmTable = [
  {
    gsm: "Around 210 GSM",
    direction: "Lighter premium construction",
    suitable: "Smaller bags and lighter products where the selected paper has enough stiffness",
  },
  {
    gsm: "Around 250 GSM",
    direction: "Balanced premium retail construction",
    suitable: "Many cosmetics, gifting and general luxury shopping bag applications",
  },
  {
    gsm: "Around 300+ GSM",
    direction: "Heavier / more structured construction",
    suitable: "Larger bags, heavier products or projects requiring more body",
  },
];

const fitChecklist = [
  "Measure the finished product or rigid gift box, not only the product itself.",
  "Allow practical clearance for insertion and removal.",
  "Check gusset depth against the widest packed dimension.",
  "Consider handle drop and how the bag will be carried.",
  "Review top-turnover reinforcement for heavier contents.",
  "Review bottom-board reinforcement when product weight requires it.",
  "Confirm master carton size if freight volume matters.",
];

const faqs = [
  {
    q: "What are the available paper shopping bag sizes?",
    a: "SORIVA can manufacture the following reference sizes: 26 × 13 × 33, 20 × 10 × 33, 30 × 10 × 40, 25 × 20 × 26, 40 × 12 × 26 and 40 × 12 × 32 cm, all width × gusset × bag body height. These are made-to-order references rather than stock inventory. Confirm the finished specification and loaded fit on a physical sample.",
  },
  {
    q: "How do I measure a paper shopping bag?",
    a: "Open the bag and record front-panel width, front-to-back gusset depth and bag body height from base to top edge. Exclude handles from body height and record handle drop separately. State W × G × H, units and the measurement basis in the quotation and sample specification.",
  },
  {
    q: "Are the dimensions in the size chart internal or external?",
    a: "The chart lists reference bag dimensions, not guaranteed usable interior dimensions. Folds, top turnover, bottom boards and handle attachments can reduce usable space. Agree the measurement basis and tolerances with the supplier and verify your product in a loaded sample.",
  },
  {
    q: "What paper bag size fits a T-shirt, hoodie or shoe box?",
    a: "There is no universal fit by product name. Measure the folded garment or the exterior of its retail box, including tissue and other packing. Compare width, depth and height with the bag, allow space for insertion and removal, and approve fit on a physical sample.",
  },
  {
    q: "What GSM is best for a luxury paper bag?",
    a: "There is no single best GSM. Paper type, bag dimensions, product weight, reinforcement and desired stiffness all matter. Many premium projects review roughly 210–300+ GSM as a starting range.",
  },
  {
    q: "Is 300 GSM always better than 250 GSM?",
    a: "No. A higher GSM can add structure, but it may also increase stiffness, cost and folding requirements. The right choice depends on the bag size, paper stock and intended load.",
  },
  {
    q: "How much bigger should a paper bag be than the gift box?",
    a: "The bag should provide enough width, depth and height for comfortable insertion and removal without looking oversized. The clearance should be confirmed from the actual box dimensions and prototype.",
  },
  {
    q: "What is gusset depth?",
    a: "Gusset depth is the side or bottom depth that allows the bag to open and hold a three-dimensional product or box. It is critical when carrying rigid gift boxes or footwear boxes.",
  },
  {
    q: "Do larger paper bags need reinforcement?",
    a: "Often yes. Larger or heavier loads may require stronger top turn-overs, bottom boards, suitable handle attachments and appropriate paper stiffness.",
  },
  {
    q: "Can SORIVA make custom paper bag dimensions?",
    a: "Yes. Width, gusset depth and bag body height can be customized around the product, retail box or gift set. Confirm the dimensions, measurement basis, units and tolerances during sampling.",
  },
  {
    q: "What should I send for a size recommendation?",
    a: "Send the finished product or gift-box dimensions, approximate weight, quantity, preferred paper, handle style and any size references.",
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
        { "@type": "ListItem", position: 3, name: "Luxury Paper Bag Size & GSM Guide", item: PAGE_URL },
      ],
    },
    {
      "@type": "Article",
      headline: "Paper Bag Size Chart & GSM Guide",
      dateModified: "2026-11-18",
      image: "https://www.sorivapackaging.com/img/soriva-paper-bag-size-guide.png",
      description:
        "A practical guide to choosing paper bag dimensions, gusset depth, paper weight and reinforcement for premium retail packaging.",
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
            <a href="/">Home</a> / <a href="/resources/">Resources</a> / Paper Bag Size &amp; GSM
          </p>
          <div className="mrb-hero-copy" style={{ maxWidth: 900 }}>
            <span className="mrb-eyebrow">PAPER BAG ENGINEERING GUIDE</span>
            <h1>Paper Bag Size Chart &amp; GSM Guide</h1>
            <p className="mrb-lead">
              How to choose bag dimensions, gusset depth, paper weight and reinforcement for cosmetics, jewelry, fashion, footwear and premium gift boxes.
            </p>
            <p>Reviewed November 18, 2026 · SORIVA Packaging</p>
            <div className="mrb-tags">
              <span>Paper Bag Size Guide</span>
              <span>Paper Bag GSM</span>
              <span>Thick Paper Bags</span>
              <span>Luxury Retail Packaging</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mrb-section">
        <div className="container mrb-article">
          <article className="mrb-article-main">
            <p>
              Buyers often focus on paper GSM first, but bag performance starts with dimensions. A correctly proportioned bag with suitable reinforcement can perform better than an oversized bag made from heavier paper.
            </p>

            <div className="mrb-note">
              <b>Buyer takeaway:</b> size the bag around the finished product or gift box first, then select GSM, handles and reinforcement around the actual load.
            </div>

            <h2>Paper Shopping Bag Size Chart: cm, mm &amp; Inches</h2>
            <p>These six reference sizes are confirmed manufacturable by SORIVA. They are made-to-order options, not a list of stocked bags or universal industry standards. All dimensions are <strong>width × gusset × bag body height (W × G × H)</strong>; handles are excluded.</p>
            <div className="mrb-table-wrap">
              <table className="mrb-table">
                <caption>Manufacturable reference sizes — W × G × H</caption>
                <thead><tr><th scope="col">Centimeters (cm)</th><th scope="col">Millimeters (mm)</th><th scope="col">Inches (approx.)</th></tr></thead>
                <tbody>{manufacturableSizes.map(dimensions => <tr key={dimensions.join("-")}>
                  <th scope="row">{dimensionText(dimensions, 1)}</th>
                  <td>{dimensionText(dimensions, 10)}</td>
                  <td>{dimensionText(dimensions, 1 / 2.54, 2)}</td>
                </tr>)}</tbody>
              </table>
            </div>
            <p>One inch equals 25.4 mm. Inch values above are rounded references. Use one controlling unit on the approved specification. Agree whether dimensions describe the bag body or usable interior, together with measurement tolerances; folds and reinforcement can reduce usable space.</p>
            <figure style={{ margin: "28px 0" }}>
              <a href="/img/soriva-paper-bag-size-guide.png" target="_blank" rel="noopener noreferrer" aria-label="Open the paper bag size chart at full resolution">
                <Image src="/img/soriva-paper-bag-size-guide.png" alt="SORIVA paper bag chart: six manufacturable sizes, width across the front, gusset front to back, and body height excluding handles" width={1122} height={1402} sizes="(max-width: 980px) 100vw, 760px" style={{ width: "100%", maxWidth: 900, height: "auto", borderRadius: 12 }} />
              </a>
              <figcaption>Open the chart for a larger view. Illustrations are not to scale. Confirm product fit, paper, handles and reinforcement on a physical sample.</figcaption>
            </figure>

            <h2>How to Measure Width, Gusset &amp; Height</h2>
            <ol>
              <li><strong>Width (W):</strong> measure the front panel from side to side with the bag opened.</li>
              <li><strong>Gusset (G):</strong> measure the front-to-back depth of the opened bag. This is the space that must accommodate the product or box depth.</li>
              <li><strong>Height (H):</strong> measure from the bag base to the top edge of the body. Measure handle drop separately.</li>
              <li><strong>Usable space:</strong> review the interior after top turnover, base reinforcement and handle attachment are included. State the measurement basis and tolerances on the sample approval.</li>
            </ol>

            <h2>Choosing a Bag for Clothing, Accessories or Shoe Boxes</h2>
            <p>For T-shirts and knitwear, measure the garment in its actual folded form, including tissue. For footwear, measure the closed shoe box exterior. For accessories, include any gift box, pouch or protective wrap. Product names alone do not establish fit or carrying strength.</p>
            <div className="mrb-note"><strong>Illustrative fit review:</strong> a packed product measuring 230 × 100 × 300 mm could be reviewed against the 260 × 130 × 330 mm reference bag. The nominal differences are 30 mm on each axis. This arithmetic is not a universal clearance rule or a fit guarantee: usable space, loading angle, top turnover and handle attachment still need checking with the actual product.</div>
            <p>Compare <a href="/solutions/luxury-paper-bags-for-fashion/">paper shopping bags for fashion brands</a> or send your packed product dimensions for a recommendation. If none of the six reference sizes suit the load, ask about a custom size rather than forcing the product into a nominal category.</p>

            <h2>Other Illustrative Luxury Paper Bag Size Ranges</h2>
            <p>The broader ranges below are planning examples for comparing formats, not an additional confirmed stock or production list. Final dimensions and feasibility require a project quotation and sample.</p>
            <div className="mrb-table-wrap">
              <table className="mrb-table">
                <thead>
                  <tr><th>Category</th><th>Typical Range</th><th>Common Use</th></tr>
                </thead>
                <tbody>
                  {sizeExamples.map((r) => (
                    <tr key={r.category}>
                      <td><b>{r.category}</b></td>
                      <td>{r.range}</td>
                      <td>{r.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>How to Choose the Right GSM</h2>
            <div className="mrb-table-wrap">
              <table className="mrb-table">
                <thead>
                  <tr><th>Paper Weight</th><th>Direction</th><th>Suitable For</th></tr>
                </thead>
                <tbody>
                  {gsmTable.map((r) => (
                    <tr key={r.gsm}>
                      <td><b>{r.gsm}</b></td>
                      <td>{r.direction}</td>
                      <td>{r.suitable}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Why Higher GSM Is Not Always Better</h2>
            <p>
              GSM measures paper mass per square meter, not finished bag strength by itself. Fiber composition, coating, fold design, handle attachment, top reinforcement and bottom support also affect the final result.
            </p>

            <h2>Gusset Depth Matters More Than Many Buyers Expect</h2>
            <p>
              The side gusset controls how much three-dimensional depth the bag can accept. This is especially important when the bag needs to carry a rigid gift box, shoe box, candle set or skincare collection.
            </p>

            <h2>Size the Bag Around the Finished Box</h2>
            <p>
              If a paper bag is being paired with a rigid box, use the finished outer dimensions of the box as the starting point. Then add practical clearance for insertion and removal.
            </p>
            <p>
              For coordinated programs, see our <a href="/resources/matching-paper-bags-gift-boxes-brand-packaging-guide/">matching paper bags and gift boxes guide</a>.
            </p>

            <h2>Paper Bag Fit Checklist</h2>
            <ul>
              {fitChecklist.map((item) => <li key={item}>{item}</li>)}
            </ul>

            <h2>When to Use Thicker Paper</h2>
            <p>
              Thicker paper may be useful for larger bag formats, heavier merchandise or projects that need more body. But paper weight should be selected together with structure and reinforcement rather than treated as a stand-alone quality indicator.
            </p>

            <h2>Beauty vs Fashion Bag Sizing</h2>
            <p>
              Beauty and skincare bags are often more compact and vertically controlled, while fashion bags may need wider formats and deeper gussets for apparel or footwear. See our <a href="/resources/luxury-paper-bags-beauty-cosmetic-brands/">beauty paper bag guide</a> and <a href="/resources/custom-boutique-shopping-bags-fashion-brands/">fashion boutique bag guide</a>.
            </p>

            <h2>What to Send for a Size &amp; GSM Recommendation</h2>
            <div className="mrb-note" style={{ background: "#faf8f4", borderLeftColor: "#c79a51" }}>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                <li>Finished product or gift-box dimensions</li>
                <li>Approximate product weight</li>
                <li>Target quantity</li>
                <li>Preferred paper surface</li>
                <li>Handle style</li>
                <li>Branding / finishing requirements</li>
                <li>Shipping destination</li>
              </ul>
            </div>

            <h2>Explore Custom Luxury Paper Bags</h2>
            <p>
              SORIVA manufactures <a href="/products/luxury-paper-bags/">custom luxury paper bags</a> with tailored dimensions, specialty papers, ribbon or rope handles, logo printing and premium finishing.
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
            <a href="/products/luxury-paper-bags/">Custom Luxury Paper Bags Manufacturer</a>
            <a href="/resources/matching-paper-bags-gift-boxes-brand-packaging-guide/">Matching Bags &amp; Boxes</a>
            <a href="/resources/luxury-paper-bags-beauty-cosmetic-brands/">Beauty Paper Bags</a>
            <a href="/resources/custom-boutique-shopping-bags-fashion-brands/">Fashion Shopping Bags</a>
            <a href="/resources/textured-specialty-paper-bags-luxury-brands/">Textured Paper Bags</a>
            <a href={RFQ_URL}>Request a Quote</a>
          </aside>
        </div>
      </section>

      <section className="mrb-section dark">
        <div className="container">
          <div className="mrb-head center">
            <span className="mrb-eyebrow">CUSTOM SIZING</span>
            <h2>Get a Paper Bag Size &amp; Material Recommendation</h2>
            <p>
              Send your product or gift-box dimensions, weight, quantity and handle preference for a tailored recommendation and quotation.
            </p>
          </div>
          <div className="mrb-hero-actions" style={{ justifyContent: "center", marginTop: 28 }}>
            <a href={RFQ_URL} className="btn gold">Request Paper Bag Sizing & Quote</a>
            <a href={waLink(WA_MESSAGES.guide)} target="_blank" rel="noopener" className="btn-wa">
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
