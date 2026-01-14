// src/components/Services/ServiceCard.tsx
import "./Services.css";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: "blue" | "purple" | "green" | "orange";
  cta?: {
    label: string;
    href: string;
  };
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  accent,
  cta,
}) => {
  return (
    <div className={`service-card service-card--accent-${accent}`}>
      <Icon className="service-card__icon" />
      <h3 className="service-card__title heading-3">{title}</h3>
      <p className="service-card__description text-description">{description}</p>
      {cta && (
        <a href={cta.href} className="service-card__cta text-small">
          {cta.label}
        </a>
      )}
    </div>
  );
};
