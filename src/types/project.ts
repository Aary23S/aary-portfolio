export type ProjectStatus = "in-progress" | "completed" | "planned";

export interface ProjectEntry {
  /** URL-safe slug, used as the route param for the detail page: /projects/:slug */
  slug: string;
  title: string;
  /** One-line summary shown in the project grid/list. */
  summary: string;
  /** Full description shown on the project detail page. Supports multiple paragraphs. */
  description: string[];
  status: ProjectStatus;
  /** ISO "YYYY-MM" for sorting; display formatting handled in utils/formatDate */
  startDate: string;
  endDate?: string | "present";
  stack: string[];
  /** Optional — only set if there's a live, public deployment to link to. */
  liveUrl?: string;
  /** Optional — only set if the repo is public. */
  repoUrl?: string;
  /** Filenames expected under src/assets/images/projects/ — not full paths. */
  images?: string[];
  highlights?: string[];
}
