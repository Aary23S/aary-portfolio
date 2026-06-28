import type { ProjectEntry } from "../types";

export const projects: ProjectEntry[] = [
  {
    slug: "aary-portfolio",
    title: "Aary Portfolio — Personal Portfolio Website",
    summary:
      "A polished, responsive portfolio website showcasing projects, experience, and live deployment links.",
    description: [
      "This portfolio website presents my work in a clean, responsive layout with project cards, profile details, and direct access to live deployments.",
      "It is designed to be easy to maintain, visually calm, and production-ready for recruiters, collaborators, and public sharing.",
    ],
    status: "completed",
    platform: "web",
    scope: "full-stack",
    startDate: "2026-06",
    endDate: "2026-06",
    stack: ["React", "TypeScript", "React Router", "Vite", "Tailwind CSS", "Vercel"],
    liveUrl: "https://aary-portfolio.vercel.app/",
    highlights: [
      "Responsive portfolio grid and project detail views",
      "Dark mode with persisted theme preference",
      "Live project and social links surfaced in the UI",
    ],
  },
  {
    slug: "code-wizards",
    title: "Code Wizards — University Coding Club Website",
    summary:
      "A public website for my university's coding club, built to present the community, updates, and club identity cleanly.",
    description: [
      "Code Wizards is the official website for my university's coding club, which I co-founded. It presents the club's presence online in a structured, easy-to-navigate format.",
      "The project focuses on clear communication, public visibility, and a polished experience for students who want to understand the club, explore updates, and engage with the community.",
    ],
    status: "completed",
    platform: "web",
    scope: "frontend",
    startDate: "2026-06",
    endDate: "2026-06",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Vercel"],
    liveUrl: "https://codewizards-eosin.vercel.app/",
    highlights: [
      "Official website for the university coding club",
      "Built to support club identity and public visibility",
      "Co-founded initiative",
    ],
  },
  {
    slug: "vidyaq",
    title: "VidyaQ — AI-Powered UPSC Preparation Platform",
    summary:
      "An AI-driven platform that generates new UPSC GS practice questions from previous years' papers using LLM-based synthesis.",
    description: [
      "VidyaQ is built from scratch as an AI-driven platform for UPSC General Studies preparation. Its core engine dynamically generates new practice questions from previous years' questions (PYQs) using LLM-based synthesis, producing contextually relevant, exam-pattern-aligned questions that reduce dependence on static material.",
      "The architecture supports subject-wise question banks, difficulty gradation, and session-based adaptive learning flows — built to scale beyond a single static question set toward genuinely adaptive practice.",
    ],
    status: "in-progress",
    platform: "web",
    scope: "full-stack",
    startDate: "2025",
    endDate: "present",
    stack: ["Node.js", "LLM Integration", "MySQL", "REST APIs", "Flutter"],
    highlights: [
      "Subject-wise question banks with difficulty gradation",
      "Session-based adaptive learning flow",
      "Reduces dependence on static prep material",
    ],
  },
  {
    slug: "gymify",
    title: "GYMify — Gym Management Mobile Application",
    summary:
      "A full-featured Flutter mobile app for a real gym owner, covering membership, attendance, payments, and member communication.",
    description: [
      "GYMify is a full-featured mobile application built for a real gym owner's actual operational needs — covering membership management, attendance tracking, payment records, and member communication workflows.",
      "Designed around real production requirements rather than a generic template: role-based access, subscription lifecycle management, and daily operational dashboards for the gym owner.",
    ],
    status: "in-progress",
    platform: "app",
    scope: "full-stack",
    startDate: "2025",
    endDate: "present",
    stack: ["Flutter", "Dart", "Firebase", "Authentication", "Firestore"],
    highlights: [
      "Role-based access control",
      "Subscription lifecycle management",
      "Built for a real, operating gym business",
    ],
  },
  {
    slug: "lone-bot-ai",
    title: "Lone Bot AI — Document Intelligence Platform",
    summary:
      "An AI-powered platform for multi-document upload, management, and real-time Q&A using a RAG pattern over a local LLM.",
    description: [
      "Lone Bot AI enables upload and management of multiple documents with real-time Q&A powered by an Ollama-hosted Mistral LLM, using similarity-based retrieval (RAG pattern) for contextually accurate answers.",
      "The platform supports explanation, analysis, and prediction operations across both single and multiple uploaded documents, with JWT-secured access throughout.",
    ],
    status: "completed",
    platform: "web",
    scope: "full-stack",
    startDate: "2025-08",
    endDate: "2025-08",
    stack: ["Node.js", "Express.js", "Ollama", "Mistral", "MySQL", "Sequelize"],
    highlights: [
      "RAG pattern: similarity-based retrieval over uploaded documents",
      "Self-hosted LLM via Ollama — no external API dependency",
      "Explanation, analysis, and prediction modes",
    ],
  },
  {
    slug: "donor-lite",
    title: "Donor Lite — Blood Donor Discovery Platform",
    summary:
      "A WCAG-compliant, responsive frontend for donor search and profiles, structured for full-stack expansion.",
    description: [
      "Donor Lite is a WCAG-compliant, responsive front-end for a blood donor discovery platform, built with a modular CSS architecture and full cross-device support.",
      "The codebase is deliberately structured for full-stack expansion — authentication, a real database, and real-time search are designed in as the natural next phase rather than retrofitted later.",
    ],
    status: "in-progress",
    platform: "web",
    scope: "frontend",
    startDate: "2025-05",
    endDate: "present",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Vercel"],
    liveUrl: "https://donor-lite.vercel.app/",
    highlights: [
      "WCAG-compliant accessibility from the ground up",
      "Modular CSS architecture",
      "Structured for auth + database + real-time search expansion",
    ],
  },
  {
    slug: "hungry-bear-cafeteria",
    title: "Hungry Bear Cafeteria Website",
    summary:
      "A sponsored, production-grade mobile-first café site that boosted user engagement by 40% for 100+ daily users.",
    description: [
      "Built under official institutional sponsorship, this is a production-grade, mobile-first website for a real café — not a class exercise. It shipped with a gallery, menu filtering, and smooth navigation on top of a clean, responsive UX.",
      "The site measurably boosted user engagement by 40% across more than 100 daily users after launch.",
    ],
    status: "completed",
    platform: "web",
    scope: "frontend",
    startDate: "2025-04",
    endDate: "2025-04",
    stack: ["HTML", "CSS", "JavaScript", "Responsive Design", "Vercel"],
    liveUrl: "https://hungrybearcafe.vercel.app/",
    highlights: [
      "Secured official institutional sponsorship",
      "+40% engagement increase, 100+ daily users",
      "Menu filtering and gallery built from scratch",
    ],
  },
];
