/*
 * DESIGN: "The Margin Notes" — Published Work.
 * Real content restored from the original site: the Alcove tenure, two poetry
 * collections, the Upwork freelance profile, and the ten bestseller covers —
 * all with their original Amazon / publisher links. No fabricated entries.
 */
import { ExternalLink } from "lucide-react";
import {
  publishedWorks,
  editedBooks,
  type PublishedWork as PublishedWorkItem,
} from "@/lib/content";
import { PageShell } from "@/components/layout";
import { useReveal } from "@/hooks/useReveal";

function WorkEntry({ w, i }: { w: PublishedWorkItem; i: number }) {
  return (
    <article
      className="reveal flex items-baseline gap-6 md:gap-12 py-10 border-t border-border last:border-b group"
      data-reveal-delay={String(i * 70)}
    >
      <span className="font-display text-5xl font-semibold text-terracotta/60 group-hover:text-terracotta transition-colors w-24 shrink-0">
        {String(i + 1).padStart(2, "0")}
      </span>
      <div className="min-w-0">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink group-hover:text-sage-dark transition-colors leading-snug">
          {w.title}
        </h2>
        <p className="font-serif text-base text-muted-foreground mt-3 leading-relaxed">
          {w.description}
        </p>
        {w.href ? (
          <a
            href={w.href}
            target="_blank"
            rel="noopener noreferrer"
            className="swash-link mt-4 inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.14em] uppercase text-ink hover:text-terracotta"
          >
            {w.hrefLabel ?? "View →"} <ExternalLink className="h-3 w-3" />
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default function PublishedWork() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <PageShell>
      <div ref={ref} className="paper-grain">
        <section className="container pt-16 pb-14">
          <div className="flex items-center gap-3 mb-6 reveal">
            <span className="h-px w-10 bg-terracotta" />
            <p className="marginalia">On shelves & in print</p>
          </div>
            <h1 className="reveal font-display text-[3.4rem] sm:text-[5.5rem] leading-[0.95] font-semibold">
            Several years, <span className="ink-gradient italic">250+ books</span>
            </h1>
          <p className="reveal font-serif text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
            From manuscript to market — editing, formatting, and publishing
            across paperback, hardcover, and eBook.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-8 reveal" data-reveal-delay="60">
            <span className="chapter-label">Chapter 03 · Published work</span>
            <span className="stamp-note text-xl">every title with permission</span>
          </div>
        </section>

        {/* ── Her own published work & career ─────────────────────── */}
        <section className="container pb-20">
          {publishedWorks.map((w, i) => (
            <WorkEntry key={w.title} w={w} i={i} />
          ))}
        </section>

        {/* ── The bookshelf: bestsellers she edited ───────────────── */}
        <section className="border-t border-border wash-sage">
          <div className="container py-20">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
              <div className="reveal">
                <p className="marginalia mb-3">Bestsellers edited by me</p>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold">
                  Books I've had the privilege to edit
                </h2>
              </div>
              <span className="reveal stamp-note text-lg hidden sm:inline-block">
                the bookshelf
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
              {editedBooks.map((b, i) => (
                <div
                  key={b.title}
                  className="reveal tilt-card group"
                  data-reveal-delay={String((i % 5) * 60)}
                >
                  {b.href ? (
                    <a
                      href={b.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shimmer-plate block overflow-hidden border border-border"
                    >
                      <img
                        src={b.cover}
                        alt={`${b.title} — book cover`}
                        className="w-full object-cover aspect-[2/3] group-hover:scale-[1.04] transition-transform duration-500"
                        loading="lazy"
                      />
                    </a>
                  ) : (
                    <div className="block overflow-hidden border border-dashed border-terracotta/40 bg-[oklch(0.96_0.015_60)]">
                      <img
                        src={b.cover}
                        alt={`${b.title} — book cover`}
                        className="w-full object-cover aspect-[2/3] opacity-90"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <p className="font-display text-lg font-semibold text-ink mt-4 leading-tight">
                    {b.title}
                  </p>
                  {b.href ? (
                    <a
                      href={b.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[0.66rem] tracking-[0.14em] uppercase text-muted-foreground hover:text-terracotta transition-colors inline-flex items-center gap-1"
                    >
                      View book <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <p className="font-mono text-[0.66rem] tracking-[0.14em] uppercase text-terracotta/80">
                      Link coming soon
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
