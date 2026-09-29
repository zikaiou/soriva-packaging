import type { Metadata } from "next";
import CaseStudyPage, { caseStudyMetadata, type CaseStudy } from "../../components/CaseStudyPage";

const study: CaseStudy = {
  slug: "jewelry-two-piece-rigid-box-project",
  title: "Jewelry Two-Piece Rigid Box Project",
  description:
    "A capability case study of a custom jewelry two-piece rigid box project featuring compact lid and base structure, velvet insert with ring slits and foil branding.",
  image: "/img/project-jewelry.webp",
  imageAlt: "Jewelry two-piece rigid box packaging project reference",
  industry: "Fine Jewelry & Watches",
  structure: "Compact Two-Piece Lift-Off Lid Rigid Box",
  materials: "Rigid Greyboard + Dyed Black Textured Paper",
  finishing: "Metallic Gold Hot Foil Stamping + Velvet Matte Lamination",
  insert: "Precision Velvet-Lined EVA Foam with Ring & Earring Slits",
  market: "Global Boutique Jewelry Brands",
  challenge:
    "Design a compact, elegant two-piece jewelry box that showcases delicate jewelry centered upon opening while maintaining sharp, crisp box edges.",
  solution:
    "Manufactured with rigid greyboard wrapped in dyed black textured paper, paired with a plush velvet-flocked EVA tray custom-slotted for rings and pendants. The lift-off lid provides a timeless unboxing reveal with clean foil-stamped branding.",
  benefits: [
    "Classic lift-off lid presentation for fine jewelry and luxury accessories",
    "Custom-cut velvet insert keeps delicate jewelry centered",
    "Sharp V-grooved edges and premium tactile paper wrap",
    "Compact proportions ideal for retail and boutique gifting",
  ],
  productHref: "/products/two-piece-rigid-boxes/",
  productLabel: "View Two-Piece Rigid Boxes",
  industryHref: "/industries/jewelry-packaging/",
  industryLabel: "View Jewelry Packaging",
  message:
    "Hello SORIVA Packaging, I reviewed your jewelry two-piece rigid box project and would like to discuss a custom jewelry box development.",
};

export const metadata: Metadata = {
  ...caseStudyMetadata(study),
  title: {
    absolute: "Jewelry Two-Piece Rigid Box Project | Luxury Jewelry Packaging | SORIVA Packaging",
  },
};

export default function Page() {
  return <CaseStudyPage study={study} />;
}
