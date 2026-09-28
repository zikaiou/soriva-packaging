import type { Metadata } from "next";
import CaseStudyPage, { caseStudyMetadata, type CaseStudy } from "../../components/CaseStudyPage";

const study: CaseStudy = {
  slug: "minimal-luxury-paper-bag-project",
  title: "Minimal Luxury Paper Bag Project",
  description:
    "A minimal luxury paper shopping bag case study featuring 250 GSM coated art paper, embedded satin ribbon handles, gold foil typography and soft-touch matte lamination for boutique retail.",
  image: "/img/sample-paperbag-ribbon-minimal.jpg",
  imageAlt: "Minimal luxury paper bag sample with satin ribbon handles and gold foil typography",
  industry: "Boutique Retail & Cosmetics",
  structure: "Luxury Paper Shopping Bag with Hidden Ribbon Handles",
  materials: "250 GSM Coated Art Paper + Top Turnover & Bottom Greyboard Reinforcement",
  finishing: "Soft-Touch Velvet Matte Lamination + Metallic Gold Hot Foil Stamping",
  insert: "Embedded Satin Ribbon Handles (Hidden Glued Attachment)",
  market: "Global Boutique & Luxury Retail",
  challenge:
    "Create a clean, minimalist retail shopping bag that maintains crisp vertical structure and high weight-bearing durability without visible external knots or metal eyelets.",
  solution:
    "Engineered with 250 GSM high-density art paper with reinforced top turn-over greyboard and bottom card inserts. Embedded satin ribbon handles are glued seamlessly inside the turnover fold. Finished with a soft-touch matte lamination and subtle gold foil typography for an understated luxury aesthetic.",
  benefits: [
    "Clean minimalist exterior without visible knots or eyelets",
    "Reinforced top and bottom boards support boutique merchandise securely",
    "Soft-touch velvet tactile finish with scratch-resistant barrier",
    "Folded flat for space-efficient international shipping and low freight CBM",
  ],
  productHref: "/products/luxury-paper-bags/",
  productLabel: "Explore Luxury Paper Bags",
  industryHref: "/industries/cosmetic-packaging/",
  industryLabel: "View Cosmetic Packaging",
  message:
    "Hello SORIVA Packaging, I reviewed your minimal luxury paper bag project and would like to discuss a similar custom shopping bag development.",
};

export const metadata: Metadata = {
  ...caseStudyMetadata(study),
  title: {
    absolute: "Minimal Luxury Paper Bag Project | Custom Retail Packaging | SORIVA Packaging",
  },
};

export default function Page() {
  return <CaseStudyPage study={study} />;
}
