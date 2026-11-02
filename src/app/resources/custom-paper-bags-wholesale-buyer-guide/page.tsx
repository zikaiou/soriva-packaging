import type { Metadata } from "next";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink, WA_MESSAGES } from "../../lib/whatsapp";
import "../../products/product-page.css";

const PAGE_URL = "https://www.sorivapackaging.com/resources/custom-paper-bags-wholesale-buyer-guide/";

export const metadata: Metadata = {
  title: "Custom Paper Bags Wholesale: Buyer & RFQ Guide | SORIVA",
  description: "A wholesale buyer guide to custom luxury paper bags: choose dimensions, GSM, handles, reinforcement, printing and packing before requesting a manufacturer quote.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    title: "Custom Paper Bags Wholesale: Buyer & RFQ Guide | SORIVA",
    description: "Plan custom paper shopping bags with the right paper, handles, reinforcement, branding and export carton specification.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
  },
};

const faqs = [
  ["What information is needed for a custom paper bag quote?", "Share the finished bag width, gusset and height, product or box dimensions, packed weight, quantity per size and color, paper preference, handle style, artwork, finishing and delivery destination."],
  ["Which GSM is best for luxury paper bags?", "There is no single best GSM. Paper type, bag dimensions, gusset, product weight, handle construction and reinforcement all affect performance. Use a paper weight range as a starting point and approve a physical sample for the intended load."],
  ["Can custom paper bags be ordered wholesale with a logo?", "Yes. Custom wholesale projects can be reviewed with CMYK or Pantone color, hot foil, embossing, debossing, spot UV and other suitable finishes based on the selected paper and artwork."],
  ["Which handle is strongest for a shopping bag?", "Handle performance depends on the handle material, attachment method, top-turnover reinforcement, bottom support and intended load. Confirm the complete construction and test a sample with a representative product weight."],
  ["Can paper bags be shipped flat?", "Many paper shopping bags can be packed flat, but the final carton plan depends on bag size, handle type, gusset, reinforcement and how the bags are nested. Ask for carton dimensions, quantity per carton and total CBM."],
  ["What is the MOQ for custom luxury paper bags?", "Selected SORIVA custom paper bag projects can start from 100 pieces. Final MOQ depends on size, paper, printing, handle, finishing and production setup; confirm the minimum for the exact specification."],
];

const checklist = [
  "Bag width × gusset × height, with units clearly stated",
  "Product or gift-box dimensions and approximate packed weight",
  "Quantity per size, color and artwork version",
  "Paper type, GSM preference, color and surface lamination",
  "Handle material, color, length and attachment style",
  "Top turnover, reinforcement and bottom-board requirements",
  "Logo artwork, print coverage and foil or embossing details",
  "Sample requirement and approval standard",
  "Destination country, required arrival date and shipping method",
  "Carton quantity, carton dimensions, gross weight and total CBM",
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sorivapackaging.com/" },
        { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.sorivapackaging.com/resources/" },
        { "@type": "ListItem", position: 3, name: "Custom Paper Bags Wholesale Buyer Guide", item: PAGE_URL },
      ],
    },
    {
      "@type": "Article",
      headline: "Custom Paper Bags Wholesale: Buyer & RFQ Guide",
      description: "A practical sourcing guide to specifying custom luxury paper bags for wholesale orders.",
      author: { "@type": "Organization", name: "SORIVA Packaging" },
      publisher: { "@type": "Organization", name: "SORIVA Packaging" },
      mainEntityOfPage: PAGE_URL,
    },
  ],
};

