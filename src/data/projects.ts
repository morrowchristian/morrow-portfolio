// src/data/projects.ts
import type { Project } from "../types/Project";

const projects: Project[] = [
  {
    id: "event-dashboard",
    title: "Event Dashboard",
    summary:
      "A real‑time event management dashboard featuring analytics, filtering, and a clean UI for tracking activity.",
    techStack: ["React", "TypeScript", "Tailwind", "API Integration"],
    link: "https://github.com/morrowchristian/event-dashboard",
    image: "/assets/event-dashboard.png"
  },
  {
    id: "north-georgia-awning-website",
    title: "North Georgia Awning Website",
    summary:
      "A modern, responsive business website built for a local awning company, focusing on clean design and accessibility.",
    techStack: ["React", "JavaScript", "CSS", "Responsive Design"],
    link: "https://github.com/morrowchristian/north-georgia-awning-website",
    image: "/assets/north-georgia-awning.png"
  },
  {
    id: "timespan-calculator",
    title: "Timespan Calculator",
    summary:
      "A utility tool for calculating precise time differences with a simple, intuitive interface.",
    techStack: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/morrowchristian/timespan-calculator",
    image: "/assets/timespan-calculator.png"
  },
  {
    id: "mynotes",
    title: "MyNotes",
    summary:
      "A lightweight note‑taking app with local storage persistence and a clean, distraction‑free UI.",
    techStack: ["React", "TypeScript", "LocalStorage"],
    link: "https://github.com/morrowchristian/MyNotes",
    image: "/assets/mynotes.png"
  }
];

export default projects;
