// src/components/Portfolio/Portfolio.tsx — Editorial portfolio as a
// horizontal scroller: one project in full detail, the rest lined
// up in a strip below. Click a card (or the arrows, or the arrow
// keys) to change the project being viewed. The page fits one
// viewport — the detail panel flexes to fill the space, and its
// body scrolls internally if the content is taller than the
// panel. No modal: the detail panel IS the details view. ProjectCard.tsx and ProjectModalContent.tsx
// are unreferenced now (kept in the repo, not deleted).
import "./Portfolio.css";
import { useEffect, useRef, useState } from "react";
import { projects } from "../../data/projects";
import { Container } from "../Container/Container";

const FILTERS = ["All", "React", "TypeScript", "JavaScript", "CSS", "HTML"];

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  // Clamp the selection so it stays valid when the filter changes.
  const safeIndex = Math.min(
    selectedIndex,
    Math.max(filteredProjects.length - 1, 0)
  );
  const selected = filteredProjects[safeIndex];

  const handleFilter = (filter: string) => {
    setActiveFilter(filter);
    setSelectedIndex(0);
  };

  const goPrev = () => {
    setSelectedIndex((i) => {
      const safe = Math.min(i, Math.max(filteredProjects.length - 1, 0));
      return (safe - 1 + filteredProjects.length) % filteredProjects.length;
    });
  };
  const goNext = () => {
    setSelectedIndex((i) => {
      const safe = Math.min(i, Math.max(filteredProjects.length - 1, 0));
      return (safe + 1) % filteredProjects.length;
    });
  };

  // Arrow keys move through the projects.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [filteredProjects]);

  // Keep the active card visible in the strip.
  const stripRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const active = stripRef.current?.querySelector<HTMLElement>(
      ".portfolio__strip-card--active"
    );
    active?.scrollIntoView({
      behavior: "smooth",
      inline: "nearest",
      block: "nearest",
    });
  }, [safeIndex, activeFilter]);

  return (
    <section id="portfolio" className="portfolio">
      <Container className="portfolio__container">
        <header className="portfolio__header">
          <p className="portfolio__kick">Selected Work</p>
          <h2 className="portfolio__title">Portfolio</h2>
          <span className="portfolio__rule" aria-hidden="true" />
          <p className="portfolio__intro">
            Client work, campaign sites and tools — built end to end.
          </p>
        </header>

        {/* Filter Bar */}
        <div className="portfolio__filters">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              className={`portfolio__filter-btn ${
                activeFilter === filter ? "is-active" : ""
              }`}
              onClick={() => handleFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Current project, in full detail */}
        {selected && (
          <article className="portfolio__detail" key={selected.title}>
            <div className="portfolio__detail-media">
              <img
                src={selected.image}
                alt={selected.title}
                className="portfolio__detail-image"
              />
              {selected.featured && (
                <span className="portfolio__detail-featured">Featured</span>
              )}
            </div>
            <div className="portfolio__detail-body">
              <p className="portfolio__detail-count">
                <span>{String(safeIndex + 1).padStart(2, "0")}</span>
                {" / "}
                {String(filteredProjects.length).padStart(2, "0")}
              </p>
              <h3 className="portfolio__detail-title">{selected.title}</h3>
              <p className="portfolio__detail-description">
                {selected.modal.longDescription}
              </p>
              <ul className="portfolio__detail-highlights">
                {selected.modal.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="project-card__tech">
                {selected.tags.map((tag) => (
                  <span key={tag} className="project-card__tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-card__links">
                {selected.demoLink && (
                  <a
                    href={selected.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card__link"
                  >
                    Live Demo
                  </a>
                )}
                {selected.repoLink && (
                  <a
                    href={selected.repoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="project-card__link"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
            <button
              type="button"
              className="portfolio__arrow portfolio__arrow--prev"
              onClick={goPrev}
              aria-label="Previous project"
            >
              ←
            </button>
            <button
              type="button"
              className="portfolio__arrow portfolio__arrow--next"
              onClick={goNext}
              aria-label="Next project"
            >
              →
            </button>
          </article>
        )}

        {/* The other projects, lined up in a horizontal strip */}
        <div className="portfolio__strip-label">
          <span>Browse</span>
          <span className="portfolio__strip-hint">
            Click a project to view it
          </span>
        </div>
        <div className="portfolio__strip" ref={stripRef}>
          {filteredProjects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              className={`portfolio__strip-card ${
                index === safeIndex ? "portfolio__strip-card--active" : ""
              }`}
              onClick={() => setSelectedIndex(index)}
              aria-current={index === safeIndex}
            >
              <img
                src={project.image}
                alt=""
                className="portfolio__strip-card-thumb"
              />
              <span className="portfolio__strip-card-title">
                {project.title}
              </span>
              <span className="portfolio__strip-card-number">
                {String(index + 1).padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
};
