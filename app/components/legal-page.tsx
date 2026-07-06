import Link from "next/link";
import { site } from "@/app/lib/site";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  updated: string;
  children: React.ReactNode;
};

export function LegalPage({ eyebrow, title, updated, children }: Props) {
  return (
    <main className="text-foreground min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md border-b border-white/5">
        <div className="container-wrap flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://storage.googleapis.com/ployai/45579be0-a8f1-4cae-b0f7-129f8514ab2e/user/009b9641-ee6ae7-7ef3d436fbe34776a91961852583e353-mv2.png"
              alt="Guincho Adventours"
              className="h-10 w-auto"
            />
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition"
          >
            ← Back to site
          </Link>
        </div>
      </header>

      <section className="pt-32 pb-24">
        <div className="container-wrap max-w-3xl">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="font-heading uppercase text-4xl md:text-6xl mt-4 leading-[0.95]">
            {title}
          </h1>
          <div className="mt-3 text-sm text-foreground/50">
            Last updated {updated}
          </div>

          <article className="mt-12 text-foreground/85 leading-relaxed space-y-6 [&_h2]:font-heading [&_h2]:uppercase [&_h2]:text-2xl [&_h2]:mt-10 [&_h2]:leading-tight [&_h3]:font-heading [&_h3]:uppercase [&_h3]:text-lg [&_h3]:mt-6 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:underline [&_a]:decoration-accent [&_a]:underline-offset-4 hover:[&_a]:text-accent">
            {children}
          </article>

          <div className="mt-16 border-t border-border pt-8 text-sm text-foreground/60">
            Questions?{" "}
            <a
              className="underline decoration-accent underline-offset-4 hover:text-accent"
              href={`mailto:${site.emails.booking}`}
            >
              {site.emails.booking}
            </a>
            {" · "}
            <a
              className="underline decoration-accent underline-offset-4 hover:text-accent"
              href={`tel:${site.phones.mobile.replace(/\s+/g, "")}`}
            >
              {site.phones.mobile}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
