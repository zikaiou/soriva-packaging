/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../../components/QuoteForm";
import WhatsAppIcon from "../../components/WhatsAppIcon";
import { waLink } from "../../lib/whatsapp";
import "../product-page.css";

const PAGE_URL = "https://www.sorivapackaging.com/products/custom-magnetic-rigid-gift-box/";

export const metadata: Metadata = {
  title: { absolute: "Custom Magnetic Rigid Gift Box for Perfume | SORIVA" },
  description: "Custom black magnetic rigid gift boxes for perfume and premium gift sets. Rigid greyboard construction, hinged magnetic flap, fitted insert and custom paper wrap. Request a manufacturer quote.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Custom Magnetic Rigid Gift Box for Perfume | SORIVA",
    description: "A dedicated custom magnetic rigid gift box solution for perfume presentation, with a hinged magnetic flap, fitted insert and branded paper wrap.",
    images: [{ url: "/img/magnetic-rigid.webp", width: 1200, height: 900, alt: "Black magnetic rigid perfume gift box with fitted insert and gold branding" }],
  },
};

const features = [
  { num: "01", title: "Rigid Greyboard Body", desc: "A firm rigid box structure designed to present and protect premium products." },
  { num: "02", title: "Hinged Magnetic Flap", desc: "An attached lid with magnetic closure for a neat, secure opening and closing experience." },
  { num: "03", title: "Fitted Product Insert", desc: "A customized insert layout to hold a perfume bottle in position during presentation and handling." },
  { num: "04", title: "Branded Paper Wrap", desc: "Customize the exterior wrap, color and logo treatment to align with your brand identity." },
];

const faqs = [
  { q: "Can this magnetic rigid gift box be customized for perfume bottles?", a: "Yes. The box dimensions and insert layout can be developed around your perfume bottle size and presentation requirements." },
  { q: "Can I customize the outside paper and logo?", a: "Yes. The paper wrap and branding treatment can be discussed according to your artwork, preferred color and finish." },
  { q: "What information is needed for a quotation?", a: "Please share the bottle dimensions, box quantity, preferred materials or colors, logo artwork and delivery destination. A reference photo is also helpful." },
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
              <span className="mrb-eyebrow">CUSTOM PERFUME PRESENTATION BOX</span>
              <h1>Custom Magnetic Rigid Gift Box</h1>
              <p className="mrb-subtitle">A refined black gift box for perfume and premium product sets</p>
              <p className="mrb-lead">Present your product in a rigid greyboard box with a hinged magnetic flap, customized paper wrap and a fitted insert. Develop the dimensions, interior layout and branding around your product.</p>
              <div className="mrb-hero-actions">
                <a className="btn gold" href="#quote">Request a Quote</a>
                <a className="btn-wa" href={waLink("Hello SORIVA Packaging, I am interested in the Custom Magnetic Rigid Gift Box for perfume. Please help me with customization and a quotation.")} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> Chat on WhatsApp</a>
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
        <div className="container mrb-custom">
          <div>
            <span className="eyebrow dark">CUSTOMIZATION OPTIONS</span>
            <h2>Make the Box Fit Your Brand</h2>
            <p>Share your product dimensions and visual direction. SORIVA can discuss the box size, insert construction, paper wrap and logo presentation for a coordinated packaging result.</p>
          </div>
          <ul>
            <li>Custom box dimensions</li>
            <li>Hinged magnetic closure</li>
            <li>Fitted perfume insert</li>
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
            <p>Tell us about your perfume bottle, required quantity, preferred box dimensions and branding. Share a reference image or artwork to help us review your project.</p>
            <div className="mrb-contact">
              <div className="mrb-contact-note"><b>WhatsApp</b><a href={waLink("Hello SORIVA Packaging, I would like a quotation for the Custom Magnetic Rigid Gift Box.")} target="_blank" rel="noopener noreferrer">+86 159 1388 1634</a></div>
              <div className="mrb-contact-note"><b>Email</b><a href="mailto:AMY@XINGYUE.STORE">AMY@XINGYUE.STORE</a></div>
            </div>
            <a className="mrb-back" href="/products/">← Browse All Products</a>
          </div>
          <QuoteForm href="/rfq/?product=Custom%20Magnetic%20Rigid%20Gift%20Box&source_page=%2Fproducts%2Fcustom-magnetic-rigid-gift-box%2F" />
        </div>
      </section>
    </main>
  );
}
