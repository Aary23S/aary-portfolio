import { Link } from "react-router-dom";
import { Hero } from "../components/sections/Hero";
import { ResearchInterests } from "../components/sections/ResearchInterests";
import { ProjectCard } from "../components/sections/ProjectCard";
import { SectionLabel } from "../components/ui/SectionLabel";
import { projects } from "../data/projects";
import { skills } from "../data/skills";

export function Home() {
  // Home shows only a curated subset; full lists live on their dedicated pages.
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <Hero />
      <ResearchInterests />

      <section className="px-6 lg:px-16 py-12 border-t border-brass/20">
        <div className="flex items-baseline justify-between">
          <SectionLabel>§03 — Selected Projects</SectionLabel>
          <Link
            to="/projects"
            className="font-sans text-xs font-medium tracking-tight text-signal hover:text-flag transition-colors"
          >
            View all →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="px-6 lg:px-16 py-12 border-t border-brass/20">
        <SectionLabel>Skills</SectionLabel>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {skills.map((group) => (
            <div key={group.category}>
              <h4 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-signal">
                {group.category}
              </h4>
              <ul className="mt-2 space-y-1">
                {group.items.map((item) => (
                  <li key={item} className="font-body text-sm text-ink/75">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
