// src/pages/ProjectC.tsx
import React from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const ProjectC: React.FC = () => {
    const project = projects.find(p => p.id === "project-c");

    if (!project) return <p>Project not found</p>;

    return (
        <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "2rem" }}>
            <ProjectCard project={project} />
            <section>
                <h2>Project Details</h2>
                <p>More in-depth info about Project A...</p>
            </section>
        </div>
    );
};

export default ProjectC;
