"use client";

import { useEffect } from "react";
import { track, type EventName, type EventParams } from "@/app/lib/analytics";

// Listens once at document level. Any element with `data-track="event"`
// (optional `data-track-params='{"source":"hero"}'`) will fire that
// event on click. This keeps the server-rendered page.tsx clean —
// no client-component wrappers around every anchor.
export function AnalyticsClickBridge() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target;
      if (!(target instanceof Element)) return;
      const el = target.closest<HTMLElement>("[data-track]");
      if (!el) return;
      const event = el.dataset.track as EventName | undefined;
      if (!event) return;
      let params: EventParams = {};
      const raw = el.dataset.trackParams;
      if (raw) {
        try {
          params = JSON.parse(raw) as EventParams;
        } catch {
          // Ignore malformed data-track-params — keep the click flowing.
        }
      }
      track(event, params);
    }
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
