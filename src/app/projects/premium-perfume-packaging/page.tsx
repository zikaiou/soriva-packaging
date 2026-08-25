import type { Metadata } from "next";
import CaseStudyPage, { caseStudyMetadata, type CaseStudy } from "../../components/CaseStudyPage";

const study: CaseStudy = {
  slug: "premium-perfume-packaging",
  title: "Premium Perfume Packaging Project",
  description: "A premium perfume packaging case study featuring a magnetic rigid box, custom insert and refined finishes for fragrance presentation.",
  image: "/img/project-perfume.webp",
  imageAlt: "Premium perfume packaging project",
  industry: "Fragrance",
  structure: "Magnetic Rigid Box",
  materials: "Rigid greyboard + soft-touch wrapping paper",
  finishing: "Gold foil",
  insert: "Velvet-lined custom insert",
  market: "Global fragrance market",
  challenge: "Protect a glass fragrance bottle while creating a refined opening experience suitable for a premium fragrance launch.",
  solution: "A magnetic rigid box with a custom velvet-lined insert was used to secure the bottle and strengthen the luxury presentation. Foil detailing added visual hierarchy without overcomplicating the exterior.",
  benefits: ["Secure fragrance bottle fit", "Luxury magnetic closure", "Premium tactile surface", "Suitable for gifting and retail launches"],
  productHref: "/products/magnetic-rigid-boxes/",
  productLabel: "View Magnetic Rigid Boxes",
  industryHref: "/industries/perfume-packaging/",
  industryLabel: "View Perfume Packaging",
  message: "Hello SORIVA Packaging, I reviewed your premium perfume packaging case study and would like to discuss a similar custom packaging project.",
};

export const metadata: Metadata = caseStudyMetadata(study);
export default function Page() { return <CaseStudyPage study={study} />; }
