// src/components/Hero/Hero.tsx
import { Button } from "../ui/Button/Button";
import { Container } from "../Container/Container";
import { Grid } from "../Grid/Grid";
import "./Hero.css";

export const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <Grid columns={{ base: 1, md: 2 }} gap="32px">
          <div className="hero__content">
            <p className="hero__location text-small text-muted">
              Cleveland, TN
            </p>

            <h1 className="hero__title heading-1">
              I build expressive, scalable web experiences that feel premium.
            </h1>

            <p className="hero__subtitle text-description">
              I help teams ship faster with clean architecture, reusable
              components, and intentional UI/UX.
            </p>

            <div className="hero__buttons">
              <Button variant="primary" size="lg">
                View my work
              </Button>
              <Button variant="secondary" size="lg">
                Start a project
              </Button>
            </div>
          </div>

          <div className="hero__image-wrapper">
            <div className="hero__image-bg" />
            <img
              src="/portrait.jpg"
              alt="Christian Morrow"
              className="hero__image"
            />
          </div>
        </Grid>
      </Container>
    </section>
  );
};
