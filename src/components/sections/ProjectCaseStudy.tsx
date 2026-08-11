"use client";

import { motion } from "motion/react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { BrowserMockup } from "@/components/ui/BrowserMockup";
import { PlotMapDemo } from "./PlotMapDemo";
import { VedxlenceArchitecture } from "./VedxlenceArchitecture";

export function ProjectCaseStudy({ project, index }: { project: Project; index: number }) {
  return (
    <article
      id={`project-${project.id}`}
      className="scroll-mt-28 border-t border-border py-20 first:border-t-0 md:py-28"
    >
      {project.image && (
        <Reveal y={36} className="mb-12 md:mb-16">
          <BrowserMockup src={project.image} alt={`${project.displayName} live site`} href={project.url} />
        </Reveal>
      )}

      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Left: identity + meta */}
        <div>
          <Reveal>
            <span
              className="font-mono text-xs tracking-[0.3em]"
              style={{ color: project.accent }}
            >
              {project.index} / {String(index).padStart(2, "0")}
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h3 className="mt-4 font-display text-4xl font-medium leading-[1.02] tracking-tight text-paper sm:text-5xl">
              {project.displayName}
            </h3>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-3 text-balance text-base text-paper-dim">{project.tagline}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="mt-8 grid grid-cols-2 gap-x-4 gap-y-4 border-y border-border py-6 text-sm sm:grid-cols-1 sm:flex sm:flex-col">
              <div className="flex justify-between gap-4 sm:contents">
                <dt className="text-paper-dim">Role</dt>
                <dd className="text-right text-paper sm:text-left">{project.role}</dd>
              </div>
              {project.employer && (
                <div className="flex justify-between gap-4 sm:contents sm:mt-2">
                  <dt className="text-paper-dim">Employer</dt>
                  <dd className="text-right text-paper sm:text-left">{project.employer}</dd>
                </div>
              )}
              <div className="flex justify-between gap-4 sm:contents sm:mt-2">
                <dt className="text-paper-dim">Period</dt>
                <dd className="text-right text-paper sm:text-left">{project.period}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border-strong px-3 py-1.5 text-xs text-paper-dim"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>

          {(project.url || project.secondaryUrl) && (
            <Reveal delay={0.25}>
              <div className="mt-8 flex flex-wrap gap-4">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor-hover
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-paper underline decoration-border-strong decoration-2 underline-offset-4 transition-colors hover:decoration-current"
                  >
                    Visit live site ↗
                  </a>
                )}
                {project.secondaryUrl && (
                  <a
                    href={project.secondaryUrl.href}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor-hover
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-paper-dim underline decoration-border-strong decoration-2 underline-offset-4 transition-colors hover:text-paper"
                  >
                    {project.secondaryUrl.label} ↗
                  </a>
                )}
              </div>
            </Reveal>
          )}
        </div>

        {/* Right: narrative + contributions + metrics */}
        <div>
          <Reveal>
            <div className="space-y-4">
              {project.description.map((para, i) => (
                <p key={i} className="text-balance text-base leading-relaxed text-paper-dim sm:text-lg">
                  {para}
                </p>
              ))}
            </div>
          </Reveal>

          {project.integrations && project.integrations.length > 0 && (
            <Reveal delay={0.08}>
              <div className="mt-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-paper-dim">
                  Integrations
                </p>
                <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {project.integrations.map((integration) => (
                    <div
                      key={integration.name}
                      className="rounded-xl border border-border px-4 py-3"
                    >
                      <p className="text-sm font-medium text-paper">{integration.name}</p>
                      <p className="mt-0.5 text-xs text-paper-dim">{integration.purpose}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          )}

          {project.contributions.length > 0 && (
            <RevealGroup className="mt-8 space-y-2.5">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-paper-dim">
                Contributions
              </p>
              <ul className="space-y-2.5">
                {project.contributions.map((item, i) => (
                  <RevealItem key={i}>
                    <li className="flex gap-3 text-sm leading-relaxed text-paper-dim sm:text-[15px]">
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full"
                        style={{ backgroundColor: project.accent }}
                      />
                      {item}
                    </li>
                  </RevealItem>
                ))}
              </ul>
            </RevealGroup>
          )}

          {project.metrics && project.metrics.length > 0 && (
            <Reveal delay={0.1}>
              <div className="mt-9 grid grid-cols-2 gap-x-6 gap-y-6 rounded-2xl border border-border bg-surface/40 p-6 sm:grid-cols-3">
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="font-display text-2xl font-medium text-paper sm:text-3xl">
                      <Counter value={metric.value} />
                    </div>
                    <p className="mt-1 text-xs leading-snug text-paper-dim">{metric.label}</p>
                  </div>
                ))}
              </div>
              {project.metricsNote && (
                <p className="mt-3 text-xs text-paper-dim/70">{project.metricsNote}</p>
              )}
            </Reveal>
          )}

          {project.id === "terranovainfra" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 space-y-6"
            >
              <div>
                <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-paper-dim">
                  Flagship feature — live on the site
                </p>
                {project.secondaryImage && (
                  <>
                    <div className="overflow-hidden rounded-2xl border border-border-strong">
                      <div className="relative aspect-[1873/870] w-full bg-ink">
                        <Image
                          src={project.secondaryImage.src}
                          alt={project.secondaryImage.caption}
                          fill
                          sizes="(min-width: 1024px) 60vw, 100vw"
                          className="object-cover object-top"
                        />
                      </div>
                    </div>
                    <p className="mt-2 text-xs text-paper-dim/70">{project.secondaryImage.caption}</p>
                  </>
                )}
              </div>

              <div>
                <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-paper-dim">
                  Try it yourself — interactive recreation
                </p>
                <PlotMapDemo />
              </div>
            </motion.div>
          )}

          {project.id === "vedxlence" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9"
            >
              <VedxlenceArchitecture />
            </motion.div>
          )}
        </div>
      </div>
    </article>
  );
}
