"use client";

import { motion } from "motion/react";

const FRONTENDS = [
  { name: "Student LMS", detail: "Courses · coding practice · live classes" },
  { name: "Admin Console", detail: "Curriculum · batches · CRM · analytics" },
  { name: "Employer Portal", detail: "Attendance · leads · work reports" },
];

const INTEGRATIONS = ["Zoom", "Cloudflare R2", "Resend", "Glot.io", "ffmpeg"];

export function VedxlenceArchitecture() {
  return (
    <div className="rounded-2xl border border-border-strong bg-surface/50 p-5 sm:p-7">
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-paper-dim">
        System architecture
      </p>

      <div className="mt-8 flex flex-col items-center gap-6">
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
          {FRONTENDS.map((fe, i) => (
            <motion.div
              key={fe.name}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-border-strong bg-surface-raised px-4 py-3.5"
            >
              <p className="text-sm font-semibold text-paper">{fe.name}</p>
              <p className="mt-1 text-xs leading-relaxed text-paper-dim">{fe.detail}</p>
              <p className="mt-2 font-mono text-[10px] text-paper-dim/70">Next.js 16 · React 19</p>
            </motion.div>
          ))}
        </div>

        <svg width="100%" height="28" viewBox="0 0 300 28" className="max-w-xs text-paper-dim/40" aria-hidden="true">
          <line x1="50" y1="0" x2="150" y2="24" stroke="currentColor" strokeWidth="1" />
          <line x1="150" y1="0" x2="150" y2="24" stroke="currentColor" strokeWidth="1" />
          <line x1="250" y1="0" x2="150" y2="24" stroke="currentColor" strokeWidth="1" />
        </svg>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="w-full max-w-sm rounded-xl border border-brass/40 bg-brass/[0.06] px-5 py-4 text-center"
        >
          <p className="font-display text-base font-semibold text-paper">Go · Gin · PostgreSQL</p>
          <p className="mt-1 text-xs text-paper-dim">Single API — 45+ controllers, Supabase-hosted Postgres</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 pt-2">
          {INTEGRATIONS.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border-strong px-3 py-1 font-mono text-[10px] text-paper-dim"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
