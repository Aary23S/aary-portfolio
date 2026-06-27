import type { AchievementEntry } from "../types";

export const achievements: AchievementEntry[] = [
  // Competitive programming
  {
    id: "codeforces",
    category: "competitive-programming",
    title: "CodeForces",
    description: "Peak rating 769 (Newbie) — 150+ problems solved.",
    dateLabel: "Ongoing",
  },
  {
    id: "codechef",
    category: "competitive-programming",
    title: "CodeChef",
    description: "Peak rating 1083 (1 Star) — 100+ problems solved.",
    dateLabel: "Ongoing",
  },
  {
    id: "leetcode",
    category: "competitive-programming",
    title: "LeetCode",
    description: "100+ problems solved.",
    dateLabel: "Ongoing",
  },
  {
    id: "hackerrank",
    category: "competitive-programming",
    title: "HackerRank",
    description: "Golden Badges in C, C++, Algorithms, and Python.",
    dateLabel: "Ongoing",
  },

  // Ambassador / selection programmes
  {
    id: "gdsc",
    category: "ambassador-program",
    title: "Google Developer Student Club (GDSC)",
    description:
      "First candidate from university to clear all rounds; advanced to final selection interview (International Level).",
    dateLabel: "2024",
  },
  {
    id: "mlsa",
    category: "ambassador-program",
    title: "Microsoft Learn Student Ambassador (MLSA)",
    description: "Selected; advancing to final stage (International Level).",
    dateLabel: "2024",
  },
  {
    id: "github-ca",
    category: "ambassador-program",
    title: "GitHub Campus Ambassador",
    description: "Selected; advancing to final interview (International Level).",
    dateLabel: "2024",
  },
  {
    id: "iit-bombay-techfest",
    category: "ambassador-program",
    title: "IIT Bombay Techfest — Cybersecurity Conference",
    description: "Represented university at national-level conference.",
    dateLabel: "2024",
  },

  // Academic & cultural
  {
    id: "paper-presentation",
    category: "academic",
    title: "2nd Position — Paper Presentation on Women Empowerment",
    description: "TKIT Varnanagar, National Level.",
    dateLabel: "2025",
  },
  {
    id: "debate-runner-up",
    category: "academic",
    title: "2nd Runner-Up — Inter-College Debate Competition",
    description: "National Level, DY Patil ATU.",
    dateLabel: "2025",
  },
  {
    id: "gssoc",
    category: "academic",
    title: "Open Source Contributor — GirlScript Summer of Code (GSSoC)",
    description: "Contributed to open-source projects as part of GSSoC 2024.",
    dateLabel: "2024",
  },

  // Hackathons
  {
    id: "odoo-hackathon",
    category: "hackathon",
    title: "Odoo Hackathon",
    description: "Participant, National Level.",
    dateLabel: "2025",
  },
  {
    id: "other-hackathons",
    category: "hackathon",
    title: "5+ National-Level Hackathons",
    description: "DKTE, Rajarambapu Institute of Technology, DYP Bawada, and CSIBER.",
    dateLabel: "2024–2025",
  },
];
