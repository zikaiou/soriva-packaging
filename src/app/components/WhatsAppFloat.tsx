"use client";

import { useEffect, useState } from "react";
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

function messageForLocation(pathname: string, search: string) {
  const path = !pathname || pathname === "/" ? "/" : pathname.endsWith("/") ? pathname : `${pathname}/`;
  const requestedProduct = new URLSearchParams(search).get("product") || "";
  if (path === "/rfq/" && PRODUCT_MESSAGES[requestedProduct]) {
    return PRODUCT_MESSAGES[requestedProduct];
  }
  return PATH_MESSAGES[path] || WA_MESSAGES.home;
}


export default function WhatsAppFloat() {
  const [message, setMessage] = useState(WA_MESSAGES.home);

  useEffect(() => {
    setMessage(messageForLocation(window.location.pathname, window.location.search));
  }, []);

  return (
    <a
      className="whatsapp-float"
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SORIVA Packaging on WhatsApp"
      onClick={(event) => {
        event.currentTarget.href = waLink(
          messageForLocation(window.location.pathname, window.location.search)
        );
      }}
    >
      <span>WhatsApp</span>
      <b>Chat Now</b>
    </a>
  );
}
