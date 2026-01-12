// src/componenets/Portfolio/ProjectModalContent.tsx
import "./ProjectModalContent.css";

interface ProjectModalContentProps {
  project: any;
}

export const ProjectModalContent: React.FC<ProjectModalContentProps> = ({ project }) => {
  return (
    <div className="project-modal">
      <h2 className="project-modal__title">{project.title}</h2>

      <p className="project-modal__description">
        {project.modal.longDescription}
      </p>

      <div className="project-modal__highlights">
        {project.modal.highlights.map((item: string) => (
          <div key={item} className="project-modal__highlight">
            • {item}
          </div>
        ))}
      </div>

      <div className="project-modal__images">
        {project.modal.images.map((src: string) => (
          <img key={src} src={src} alt={project.title} className="project-modal__image" />
        ))}
      </div>
    </div>
  );
};
