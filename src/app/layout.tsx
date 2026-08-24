import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Header from "./components/Header";
import { waLink, WA_MESSAGES } from "./lib/whatsapp";
import "./globals.css";
import "./site.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE = {
  name: "SORIVA Packaging",
  domain: "https://sorivapackaging.com",
  description:
    "Premium custom rigid boxes, magnetic gift boxes and luxury packaging solutions for cosmetics, jewelry, fragrance, gifts and growing brands. Flexible MOQ, custom design and worldwide shipping.",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "Custom Luxury Packaging Manufacturer | SORIVA Packaging",
    template: "%s | SORIVA Packaging",
  },
  description: SITE.description,
  keywords: [
    "custom luxury packaging",
    "rigid box manufacturer",
    "magnetic gift boxes",
    "custom packaging supplier",
    "cosmetic packaging",
    "jewelry packaging",
    "OEM packaging",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE.domain,
    siteName: SITE.name,
    title: "Custom Luxury Packaging Manufacturer | SORIVA Packaging",
    description: SITE.description,
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.domain,
      description: SITE.description,
      email: "AMY@XINGYUE.STORE",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: "+86 159 1388 1634",
        availableLanguage: ["English", "中文"],
      },
    },
    {
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.domain,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <footer>
          <div className="container footer-grid">
            <div>
              <a
                className="brand footer-brand"
                href="#top"
                aria-label="SORIVA Packaging home"
              >
                <span className="brand-mark">S</span>
                <span>
                  <b>SORIVA</b>
                  <small>PACKAGING</small>
                </span>
              </a>
              <p>
                Custom luxury packaging for growing brands.
                <br />
                <a href="mailto:AMY@XINGYUE.STORE">AMY@XINGYUE.STORE</a>
                <br />
                <a
                  href="https://wa.me/8615913881634"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: +86 159 1388 1634
                </a>
              </p>
            </div>
            <div>
              <b>Products</b>
              <a href="/#products">Magnetic Rigid Boxes</a>
              <a href="/#products">Rigid Gift Boxes</a>
              <a href="/#products">Drawer Boxes</a>
              <a href="/#products">Foldable Boxes</a>
            </div>
            <div>
              <b>Industries</b>
              <a href="/#industries">Cosmetics</a>
              <a href="/#industries">Perfume</a>
              <a href="/#industries">Jewelry</a>
              <a href="/#industries">Corporate Gifts</a>
            </div>
            <div>
              <b>Company</b>
              <a href="/factory/">Factory</a>
              <a href="/projects/">Projects</a>
              <a href="/contact/">Request Quote</a>
            </div>
          </div>
          <div className="container copyright">
            © {new Date().getFullYear()} SORIVA PACKAGING. All rights
            reserved.{" "}
            <span>
              Visual product concepts are for reference; final production
              specifications require confirmation.
            </span>
          </div>
        </footer>
        <a
          className="whatsapp-float"
          href={waLink(WA_MESSAGES.home)}
          target="_blank"
          rel="noopener"
          aria-label="Chat with SORIVA Packaging on WhatsApp"
        >
          <span>WhatsApp</span>
          <b>Chat Now</b>
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QX8L7PQNK6"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QX8L7PQNK6');
          `}
        </Script>
      </body>
    </html>
  );
}
