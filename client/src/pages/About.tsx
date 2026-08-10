/*
 * DESIGN: "The Margin Notes" — About ("My Story").
 * Book-jacket style opening, editorial two-column spread, quiet pull quote.
 */
import { Link } from "wouter";
import { ASSETS } from "@/lib/content";
import { InkSwash, Marquee, PageShell } from "@/components/layout";
import { useReveal } from "@/hooks/useReveal";

export default function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <PageShell>
      <div ref={ref} className="paper-grain">
        <section className="container pt-16 pb-14">
          <div className="flex items-center gap-3 mb-6 reveal">
            <span className="h-px w-10 bg-terracotta" />
            <p className="marginalia">My Story</p>
          </div>
          <h1 className="reveal font-display text-[4rem] sm:text-[6rem] leading-[0.95] font-semibold text-ink">
            About <span className="italic text-sage-dark">Puja</span>
          </h1>
        </section>

        <section className="container pb-24 grid lg:grid-cols-[1fr_1.1fr] gap-14 items-start">
          <div className="reveal">
            <div className="relative overflow-hidden border border-border rotate-[-1deg]">
              <img
                src={ASSETS.heroDesk}
                alt="A writer's desk"
                className="w-full object-cover aspect-[4/5]"
              />
            </div>
            <p className="font-mono text-[0.65rem] tracking-[0.14em] uppercase text-muted-foreground mt-4 rotate-[1deg]">
              Where the work happens — chai included
            </p>
          </div>

          <div className="space-y-7">
            <p className="reveal font-serif text-lg sm:text-xl leading-[1.85] text-foreground/90 drop-cap">
              I'm a writer, poet, and editor with years of experience helping
              authors turn manuscripts into books they're proud of —
              detail-oriented, organized, and genuinely invested in every story
              I work on.
            </p>
            <p className="reveal font-serif text-lg leading-[1.85] text-muted-foreground" data-reveal-delay="60">
              Editing, for me, is an act of care. Every manuscript that lands on
              my desk is someone's long-held story, and it deserves a reader who
              pays attention — to its shape, its voice, and its smallest
              sentences.
            </p>
            <p className="reveal font-serif text-lg leading-[1.85] text-muted-foreground" data-reveal-delay="100">
              Beyond the desk, I am a poet and a mom of two — which has taught
              me more about patience and listening than any craft book ever
              could.
            </p>

            <blockquote className="reveal pull-quote text-2xl sm:text-[1.6rem] leading-snug text-ink pt-8 lg:ml-10" data-reveal-delay="140">
              "An honest page is worth more than a perfect one."
            </blockquote>

            <Link
              href="/contact"
              className="reveal swash-link font-mono text-xs tracking-[0.14em] uppercase text-ink inline-block mt-4"
              data-reveal-delay="180"
            >
              Work With Me →
            </Link>
          </div>
        </section>

        <Marquee />

        <section className="border-t border-border">
          <div className="container py-20">
            <div className="flex items-center gap-4 mb-10">
              <span className="chapter-label">The three lives</span>
              <span className="stamp-note text-xl hidden sm:inline-block">editor · poet · consultant</span>
            </div>
            <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
            {[
              { t: "Editor", d: "Every story deserves a careful second pair of eyes." },
              { t: "Poet", d: "I believe sentences should earn every word they carry." },
              { t: "Author Consultant", d: "From first draft anxiety to launch-day nerves, I've got you." },
            ].map((c, i) => (
              <div key={c.t} className="reveal bg-card p-8" data-reveal-delay={String(i * 80)}>
                <p className="font-display italic text-2xl text-sage-dark mb-3">{c.t}</p>
                <p className="font-serif text-base text-muted-foreground leading-relaxed">{c.d}</p>
              </div>
            ))}
            </div>
          </div>
        </section>

        <div className="container pb-24 pt-10">
          <Link
            href="/published-work"
            className="reveal swash-link font-mono text-xs tracking-[0.14em] uppercase text-ink inline-block"
          >
            See my published work →
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
