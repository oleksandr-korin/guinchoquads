"use client";

import { useEffect, useState } from "react";

type Choice = "accepted" | "rejected";
const STORAGE_KEY = "consent-v1";

function setConsent(choice: Choice) {
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag === "function") {
    w.gtag("consent", "update", {
      ad_storage: "denied",
      analytics_storage: choice === "accepted" ? "granted" : "denied",
      functionality_storage: choice === "accepted" ? "granted" : "denied",
      personalization_storage: choice === "accepted" ? "granted" : "denied",
    });
  }
  localStorage.setItem(STORAGE_KEY, choice);
}

export function ConsentBanner({ enabled }: { enabled: boolean }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const existing = localStorage.getItem(STORAGE_KEY) as Choice | null;
    if (existing) {
      // Re-apply the stored consent so gtag knows.
      setConsent(existing);
      return;
    }
    setVisible(true);
  }, [enabled]);

  if (!enabled || !visible) return null;

  function choose(choice: Choice) {
    setConsent(choice);
    setVisible(false);
    // Lets other bottom-sheet UI (language hint) wait its turn.
    window.dispatchEvent(new Event("consent-chosen"));
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-sm z-[80] rounded-2xl border border-border bg-background/95 backdrop-blur-lg shadow-2xl p-5"
    >
      <div className="text-sm text-foreground/85 leading-relaxed">
        We use analytics cookies to see which tours people click on. Nothing
        else. You can say no and browse as normal.{" "}
        <a
          href="/privacy"
          className="underline decoration-accent underline-offset-4 hover:text-accent"
        >
          Learn more
        </a>
        .
      </div>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => choose("rejected")}
          className="btn btn-secondary flex-1"
        >
          No thanks
        </button>
        <button
          type="button"
          onClick={() => choose("accepted")}
          className="btn btn-primary flex-1"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
