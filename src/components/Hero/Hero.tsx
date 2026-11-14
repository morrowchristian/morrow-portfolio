// src/components/Hero/Hero.tsx
import { Button } from "../ui/Button";
import { Container } from "../Container/Container";
import { Grid } from "../Grid/Grid";
import "./Hero.css";

export const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <Grid columns={{ base: 1, md: 2 }} gap="32px">
          <div className="hero__content">
            <p className="hero__location">Cleveland, TN</p>

            <h1 className="hero__title">
              I build expressive, scalable web experiences that feel premium.
            </h1>

            <p className="hero__subtitle">
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

// TODO (Hero)
// - Add scroll-based reveal animation using IntersectionObserver
// - Add responsive typography scaling for title and subtitle
// - Add mobile-specific layout adjustments via useMediaQuery
// - Add props for dynamic content (location, title, subtitle, image)
// - Add variant support (e.g., with/without image, reversed layout)
// - Add CTA link targets (scroll to sections or open modal)
// - Add analytics tracking for CTA clicks (optional)
// - Add accent/visual variants (underline, highlight, gradient text)
// - Add optional decorative elements (shapes, patterns, subtle motion)
// - Add hover/interaction polish for image wrapper (parallax, tilt, glow)
// - Add dark/light theme adjustments if theme system is added later

