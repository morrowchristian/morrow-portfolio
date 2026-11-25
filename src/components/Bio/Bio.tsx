// src/components/Bio/Bio.tsx — centered hero (Phase 1 redesign, 2026-11-25).
// The old two-column layout (bio left, full-height portrait right) is
// replaced by a centered stack: circular portrait, name, rotating
// tagline, slogan, intro, CTAs. The portrait is a circular crop ONLY —
// object-fit: cover on a square frame, never stretched or warped.
// Stats, Services, and News no longer render here; they live in the
// single-page shell (SinglePage), which composes this hero first.
// The circuit art survives as faint traces and the single circuit line
// with a square on each end closing the intro (2026-11-17).
// Type: Newsreader serif for the name/slogan, IBM Plex Mono for the
// furniture (tagline, labels, CTAs). Palette: theme-aware via tokens.
import "./Bio.css";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";
import { useRotatingTagline } from "../../hooks/useRotatingTagline";

const TAGLINE_ROLES = [
  "Full-Stack Software Engineer",
  "React & Django",
  "Built end to end",
] as const;

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export const Bio: React.FC = () => {
  const { ref, isVisible } = useInViewAnimation();
  const tagline = useRotatingTagline(TAGLINE_ROLES);

  return (
    <section id="about" className="bio-page" aria-label="About">
      <div className="bio__inner">
        {/* Faint circuit traces across the page — a nod to the
            original line-work, kept near-invisible. Theme-aware:
            the ink and accent resolve to the light or dark token. */}
        <svg
          className="bio__traces"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <g
            strokeWidth="1"
            fill="none"
            opacity="0.16"
            style={{ stroke: "var(--color-line-strong)" }}
          >
            <polyline points="700,80 900,80 900,160 1040,160" />
            <polyline points="980,300 1120,300 1120,380" />
          </g>
          <g opacity="0.16" style={{ fill: "var(--color-ink)" }}>
            <rect x="696" y="76" width="8" height="8" />
            <rect x="1036" y="156" width="8" height="8" />
            <rect x="1116" y="376" width="8" height="8" />
          </g>
          <rect
            x="896"
            y="76"
            width="9"
            height="9"
            opacity="0.55"
            style={{ fill: "var(--color-accent)" }}
          />
        </svg>

        <div
          ref={ref}
          className={`bio__hero animate ${isVisible ? "animate--visible" : ""}`}
        >
          <div className="bio__portrait-wrap">
            <img
              src="/portrait-cutout.png"
              alt="Portrait of Christian Morrow"
              className="bio__portrait"
              width={210}
              height={210}
              fetchPriority="high"
              decoding="async"
            />
          </div>

          {/* Availability badge (2026-11-25): a quiet pill above the
              name, adapted from the badge on sunnypatel.net —
              Christian's own status, in the Editorial mono. */}
          <p className="bio__badge">
            <span className="bio__badge-dot" aria-hidden="true" />
            Open to software roles
          </p>

          <h1 className="bio__name">Christian Morrow</h1>

          <p className="bio__tagline" aria-live="polite">
            <span className="bio__tagline-text">{tagline}</span>
            <span className="bio__cursor" aria-hidden="true">
              |
            </span>
          </p>

          <p className="bio__slogan">Software, built end to end — built to last.</p>

          <p className="bio__subtitle">
            Full-Stack Software Engineer — Cleveland, TN
          </p>

          <p className="bio__intro">
            B.S. Computer Science: Software Systems ’25 from the University
            of Tennessee at Chattanooga, Cum Laude, 3.7 GPA. I build
            full-stack web applications in React, TypeScript and Django — with
            a real client website shipped — and bring 7+ years of
            high-urgency service and team-lead experience to every project:
            calm problem-solving under pressure, clear communication, and
            code that stays maintainable.
          </p>

          {/* Currently (2026-11-25): a quiet status line under the
              intro, adapted from the "currently" idea on
              sunnypatel.net — Christian's own facts, in the
              Editorial mono. */}
          <p className="bio__currently">
            <span className="bio__currently-label">Currently</span> —
            Building RealSync &amp; Baseline · Dispatching at Eagle
            Tele-Services
          </p>

          {/* A single circuit line with a square on each end,
              closing the intro — it replaces the L-shaped trace
              that used to sit behind the stack. */}
          <div className="bio__divider" aria-hidden="true">
            <span className="bio__divider-square" />
            <span className="bio__divider-line" />
            <span className="bio__divider-square" />
          </div>

          <div className="bio__ctas">
            <button
              type="button"
              className="bio__cta bio__cta--primary"
              onClick={() => scrollToSection("projects")}
            >
              View projects
            </button>
            <a className="bio__cta bio__cta--secondary" href="/resume.pdf" download>
              Download résumé
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
