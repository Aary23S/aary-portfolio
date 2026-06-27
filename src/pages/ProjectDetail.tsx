import { Link, Navigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { Tag } from "../components/ui/Tag";
import { LinkButton } from "../components/ui/Button";
import { SectionLabel } from "../components/ui/SectionLabel";
import { formatDateRange } from "../utils/formatDate";

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  // Unknown slug — redirect rather than render a broken detail page.
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="px-6 lg:px-16 py-16 lg:py-20 max-w-3xl">
      <Link to="/projects" className="font-sans text-xs font-medium tracking-tight text-signal hover:text-flag transition-colors">
        ← All projects
      </Link>

      <SectionLabel className="block mt-8">
        {formatDateRange(project.startDate, project.endDate)}
      </SectionLabel>

      <h1 className="font-display font-black text-3xl lg:text-4xl mt-3 text-ink">
        {project.title}
      </h1>

      <div className="flex flex-wrap gap-2 mt-5">
        {project.stack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>

      <div className="mt-8 space-y-4">
        {project.description.map((paragraph, idx) => (
          <p key={idx} className="font-body text-base text-ink/80 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {project.highlights && project.highlights.length > 0 && (
        <div className="mt-8">
          <SectionLabel>Highlights</SectionLabel>
          <ul className="mt-3 space-y-2">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="font-body text-sm text-ink/80 leading-relaxed pl-4 relative">
                <span className="absolute left-0 text-brass" aria-hidden="true">—</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}

      {(project.liveUrl || project.repoUrl) && (
        <div className="flex flex-wrap gap-3 mt-10">
          {project.liveUrl && (
            <LinkButton href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              View Live →
            </LinkButton>
          )}
          {project.repoUrl && (
            <LinkButton href={project.repoUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
              Source Code →
            </LinkButton>
          )}
        </div>
      )}
    </div>
  );
}
