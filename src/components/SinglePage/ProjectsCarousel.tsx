// src/components/SinglePage/ProjectsCarousel.tsx — Projects carousel
// (Phase 3 redesign, 2026-11-26). Replaces the Portfolio detail
// view + strip on the single page only; the old /portfolio route
// keeps rendering <Portfolio /> untouched. One project card at a
// time in the center, sharp and in focus, with the neighboring
// cards peeking in from the sides, blurred and dimmed — in the
// style of kartavya-singh.com's Career carousel. Big chevron
// buttons plus "Previous" / "Next" text buttons. NO auto-play,
// NO dots. Each card shows the real screenshot banner (~16:7),
// title, description, highlights, tech tags, and the Live Demo +
// GitHub links — all straight from src/data/projects.ts, unchanged
// (personal-tracker uses its real dashboard screenshot; MyNotes
// keeps the stock /project2.jpg — no screenshot is invented).
// The old Portfolio filter bar is gone: the carousel shows all 8
// projects in order, no filtering.
import { useLayoutEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { projects } from "../../data/projects";
import { Container } from "../Container/Container";
import "./ProjectsCarousel.css";

export const ProjectsCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  // Measured widths drive the centering: the card width is
  // min(680px, 84%) of the viewport, so the translate offset
  // cannot be a fixed percentage — measure it instead.
  const [metrics, setMetrics] = useState<{
    viewportWidth: number;
    cardWidth: number;
    gap: number;
  } | null>(null);

  const count = projects.length;

  const goTo = (next: number) => {
    setIndex(((next % count) + count) % count);
  };
  const goPrev = () => goTo(index - 1);
  const goNext = () => goTo(index + 1);

  // Measure after mount (useLayoutEffect runs before paint, so
  // the first paint already has the right offset) and on resize.
  useLayoutEffect(() => {
    const measure = () => {
      const viewport = viewportRef.current;
      const track = trackRef.current;
      const card =
        track?.querySelector<HTMLElement>(".projects-carousel__card");
      if (!viewport || !track || !card) return;
      const gap = parseFloat(
        window.getComputedStyle(track).columnGap || "24",
      );
      setMetrics({
        viewportWidth: viewport.clientWidth,
        cardWidth: card.offsetWidth,
        gap: Number.isFinite(gap) ? gap : 24,
      });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Center the active card in the viewport: shift the track left
  // by the active card's offset, then back by half the leftover
  // space on either side of it.
  const offset = metrics
    ? index * (metrics.cardWidth + metrics.gap) -
      (metrics.viewportWidth - metrics.cardWidth) / 2
    : 0;

  // Arrow keys move between projects, but only when focus is
  // inside the carousel (scoped here, not on window — the old
  // Portfolio listened globally, which hijacked arrows everywhere
  // on the page).
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goNext();
    }
  };

  const project = projects[index];

  return (
    <section
      className="projects-carousel"
      aria-label="Projects"
      role="region"
      aria-roledescription="carousel"
      onKeyDown={onKeyDown}
    >
      <Container>
        <header className="single-page__header">
          <p className="single-page__kick">Selected Work</p>
          <h2 className="single-page__title">Portfolio</h2>
          <span className="single-page__rule" aria-hidden="true" />
          <p className="projects-carousel__intro">
            Client work, campaign sites and tools — built end to end.
          </p>
        </header>
      </Container>

      <div
        className="projects-carousel__viewport"
        ref={viewportRef}
        aria-label="Project cards"
      >
        <div
          className="projects-carousel__track"
          ref={trackRef}
          style={{ transform: `translateX(${-offset}px)` }}
        >
          {projects.map((p, i) => {
            const isActive = i === index;
            return (
              <article
                key={p.title}
                className={`projects-carousel__card${
                  isActive ? " is-active" : ""
                }`}
                aria-hidden={!isActive}
                aria-label={`${p.title} — project ${i + 1} of ${count}`}
              >
                <div className="projects-carousel__media">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="projects-carousel__image"
                    loading={isActive ? "eager" : "lazy"}
                  />
                </div>
                <div className="projects-carousel__body">
                  <h3 className="projects-carousel__title">{p.title}</h3>
                  <p className="projects-carousel__description">
                    {p.description}
                  </p>
                  <ul className="projects-carousel__highlights">
                    {p.modal.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="projects-carousel__tech">
                    {p.tags.map((tag) => (
                      <span key={tag} className="projects-carousel__tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="projects-carousel__links">
                    {p.demoLink && (
                      <a
                        href={p.demoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="projects-carousel__link"
                        tabIndex={isActive ? 0 : -1}
                      >
                        Live Demo
                      </a>
                    )}
                    {p.repoLink && (
                      <a
                        href={p.repoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="projects-carousel__link"
                        tabIndex={isActive ? 0 : -1}
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <button
          type="button"
          className="projects-carousel__chevron projects-carousel__chevron--prev"
          onClick={goPrev}
          aria-label="Previous project"
        >
          <FaChevronLeft aria-hidden="true" />
        </button>
        <button
          type="button"
          className="projects-carousel__chevron projects-carousel__chevron--next"
          onClick={goNext}
          aria-label="Next project"
        >
          <FaChevronRight aria-hidden="true" />
        </button>
      </div>

      <Container>
        <div className="projects-carousel__nav">
          <button
            type="button"
            className="projects-carousel__nav-btn"
            onClick={goPrev}
          >
            ← Previous
          </button>
          <p
            className="projects-carousel__count"
            aria-live="polite"
            aria-label={`Project ${index + 1} of ${count}: ${project.title}`}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {" / "}
            {String(count).padStart(2, "0")}
          </p>
          <button
            type="button"
            className="projects-carousel__nav-btn"
            onClick={goNext}
          >
            Next →
          </button>
        </div>
      </Container>
    </section>
  );
};
