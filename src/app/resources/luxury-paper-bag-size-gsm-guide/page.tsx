/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL =
  "https://www.sorivapackaging.com/resources/luxury-paper-bag-size-gsm-guide/";

export const metadata: Metadata = {
  title: "Luxury Paper Bag Size & GSM Guide | SORIVA Packaging",
  description:
    "Choose the right luxury paper bag size, gusset depth and GSM for cosmetics, jewelry, fashion, footwear and gift boxes. Practical sizing, strength and quotation guidance.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Luxury Paper Bag Size & GSM Guide | SORIVA Packaging",
    description:
      "A buyer guide to custom paper bag dimensions, gusset depth, paper weight and reinforcement for premium retail packaging.",
  },
};

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
    a: "Yes. Length, width, height and gusset depth can be customized around the product, retail box or gift set.",
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
      headline: "Luxury Paper Bag Size & GSM Guide",
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
            <h1>Luxury Paper Bag Size &amp; GSM Guide</h1>
            <p className="mrb-lead">
              How to choose bag dimensions, gusset depth, paper weight and reinforcement for cosmetics, jewelry, fashion, footwear and premium gift boxes.
            </p>
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

            <h2>Typical Luxury Paper Bag Size Ranges</h2>
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
            <a href="/products/luxury-paper-bags/">Custom Luxury Paper Bags</a>
            <a href="/resources/matching-paper-bags-gift-boxes-brand-packaging-guide/">Matching Bags &amp; Boxes</a>
            <a href="/resources/luxury-paper-bags-beauty-cosmetic-brands/">Beauty Paper Bags</a>
            <a href="/resources/custom-boutique-shopping-bags-fashion-brands/">Fashion Shopping Bags</a>
            <a href="/resources/textured-specialty-paper-bags-luxury-brands/">Textured Paper Bags</a>
            <a href="/rfq/">Request a Quote</a>
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
