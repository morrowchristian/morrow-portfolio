// src/components/ui/Button.tsx
import "./Button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled,
  ...props
}) => {
  return (
    <button
      className={[
        "ui-button",
        `ui-button--${variant}`,
        `ui-button--${size}`,
        fullWidth ? "ui-button--full" : "",
        loading ? "ui-button--loading" : "",
        className
      ].join(" ")}
      disabled={loading || disabled}
      {...props}
    >
      {leftIcon && <span className="ui-button__icon ui-button__icon--left">{leftIcon}</span>}
      <span className="ui-button__content">{children}</span>
      {rightIcon && <span className="ui-button__icon ui-button__icon--right">{rightIcon}</span>}
    </button>
  );
};

/* TODO (Button)
- Add animated loading spinner component
- Add ARIA attributes for loading and accessibility states
- Add keyboard focus-visible ring using tokens
- Add icon-only variant (square button)
- Add motion/hover polish (scale, shadow, accent glow)
- Add dark/light theme adjustments if theme system is added later
- Add disabled variant styling using tokens
- Add variant for destructive/alert actions
*/

