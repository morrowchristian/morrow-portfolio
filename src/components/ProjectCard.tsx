// src/components/ProjectCard.tsx
import React from "react";
import type { Project } from "../types/Project";
import "../styles/ProjectCard.css";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="project-card">
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="project-card-image"
        />
      )}

      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <span>{project.techStack.join(", ")}</span>
    </div>
  );
};

export default ProjectCard;
