// src/sections/Projects.tsx
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <div className="projects">
      <h2>Featured Work</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
