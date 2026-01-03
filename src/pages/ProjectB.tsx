// src/pages/ProjectB.tsx
import React from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const ProjectB: React.FC = () => {
  const project = projects.find(p => p.id === "project-b");

  if (!project) return <p>Project not found</p>;

  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "2rem" }}>
      <ProjectCard project={project} />
    </div>
  );
};

export default ProjectB;
