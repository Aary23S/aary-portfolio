import type { ExperienceEntry } from "../types";

export const experience: ExperienceEntry[] = [
  {
    id: "saffron-edge",
    role: "Full Stack Developer Intern",
    organization: "Saffron Edge Tech Universe",
    location: "Remote",
    startDate: "2025-10",
    endDate: "present",
    bullets: [
      "Building cross-platform mobile applications with Flutter and Firebase — managing real-time data pipelines, authentication flows, and cloud service integrations.",
      "Developing and maintaining Node.js REST APIs deployed via Jenkins CI/CD pipelines on AWS Linux environments.",
      "Contributing across the full stack in Agile sprints: sprint planning, code reviews, and production debugging for startup-grade applications.",
    ],
    stack: ["Flutter", "Firebase", "Node.js", "Jenkins", "AWS", "Git", "Linux"],
  },
  {
    id: "zerovaega",
    role: "Web Developer Intern",
    organization: "ZeroVaega Technologies",
    startDate: "2025-07",
    endDate: "2025-10",
    bullets: [
      "Architected and delivered an AI-powered document intelligence platform with secure upload, management pipeline, and real-time context-aware Q&A.",
      "Implemented JWT authentication, file handling, and similarity-based retrieval for contextually accurate AI response generation.",
      "Optimized backend throughput using Node.js, Express, and Sequelize ORM against MySQL.",
    ],
    stack: ["Node.js", "Express", "Sequelize", "MySQL", "JWT", "REST APIs"],
  },
];
