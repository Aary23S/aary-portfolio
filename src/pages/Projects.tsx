import { projects } from "../data/projects";
import { ProjectCard } from "../components/sections/ProjectCard";
import { SectionLabel } from "../components/ui/SectionLabel";

const PLATFORM_ORDER = ["web", "app"] as const;
const STATUS_ORDER = ["in-progress", "completed", "planned"] as const;

const PLATFORM_LABELS = {
  web: "Web Projects",
  app: "App Projects",
} as const;

const PLATFORM_SUMMARY = {
  web: "Websites, dashboards, and browser-first products.",
  app: "Mobile applications and app-first experiences.",
} as const;

const STATUS_LABELS = {
  "in-progress": "In Progress",
  completed: "Completed",
  planned: "Planned",
} as const;

export function Projects() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-16 py-16 lg:py-20">
      <section id="projects" className="scroll-mt-8">
        <SectionLabel>§03 — Projects</SectionLabel>
        <h1 className="font-display font-black text-3xl lg:text-4xl mt-3 text-ink">
          All Projects
        </h1>
        <p className="font-body text-sm text-ink/70 mt-3 max-w-xl">
          A structured view of my work grouped by platform, scope, and status so
          the difference between web, app, frontend, backend, and full-stack
          projects is immediately visible.
        </p>

        <div className="mt-10 space-y-12">
          {PLATFORM_ORDER.map((platform) => {
            const platformProjects = projects.filter((project) => project.platform === platform);

            if (platformProjects.length === 0) {
              return null;
            }

            return (
              <section key={platform} className="space-y-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="font-display text-2xl lg:text-3xl font-semibold text-ink">
                      {PLATFORM_LABELS[platform]}
                    </h2>
                    <p className="mt-1 font-body text-sm text-ink/70">
                      {PLATFORM_SUMMARY[platform]}
                    </p>
                  </div>
                  <span className="font-sans text-xs font-medium tracking-[0.14em] text-brass">
                    {platformProjects.length} projects
                  </span>
                </div>

                <div className="space-y-8">
                  {STATUS_ORDER.map((status) => {
                    const statusProjects = platformProjects.filter((project) => project.status === status);

                    if (statusProjects.length === 0) {
                      return null;
                    }

                    return (
                      <div key={status} className="space-y-4">
                        <div className="flex items-center gap-3">
                          <span className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-signal">
                            {STATUS_LABELS[status]}
                          </span>
                          <span className="h-px flex-1 bg-brass/20" aria-hidden="true" />
                        </div>

                        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                          {statusProjects.map((project) => (
                            <ProjectCard key={project.slug} project={project} />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </div>
  );
}
