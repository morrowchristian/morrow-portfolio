// src/components/Services/ServiceCard.tsx — one Editorial service
// card: a mono number and a red icon on the top row, a Newsreader
// title, a soft-brown description, and a mono red link. The link
// is a router Link for a page ("/portfolio") or a button that opens
// the contact modal when the card's action is "contact".
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
  onContactClick?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  number,
  cta,
  onContactClick,
}) => {
  return (
    <div className="service-card">
      <div className="service-card__top">
        <span className="service-card__number">{number}</span>
        <Icon className="service-card__icon" />
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>

      {cta &&
        (cta.to === "contact" ? (
          <button
            type="button"
            onClick={onContactClick}
            className="service-card__cta service-card__cta--button"
          >
            {cta.label} →
          </button>
        ) : (
          <Link to={cta.to} className="service-card__cta">
            {cta.label} →
          </Link>
        ))}
    </div>
  );
};
