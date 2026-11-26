// src/components/Services/ServiceCard.tsx — one Editorial service
// card: a mono number and a red icon on the top row, a Newsreader
// title, a soft-brown description, and a mono red link. The link
// is a router Link to a page ("/portfolio" or "/contact"), or an
// external <a> to a live demo or repo when `href` is given
// (2026-11-26, services moved into the hero with proof links).
import "./Services.css";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  number: string;
  cta?: {
    label: string;
    to?: string;
    href?: string;
  };
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  number,
  cta,
  className,
}) => {
  return (
    <div className={`service-card${className ? ` ${className}` : ""}`}>
      <div className="service-card__top">
        <span className="service-card__number">{number}</span>
        <Icon className="service-card__icon" />
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>

      {cta?.href ? (
        <a
          href={cta.href}
          target="_blank"
          rel="noreferrer"
          className="service-card__cta"
        >
          {cta.label} →
        </a>
      ) : cta?.to ? (
        <Link to={cta.to} className="service-card__cta">
          {cta.label} →
        </Link>
      ) : null}
    </div>
  );
};
