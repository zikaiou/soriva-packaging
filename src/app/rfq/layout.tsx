import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Custom Packaging Quote | SORIVA Packaging",
  description: "Request a custom packaging quotation from SORIVA. Share size, quantity, materials, finishes, inserts, delivery timeline and reference files.",
  alternates: { canonical: "https://www.sorivapackaging.com/rfq/" },
};

export default function RfqLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
