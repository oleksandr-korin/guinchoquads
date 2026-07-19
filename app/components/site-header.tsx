import Link from "next/link";
import { photos } from "@/data/photos";
import { primaryNav } from "@/app/lib/nav";
import { mailtoBooking } from "@/app/lib/mailto";
import { site } from "@/app/lib/site";
import { MobileMenu } from "@/app/components/mobile-menu";
import { LanguageSwitcher } from "@/app/components/language-switcher";

// Slim header used by sub-pages. Same primary nav as the homepage so
// visitors can jump anywhere from anywhere, and Google sees consistent
// internal-link density on every page.
export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md border-b border-white/5">
      <div className="container-wrap flex items-center justify-between h-16 gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photos.logo.src}
            alt={photos.logo.alt}
            className="h-10 w-auto"
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm text-foreground/70 font-medium">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-foreground transition whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher current="en" />
          <a
            href={mailtoBooking("Booking enquiry")}
            data-track="book_click"
            data-track-params='{"source":"subpage_header"}'
            className="btn btn-primary"
          >
            BOOK A TOUR
          </a>
        </div>
        <div className="lg:hidden flex items-center gap-1">
          <LanguageSwitcher current="en" />
          <MobileMenu
            links={primaryNav}
            phone={site.phones.mobile}
            bookHref={mailtoBooking("Booking enquiry")}
          />
        </div>
      </div>
    </header>
  );
}
