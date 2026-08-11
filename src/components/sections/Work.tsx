import { PROJECTS } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCaseStudy } from "./ProjectCaseStudy";

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Selected Work"
          title="Six products. Five industries. One way of building."
          description="Each of these went to production — real users, real infrastructure, real constraints. Here's what I actually did on each."
        />
      </div>

      <div className="container-shell mt-4">
        {PROJECTS.map((project, i) => (
          <ProjectCaseStudy key={project.id} project={project} index={i + 1} />
        ))}
      </div>
    </section>
  );
}
