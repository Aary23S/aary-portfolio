export interface EducationEntry {
  id: string;
  institution: string;
  credential: string;
  location?: string;
  startDate: string;
  endDate: string | "present";
  /** e.g. "CGPA: 8.50 / 10" or "Aggregate: 90.00%" — kept as display string since formats vary */
  scoreLabel?: string;
  notes?: string[];
}

export type AchievementCategory =
  | "competitive-programming"
  | "ambassador-program"
  | "academic"
  | "hackathon";

export interface AchievementEntry {
  id: string;
  category: AchievementCategory;
  title: string;
  description: string;
  /** e.g. "2025" or "2023–2025" */
  dateLabel: string;
}

export interface LeadershipEntry {
  id: string;
  role: string;
  organization: string;
  startDate: string;
  endDate: string | "present";
  bullets: string[];
}
