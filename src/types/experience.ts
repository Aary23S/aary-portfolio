export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  /** e.g. "Remote" or city name. Omit if not applicable. */
  location?: string;
  startDate: string; // ISO "YYYY-MM" — formatted for display via utils/formatDate
  endDate: string | "present";
  bullets: string[];
  stack: string[];
}
