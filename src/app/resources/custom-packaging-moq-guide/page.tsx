import type { Metadata } from "next";
import HighIntentGuidePage, { guideMetadata, type HighIntentGuide } from "../../components/HighIntentGuidePage";

const guide: HighIntentGuide = {
  pageUrl: "https://sorivapackaging.com/resources/custom-packaging-moq-guide/",
  title: "Custom Packaging MOQ: What Buyers Should Know",
  description: "A practical guide to minimum order quantities, prototype planning and what affects MOQ in custom packaging.",
  eyebrow: "MOQ & ORDERING",
  intro: "MOQ is shaped by structure, materials, printing, finishing, tooling and assembly—not only by supplier policy.",
  sections: [
    { heading: "7 Factors That Affect MOQ", table: { headers: ["Factor", "Why It Matters"], rows: [["Box structure", "Complex structures require more setup and assembly."], ["Custom dimensions", "Unique sizes can require tooling or insert development."], ["Paper", "Specialty papers may have minimum purchasing quantities."], ["Printing", "CMYK and Pantone printing create fixed setup costs."], ["Finishing", "Foil, embossing and UV add extra setup."], ["Insert", "EVA, molded pulp or complex paper inserts may require tooling."], ["Assembly", "Labor-intensive structures affect the practical minimum run."]] } },
    { heading: "Why Small Orders Cost More Per Box", body: "Fixed setup costs are divided across fewer pieces, so unit pricing is usually higher at low quantities." },
    { heading: "Prototype vs MOQ", body: "A prototype is used to verify fit, structure and appearance before mass production. 1 pc prototype available for selected projects." },
    { heading: "When 100–500 pcs Makes Sense", bullets: ["New brand launch", "Market testing", "PR or influencer campaigns", "Limited editions", "Seasonal gifting"] },
  ],
  buyerTip: "Small orders usually have a higher unit cost because setup costs are spread over fewer boxes.",
  checklist: ["Product dimensions", "Target quantity", "Preferred box type", "Reference image or artwork", "Insert requirement", "Destination market", "Target delivery date"],
  faqs: [
    { question: "What is your MOQ?", answer: "Selected custom packaging projects can start from 100 pcs, depending on structure, material and finishing requirements." },
    { question: "Can I order a prototype first?", answer: "Yes. 1 pc prototype available for selected projects." },
    { question: "Why are small orders more expensive?", answer: "Setup costs are divided across fewer units." },
    { question: "Does every box type have the same MOQ?", answer: "No. MOQ can vary by structure, paper, insert and finishing." },
  ],
};

export const metadata: Metadata = guideMetadata(guide);
export default function Page() { return <HighIntentGuidePage guide={guide} />; }
