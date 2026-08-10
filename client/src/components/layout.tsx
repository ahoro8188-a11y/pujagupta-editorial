/*
 * DESIGN: "The Margin Notes" — shared layout primitives.
 * Nav: cream, serif nav with script wordmark; links get a hand-drawn swash underline on hover.
 * Marquee: slow editorial strip in mono, sage on deep ink band.
 * Footer: deep ink band, script name, quiet mono links.
 */
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { ASSETS, marqueeWords, navLinks } from "@/lib/content";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <span className="fixed top-0 left-0 right-0 z-[60] h-[3px] pointer-events-none">
      <span
        className="block h-full origin-left"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, var(--plum), var(--terracotta), var(--gold))",
          transition: "width 100ms linear",
        }}
      />
    </span>
  );
}

export function InkSwash({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 14" className={className} fill="none" aria-hidden="true">
      <path
        d="M2 9 Q 30 3, 60 8 T 118 7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.97_0.015_85/0.92)] backdrop-blur-md shadow-[0_1px_0_oklch(0.86_0.02_80)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Scroll progress indicator */}
        <ScrollProgress />
        <div className="absolute left-0 right-0 bottom-0 h-px bg-border" />
        <Link href="/" className="group flex items-baseline gap-2">
          <img
            src={ASSETS.logo}
            alt=""
            className="h-9 w-9 transition-transform duration-300 group-hover:rotate-[12deg]"
          />
          <span className="font-script text-2xl leading-none text-ink">
            Puja Gupta
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`swash-link font-mono text-[0.72rem] tracking-[0.14em] uppercase text-ink/80 hover:text-ink transition-colors ${
                location === l.href ? "active text-ink" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border bg-background/97 backdrop-blur-md">
          <div className="container flex flex-col py-4 gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`py-2.5 font-mono text-xs tracking-[0.14em] uppercase text-ink/80 hover:text-ink transition-colors ${
                  location === l.href ? "text-terracotta" : ""
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export function Marquee() {
  const words = marqueeWords;
  const row = (
    <span className="flex shrink-0 items-center">
      {words.map((w) => (
        <span key={w} className="flex items-center">
          <span className="font-mono text-xs tracking-[0.25em] uppercase px-8">
            {w}
          </span>
          <span className="text-terracotta text-[0.6rem]">✦</span>
        </span>
      ))}
    </span>
  );
  return (
    <div
      className="bg-[oklch(0.28_0.02_60)] text-[oklch(0.93_0.015_85)] overflow-hidden py-3 whitespace-nowrap"
      aria-hidden="true"
    >
      <div className="marquee-strip hover:[animation-play-state:paused] flex w-max">
        {row}
        {row}
        {row}
        {row}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[oklch(0.28_0.02_60)] text-[oklch(0.93_0.015_85)]">
      <div className="container py-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <p className="font-script text-4xl mb-3">Puja Gupta</p>
            <p className="font-mono text-[0.68rem] tracking-[0.2em] uppercase opacity-70">
              Editor · Poet · Author Consultant
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            <Link
              href="/testimonials"
              className="font-mono text-[0.7rem] tracking-[0.14em] uppercase opacity-80 hover:opacity-100 hover:text-[oklch(0.7_0.06_145)] transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="/contact"
              className="font-mono text-[0.7rem] tracking-[0.14em] uppercase opacity-80 hover:opacity-100 hover:text-[oklch(0.7_0.06_145)] transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="font-mono text-[0.7rem] tracking-[0.14em] uppercase opacity-80 hover:opacity-100 hover:text-[oklch(0.7_0.06_145)] transition-colors"
            >
              Blog
            </Link>
          </nav>
        </div>
        <div className="mt-10 pt-6 border-t border-[oklch(1_0_0/0.12)] flex flex-col sm:flex-row justify-between gap-2 font-mono text-[0.65rem] tracking-[0.14em] uppercase opacity-50">
          <span>© 2026 Puja Gupta</span>
          <span>Shaping stories worth reading</span>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
