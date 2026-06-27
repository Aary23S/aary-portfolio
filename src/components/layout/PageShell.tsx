import type { ReactNode } from "react";
import { DossierRail } from "./DossierRail";
import { Footer } from "./Footer";
import { ThemeToggle } from "./ThemeToggle";

interface PageShellProps {
  children: ReactNode;
}

/**
 * Wraps every route. Owns the layout offset needed to accommodate the fixed
 * DossierRail (left sidebar on desktop, bottom bar on mobile) so individual
 * pages never need to know about the nav's positioning.
 */
export function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <ThemeToggle />
      <DossierRail />
      <div className="lg:pl-56 pb-20 lg:pb-0 flex flex-col min-h-screen">
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
