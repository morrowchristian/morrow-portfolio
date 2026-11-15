// src/components/Bio/Bio.tsx — landing page (route "/").
// Full-page background is the extended glitch portrait
// (public/bio-background.jpg); the original image is pasted 1:1,
// so Christian's face is never stretched or warped.
import "./Bio.css";
import { Link } from "react-router-dom";
import { Container } from "../Container/Container";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";

export const Bio: React.FC = () => {
  const { ref, isVisible } = useInViewAnimation();

  return (
    <section className="bio-page">
      <Container>
        <div
          ref={ref}
          className={`bio__panel animate ${isVisible ? "animate--visible" : ""}`}
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
      </Container>
    </section>
  );
};
