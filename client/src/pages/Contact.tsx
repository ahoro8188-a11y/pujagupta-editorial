/*
 * DESIGN: "The Margin Notes" — Contact.
 * Two-column spread: warm invitation left, paper-styled form right.
 * Static site — form shows a "coming soon" toast (no backend).
 */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { InkSwash, PageShell } from "@/components/layout";
import { useReveal } from "@/hooks/useReveal";
import { toast } from "sonner";

export default function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all the fields — even the smallest sentence matters.");
      return;
    }
    toast.success("Thank you! This demo form is a placeholder — connect an email service to receive real messages.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <PageShell>
      <div ref={ref} className="paper-grain">
        <section className="container pt-16 pb-16 grid lg:grid-cols-[1fr_1.1fr] gap-14">
          <div>
            <div className="flex items-center gap-3 mb-6 reveal">
              <span className="h-px w-10 bg-terracotta" />
              <p className="marginalia">Say hello</p>
            </div>
            <h1 className="reveal font-display text-[4rem] sm:text-[5.5rem] leading-[0.95] font-semibold text-ink">
              Let's <span className="ink-gradient italic">talk</span>
            </h1>
            <div className="flex flex-wrap items-center gap-4 mt-8 reveal" data-reveal-delay="80">
              <span className="chapter-label">Chapter 03 · Say hello</span>
              <span className="stamp-note text-xl">no obligations, ever</span>
            </div>
            <InkSwash className="text-terracotta h-4 w-40 mt-6 mb-8 reveal" data-reveal-delay="100" />
            <p className="reveal font-serif text-lg text-muted-foreground leading-relaxed max-w-md" data-reveal-delay="140">
              Whether you have a finished manuscript, a half-formed idea, or
              just a question about how editing works — write to me. Every good
              edit begins with a conversation.
            </p>

            <div className="reveal mt-12 space-y-4 font-serif text-base text-muted-foreground" data-reveal-delay="180">
              <p>
                <span className="marginalia block mb-1">Response time</span>
                Within 1–2 working days, always.
              </p>
              <p>
                <span className="marginalia block mb-1">First conversation</span>
                A friendly chat about your story — no obligations.
              </p>
            </div>
          </div>

          <div className="reveal" data-reveal-delay="120">
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border p-8 sm:p-10 space-y-6 shadow-[0_8px_30px_oklch(0.28_0.02_60/0.06)] relative"
            >
              <p className="stamp-note absolute -top-4 left-8 bg-background px-3">a note, in your own words</p>
              <div className="space-y-2">
                <label htmlFor="name" className="marginalia">
                  Your name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sapna Manoj"
                  className="bg-background border-border font-serif text-base rounded-none h-12 transition-all duration-200 focus:shadow-[0_0_0_3px_oklch(0.68_0.11_80/0.25)]"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="marginalia">
                  Email address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="bg-background border-border font-serif text-base rounded-none h-12 transition-all duration-200 focus:shadow-[0_0_0_3px_oklch(0.68_0.11_80/0.25)]"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="marginalia">
                  Your story (in brief)
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your manuscript, your goals, or simply say hello…"
                  rows={6}
                  className="bg-background border-border font-serif text-base rounded-none resize-none transition-all duration-200 focus:shadow-[0_0_0_3px_oklch(0.68_0.11_80/0.25)]"
                />
              </div>
              <Button
                type="submit"
                className="w-full rounded-full bg-sage-dark hover:bg-[oklch(0.36_0.07_145)] text-primary-foreground font-mono text-xs tracking-[0.14em] uppercase h-12 transition-transform duration-150 active:scale-[0.97]"
              >
                Send your note
              </Button>
            </form>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
