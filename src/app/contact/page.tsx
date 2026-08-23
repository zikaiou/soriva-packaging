/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import QuoteForm from "../components/QuoteForm";
import WhatsAppIcon from "../components/WhatsAppIcon";
import { waLink, WA_MESSAGES, WHATSAPP_DISPLAY } from "../lib/whatsapp";
import "../products/product-page.css";

const PAGE_URL = "https://sorivapackaging.com/contact/";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact SORIVA Packaging for custom rigid boxes, magnetic gift boxes and luxury packaging. WhatsApp +86 159 1388 1634 or email AMY@XINGYUE.STORE for a free quote.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Contact SORIVA Packaging",
    description:
      "Start your custom packaging project. WhatsApp +86 159 1388 1634 or email AMY@XINGYUE.STORE for a free quote.",
    siteName: "SORIVA Packaging",
    locale: "en_US",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      name: "Contact SORIVA Packaging",
      url: PAGE_URL,
      description:
        "Contact SORIVA Packaging for custom packaging quotes and inquiries.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://sorivapackaging.com/" },
        { "@type": "ListItem", position: 2, name: "Contact", item: PAGE_URL },
      ],
    },
  ],
};

export default function ContactPage() {
  return (
    <main className="mrb-page">
      <section className="mrb-hero">
        <div className="container">
          <nav className="mrb-breadcrumb" aria-label="Breadcrumb">
            <a href="/">Home</a> / Contact
          </nav>
          <div className="mrb-hero-grid">
            <div className="mrb-hero-copy">
              <span className="mrb-eyebrow">CONTACT US</span>
              <h1>Contact SORIVA Packaging</h1>
              <p className="mrb-subtitle">
                Start Your Custom Packaging Project
              </p>
              <p className="mrb-lead">
                Tell us your product, approximate quantity and packaging idea.
                Our team responds with structure, material and finishing
                recommendations plus a quotation.
              </p>
              <div className="mrb-hero-actions">
                <a
                  href={waLink(WA_MESSAGES.contact)}
                  target="_blank"
                  rel="noopener"
                  className="btn-wa"
                >
                  <WhatsAppIcon /> Chat on WhatsApp
                </a>
                <a href="mailto:AMY@XINGYUE.STORE" className="btn ghost">
                  Email Us
                </a>
              </div>
            </div>
            <div className="mrb-hero-media">
              <img
                src="/img/factory-poster.webp"
                alt="SORIVA Packaging factory production"
                width="1200"
                height="900"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mrb-quote" id="quote">
        <div className="container mrb-quote-grid">
          <div>
            <span className="mrb-eyebrow">GET A QUOTE</span>
            <h2>Request Your Custom Packaging Quote</h2>
            <p>
              Fill in the form and the inquiry opens in WhatsApp with your
              details pre-filled — review and send directly. No data is stored
              on this website.
            </p>
            <div className="mrb-contact">
              <div className="mrb-contact-note">
                <b>WhatsApp</b>
                <a href={waLink(WA_MESSAGES.contact)} target="_blank" rel="noopener">
                  {WHATSAPP_DISPLAY}
                </a>
              </div>
              <div className="mrb-contact-note">
                <b>Email</b>
                <a href="mailto:AMY@XINGYUE.STORE">AMY@XINGYUE.STORE</a>
              </div>
              <div className="mrb-contact-note">
                <b>Response</b>
                <span style={{ color: "#c5c5c5" }}>Within 24 hours</span>
              </div>
            </div>
            <a className="mrb-back" href="/">
              ← Back to homepage
            </a>
          </div>
          <QuoteForm />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  );
}
