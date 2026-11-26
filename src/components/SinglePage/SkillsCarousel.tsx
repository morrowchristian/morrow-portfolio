// src/components/SinglePage/SkillsCarousel.tsx — Skills carousel
// (Phase 2 redesign, 2026-11-26). Replaces the flat Skills list on
// the single page only; the Resume page keeps SkillsContent (dots
// + chips) untouched. One category at a time inside a large rounded
// card, in the style of kartavya-singh.com's Skills: brand-logo
// tiles, chevrons, auto-play with pause and a countdown/progress
// indicator. Level is encoded ONLY by the skill name color —
// Strong = shirt red, Working = warm white, Familiar = burnt
// orange (legend below the grid). The dots are gone here.
// Data comes from src/data/resume.ts — no skill added, dropped,
// or renamed; levels are Christian's to correct. No Coding Hours
// chart, radar chart, or invented numbers.
import { useCallback, useEffect, useRef, useState } from "react";
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
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from "react-icons/fa";
import { resume } from "../../data/resume";
import "./SkillsCarousel.css";

const AUTOPLAY_MS = 6000;
const TICK_MS = 100;

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

export const SkillsCarousel: React.FC = () => {
  const groups = resume.skills;
  const [index, setIndex] = useState(0);
  // Respect reduced motion: auto-play starts paused when the user
  // prefers reduced motion (client-only app, so window is safe
  // to read during state init).
  const [playing, setPlaying] = useState(
    () =>
      typeof window === "undefined" ||
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);

  const goTo = useCallback(
    (next: number) => {
      progressRef.current = 0;
      setProgress(0);
      setIndex(((next % groups.length) + groups.length) % groups.length);
    },
    [groups.length],
  );

  // Auto-play: tick the progress bar; at 100% advance a category,
  // wrapping from the last category back to the first so the cycle
  // repeats. It runs continuously unless the pause control is off —
  // it does NOT pause on hover/focus, so the cycle never looks
  // stopped at the last category. The interval does not restart on
  // category change — the ref is reset instead, so the timing
  // stays even.
  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      progressRef.current += (TICK_MS / AUTOPLAY_MS) * 100;
      if (progressRef.current >= 100) {
        progressRef.current = 0;
        setIndex((i) => (i + 1) % groups.length);
      }
      setProgress(progressRef.current);
    }, TICK_MS);
    return () => window.clearInterval(id);
  }, [playing, groups.length]);

  const group = groups[index];
  const nextGroup = groups[(index + 1) % groups.length];
  const secondsLeft = Math.max(
    1,
    Math.ceil((AUTOPLAY_MS * (1 - progress / 100)) / 1000),
  );

  return (
    <div
      className="skills-carousel"
      role="region"
      aria-label="Technical skills carousel"
    >
      <div className="skills-carousel__top">
        <h3 className="skills-carousel__category">{group.title}</h3>
        <div className="skills-carousel__controls">
          <button
            type="button"
            className="skills-carousel__btn"
            onClick={() => goTo(index - 1)}
            aria-label="Previous skill category"
          >
            <FaChevronLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            className="skills-carousel__btn"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause auto-play" : "Resume auto-play"}
            aria-pressed={!playing}
          >
            {playing ? (
              <FaPause aria-hidden="true" />
            ) : (
              <FaPlay aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            className="skills-carousel__btn"
            onClick={() => goTo(index + 1)}
            aria-label="Next skill category"
          >
            <FaChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        className="skills-carousel__progress"
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={
          playing
            ? `Next category in ${secondsLeft} seconds`
            : "Auto-play paused"
        }
      >
        <span
          className="skills-carousel__progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="skills-carousel__status">
        {playing ? (
          <>
            Category {index + 1} of {groups.length} · next: {nextGroup.title}{" "}
            in {secondsLeft}s
          </>
        ) : (
          <>Paused · Category {index + 1} of {groups.length}</>
        )}
      </p>

      <div className="skills-carousel__tabs" role="tablist" aria-label="Skill categories">
        {groups.map((g, i) => (
          <button
            key={g.title}
            type="button"
            role="tab"
            aria-selected={i === index}
            className={`skills-carousel__tab${
              i === index ? " is-active" : ""
            }`}
            onClick={() => goTo(i)}
          >
            {g.title}
          </button>
        ))}
      </div>

      <div className="skills-carousel__grid" key={group.title}>
        {group.items.map((skill) => {
          const Icon = brandIcons[skill.name] ?? null;
          return (
            <div key={skill.name} className="skills-carousel__tile">
              {Icon ? (
                <Icon
                  className="skills-carousel__tile-icon"
                  aria-hidden="true"
                />
              ) : (
                <span
                  className="skills-carousel__tile-initials"
                  aria-hidden="true"
                >
                  {initials(skill.name)}
                </span>
              )}
              <span
                className={`skills-carousel__tile-name skills-carousel__tile-name--${skill.level}`}
              >
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>

      <p className="skills-carousel__legend">
        <span className="skills-carousel__legend-label">Proficiency:</span>
        <span className="skills-carousel__legend-item skills-carousel__legend-item--strong">
          <span className="skills-carousel__legend-dot" aria-hidden="true" />
          Strong
        </span>
        <span className="skills-carousel__legend-item skills-carousel__legend-item--working">
          <span className="skills-carousel__legend-dot" aria-hidden="true" />
          Working
        </span>
        <span className="skills-carousel__legend-item skills-carousel__legend-item--familiar">
          <span className="skills-carousel__legend-dot" aria-hidden="true" />
          Familiar
        </span>
      </p>
    </div>
  );
};
