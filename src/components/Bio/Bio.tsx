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
          gap="48px"
          className={`animate ${isVisible ? "animate--visible" : ""}`}
        >
          {/* Left: Text */}
          <div className="bio__content">
            <p className="bio__location text-small text-muted">Cleveland, TN</p>

            <h1 className="bio__title heading-1">Christian Morrow</h1>

            <p className="bio__subtitle text-description">
              Full‑Stack Software Engineer crafting intentional, expressive UI.
            </p>

            <div className="bio__buttons">
              {/* Add CTA buttons here if needed */}
            </div>
          </div>

          {/* Right: Image */}
          <div className="bio__image-wrapper">
            <div className="bio__image-bg" />
            <img
              src="/me.jpg"
              alt="Christian Morrow"
              className="bio__image"
            />
          </div>
        </Grid>
      </Container>
    </section>
  );
};
