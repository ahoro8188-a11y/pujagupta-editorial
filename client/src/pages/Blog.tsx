/*
 * DESIGN: "The Margin Notes" — Blog index ("My Writing").
 * Rich editorial hero with script title + swash, featured essay spread,
 * journal-style entry list with numerals in the margin.
 */
import { Link } from "wouter";
import { blogPosts } from "@/lib/content";
import { InkSwash, PageShell } from "@/components/layout";
import { useReveal } from "@/hooks/useReveal";

export default function Blog() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <PageShell>
      <div ref={ref} className="paper-grain">
        {/* ── Editorial hero ───────────────────────────────── */}
        <section className="container pt-16 pb-14">
          <div className="flex items-center gap-3 mb-6 reveal">
            <span className="h-px w-10 bg-terracotta" />
            <p className="marginalia">The Journal</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h1 className="reveal font-display text-[4rem] sm:text-[6rem] leading-[0.95] font-semibold">
              My <span className="ink-gradient italic">Writing</span>
            </h1>
            <InkSwash className="hidden sm:block text-sage h-5 w-56 mb-8" />
          </div>
          <p
            className="reveal font-serif text-lg text-muted-foreground max-w-xl mt-4 leading-relaxed"
            data-reveal-delay="100"
          >
            Essays on life, craft, and the honest work of shaping stories — one
            quiet page at a time.
          </p>
        </section>

        {/* ── Featured essay spread ────────────────────────── */}
        {blogPosts.map(post =>
          post.featured ? (
            <section key={post.slug} className="border-t border-border">
              <div className="container py-16">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
                  <div className="reveal relative">
                    <div className="overflow-hidden border border-border">
                      <Link href={`/blog/${post.slug}`}>
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full object-cover aspect-[16/10] hover:scale-[1.03] transition-transform duration-500"
                        />
                      </Link>
                    </div>
                    <span className="absolute -top-4 -right-3 font-mono text-[0.65rem] tracking-[0.14em] uppercase bg-terracotta text-[oklch(0.97_0.015_85)] px-3 py-1.5 rotate-[2deg] shadow-md">
                      Featured · {post.category}
                    </span>
                  </div>
                  <div className="reveal relative" data-reveal-delay="120">
                    <p className="marginalia mb-4">
                      {post.number} · {post.date} · {post.readTime}
                    </p>
                    <h2 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-6">
                      {post.title}
                    </h2>
                    <p className="font-serif text-lg text-muted-foreground leading-relaxed mb-8">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="swash-link font-mono text-xs tracking-[0.14em] uppercase text-ink inline-block"
                    >
                      Read the essay →
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          ) : null
        )}

        {/* ── Second essay spread ───────────────────────────── */}
        {blogPosts.map(post =>
          !post.featured ? (
            <section key={post.slug} className="border-t border-border">
              <div className="container py-16">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
                  <div className="reveal relative">
                    <div className="overflow-hidden border border-border">
                      <Link href={`/blog/${post.slug}`}>
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full object-cover aspect-[16/10] hover:scale-[1.03] transition-transform duration-500"
                        />
                      </Link>
                    </div>
                    <span className="absolute -top-4 -right-3 font-mono text-[0.65rem] tracking-[0.14em] uppercase bg-sage-dark text-[oklch(0.97_0.015_85)] px-3 py-1.5 rotate-[2deg] shadow-md">
                      {post.number} · {post.category}
                    </span>
                  </div>
                  <div className="reveal relative" data-reveal-delay="120">
                    <p className="marginalia mb-4">
                      {post.number} · {post.date} · {post.readTime}
                    </p>
                    <h2 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-6">
                      {post.title}
                    </h2>
                    <p className="font-serif text-lg text-muted-foreground leading-relaxed mb-8">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="swash-link font-mono text-xs tracking-[0.14em] uppercase text-ink inline-block"
                    >
                      Read the essay →
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          ) : null
        )}

        <div className="container py-16 flex items-center gap-4 justify-center">
          <Link
            href="/"
            className="swash-link font-mono text-xs tracking-[0.14em] uppercase text-ink reveal"
          >
            Return to the homepage →
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
