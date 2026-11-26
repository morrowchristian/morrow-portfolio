// src/components/SinglePage/panels/ProjectsPanel.tsx — the Projects
// tab (sidebar-tabs redesign, 2026-11-26). Replaces the Projects
// carousel: ALL 8 projects as a consistent grid of cards (2
// columns on desktop, 1 on mobile). NO carousel, NO peeking, NO
// dots, NO chevrons. Each card is the carousel's card —
// screenshot banner (~16:7, object-fit cover), title, the SHORT
// description, modal.highlights, tech tags, and the Live Demo +
// GitHub links (only when the link exists) — all straight from
// src/data/projects.ts, unchanged (personal-tracker uses its real
// dashboard screenshot; MyNotes keeps the stock /project2.jpg —
// no screenshot is invented).
import { projects } from "../../../data/projects";
import "./ProjectsPanel.css";

export const ProjectsPanel: React.FC = () => (
  <div className="projects-panel__grid">
    {projects.map((p) => (
      <article key={p.title} className="projects-panel__card">
        <div className="projects-panel__media">
          <img
            src={p.image}
            alt={p.title}
            className="projects-panel__image"
            loading="lazy"
          />
        </div>
        <div className="projects-panel__body">
          <h3 className="projects-panel__title">{p.title}</h3>
          <p className="projects-panel__description">{p.description}</p>
          <ul className="projects-panel__highlights">
            {p.modal.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="projects-panel__tech">
            {p.tags.map((tag) => (
              <span key={tag} className="projects-panel__tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="projects-panel__links">
            {p.demoLink && (
              <a
                href={p.demoLink}
                target="_blank"
                rel="noreferrer"
                className="projects-panel__link"
              >
                Live Demo
              </a>
            )}
            {p.repoLink && (
              <a
                href={p.repoLink}
                target="_blank"
                rel="noreferrer"
                className="projects-panel__link"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </article>
    ))}
  </div>
);
