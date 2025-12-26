type ProjectCardProps = {
  image: string;
  title: string;
  tagline: string;
  tech: string;
};

const ProjectCard = ({ image, title, tagline, tech }: ProjectCardProps) => {
  return (
    <div className="project-card reveal-card">
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
