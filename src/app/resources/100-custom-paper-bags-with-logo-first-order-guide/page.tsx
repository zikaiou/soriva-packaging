/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import "../../products/product-page.css";

const SLUG = "100-custom-paper-bags-with-logo-first-order-guide";
const PAGE_URL = `https://www.sorivapackaging.com/resources/${SLUG}/`;
const TITLE = "Ordering 100 Custom Paper Bags with Logo: First-Order Guide";
const DESCRIPTION = "Plan a first order of 100 custom paper bags with your logo. Learn how to define sizes, confirm MOQ per design, compare quotes and allow for samples and shipping.";
const DATE = "2026-11-18";
const RFQ_URL = `/rfq/?product=Luxury%20Paper%20Bag&source_page=%2Fresources%2F${SLUG}%2F`;
export const metadata: Metadata = {
  title: { absolute: `${TITLE} | SORIVA` }, description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { type: "article", url: PAGE_URL, title: TITLE, description: DESCRIPTION, publishedTime: DATE, modifiedTime: DATE, siteName: "SORIVA Packaging",
    images: [{ url: "https://www.sorivapackaging.com/img/sample-paperbag-coordinated-floral.jpg", alt: "Printed paper shopping bag sample with a patterned design" }] },
};
const sources = [
  { href: "https://www.reddit.com/r/ClothingStartups/comments/1xr4tqn/lowmoq_eco_packaging_vendors_in_the_us_100200/", title: "Low-MOQ packaging at 100–200 units — r/ClothingStartups", note: "A clothing startup asks about small runs, branding, quality and lead times for its packaging components." },
  { href: "https://www.reddit.com/r/streetwearstartup/comments/171ghf0/", title: "Low MOQ Custom Packaging — r/streetwearstartup", note: "A new apparel brand describes difficulty finding a small custom packaging run." },
];
const faqs = [
  { q: "Can I order just 100 custom paper bags with a logo?", a: "SORIVA supports paper bag orders starting at 100 bags. Send the bag dimensions, quantity, artwork, materials and destination for confirmation of the specification and quotation. Check whether the minimum applies separately to each size and artwork version." },
  { q: "Does a 100-bag minimum mean no minimum per design?", a: "No. A quoted minimum can apply to a particular size, paper, color or artwork. Ask the supplier to confirm the quantity for each version in writing. Do not assume that a total of 100 bags can be split across several designs." },
  { q: "What is the price for 100 printed paper bags?", a: "There is no single price without a specification. Size, paper, handles, print coverage, finishing, sampling, setup and delivery affect the quotation. Compare quotes with the same specifications and included services." },
  { q: "What if I do not know the bag size or paper weight?", a: "Send dimensions and the approximate weight of the folded garments, accessories or shoe boxes the bag must carry. Add a reference image and ask for a proposed specification and sample. Do not select paper weight without considering bag size and construction." },
  { q: "Can a paper shopping bag replace an apparel shipping mailer?", a: "A retail shopping bag and a shipping mailer serve different purposes. A handled paper bag is intended for carrying purchases; it should not be treated as a parcel shipping package without a separately reviewed shipping specification." },
  { q: "How long does the first order take?", a: "SORIVA estimates approximately 5 days for sampling and 15–20 days for bulk production, subject to project confirmation. Allow separately for artwork preparation, feedback, approval and shipping. Confirm the dates and whether quoted days are working or calendar days." },
];
const specs = [
  ["Use", "Folded garments, accessories or shoe boxes; retail carry-out rather than parcel shipping"],
  ["Size", "Width × gusset × height, with units, or the product dimensions if undecided"],
  ["Quantity", "Total bags and quantity for each size and artwork version"],
  ["Appearance", "Logo file, brand colors, reference image and print sides"],
  ["Construction", "Paper preference, handles and approximate packed weight"],
  ["Timing", "Date bags must arrive in-store, delivery country and postcode"],
];
const data = { "@context": "https://schema.org", "@graph": [
  { "@type": "Article", headline: TITLE, description: DESCRIPTION, datePublished: DATE, dateModified: DATE, mainEntityOfPage: PAGE_URL,
    author: { "@type": "Organization", name: "SORIVA Packaging", url: "https://www.sorivapackaging.com/" },
    publisher: { "@type": "Organization", name: "SORIVA Packaging", url: "https://www.sorivapackaging.com/" },
    image: "https://www.sorivapackaging.com/img/sample-paperbag-coordinated-floral.jpg", citation: sources.map(s => s.href) },
  { "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sorivapackaging.com/" },
    { "@type": "ListItem", position: 2, name: "Resources", item: "https://www.sorivapackaging.com/resources/" },
    { "@type": "ListItem", position: 3, name: TITLE, item: PAGE_URL },
  ] },
  { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
] };

