import { useEffect, useState } from "react";

/**
 * Tracks which of the given section element IDs is currently most visible
 * in the viewport. Used to highlight the active item in the DossierRail nav
 * as the user scrolls a single page (Home).
 *
 * Returns null if no section is currently intersecting (e.g. on a page that
 * has no matching section IDs — the rail then falls back to route-based
 * active state instead).
 */
export function useScrollSpy(sectionIds: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the largest visible ratio rather than just
        // "first intersecting" — avoids flicker when two sections are both
        // partially visible near a fast scroll.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
