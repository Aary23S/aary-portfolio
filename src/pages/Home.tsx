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

      <section className="px-4 sm:px-6 lg:px-16 py-12 border-t border-brass/20">
        <div className="flex items-baseline justify-between">
          <SectionLabel>§03 — Selected Projects</SectionLabel>
          <Link
            to="/projects"
            className="font-sans text-xs font-medium tracking-tight text-signal hover:text-flag transition-colors"
          >
            View all →
          </Link>
        </div>

        <div className="grid gap-5 mt-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-16 py-12 border-t border-brass/20">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <SectionLabel>Skills</SectionLabel>
            <h3 className="mt-3 font-display text-2xl lg:text-3xl font-semibold text-ink">
              Practical stack, grouped by how I actually use it
            </h3>
            <p className="mt-2 max-w-xl font-body text-sm leading-relaxed text-ink/70">
              A compact view of the tools, languages, and workflows that show up
              across my projects and day-to-day development work.
            </p>
          </div>

          <p className="font-sans text-xs font-medium tracking-[0.14em] text-brass">
            4 active skill groups
          </p>
        </div>

        <div className="grid gap-5 mt-8 lg:grid-cols-2">
          {skills.map((group, index) => (
            <article
              key={group.category}
              className="group relative overflow-hidden rounded-[1.5rem] border border-brass/20 bg-paper/80 p-5 shadow-[0_10px_30px_rgba(11,13,16,0.05)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass/40 to-transparent"
                aria-hidden="true"
              />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-brass">
                    0{index + 1}
                  </p>
                  <h4 className="mt-1 font-display text-xl font-semibold text-ink">
                    {group.category}
                  </h4>
                </div>

                <span className="rounded-full border border-signal/20 bg-signal/5 px-3 py-1 font-sans text-[11px] font-medium tracking-[0.12em] text-signal">
                  {group.items.length} items
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-signal/20 bg-paper px-3 py-1 font-sans text-xs font-medium text-ink/80 transition-colors group-hover:border-signal/35 group-hover:text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
