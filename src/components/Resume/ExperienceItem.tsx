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
        <h3 className="experience-item__role">{role}</h3>
        <span className="experience-item__dates">{dates}</span>
      </div>
      <p className="experience-item__company">{company}</p>

      <ul className="experience-item__bullets">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
};
