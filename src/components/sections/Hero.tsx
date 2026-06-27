import { profile } from "../../data/profile";
import { SectionLabel } from "../ui/SectionLabel";
import { ProfilePortrait } from "./ProfilePortrait";
import { SocialLinks } from "./SocialLinks";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section
      id="overview"
      className="px-6 lg:px-16 pt-16 lg:pt-24 pb-12 scroll-mt-8"
    >
      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.85fr] lg:items-center">
        <div>
          <SectionLabel>§01 — Overview</SectionLabel>

          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-7xl mt-4 leading-[1.05] text-ink">
            {profile.name}
          </h1>

          <p className="font-mono text-sm lg:text-base text-signal mt-3 tracking-wide">
            {profile.tagline}
          </p>

          <p className="font-body text-base lg:text-lg text-ink/80 max-w-2xl mt-6 leading-relaxed">
            {profile.bioShort}
          </p>

          <div className="flex flex-wrap gap-4 mt-8 font-mono text-xs text-ink/60">
            <span>{profile.location}</span>
            <span aria-hidden="true">·</span>
            <span>Graduating Aug 2026</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-sm bg-signal px-5 py-2.5 font-mono text-sm uppercase tracking-wide text-paper transition-colors hover:bg-signal-light"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm border border-ink/20 px-5 py-2.5 font-mono text-sm uppercase tracking-wide text-ink transition-colors hover:border-flag hover:text-flag"
            >
              Contact Me
            </Link>
          </div>

          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>

        <div className="lg:pl-6">
          <ProfilePortrait />
        </div>
      </div>
    </section>
  );
}
