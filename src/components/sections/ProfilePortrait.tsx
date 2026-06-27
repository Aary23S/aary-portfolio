import { useState } from "react";
import { profile } from "../../data/profile";

export function ProfilePortrait() {
  const [hasImageError, setHasImageError] = useState(false);
  const hasImage = Boolean(profile.avatarUrl) && !hasImageError;

  return (
    <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] border border-brass/25 bg-ink/5 shadow-[0_20px_80px_rgba(11,13,16,0.14)]">
      <div className="absolute inset-0 bg-gradient-to-br from-signal/20 via-transparent to-flag/15" aria-hidden="true" />
      {hasImage ? (
        <img
          src={profile.avatarUrl}
          alt={profile.avatarAlt ?? `Portrait of ${profile.name}`}
          className="relative z-10 h-full w-full object-cover object-center"
          onError={() => setHasImageError(true)}
          loading="eager"
          decoding="async"
        />
      ) : (
        <div className="relative z-10 flex aspect-[4/5] flex-col items-center justify-center gap-3 px-6 text-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-full border border-brass/30 bg-paper/80 font-display text-4xl font-black text-signal">
            AS
          </div>
          <div>
            <p className="font-display text-2xl font-semibold text-ink">{profile.name}</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-brass">
              Place your `profile.jpg` in `public/`
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
