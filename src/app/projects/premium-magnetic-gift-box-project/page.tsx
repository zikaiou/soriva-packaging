import type { Metadata } from "next";
import CaseStudyPage, { caseStudyMetadata, type CaseStudy } from "../../components/CaseStudyPage";

const study: CaseStudy = {
  slug: "premium-magnetic-gift-box-project",
  title: "Premium Magnetic Gift Box Project",
  description:
    "A capability case study of a premium magnetic rigid gift box project featuring rigid greyboard, book-style magnetic closure, metallic gold foil and custom-cut EVA inserts.",
  image: "/img/magnetic-rigid.webp",
  imageAlt: "Premium magnetic rigid gift box project reference",
  industry: "Luxury Consumer Goods & VIP Gifting",
  structure: "Book-Style Front-Opening Magnetic Rigid Box",
  materials: "Rigid Greyboard + Soft-Touch Wrapped Specialty Paper",
  finishing: "Metallic Gold Hot Foil Stamping + Soft-Touch Matte Lamination",
  insert: "Custom-Cut EVA Foam with Velvet Flocking",
  market: "Global Luxury Gifting & Executive Presentation",
  challenge:
    "Develop a luxury presentation gift box with solid structural rigidity and a clean, reliable magnetic closure while maintaining crisp, sharp edges along all wrapping score lines.",
  solution:
    "Engineered using rigid greyboard with dual embedded magnets hidden inside the front flap. Wrapped in specialty soft-touch paper and decorated with precision metallic gold foil typography. A custom-cut EVA foam insert secures internal contents tightly throughout international transit.",
  benefits: [
    "Reliable magnetic closure with concealed magnets",
    "Clean edge wrapping without visible board core or corner cracking",
    "Soft-touch velvet tactile surface with protective matte barrier",
    "Custom-cut EVA insert engineered around exact product dimensions",
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
