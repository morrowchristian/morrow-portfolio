// src/components/Bio/Bio.tsx — landing page (route "/").
// SIGNAL DARK: a near-black page (#111111, the same black as the
// navbar and footer, so the whole landing reads as one dark panel),
// The page below the navbar is a 4x3 grid:
//   1  2  3  4
//   5  6  7  8
//   9 10 11 12
// Text in 1, 2, 5, 6 (top-left); cutout in 7, 8, 11, 12
// (right, lower two rows); bars in 9, 10, 11 (bottom row, left
// three cells, passing behind the cutout's bottom-left).
// The cutout is portrait-cutout.png — the glitch
// portrait with the white background removed, just him and the
// blue/black/red splotches — shown with object-fit: contain, so his
// face, hair and shoulders are always fully visible, never cropped,
// stretched or warped.
// The splotch bars (.bio__bars, inline SVG) escape from under the
// portrait and run leftward along the bottom of the page, behind the
// text zone — the glitch spilling out of the photo across the page.
import "./Bio.css";
import { Link } from "react-router-dom";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";

export const Bio: React.FC = () => {
  const { ref, isVisible } = useInViewAnimation();

  return (
    <section className="bio-page">
      <div className="bio__inner">
      <div
        ref={ref}
        className={`bio__text animate ${isVisible ? "animate--visible" : ""}`}
      >
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
          src="/portrait-cutout.png"
          alt=""
          className="bio__portrait-img"
          fetchPriority="high"
        />
      </div>

      <svg
        className="bio__bars"
        viewBox="0 0 1200 140"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        {/* Splotch bars escaping leftward from under the portrait,
            longest near the photo, tapering off toward the left edge. */}
        <rect x="420" y="16" width="780" height="8" fill="#2b6cb0" />
        <rect x="180" y="42" width="1020" height="5" fill="#63b3ed" />
        <rect x="640" y="64" width="560" height="10" fill="#e53e3e" />
        <rect x="300" y="90" width="900" height="6" fill="#2b6cb0" />
        <rect x="760" y="114" width="440" height="4" fill="#f5f5f2" opacity="0.45" />
        <rect x="1150" y="28" width="12" height="12" fill="#2b6cb0" />
        <rect x="1080" y="78" width="9" height="9" fill="#e53e3e" />
        <rect x="980" y="118" width="10" height="10" fill="#63b3ed" />
        <line x1="1120" y1="8" x2="1120" y2="56" stroke="#9aa0a6" strokeWidth="1.5" />
      </svg>
      </div>
    </section>
  );
};
