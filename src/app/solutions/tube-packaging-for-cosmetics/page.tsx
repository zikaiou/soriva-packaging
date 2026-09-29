import type { Metadata } from "next";
import TubeSolutionPage, { tubeSolutionMetadata, type TubeSolutionData } from "../../components/TubeSolutionPage";

const page: TubeSolutionData = {
  pageUrl: "https://www.sorivapackaging.com/solutions/tube-packaging-for-cosmetics/",
  title: "Tube Packaging for Cosmetics | Custom Luxury Cosmetic Tubes | SORIVA Packaging",
  description: "Custom luxury tube packaging for cosmetics, skincare jars, serums and beauty gift sets with tailored product fit, custom inserts, Pantone printing and premium finishes.",
  eyebrow: "COSMETIC & SKINCARE TUBE PACKAGING",
  image: "/img/project-skincare.webp",
  imageAlt: "Custom cylindrical tube packaging for cosmetics and skincare products",
  message: "Hello SORIVA Packaging, I am interested in custom tube packaging for cosmetics and would like to discuss size, structure, insert, MOQ and pricing.",
  industryHref: "/industries/cosmetic-packaging/",
  industryLabel: "Cosmetic Packaging Industry Hub",
  relatedProjectHref: "/projects/luxury-skincare-gift-box/",
  relatedProjectLabel: "Luxury Skincare Project",
  priorities: [
    { title: "Beauty Shelf Differentiation", desc: "Cylindrical packaging creates a distinctive silhouette for skincare, cosmetic and beauty gift-set presentation." },
    { title: "Jar & Bottle Fit", desc: "Tube diameter, height and internal clearance are reviewed around actual jars, bottles, droppers and applicators." },
    { title: "Multi-Product Organization", desc: "Selected inserts and dividers can organize discovery sets, skincare routines and promotional beauty kits." },
    { title: "Premium Surface Options", desc: "Specialty papers, soft-touch wraps, Pantone colors and foil accents can be coordinated with the brand system." },
  ],
  structures: [
    { title: "Classic Cosmetic Tube", desc: "Clean cylindrical packaging for jars, serums, creams and small beauty products." },
    { title: "Telescopic Gift Tube", desc: "Separate lid and base structure for a deliberate opening experience and premium retail presentation." },
    { title: "Shoulder-Neck Tube", desc: "Inner shoulder construction creates a clean lid transition and controlled product fit." },
    { title: "Insert Tube for Beauty Sets", desc: "EVA, velvet-covered, paperboard or molded pulp inserts can be selected according to project requirements." },
  ],
  applications: ["Skincare Jars", "Serum Bottles", "Beauty Discovery Sets", "Cosmetic Gift Kits"],
  guides: [
    { tag: "Packaging Inserts", title: "EVA vs Paperboard vs Molded Pulp Packaging Inserts", desc: "Review insert options for jars, bottles and beauty gift-set presentation.", href: "/resources/packaging-inserts-eva-vs-paperboard-vs-molded-pulp/" },
    { tag: "Materials", title: "Luxury Packaging Paper Types: Art Paper vs Specialty Paper vs Kraft", desc: "Compare surface papers for cosmetic tube packaging.", href: "/resources/luxury-packaging-paper-types-art-paper-vs-specialty-paper-vs-kraft/" },
    { tag: "Sampling", title: "Prototype Sample vs Pre-Production Sample", desc: "Understand what each sample stage can verify before bulk production.", href: "/resources/prototype-sample-vs-pre-production-sample/" },
  ],
  faq: [
    { question: "What cosmetic products can use custom tube packaging?", answer: "Skincare jars, serum bottles, creams, beauty discovery sets and selected cosmetic gift kits can be developed in cylindrical formats." },
    { question: "Can you make inserts for multiple cosmetic items?", answer: "Yes. EVA, velvet-covered, paperboard or molded pulp inserts can be selected according to project requirements." },
    { question: "Can the tube be matched to our brand colors?", answer: "Yes. CMYK or Pantone printing can be reviewed together with the selected outer wrap paper and finishing." },
    { question: "What is the MOQ?", answer: "Selected custom tube packaging projects can start from 100 pcs, depending on structure, materials, size and finishing." },
    { question: "Can I request a prototype before production?", answer: "A 1 pc prototype is available for selected projects to review size, artwork, opening style and product fit." },
    { question: "What is the lead time?", answer: "Lead time depends on design complexity, quantity, materials and finishing requirements." },
  ],
};

export const metadata: Metadata = tubeSolutionMetadata(page);
export default function Page() { return <TubeSolutionPage page={page} />; }
