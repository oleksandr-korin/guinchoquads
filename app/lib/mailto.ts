import { site } from "@/app/lib/site";
import type { Promo } from "@/data/promos";

export function mailtoBooking(topic: string, promo?: Promo | null): string {
  const subject = `Guincho Adventours — Booking enquiry: ${topic}`;
  const lines: string[] = ["Hi Arlindo,", ""];
  if (promo?.mailtoLine) {
    lines.push(promo.mailtoLine, "");
  }
  lines.push(
    `I'd like to book:  ${topic}`,
    "Preferred date:    ",
    "Group size:        ",
    "Name:              ",
    "Phone:             ",
    "",
    "Anything else:",
    "",
    "Thanks!"
  );
  return `mailto:${site.emails.booking}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(lines.join("\n"))}`;
}
