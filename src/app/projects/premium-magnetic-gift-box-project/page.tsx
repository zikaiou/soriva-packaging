import type { Metadata } from "next";
import CaseStudyPage, { caseStudyMetadata, type CaseStudy } from "../../components/CaseStudyPage";

const study: CaseStudy = {
  slug: "premium-magnetic-gift-box-project",
  title: "Premium Magnetic Gift Box Project",
  description:
    "A capability case study of a premium magnetic rigid gift box project featuring 2.0mm high-density greyboard, book-style magnetic closure, metallic gold foil and custom-cut EVA inserts.",
  image: "/img/magnetic-rigid.webp",
  imageAlt: "Premium magnetic rigid gift box project reference",
  industry: "Luxury Consumer Goods & VIP Gifting",
  structure: "Book-Style Front-Opening Magnetic Rigid Box",
  materials: "2.0mm High-Density Rigid Greyboard + Soft-Touch Wrapped Specialty Paper",
  finishing: "Metallic Gold Hot Foil Stamping + Anti-Scratch Velvet Matte Lamination",
  insert: "High-Density Precision-Cut EVA Foam with Velvet Flocking",
  market: "Global Luxury Gifting & Executive Presentation",
  challenge:
    "Develop a luxury presentation gift box with high structural rigidity and a clean, satisfying magnetic snap closure while maintaining crisp, sharp edges along all wrapping score lines.",
  solution:
    "Engineered using 2.0mm high-density greyboard with dual embedded neodymium magnets hidden seamlessly inside the front flap. Wrapped in specialty soft-touch paper and decorated with precision metallic gold foil typography. A custom-routed EVA foam insert secures internal contents tightly throughout international transit.",
  benefits: [
    "Satisfying magnetic snap closure with concealed dual neodymium magnets",
    "Flawless edge wrapping without visible board core or corner cracking",
    "Soft-touch velvet tactile surface with protective anti-scratch barrier",
    "Custom-routed EVA insert engineered around exact product dimensions",
  ],
  productHref: "/products/magnetic-rigid-boxes/",
  productLabel: "Explore Magnetic Rigid Boxes",
  industryHref: "/custom-packaging/",
  industryLabel: "Custom Packaging System",
  message:
    "Hello SORIVA Packaging, I reviewed your premium magnetic gift box project and would like to discuss a custom magnetic packaging development.",
};

export const metadata: Metadata = {
  ...caseStudyMetadata(study),
  title: {
    absolute: "Premium Magnetic Gift Box Project | Custom Rigid Packaging | SORIVA Packaging",
  },
};

export default function Page() {
  return <CaseStudyPage study={study} />;
}
