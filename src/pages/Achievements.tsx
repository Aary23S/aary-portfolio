import { achievements } from "../data/achievements";
import { SectionLabel } from "../components/ui/SectionLabel";
import type { AchievementCategory } from "../types";

const CATEGORY_LABELS: Record<AchievementCategory, string> = {
  "competitive-programming": "Competitive Programming",
  "ambassador-program": "Ambassador & Selection Programmes",
  academic: "Academic & Cultural",
  hackathon: "Hackathons",
};

const CATEGORY_ORDER: AchievementCategory[] = [
  "competitive-programming",
  "ambassador-program",
  "hackathon",
  "academic",
];

export function Achievements() {
  return (
    <div className="px-6 lg:px-16 py-16 lg:py-20 max-w-4xl">
      <section id="achievements" className="scroll-mt-8">
        <SectionLabel>§04 — Achievements</SectionLabel>
        <h1 className="font-display font-black text-3xl lg:text-4xl mt-3 text-ink">
          Achievements &amp; Recognition
        </h1>

        <div className="mt-10 space-y-12">
          {CATEGORY_ORDER.map((category) => {
            const items = achievements.filter((a) => a.category === category);
            if (items.length === 0) return null;

            return (
              <div key={category}>
                <h2 className="font-mono text-xs uppercase tracking-widest text-signal">
                  {CATEGORY_LABELS[category]}
                </h2>
                <div className="mt-4 space-y-5">
                  {items.map((item) => (
                    <div key={item.id} className="grid sm:grid-cols-[100px_1fr] gap-3 sm:gap-6">
                      <div className="font-mono text-xs text-brass uppercase tracking-wide">
                        {item.dateLabel}
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-base text-ink">
                          {item.title}
                        </h3>
                        <p className="font-body text-sm text-ink/70 mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