export default function CustomPaperBagsWholesaleGuide() {
  return (
    <main className="mrb-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="mrb-hero">
        <div className="container">
          <p className="mrb-breadcrumb"><a href="/">Home</a> / <a href="/resources/">Resources</a> / Paper Bag Wholesale Guide</p>
          <div className="mrb-hero-copy" style={{ maxWidth: 900 }}>
            <span className="mrb-eyebrow">WHOLESALE BUYER GUIDE</span>
            <h1>Custom Paper Bags Wholesale: How to Specify Luxury Bags for Your Brand</h1>
            <p className="mrb-lead">A practical sourcing checklist for retail, fashion, beauty, jewelry and gifting teams comparing custom paper bag manufacturers.</p>
            <div className="mrb-hero-actions" style={{ marginTop: 24 }}>
              <a href="/rfq/" className="btn gold">Request a Paper Bag Quote</a>
              <a href="/products/luxury-paper-bags/" className="btn ghost">Explore Luxury Paper Bags</a>
            </div>
          </div>
        </div>
      </section>

      <section className="mrb-section">
        <div className="container mrb-article">
          <main className="mrb-article-main">
            <p><strong>Quick answer:</strong> A wholesale paper bag quotation should be based on the finished bag dimensions, product weight, paper and GSM, handle construction, reinforcement, artwork, quantity and destination. Ask the supplier to confirm the sample standard and export carton details before approving production.</p>

            <h2>1. Start with the product and finished bag size</h2>
            <p>Measure the product or the gift box that will go inside the bag. Specify width × gusset × height and state the unit (mm, cm or inches). Allow practical clearance for inserting and removing the product, and make sure the gusset is wide enough for the packed item. For multiple product sizes, provide the quantity required for each bag size.</p>
            <p>Use the <a href="/resources/luxury-paper-bag-size-gsm-guide/">luxury paper bag size and GSM guide</a> to compare typical size ranges and the factors that influence paper selection.</p>

            <h2>2. Select paper by size, load and appearance</h2>
            <p>Coated art paper supports crisp printing and lamination; kraft paper creates a natural paper appearance; specialty textured stocks add tactile character. GSM is only one part of the specification. A larger bag or heavier product may need a different paper grade, a reinforced top turnover, a bottom board or a revised handle attachment.</p>
            <p>Review <a href="/resources/luxury-packaging-paper-types-art-paper-vs-specialty-paper-vs-kraft/">art paper vs specialty paper vs kraft</a> before choosing the final material. Ask the manufacturer to recommend a construction based on the actual packed weight rather than choosing GSM in isolation.</p>

            <h2>3. Choose handles and reinforcement as one system</h2>
            <p>Common options include cotton rope, satin or grosgrain ribbon, twisted paper cord and die-cut handles. The handle should match the bag's dimensions and intended load. Confirm how the handle ends are attached, whether the top edge is turned over or reinforced, and whether the base needs a supporting board.</p>
            <p>Do not judge carrying strength from the handle material alone. Request a physical sample and agree how it will be checked with a representative product weight. See the <a href="/resources/luxury-paper-bag-handles-reinforcement-guide/">paper bag handles and reinforcement guide</a>.</p>

            <h2>4. Prepare the artwork and finishing specification</h2>
            <p>Provide vector logo artwork when available, the desired logo position, print colors and any inside or outside print requirements. Hot foil stamping, embossing, debossing, spot UV and lamination should be reviewed against the chosen paper and design. Ask for a digital proof and approve the physical sample before mass production.</p>
            <p>For coordinated retail presentation, compare <a href="/resources/matching-paper-bags-gift-boxes-brand-packaging-guide/">matching paper bags and gift boxes</a> so the paper tone, logo size, foil color and handles remain consistent.</p>

            <h2>5. What to include in a wholesale paper bag RFQ</h2>
            <div className="mrb-note"><ul>{checklist.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <p>If you do not know the paper grade or handle type, send the product dimensions, reference images and intended packed weight. A manufacturer can review a suitable construction for sampling rather than assuming a specification.</p>

            <h2>6. Compare samples and shipping quotations</h2>
            <p>Check the sample's finished dimensions, gusset, bag opening, handle attachment, top and bottom reinforcement, print alignment, foil registration and surface finish. Test it with a representative load that reflects how the customer will use the bag. Agree the acceptance criteria before production.</p>
            <p>For shipping, request the packed quantity per carton, carton dimensions, gross weight and total CBM. Flat packing can help reduce transport volume, but bag shape, handle style and reinforcement affect how many pieces fit into each carton. Compare freight on the same packing assumptions and delivery terms.</p>

            <h2>7. Questions to ask a paper bag manufacturer</h2>
            <ul>
              <li>Is the quotation based on the finished bag size or the product size?</li>
              <li>What paper type and GSM are included?</li>
              <li>How are the handles attached and the top and base reinforced?</li>
              <li>What packed load should the sample be checked against?</li>
              <li>Are printing, foil, embossing and lamination included or quoted separately?</li>
              <li>What are the sample, production, carton and freight assumptions?</li>
            </ul>

            <h2>Frequently asked questions</h2>
            <div className="mrb-faq">{faqs.map(([q, a]) => <div className="mrb-faq-item" key={q}><b>{q}</b><p>{a}</p></div>)}</div>

            <h2>Related product and sourcing pages</h2>
            <ul>
              <li><a href="/products/luxury-paper-bags/">Custom luxury paper bags</a></li>
              <li><a href="/industries/jewelry-packaging/">Jewelry packaging and matching bags</a></li>
              <li><a href="/resources/luxury-paper-bag-size-gsm-guide/">Paper bag size and GSM guide</a></li>
              <li><a href="/resources/luxury-paper-bag-handles-reinforcement-guide/">Handles and reinforcement guide</a></li>
              <li><a href="/resources/how-to-prepare-custom-packaging-rfq/">Prepare a custom packaging RFQ</a></li>
            </ul>
          </main>
          <aside className="mrb-sidebar">
            <b>Request a quote</b>
            <p>Send bag dimensions, packed weight, quantity, paper, handles, artwork and destination for a specification-based quotation.</p>
            <a className="btn gold" href="/rfq/">Submit a Paper Bag RFQ</a>
            <hr />
            <b>Related buyer guides</b>
            <a href="/resources/luxury-paper-bag-size-gsm-guide/">Size &amp; GSM guide</a>
            <a href="/resources/luxury-paper-bag-handles-reinforcement-guide/">Handles &amp; reinforcement</a>
            <a href="/resources/matching-paper-bags-gift-boxes-brand-packaging-guide/">Matching bags &amp; boxes</a>
          </aside>
        </div>
      </section>

      <section className="mrb-section dark">
        <div className="container">
          <div className="mrb-head"><span className="mrb-eyebrow">START A PROJECT</span><h2>Request a Custom Paper Bag Wholesale Quote</h2><p>Share your bag size, product weight, paper and handle preferences, artwork, quantity and delivery destination. SORIVA can review the requirements and prepare a quotation for the specified construction.</p></div>
          <div className="mrb-hero-actions" style={{ justifyContent: "center", marginTop: 24 }}>
            <a href="/rfq/" className="btn gold">Request a Quote</a>
            <a href={waLink(WA_MESSAGES.guide)} target="_blank" rel="noopener noreferrer" className="btn-wa"><WhatsAppIcon /> Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    </main>
  );
}
