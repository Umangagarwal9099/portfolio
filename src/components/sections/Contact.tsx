"use client";

import { useState } from "react";
import { CONTACT_HEADLINE, CONTACT_SUBHEAD } from "@/data/content";
import { SITE } from "@/data/site";
import { Reveal } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/MagneticButton";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — no-op, the email is still visible/selectable.
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name || "your website"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border py-28 md:py-36">
      <div className="container-shell">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <Reveal>
              <h2 className="text-balance font-display text-5xl font-medium leading-[1.02] tracking-tight text-paper sm:text-6xl lg:text-7xl">
                {CONTACT_HEADLINE}
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-md text-balance text-lg leading-relaxed text-paper-dim">
                {CONTACT_SUBHEAD}
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Magnetic>
                  <button
                    type="button"
                    onClick={copyEmail}
                    data-cursor-hover
                    className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.02]"
                  >
                    {copied ? "Copied ✓" : SITE.email}
                  </button>
                </Magnetic>
                <a
                  href={SITE.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor-hover
                  className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-surface-raised"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={SITE.social.github}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor-hover
                  className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-surface-raised"
                >
                  GitHub ↗
                </a>
                <a
                  href={SITE.resumeHref}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor-hover
                  className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-surface-raised"
                >
                  Resume ↗
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border-strong bg-surface/40 p-7"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-paper-dim">
                Or write directly
              </p>
              <div className="mt-5 space-y-4">
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full rounded-xl border border-border-strong bg-transparent px-4 py-3 text-sm text-paper placeholder:text-paper-dim/60 focus:border-brass focus:outline-none"
                />
                <input
                  required
                  type="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full rounded-xl border border-border-strong bg-transparent px-4 py-3 text-sm text-paper placeholder:text-paper-dim/60 focus:border-brass focus:outline-none"
                />
                <textarea
                  required
                  rows={4}
                  placeholder="What are you building?"
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full resize-none rounded-xl border border-border-strong bg-transparent px-4 py-3 text-sm text-paper placeholder:text-paper-dim/60 focus:border-brass focus:outline-none"
                />
                <button
                  type="submit"
                  data-cursor-hover
                  className="w-full rounded-xl bg-paper px-4 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
                >
                  Open in email →
                </button>
                <p className="text-center text-[11px] text-paper-dim/70">
                  Opens your email client with this pre-filled — nothing is stored or sent from this site.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
