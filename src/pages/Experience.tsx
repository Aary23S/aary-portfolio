import { experience } from "../data/experience";
import { education } from "../data/education";
import { leadership } from "../data/leadership";
import { ExperienceItem } from "../components/sections/ExperienceItem";
import { SectionLabel } from "../components/ui/SectionLabel";
import { formatDateRange } from "../utils/formatDate";

export function Experience() {
  return (
    <div className="px-6 lg:px-16 py-16 lg:py-20 max-w-4xl">
      <section id="experience" className="scroll-mt-8">
        <SectionLabel>§02 — Experience</SectionLabel>
        <h1 className="font-display font-black text-3xl lg:text-4xl mt-3 text-ink">
          Work Experience
        </h1>

        <div className="mt-8">
          {experience.map((entry) => (
            <ExperienceItem key={entry.id} entry={entry} />
          ))}
        </div>
      </section>

      <section className="mt-16 pt-12 border-t border-brass/20">
        <SectionLabel>Education</SectionLabel>
        <div className="mt-6 space-y-6">
          {education.map((entry) => (
            <div key={entry.id} className="grid sm:grid-cols-[140px_1fr] gap-4 sm:gap-8">
              <div className="font-mono text-xs text-brass uppercase tracking-wide">
                {formatDateRange(entry.startDate, entry.endDate)}
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-ink">
                  {entry.credential}
                </h3>
                <p className="font-sans text-sm text-signal mt-1">
                  {entry.institution}
                  {entry.location ? ` · ${entry.location}` : ""}
                </p>
                {entry.scoreLabel && (
                  <p className="font-body text-sm text-ink/70 mt-1">{entry.scoreLabel}</p>
                )}
                {entry.notes?.map((note, idx) => (
                  <p key={idx} className="font-body text-sm text-ink/70 mt-1">
                    {note}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 pt-12 border-t border-brass/20">
        <SectionLabel>Leadership &amp; Community</SectionLabel>
        <div className="mt-6 space-y-8">
          {leadership.map((entry) => (
            <div key={entry.id} className="grid sm:grid-cols-[140px_1fr] gap-4 sm:gap-8">
              <div className="font-mono text-xs text-brass uppercase tracking-wide">
                {formatDateRange(entry.startDate, entry.endDate)}
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-ink">{entry.role}</h3>
                <p className="font-sans text-sm text-signal mt-1">{entry.organization}</p>
                <ul className="mt-3 space-y-2">
                  {entry.bullets.map((bullet, idx) => (
                    <li key={idx} className="font-body text-sm text-ink/80 leading-relaxed pl-4 relative">
                      <span className="absolute left-0 text-brass" aria-hidden="true">—</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
