import { Link } from "react-router-dom";
import type { ProjectEntry } from "../../types";
import { Tag } from "../ui/Tag";

interface ProjectCardProps {
  project: ProjectEntry;
}

const STATUS_LABELS: Record<ProjectEntry["status"], string> = {
  "in-progress": "In Progress",
  completed: "Completed",
  planned: "Planned",
};

const PLATFORM_LABELS: Record<ProjectEntry["platform"], string> = {
  web: "Web",
  app: "App",
};

const SCOPE_LABELS: Record<ProjectEntry["scope"], string> = {
  frontend: "Frontend Only",
  backend: "Backend Only",
  "full-stack": "Full Stack",
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group border border-brass/30 rounded-sm p-6 hover:border-flag transition-colors">
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-signal/20 bg-signal/5 px-2.5 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-signal">
            {PLATFORM_LABELS[project.platform]}
          </span>
          <span className="rounded-full border border-brass/25 bg-paper px-2.5 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-brass">
            {SCOPE_LABELS[project.scope]}
          </span>
          <span className="rounded-full border border-flag/20 bg-flag/5 px-2.5 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-flag">
            {STATUS_LABELS[project.status]}
          </span>
        </div>
        <span className="font-sans text-xs text-ink/40 group-hover:text-flag transition-colors">
          →
        </span>
      </div>

      <Link to={`/projects/${project.slug}`} className="block">
        <h3 className="font-display font-semibold text-xl text-ink mt-3 group-hover:text-signal transition-colors">
          {project.title}
        </h3>

        <p className="font-body text-sm text-ink/70 mt-2 leading-relaxed">
          {project.summary}
        </p>
      </Link>

      {project.liveUrl && (
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            window.open(project.liveUrl, "_blank", "noopener,noreferrer");
          }}
          className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-signal/25 px-3 py-1.5 font-sans text-[11px] font-medium tracking-[0.12em] text-signal transition-colors hover:border-flag hover:text-flag"
          aria-label={`Open live site for ${project.title}`}
        >
          Live site
          <span aria-hidden="true">↗</span>
        </button>
      )}

      <div className="flex flex-wrap gap-2 mt-4">
        {project.stack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
    </article>
  );
}
