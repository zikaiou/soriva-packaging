/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink } from "../../lib/whatsapp";
import "../product-page.css";

const SITE_URL = "https://www.sorivapackaging.com";
const PRODUCT_PATH = "/products/custom-perfume-magnetic-gift-boxes/";
const PAGE_URL = SITE_URL + PRODUCT_PATH;
const PRODUCT_NAME = "Custom Perfume Magnetic Gift Boxes";
const DESCRIPTION = "Order custom magnetic perfume gift boxes from SORIVA Packaging. Choose a bottle-fitted insert, branded paper wrap and logo finish, then request a factory quote.";
const IMAGE_PATH = "/img/magnetic-rigid.webp";
const IMAGE_ALT = "Open magnetic rigid perfume gift box with a fitted bottle insert";

export const metadata: Metadata = {
  title: { absolute: `${PRODUCT_NAME} | SORIVA Packaging` },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: `${PRODUCT_NAME} | SORIVA Packaging`,
    description: DESCRIPTION,
    images: [{ url: SITE_URL + IMAGE_PATH, alt: IMAGE_ALT }],
  },
};

const features = [
  { title: "Hinged magnetic closure", description: "An attached lid opens to reveal the bottle and closes with a concealed magnet." },
  { title: "Bottle-fitted insert", description: "An insert can be cut to your bottle profile, with space for a cap, sample vial or gift accessory where required." },
  { title: "Branded exterior", description: "Specify the paper wrap, color and logo placement. Discuss finishes such as foil stamping or matte lamination when requesting a quote." },
  { title: "Gift set layouts", description: "Plan a single-bottle presentation or arrange multiple fragrance items in one box for a launch or seasonal gift set." },
];

const faqs = [
  { question: "Can you make a box for my perfume bottle?", answer: "Yes. Share the bottle dimensions with the cap attached, plus a drawing or photo, so we can review the insert fit and box dimensions." },
  { question: "Can one gift box hold multiple fragrance items?", answer: "Yes. Share the size and preferred position of each bottle, vial or accessory so we can review a multi-cavity insert layout." },
  { question: "How do I confirm the minimum order and lead time?", answer: "Include your target quantity, artwork, finish and delivery destination in the inquiry. We confirm order minimums, sampling and production timing after reviewing the specifications." },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": `${PAGE_URL}#product`,
      name: PRODUCT_NAME,
      description: DESCRIPTION,
      url: PAGE_URL,
      image: SITE_URL + IMAGE_PATH,
      brand: { "@type": "Brand", name: "SORIVA Packaging" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL + "/" },
        { "@type": "ListItem", position: 2, name: "Products", item: SITE_URL + "/products/" },
        { "@type": "ListItem", position: 3, name: PRODUCT_NAME, item: PAGE_URL },
      ],
    },
  ],
};

const quoteParams = new URLSearchParams({ product: PRODUCT_NAME, source_page: PRODUCT_PATH });

export default function CustomPerfumeMagneticGiftBoxesPage() {
  return (
    <main className="mrb-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <section className="mrb-hero">
        <div className="container">
          <nav className="mrb-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link> / <Link href="/products/">Products</Link> / <span aria-current="page">{PRODUCT_NAME}</span>
          </nav>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <h1>{PRODUCT_NAME}</h1>
              <p className="mrb-subtitle">Rigid fragrance packaging with a hinged lid and fitted insert</p>
              <p className="mrb-lead">Work directly with SORIVA Packaging on a magnetic gift box sized for your perfume bottle or fragrance set. Customize the insert layout, wrap and logo finish for retail launches and gifting.</p>
              <div className="mrb-hero-actions">
                <a className="btn gold" href="#quote">Request a Quote</a>
                <a className="btn-wa" href={waLink(`Hello SORIVA Packaging, I would like a quote for ${PRODUCT_NAME}.`)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Chat on WhatsApp</a>
              </div>
            </div>
            <div className="mrb-hero-media">
              <img src={IMAGE_PATH} alt={IMAGE_ALT} width={900} height={675} fetchPriority="high" />
            </div>
          </div>
        </div>
      </section>

      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <h2>Customize the Box Around Your Fragrance</h2>
          </div>
          <div className="mrb-features">
            {features.map(({ title, description }) => (
              <article className="mrb-feature" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mrb-section soft">
        <div className="container mrb-custom">
          <div>
            <h2>Plan Your Perfume Gift Box</h2>
            <p>Send your bottle specifications, order quantity, artwork and delivery destination so we can review the layout and prepare a quotation.</p>
          </div>
          <ul>
            <li>Bottle size and shape with cap attached</li>
            <li>Single-bottle or multi-item insert layout</li>
            <li>Wrap color, logo placement and finish</li>
            <li>Target quantity and delivery date</li>
          </ul>
        </div>
      </section>

      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center"><h2>Perfume Gift Box FAQ</h2></div>
          <div className="mrb-faq">
            {faqs.map(({ question, answer }) => (
              <div className="mrb-faq-item" key={question}><b>{question}</b><p>{answer}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="mrb-quote" id="quote">
        <div className="container mrb-quote-grid">
          <div>
            <h2>Request a Perfume Magnetic Gift Box Quote</h2>
            <p>Include a bottle drawing or reference image if available, together with the quantity and destination.</p>
            <div className="mrb-contact">
              <div className="mrb-contact-note"><b>Compare packaging options</b><Link href="/solutions/magnetic-rigid-boxes-for-perfume/">Magnetic perfume packaging guide</Link></div>
              <div className="mrb-contact-note"><b>Planning a discovery set?</b><Link href="/products/custom-vial-sample-kit-boxes/">Vial &amp; Sample Kit Boxes</Link></div>
            </div>
            <Link className="mrb-back" href="/products/">← Browse All Products</Link>
          </div>
          <QuoteForm href={`/rfq/?${quoteParams}`} />
        </div>
      </section>
    </main>
  );
}
