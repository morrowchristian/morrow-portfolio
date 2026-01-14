// src/components/Resume/ExperienceItem.tsx
import "./Resume.css";

interface ExperienceItemProps {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  role,
  dates,
  bullets,
}) => {
  return (
    <div className="experience-item">
      <div className="experience-item__header">
        <h3 className="experience-item__role heading-4">{role}</h3>
        <span className="experience-item__dates text-small">{dates}</span>
      </div>

      <p className="experience-item__company text-small">{company}</p>

      <ul className="experience-item__bullets">
        {bullets.map((b, i) => (
          <li key={i} className="text-description">{b}</li>
        ))}
      </ul>
    </div>
  );
};
