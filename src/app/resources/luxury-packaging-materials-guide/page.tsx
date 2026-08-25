import type { Metadata } from "next";
import HighIntentGuidePage, { guideMetadata, type HighIntentGuide } from "../../components/HighIntentGuidePage";

const guide: HighIntentGuide = {
  pageUrl: "https://sorivapackaging.com/resources/luxury-packaging-materials-guide/",
  title: "Luxury Packaging Materials: A Buyer’s Guide",
  description: "Compare rigid greyboard, specialty paper, textured paper, fabric wraps and common insert materials for premium packaging.",
  eyebrow: "MATERIALS & FINISHES",
  intro: "Luxury packaging usually combines a structural board, an exterior wrap and an internal insert.",
  sections: [
    { heading: "Rigid Greyboard", body: "Greyboard creates the stiffness and shape of rigid boxes. Thickness should match product weight, box size and the desired feel." },
    { heading: "Exterior Wrap Materials", table: { headers: ["Material", "Best For", "Characteristic"], rows: [["Coated art paper", "Printed branding", "Good printability"], ["Specialty paper", "Luxury packaging", "Distinct texture or surface"], ["Textured paper", "Minimal premium brands", "Tactile appearance"], ["Kraft-style paper", "Natural positioning", "Organic visual language"], ["Fabric wrap", "Jewelry and special editions", "High-touch presentation"]] } },
    { heading: "Insert Materials", table: { headers: ["Insert", "Common Uses"], rows: [["EVA", "Perfume bottles, cosmetics, premium sets"], ["Velvet-covered EVA", "Jewelry, watches, fragrance"], ["Paperboard", "Cosmetics, skincare, gifting"], ["Molded pulp", "Protection and selected sustainability-focused projects"]] } },
    { heading: "How Finishes Interact With Materials", body: "Foil, embossing, debossing, UV and lamination behave differently on smooth and textured papers, so testing matters." },
  ],
  buyerTip: "Physical samples and prototypes reveal texture and color differences that screens cannot show accurately.",
  checklist: ["Product weight", "Fragility", "Target retail price", "Brand style", "Print quality", "Insert protection", "Shipping method", "Sustainability goals"],
  faqs: [
    { question: "What does greyboard do?", answer: "It forms the structural core of many rigid boxes." },
    { question: "Which insert works for perfume?", answer: "EVA, velvet-covered EVA, paperboard and molded pulp can all be suitable." },
    { question: "Can textured paper be foil stamped?", answer: "Often yes, but the material should be tested." },
    { question: "Can materials support sustainability goals?", answer: "Yes. Paper choice, insert material and plastic reduction can be considered early in development." },
  ],
};

export const metadata: Metadata = guideMetadata(guide);
export default function Page() { return <HighIntentGuidePage guide={guide} />; }
