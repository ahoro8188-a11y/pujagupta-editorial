/*
 * Back-to-Top Button — elegant floating navigator
 * Appears when scrolling down, smooth float animation, accessible
 */
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when scrolled down more than 300px
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 z-40 p-3 rounded-full bg-sage hover:bg-sage-dark text-primary-foreground transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sage-dark ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      } ${
        prefersReducedMotion ? "" : "group hover:shadow-lg"
      }`}
      style={{
        animation: !prefersReducedMotion && isVisible ? "float 3s ease-in-out infinite" : "none",
      }}
    >
      <ChevronUp className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
    </button>
  );
}
