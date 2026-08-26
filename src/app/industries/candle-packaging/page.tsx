import type { Metadata } from "next";
import IndustryLandingPage, { industryMetadata, type IndustryLanding } from "../../components/IndustryLandingPage";

const page: IndustryLanding = {
  pageUrl: "https://sorivapackaging.com/industries/candle-packaging/",
  title: "Custom Candle Packaging Boxes Manufacturer",
  description: "Premium packaging for candle and home fragrance brands.",
  eyebrow: "CANDLE PACKAGING",
  subtitle: "Premium Presentation for Candle & Home Fragrance Brands",
  image: "/img/candles.webp",
  imageAlt: "Custom candle packaging boxes",
  message: "Hello SORIVA Packaging, I am interested in custom candle packaging and would like to discuss structure, size, insert, MOQ and pricing.",
  recommendations: [
    { img: "/img/two-piece-rigid.webp", alt: "Two-piece rigid candle box", title: "Two-Piece Rigid Boxes", desc: "Classic presentation for candle jars and gift sets.", slug: "two-piece-rigid-boxes" },
    { img: "/img/tube-packaging.webp", alt: "Tube packaging for candles", title: "Tube Packaging", desc: "Distinctive cylindrical formats for candles and home fragrance.", slug: "tube-packaging" },
    { img: "/img/magnetic-rigid.webp", alt: "Magnetic rigid candle box", title: "Magnetic Rigid Boxes", desc: "Premium opening experience for candle collections.", slug: "magnetic-rigid-boxes" },
    { img: "/img/paper-bags.webp", alt: "Luxury paper bag for candles", title: "Luxury Paper Bags", desc: "Retail bags that complete the candle packaging system.", slug: "luxury-paper-bags" },
  ],
  applications: ["Jar Candles", "Luxury Candle Sets", "Diffusers", "Home Fragrance Gifts"],
  applicationImage: "/img/candles.webp",
  applicationAlt: "Candle and home fragrance packaging",
  customization: [
    { title: "Materials", items: ["Rigid Greyboard", "Art Paper", "Specialty Paper", "Textured Paper"] },
    { title: "Finishing", items: ["Foil", "Emboss", "Deboss", "Spot UV", "Lamination", "Pantone"] },
    { title: "Inserts", items: ["EVA", "Paperboard", "Velvet", "Molded Pulp", "Custom Inserts"] },
  ],
  faq: [
    { question: "What is the MOQ?", answer: "Selected custom projects can start from 100 pcs, depending on structure, material and finishing requirements." },
    { question: "Can I order a prototype?", answer: "Yes. 1 pc prototype available for selected projects." },
    { question: "Can structure and inserts be customized?", answer: "Yes. Size, structure, insert, paper and finishing can be developed around your candle product." },
    { question: "Do you support international shipping?", answer: "Yes. Sea, air and express shipping are supported." },
  ],
};

export const metadata: Metadata = industryMetadata(page);
export default function Page() { return <IndustryLandingPage page={page} />; }
