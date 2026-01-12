// src/components/Portfolio/Portfolio.tsx
import "./Portfolio.css";
import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import { Container } from "../Container/Container";
import { Grid } from "../Grid/Grid";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export const Portfolio: React.FC = () => {
  const { ref, isVisible } = useInViewAnimation();
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <section id="portfolio" className="portfolio">
      <Container>
        <h2 className="portfolio__title">Portfolio</h2>

        <Grid
          ref={ref}
          columns={isMobile ? "1fr" : "repeat(auto-fill, minmax(280px, 1fr))"}
          className={`animate ${isVisible ? "animate--visible" : ""}`}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </Grid>
      </Container>
    </section>
  );
};

/* TODO (Portfolio)
- Add project filtering (by tech, category)
- Add modal or expanded view for project details
- Add hover animations for cards
- Add responsive spacing and typography
- Add lazy-loading or fade-in for images
*/
