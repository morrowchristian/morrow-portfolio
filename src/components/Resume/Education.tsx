// src/components/Resume/Education.tsx
import type { ResumeEducation } from "../../data/resume";
import "./Education.css";
import "./ResumeShared.css";

interface EducationProps {
  items: ResumeEducation[];
}

export const Education: React.FC<EducationProps> = ({ items }) => {
  return (
    <div className="education">
      <h3 className="education__title heading-3">Education</h3>

      <div className="education__items">
        {items.map((edu) => (
          <div key={edu.school} className="education__item">
            <div className="education__header">
              <h4 className="education__degree heading-4">
                {edu.degree}
              </h4>
              <span className="education__period text-small">
                {edu.period}
              </span>
            </div>

            <p className="education__school text-small">
              {edu.school}
            </p>

            {edu.details && (
              <ul className="education__details text-description">
                {edu.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
