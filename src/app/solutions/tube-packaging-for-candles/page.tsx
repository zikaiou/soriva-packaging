import type { Metadata } from "next";
import TubeSolutionPage, { tubeSolutionMetadata, type TubeSolutionData } from "../../components/TubeSolutionPage";

const page: TubeSolutionData = {
  pageUrl: "https://www.sorivapackaging.com/solutions/tube-packaging-for-candles/",
  title: "Tube Packaging for Candles | Custom Luxury Candle Tubes | SORIVA Packaging",
  description: "Custom luxury tube packaging for candles, jar candles, diffusers and home fragrance gifts with tailored cylindrical structure, product fit, paper wraps and premium finishing.",
  eyebrow: "CANDLE & HOME FRAGRANCE TUBE PACKAGING",
  image: "/img/candles.webp",
  imageAlt: "Custom cylindrical tube packaging for candles and home fragrance products",
  message: "Hello SORIVA Packaging, I am interested in custom tube packaging for candles and would like to discuss size, structure, insert, MOQ and pricing.",
  industryHref: "/industries/candle-packaging/",
  industryLabel: "Candle Packaging Industry Hub",
  buyerDecisionHeading: "CANDLE VESSEL DECISION",
  buyerDecisionIntro: "Candle tube packaging is driven by the vessel rather than by a standard gift-box format. The buyer decision is jar diameter, total height, lid clearance and the base support needed for a stable retail or gift presentation. A single candle may use a simple cylindrical cavity, while a candle and diffuser set may need a tray or divider that separates the vessels. The sourcing brief should identify the vessel material, approximate filled weight, collection format and whether the tube will be displayed in a boutique, shipped as a gift or used for a seasonal launch. Surface paper and finishing can then be coordinated with the scent collection without changing the structural purpose. Reviewing the actual jar or an approved sample helps keep the tube route distinct from rectangular candle boxes and general home-fragrance packaging.",
  priorities: [
    { title: "Distinctive Candle Presentation", desc: "Cylindrical tubes create a recognizable format for jar candles, diffuser sets and home fragrance gift packaging." },
    { title: "Product Fit Planning", desc: "Diameter, height, lid clearance and interior support are reviewed around the actual candle vessel or gift set." },
    { title: "Surface & Scent Branding", desc: "Paper wraps, Pantone colors, foil and tactile finishes help communicate the visual language of a candle collection." },
    { title: "Gift-Ready Opening", desc: "Classic, telescopic and shoulder-neck structures can be selected according to the intended unboxing and retail presentation." },
  ],
  structures: [
    { title: "Classic Candle Tube", desc: "Clean cylindrical packaging for single jar candles and home fragrance products." },
    { title: "Telescopic Candle Tube", desc: "Separate lid and base construction for a controlled lift-off opening and gift presentation." },
    { title: "Shoulder-Neck Tube", desc: "Inner shoulder construction creates a refined transition between the lid and lower tube body." },
    { title: "Insert Candle Tube", desc: "EVA, velvet-covered, paperboard or molded pulp inserts can be selected according to project requirements." },
  ],
  applications: ["Jar Candles", "Luxury Candle Sets", "Diffusers", "Home Fragrance Gifts"],
  guides: [
    { tag: "Packaging Inserts", title: "EVA vs Paperboard vs Molded Pulp Packaging Inserts", desc: "Compare insert options for candle vessels and home fragrance gift sets.", href: "/resources/packaging-inserts-eva-vs-paperboard-vs-molded-pulp/" },
    { tag: "Paper Materials", title: "Luxury Packaging Paper Types: Art Paper vs Specialty Paper vs Kraft", desc: "Review paper wrap choices for candle tube packaging.", href: "/resources/luxury-packaging-paper-types-art-paper-vs-specialty-paper-vs-kraft/" },
    { tag: "Cost Planning", title: "Custom Packaging Cost Breakdown", desc: "Understand the main factors behind custom tube packaging costs.", href: "/resources/custom-packaging-cost-breakdown/" },
  ],
  faq: [
    { question: "How should a candle tube fit the jar?", answer: "Provide jar diameter, total height, lid clearance and approximate filled weight so base support and cavity fit can be reviewed." },
    { question: "What is the MOQ for custom candle tube packaging?", answer: "Selected custom projects can start from 100 pcs, depending on structure, materials, size and finishing." },
    { question: "Can I request a prototype?", answer: "A 1 pc prototype is available for selected projects to review jar fit, opening style and finishing." },
    { question: "What is the lead time?", answer: "Lead time depends on design complexity, quantity, materials and finishing requirements." },
  ],
};

export const metadata: Metadata = tubeSolutionMetadata(page);
export default function Page() { return <TubeSolutionPage page={page} />; }
