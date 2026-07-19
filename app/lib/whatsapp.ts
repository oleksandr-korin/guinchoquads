import { site } from "@/app/lib/site";

// Locale-aware pre-fill copy for WhatsApp "Send a message" CTAs.
// Kept here (not in the i18n dictionary) because it stays short, is
// used by a client component that doesn't have direct access to the
// per-page dictionary, and needs to stay in sync with the phone number
// in site.ts.

const PREFILLS: Record<string, string> = {
  en: "Hi Arlindo, I'd like to enquire about a tour.",
  pt: "Olá Arlindo, gostaria de saber mais sobre um passeio.",
  fr: "Bonjour Arlindo, je souhaiterais me renseigner sur une excursion.",
};

const LABELS: Record<string, string> = {
  en: "WhatsApp",
  pt: "WhatsApp",
  fr: "WhatsApp",
};

const ARIA: Record<string, string> = {
  en: "Open WhatsApp to message Guincho Adventours",
  pt: "Abrir o WhatsApp para enviar mensagem à Guincho Adventours",
  fr: "Ouvrir WhatsApp pour envoyer un message à Guincho Adventours",
};

const INLINE_LABELS: Record<string, string> = {
  en: "or on WhatsApp →",
  pt: "ou por WhatsApp →",
  fr: "ou par WhatsApp →",
};

export function whatsappInlineLabel(locale: string): string {
  return INLINE_LABELS[locale] ?? INLINE_LABELS.en;
}

export function whatsappNumber(): string {
  // wa.me requires the international number without leading + or spaces.
  return site.phones.mobile.replace(/[^\d]/g, "");
}

export function whatsappUrl(locale: string, topic?: string): string {
  const base = PREFILLS[locale] ?? PREFILLS.en;
  const text = topic ? `${base} (${topic})` : base;
  return `https://wa.me/${whatsappNumber()}?text=${encodeURIComponent(text)}`;
}

export function whatsappLabel(locale: string): string {
  return LABELS[locale] ?? LABELS.en;
}

export function whatsappAriaLabel(locale: string): string {
  return ARIA[locale] ?? ARIA.en;
}
