import type { Metadata } from "next";
import CaseStudyPage, { caseStudyMetadata, type CaseStudy } from "../../components/CaseStudyPage";

const study: CaseStudy = {
  slug: "fine-jewelry-presentation-box",
  title: "Fine Jewelry Presentation Box Project",
  description: "A fine jewelry presentation box case study featuring a drawer structure, velvet and EVA insert solutions and premium retail presentation.",
  image: "/img/project-jewelry.webp",
  imageAlt: "Fine jewelry presentation box project",
  industry: "Jewelry",
  structure: "Drawer Box",
  materials: "Rigid greyboard + specialty paper",
  finishing: "Foil logo + premium wrap",
  insert: "Velvet + EVA",
  market: "Jewelry and watch brands",
  challenge: "Create compact premium packaging that presents small high-value products securely and elegantly.",
  solution: "A sliding drawer structure was paired with a custom velvet-and-EVA insert to hold rings, necklaces or bracelets in position. The structure creates a controlled reveal while keeping the exterior minimal.",
  benefits: ["Sliding premium reveal", "Secure jewelry positioning", "Compact high-value packaging", "Custom insert options for multiple SKUs"],
  productHref: "/products/drawer-boxes/",
  productLabel: "View Drawer Boxes",
  industryHref: "/industries/jewelry-packaging/",
  industryLabel: "View Jewelry Packaging",
  message: "Hello SORIVA Packaging, I reviewed your fine jewelry presentation box case study and would like to discuss a similar custom packaging project.",
};

export const metadata: Metadata = caseStudyMetadata(study);
export default function Page() { return <CaseStudyPage study={study} />; }
