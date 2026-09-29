/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import ProductBuyerGuides from "../../components/ProductBuyerGuides";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL = "https://www.sorivapackaging.com/solutions/luxury-paper-bags-for-fashion/";

export const metadata: Metadata = {
  title: {
    absolute: "Luxury Paper Bags for Fashion Brands | Custom Boutique Shopping Bags | SORIVA Packaging",
  },
  description:
    "Custom luxury paper bags for fashion, designer apparel and boutique stores. Heavyweight paper, reinforced handles, custom proportions, hot stamping and global export.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Luxury Paper Bags for Fashion Brands | Custom Boutique Shopping Bags | SORIVA Packaging",
    description:
      "Custom luxury paper bags for fashion, designer apparel and boutique stores. Heavyweight paper, reinforced handles, custom proportions, hot stamping and global export.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
    images: [
      {
        url: "https://www.sorivapackaging.com/img/fashion.webp",
        width: 1200,
        height: 900,
        alt: "Custom luxury paper bags for fashion and apparel brands",
      },
    ],
  },
};

const fashionUseCases = [
  {
    title: "Designer Apparel & Knitwear",
    desc: "Heavyweight horizontal carrier bags engineered with wide gussets to carry folded garments, blazers and winter outerwear without creasing.",
  },
  {
    title: "Luxury Scarves & Boutique Accessories",
    desc: "Medium landscape or square-format shopping bags paired with silky ribbon ties for refined retail and gift presentation.",
  },
  {
    title: "Footwear & Shoe Box Carriers",
    desc: "High-load reinforced paper bags engineered with thick bottom greyboard inserts to carry bulky shoe boxes securely.",
  },
  {
    title: "Boutique Retail & Seasonal Launches",
    desc: "Bespoke branded shopping bags with custom pattern linings, Pantone color floods and metallic hot foil embellishments.",
  },
];

const shapesAndProportions = [
  {
    shape: "Landscape Wide Carrier",
    size: "420 × 120 × 350 mm / 380 × 140 × 300 mm",
    application: "Clothing collections, folded apparel, shoes and luxury handbags.",
  },
  {
    shape: "Square Boutique Shopper",
    size: "300 × 120 × 300 mm / 250 × 100 × 250 mm",
    application: "Accessories, scarves, eyewear, boutique jewelry and seasonal gift items.",
  },
  {
    shape: "Vertical Slender Bag",
    size: "200 × 100 × 280 mm / 160 × 80 × 240 mm",
    application: "Fashion accessories, belts, ties, fragrances and small luxury leather goods.",
  },
  {
    shape: "Oversized Department Store Bag",
    size: "500 × 150 × 450 mm (Custom Engineered)",
    application: "Winter coats, formal suits, multi-item boutique purchases and VIP shopping.",
  },
];

const materials = [
  {
    name: "Coated Art Paper (250–300+ GSM)",
    desc: "Exceptional surface smoothness supporting razor-sharp offset printing, rich dark flood coats and anti-scratch matte lamination.",
  },
  {
    name: "Heavyweight White Cardstock",
    desc: "High tensile rigidity and clean score lines ensuring the bag maintains a crisp upright posture throughout retail use.",
  },
  {
    name: "Natural & Bleached Kraft Paper",
    desc: "Eco-conscious raw organic paper offering high tear resistance for contemporary sustainable fashion labels.",
  },
  {
    name: "Specialty Embossed & Textured Sheets",
    desc: "Tactile linen, cross-hatch or laid textures providing an unmistakably upscale boutique aesthetic.",
  },
];

const handles = [
  {
    title: "Thick Braided Cotton Rope",
    desc: "Ergonomic 8mm–12mm natural cotton cords capped with metal or clear plastic aglets for superior load-bearing comfort.",
  },
  {
    title: "Wide Grosgrain / Satin Ribbon",
    desc: "25mm–38mm textured grosgrain or lustrous satin ribbons threaded through reinforced eyelets or glued into turnover folds.",
  },
  {
    title: "Twisted Kraft Paper Cords",
    desc: "High-strength twisted paper handles glued to the interior turnover for modern, 100% recyclable boutique shoppers.",
  },
  {
    title: "Die-Cut Reinforced Handles",
    desc: "Clean integrated oval cutout handles reinforced with internal greyboard for a sleek, contemporary carry style.",
  },
];

