// src/components/Bio/Bio.tsx — text-led bio. The Hero above already shows
// the glitch portrait, so this section does not repeat a large photo.
import "./Bio.css";
import { Container } from "../Container/Container";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";

export const Bio: React.FC = () => {
  const { ref, isVisible } = useInViewAnimation();

  return (
    <section id="bio" className="bio">
      <Container>
        <div
          ref={ref}
          className={`bio__content animate ${isVisible ? "animate--visible" : ""}`}
        >
          <p className="bio__eyebrow">About</p>
          <h1 className="bio__title">Christian Morrow</h1>
          <p className="bio__subtitle">
            Full‑Stack Software Engineer crafting intentional, expressive UI.
          </p>
          <p className="bio__intro">
            B.S. Software Systems ’25 from the University of Tennessee at
            Chattanooga, Latin Honors, 3.7 GPA. I build full-stack web
            applications in React, TypeScript and Django — with real client
            websites shipped — and bring 7+ years of high-urgency service and
            team-lead experience to every project: calm problem-solving under
            pressure, clear communication, and code that stays maintainable.
          </p>
        </div>
      </Container>
    </section>
  );
};

/* TODO (Bio)
- Add social links or CTA buttons
- Add responsive typography scaling
- Add subtle parallax or fade-in for image
- Add spacing tokens for mobile vs desktop
*/
