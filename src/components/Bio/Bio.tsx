// src/components/Bio/Bio.tsx — landing page (route "/").
// Two-zone full-height layout: glitch portrait on the left at full
// viewport height, text on the right on the plain page
// background. No panel over the image — the portrait's own white background sits
// on a white zone that blends with it, so the page reads as one
// clean composition. The portrait is hero.jpg (1024x1024 square
// crop), shown with object-fit: contain so Christian's whole face,
// hair and shoulders are always fully visible, never cropped,
// stretched or warped.
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
