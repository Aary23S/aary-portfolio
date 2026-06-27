import { projects } from "../data/projects";
import { ProjectCard } from "../components/sections/ProjectCard";
import { SectionLabel } from "../components/ui/SectionLabel";

export function Projects() {
  return (
    <div className="px-6 lg:px-16 py-16 lg:py-20">
      <section id="projects" className="scroll-mt-8">
        <SectionLabel>§03 — Projects</SectionLabel>
        <h1 className="font-display font-black text-3xl lg:text-4xl mt-3 text-ink">
          All Projects
        </h1>
        <p className="font-body text-sm text-ink/70 mt-3 max-w-xl">
          A mix of production builds for real users, internship deliverables,
          and ongoing personal projects.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
