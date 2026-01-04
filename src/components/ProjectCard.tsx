// src/components/ProjectCard.tsx
import React from "react";
import { Link } from "react-router-dom";
import type { Project } from "../types/Project";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="project-card"
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        width: "250px",
        display: "block",
        textDecoration: "none",
        color: "inherit"
      }}
    >
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          style={{ width: "100%" }}
        />
      )}

      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <span>{project.techStack.join(", ")}</span>
    </Link>
  );
};

export default ProjectCard;
