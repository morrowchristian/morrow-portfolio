// src/components/Services/Services.tsx
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
        <h2 className="services__title">Services</h2>

        <Grid
          ref={ref}
          columns={isMobile ? "1fr" : "repeat(auto-fill, minmax(280px, 1fr))"}
          className={`animate ${isVisible ? "animate--visible" : ""}`}
        >
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </Grid>
      </Container>
    </section>
  );
};

/* TODO (Services)
- Add staggered animations for each ServiceCard
- Add icons or illustrations for each service
- Add responsive spacing tokens (padding, gap)
- Add hover effects or subtle card elevation
- Add section intro text for context
*/
