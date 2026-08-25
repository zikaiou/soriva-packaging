import type { Metadata } from "next";
import CaseStudyPage, { caseStudyMetadata, type CaseStudy } from "../../components/CaseStudyPage";

const study: CaseStudy = {
  slug: "luxury-skincare-gift-box",
  title: "Luxury Skincare Gift Box Project",
  description: "A luxury skincare gift box case study showing how structure, materials, finishing and inserts are combined around a premium beauty application.",
  image: "/img/project-skincare.webp",
  imageAlt: "Luxury skincare gift box project",
  industry: "Beauty & Skincare",
  structure: "Foldable Magnetic Rigid Box",
  materials: "Rigid greyboard + specialty paper",
  finishing: "Gold foil + embossed logo",
  insert: "Custom EVA insert",
  market: "Europe",
  challenge: "Create a premium skincare gift-set presentation while keeping export packing and warehouse handling practical.",
  solution: "A foldable magnetic rigid structure was selected to balance luxury presentation with flat-pack logistics. The internal EVA insert was developed around the skincare set to secure each product and keep the unboxing layout clean.",
  benefits: ["Premium magnetic presentation", "Flat-pack structure for export efficiency", "Custom EVA insert for product protection", "Gold foil and embossing for brand emphasis"],
  productHref: "/products/foldable-magnetic-rigid-boxes/",
  productLabel: "View Foldable Magnetic Boxes",
  industryHref: "/industries/cosmetic-packaging/",
  industryLabel: "View Cosmetics Packaging",
  message: "Hello SORIVA Packaging, I reviewed your luxury skincare gift box case study and would like to discuss a similar custom packaging project.",
};

export const metadata: Metadata = caseStudyMetadata(study);
export default function Page() { return <CaseStudyPage study={study} />; }
