/*
 * DESIGN: "The Margin Notes" — Home.
 * Asymmetric hero spread (text left, image right, marginal notes), editorial services list
 * with large numerals, featured pull-quote testimonial, quiet sage accents.
 */
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ASSETS, services, testimonials } from "@/lib/content";
import { InkSwash, Marquee, PageShell } from "@/components/layout";
import { useReveal } from "@/hooks/useReveal";

export default function Home() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <PageShell>
      <div ref={ref} className="paper-grain">
        {/* ── Hero spread ───────────────────────────────────── */}
        <section className="container grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center pt-10 pb-20">
          <div className="reveal">
            <p className="marginalia mb-5">Editor &amp; Author Consultant</p>
            <h1 className="font-display text-[3.6rem] sm:text-[4.8rem] leading-[0.98] font-semibold">
              <span className="text-ink">Puja </span>
              <span className="ink-gradient">Gupta</span>
            </h1>
            <InkSwash className="text-sage h-4 w-40 mt-4 mb-6" />
            <p className="font-display italic text-2xl sm:text-3xl text-ink/85 mb-5">
              Shaping stories worth reading
            </p>
            <p className="font-serif text-lg text-muted-foreground max-w-md leading-relaxed mb-9">
              Editing manuscripts and guiding authors, one honest page at a
              time.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Button
                asChild
                className="rounded-full bg-sage-dark hover:bg-[oklch(0.36_0.07_145)] text-primary-foreground font-mono text-xs tracking-[0.14em] uppercase h-12 px-8 transition-transform duration-150 active:scale-[0.97]"
              >
                <Link href="/contact">Work With Me</Link>
              </Button>
              <span className="font-mono text-[0.65rem] tracking-[0.16em] uppercase text-terracotta rotate-[-2deg]">
                Detailed · Supportive
                <br />
                Transparent
              </span>
            </div>
          </div>

          <div className="reveal relative" data-reveal-delay="120">
            <div className="relative tilt-card">
              <img
                src={ASSETS.heroPortrait}
                alt="Puja Gupta, editor and author consultant"
                className="w-full h-auto"
              />
            </div>
            <span className="shimmer-plate absolute -bottom-4 -left-4 font-mono text-[0.65rem] tracking-[0.14em] uppercase bg-paper-deep border border-border px-3 py-1.5 text-muted-foreground rotate-[-2deg] shadow-sm">
              Puja Gupta · Est. 2018
            </span>
          </div>
        </section>

        <Marquee />

        {/* ── About teaser ─────────────────────────────────── */}
        <section className="container py-24 grid lg:grid-cols-[1fr_1.3fr] gap-12 items-center">
          <div className="reveal order-2 lg:order-1">
            <div className="relative overflow-hidden border border-border rotate-[1deg]">
              <img
                src={ASSETS.heroDesk}
                alt="A writer's desk"
                className="w-full object-cover aspect-[4/5]"
              />
            </div>
            <p className="stamp-note text-lg mt-4 text-center">
              where the work happens — chai included
            </p>
          </div>
          <div className="reveal order-1 lg:order-2" data-reveal-delay="100">
            <p className="marginalia mb-4">A little about me</p>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-6">
              An editor who cares about your
              <span className="italic text-sage-dark"> words </span>
              as much as you do
            </h2>
            <p className="font-serif text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              I'm a writer, poet, and editor with years of experience helping
              authors turn manuscripts into books they're proud of —
              detail-oriented, organized, and genuinely invested in every story
              I work on.
            </p>
            <Link
              href="/about"
              className="swash-link font-mono text-xs tracking-[0.14em] uppercase text-ink inline-block"
            >
              Read my story →
            </Link>
          </div>
        </section>

        {/* ── Services list ────────────────────────────────── */}
        <section className="border-t border-border wash-sage">
          <div className="container py-24">
            <div className="flex items-center gap-4 mb-10 reveal">
              <span className="chapter-label">Chapter 01 · The Craft</span>
              <span className="stamp-note text-xl hidden sm:inline-block">what I do</span>
            </div>
            <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
              {services.map((s, i) => (
                <article
                  key={s.no}
                  className="reveal bg-card p-8 sm:p-10 group hover:bg-[oklch(0.955_0.018_85)] transition-colors duration-300"
                  data-reveal-delay={String(i * 80)}
                >
                  <span className="font-display text-5xl font-semibold text-terracotta/70 group-hover:text-terracotta transition-colors duration-300">
                    {s.no}
                  </span>
                  <h3 className="font-display text-2xl font-semibold mt-6 mb-4">
                    {s.title}
                  </h3>
                  <p className="font-serif text-[1.02rem] text-muted-foreground leading-relaxed">
                    {s.body}
                  </p>
                </article>
              ))}
            </div>
            <div className="mt-10 reveal">
              <Link
                href="/services"
                className="swash-link font-mono text-xs tracking-[0.14em] uppercase text-ink inline-block"
              >
                See all services →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Testimonial pull quote ───────────────────────── */}
        <section className="border-y border-border wash-plum wash-glow-plum">
          <div className="container py-24 flex flex-col items-center text-center max-w-3xl">
            <p className="marginalia mb-8 reveal">Kind words</p>
            <blockquote className="reveal pull-quote text-3xl sm:text-4xl leading-snug text-ink" data-reveal-delay="80">
              "For being constantly available… for making me feel that my words
              matter — this personal touch is what makes Puja stand apart."
            </blockquote>
            <cite className="reveal not-italic mt-8 font-mono text-[0.7rem] tracking-[0.16em] uppercase text-muted-foreground" data-reveal-delay="140">
              — {testimonials[0].name}, Author
              {testimonials[0].book ? ` · ${testimonials[0].book}` : ""}
            </cite>
            <Link
              href="/testimonials"
              className="reveal swash-link mt-6 font-mono text-xs tracking-[0.14em] uppercase text-ink inline-block"
              data-reveal-delay="180"
            >
              Read more testimonials →
            </Link>
          </div>
        </section>

        {/* ── Latest from the journal ──────────────────────── */}
        <section className="container py-24 wash-glow">
          <div className="flex items-end justify-between mb-12">
            <div className="reveal">
              <p className="marginalia mb-4">From the journal</p>
              <h2 className="font-display text-4xl sm:text-5xl font-semibold">
                My Writing
              </h2>
            </div>
            <Link
              href="/blog"
              className="reveal swash-link font-mono text-xs tracking-[0.14em] uppercase text-ink"
            >
              All essays →
            </Link>
          </div>
          <Link href="/blog" className="reveal group block">
            <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
              <div className="overflow-hidden border border-border">
                <img
                  src={ASSETS.blogFeatured}
                  alt="Be One of a 'Kind' — tea and eucalyptus on linen"
                  className="w-full object-cover aspect-[16/10] group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div>
                <p className="marginalia mb-3">August 2026 · 4 min read</p>
                <h3 className="font-display text-3xl font-semibold group-hover:text-sage-dark transition-colors duration-300">
                  Be One of a 'Kind'
                </h3>
                <p className="font-serif text-base text-muted-foreground mt-4 leading-relaxed">
                  Kindness is a thought that arrives with no ulterior motive.
                  Calm, unarticulated, almost transparent — and most of all,
                  unassuming. Here is where I draw the line between kindness and
                  its counterfeits.
                </p>
                <span className="mt-6 inline-block font-mono text-xs tracking-[0.14em] uppercase text-terracotta">
                  Read the essay →
                </span>
              </div>
            </div>
          </Link>
        </section>
      </div>
    </PageShell>
  );
}
