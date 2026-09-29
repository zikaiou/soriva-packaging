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
    { question: "What candle products can use custom tube packaging?", answer: "Jar candles, candle gift sets, diffusers and selected home fragrance gifts can be developed in cylindrical tube formats." },
    { question: "Can the tube fit different candle vessel sizes?", answer: "Yes. Diameter, height, lid clearance and insert depth can be developed around the vessel dimensions and presentation requirements." },
    { question: "What insert materials are available?", answer: "EVA, velvet-covered, paperboard or molded pulp inserts can be selected according to project requirements." },
    { question: "What is the MOQ?", answer: "Selected custom tube packaging projects can start from 100 pcs, depending on structure, materials, size and finishing." },
    { question: "Can you provide a prototype?", answer: "A 1 pc prototype is available for selected projects to review structure, product fit, artwork and finishing." },
    { question: "What is the lead time?", answer: "Lead time depends on design complexity, quantity, materials and finishing requirements." },
  ],
};

export const metadata: Metadata = tubeSolutionMetadata(page);
export default function Page() { return <TubeSolutionPage page={page} />; }
