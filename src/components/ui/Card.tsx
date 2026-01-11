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
- Add hover elevation variants
- Add shadow tokens (sm/md/lg)
- Add interactive mode (clickable card)
- Add responsive padding tokens
- Add skeleton/loading variant
*/
