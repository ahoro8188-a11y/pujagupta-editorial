/*
 * DESIGN: "The Margin Notes" — reveal-on-scroll with gentle fade-up (≤600ms ease-out)
 */
import { useEffect, useRef } from "react";

/** Adds .in-view to elements with .reveal when they enter the viewport (stagger via CSS). */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const targets = root.querySelectorAll<HTMLElement>(".reveal");
    if (targets.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.revealDelay;
            if (delay) el.style.transitionDelay = `${delay}ms`;
            el.classList.add("in-view");
            observer.unobserve(el);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    targets.forEach((target, index) => {
      if (!target.dataset.revealDelay) {
        target.style.setProperty("--reveal-delay", `${Math.min(index * 60, 240)}ms`);
      }
      observer.observe(target);
    });
    return () => observer.disconnect();
  }, []);

  return ref;
}
