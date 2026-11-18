// src/components/Services/Services.tsx — EDITORIAL: warm paper,
// Newsreader headings, IBM Plex Mono furniture, matching the Bio,
// Portfolio and Resume pages. Three services, each a white card
// with a mono number, a red icon, a serif title and a mono red
// link. All three links use React Router (Link) so they land on
// /#/portfolio or /#/contact under the HashRouter — the old
// "#portfolio" hrefs bounced back to the home page, and the
// automation card used to open the contact modal before Contact
// became its own page.
import "./Services.css";
import { services } from "../../data/services";
import { ServiceCard } from "./ServiceCard";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Grid } from "../Grid/Grid";
import { Container } from "../Container/Container";

export const Services: React.FC = () => {
  const { ref, isVisible } = useInViewAnimation();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section id="services" className="services">
      <Container>
        <header className="services__header">
          <p className="services__kick">What I Do</p>
          <h2 className="services__title">Services</h2>
          <span className="services__rule" aria-hidden="true" />
          <p className="services__intro">
            Full-stack builds, front-end craft and automation — the work I
            take on for clients.
          </p>
        </header>

        <Grid
          ref={ref}
          columns={isMobile ? "1fr" : "repeat(auto-fill, minmax(280px, 1fr))"}
          className={`animate ${isVisible ? "animate--visible" : ""}`}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              number={String(index + 1).padStart(2, "0")}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
};
