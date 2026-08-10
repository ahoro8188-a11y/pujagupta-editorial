/*
 * DESIGN: "The Margin Notes" — Testimonials.
 * Index-card ledger of all real client testimonials (7), each with the book
 * cover, the full quote, the author's name, and the book's purchase link.
 * Only verified client feedback is shown; no fabricated reviews.
 */
import { Link } from "wouter";
import { ExternalLink } from "lucide-react";
import { testimonials } from "@/lib/content";
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
            From the authors I've worked with
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-8 reveal" data-reveal-delay="60">
            <span className="chapter-label">Chapter 05 · Kind words</span>
            <span className="stamp-note text-xl">shared only with permission</span>
          </div>
        </section>

        <section className="container py-16">
          <div className="space-y-16">
            {testimonials.map((t, i) => (
              <article
                key={t.name}
                className="reveal grid md:grid-cols-[180px_1fr] lg:grid-cols-[200px_1fr] gap-8 lg:gap-12 border-b border-border pb-16 last:border-b-0"
                data-reveal-delay="60"
              >
                <div className="order-1 md:order-none mx-auto md:mx-0">
                  {t.cover ? (
                    <div className="tilt-card relative w-32 md:w-40 lg:w-full lg:max-w-[180px] overflow-hidden border border-border rotate-[-1.5deg]">
                      <img
                        src={t.cover}
                        alt={`${t.book} — book cover`}
                        className="w-full object-cover aspect-[2/3]"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="w-32 md:w-40 lg:w-full lg:max-w-[180px] aspect-[2/3] border border-dashed border-terracotta/40 bg-[oklch(0.96_0.015_60)] flex items-center justify-center rotate-[-1.5deg]">
                      <span className="font-display text-4xl text-terracotta/50">📖</span>
                    </div>
                  )}
                  <p className="font-mono text-[0.6rem] tracking-[0.14em] uppercase text-muted-foreground mt-3 text-center">
                    <span className="font-display normal-case tracking-normal text-sm">
                      No. {String(i + 1).padStart(2, "0")}
                    </span>
                  </p>
                </div>

                <div className="order-2 md:order-none">
                  <p className="font-mono text-[0.68rem] tracking-[0.16em] uppercase text-terracotta mb-4">
                    ★★★★★
                  </p>
                  <blockquote className="font-serif text-[1.05rem] leading-[1.75] text-ink/90">
                    "{t.quote}"
                  </blockquote>
                  <div className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <cite className="not-italic font-display italic text-xl text-sage-dark">
                      {t.name}
                    </cite>
                    {t.book ? (
                      t.href ? (
                        <a
                          href={t.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="swash-link font-mono text-[0.68rem] tracking-[0.14em] uppercase text-muted-foreground inline-flex items-center gap-1.5 hover:text-terracotta"
                        >
                          {t.book} <ExternalLink className="h-3 w-3" />
                        </a>
                      ) : (
                        <span className="font-mono text-[0.68rem] tracking-[0.14em] uppercase text-muted-foreground">
                          {t.book}
                        </span>
                      )
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
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
