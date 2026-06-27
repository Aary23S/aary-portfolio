import type { EducationEntry } from "../types";

// CGPA reconciled per user's explicit instruction: use 8.50 (resume value)
// even though the CV listed 8.10 with a separate Sem 7 figure of 9.20.
// See docs/PROJECT_CONTEXT.md §6 for the reconciliation decision.

export const education: EducationEntry[] = [
  {
    id: "btech",
    institution: "DY Patil Agriculture & Technical University",
    credential: "B.Tech — Computer Science & Engineering",
    location: "Talsande, Kolhapur, Maharashtra, India",
    startDate: "2022-10",
    endDate: "2026-08",
    scoreLabel: "CGPA: 8.50 / 10",
    notes: [
      "Relevant coursework: Data Structures & Algorithms, Operating Systems, Computer Networks, Database Management, OOPs, DevOps",
    ],
  },
  {
    id: "hsc",
    institution: "Private High School & Junior College",
    credential: "Higher Secondary Certificate (H.S.C. — Science)",
    location: "Kop",
    startDate: "2019-06",
    endDate: "2021",
    scoreLabel: "90.00% (540 / 600), First Attempt",
  },
  {
    id: "ssc",
    institution: "Private High School & Junior College",
    credential: "Secondary School Certificate (S.S.C.)",
    location: "Kop",
    startDate: "2017-06",
    endDate: "2019",
    scoreLabel: "90.80% (454 / 500), First Attempt",
  },
];
