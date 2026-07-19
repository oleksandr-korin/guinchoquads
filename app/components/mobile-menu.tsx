"use client";

import { useEffect, useState } from "react";
import { track } from "@/app/lib/analytics";

type LinkItem = { href: string; label: string };

type Props = {
  links: LinkItem[];
  phone: string;
  bookHref: string;
  bookLabel?: string;
};

function MenuIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 8h16" />
      <path d="M4 16h16" />
    </svg>
  );
}

function CloseIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function MobileMenu({ links, phone, bookHref, bookLabel = "BOOK A TOUR" }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() =>
          setOpen((v) => {
            if (!v) track("menu_open");
            return !v;
          })
        }
        className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/5 text-foreground"
      >
        {open ? (
          <CloseIcon className="w-6 h-6" />
        ) : (
          <MenuIcon className="w-6 h-6" />
        )}
      </button>

      {open && (
        <div
          className="lg:hidden fixed left-0 right-0 top-16 z-40 bg-background border-b border-border shadow-2xl"
          role="dialog"
          aria-modal="true"
        >
          <nav className="container-wrap flex flex-col divide-y divide-border">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className="py-4 text-base font-medium text-foreground/85 hover:text-accent transition"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="container-wrap py-5 border-t border-border flex flex-col gap-4">
            <a
              href={`tel:${phone.replace(/\s+/g, "")}`}
              onClick={close}
              className="inline-flex items-center gap-3 text-sm font-semibold text-foreground"
            >
              <PhoneIcon className="w-4 h-4 text-accent" />
              {phone}
            </a>
            <a
              href={bookHref}
              onClick={close}
              className="btn btn-primary w-full"
            >
              {bookLabel}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
