// src/components/Resume/Certifications.tsx
import type { ResumeCertification } from "../../data/resume";
import "./Certifications.css";

interface CertificationsProps {
  items: ResumeCertification[];
}

export const Certifications: React.FC<CertificationsProps> = ({ items }) => {
  return (
    <div className="certifications">
      <h3 className="certifications__title">Certifications</h3>

      <ul className="certifications__list">
        {items.map((cert, i) => (
          <li 
            key={cert.name} 
            className="certifications__item stagger"
            style={{ "--delay": `${i * 100}ms` } as React.CSSProperties}
          >
            <span className="certifications__name">{cert.name}</span>
            <span className="certifications__issuer">{cert.issuer}</span>
            <span className="certifications__year">{cert.year}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
