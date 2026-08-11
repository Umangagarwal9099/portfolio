"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { NAV_LINKS, SITE } from "@/data/site";
import { useActiveSection } from "@/lib/useActiveSection";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/MagneticButton";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const active = useActiveSection(NAV_LINKS.map((l) => l.href.slice(1)));

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-[65] flex justify-center px-4 pt-4 md:pt-6">
      <motion.nav
        animate={{
          paddingInline: scrolled ? 18 : 24,
          paddingBlock: scrolled ? 8 : 12,
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "flex w-full max-w-5xl items-center justify-between rounded-full border backdrop-blur-xl transition-colors duration-300",
          scrolled
            ? "border-border-strong bg-surface/80 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
            : "border-border bg-surface/40"
        )}
        style={{ borderColor: "var(--color-border)" }}
      >
        <a
          href="#top"
          className="font-display text-sm font-semibold tracking-[0.2em] text-paper"
        >
          UMANG
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-[13px] font-medium tracking-wide transition-colors",
                    isActive ? "text-paper" : "text-paper-dim hover:text-paper"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-surface-raised"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={SITE.social.github}
            target="_blank"
            rel="noreferrer"
            className="text-[13px] font-medium text-paper-dim transition-colors hover:text-paper"
          >
            GitHub
          </a>
          <a
            href={SITE.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-[13px] font-medium text-paper-dim transition-colors hover:text-paper"
          >
            LinkedIn
          </a>
          <Magnetic>
            <a
              href={SITE.resumeHref}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-brass px-4 py-2 text-[13px] font-semibold text-ink transition-transform hover:scale-[1.03]"
            >
              Resume
            </a>
          </Magnetic>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-9 w-9 items-center justify-center rounded-full text-paper md:hidden"
        >
          <span className="relative block h-3.5 w-4">
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
              className="absolute left-0 top-0 h-[1.5px] w-4 origin-center bg-paper"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="absolute left-0 top-1.5 h-[1.5px] w-4 bg-paper"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
              className="absolute left-0 top-3 h-[1.5px] w-4 origin-center bg-paper"
            />
          </span>
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-20 z-[64] rounded-3xl border border-border-strong bg-surface/95 p-6 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-3 py-3 text-lg font-medium text-paper"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-4 border-t border-border pt-4">
              <a href={SITE.social.github} target="_blank" rel="noreferrer" className="text-sm text-paper-dim">
                GitHub
              </a>
              <a href={SITE.social.linkedin} target="_blank" rel="noreferrer" className="text-sm text-paper-dim">
                LinkedIn
              </a>
              <a
                href={SITE.resumeHref}
                target="_blank"
                rel="noreferrer"
                className="ml-auto rounded-full bg-brass px-4 py-2 text-sm font-semibold text-ink"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
