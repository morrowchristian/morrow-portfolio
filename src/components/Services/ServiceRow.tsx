// src/components/Services/ServiceRow.tsx — one Editorial service
// row for the home-page hero (numbered Services, 2026-11-25):
// a mono red number, a Newsreader title, a soft-brown
// description and a mono red link, separated from the next row
// by a hairline rule (see Services.css). No card chrome, no
// icon — the typographic rows ARE the design. The link is a
// router Link to a page ("/portfolio" or "/contact").
import "./Services.css";
import { Link } from "react-router-dom";

interface ServiceRowProps {
  title: string;
  description: string;
  number: string;
  cta?: {
    label: string;
    to: string;
  };
}

export const ServiceRow: React.FC<ServiceRowProps> = ({
  title,
  description,
  number,
  cta,
}) => {
  return (
    <div className="service-row">
      <span className="service-row__number">{number}</span>
      <div className="service-row__body">
        <h3 className="service-row__title">{title}</h3>
        <p className="service-row__description">{description}</p>

        {cta && (
          <Link to={cta.to} className="service-row__cta">
            {cta.label} →
          </Link>
        )}
      </div>
    </div>
  );
};
