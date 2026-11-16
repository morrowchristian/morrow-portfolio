// src/components/Bio/Bio.tsx — landing page (route "/").
// Two-zone layout, one continuous panel: text on the left, glitch
// portrait on the right at full viewport height, both on one shared
// white background so there is no visible seam between the zones.
// Behind the text, an inline SVG (.bio__strokes) draws thin
// blue/black/red glitch strokes that echo the photo's glitch edge:
// the photo's glitch art is on its left side, which after the flip
// sits at the seam in the middle of the page, so the strokes are
// anchored to the seam and fade out toward the left, as if the glitch
// continues from the photo into the text zone. Pure decoration —
// pointer-events: none, behind the text, hidden on small screens.
// The portrait is hero.jpg (1024x1024 square crop), shown with
// object-fit: contain, capped at 650px wide and centred, so
// Christian's whole face, hair and shoulders are always fully
// visible, never cropped, stretched or warped.
import "./Bio.css";
import { Link } from "react-router-dom";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";

export const Bio: React.FC = () => {
  const { ref, isVisible } = useInViewAnimation();

  return (
    <section className="bio-page">
      <div
        ref={ref}
        className={`bio__text animate ${isVisible ? "animate--visible" : ""}`}
      >
        <svg
          className="bio__strokes"
          viewBox="0 0 340 800"
          preserveAspectRatio="xMaxYMid slice"
          aria-hidden="true"
          focusable="false"
        >
          {/* Horizontal bars reaching left from the seam (right edge) */}
          <rect x="180" y="88" width="160" height="6" fill="#2b6cb0" />
          <rect x="230" y="148" width="110" height="10" fill="#111111" />
          <rect x="200" y="228" width="140" height="4" fill="#e53e3e" />
          <rect x="150" y="328" width="190" height="8" fill="#2b6cb0" />
          <rect x="260" y="418" width="80" height="5" fill="#111111" />
          <rect x="190" y="518" width="150" height="6" fill="#e53e3e" />
          <rect x="240" y="638" width="100" height="9" fill="#2b6cb0" />
          <rect x="170" y="718" width="170" height="4" fill="#111111" />
          {/* Shorter, sparser bars further from the seam */}
          <rect x="60" y="178" width="70" height="4" fill="#9aa0a6" />
          <rect x="90" y="468" width="60" height="3" fill="#2b6cb0" />
          <rect x="40" y="598" width="55" height="5" fill="#e53e3e" />
          <rect x="110" y="688" width="48" height="3" fill="#9aa0a6" />
          {/* Small squares */}
          <rect x="290" y="58" width="14" height="14" fill="#2b6cb0" />
          <rect x="250" y="268" width="10" height="10" fill="#e53e3e" />
          <rect x="300" y="558" width="12" height="12" fill="#111111" />
          <rect x="120" y="378" width="9" height="9" fill="#2b6cb0" />
          <rect x="270" y="698" width="10" height="10" fill="#9aa0a6" />
          {/* Thin vertical ticks */}
          <line x1="320" y1="40" x2="320" y2="200" stroke="#111111" strokeWidth="1.5" />
          <line x1="300" y1="480" x2="300" y2="640" stroke="#2b6cb0" strokeWidth="1.5" />
          <line x1="180" y1="120" x2="180" y2="210" stroke="#9aa0a6" strokeWidth="1" />
          {/* Crosshair ring, like the one in the photo's glitch field */}
          <circle cx="295" cy="350" r="26" fill="none" stroke="#111111" strokeWidth="1" />
          <line x1="295" y1="318" x2="295" y2="330" stroke="#111111" strokeWidth="1.5" />
          <line x1="295" y1="370" x2="295" y2="382" stroke="#111111" strokeWidth="1.5" />
          <line x1="263" y1="350" x2="275" y2="350" stroke="#111111" strokeWidth="1.5" />
          <line x1="315" y1="350" x2="327" y2="350" stroke="#111111" strokeWidth="1.5" />
        </svg>
        <p className="bio__eyebrow">About</p>
        <h1 className="bio__title">Christian Morrow</h1>
        <p className="bio__subtitle">
          Full-Stack Software Engineer — Cleveland, TN
        </p>
        <p className="bio__intro">
          B.S. Software Systems ’25 from the University of Tennessee at
          Chattanooga, Latin Honors, 3.7 GPA. I build full-stack web
          applications in React, TypeScript and Django — with real client
          websites shipped — and bring 7+ years of high-urgency service and
          team-lead experience to every project: calm problem-solving under
          pressure, clear communication, and code that stays maintainable.
        </p>
        <div className="bio__buttons">
          <Link to="/portfolio" className="bio__button bio__button--primary">
            View my work
          </Link>
          <a
            href="/resume.pdf"
            download="Christian-Morrow-Resume.pdf"
            className="bio__button bio__button--secondary"
          >
            Download resume
          </a>
        </div>
      </div>

      <div className="bio__portrait" aria-hidden="true">
        <img
          src="/hero.jpg"
          alt=""
          className="bio__portrait-img"
          fetchPriority="high"
        />
      </div>
    </section>
  );
};
