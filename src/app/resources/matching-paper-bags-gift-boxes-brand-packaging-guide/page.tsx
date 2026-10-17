/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL =
  "https://www.sorivapackaging.com/resources/matching-paper-bags-gift-boxes-brand-packaging-guide/";

export const metadata: Metadata = {
  title: "Matching Paper Bags & Gift Boxes: Brand Packaging Guide | SORIVA",
  description:
    "A buyer guide to matching custom paper bags and rigid gift boxes, covering size coordination, color, paper, foil, ribbon, MOQ, sampling and quotation requirements.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Matching Paper Bags & Gift Boxes: Brand Packaging Guide | SORIVA",
    description:
      "How premium brands can coordinate custom shopping bags and rigid gift boxes as one packaging system.",
  },
};

const coordinationAreas = [
  {
    area: "Bag-to-box fit",
    why: "The paper bag must accept the finished box comfortably without looking oversized.",
  },
  {
    area: "Color direction",
    why: "Different paper surfaces can change how the same printed color appears.",
  },
  {
    area: "Logo scale",
    why: "The same logo may need different proportions on a bag front panel and a rigid box lid.",
  },
  {
    area: "Foil / emboss",
    why: "Finishing behavior varies by substrate, pressure and surface texture.",
  },
  {
    area: "Ribbon / handle",
    why: "Handle and ribbon colors should support the same visual system as the box.",
  },
  {
    area: "Tissue / cards",
    why: "Accessories can connect the outer shopping bag with the inner presentation experience.",
  },
];

const pairings = [
  {
    pairing: "Magnetic rigid box + ribbon paper bag",
    goodFor: "Perfume, skincare, gifting and premium retail",
  },
  {
    pairing: "Drawer box + boutique shopping bag",
    goodFor: "Jewelry, accessories, cosmetics and compact luxury products",
  },
  {
    pairing: "Two-piece rigid box + branded carrier bag",
    goodFor: "Corporate gifts, candles, apparel and seasonal sets",
  },
  {
    pairing: "Foldable rigid box + flat-packed shopping bag",
    goodFor: "Projects where storage and freight volume are important",
  },
];

const quoteChecklist = [
  "Finished outer box dimensions",
  "Preferred bag dimensions or intended bag fit",
  "Target quantity for each component",
  "Paper type / texture preferences",
  "Brand color references",
  "Logo artwork",
  "Foil, embossing or print requirements",
  "Handle or ribbon style",
  "Tissue, stickers or cards if required",
  "Destination country / postcode",
];

