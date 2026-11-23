// src/components/Services/ServiceCard.tsx — one Editorial service
// card: a mono number and a red icon on the top row, a Newsreader
// title, a soft-brown description, and a mono red link. The link
// is a router Link to a page ("/portfolio" or "/contact").
import "./Services.css";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  number: string;
  cta?: {
    label: string;
    to: string;
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

      {cta && (
        <Link to={cta.to} className="service-card__cta">
          {cta.label} →
        </Link>
      )}
    </div>
  );
};
