import type { Photo } from "@/data/photos";

type Variant = "hero" | "card" | "background" | "portrait";

type Props = {
  photo: Photo;
  variant?: Variant;
  className?: string;
  imgClassName?: string;
  slotLabel?: string;
};

function CameraIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function isReal(photo: Photo) {
  return !photo.placeholder && Boolean(photo.src);
}

export function PhotoSlot({
  photo,
  variant = "card",
  className = "",
  imgClassName = "",
  slotLabel,
}: Props) {
  if (isReal(photo)) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={photo.src}
        alt={photo.alt}
        className={imgClassName || className}
      />
    );
  }

  // Background variant — visible but quiet: dark tinted panel + small tag.
  if (variant === "background") {
    return (
      <div
        aria-label={photo.alt}
        className={
          "absolute inset-0 " +
          "bg-[radial-gradient(ellipse_at_center,rgba(198,255,58,0.06),transparent_60%),linear-gradient(180deg,#0f0f11,#0b0b0c)] " +
          className
        }
      >
        <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-accent/40 bg-background/70 backdrop-blur px-3 py-1.5 text-[10px] uppercase tracking-widest text-accent">
          <CameraIcon className="w-3.5 h-3.5" />
          Photo needed
        </div>
      </div>
    );
  }

  // Hero / card / portrait — foreground placeholder with readable brief.
  const isHero = variant === "hero";
  const isPortrait = variant === "portrait";

  return (
    <div
      role="img"
      aria-label={`Photo needed: ${photo.brief ?? photo.alt}`}
      className={
        "relative flex flex-col items-center justify-center text-center " +
        "bg-[radial-gradient(circle_at_top,rgba(198,255,58,0.08),transparent_55%),linear-gradient(180deg,#111114,#0a0a0b)] " +
        "border border-dashed border-accent/40 " +
        (isHero ? "px-6 py-16 " : "px-5 py-10 ") +
        className
      }
    >
      <CameraIcon
        className={
          "text-accent/80 " + (isHero ? "w-16 h-16" : "w-10 h-10")
        }
      />
      <div
        className={
          "mt-4 uppercase tracking-widest font-semibold text-accent " +
          (isHero ? "text-sm" : "text-[11px]")
        }
      >
        Photo needed
      </div>
      {slotLabel && (
        <div
          className={
            "mt-2 font-heading uppercase leading-tight " +
            (isHero
              ? "text-4xl md:text-5xl"
              : isPortrait
                ? "text-2xl"
                : "text-xl")
          }
        >
          {slotLabel}
        </div>
      )}
      {photo.brief && (
        <p
          className={
            "mt-3 text-foreground/70 leading-relaxed " +
            (isHero ? "text-base max-w-md" : "text-xs max-w-[22ch]")
          }
        >
          {photo.brief}
        </p>
      )}
    </div>
  );
}
