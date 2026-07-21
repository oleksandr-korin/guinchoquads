import { site } from "@/app/lib/site";
import type { Promo } from "@/data/promos";

const GENERIC_TOPIC = "Booking enquiry";

export function mailtoBooking(topic: string, promo?: Promo | null): string {
  // Deduplicate the subject when the caller passed a generic topic —
  // "Booking enquiry: Booking enquiry" was the old default.
  const isGeneric = topic.trim().toLowerCase() === GENERIC_TOPIC.toLowerCase();
  const subject = isGeneric
    ? `Guincho Adventours — ${GENERIC_TOPIC}`
    : `Guincho Adventours — ${GENERIC_TOPIC}: ${topic}`;

  const lines: string[] = ["Hi Arlindo,", ""];
  if (promo?.mailtoLine) {
    lines.push(promo.mailtoLine, "");
  }

  // Prose intro instead of empty labelled fields. Empty "Name:" / "Phone:"
  // stubs previously read as boilerplate to Gmail's spam filter and pushed
  // real bookings into Spam.
  lines.push(
    isGeneric
      ? "I'd like to enquire about a tour with you."
      : `I'd like to enquire about: ${topic}.`,
    "",
    "A few details to help you get back to me quickly:",
    "  • Preferred date(s): ",
    "  • Group size: ",
    "  • Your name: ",
    "  • Contact number: ",
    "",
    "Anything else you'd like to mention:",
    "",
    "",
    "Thanks!",
    "",
    "— Sent from guinchotours.org"
  );

  // RFC 6068: mailto body newlines must be CRLF. Some mail clients
  // (notably Apple Mail on iOS) collapse bare LF into spaces, which
  // flattens the whole template into one line.
  return `mailto:${site.emails.booking}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(lines.join("\r\n"))}`;
}
