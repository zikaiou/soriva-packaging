import type { Metadata } from "next";
import CaseStudyPage, { caseStudyMetadata, type CaseStudy } from "../../components/CaseStudyPage";

const study: CaseStudy = {
  slug: "corporate-luxury-gift-box",
  title: "Corporate Luxury Gift Box Project",
  description: "A corporate luxury gift box case study featuring a two-piece rigid structure, adaptable inserts and premium finishing for gifting programs.",
  image: "/img/project-gift-clean.webp",
  imageAlt: "Corporate luxury gift box project",
  industry: "Corporate Gifts",
  structure: "Two-Piece Rigid Box",
  materials: "Rigid greyboard + premium printed paper",
  finishing: "Foil / embossing options",
  insert: "Custom paperboard or EVA insert",
  market: "Corporate gifting and campaigns",
  challenge: "Develop a flexible premium box system suitable for seasonal campaigns, events and executive gifting.",
  solution: "A two-piece rigid lid-and-base structure was selected for its classic presentation and adaptability. Interior inserts can be adjusted for different product combinations while keeping a consistent outer brand system.",
  benefits: ["Classic premium presentation", "Flexible interior configurations", "Suitable for seasonal gift programs", "Easy to adapt across product ranges"],
  productHref: "/products/two-piece-rigid-boxes/",
  productLabel: "View Two-Piece Rigid Boxes",
  industryHref: "/contact/",
  industryLabel: "Discuss Corporate Gifts",
  message: "Hello SORIVA Packaging, I reviewed your corporate luxury gift box case study and would like to discuss a similar custom packaging project.",
};

export const metadata: Metadata = caseStudyMetadata(study);
export default function Page() { return <CaseStudyPage study={study} />; }
