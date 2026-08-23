/**
 * SORIVA Packaging — WhatsApp conversion system
 * All WhatsApp links use wa.me format:
 *   https://wa.me/<number>?text=<url-encoded preset message>
 */
export const WHATSAPP_NUMBER = "8615913881634";

export const WHATSAPP_DISPLAY = "+86 159 1388 1634";

/** Build a wa.me deep link with a preset message. */
export function waLink(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/** Page / section specific preset messages. */
export const WA_MESSAGES = {
  home: "Hello SORIVA Packaging, I would like to discuss a custom packaging project.",
  products:
    "Hello SORIVA Packaging, I'm interested in your custom packaging products. Could you share more details?",
  magnetic:
    "Hello SORIVA Packaging, I would like a quote for custom magnetic rigid boxes.",
  foldable:
    "Hello SORIVA Packaging, I would like a quote for custom foldable magnetic rigid boxes.",
  drawer:
    "Hello SORIVA Packaging, I would like a quote for custom drawer boxes.",
  twoPiece:
    "Hello SORIVA Packaging, I would like a quote for custom two-piece rigid boxes.",
  paperBags:
    "Hello SORIVA Packaging, I would like a quote for custom luxury paper bags.",
  industries:
    "Hello SORIVA Packaging, I need custom packaging for my product category. Could you advise?",
  projects:
    "Hello SORIVA Packaging, I saw your packaging projects and would like to discuss a similar project.",
  factory:
    "Hello SORIVA Packaging, I'd like to learn more about your factory and manufacturing capabilities.",
  contact: "Hello SORIVA Packaging, I have a packaging inquiry.",
  general:
    "Hello SORIVA Packaging, I would like to discuss a custom packaging project.",
} as const;
