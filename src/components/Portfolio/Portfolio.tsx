// src/components/Portfolio/Portfolio.tsx
import "./Portfolio.css";
import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import { Container } from "../Container/Container";
import { Grid } from "../Grid/Grid";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { ProjectModalContent } from "./ProjectModalContent";

export const Portfolio: React.FC = () => {
  const { ref, isVisible } = useInViewAnimation();
  const isMobile = useMediaQuery("(max-width: 640px)");

  // Filtering
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const FILTERS = ["All", "React", "TypeScript", "JavaScript", "CSS", "HTML"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  // Modal
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  return (
    <section id="portfolio" className="portfolio">
      <Container>
        <h2 className="portfolio__title">Portfolio</h2>

        {/* Filter Bar */}
        <div className="portfolio__filters">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              className={`portfolio__filter-btn ${
                activeFilter === filter ? "is-active" : ""
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <Grid
          ref={ref}
          columns={isMobile ? "1fr" : "repeat(auto-fill, minmax(280px, 1fr))"}
          className={`animate ${isVisible ? "animate--visible" : ""}`}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </Grid>
      </Container>

      {/* Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <ProjectModalContent project={selectedProject} />
        )}
      </Modal>
    </section>
  );
};

