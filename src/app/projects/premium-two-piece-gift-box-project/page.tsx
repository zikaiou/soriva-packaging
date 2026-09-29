import type { Metadata } from "next";
import CaseStudyPage, { caseStudyMetadata, type CaseStudy } from "../../components/CaseStudyPage";

const study: CaseStudy = {
  slug: "premium-two-piece-gift-box-project",
  title: "Premium Two-Piece Gift Box Project",
  description:
    "A capability case study of a premium two-piece rigid gift box project featuring separate lid and base construction, gold foil branding and custom velvet EVA insert.",
  image: "/img/two-piece-rigid.webp",
  imageAlt: "Premium two-piece rigid gift box project reference",
  industry: "Luxury Retail & Gifting",
  structure: "Two-Piece Lid and Base Rigid Box",
  materials: "Rigid Greyboard + Specialty Textured Paper Wrap",
  finishing: "Metallic Gold Hot Foil Stamping + Anti-Scratch Matte Lamination",
  insert: "Custom-Cut EVA Foam Insert with Velvet Flocking",
  market: "Global Retail & Executive Presentation",
  challenge:
    "Create a classic two-piece gift box with precise lid-to-base air friction resistance for a smooth, controlled unboxing experience without loose fitting or sticking.",
  solution:
    "Engineered using rigid greyboard with tight corner scoring and optimized lid tolerance for a smooth sliding release. Wrapped in specialty textured paper and finished with crisp gold foil typography, paired with a custom velvet-flocked EVA insert.",
  benefits: [
    "Controlled air-release friction lid fit for an elegant unboxing reveal",
    "Solid rigid board construction for dependable protection",
    "Refined textured paper wrap with metallic gold foil typography",
    "Custom-cut interior cavity tailored around product dimensions",
  ],
  productHref: "/products/two-piece-rigid-boxes/",
  productLabel: "Explore Two-Piece Rigid Boxes",
  industryHref: "/custom-packaging/",
  industryLabel: "Custom Packaging System",
  message:
    "Hello SORIVA Packaging, I reviewed your premium two-piece gift box project and would like to discuss a custom packaging development.",
};

export const metadata: Metadata = {
  ...caseStudyMetadata(study),
  title: {
    absolute: "Premium Two-Piece Gift Box Project | Custom Rigid Packaging | SORIVA Packaging",
  },
};

export default function Page() {
  return <CaseStudyPage study={study} />;
}
