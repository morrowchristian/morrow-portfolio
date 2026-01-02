// src/components/ProjectCard.tsx
import React from "react";
import type { Project } from "../types/Project";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", width: "250px" }}>
      {project.image && <img src={project.image} alt={project.title} style={{ width: "100%" }} />}
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <span>{project.techStack.join(", ")}</span>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
