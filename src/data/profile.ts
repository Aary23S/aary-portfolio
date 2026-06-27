import type { Profile } from "../types";

// NOTE: contactFormAccessKey is a placeholder. Sign up free at
// https://web3forms.com, get your access key, and replace the value below.
// The contact form will silently fail validation until this is set.

export const profile: Profile = {
  name: "Aary Satardekar",
  tagline: "Full-Stack Developer & Systems Engineer",
  avatarUrl: "/profile.jpg",
  avatarAlt: "Aary Satardekar portrait",
  bioShort:
    "Final-year Computer Science & Engineering student building production-grade full-stack systems — from Flutter mobile apps to AI-powered backends — while leading a 400+ member student tech community.",
  bioLong:
    "I'm a final-year B.Tech Computer Science & Engineering student at DY Patil Agriculture & Technical University, graduating August 2026. My work spans full-stack development — Flutter and Firebase on the frontend, Node.js and MySQL on the backend — with hands-on production experience across two internships building real systems for real users. Alongside engineering, I run Igniting Minds, a content channel on geopolitics and international relations, and lead Code Wizards, a coding community I co-founded that has grown to 400+ students. I'm drawn to problems at the intersection of applied AI, systems design, and decision-making under constraints — whether that's a RAG pipeline for document Q&A or adaptive question generation for exam prep.",
  location: "Pune, Maharashtra, India",
  email: "satardekaraary@gmail.com",
  phone: "+91 8208357153",
  socials: [
    { platform: "github", label: "GitHub", url: "https://github.com/Aary23S" },
    { platform: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/aarys23/" },
    { platform: "leetcode", label: "LeetCode", url: "https://leetcode.com/u/pheonix_23/" },
    { platform: "codeforces", label: "Codeforces", url: "https://codeforces.com/profile/pheonix_23" },
    { platform: "codechef", label: "CodeChef", url: "https://www.codechef.com/users/phoenix_2663" },
    {
      platform: "instagram",
      label: "Igniting Minds",
      url: "https://instagram.com/igniting_minds_15",
    },
    { platform: "email", label: "Email", url: "mailto:satardekaraary@gmail.com" },
  ],
  researchInterests: [
    {
      title: "AI Applications in Defence & National Security",
      description:
        "Autonomous systems, intelligent threat detection, surveillance intelligence, and AI-driven decision support for strategic and defence operations.",
    },
    {
      title: "AI for Education & Civic Access",
      description:
        "Adaptive learning systems, NLP-driven question generation from historical examination data, and AI tools that democratize access to competitive exam preparation at scale.",
    },
  ],
  contactFormAccessKey: "YOUR_WEB3FORMS_ACCESS_KEY_HERE",
};
