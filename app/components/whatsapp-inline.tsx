import { defaultLocale, type Locale } from "@/app/lib/i18n";
import {
  whatsappUrl,
  whatsappAriaLabel,
  whatsappInlineLabel,
} from "@/app/lib/whatsapp";

type Props = {
  locale?: Locale;
  topic?: string;
  // Where on the page the link lives, so we can slice conversions by
  // section in GA4 (e.g. hero, prices, contact).
  source: string;
  className?: string;
};

// Small text link that sits directly under a primary Book / Enquire CTA
// and gives the visitor the WhatsApp alternative at the exact moment of
// intent. No modal, no extra clicks for the decisive user.
export function WhatsappInline({
  locale = defaultLocale,
  topic,
  source,
  className = "",
}: Props) {
  const href = whatsappUrl(locale, topic);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={whatsappAriaLabel(locale)}
      data-track="whatsapp_click"
      data-track-params={`{"cta_source":"${source}"}`}
      className={
        "inline-flex items-center text-sm text-foreground/70 hover:text-accent transition underline-offset-4 hover:underline " +
        className
      }
    >
      {whatsappInlineLabel(locale)}
    </a>
  );
}
