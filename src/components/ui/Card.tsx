// src/components/ui/Card.tsx
import "./Card.css";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: "sm" | "md" | "lg";
  radius?: "sm" | "md" | "lg";
}

export const Card: React.FC<CardProps> = ({
  children,
  padding = "md",
  radius = "md",
  className = "",
  ...props
}) => {
  return (
    <div
      className={`ui-card ui-card--p-${padding} ui-card--r-${radius} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

/* TODO (Card)
- Add hover elevation variants using shadow tokens
- Add interactive mode (clickable card with focus/hover states)
- Add responsive padding tokens (mobile vs desktop)
- Add skeleton/loading variant for async content
- Add dark/light theme adjustments if theme system is added later
- Add card header/footer subcomponents for structured layouts
*/

