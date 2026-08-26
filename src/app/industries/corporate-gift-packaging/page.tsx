import type { Metadata } from "next";
import IndustryLandingPage, { industryMetadata, type IndustryLanding } from "../../components/IndustryLandingPage";

const page: IndustryLanding = {
  pageUrl: "https://sorivapackaging.com/industries/corporate-gift-packaging/",
  title: "Custom Corporate Gift Packaging Manufacturer",
  description: "Premium packaging for executive gifts, events, campaigns and seasonal programs.",
  eyebrow: "CORPORATE GIFT PACKAGING",
  subtitle: "Premium Presentation for Executive Gifts & Campaigns",
  image: "/img/corporate.webp",
  imageAlt: "Custom corporate gift packaging",
  message: "Hello SORIVA Packaging, I am interested in custom corporate gift packaging and would like to discuss structure, insert, MOQ, timeline and pricing.",
  recommendations: [
    { img: "/img/two-piece-rigid.webp", alt: "Two-piece corporate gift box", title: "Two-Piece Rigid Boxes", desc: "Classic presentation for executive gift collections.", slug: "two-piece-rigid-boxes" },
    { img: "/img/magnetic-rigid.webp", alt: "Magnetic corporate gift box", title: "Magnetic Rigid Boxes", desc: "Premium opening experience for campaign gift sets.", slug: "magnetic-rigid-boxes" },
    { img: "/img/foldable-rigid.webp", alt: "Foldable corporate gift box", title: "Foldable Magnetic Rigid Boxes", desc: "Efficient storage and shipping for larger programs.", slug: "foldable-magnetic-rigid-boxes" },
    { img: "/img/paper-bags.webp", alt: "Luxury corporate gift paper bag", title: "Luxury Paper Bags", desc: "Matching bags for events, launches and retail gifting.", slug: "luxury-paper-bags" },
  ],
  applications: ["Executive Gifts", "Event Gift Sets", "Holiday Campaigns", "Brand Launch Kits"],
  applicationImage: "/img/corporate.webp",
  applicationAlt: "Corporate gift packaging",
  customization: [
    { title: "Materials", items: ["Rigid Greyboard", "Art Paper", "Specialty Paper", "Textured Paper"] },
    { title: "Finishing", items: ["Foil", "Emboss", "Deboss", "Spot UV", "Lamination", "Pantone"] },
    { title: "Inserts", items: ["EVA", "Paperboard", "Velvet", "Molded Pulp", "Custom Inserts"] },
  ],
  faq: [
    { question: "What is the MOQ?", answer: "Selected custom projects can start from 100 pcs, depending on structure, material and finishing requirements." },
    { question: "Can I order a prototype?", answer: "Yes. 1 pc prototype available for selected projects." },
    { question: "Can multi-product gift sets be supported?", answer: "Yes. Custom inserts can be developed around multiple products and coordinated gift programs." },
    { question: "Do you support international shipping?", answer: "Yes. Sea, air and express shipping are supported." },
  ],
};

export const metadata: Metadata = industryMetadata(page);
export default function Page() { return <IndustryLandingPage page={page} />; }
