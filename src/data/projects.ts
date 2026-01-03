// src/data/projects.ts
import type { Project } from "../types/Project";

const projects: Project[] = [
  {
    id: "project-a",
    title: "Project A",
    summary: "Short description of Project A",
    techStack: ["React", "TypeScript", "CSS"],
    link: "https://github.com/morrowchristian/project-a",
    image: "/assets/projectA.png"
  },
  {
    id: "project-b",
    title: "Project B",
    summary: "Short description of Project B",
    techStack: ["Django", "Python", "PostgreSQL"],
    link: "https://github.com/morrowchristian/project-b",
    image: "/assets/projectB.png"
  },
  {
    id: "project-c",
    title: "Project C",
    summary: "Short description of Project C",
    techStack: ["Django", "Python", "PostgreSQL"],
    link: "https://github.com/morrowchristian/project-c",
    image: "/assets/projectC.png"
  }
];

export default projects;
