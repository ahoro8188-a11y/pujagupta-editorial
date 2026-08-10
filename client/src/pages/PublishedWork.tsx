/*
 * DESIGN: "The Margin Notes" — Published Work.
 * A bookshelf-style ledger of published pieces with numerals and sage accents.
 * Placeholder entries marked as upcoming — no fabricated testimonials or
 * invented publications.
 */
import { Link } from "wouter";
import { InkSwash, PageShell } from "@/components/layout";
import { useReveal } from "@/hooks/useReveal";
import { toast } from "sonner";

const placeholderWorks = [
  {
    no: "01",
    title: "Be One of a 'Kind'",
    meta: "Essay · August 2026",
    status: "Published on this journal",
  },
];

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
          <h1 className="reveal font-display text-[4rem] sm:text-[6rem] leading-[0.95] font-semibold text-ink">
            Published <span className="italic text-sage-dark">Work</span>
          </h1>
        </section>

        <section className="container pb-16">
          {placeholderWorks.map((w, i) => (
            <Link
              key={w.no}
              href="/blog/be-one-of-a-kind"
              className="reveal flex items-baseline gap-6 md:gap-12 py-10 border-t border-border last:border-b group"
              data-reveal-delay={String(i * 80)}
            >
              <span className="font-display text-5xl font-semibold text-terracotta/60 group-hover:text-terracotta transition-colors w-24 shrink-0">
                {w.no}
              </span>
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink group-hover:text-sage-dark transition-colors">
                  {w.title}
                </h2>
                <p className="font-mono text-[0.68rem] tracking-[0.14em] uppercase text-muted-foreground mt-2">
                  {w.meta}
                </p>
                <p className="font-serif text-base text-muted-foreground mt-3">
                  {w.status}
                </p>
              </div>
            </Link>
          ))}
        </section>

        <section className="container pb-24">
          <div className="reveal border border-dashed border-terracotta/40 bg-[oklch(0.96_0.015_60)] p-10 sm:p-14 max-w-2xl mx-auto">
            <p className="marginalia mb-4 text-center">The bookshelf is growing</p>
            <p className="font-serif text-lg text-muted-foreground leading-relaxed text-center">
              Poems, essays, and edited volumes are on their way here — quiet
              work, like all good drafts. For now, the latest essay waits in
              the journal.
            </p>
            <p className="mt-6 font-mono text-[0.65rem] tracking-[0.16em] uppercase text-muted-foreground text-center">
              — a note from Puja's desk, August 2026
            </p>
            <div className="text-center mt-6">
              <Link
                href="/blog"
                className="swash-link font-mono text-xs tracking-[0.14em] uppercase text-ink inline-block"
              >
                Visit the journal →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
