"use client";

import { motion } from "motion/react";
import { HERO_HEADLINE, HERO_SUBHEAD, HERO_FACTS } from "@/data/content";
import { SITE } from "@/data/site";
import { HeroConsole } from "./HeroConsole";
import { Magnetic } from "@/components/ui/MagneticButton";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full blur-[140px]"
        style={{ background: "radial-gradient(closest-side, var(--color-brass-glow), transparent)" }}
        aria-hidden="true"
      />

      <div className="container-shell relative grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-brass"
          >
            <span className="h-px w-8 bg-brass/60" />
            {SITE.role} · {SITE.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-balance font-display text-[13vw] font-medium leading-[0.98] tracking-tight text-paper sm:text-6xl lg:text-[4.6rem]"
          >
            {HERO_HEADLINE}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-xl text-balance text-base leading-relaxed text-paper-dim sm:text-lg"
          >
            {HERO_SUBHEAD}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap gap-2"
          >
            {HERO_FACTS.map((fact) => (
              <span
                key={fact}
                className="rounded-full border border-border-strong px-3.5 py-1.5 font-mono text-[11px] tracking-wide text-paper-dim"
              >
                {fact}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#work"
                data-cursor-hover
                className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.02]"
              >
                See the work
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={SITE.resumeHref}
                target="_blank"
                rel="noreferrer"
                data-cursor-hover
                className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-surface-raised"
              >
                Resume ↗
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <HeroConsole />
        </div>
      </div>
    </section>
  );
}
