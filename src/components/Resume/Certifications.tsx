// src/components/Resume/Certifications.tsx
import type { ResumeCertification } from "../../data/resume";
import "./Certifications.css";
import "./ResumeShared.css";

interface CertificationsProps {
  items: ResumeCertification[];
}

export const Certifications: React.FC<CertificationsProps> = ({ items }) => {
  return (
    <div className="certifications">
      <h3 className="certifications__title heading-3">Certifications</h3>

      <ul className="certifications__list">
        {items.map((cert, i) => (
          <li
            key={cert.name}
            className="certifications__item text-small stagger"
            style={{ "--delay": `${i * 100}ms` } as React.CSSProperties}
          >
            <span className="certifications__name heading-4">
              {cert.name}
            </span>

            <span className="certifications__issuer text-small">
              {cert.issuer}
            </span>

            <span className="certifications__year text-small">
              {cert.year}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
