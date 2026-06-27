import type { ExperienceEntry } from "../../types";
import { Tag } from "../ui/Tag";
import { formatDateRange } from "../../utils/formatDate";

interface ExperienceItemProps {
  entry: ExperienceEntry;
}

export function ExperienceItem({ entry }: ExperienceItemProps) {
  return (
    <article className="grid sm:grid-cols-[140px_1fr] gap-4 sm:gap-8 py-8 border-b border-brass/20 last:border-b-0">
      <div className="font-mono text-xs text-brass uppercase tracking-wide">
        {formatDateRange(entry.startDate, entry.endDate)}
      </div>

      <div>
        <h3 className="font-display font-semibold text-xl text-ink">{entry.role}</h3>
        <p className="font-mono text-sm text-signal mt-1">
          {entry.organization}
          {entry.location ? ` · ${entry.location}` : ""}
        </p>

        <ul className="mt-4 space-y-2">
          {entry.bullets.map((bullet, idx) => (
            <li key={idx} className="font-body text-sm text-ink/80 leading-relaxed pl-4 relative">
              <span className="absolute left-0 text-brass" aria-hidden="true">—</span>
              {bullet}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-4">
          {entry.stack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </div>
    </article>
  );
}
