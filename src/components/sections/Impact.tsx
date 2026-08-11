import { IMPACT_STATS } from "@/data/content";
import { Counter } from "@/components/ui/Counter";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function Impact() {
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="container-shell py-16 md:py-20">
        <RevealGroup className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-5">
          {IMPACT_STATS.map((stat) => (
            <RevealItem key={stat.label} className="min-w-0">
              <div className="font-display text-4xl font-medium tracking-tight text-paper sm:text-5xl">
                <Counter value={stat.value} />
              </div>
              <p className="mt-2 text-xs leading-snug text-paper-dim sm:text-sm">
                {stat.label}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
