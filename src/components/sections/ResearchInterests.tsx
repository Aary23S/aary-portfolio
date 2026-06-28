import { profile } from "../../data/profile";
import { SectionLabel } from "../ui/SectionLabel";

export function ResearchInterests() {
  return (
    <section className="px-4 sm:px-6 lg:px-16 py-12 border-t border-brass/20">
      <SectionLabel>Research Interests</SectionLabel>

      <div className="grid gap-6 md:grid-cols-2 mt-6">
        {profile.researchInterests.map((interest) => (
          <div key={interest.title}>
            <h3 className="font-display font-semibold text-lg text-ink">
              {interest.title}
            </h3>
            <p className="font-body text-sm text-ink/70 mt-2 leading-relaxed">
              {interest.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
