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
            <p className="marginalia">Chapter 02 · My Story</p>
          </div>
          <h1 className="reveal font-display text-[4rem] sm:text-[6rem] leading-[0.95] font-semibold">
            About <span className="ink-gradient italic">Puja</span>
          </h1>
        </section>

        <section className="container pb-24 grid lg:grid-cols-[1fr_1.1fr] gap-14 items-start">
          <div className="reveal">
            <div className="tilt-card relative overflow-hidden border border-border rotate-[-1deg]">
              <img
                src={ASSETS.aboutPhoto}
                alt="Puja Gupta"
                className="w-full object-cover aspect-[4/5] object-top"
              />
            </div>
            <p className="font-mono text-[0.65rem] tracking-[0.14em] uppercase text-muted-foreground mt-4 rotate-[1deg]">
              Writer · Editor · Poet · Mother of two
            </p>
          </div>

          <div className="space-y-7">
            <p className="reveal font-serif text-lg sm:text-xl leading-[1.85] text-foreground/90 drop-cap">
              I am a writer, poet, music lover, yoga enthusiast, and the proud
              mother of two wonderful daughters. Stories, books, and meaningful
              conversations have always been at the heart of my life. I love
              writing, reading, singing, and connecting with people from all
              walks of life — believing that every person has a story worth
              listening to.
            </p>
            <p className="reveal font-serif text-lg leading-[1.85] text-muted-foreground" data-reveal-delay="60">
              By nature, I am curious, detail-oriented, and deeply observant —
              qualities that shape both my writing and the way I approach life.
              I enjoy understanding people, exploring different perspectives, and
              finding beauty in everyday moments. Whether through my words or my
              interactions, I hope to inspire, connect, and leave my readers with
              something to reflect on long after they've turned the last page.
            </p>
            <p className="reveal font-serif text-lg leading-[1.85] text-muted-foreground" data-reveal-delay="100">
              Editing, for me, is an act of care. Every manuscript that lands on
              my desk is someone's long-held story, and it deserves a reader who
              pays attention — to its shape, its voice, and its smallest
              sentences.
            </p>

            <blockquote className="reveal pull-quote text-2xl sm:text-[1.6rem] leading-snug text-ink pt-8 lg:ml-10" data-reveal-delay="140">
              "I love to spend time doing what I love most — reading and
              writing. I wish to put this passion and skill to give back to my
              fraternity."
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

        <section className="border-t border-border wash-gold">
          <div className="container py-20">
            <div className="flex items-center gap-4 mb-10">
              <span className="chapter-label">In the margins</span>
              <span className="stamp-note text-xl hidden sm:inline-block">hobbies &amp; interests</span>
            </div>
            <div className="reveal border border-border bg-card p-8 sm:p-10 max-w-2xl">
              <p className="font-serif text-lg text-muted-foreground leading-relaxed">
                <span className="font-display italic text-2xl text-sage-dark">Music · Books · Shayari · Movies</span>
                <span className="block mt-4 text-base">…and of course, more reading and writing.</span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <div>
                <p className="marginalia mb-6">Education</p>
                <div className="space-y-5">
                  {[
                    { d: "MBA (HR)", s: "BVIMR, New Delhi — 1992–1994" },
                    { d: "BSc (PCM)", s: "Hansraj College, Delhi University — 1989–1992" },
                    { d: "AISSCE", s: "Ramjas School, New Delhi, CBSE — 1989" },
                    { d: "Initial Schooling", s: "St. Mary’s School, New Delhi, CBSE – till 1986" },
                  ].map((e) => (
                    <div key={e.d} className="reveal border-b border-border pb-4">
                      <p className="font-display text-xl font-semibold text-ink">{e.d}</p>
                      <p className="font-serif text-sm text-muted-foreground mt-1">{e.s}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="marginalia mb-6">Skills</p>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    "Editing & Proofreading",
                    "Communication",
                    "Time Management",
                    "Project Management",
                    "Detail Oriented",
                    "On-Time Delivery",
                    "Transparency",
                    "MS Word",
                    "Excel",
                    "Google Docs",
                  ].map((c, i) => (
                    <span
                      key={c}
                      className="reveal chip font-serif text-[0.95rem] px-4 py-1.5 border border-border bg-card text-muted-foreground"
                      data-reveal-delay={String(i * 40)}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
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
