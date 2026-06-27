export interface NavEntry {
  /** Two-digit string for the §NN display, e.g. "01" */
  index: string;
  label: string;
  /** Route path for multi-page navigation */
  path: string;
  /** Matching element ID on the Home page, used for scroll-spy when on "/" */
  sectionId?: string;
}

export const navEntries: NavEntry[] = [
  { index: "01", label: "Overview", path: "/", sectionId: "overview" },
  { index: "02", label: "Experience", path: "/experience", sectionId: "experience" },
  { index: "03", label: "Projects", path: "/projects", sectionId: "projects" },
  { index: "04", label: "Achievements", path: "/achievements", sectionId: "achievements" },
  { index: "05", label: "Contact", path: "/contact", sectionId: "contact" },
];
