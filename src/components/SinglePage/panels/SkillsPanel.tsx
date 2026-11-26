// src/components/SinglePage/panels/SkillsPanel.tsx — the Skills tab
// (sidebar-tabs redesign, 2026-11-26). Replaces the Skills carousel:
// ALL 27 skills are visible in the one panel, grouped in three
// sub-blocks (Languages / Frameworks, Tools, Concepts) separated
// by thin rules, with the "Proficiency:" legend at the bottom.
// NO carousel, NO auto-play, NO category tabs. The tiles are the
// carousel's tiles (brand-logo tiles via react-icons, clean
// initials tiles where no brand icon exists — no logos invented),
// and the level is encoded ONLY by the skill name color —
// Strong = shirt red, Working = warm white, Familiar = burnt
// orange. The groups sit in one dark slate card in BOTH themes
// (as the carousel card did), so the level colors read identically
// in either theme. Data comes from src/data/resume.ts — no skill
// added, dropped, or renamed; levels are Christian's to correct.
import {
  SiApple,
  SiAstro,
  SiDjango,
  SiFigma,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNpm,
  SiPostman,
  SiPython,
  SiReact,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { resume } from "../../../data/resume";
import "./SkillsPanel.css";

type IconComponent = React.ComponentType<{ className?: string }>;

// Brand icons, verified against the installed react-icons version.
// A skill gets a brand icon only where a matching one exists;
// everything else falls back to a clean initials tile (no
// invented logos). VS Code and Playwright have no icon in this
// react-icons version, and Django REST Framework has no distinct
// brand icon, so those three are initials tiles too.
const brandIcons: Record<string, IconComponent | null> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Python: SiPython,
  Django: SiDjango,
  "Django REST Framework": null,
  SwiftUI: SiApple,
  Swift: SiSwift,
  Astro: SiAstro,
  "Tailwind CSS": SiTailwindcss,
  "HTML/CSS": SiHtml5,
  "Git & GitHub": SiGithub,
  "VS Code": null,
  npm: SiNpm,
  Postman: SiPostman,
  Playwright: null,
  Vite: SiVite,
  Figma: SiFigma,
};

// Initials for the text tiles: first letter of each word, up to 3.
function initials(name: string): string {
  const words = name.replace(/[^A-Za-z0-9 ]/g, " ").split(" ").filter(Boolean);
  return words
    .slice(0, 3)
    .map((word) => word[0].toUpperCase())
    .join("");
}

export const SkillsPanel: React.FC = () => (
  <div className="skills-panel">
    <div className="skills-panel__card">
      {resume.skills.map((group) => (
        <div key={group.title} className="skills-panel__group">
          <h3 className="skills-panel__group-title">{group.title}</h3>
          <div className="skills-panel__grid">
            {group.items.map((skill) => {
              const Icon = brandIcons[skill.name] ?? null;
              return (
                <div key={skill.name} className="skills-panel__tile">
                  {Icon ? (
                    <Icon
                      className="skills-panel__tile-icon"
                      aria-hidden="true"
                    />
                  ) : (
                    <span
                      className="skills-panel__tile-initials"
                      aria-hidden="true"
                    >
                      {initials(skill.name)}
                    </span>
                  )}
                  <span
                    className={`skills-panel__tile-name skills-panel__tile-name--${skill.level}`}
                  >
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <p className="skills-panel__legend">
        <span className="skills-panel__legend-label">Proficiency:</span>
        <span className="skills-panel__legend-item skills-panel__legend-item--strong">
          <span className="skills-panel__legend-dot" aria-hidden="true" />
          Strong
        </span>
        <span className="skills-panel__legend-item skills-panel__legend-item--working">
          <span className="skills-panel__legend-dot" aria-hidden="true" />
          Working
        </span>
        <span className="skills-panel__legend-item skills-panel__legend-item--familiar">
          <span className="skills-panel__legend-dot" aria-hidden="true" />
          Familiar
        </span>
      </p>
    </div>
  </div>
);
