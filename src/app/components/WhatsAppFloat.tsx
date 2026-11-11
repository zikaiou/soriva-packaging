"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { waLink, WA_MESSAGES } from "../lib/whatsapp";

const PRODUCT_MESSAGES: Record<string, string> = {
  "Luxury Paper Bag": WA_MESSAGES.paperBags,
  "Magnetic Rigid Box": WA_MESSAGES.magnetic,
  "Foldable Magnetic Rigid Box": WA_MESSAGES.foldable,
  "Drawer Box": WA_MESSAGES.drawer,
  "Two-Piece Rigid Box": WA_MESSAGES.twoPiece,
  "Jewelry Packaging": WA_MESSAGES.jewelry,
  "Custom Jewelry Box": WA_MESSAGES.customJewelryBoxes,
  "PU Leather Jewelry Box": WA_MESSAGES.puLeatherJewelry,
  "Flip-Top Jewelry Box": WA_MESSAGES.flipTopJewelry,
  "Portable Ring Box": WA_MESSAGES.portableRingBox,
};

const PATH_MESSAGES: Record<string, string> = {
  "/products/luxury-paper-bags/": WA_MESSAGES.paperBags,
  "/products/magnetic-rigid-boxes/": WA_MESSAGES.magnetic,
  "/products/foldable-magnetic-rigid-boxes/": WA_MESSAGES.foldable,
  "/products/drawer-boxes/": WA_MESSAGES.drawer,
  "/products/two-piece-rigid-boxes/": WA_MESSAGES.twoPiece,
  "/products/custom-jewelry-boxes/": WA_MESSAGES.customJewelryBoxes,
  "/products/pu-leather-jewelry-boxes/": WA_MESSAGES.puLeatherJewelry,
  "/products/flip-top-jewelry-boxes/": WA_MESSAGES.flipTopJewelry,
  "/products/portable-ring-box/": WA_MESSAGES.portableRingBox,
  "/industries/jewelry-packaging/": WA_MESSAGES.jewelry,
};

export default function WhatsAppFloat() {
  const pathname = usePathname();
  const [message, setMessage] = useState(WA_MESSAGES.home);

  useEffect(() => {
    const path = pathname === "/" ? "/" : `${pathname?.replace(/\\/+$/, "") || ""}/`;
    const requestedProduct = new URLSearchParams(window.location.search).get("product") || "";
    const contextualMessage =
      path === "/rfq/"
        ? PRODUCT_MESSAGES[requestedProduct]
        : PATH_MESSAGES[path];

    setMessage(contextualMessage || WA_MESSAGES.home);
  }, [pathname]);

  return (
    <a
      className="whatsapp-float"
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SORIVA Packaging on WhatsApp"
    >
      <span>WhatsApp</span>
      <b>Chat Now</b>
    </a>
  );
}
