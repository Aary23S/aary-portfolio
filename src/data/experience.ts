import type { ExperienceEntry } from "../types";

export const experience: ExperienceEntry[] = [
  {
    id: "saffron-edge",
    role: "Software Developer Internship",
    organization: "Saffron Edge Tech Universe",
    location: "Remote Kolhapur",
    startDate: "2025-10",
    endDate: "2026-08",
    bullets: [
      "Engineered cross-platform mobile apps using Flutter and Firebase, developing robust Node.js/Express.js REST APIs with JWT authentication, rate limiting, and structured error handling.",
      "Deployed automated backend pipelines on AWS Linux via Jenkins CI/CD to maintain multi-environment parity.",
      "Contributed to full-stack Agile sprints, participating in code reviews, sprint planning, and production debugging.",
      "Handled client requirements, working on KVM, WooCommerce, Node.js, and Python scripts.",
      "Created a better User Experience for more than 200-300 active users of the Krushi Samskruti mobile app and website."
    ],
    stack: ["Flutter", "Firebase", "Node.js", "Express.js", "JWT", "AWS", "Jenkins", "Firestore", "KVM"],
  },
  {
    id: "zerovaega",
    role: "Web Developer Intern",
    organization: "Zerovaega Technologies",
    location: "On-site Kolhapur",
    startDate: "2025-07",
    endDate: "2025-10",
    bullets: [
      "Architected an AI-powered Document Intelligence Platform featuring a secure multi-file upload pipeline and real-time LLM Q&A using the RAG pattern over large document corpora.",
      "Implemented Three.js JWT authentication and optimized backend.",
      "Developed role-based grievance management systems for web & app for political ventures to handle their in-house ticket raising and grievance management.",
      "Improved the output efficiency of real-time LLM by 20%."
    ],
    stack: ["Node.js", "Express.js", "REST APIs", "JWT", "Flutter", "React.js", "Three.js", "GitLab", "CI/CD", "Angular.js", "MySQL"],
  },
];
