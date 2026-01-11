// src/components/ui/Button.tsx
import "./Button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  return (
    <button
      className={`ui-button ui-button--${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

/* TODO (Button)
- Add loading state (spinner, disabled styles)
- Add full-width variant for mobile
- Add size variants (sm, md, lg)
- Add icon support (left/right)
- Add focus-visible and accessibility improvements
*/
