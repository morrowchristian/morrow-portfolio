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

// variant="list" (2026-11-23) renders the same three services as a
// compact vertical list for the home-page hero, where Services sits
// beside the portrait in one viewport: tighter header, compact
// cards, no Container/Grid. Every title, description and link is
// identical to the cards variant — only the presentation changes.
interface ServicesProps {
  variant?: "cards" | "list";
}

export const Services: React.FC<ServicesProps> = ({ variant = "cards" }) => {
  const { ref, isVisible } = useInViewAnimation();
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (variant === "list") {
    return (
      <section id="services" className="services services--list">
        <header className="services__header services__header--compact">
          <p className="services__kick">What I Do</p>
          <h2 className="services__title">Services</h2>
          <span className="services__rule" aria-hidden="true" />
          <p className="services__intro">
            Full-stack builds, front-end craft and automation — the work I
            take on for clients.
          </p>
        </header>

        <div
          ref={ref}
          className={`services__list animate ${isVisible ? "animate--visible" : ""}`}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              number={String(index + 1).padStart(2, "0")}
              className="service-card--compact"
            />
          ))}
        </div>
      </section>
    );
  }

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
