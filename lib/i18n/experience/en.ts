import type { ExperienceSection } from "../types";

// Newest first. Copy one object to add a new position.
export const experienceEn: ExperienceSection = {
  eyebrow: "WORK EXPERIENCE",
  title: "My Experience.",
  description:
    "Building and maintaining web applications, reusable component systems, and scalable user interfaces with a focus on code quality, maintainability, and user experience.",
  currentLabel: "Latest Position",
  emptyText: "Work experience will be available soon.",

  items: [
    {
      role: "Front-End Developer",
      company: "Sepidor | Pars Iranian AI Holding",
      period: "Oct 2025 — Jul 2026",
      location: "Tehran, Iran",
      description:
        "Developed and maintained two enterprise applications, Mail and Drive, using Next.js, React, and TypeScript. Implemented complex forms and schema-based validation with React Hook Form and Zod, managed client-side state with Zustand, and handled server-state management, caching, and API requests with React Query. Collaborated closely with backend developers to integrate APIs and deliver product features. Developed an internal shared component package using Storybook, creating modular, reusable UI components to improve interface consistency, code reuse, and developer experience.",
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "shadcn/ui",
        "Zustand",
        "React Query",
        "React Hook Form",
        "Zod",
        "Storybook",
      ],
      current: false,
    },

    {
      role: "Front-End Developer",
      company: "Sejayanegar | Knowledge-Based Company",
      period: "Mar 2024 — Apr 2025",
      location: "Tehran, Iran",
      description:
        "Designed and developed user interfaces for educational platforms serving combat veterans, with a focus on usability, responsive design, and performance. Collaborated with backend developers through daily meetings and Agile workflows. Contributed to the analysis and implementation of educational features for enterprise products and worked with security-related solutions for services and files.",
      stack: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Material UI",
        "API Integration",
        "Agile",
      ],
    },

    {
      role: "Front-End Developer",
      company: "Peyk",
      period: "Feb 2022 — Jan 2024",
      location: "United Kingdom",
      description:
        "Developed a fully responsive corporate website using HTML, CSS, and Bootstrap. Built an interactive bot dashboard with React and WebSocket, enabling real-time communication between the client and server.",
      stack: [
        "React",
        "JavaScript",
        "Bootstrap",
        "HTML",
        "CSS",
        "WebSocket",
        "Responsive Design",
      ],
    },
  ],
};