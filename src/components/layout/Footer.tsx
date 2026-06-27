import { profile } from "../../data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brass/30 px-6 lg:px-12 py-6">
      <div className="flex flex-col sm:flex-row justify-between gap-2 font-mono text-xs text-ink/60">
        <span>
          © {year} {profile.name}
        </span>
        <span>Built with React, Tailwind, and a class-based dark mode</span>
      </div>
    </footer>
  );
}
