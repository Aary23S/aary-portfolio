import { NavLink } from "react-router-dom";
import { navEntries } from "../../data/navigation";

/**
 * The signature design element of this site (see PROJECT_CONTEXT.md §4).
 * Renders as a persistent vertical rail on desktop/tablet, collapsing to a
 * horizontal top bar on mobile via the `lg:` breakpoint switch below.
 *
 * Deliberately restrained: no icons, no decoration beyond the mono index
 * marks and a single accent-colored active state. The "§NN" convention is
 * the one bold choice — everything else stays quiet around it.
 */
export function DossierRail() {
  return (
    <nav
      aria-label="Primary"
      className="
        fixed z-40 bg-paper/95 backdrop-blur-sm
        lg:left-0 lg:top-0 lg:h-full lg:w-56 lg:border-r lg:border-brass/30
        lg:flex lg:flex-col lg:justify-between lg:py-10 lg:px-6
        bottom-0 left-0 right-0 w-full border-t border-brass/30
        flex flex-row justify-around px-2 py-3
      "
    >
      <div className="hidden lg:block">
        <span className="font-sans text-xs font-semibold tracking-[0.2em] text-brass">
          A. SATARDEKAR
        </span>
      </div>

      <ul className="flex lg:flex-col flex-row gap-1 lg:gap-1 w-full lg:w-auto justify-between lg:justify-start">
        {navEntries.map((entry) => (
          <li key={entry.path} className="flex-1 lg:flex-none">
            <NavLink
              to={entry.path}
              className={({ isActive }) =>
                `group flex flex-col lg:flex-row items-center lg:items-baseline gap-0.5 lg:gap-2
                 px-2 lg:px-3 py-2 lg:py-1.5 rounded-sm transition-colors
                 ${isActive ? "text-flag" : "text-ink/70 hover:text-signal"}`
              }
            >
              <span className="font-sans text-[10px] lg:text-xs font-semibold tracking-[0.16em] opacity-70">
                §{entry.index}
              </span>
              <span className="font-sans text-[10px] lg:text-sm font-medium uppercase tracking-[0.12em]">
                {entry.label}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="hidden lg:block">
        <span className="font-sans text-[10px] font-medium tracking-[0.14em] text-brass/70">
          PUNE, IN
        </span>
      </div>
    </nav>
  );
}
