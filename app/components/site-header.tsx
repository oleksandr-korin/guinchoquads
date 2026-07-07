import Link from "next/link";
import { photos } from "@/data/photos";

// Slim header used by sub-pages. The homepage has its own richer header
// (nav + mobile menu). Sub-pages only need logo + "Back to site".
export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md border-b border-white/5">
      <div className="container-wrap flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photos.logo.src}
            alt={photos.logo.alt}
            className="h-10 w-auto"
          />
        </Link>
        <nav className="flex items-center gap-6 text-sm text-foreground/80">
          <Link href="/#experiences" className="hover:text-foreground hidden sm:inline">
            All tours
          </Link>
          <Link href="/#contact" className="btn btn-primary">
            Book a tour
          </Link>
        </nav>
      </div>
    </header>
  );
}
