// src/data/skills.ts
import { FaCode, FaTools, FaCss3Alt, FaReact, FaCogs } from "react-icons/fa";

export const skills = [
  {
    category: "Languages & Core Web",
    icon: FaCode,
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Swift", "Python"],
  },
  {
    category: "Frameworks & Libraries",
    icon: FaReact,
    items: ["React", "Next.js", "Angular", "Django"],
  },
  {
    category: "Styling & UI",
    icon: FaCss3Alt,
    items: ["Tailwind CSS", "Bootstrap", "Material UI", "SASS/SCSS"],
  },
  {
    category: "Tools & Platforms",
    icon: FaTools,
    items: ["Git", "Vite", "Postman", "Microsoft Power Automate", "Playwright"],
  },
  {
    category: "Development Concepts",
    icon: FaCogs,
    items: [
      "Responsive Design",
      "Component-Based Architecture",
      "State Management (Redux, Context API)",
      "RESTful APIs",
      "Performance Optimization",
      "Cross-Browser Compatibility",
      "LocalStorage",
    ],
  },
];
