// src/components/ui/SectionHeader.tsx
import "./SectionHeader.css";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  align = "left",
}) => {
  return (
    <div className={`section-header section-header--${align}`}>
      <h2 className="section-header__title">{title}</h2>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </div>
  );
};

/* TODO (SectionHeader)
- Add decorative underline or accent bar variant
- Add animation on scroll (fade/slide)
- Add responsive typography scaling using tokens
- Add optional icon support (left or above title)
- Add compact/small variant for tight layouts
- Add dark/light theme adjustments if theme system is added later
*/
