import type { Metadata } from "next";
import CaseStudyPage, { caseStudyMetadata, type CaseStudy } from "../../components/CaseStudyPage";

const study: CaseStudy = {
  slug: "cosmetic-magnetic-packaging-project",
  title: "Cosmetic Magnetic Packaging Project",
  description:
    "A capability case study of a custom cosmetic magnetic gift box project featuring multi-product cavity layout, Pantone color matching, rose gold foil and soft-touch lamination.",
  image: "/img/project-skincare.webp",
  imageAlt: "Custom cosmetic magnetic gift box packaging project reference",
  industry: "Beauty & Skincare",
  structure: "Collapsible Foldable Magnetic Rigid Box with Multi-Product Insert",
  materials: "1.8mm Rigid Greyboard + 157 GSM Coated Art Paper Wrapping",
  finishing: "Pantone (PMS) Spot Color Matching + Rose Gold Hot Foil + Soft-Touch Matte",
  insert: "Multi-Cavity High-Density EVA Foam Insert for Serums, Creams & Applicators",
  market: "Global Beauty, Skincare & Retail Launches",
  challenge:
    "Design a luxury multi-product skincare gift box that holds 3 distinct glass containers securely while reducing international shipping freight volume for large-scale retail distribution.",
  solution:
    "Developed a foldable magnetic rigid structure that ships 100% flat and pops up into a sturdy rigid box in seconds via 4 adhesive corner stickers. The interior features a custom multi-cavity EVA insert tailored around the exact bottle dimensions, finished in cohesive brand Pantone colors with rose gold foil accents.",
  benefits: [
    "80% savings in export shipping volume via flat-pack foldable engineering",
    "Multi-product cavity secures delicate glass bottles firmly during transit",
    "Flawless Pantone brand color fidelity and soft-touch velvet hand feel",
    "Quick and intuitive pop-up assembly for efficient retail packaging",
  ],
  productHref: "/products/foldable-magnetic-rigid-boxes/",
  productLabel: "View Foldable Magnetic Boxes",
  industryHref: "/industries/cosmetic-packaging/",
  industryLabel: "View Cosmetic Packaging",
  message:
    "Hello SORIVA Packaging, I reviewed your cosmetic magnetic packaging project and would like to discuss a custom skincare box development.",
};

export const metadata: Metadata = {
  ...caseStudyMetadata(study),
  title: {
    absolute: "Cosmetic Magnetic Packaging Project | Custom Skincare Gift Box | SORIVA Packaging",
  },
};

export default function Page() {
  return <CaseStudyPage study={study} />;
}
