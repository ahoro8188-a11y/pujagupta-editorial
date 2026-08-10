/*
 * DESIGN: "The Margin Notes" — Article reading view.
 * Centered ~68ch reading measure, drop cap opening paragraph, terracotta pull
 * quotes, mono marginalia (date / read-time) along the side rail.
 */
import { Link, useParams } from "wouter";
import { blogPosts } from "@/lib/content";
import { InkSwash, PageShell } from "@/components/layout";
import { useReveal } from "@/hooks/useReveal";
import NotFound from "@/pages/NotFound";

export default function Article() {
  const params = useParams<{ slug: string }>();
  const ref = useReveal<HTMLDivElement>();
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return <NotFound />;

  return (
    <PageShell>
      <div ref={ref} className="paper-grain">
        {/* ── Article hero ─────────────────────────────────── */}
        <section className="container pt-14 pb-10 max-w-4xl">
          <Link
            href="/blog"
            className="reveal marginalia inline-block mb-8 hover:text-terracotta transition-colors"
          >
            ← Back to My Writing
          </Link>
          <p className="marginalia mb-4 reveal" data-reveal-delay="60">
            {post.number} · {post.category} · {post.date} · {post.readTime}
          </p>
          <p className="marginalia mb-8 reveal text-sage" data-reveal-delay="80">
            Journal entry · read aloud, slowly
          </p>
          <h1 className="reveal font-display text-[3rem] sm:text-[4.2rem] leading-[1.02] font-semibold text-ink" data-reveal-delay="100">
            {post.title}
          </h1>
          <InkSwash className="text-terracotta h-4 w-36 mt-6 mb-8 reveal" data-reveal-delay="140" />
        </section>

        {/* ── Reading spread with margin annotations ───────── */}
        <section className="border-t border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 margin-rail">
            <div className="space-y-7">
              {post.body.map((block, i) => {
                if (block.kind === "p")
                  return (
                    <p
                      key={i}
                      className={`reveal font-serif text-[1.12rem] sm:text-lg leading-[1.85] text-foreground/90 relative ${
                        i === 0 ? "drop-cap" : ""
                      } ${i === 3 ? "lg:ml-20" : ""}`}
                      data-reveal-delay="40"
                    >
                      {block.text}
                    </p>
                  );
                if (block.kind === "h2")
                  return (
                    <h2
                      key={i}
                      className="reveal font-display text-3xl font-semibold pt-6 text-ink"
                      data-reveal-delay="40"
                    >
                      {block.text}
                    </h2>
                  );
                if (block.kind === "quote")
                  return (
                    <blockquote
                      key={i}
                      className="reveal pull-quote text-2xl sm:text-[1.7rem] leading-snug text-ink my-10 pl-2"
                      data-reveal-delay="40"
                    >
                      {block.text}
                    </blockquote>
                  );
                if (block.kind === "attribution")
                  return (
                    <cite
                      key={i}
                      className="reveal not-italic block -mt-6 mb-10 pl-2 font-mono text-[0.7rem] tracking-[0.14em] uppercase text-muted-foreground"
                      data-reveal-delay="60"
                    >
                      {block.text}
                    </cite>
                  );
                return null;
              })}
            </div>

            <div className="reveal mt-20 pt-10 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p className="marginalia mb-2">Written by</p>
                <p className="font-script text-3xl text-ink">Puja Gupta</p>
                <p className="stamp-note mt-3">— from the editor's desk —</p>
              </div>
              <Link
                href="/blog"
                className="swash-link font-mono text-xs tracking-[0.14em] uppercase text-ink"
              >
                Back to My Writing →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
