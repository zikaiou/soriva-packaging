import type { Metadata } from "next";
import TubeSolutionPage, { tubeSolutionMetadata, type TubeSolutionData } from "../../components/TubeSolutionPage";

const page: TubeSolutionData = {
  pageUrl: "https://www.sorivapackaging.com/solutions/tube-packaging-for-perfume/",
  title: "Tube Packaging for Perfume | Custom Cylindrical Perfume Boxes | SORIVA Packaging",
  description: "Custom tube packaging for perfume and fragrance bottles with tailored diameter, height, opening structures, inserts, Pantone color matching and luxury finishing.",
  eyebrow: "FRAGRANCE & PERFUME TUBE PACKAGING",
  image: "/img/project-perfume.webp",
  imageAlt: "Custom cylindrical tube packaging for perfume and fragrance bottles",
  message: "Hello SORIVA Packaging, I am interested in custom tube packaging for perfume and would like to discuss size, structure, insert, MOQ and pricing.",
  industryHref: "/industries/perfume-packaging/",
  industryLabel: "Perfume Packaging Industry Hub",
  relatedProjectHref: "/projects/cylindrical-perfume-tube-packaging-project/",
  relatedProjectLabel: "Cylindrical Perfume Tube Project",
  buyerGuideHref: "/resources/perfume-packaging-buyer-guide/",
  buyerGuideLabel: "Perfume Packaging Procurement Guide",
  buyerDecisionHeading: "CYLINDRICAL FRAGRANCE DECISION",
  buyerDecisionIntro: "Tube packaging for perfume begins with cylindrical fit rather than a conventional rectangular cavity. The buyer decision is the relationship between bottle diameter, total height, cap clearance and the internal stabilization method. A single bottle may suit a clean telescopic tube, while a discovery set may need an internal tray or paperboard divider that keeps multiple items ordered. The brief should also state whether the tube is intended for boutique retail, a fragrance launch or a gift presentation, because the opening style and surface treatment can change with the use case. Actual bottle measurements or a physical sample should guide the insert and tube dimensions. This makes the tube page a specialist route for round packaging geometry, not a duplicate of magnetic, foldable or two-piece perfume boxes.",
  priorities: [
    { title: "Distinctive Cylindrical Presentation", desc: "Round tube packaging creates a different shelf and unboxing profile for fragrance bottles, discovery sets and premium gift presentations." },
    { title: "Bottle Fit Planning", desc: "Diameter, height, lid clearance and internal cavity dimensions are developed around product measurements or physical samples." },
    { title: "Tube Structure Selection", desc: "Classic, telescopic and shoulder-neck structures can be reviewed according to opening style and presentation requirements." },
    { title: "Color & Surface Control", desc: "Art paper, specialty paper, textured paper or kraft-style wraps can be combined with CMYK or Pantone printing." },
  ],
  structures: [
    { title: "Classic Paper Tube", desc: "Clean cylindrical packaging for single perfume bottles, sample collections and boutique fragrance gifts." },
    { title: "Telescopic Tube", desc: "Separate lid and base construction creates a controlled lift-off opening and premium presentation." },
    { title: "Shoulder-Neck Tube", desc: "An inner shoulder creates a refined visual transition between the lid and lower body." },
    { title: "Custom Insert Tube", desc: "Internal EVA, velvet-covered, paperboard or molded pulp inserts can be selected according to project requirements." },
  ],
  applications: ["Perfume Bottles", "Fragrance Discovery Sets", "Travel Atomizers", "Luxury Scent Gifts"],
  guides: [
    { tag: "Paper & Finishing", title: "Luxury Packaging Paper Types: Art Paper vs Specialty Paper vs Kraft", desc: "Compare wrap options for cylindrical perfume presentation.", href: "/resources/luxury-packaging-paper-types-art-paper-vs-specialty-paper-vs-kraft/" },
    { tag: "Color & Printing", title: "Pantone vs CMYK for Custom Packaging", desc: "Choose a color system for branded perfume tubes and coordinated packaging.", href: "/resources/pantone-vs-cmyk-custom-packaging/" },
    { tag: "RFQ Preparation", title: "How to Prepare an RFQ for Custom Packaging", desc: "Learn which diameter, height, product and quantity details support a useful tube packaging quote.", href: "/resources/how-to-prepare-custom-packaging-rfq/" },
  ],
  faq: [
    { question: "Which bottle measurements are needed for a perfume tube?", answer: "Provide bottle diameter, total height, cap clearance and orientation so the cylindrical cavity and stabilization method can be reviewed." },
    { question: "What is the MOQ for custom perfume tube packaging?", answer: "Selected custom projects can start from 100 pcs, depending on structure, materials, size and finishing." },
    { question: "Can I request a prototype?", answer: "A 1 pc prototype is available for selected projects to review diameter, height, insert fit and surface treatment." },
    { question: "What is the lead time?", answer: "Lead time depends on design complexity, quantity, materials and finishing requirements." },
  ],
};

export const metadata: Metadata = tubeSolutionMetadata(page);
export default function Page() { return <TubeSolutionPage page={page} />; }
