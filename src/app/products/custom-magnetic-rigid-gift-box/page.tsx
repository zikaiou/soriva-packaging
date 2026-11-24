/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink } from "../../lib/whatsapp";
import "../product-page.css";

const PAGE_URL = "https://www.sorivapackaging.com/products/custom-magnetic-rigid-gift-box/";

export const metadata: Metadata = {
  title: { absolute: "Custom Black Magnetic Rigid Gift Box | SORIVA" },
  description: "Custom black magnetic rigid gift boxes with gold foil branding for premium product sets. Rigid greyboard construction, hinged magnetic flap, fitted insert and custom paper wrap. Request a manufacturer quote.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Custom Black Magnetic Rigid Gift Box | SORIVA",
    description: "A black magnetic rigid gift box design for premium product presentation, with a hinged magnetic flap, fitted insert and branded paper wrap.",
    images: [{ url: "/img/magnetic-rigid.webp", width: 1200, height: 900, alt: "Black magnetic rigid perfume gift box with fitted insert and gold branding" }],
  },
};

const features = [
  { num: "01", title: "1.5 mm Rigid Greyboard", desc: "Built with 1.5 mm greyboard for a firm, structured presentation box." },
  { num: "02", title: "Hinged Magnetic Flap", desc: "An attached lid with magnetic closure for a neat, secure opening and closing experience." },
  { num: "03", title: "EVA Insert", desc: "An EVA insert can be customized to fit the product shape and help keep it in position inside the box." },
  { num: "04", title: "Matte Finish & Gold Foil Logo", desc: "The confirmed finish for this product is matte lamination with a gold foil logo." },
];

const faqs = [
  { q: "Can the black magnetic gift box be customized for my products?", a: "Yes. The box dimensions and insert layout can be developed around your product size and presentation requirements." },
  { q: "What finish is specified for this box?", a: "The current product specification is matte lamination with a gold foil logo. Other finishes should be confirmed separately before quotation." },
  { q: "What is the minimum order quantity?", a: "The stated MOQ for this product is 100 pieces. Please confirm the final quantity and specifications when requesting a quotation." },
  { q: "Are the box dimensions and production lead time fixed?", a: "The box dimensions, sampling time and bulk production lead time have not yet been confirmed. Please share your product dimensions and target delivery schedule so these details can be reviewed." },
  { q: "What information is needed for a quotation?", a: "Please share the perfume or cosmetic product dimensions, required quantity, delivery destination and logo artwork. The final box dimensions and production schedule can then be confirmed." },
];

