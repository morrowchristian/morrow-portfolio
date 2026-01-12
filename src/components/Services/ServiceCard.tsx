// src/components/Services/ServiceCard.tsx
import "./Services.css";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
}) => {
  return (
    <div className="service-card">
      <Icon className="service-card__icon" />
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>
    </div>
  );
};

/* TODO (ServiceCard)
- Add hover animation (lift, glow, tilt)
- Add icon color variants
- Add responsive spacing tokens
- Add optional CTA button per service
*/
