/**
 * Formats an ISO "YYYY-MM" or "YYYY" string into a display label.
 * Accepts the literal "present" as a passthrough for ongoing roles/projects.
 *
 * formatDate("2025-10") -> "Oct 2025"
 * formatDate("2025")    -> "2025"
 * formatDate("present") -> "Present"
 */
export function formatDate(value: string): string {
  if (value === "present") return "Present";

  const [year, month] = value.split("-");
  if (!month) return year;

  const monthIndex = Number(month) - 1;
  const monthLabel = MONTH_LABELS[monthIndex];
  return monthLabel ? `${monthLabel} ${year}` : year;
}

/**
 * Formats a date range for display, e.g. "Oct 2025 — Present" or "Apr 2025".
 * Omits the range dash entirely if start and end resolve to the same label.
 */
export function formatDateRange(start: string, end?: string): string {
  const startLabel = formatDate(start);
  if (!end) return startLabel;

  const endLabel = formatDate(end);
  return startLabel === endLabel ? startLabel : `${startLabel} — ${endLabel}`;
}

const MONTH_LABELS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];
