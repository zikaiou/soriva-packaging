import type { Metadata } from "next";
import CaseStudyPage, { caseStudyMetadata, type CaseStudy } from "../../components/CaseStudyPage";

const study: CaseStudy = {
  slug: "coordinated-paper-bag-gift-box-packaging",
  title: "Coordinated Paper Bag & Gift Box Packaging Project",
  description:
    "A coordinated packaging case study pairing custom luxury paper shopping bags with matching rigid presentation gift boxes, unified Pantone color fidelity and synchronized foil accents.",
  image: "/img/sample-paperbag-matching-set.jpg",
  imageAlt: "Coordinated custom luxury paper bag and matching rigid gift box packaging suite",
  industry: "Luxury Gifting & Fragrance",
  structure: "Coordinated Rigid Gift Box & Matching Luxury Paper Bag Suite",
  materials: "2.0mm Rigid Greyboard with Textured Wrap & 250 GSM Coated Art Paper Bags",
  finishing: "Pantone (PMS) Color Matching + Precision Hot Foil Stamping + Anti-Scratch Matte",
  insert: "Custom High-Density EVA Foam Insert with Velvet Flocking",
  market: "Global Luxury Gifting & Fragrance",
  challenge:
    "Achieve 100% color and tactile consistency across different packaging formats (rigid presentation box vs. carrier shopping bag) using distinct paper weights and structural constraints.",
  solution:
    "Developed a unified packaging program utilizing Pantone spot ink formulation across both rigid box wrap paper and bag art paper. Coordinated metallic foil dies ensure identical branding scale and optical luster on both the presentation box and carrier bag, complete with custom-slotted ribbon handles.",
  benefits: [
    "Flawless cross-product Pantone color and texture consistency",
    "Complete luxury unboxing experience from outer bag to inner presentation box",
    "Unified metallic hot foil branding and anti-scratch matte protection",
    "Optimized nesting and flat-packed bag shipping for efficient export logistics",
  ],
  productHref: "/products/luxury-paper-bags/",
  productLabel: "Explore Luxury Paper Bags",
  industryHref: "/products/magnetic-rigid-boxes/",
  industryLabel: "View Magnetic Rigid Boxes",
  message:
    "Hello SORIVA Packaging, I reviewed your coordinated paper bag and gift box packaging project and would like to discuss a matching packaging suite.",
};

export const metadata: Metadata = {
  ...caseStudyMetadata(study),
  title: {
    absolute: "Coordinated Paper Bag & Gift Box Packaging Project | SORIVA Packaging",
  },
};

export default function Page() {
  return <CaseStudyPage study={study} />;
}
