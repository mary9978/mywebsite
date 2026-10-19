"use client";

import { useEffect } from "react";

const READY_CLASS = "aos-ready";

export function AosInit() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    import("aos").then(({ default: AOS }) => {
      if (cancelled) return;
      document.documentElement.classList.add(READY_CLASS);
      AOS.init({ duration: 700, easing: "ease-out-cubic", offset: 60, once: true });
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
