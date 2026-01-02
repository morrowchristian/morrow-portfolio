// src/pages/Home.tsx
import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

const Home: React.FC = () => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Christian Morrow's Portfolio</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginTop: "2rem" }}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Home;
