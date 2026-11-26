// src/components/Services/ServiceRow.tsx — one Editorial service
// row for the home-page hero (numbered Services, 2026-11-25):
// a mono red number, a Newsreader title, a soft-brown
// description and a mono red link, separated from the next row
// by a hairline rule (see Services.css). No card chrome, no
// icon — the typographic rows ARE the design. The link is a
// router Link to a page ("/portfolio" or "/contact"), or —
// since the services moved into the hero (2026-11-26) — an
// external <a> to a live demo or repo when `href` is given.
// (2026-11-26, sidebar-tabs redesign): the number is optional
// now — the About panel renders the rows WITHOUT numbers (the
// numbering system is gone), and the row collapses to a single
// column when no number is given.
import "./Services.css";
import { Link } from "react-router-dom";

interface ServiceRowProps {
  title: string;
  description: string;
  number?: string;
  cta?: {
    label: string;
    to?: string;
    href?: string;
  };
}

export const ServiceRow: React.FC<ServiceRowProps> = ({
  title,
  description,
  number,
  cta,
}) => {
  return (
    <div className={`service-row${number ? "" : " service-row--no-number"}`}>
      {number && <span className="service-row__number">{number}</span>}
      <div className="service-row__body">
        <h3 className="service-row__title">{title}</h3>
        <p className="service-row__description">{description}</p>

        {cta?.href ? (
          <a
            href={cta.href}
            target="_blank"
            rel="noreferrer"
            className="service-row__cta"
          >
            {cta.label} →
          </a>
        ) : cta?.to ? (
          <Link to={cta.to} className="service-row__cta">
            {cta.label} →
          </Link>
        ) : null}
      </div>
    </div>
  );
};
