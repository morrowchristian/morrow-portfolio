// src/components/Hero/Hero.tsx — designer / coder split hero, like the reference:
// "designer" left, the glitch portrait centre, "<coder>" right.
import "./Hero.css";
import { Container } from "../Container/Container";

export const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <div className="hero__grid">
          <div className="hero__side hero__side--left">
            <h2 className="hero__word">designer</h2>
            <p className="hero__blurb">
              Design-minded engineer with a passion for beautiful and
              functional user experiences — expressive, intentional interfaces
              with clean hierarchy.
            </p>
          </div>

          <div className="hero__image-wrapper">
            <img
              src="/hero.jpg"
              alt="Christian Morrow — half glitch art, half portrait"
              className="hero__image"
            />
          </div>

          <div className="hero__side hero__side--right">
            <h2 className="hero__word">
              &lt;coder&gt;
            </h2>
            <p className="hero__blurb">
              Full-stack developer who focuses on writing clean, elegant and
              efficient code — React, TypeScript and Django, shipped for real
              clients.
            </p>
          </div>
        </div>

        <div className="hero__intro">
          <p className="hero__name">Christian Morrow</p>
          <p className="hero__tagline">
            Full-Stack Software Engineer — Cleveland, TN
          </p>
          <div className="hero__buttons">
            <a href="#portfolio" className="hero__button hero__button--primary">
              View my work
            </a>
            <a href="/resume.pdf" className="hero__button hero__button--secondary">
              Download resume
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
