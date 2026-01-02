// src/data/skills.ts
import { SiReact, SiTypescript, SiJavascript, SiPython, SiSwift, SiHtml5, SiCss3, SiDjango, SiNodedotjs, SiDocker, SiAmazon, SiVercel, SiGithub, SiPostgresql, SiMysql, SiSqlite } from "react-icons/si";

export const languages = [
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Swift", icon: <SiSwift /> },
];

export const webFundamentals = [
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
];

export const frameworksAndTools = [
  { name: "React", icon: <SiReact /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "AWS", icon: <SiAmazon /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "GitHub", icon: <SiGithub /> },
];

export const databases = [
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "SQLite", icon: <SiSqlite /> },
];

export const engineeringPrinciples = [
  {
    title: "Clean, Understandable Code",
    description: "I prioritize clarity and structure so systems are easy to maintain, extend, and reason about.",
  },
  {
    title: "Thoughtful UI & UX",
    description: "Interfaces are built with intention—focused on usability, accessibility, and real user needs.",
  },
  {
    title: "Practical Architecture",
    description: "I design systems that balance scalability with simplicity, avoiding unnecessary complexity.",
  },
  {
    title: "Ownership & Reliability",
    description: "Comfortable taking features from idea to deployment, with attention to long-term stability.",
  },
];
