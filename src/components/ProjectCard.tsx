// src/components/ProjectCard.tsx
type ProjectCardProps = {
  image: string;
  title: string;
  tagline: string;
  tech: string;
  style?: React.CSSProperties;
};

const ProjectCard = ({ image, title, tagline, tech, style }: ProjectCardProps) => {
  return (
    <div className="project-card" style={style}>
      <div className="project-image">
        <img src={image} alt={title} />
      </div>

      <div className="project-overlay">
        <p>View Project →</p>
      </div>

      <h3>{title}</h3>
      <p className="project-tagline">{tagline}</p>
      <p className="tech-list">{tech}</p>
    </div>
  );
};

export default ProjectCard;