export default function FirstPaperBagOrderGuide() {
  return <main className="mrb-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
    <section className="mrb-hero"><div className="container">
      <nav className="mrb-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/resources/">Resources</a> / First Paper Bag Order</nav>
      <div className="mrb-hero-copy" style={{ maxWidth: 900 }}><span className="mrb-eyebrow">SMALL FASHION BRAND SOURCING</span>
        <h1>Ordering 100 Custom Paper Bags with Your Logo: A First-Order Guide</h1>
        <p className="mrb-lead">Turn a small boutique packaging order into a clear supplier brief, with a specification, approval plan and delivery budget.</p>
        <p>By SORIVA Packaging · Published <time dateTime={DATE}>November 18, 2026</time></p>
      </div>
    </div></section>
    <section className="mrb-section"><div className="container mrb-article"><article className="mrb-article-main">
      <div className="mrb-note"><strong>Start here:</strong> Define one usable bag specification, confirm the minimum for every design, request an itemized quotation and approve a sample. Treat delivery to your store as a separate planning step from factory production.</div>
      <p>A first order of custom paper bags can be a small financial commitment and still involve several decisions. A fashion pop-up may need one bag that fits its main garments; a boutique may need bags that also hold a shoe box. Ordering 100 bags makes those choices more visible because setup, sampling and freight are spread over a limited quantity.</p>
      <p>Small-run packaging questions appear in <a href={sources[0].href} target="_blank" rel="noopener noreferrer">clothing-startup discussions about 100–200 units</a> and in <a href={sources[1].href} target="_blank" rel="noopener noreferrer">streetwear founders’ questions about low minimum orders</a>. Those threads concern several packaging formats, including plastic garment bags and mailers. This guide applies the purchasing question to retail paper shopping bags; their materials and minimums should not be assumed to match other formats.</p>
      <h2>1. Choose the retail job before choosing the finish</h2>
      <p>List what the customer will carry: a folded shirt, knitwear, accessories, a shoe box or a combination. Measure the product in the condition in which it leaves the shop, including tissue or a gift box. Provide the packed weight as well as the dimensions.</p>
      <p>A handled shopping bag is a retail carrier. If your first collection is sold only online, decide whether you need retail bags at all, or whether the immediate requirement is protective inner packaging and an outer shipping package. Avoid spending your first-run budget on a format that does not serve the sales channel.</p>
      <p>For retail orders, compare <a href="/solutions/luxury-paper-bags-for-fashion/">paper shopping bags for fashion brands</a> using the loaded shape and carrying experience. An impressive empty bag may still be the wrong proportion for a garment box.</p>
      <h2>2. Confirm what “100 bags minimum” includes</h2>
      <p>Ask whether the minimum applies per size, paper, color, handle or artwork. A supplier accepting 100 bags of one specification may not accept the same total divided between several different versions. Put each requested version on its own line in the quotation request.</p>
      <p>For example, an order divided into 60 small bags and 40 large bags is not automatically one 100-bag production run. Nor are several seasonal logos necessarily covered by the same setup. Ask for an explicit answer before approving artwork or paying a deposit.</p>
      <p>SORIVA supports orders from 100 bags. The final specification and commercial terms still need confirmation for your project. “Low minimum” should not be presented as “no minimum.”</p>
      <h2>3. Write a specification that suppliers can quote</h2>
      <div className="mrb-table-wrap"><table className="mrb-table"><thead><tr><th>Brief item</th><th>What to provide</th></tr></thead><tbody>{specs.map(row => <tr key={row[0]}><td><strong>{row[0]}</strong></td><td>{row[1]}</td></tr>)}</tbody></table></div>
      <p>Use width × gusset × height for the bag and state whether your dimensions are in millimeters or inches. If you are unsure, send product dimensions and request a recommendation. Our <a href="/resources/luxury-paper-bag-size-gsm-guide/">paper bag size and GSM guide</a> explains why paper weight, dimensions and reinforcement should be considered together.</p>
      <p>Share the logo file and color references before asking for a final print specification. A photograph of a logo can communicate intent, but a supplier may need a production-ready vector file. Request the dieline and artwork requirements rather than placing a logo on a guessed outline.</p>
      <h2>4. Simplify the first run deliberately</h2>
      <p>Ask for a base quotation for one bag size, one artwork version and a clearly defined handle and print specification. Then request separately priced alternatives, such as a different paper or foil finish. This reveals what each change adds without assuming that the simplest-looking design is always the cheapest to produce.</p>
      <p>Choose a size around the products you expect to sell most often, while keeping a practical backup for unusual purchases. Avoid sizing every bag around the largest possible purchase if it makes ordinary orders awkward. Also avoid choosing a bag so tight that staff have to force the garment inside.</p>
      <p>If logo application is still undecided, compare <a href="/resources/custom-printed-paper-bags-vs-stamps-stickers/">custom printed paper bags, stamps and stickers</a> before committing. That is a separate decision from the paper bag specification itself.</p>
      <h2>5. Compare the total first-order cost</h2>
      <p>Request separate lines for bag production, print setup, sampling, packing and delivery, with taxes or import charges clearly included or excluded. Quotes labeled EXW, FOB or DDP are not directly interchangeable; ask what the stated delivery basis covers for your destination.</p>
      <p>A lower unit price at a higher quantity does not guarantee a better first order. Compare the cash you must commit, storage space, expected usage and the chance that your branding or size will change before the stock is used.</p>
      <div className="mrb-note"><strong>Planning calculation:</strong> weeks of stock = usable bags ordered ÷ expected bags used per week. As an illustration, 100 bags at an assumed 20 bags per week would last 5 weeks. Replace that assumption with your own transactions, customer bag acceptance and multi-item purchases.</div>
      <p>For a first launch without sales history, use a conservative usage estimate and revisit it after the first event or trading period. Ask for a reorder quotation and expected repeat-order timing, rather than overordering solely to lower the initial unit price.</p>
      <h2>6. Approve a sample with your actual merchandise</h2>
      <p>Check the bag with the garment or shoe box inside. Review handle drop and comfort, the bottom and top reinforcement, seams, logo placement and any rubbing after normal handling. Agree on an appropriate carrying test with the supplier for your intended load; GSM alone does not establish a carrying limit.</p>
      <p>Confirm what the sample represents. A structural prototype may use a substitute paper or process, while a pre-production sample may be closer to the agreed finish. Note substitutions and approval conditions in writing so the sample is not mistaken for a guarantee of an untested specification.</p>
      <h2>7. Plan backward from the day you need the bags</h2>
      <p>Allow for artwork preparation, sample review, revisions, production, shipping and any import processing. SORIVA estimates approximately 5 days for sampling and 15–20 days for bulk production, subject to project confirmation. These figures are not a delivered-to-store promise.</p>
      <p>Ask when each stage starts, whether the quoted days are working or calendar days and how approval changes affect the schedule. If the date is fixed for a pop-up or collection launch, include it in the initial brief and keep a suitable backup packaging plan.</p>
      <h2>Copy this first-order quotation brief</h2>
      <div className="mrb-note">
        <p><strong>Project:</strong> Paper shopping bags for a fashion boutique / pop-up.</p>
        <p><strong>Quantity:</strong> 100 bags; please confirm minimums per size and artwork.</p>
        <p><strong>Contents:</strong> [folded product or box dimensions and approximate packed weight].</p>
        <p><strong>Bag size:</strong> [width × gusset × height, with units] / recommendation needed.</p>
        <p><strong>Branding:</strong> [logo attached, colors, print sides and finish preference].</p>
        <p><strong>Paper and handles:</strong> [preference] / recommendation needed.</p>
        <p><strong>Destination and timing:</strong> [country, postcode and required arrival date].</p>
        <p><strong>Please itemize:</strong> production, setup, sample and freight; confirm exclusions and approval milestones.</p>
      </div>
      <h2>Frequently asked questions</h2><div className="mrb-faq">{faqs.map(f => <div className="mrb-faq-item" key={f.q}><h3>{f.q}</h3><p>{f.a}</p></div>)}</div>
      <h2>Discussion sources</h2>
      <p>Public discussions reviewed on November 18, 2026 informed the small-order questions. They describe individual experiences with different packaging formats, not representative market data or endorsements of SORIVA. The paper bag order plan is SORIVA’s editorial guidance.</p>
      <ul>{sources.map(s => <li key={s.href}><a href={s.href} target="_blank" rel="noopener noreferrer">{s.title}</a> — {s.note}</li>)}</ul>
    </article><aside className="mrb-sidebar"><b>Related Buyer Guides</b>
      <a href="/products/luxury-paper-bags/">Custom Paper Bags with Logo</a>
      <a href="/solutions/luxury-paper-bags-for-fashion/">Fashion Shopping Bags</a>
      <a href="/resources/custom-printed-paper-bags-vs-stamps-stickers/">Print vs Stamps &amp; Stickers</a>
      <a href="/resources/how-custom-packaging-moq-affects-unit-cost/">MOQ &amp; Unit Cost</a>
      <a href="/resources/how-to-reduce-custom-packaging-shipping-cost/">Shipping Cost Guide</a>
      <a href={RFQ_URL}>Request Your Paper Bag Quote</a>
    </aside></div></section>
    <section className="mrb-quote"><div className="container mrb-quote-grid"><div><span className="mrb-eyebrow">PLAN YOUR FIRST ORDER</span><h2>Get a Quote for Your Boutique Paper Bags</h2><p>Share your product dimensions, quantity, logo and delivery country. If the size, paper or handles are undecided, tell us what you need the bag to carry.</p></div><QuoteForm href={RFQ_URL} /></div></section>
  </main>;
}
