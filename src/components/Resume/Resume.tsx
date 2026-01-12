// src/components/Resume/Resume.tsx
import "./Resume.css";
import { resume } from "../../data/resume";
import type { ResumeExperience, ResumeSkillGroup } from "../../data/resume";
import { Container } from "../Container/Container";
import { Grid } from "../Grid/Grid";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";
import { useMediaQuery } from "../../hooks/useMediaQuery";

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
          <div className="resume__experience">
            {resume.experience.map((item: ResumeExperience) => (
              <div key={item.company} className="resume__item">
                <h3>{item.role}</h3>
                <p>{item.company}</p>
                <span>{item.period}</span>
              </div>
            ))}
          </div>

          <div className="resume__skills">
            {resume.skills.map((group: ResumeSkillGroup) => (
              <div key={group.title} className="resume__skill-group">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((skill: string) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Grid>
      </Container>
    </section>
  );
};

/* TODO (Resume)
- Add timeline UI for experience section
- Add skill proficiency bars or categories
- Add download resume button
- Add responsive typography scaling
- Add animation staggering for each resume item
*/
