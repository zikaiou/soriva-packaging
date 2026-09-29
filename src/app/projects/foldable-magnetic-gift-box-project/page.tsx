import type { Metadata } from "next";
import CaseStudyPage, { caseStudyMetadata, type CaseStudy } from "../../components/CaseStudyPage";

const study: CaseStudy = {
  slug: "foldable-magnetic-gift-box-project",
  title: "Foldable Magnetic Gift Box Project",
  description:
    "A capability case study of a custom foldable magnetic rigid gift box project featuring flat-pack engineering, concealed magnetic closure and custom foam inserts.",
  image: "/img/foldable-rigid.webp",
  imageAlt: "Custom foldable magnetic rigid gift box project reference",
  industry: "Luxury Retail & Gifting",
  structure: "Collapsible Foldable Magnetic Rigid Box",
  materials: "Rigid Greyboard + Specialty Soft-Touch Wrapped Paper",
  finishing: "Metallic Gold Hot Foil Stamping + Soft-Touch Matte Lamination",
  insert: "Custom-Cut EVA Foam Insert with Velvet Flocking",
  market: "Global Retail & Boutique Distribution",
  challenge:
    "Deliver a luxury rigid gift box that preserves structural rigidity and an acoustic magnetic snap while folding flat for efficient export transport and compact warehouse storage.",
  solution:
    "Engineered using rigid greyboard with precision V-grooved folding hinges and concealed magnetic closure inside the front flap. The box ships flat and pops up securely via 4 peel-and-stick corner adhesive tabs. Finished in soft-touch matte wrap with precision gold foil branding.",
  benefits: [
    "Foldable structures can improve packing efficiency and reduce shipping volume for suitable projects.",
    "Smooth magnetic closure with concealed magnets",
    "Soft-touch tactile finish with protective surface lamination",
    "Intuitive pop-up assembly for fast fulfillment",
  ],
  productHref: "/products/foldable-magnetic-rigid-boxes/",
  productLabel: "Explore Foldable Magnetic Boxes",
  industryHref: "/custom-packaging/",
  industryLabel: "Custom Packaging System",
  message:
    "Hello SORIVA Packaging, I reviewed your foldable magnetic gift box project and would like to discuss a custom packaging development.",
};

export const metadata: Metadata = {
  ...caseStudyMetadata(study),
  title: {
    absolute: "Foldable Magnetic Gift Box Project | Flat-Pack Rigid Packaging | SORIVA Packaging",
  },
};

export default function Page() {
  return <CaseStudyPage study={study} />;
}
