import type { Metadata } from "next";
import CaseStudyPage, { caseStudyMetadata, type CaseStudy } from "../../components/CaseStudyPage";

const study: CaseStudy = {
  slug: "cylindrical-perfume-tube-packaging-project",
  title: "Cylindrical Perfume Tube Packaging Project",
  description: "A capability case study of cylindrical tube packaging for perfume and fragrance presentation, using existing SORIVA tube packaging imagery and neutral project language.",
  image: "/img/project-perfume.webp",
  imageAlt: "Cylindrical perfume tube packaging project reference",
  industry: "Perfume & Fragrance",
  structure: "Custom Cylindrical Telescopic Tube",
  materials: "Paperboard Tube + Specialty Paper Wrap",
  finishing: "Metallic Foil Stamping + Matte Lamination",
  insert: "EVA, velvet-covered, paperboard or molded pulp insert options",
  market: "Global Fragrance & Retail Presentation",
  challenge: "Develop a distinctive cylindrical packaging route for a perfume presentation while keeping the tube dimensions, opening style and internal fit aligned with the actual product.",
  solution: "The capability route combines a paperboard tube core with a tailored outer wrap, selected lid structure and product-fit review. CMYK or Pantone printing, foil, embossing, debossing, spot UV and lamination can be evaluated according to the project brief.",
  benefits: [
    "Cylindrical silhouette for differentiated fragrance presentation",
    "Custom diameter, height and lid clearance planning",
    "Neutral insert options selected according to project requirements",
    "Prototype review for structure, artwork and product fit",
  ],
  productHref: "/products/tube-packaging/",
  productLabel: "Explore Tube Packaging",
  industryHref: "/industries/perfume-packaging/",
  industryLabel: "Perfume Packaging Industry",
  message: "Hello SORIVA Packaging, I reviewed your cylindrical perfume tube packaging project and would like to discuss a similar custom packaging development.",
};

export const metadata: Metadata = {
  ...caseStudyMetadata(study),
  title: { absolute: "Cylindrical Perfume Tube Packaging Project | SORIVA Packaging" },
};

export default function Page() { return <CaseStudyPage study={study} />; }