const samples = [
  {
    img: "/img/sample-paperbag-coordinated-floral.jpg",
    title: "Patterned Boutique Carrier Bag",
    desc: "Full-bleed botanical offset printing paired with gold foil typography and matching ribbon handles.",
  },
  {
    img: "/img/showroom-wide-display.png",
    title: "Showroom Apparel Bag Assortment",
    desc: "Wide range of fashion shopping bag proportions, handle materials and structured bases displayed in our showroom.",
  },
  {
    img: "/img/sample-paperbag-ribbon-minimal.jpg",
    title: "Minimal Boutique Shopper",
    desc: "Minimalist fashion retail shopping bag with soft-touch lamination and embedded ribbon closure.",
  },
];

const faqs = [
  {
    q: "How should fashion bag proportions be selected?",
    a: "Apparel, shoes and accessories require different widths, depths, gussets and handle drops, so the purchase mix should be supplied.",
  },
  {
    q: "What is the MOQ for a custom fashion paper bag?",
    a: "Selected custom projects can start from 100 pcs, depending on paper, size, handles and finishing.",
  },
  {
    q: "Can I request a prototype?",
    a: "A 1 pc prototype is available for selected projects to review proportions, handles, artwork and color.",
  },
  {
    q: "What is the lead time?",
    a: "Lead time depends on design complexity, quantity, materials and finishing requirements.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sorivapackaging.com/" },
        { "@type": "ListItem", position: 2, name: "Solutions", item: "https://www.sorivapackaging.com/custom-packaging/" },
        { "@type": "ListItem", position: 3, name: "Fashion Paper Bags", item: PAGE_URL },
      ],
    },
    {
      "@type": "Service",
      name: "Custom Luxury Paper Bags for Fashion Brands",
      description:
        "OEM/ODM custom luxury paper shopping bag manufacturing for fashion, apparel, footwear and boutique stores.",
      provider: { "@type": "Organization", name: "SORIVA Packaging", url: "https://www.sorivapackaging.com/" },
      url: PAGE_URL,
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

export default function FashionPaperBagsSolution() {
  return (
    <main className="mrb-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero */}
      <section className="mrb-hero">
        <div className="container">
          <nav className="mrb-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a> / <a href="/custom-packaging/">Solutions</a> / Luxury Paper Bags for Fashion
          </nav>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">FASHION &amp; BOUTIQUE PACKAGING</span>
              <h1>Custom Luxury Paper Bags for Fashion Brands</h1>
              <p className="mrb-lead">
                Transform your boutique shopping experience with custom luxury paper bags.
                Engineered with heavyweight paper stocks (250–300+ GSM), reinforced top/bottom boards,
                ergonomic handles and metallic foil stamping for designer apparel and accessories.
              </p>
              <div className="mrb-tags">
                <span>MOQ From 100 pcs</span>
                <span>Heavyweight 250–300+ GSM</span>
                <span>Wide Landscape Formats</span>
                <span>Thick Cotton Rope &amp; Ribbon</span>
                <span>Anti-Scratch Matte Barrier</span>
              </div>
              <div className="mrb-hero-actions">
                <a href="/rfq/" className="btn gold">
                  Request Packaging Quote
                </a>
                <a
                  href={waLink(WA_MESSAGES.paperBags)}
                  target="_blank"
                  rel="noopener"
                  className="btn-wa"
                >
                  <WhatsAppIcon /> Chat on WhatsApp
                </a>
                <a href="/industries/fashion-packaging/" className="btn ghost">
                  Fashion Packaging Hub
                </a>
              </div>
            </div>
            <div className="mrb-hero-media">
              <img
                src="/img/fashion.webp"
                alt="Custom luxury paper bags for fashion and apparel brands"
                width="1200"
                height="900"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mrb-section soft p2-differentiation">
        <div className="container">
          <div className="mrb-head">
            <span className="eyebrow dark">FASHION CARRY DECISION</span>
            <h2>Buyer Decision Notes</h2>
            <p>Fashion paper bags are selected around boutique proportions and the carrying experience after a purchase. The buyer decision is the relationship between apparel or accessory dimensions, bag width and depth, handle drop and the way garments or shoe boxes sit inside. A landscape carrier may suit folded apparel, while a compact square or vertical format may work better for accessories and seasonal gifting. Paper surface, pattern placement and foil scale should be reviewed across gussets, front panels and handles so the bag reads consistently in a retail environment. If the program includes matching boxes or tissue, those items should be considered before the bag dieline is locked. This page therefore owns fashion retail proportions, handles and carry experience rather than the beauty or coordinated-suite intent of the neighboring solutions.</p>
          </div>
        </div>
      </section>


      {/* Use Cases */}
      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">RETAIL APPLICATIONS</span>
            <h2>Fashion &amp; Boutique Use Cases</h2>
            <p>From ready-to-wear clothing to luxury scarves and designer footwear.</p>
          </div>
          <div className="mrb-features">
            {fashionUseCases.map((u) => (
              <article className="mrb-feature" key={u.title}>
                <h3>{u.title}</h3>
                <p>{u.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Shapes & Sizes */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">PROPORTIONS &amp; SIZES</span>
            <h2>Standard &amp; Custom Sizing for Apparel</h2>
            <p>Select tailored dimensions engineered around your garment boxes and merchandise.</p>
          </div>
          <div className="mrb-table-wrap">
            <table className="mrb-table">
              <thead>
                <tr>
                  <th>Format / Silhouette</th>
                  <th>Typical Dimensions (L × W × H)</th>
                  <th>Apparel Applications</th>
                </tr>
              </thead>
              <tbody>
                {shapesAndProportions.map((row) => (
                  <tr key={row.shape}>
                    <td><strong>{row.shape}</strong></td>
                    <td>{row.size}</td>
                    <td>{row.application}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mrb-note" style={{ marginTop: 20 }}>
            <b>Buyer Tip:</b> For bulky garments or shoeboxes, we recommend expanding the bottom gusset
            width (Width) to 120–160 mm to ensure stable flat bottom resting.
          </div>
        </div>
      </section>

      {/* Materials & Handles */}
      <section className="mrb-section">
        <div className="container mrb-spec-wrap">
          <div>
            <div className="mrb-head">
              <span className="eyebrow dark">HEAVYWEIGHT PAPERS</span>
              <h2>Paper Materials for Fashion Bags</h2>
            </div>
            <p style={{ color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
              Fashion carrier bags require high-caliper papers that resist tearing and maintain clean folds:
            </p>
            <div style={{ display: "grid", gap: 14 }}>
              {materials.map((m) => (
                <div key={m.name} style={{ background: "#fcfbfa", padding: "14px 18px", borderRadius: 8, border: "1px solid #e7e2d9" }}>
                  <b style={{ color: "#111", display: "block", marginBottom: 4 }}>{m.name}</b>
                  <span style={{ fontSize: 13, color: "#555" }}>{m.desc}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mrb-structure">
            <div className="mrb-head">
              <span className="eyebrow dark">ERGONOMIC HANDLES</span>
              <h2>Handle Options for Apparel Carriers</h2>
            </div>
            <p style={{ color: "#444", lineHeight: 1.7, marginBottom: 16 }}>
              Select comfortable, heavy-duty handle solutions for retail shoppers:
            </p>
            <div style={{ display: "grid", gap: 14 }}>
              {handles.map((h) => (
                <div key={h.title} style={{ background: "#fcfbfa", padding: "14px 18px", borderRadius: 8, border: "1px solid #e7e2d9" }}>
                  <b style={{ color: "var(--color-gold, #c79a51)", display: "block", marginBottom: 4 }}>{h.title}</b>
                  <span style={{ fontSize: 13, color: "#555" }}>{h.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Real Sample Gallery */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">SAMPLE PROOF</span>
            <h2>Real Fashion Paper Bag Samples</h2>
            <p>Explore real packaging samples produced for luxury retail and fashion brands.</p>
          </div>
          <div className="mrb-apps" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            {samples.map((s) => (
              <article className="mrb-app" key={s.title} style={{ background: "#fff", border: "1px solid #e7e2d9", borderRadius: 10, overflow: "hidden" }}>
                <img src={s.img} alt={s.title} loading="lazy" style={{ width: "100%", height: 260, objectFit: "cover" }} />
                <div style={{ padding: "16px 20px" }}>
                  <b style={{ fontSize: 17, color: "#111", display: "block", marginBottom: 6 }}>{s.title}</b>
                  <span style={{ fontSize: 13, color: "#555", lineHeight: 1.6 }}>{s.desc}</span>
                </div>
              </article>
            ))}
          </div>
          <p style={{ fontSize: 12, color: "#888", textAlign: "center", marginTop: 16 }}>
            <em>Sample displays shown for packaging capability reference.</em>
          </p>
        </div>
      </section>

      {/* Coordinated Packaging Integration */}
      <section className="mrb-section">
        <div className="container mrb-spec-wrap">
          <div>
            <div className="mrb-head">
              <span className="eyebrow dark">COORDINATED APPAREL PACKAGING</span>
              <h2>Pair with Foldable Magnetic Gift Boxes</h2>
            </div>
            <p style={{ lineHeight: 1.7, color: "#444", marginBottom: 16 }}>
              Deliver a seamless brand experience by pairing your luxury shopping bags with
              foldable magnetic gift boxes and custom branded tissue paper:
            </p>
            <ul style={{ lineHeight: 1.8, color: "#444", paddingLeft: 20, marginBottom: 20 }}>
              <li><strong>Foldable Magnetic Boxes:</strong> Suitable foldable structures can ship flat and may improve packing efficiency for selected projects.</li>
              <li><strong>Two-Piece Apparel Boxes:</strong> Classic lid-and-base presentation for sweaters and shirts.</li>
              <li><strong>Custom Tissue Paper:</strong> Branded wrap paper for a sophisticated retail unboxing.</li>
            </ul>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="/products/foldable-magnetic-rigid-boxes/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                Explore Related Box Structures →
              </a>
              <a href="/products/two-piece-rigid-boxes/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                Two-Piece Rigid Boxes →
              </a>
              <a href="/industries/fashion-packaging/" style={{ color: "var(--color-gold, #c79a51)", fontWeight: 700, fontSize: 13 }}>
                View Fashion Packaging Solutions →
              </a>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <img
              src="/img/showroom-giftbox-paperbag-variety.png"
              alt="Matching fashion paper bag and rigid gift box set"
              loading="lazy"
              style={{ width: "100%", borderRadius: 10, border: "1px solid #e7e2d9", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about custom luxury paper bags for fashion and boutique brands.</p>
          </div>
          <div className="mrb-faq">
            {faqs.map((f) => (
              <div className="mrb-faq-item" key={f.q}>
                <b>{f.q}</b>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <ProductBuyerGuides
        title="Fashion Packaging Guides & Resources"
        subtitle="Practical buyer guides on paper materials, inventory planning and freight reduction."
        guides={[
          {
            tag: "Inventory Planning",
            title: "How to Plan Packaging Inventory for Seasonal or Launch Orders",
            desc: "Learn lead time buffers and reorder planning for holiday campaigns and fashion week launches.",
            href: "/resources/how-to-plan-packaging-inventory-seasonal-launch-orders/",
          },
          {
            tag: "Freight Optimization",
            title: "How to Reduce Custom Packaging Shipping Cost",
            desc: "Actionable ways to lower international freight costs via flat-packed carton optimization.",
            href: "/resources/how-to-reduce-custom-packaging-shipping-cost/",
          },
          {
            tag: "Paper Materials",
            title: "Luxury Packaging Paper Types: Art Paper vs Specialty Paper vs Kraft",
            desc: "Compare coated art paper, kraft paper and textured specialty sheets for fashion shopping bags.",
            href: "/resources/luxury-packaging-paper-types-art-paper-vs-specialty-paper-vs-kraft/",
          },
        ]}
      />

      {/* Final Quote & Contact */}
      <section className="mrb-quote" id="quote">
        <div className="container mrb-quote-grid">
          <div>
            <span className="mrb-eyebrow">START A PROJECT</span>
            <h2>Develop Your Custom Fashion Paper Bags</h2>
            <p style={{ color: "#c5c5c5", lineHeight: 1.7, margin: "12px 0 16px" }}>
              Send us your target apparel bag dimensions, quantity, artwork files and handle preferences.
              Our packaging specialists will provide dielines, material recommendations and quotation.
            </p>
            <div className="mrb-contact">
              <div className="mrb-contact-note">
                <b>WhatsApp</b>
                <a href={waLink(WA_MESSAGES.paperBags)} target="_blank" rel="noopener">
                  +86 159 1388 1634
                </a>
              </div>
              <div className="mrb-contact-note">
                <b>Email</b>
                <a href="mailto:AMY@XINGYUE.STORE">AMY@XINGYUE.STORE</a>
              </div>
            </div>
            <a className="mrb-back" href="/industries/fashion-packaging/">
              Back to Fashion Packaging Hub →
            </a>
          </div>
          <QuoteForm />
        </div>
      </section>
    </main>
  );
}
