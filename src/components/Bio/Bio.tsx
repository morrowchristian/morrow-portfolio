// src/components/Bio/Bio.tsx
import "./Bio.css";
import { Container } from "../Container/Container";
import { Grid } from "../Grid/Grid";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export const Bio: React.FC = () => {
  const { ref, isVisible } = useInViewAnimation();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section id="bio" className="bio">
      <Container>
        <Grid
          ref={ref}
          columns={isMobile ? "1fr" : "1fr 1fr"}
          className={`animate ${isVisible ? "animate--visible" : ""}`}
        >
          <div className="bio__content">
            <h1 className="bio__title">Christian Morrow</h1>
            <p className="bio__subtitle">
              Full‑Stack Software Engineer crafting intentional, expressive UI.
            </p>
          </div>

          <div className="bio__image-wrapper">
            <img src="/me.jpg" alt="Christian Morrow" className="bio__image" />
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