const faqs = [
  {
    q: "Should the box or the paper bag be designed first?",
    a: "Usually the rigid box dimensions should be confirmed first because the bag needs enough internal width, depth and height to carry the finished box comfortably.",
  },
  {
    q: "Can the same Pantone color look different on a bag and a box?",
    a: "Yes. Different paper stocks, coatings and surface textures can change the visual result. Color should be reviewed on the actual selected materials where accurate coordination matters.",
  },
  {
    q: "Can the same foil be used on the box and the bag?",
    a: "Often yes, but the final appearance depends on the substrate and production method. Sampling helps confirm whether the two components look sufficiently coordinated.",
  },
  {
    q: "What is the MOQ for matching bag-and-box packaging?",
    a: "Selected SORIVA coordinated packaging projects can start from around 100 sets, depending on the box structure, paper, bag size, printing, finishing and accessories.",
  },
  {
    q: "Can I order one prototype set before mass production?",
    a: "A prototype set is available for selected projects so buyers can review bag fit, box structure, paper, color direction, handles and finishing before production.",
  },
  {
    q: "How much clearance should a paper bag have around the rigid box?",
    a: "The right clearance depends on bag paper, box size, handles and the desired carrying feel. It should be confirmed through dieline review and sampling rather than one fixed rule.",
  },
  {
    q: "Can beauty or fashion brands use the same coordinated packaging approach?",
    a: "Yes. The design logic is similar, but bag proportions, paper choices and carrying requirements should be adapted to the actual product category.",
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
        { "@type": "ListItem", position: 3, name: "Matching Paper Bags & Gift Boxes", item: PAGE_URL },
      ],
    },
    {
      "@type": "Article",
      headline: "Matching Paper Bags & Gift Boxes: How to Build a Coordinated Packaging System",
      description:
        "A practical buyer guide to coordinating custom shopping bags and rigid gift boxes for premium brands.",
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
            <a href="/">Home</a> / <a href="/resources/">Resources</a> / Matching Bags &amp; Boxes
          </p>
          <div className="mrb-hero-copy" style={{ maxWidth: 900 }}>
            <span className="mrb-eyebrow">COORDINATED PACKAGING GUIDE</span>
            <h1>Matching Paper Bags &amp; Gift Boxes: How to Build a Coordinated Packaging System</h1>
            <p className="mrb-lead">
              A practical guide for brands that want shopping bags, rigid gift boxes, ribbon, tissue and finishing to feel like one packaging system instead of separate components.
            </p>
            <div className="mrb-tags">
              <span>Matching Paper Bags</span>
              <span>Gift Box &amp; Bag Sets</span>
              <span>Coordinated Packaging</span>
              <span>Luxury Branded Packaging</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mrb-section">
        <div className="container mrb-article">
          <article className="mrb-article-main">
            <p>
              Matching a paper shopping bag with a rigid gift box is not just a color-matching exercise. The bag needs to fit the box correctly, the materials need to work together visually, and the logo, foil, handles and accessories should feel related across both formats.
            </p>

            <div className="mrb-note">
              <b>Buyer takeaway:</b> confirm the rigid box first, then engineer the paper bag around the finished outer dimensions and the intended retail or gifting experience.
            </div>

            <h2>Six Areas That Need to Be Coordinated</h2>
            <div className="mrb-table-wrap">
              <table className="mrb-table">
                <thead>
                  <tr><th>Area</th><th>Why It Matters</th></tr>
                </thead>
                <tbody>
                  {coordinationAreas.map((r) => (
                    <tr key={r.area}>
                      <td><b>{r.area}</b></td>
                      <td>{r.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Start with the Box Dimensions</h2>
            <p>
              The bag should be large enough for easy insertion and removal, but not so large that the gift box moves excessively or the presentation feels disconnected. Finished box dimensions are therefore the most useful starting point for bag engineering.
            </p>

            <h2>Popular Matching Box + Bag Combinations</h2>
            <div className="mrb-table-wrap">
              <table className="mrb-table">
                <thead>
                  <tr><th>Pairing</th><th>Often Used For</th></tr>
                </thead>
                <tbody>
                  {pairings.map((r) => (
                    <tr key={r.pairing}>
                      <td><b>{r.pairing}</b></td>
                      <td>{r.goodFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Why the Same Color Can Look Different</h2>
            <p>
              A paper bag and a rigid box may use different base papers, coatings and textures. Even when both are printed from the same brand color reference, the visual result can vary. When color consistency matters, review the color on the actual selected substrates rather than relying only on a digital file.
            </p>
            <p>
              See our <a href="/resources/pantone-vs-cmyk-custom-packaging/">Pantone vs CMYK guide</a> for a deeper explanation of color planning.
            </p>

            <h2>Foil, Embossing and Logo Scale</h2>
            <p>
              Foil and embossing may need separate production settings on a paper bag and on wrapped rigid board. It is also common for the logo to require a different scale on the bag front panel than on the box lid. The goal should be visual consistency, not mechanically forcing every dimension to be identical.
            </p>

            <h2>Handles, Ribbon and Tissue</h2>
            <p>
              Satin ribbon, grosgrain ribbon, cotton rope and tissue paper can bridge the visual gap between the outer carrier and the inner box. These accessories are especially useful when the bag and box use different paper surfaces but need to feel related.
            </p>

            <h2>Beauty, Fashion and Gift Applications</h2>
            <p>
              Beauty brands often prefer compact bag proportions with refined ribbon or rope handles, while fashion brands may need wider gussets and stronger carrying performance. Corporate gift programs may prioritize coordinated presentation across several components.
            </p>
            <p>
              For category-specific guidance, see our <a href="/resources/luxury-paper-bags-beauty-cosmetic-brands/">beauty paper bags guide</a> and <a href="/resources/custom-boutique-shopping-bags-fashion-brands/">fashion boutique bag guide</a>.
            </p>

            <h2>MOQ and Sampling</h2>
            <p>
              Selected SORIVA coordinated projects can start from around 100 sets, depending on the box structure, paper bag specification, printing, finishing and accessories. A prototype set is particularly useful because it lets you check the physical fit of the bag and box together.
            </p>

            <h2>What to Send for a Coordinated Packaging Quote</h2>
            <div className="mrb-note" style={{ background: "#faf8f4", borderLeftColor: "#c79a51" }}>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                {quoteChecklist.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>

            <h2>Explore Matching Paper Bags &amp; Gift Boxes</h2>
            <p>
              SORIVA develops <a href="/solutions/custom-paper-bags-with-matching-gift-boxes/">custom paper bags with matching gift boxes</a> across magnetic, drawer, two-piece and foldable rigid structures.
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
            <a href="/solutions/custom-paper-bags-with-matching-gift-boxes/">Matching Bags &amp; Gift Boxes</a>
            <a href="/products/luxury-paper-bags/">Custom Luxury Paper Bags Manufacturer</a>
            <a href="/resources/luxury-paper-bags-beauty-cosmetic-brands/">Beauty Paper Bags Guide</a>
            <a href="/resources/custom-boutique-shopping-bags-fashion-brands/">Fashion Shopping Bags Guide</a>
            <a href="/resources/textured-specialty-paper-bags-luxury-brands/">Textured Paper Bags Guide</a>
            <a href="/rfq/">Request a Quote</a>
          </aside>
        </div>
      </section>

      <section className="mrb-section dark">
        <div className="container">
          <div className="mrb-head center">
            <span className="mrb-eyebrow">COORDINATED PACKAGING</span>
            <h2>Plan a Matching Bag &amp; Gift Box Set</h2>
            <p>
              Send your finished box size, quantity, paper preferences, brand colors, handle style and artwork for a coordinated quotation.
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
