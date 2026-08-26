import type { Metadata } from "next";
import IndustryLandingPage, { industryMetadata, type IndustryLanding } from "../../components/IndustryLandingPage";

const page: IndustryLanding = {
  pageUrl: "https://sorivapackaging.com/industries/fashion-packaging/",
  title: "Custom Fashion Packaging Manufacturer",
  description: "Luxury packaging for apparel, accessories and premium retail brands.",
  eyebrow: "FASHION PACKAGING",
  subtitle: "Luxury Presentation for Apparel & Accessories",
  image: "/img/fashion.webp",
  imageAlt: "Custom fashion packaging boxes and bags",
  message: "Hello SORIVA Packaging, I am interested in custom fashion packaging and would like to discuss box style, paper bags, MOQ and pricing.",
  recommendations: [
    { img: "/img/foldable-rigid.webp", alt: "Foldable magnetic fashion box", title: "Foldable Magnetic Rigid Boxes", desc: "Space-saving presentation boxes for export and retail programs.", slug: "foldable-magnetic-rigid-boxes" },
    { img: "/img/two-piece-rigid.webp", alt: "Two-piece fashion box", title: "Two-Piece Rigid Boxes", desc: "Classic packaging for apparel, accessories and gifting.", slug: "two-piece-rigid-boxes" },
    { img: "/img/magnetic-rigid.webp", alt: "Magnetic rigid fashion box", title: "Magnetic Rigid Boxes", desc: "Premium opening experience for fashion collections.", slug: "magnetic-rigid-boxes" },
    { img: "/img/paper-bags.webp", alt: "Luxury fashion paper bag", title: "Luxury Paper Bags", desc: "Branded retail bags for boutiques and premium stores.", slug: "luxury-paper-bags" },
  ],
  applications: ["Apparel Gift Boxes", "Scarves & Accessories", "Boutique Shopping Bags", "Seasonal Collections"],
  applicationImage: "/img/fashion.webp",
  applicationAlt: "Fashion and apparel packaging",
  customization: [
    { title: "Materials", items: ["Rigid Greyboard", "Art Paper", "Specialty Paper", "Textured Paper"] },
    { title: "Finishing", items: ["Foil", "Emboss", "Deboss", "Spot UV", "Lamination", "Pantone"] },
    { title: "Inserts", items: ["EVA", "Paperboard", "Velvet", "Molded Pulp", "Custom Inserts"] },
  ],
  faq: [
    { question: "What is the MOQ?", answer: "Selected custom projects can start from 100 pcs, depending on structure, material and finishing requirements." },
    { question: "Can I order a prototype?", answer: "Yes. 1 pc prototype available for selected projects." },
    { question: "Can you produce matching boxes and paper bags?", answer: "Yes. Boxes and luxury paper bags can be developed as a coordinated retail packaging system." },
    { question: "Do you support international shipping?", answer: "Yes. Sea, air and express shipping are supported." },
  ],
};

export const metadata: Metadata = industryMetadata(page);
export default function Page() { return <IndustryLandingPage page={page} />; }
