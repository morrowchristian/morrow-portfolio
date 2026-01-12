// src/components/Portfolio/ProjectCard.tsx
import "./Portfolio.css";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  demoLink?: string;
  repoLink?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  image,
  demoLink,
  repoLink,
}) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-card__image" />

      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>

        <div className="project-card__tech">
          {tech.map((t) => (
            <span key={t} className="project-card__tag">
              {t}
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

/* TODO (ProjectCard)
- Add hover animation (scale, shadow, lift)
- Add skeleton loading state for images
- Add responsive image aspect ratios
- Add tech tag color variants
- Add optional “featured” badge
*/
