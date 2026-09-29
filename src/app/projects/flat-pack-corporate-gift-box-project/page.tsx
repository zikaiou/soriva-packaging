import type { Metadata } from "next";
import CaseStudyPage, { caseStudyMetadata, type CaseStudy } from "../../components/CaseStudyPage";

const study: CaseStudy = {
  slug: "flat-pack-corporate-gift-box-project",
  title: "Flat-Pack Corporate Gift Box Project",
  description:
    "A capability case study of a flat-pack corporate gift box project featuring foldable magnetic construction, multi-item compartment inserts and foil branding.",
  image: "/img/project-gift-clean.webp",
  imageAlt: "Flat-pack corporate gift box packaging project reference",
  industry: "Corporate Gifting & VIP Merchandising",
  structure: "Flat-Pack Foldable Magnetic Presentation Box",
  materials: "Rigid Greyboard + Dyed Black Textured Specialty Paper",
  finishing: "Silver Hot Foil Stamping + Anti-Scratch Matte Lamination",
  insert: "Multi-Compartment EVA Foam Insert with Black Velvet Lining",
  market: "Global Corporate Events & Executive Gifting",
  challenge:
    "Create a corporate presentation gift box that holds 3 varied items securely while minimizing storage space at the client's event venue before distribution.",
  solution:
    "Designed a collapsible foldable magnetic box that delivers flat to the event venue and sets up in seconds. The custom multi-compartment insert cradles each gift item snugly, finished in sophisticated monochromatic black textured paper with crisp silver foil logo accents.",
  benefits: [
    "Foldable structures can improve packing efficiency and reduce shipping volume for suitable projects.",
    "Multi-compartment insert organizes diverse gift items neatly",
    "Sophisticated corporate aesthetic with silver hot foil stamping",
    "Rapid venue assembly with zero tools required",
  ],
  productHref: "/products/foldable-magnetic-rigid-boxes/",
  productLabel: "View Foldable Magnetic Boxes",
  industryHref: "/industries/corporate-gift-packaging/",
  industryLabel: "View Corporate Gift Packaging",
  message:
    "Hello SORIVA Packaging, I reviewed your flat-pack corporate gift box project and would like to discuss a custom event packaging development.",
};

export const metadata: Metadata = {
  ...caseStudyMetadata(study),
  title: {
    absolute: "Flat-Pack Corporate Gift Box Project | Foldable Magnetic Packaging | SORIVA Packaging",
  },
};

export default function Page() {
  return <CaseStudyPage study={study} />;
}
