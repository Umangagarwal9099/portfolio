import { ABOUT_HEADLINE, ABOUT_PARAGRAPHS, PHILOSOPHY_PRINCIPLES } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border py-24 md:py-32">
      <div className="container-shell">
        <SectionHeading eyebrow="About" title={ABOUT_HEADLINE} />

        <div className="mt-14 grid gap-16 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-6">
            {ABOUT_PARAGRAPHS.map((para, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className="text-balance text-lg leading-relaxed text-paper-dim sm:text-xl">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>

          <RevealGroup className="space-y-8 lg:border-l lg:border-border lg:pl-12">
            {PHILOSOPHY_PRINCIPLES.map((principle) => (
              <RevealItem key={principle.title}>
                <h3 className="font-display text-xl font-medium text-paper">{principle.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper-dim">{principle.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
