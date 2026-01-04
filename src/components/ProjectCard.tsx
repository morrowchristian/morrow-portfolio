import React from "react";
import { Link } from "react-router-dom";
import type { Project } from "../types/Project";
import "../styles/ProjectCard.css";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`} className="project-card">
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
    </Link>
  );
};

export default ProjectCard;
