// src/components/Bio/Bio.tsx
import "./Bio.css";
import { Container } from "../Container/Container";
import { Grid } from "../Grid/Grid";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";

export const Bio: React.FC = () => {
  const { ref, isVisible } = useInViewAnimation();

  return (
    <section id="bio" className="bio">
      <Container>
        <Grid
          ref={ref}
          columns="1fr"
          className={`animate ${isVisible ? "animate--visible" : ""}`}
        >
          <div className="bio__content">
            <h1 className="bio__title">Christian Morrow</h1>
            <p className="bio__subtitle">
              Full‑Stack Software Engineer crafting intentional, expressive UI.
            </p>
          </div>

        </Grid>
      </Container>
    </section>
  );
};

/* TODO (Bio)
- Add social links or CTA buttons
- Add responsive typography scaling
- Add subtle parallax or fade-in for image
- Add a short intro paragraph or tagline
- Add spacing tokens for mobile vs desktop
*/
