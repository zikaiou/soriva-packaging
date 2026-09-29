import type { Metadata } from "next";
import CaseStudyPage, { caseStudyMetadata, type CaseStudy } from "../../components/CaseStudyPage";

const study: CaseStudy = {
  slug: "luxury-tube-gift-packaging-project",
  title: "Luxury Tube Gift Packaging Project",
  description: "A capability case study of luxury cylindrical tube gift packaging for selected retail and gifting applications, using existing SORIVA tube, gift and product imagery.",
  image: "/img/tube-packaging.webp",
  imageAlt: "Luxury cylindrical tube gift packaging project reference",
  industry: "Premium Gifts & Specialty Retail",
  structure: "Custom Cylindrical Tube with Lift-Off Lid",
  materials: "Paperboard Tube + Art or Specialty Paper Wrap",
  finishing: "Foil Stamping + Embossing / Debossing + Lamination Options",
  insert: "EVA, velvet-covered, paperboard or molded pulp insert options",
  market: "Global Gift, Beauty and Specialty Retail",
  challenge: "Create a premium cylindrical gift packaging format that can be adapted to different product dimensions, opening styles and brand surface treatments.",
  solution: "The capability route reviews the tube diameter, height, lid structure and internal support around the selected product. Paper materials, CMYK or Pantone printing and luxury finishing are coordinated during sample and fit review.",
  benefits: [
    "Distinctive round format for gift and specialty retail presentation",
    "Structure and insert planning based on actual product requirements",
    "Flexible paper, color and finishing combinations",
    "Capability language maintained without invented clients or results",
  ],
  productHref: "/products/tube-packaging/",
  productLabel: "View Tube Packaging Product",
  industryHref: "/custom-packaging/",
  industryLabel: "Custom Packaging System",
  message: "Hello SORIVA Packaging, I reviewed your luxury tube gift packaging project and would like to discuss a similar custom packaging development.",
};

export const metadata: Metadata = {
  ...caseStudyMetadata(study),
  title: { absolute: "Luxury Tube Gift Packaging Project | Custom Cylindrical Packaging | SORIVA Packaging" },
};

export default function Page() { return <CaseStudyPage study={study} />; }
