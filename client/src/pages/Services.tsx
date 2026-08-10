/*
 * DESIGN: "The Margin Notes" — Services.
 * Editorial ledger: large serif numerals, quiet descriptions, sage rules,
 * closing invitation to contact.
 */
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/content";
import { InkSwash, PageShell } from "@/components/layout";
import { useReveal } from "@/hooks/useReveal";

export default function Services() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <PageShell>
      <div ref={ref} className="paper-grain">
        <section className="container pt-16 pb-14">
          <div className="flex items-center gap-3 mb-6 reveal">
            <span className="h-px w-10 bg-terracotta" />
            <p className="marginalia">How I can help</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h1 className="reveal font-display text-[4rem] sm:text-[6rem] leading-[0.95] font-semibold text-ink">
              <span className="ink-gradient">Services</span>
            </h1>
            <InkSwash className="hidden sm:block text-sage h-5 w-56 mb-8" />
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-6 reveal" data-reveal-delay="60">
            <span className="chapter-label">Chapter 02 · How I can help</span>
            <span className="stamp-note text-xl">three quiet ways</span>
          </div>
          <p className="reveal font-serif text-lg text-muted-foreground max-w-xl mt-4" data-reveal-delay="100">
            Three quiet ways to bring your story closer to its finished form.
          </p>
        </section>

        <section className="container pb-24 space-y-0">
          {services.map((s, i) => (
            <div
              key={s.no}
              className="reveal grid md:grid-cols-[0.5fr_1fr_0.8fr] gap-6 md:gap-12 items-start py-12 border-t border-border last:border-b group transition-colors duration-300 hover:bg-[oklch(0.94_0.025_85)] hover:border-sage/50"
              data-reveal-delay={String(i * 80)}
            >
              <span className="font-display text-6xl md:text-7xl font-semibold text-terracotta/60 group-hover:text-terracotta transition-colors duration-300">
                {s.no}
              </span>
              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink mb-4">
                  {s.title}
                </h2>
                <p className="font-serif text-lg text-muted-foreground leading-relaxed max-w-md">
                  {s.body}
                </p>
              </div>
            <div className="md:text-right flex md:justify-end items-center gap-6">
              <span className="hidden md:inline-block stamp-note text-lg">the short version</span>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-sage-dark text-sage-dark hover:bg-sage-dark hover:text-primary-foreground font-mono text-xs tracking-[0.14em] uppercase transition-transform duration-150 active:scale-[0.97]"
              >
                <Link href="/contact">Enquire</Link>
              </Button>
            </div>
            </div>
          ))}
        </section>

        <section className="bg-paper-deep border-t border-border">
          <div className="container py-20 text-center max-w-2xl mx-auto">
            <p className="marginalia mb-6 reveal">Not sure where to start?</p>
            <h2 className="reveal font-display text-3xl sm:text-4xl font-semibold italic text-ink mb-6" data-reveal-delay="80">
              Every good edit begins with a conversation.
            </h2>
            <Button
              asChild
              className="reveal rounded-full bg-sage-dark hover:bg-[oklch(0.36_0.07_145)] text-primary-foreground font-mono text-xs tracking-[0.14em] uppercase h-12 px-8 transition-transform duration-150 active:scale-[0.97]"
              data-reveal-delay="140"
            >
              <Link href="/contact">Start a conversation</Link>
            </Button>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
