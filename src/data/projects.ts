// src/data/projects.ts
import type { Project } from "../types/Project";

const projects: Project[] = [
  {
    id: "1",
    title: "Project A",
    summary: "Short description of Project A",
    techStack: ["React", "TypeScript", "CSS"],
    link: "https://github.com/morrowchristian/project-a",
    image: "/assets/projectA.png"
  },
  {
    id: "2",
    title: "Project B",
    summary: "Short description of Project B",
    techStack: ["Django", "Python", "PostgreSQL"],
    link: "https://github.com/morrowchristian/project-b",
    image: "/assets/projectB.png"
  }
];

export default projects;