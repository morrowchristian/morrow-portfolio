// src/components/Portfolio/ProjectCard.tsx
import "./Portfolio.css";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    featured?: boolean;
    demoLink?: string;
    repoLink?: string;
  };
  index: number;
  onOpen?: (project: any) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onOpen,
}) => {
  const { title, description, image, tags, featured, demoLink, repoLink } = project;

  const cardClass = featured
    ? "project-card project-card--featured"
    : "project-card";

  return (
    <div
      className={cardClass}
      style={{ transitionDelay: `${index * 60}ms` }}
      onClick={() => onOpen?.(project)}
    >
      <img src={image} alt={title} className="project-card__image" />

      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>

        <div className="project-card__tech">
          {tags.map((tag) => (
            <span key={tag} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="project-card__links">
          {demoLink && (
            <a href={demoLink} target="_blank" className="project-card__link">
              Live Demo
            </a>
          )}
          {repoLink && (
            <a href={repoLink} target="_blank" className="project-card__link">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