export default function CustomMagneticRigidGiftBoxPage() {
  return (
    <main className="mrb-page">
      <section className="mrb-hero">
        <div className="container">
          <nav className="mrb-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a> / <a href="/products/">Products</a> / <span>Custom Magnetic Rigid Gift Box</span>
          </nav>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">BLACK &amp; GOLD PRESENTATION BOX</span>
              <h1>Custom Magnetic Rigid Gift Box</h1>
              <p className="mrb-subtitle">A matte black magnetic gift box with gold foil branding</p>
              <p className="mrb-lead">Present your product in a custom black magnetic rigid gift box with a hinged magnetic flap, customized paper wrap and a fitted insert. Develop the dimensions, interior layout and branding around your product.</p>
              <div className="mrb-hero-actions">
                <a className="btn gold" href="#quote">Request a Quote</a>
                <a className="btn-wa" href={waLink("Hello SORIVA Packaging, I am interested in the Custom Black Magnetic Rigid Gift Box. Please help me with customization and a quotation.")} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Chat on WhatsApp</a>
              </div>
            </div>
            <div className="mrb-hero-media">
              <img src="/img/magnetic-rigid.webp" alt="Black magnetic rigid perfume gift box with fitted insert and gold branding" width="1200" height="900" fetchPriority="high" />
            </div>
          </div>
        </div>
      </section>

      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">PRODUCT FEATURES</span>
            <h2>Designed Around Your Product Presentation</h2>
            <p>This product page focuses on the black magnetic rigid gift box shown above. Its structure, insert and exterior presentation can be customized for your project.</p>
          </div>
          <div className="mrb-features">
            {features.map((item) => (
              <article className="mrb-feature" key={item.num}>
                <strong>{item.num}</strong><h3>{item.title}</h3><p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mrb-section soft">
        <div className="container">
          <div className="mrb-spec-wrap">
            <div>
              <span className="eyebrow dark">PRODUCT SPECIFICATIONS</span>
              <h2>Material &amp; Finish Details</h2>
              <p>The following details are confirmed for this product. Final box dimensions and production timing will be reviewed according to the product being packed and the order requirements.</p>
            </div>
            <div className="mrb-spec">
              <div className="mrb-spec-item"><b>Box Structure</b><span>Hinged magnetic rigid box</span></div>
              <div className="mrb-spec-item"><b>Greyboard Thickness</b><span>1.5 mm</span></div>
              <div className="mrb-spec-item"><b>Insert</b><span>EVA insert</span></div>
              <div className="mrb-spec-item"><b>Surface Finish</b><span>Matte lamination</span></div>
              <div className="mrb-spec-item"><b>Logo Finish</b><span>Gold foil stamping</span></div>
              <div className="mrb-spec-item"><b>MOQ</b><span>100 pcs</span></div>
              <div className="mrb-spec-item"><b>Applications</b><span>Perfume &amp; cosmetics</span></div>
              <div className="mrb-spec-item"><b>Dimensions &amp; Lead Time</b><span>To be confirmed for each project</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mrb-section soft">
        <div className="container mrb-custom">
          <div>
            <span className="eyebrow dark">CUSTOMIZATION OPTIONS</span>
            <h2>Make the Box Fit Your Brand</h2>
            <p>Share your product dimensions and visual direction. SORIVA can discuss the box size, insert construction, paper wrap and logo presentation for a coordinated packaging result.</p>
          </div>
          <ul>
            <li>Custom box dimensions</li>
            <li>Hinged magnetic closure</li>
            <li>Fitted EVA insert</li>
            <li>Exterior paper wrap</li>
            <li>Custom logo treatment</li>
            <li>Interior presentation layout</li>
          </ul>
        </div>
      </section>

      <section className="mrb-section dark">
        <div className="container">
          <div className="mrb-head center">
            <span className="mrb-eyebrow">HOW TO START</span>
            <h2>Prepare Your Custom Box Project</h2>
            <p>Send the key details below so the structure and quotation can be reviewed accurately.</p>
          </div>
          <div className="mrb-process">
            <div className="mrb-step"><span>01</span><b>Product dimensions</b></div>
            <div className="mrb-step"><span>02</span><b>Target box size</b></div>
            <div className="mrb-step"><span>03</span><b>Quantity required</b></div>
            <div className="mrb-step"><span>04</span><b>Paper and color</b></div>
            <div className="mrb-step"><span>05</span><b>Logo artwork</b></div>
            <div className="mrb-step"><span>06</span><b>Delivery destination</b></div>
          </div>
        </div>
      </section>

      <section className="mrb-section">
        <div className="container">
          <div className="mrb-head center">
            <span className="eyebrow dark">BUYER FAQ</span>
            <h2>Custom Magnetic Rigid Gift Box Questions</h2>
          </div>
          <div className="mrb-faq">
            {faqs.map((item) => <div className="mrb-faq-item" key={item.q}><b>{item.q}</b><p>{item.a}</p></div>)}
          </div>
        </div>
      </section>

      <section className="mrb-quote" id="quote">
        <div className="container mrb-quote-grid">
          <div>
            <span className="mrb-eyebrow">START YOUR PROJECT</span>
            <h2>Request a Custom Magnetic Rigid Gift Box Quote</h2>
            <p>Tell us about your product dimensions, required quantity, preferred box dimensions and branding. Share a reference image or artwork to help us review your project.</p>
            <div className="mrb-contact">
              <div className="mrb-contact-note"><b>WhatsApp</b><a href={waLink("Hello SORIVA Packaging, I would like a quotation for the Custom Magnetic Rigid Gift Box.")} target="_blank" rel="noopener noreferrer">+86 159 1388 1634</a></div>
              <div className="mrb-contact-note"><b>Email</b><a href="mailto:AMY@XINGYUE.STORE">AMY@XINGYUE.STORE</a></div>
            </div>
            <p>For bottle-specific packaging, explore our <a href="/solutions/magnetic-rigid-boxes-for-perfume/">custom perfume magnetic gift boxes</a>. For other structures, see <a href="/products/magnetic-rigid-boxes/">custom magnetic boxes</a>.</p>
            <a className="mrb-back" href="/products/">← Browse All Products</a>
          </div>
          <QuoteForm href="/rfq/?product=Custom%20Magnetic%20Rigid%20Gift%20Box&source_page=%2Fproducts%2Fcustom-magnetic-rigid-gift-box%2F" />
        </div>
      </section>
    </main>
  );
}
