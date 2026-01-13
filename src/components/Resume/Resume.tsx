// src/components/Resume/Resume.tsx
import "./Resume.css";
import { resume } from "../../data/resume";
import { Container } from "../Container/Container";
import { Grid } from "../Grid/Grid";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";
import { useMediaQuery } from "../../hooks/useMediaQuery";

import { Timeline } from "./Timeline";
import { SkillBarGroup } from "./SkillBarGroup";

export const Resume: React.FC = () => {
  const { ref, isVisible } = useInViewAnimation();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section id="resume" className="resume">
      <Container>
        <h2 className="resume__title">Resume</h2>

        <Grid
          ref={ref}
          columns={isMobile ? "1fr" : "1fr 1fr"}
          className={`animate ${isVisible ? "animate--visible" : ""}`}
        >
          {/* Experience Timeline */}
          <div className="resume__experience">
            <Timeline items={resume.experience} />
          </div>

          {/* Skill Bars */}
          <div className="resume__skills">
            {resume.skills.map((group) => (
              <SkillBarGroup key={group.title} group={group} />
            ))}
          </div>
        </Grid>
      </Container>
    </section>
  );
};
