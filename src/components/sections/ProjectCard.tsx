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

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block border border-brass/30 rounded-sm p-6 hover:border-flag transition-colors"
    >
      <div className="flex items-center justify-between">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-brass">
          {STATUS_LABELS[project.status]}
        </span>
        <span className="font-sans text-xs text-ink/40 group-hover:text-flag transition-colors">
          →
        </span>
      </div>

      <h3 className="font-display font-semibold text-xl text-ink mt-3 group-hover:text-signal transition-colors">
        {project.title}
      </h3>

      <p className="font-body text-sm text-ink/70 mt-2 leading-relaxed">
        {project.summary}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.stack.slice(0, 4).map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
        {project.stack.length > 4 && (
          <span className="font-sans text-[11px] text-ink/50 self-center">
            +{project.stack.length - 4} more
          </span>
        )}
      </div>
    </Link>
  );
}
