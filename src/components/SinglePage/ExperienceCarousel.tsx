// src/components/SinglePage/ExperienceCarousel.tsx — Experience carousel
// (Phase 4 redesign, 2026-11-26). Replaces the flat Experience +
// Campaign & Leadership lists on the single page only; the Resume
// page keeps ExperienceContent / LeadershipContent untouched.
// A segmented pill toggle switches between two tracks — Work and
// Campaign & Leadership — and each track is a peeking-card
// carousel: one entry at a time sharp in the center, neighbors
// peeking in from the sides, blurred and dimmed. Chevrons and
// Previous/Next text buttons, no auto-play, no dots. Data comes
// from src/data/resume.ts — nothing added, dropped, or reworded.
// Education stays below the carousel as a compact section
// (rendered by SinglePage, not by this component).
import { useCallback, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { resume } from "../../data/resume";
import "./ExperienceCarousel.css";

type Track = "work" | "campaign";

interface Entry {
  role: string;
  org: string;
  period: string;
  bullets: string[];
}

// Unified shape for the two data sources. Order is resume order:
// Work = Eagle, Ascent, Dakota, 58 Short Stop, Angela's;
// Campaign = Galloway lead, then Hiawatha.
const tracks: Record<Track, Entry[]> = {
  work: resume.experience.map((item) => ({
    role: item.role,
    org: item.company,
    period: item.period,
    bullets: item.bullets ?? [],
  })),
  campaign: resume.leadership.map((item) => ({
    role: item.role,
    org: item.org,
    period: item.period,
    bullets: item.bullets,
  })),
};

const trackLabels: Record<Track, string> = {
  work: "Work",
  campaign: "Campaign & Leadership",
};

export const ExperienceCarousel: React.FC = () => {
  const [track, setTrack] = useState<Track>("work");
  const [index, setIndex] = useState(0);
  const entries = tracks[track];

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % entries.length) + entries.length) % entries.length);
    },
    [entries.length],
  );

  const switchTrack = (next: Track) => {
    setTrack(next);
    // Switching tracks resets to the first entry — the index
    // from the other track may not exist here (Work has 5,
    // Campaign has 2), so never carry it over.
    setIndex(0);
  };

  const entry = entries[index];

  // The track is a flex row of fixed-width cards. The transform
  // is a pure-CSS calc: the % in translateX is of the track's
  // own width, and the track is a block-level flex container so
  // its width is the viewport width — 50% is the viewport
  // center, and min(600px, 84%) is the card width (the same
  // value as the card's flex-basis). Card `index` lands
  // centered, with its neighbors peeking in from the sides.
  // No JS measurement, no resize listener.
  const offset = `translateX(calc(50% - min(600px, 84%) / 2 - ${index} * (min(600px, 84%) + 1rem)))`;

  // Arrow keys move between entries when the viewport is
  // focused. The toggle keeps its own tab behavior — the
  // handler lives on the viewport, not the whole component,
  // so arrows on a toggle button do not also move the carousel.
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(index - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(index + 1);
    }
  };

  return (
    <div
      className="experience-carousel"
      role="region"
      aria-label="Experience carousel"
    >
      <div className="experience-carousel__top">
        <div
          className="experience-carousel__toggle"
          role="tablist"
          aria-label="Experience track"
        >
          {(Object.keys(tracks) as Track[]).map((key) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={track === key}
              aria-controls="experience-carousel-panel"
              className={`experience-carousel__toggle-btn${
                track === key ? " is-active" : ""
              }`}
              onClick={() => switchTrack(key)}
            >
              {trackLabels[key]}
            </button>
          ))}
        </div>
        <div className="experience-carousel__controls">
          <button
            type="button"
            className="experience-carousel__btn"
            onClick={() => goTo(index - 1)}
            aria-label="Previous entry"
          >
            <FaChevronLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            className="experience-carousel__btn"
            onClick={() => goTo(index + 1)}
            aria-label="Next entry"
          >
            <FaChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        className="experience-carousel__viewport"
        id="experience-carousel-panel"
        tabIndex={0}
        aria-label={`${trackLabels[track]} entries. Use left and right arrow keys to move between entries.`}
        onKeyDown={handleKeyDown}
      >
        <div
          className="experience-carousel__track"
          style={{ transform: offset }}
        >
          {entries.map((item, i) => {
            const isActive = i === index;
            return (
              <article
                key={item.org}
                className={`experience-carousel__card${
                  isActive ? " is-active" : ""
                }`}
                aria-hidden={!isActive}
                onClick={() => {
                  // Clicking a peeking neighbor moves to it.
                  if (!isActive) goTo(i);
                }}
              >
                <p className="resume__period">{item.period}</p>
                <h4 className="resume__role">{item.role}</h4>
                <p className="resume__company">{item.org}</p>
                {item.bullets.length > 0 && (
                  <ul className="resume__bullets">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </article>
            );
          })}
        </div>
      </div>

      <div className="experience-carousel__nav">
        <button
          type="button"
          className="experience-carousel__textbtn"
          onClick={() => goTo(index - 1)}
        >
          ← Previous
        </button>
        <p className="experience-carousel__status" aria-live="polite">
          Entry {index + 1} of {entries.length} · {entry.org}
        </p>
        <button
          type="button"
          className="experience-carousel__textbtn"
          onClick={() => goTo(index + 1)}
        >
          Next →
        </button>
      </div>

      {track === "work" && (
        <p className="resume__earlier">{resume.earlierRoles}</p>
      )}
    </div>
  );
};
