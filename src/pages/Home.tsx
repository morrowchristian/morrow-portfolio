// src/pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Home: React.FC = () => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome to Christian Morrow's Portfolio</h1>
      <p>Click a project card to view details.</p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "2rem",
          marginTop: "2rem"
        }}
      >
        {projects.map((project) => (
          <Link key={project.id} to={`/${project.id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
