// Typed event vocabulary. Keep it small — GA4 dashboards fragment fast.
export type EventName =
  | "book_click"
  | "pricing_tier_click"
  | "experience_click"
  | "phone_click"
  | "whatsapp_click"
  | "menu_open"
  | "explore_click"
  | "faq_open";

export type EventParams = Record<string, string | number>;

// Client-only. No-op on the server or before gtag is loaded.
export function track(event: EventName, params: EventParams = {}): void {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  };
  if (typeof w.gtag === "function") {
    w.gtag("event", event, params);
    return;
  }
  // Queue on dataLayer if gtag hasn't attached yet.
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
}
