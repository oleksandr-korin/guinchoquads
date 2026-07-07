// Shared nav model — used by both the homepage header (desktop + mobile
// menu) and the SiteHeader on sub-pages. When you edit here it updates
// everywhere.
//
// href prefixed with "/" navigates to that route; "#" is a homepage
// anchor (works from any page — Next.js routes to / then scrolls).

export type NavLink = { href: string; label: string };

export const primaryNav: NavLink[] = [
  { href: "/tours", label: "Tours" },
  { href: "/#prices", label: "Prices" },
  { href: "/#groups", label: "Groups" },
  { href: "/gift-a-tour", label: "Gift a tour" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];
