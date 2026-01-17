// src/components/ui/SectionHeader.tsx
import "./SectionHeader.css";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3" | "h4";
  accent?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  align = "left",
  as = "h2",
  accent = false,
}) => {
  const HeadingTag = as;

  return (
    <div
      className={[
        "section-header",
        `section-header--${align}`,
        accent ? "section-header--accent" : "",
      ].join(" ")}
    >
      <HeadingTag className="section-header__title heading-2">
        {title}
      </HeadingTag>

      {subtitle && (
        <p className="section-header__subtitle text-description">
          {subtitle}
        </p>
      )}
    </div>
  );
};
