/*
 * DESIGN: "The Margin Notes" — Testimonials.
 * Large centered pull-quote presentation of the verified client quote.
 * Only real client feedback is shown; no fabricated reviews.
 */
import { Link } from "wouter";
import { testimonial } from "@/lib/content";
import { InkSwash, PageShell } from "@/components/layout";
import { useReveal } from "@/hooks/useReveal";

export default function Testimonials() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <PageShell>
      <div ref={ref} className="paper-grain">
        <section className="container pt-16 pb-10">
          <div className="flex items-center gap-3 mb-6 reveal">
            <span className="h-px w-10 bg-terracotta" />
            <p className="marginalia">Kind words</p>
          </div>
          <h1 className="reveal font-display text-[4rem] sm:text-[6rem] leading-[0.95] font-semibold text-ink">
            Testimonials
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-8 reveal" data-reveal-delay="60">
            <span className="chapter-label">Chapter 05 · Kind words</span>
            <span className="stamp-note text-xl">shared only with permission</span>
          </div>
        </section>

        <section className="container py-16">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="reveal pull-quote text-3xl sm:text-[2.6rem] leading-snug text-ink">
              "{testimonial.quote}"
            </blockquote>
            <div className="reveal mt-12 flex flex-col items-center" data-reveal-delay="100">
              <InkSwash className="text-sage h-3 w-24 mb-6" />
              <p className="font-display text-2xl italic text-sage-dark">
                {testimonial.name}
              </p>
              <p className="font-mono text-[0.68rem] tracking-[0.16em] uppercase text-muted-foreground mt-1">
                {testimonial.role}
              </p>
            </div>
          </div>

          <div className="reveal mt-24 border border-dashed border-terracotta/40 bg-[oklch(0.96_0.015_60)] p-10 text-center max-w-xl mx-auto">
            <p className="marginalia mb-3">More to come</p>
            <p className="font-serif text-base text-muted-foreground leading-relaxed">
              As more authors and I finish our work together, their words will
              find their way here — shared only with their permission.
            </p>
          </div>
          <p className="reveal font-mono text-[0.65rem] tracking-[0.12em] uppercase text-muted-foreground/70 mt-6 text-center">
            (Only verified client quotes are displayed here)
          </p>
        </section>

        <section className="border-t border-border">
          <div className="container py-16 text-center">
            <h2 className="reveal font-display text-3xl font-semibold italic text-ink mb-8">
              Want your words to be next?
            </h2>
            <Link
              href="/contact"
              className="reveal swash-link font-mono text-xs tracking-[0.14em] uppercase text-ink inline-block"
              data-reveal-delay="80"
            >
              Start a conversation →
            </Link>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
