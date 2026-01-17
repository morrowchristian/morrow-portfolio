// src/components/Services/Services.tsx
import "./Services.css";
import { services } from "../../data/services";
import { ServiceCard } from "./ServiceCard";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Grid } from "../Grid/Grid";
import { Container } from "../Container/Container";
import { SectionHeader } from "../ui/SectionHeader/SectionHeader";

export const Services: React.FC = () => {
  const { ref, isVisible } = useInViewAnimation();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section id="services" className="services">
      <Container>
        <SectionHeader
          title="Services"
          subtitle="What I can help you with"
          align="center"
          accent
        />
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
