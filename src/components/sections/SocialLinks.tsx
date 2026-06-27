import { profile } from "../../data/profile";

export function SocialLinks() {
  const links = profile.socials.filter((link) => link.platform !== "email" && link.platform !== "phone");

  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => (
        <a
          key={link.platform}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center gap-2 rounded-full border border-brass/25
            bg-paper/70 px-4 py-2 font-mono text-[11px] uppercase tracking-widest
            text-ink/75 transition-colors hover:border-flag hover:text-flag
          "
          aria-label={`${link.label} profile`}
        >
          <span>{link.label}</span>
          <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  );
}
