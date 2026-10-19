import type { ExperienceSection } from "../types";

// Newest first. Copy one object to add a new position.
export const experienceEn: ExperienceSection = {
  eyebrow: "Work experience",
  title: "Where I've worked.",
  description: "The path where I've built fast, precise and maintainable interfaces for real products.",
  currentLabel: "Current",
  emptyText: "Work experience is coming soon.",
  items: [
    {
      role: "Senior Frontend Developer",
      company: "Freelance",
      period: "2024 — Present",
      location: "Remote",
      description: "Building websites and web platforms for local and international clients, from architecture to final delivery.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand"],
      current: true,
    },
    {
      role: "React & Next.js Developer",
      company: "Product team",
      period: "2022 — 2024",
      location: "Tehran",
      description: "Implemented product UIs, built reusable components and improved page performance.",
      stack: ["React", "Next.js", "React Query"],
    },
    {
      role: "UI Developer",
      company: "Web studio",
      period: "2020 — 2022",
      location: "Tehran",
      description: "Turned designs into responsive, accessible pages in close collaboration with the design team.",
      stack: ["HTML", "CSS", "JavaScript", "React"],
    },
  ],
};
