"use client";
import { useEffect } from "react";

export default function PageEffects() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer || prefersReducedMotion) return;

    const spotlightTargets = document.querySelectorAll<HTMLElement>(".service-card, .principle-card, .product-media, .chip");
    const onSpotlightMove = (e: PointerEvent) => {
      const el = e.currentTarget as HTMLElement;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    spotlightTargets.forEach((el) => {
      el.classList.add("spotlight");
      el.addEventListener("pointermove", onSpotlightMove);
    });

    const tiltTargets = document.querySelectorAll<HTMLElement>(".service-card, .principle-card");
    const onTiltMove = (e: PointerEvent) => {
      const el = e.currentTarget as HTMLElement;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--ry", `${px * 5}deg`);
      el.style.setProperty("--rx", `${py * -5}deg`);
    };
    const onTiltLeave = (e: PointerEvent) => {
      const el = e.currentTarget as HTMLElement;
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    };
    tiltTargets.forEach((el) => {
      el.classList.add("tilt");
      el.addEventListener("pointermove", onTiltMove);
      el.addEventListener("pointerleave", onTiltLeave);
    });

    return () => {
      spotlightTargets.forEach((el) => el.removeEventListener("pointermove", onSpotlightMove));
      tiltTargets.forEach((el) => {
        el.removeEventListener("pointermove", onTiltMove);
        el.removeEventListener("pointerleave", onTiltLeave);
      });
    };
  }, []);
  return null;
}
