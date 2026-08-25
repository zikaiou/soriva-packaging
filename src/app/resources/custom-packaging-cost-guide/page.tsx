import type { Metadata } from "next";
import HighIntentGuidePage, { guideMetadata, type HighIntentGuide } from "../../components/HighIntentGuidePage";

const guide: HighIntentGuide = {
  pageUrl: "https://sorivapackaging.com/resources/custom-packaging-cost-guide/",
  title: "How Much Does Custom Luxury Packaging Cost?",
  description: "A buyer guide to custom rigid box pricing, including size, materials, inserts, finishes, quantity and shipping.",
  eyebrow: "PRICING & PLANNING",
  intro: "Custom luxury packaging has no single fixed price because each project has different dimensions, structures, materials, finishes and quantities.",
  sections: [
    { heading: "8 Main Cost Factors", table: { headers: ["Factor", "Impact"], rows: [["Dimensions", "Larger boxes use more board, wrap material and carton space."], ["Structure", "Magnetic, drawer, foldable and two-piece boxes require different processes."], ["Board thickness", "Heavier products may require stronger rigid board."], ["Surface paper", "Standard and specialty papers vary in cost."], ["Printing", "CMYK, Pantone and special colors affect setup."], ["Finishing", "Foil, embossing, debossing and UV add processes."], ["Insert", "EVA, velvet, paperboard and molded pulp vary in cost."], ["Quantity", "Higher quantities usually spread setup costs more efficiently."]] } },
    { heading: "Unit Price vs Total Landed Cost", body: "International buyers should also compare export cartons, freight, storage, assembly labor and product protection." },
    { heading: "How to Get an Accurate Quote", bullets: ["Finished dimensions", "Product size and weight", "Structure", "Quantity", "Artwork or reference", "Insert", "Finishes", "Destination", "Timeline"] },
    { heading: "How to Control Cost Without Looking Cheap", bullets: ["Use fewer finishes more intentionally", "Optimize dimensions", "Choose the right insert", "Match quantity to launch stage"] },
  ],
  buyerTip: "For export-heavy projects, compare traditional rigid boxes with foldable rigid structures before finalizing the packaging system.",
  checklist: ["Finished dimensions", "Product size and weight", "Structure", "Quantity", "Artwork/reference", "Insert", "Finishes", "Destination", "Timeline"],
  faqs: [
    { question: "Why is there no fixed price?", answer: "Because size, structure, material, finish, insert and quantity differ by project." },
    { question: "Does higher quantity lower unit cost?", answer: "Often yes, because setup costs are spread across more units." },
    { question: "Should freight be considered?", answer: "Yes. Carton volume, shipping and storage affect total landed cost." },
    { question: "What is needed for a quote?", answer: "Dimensions, structure, quantity, artwork or reference, insert, destination and timeline." },
  ],
};

export const metadata: Metadata = guideMetadata(guide);
export default function Page() { return <HighIntentGuidePage guide={guide} />; }
