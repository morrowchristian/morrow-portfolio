import "./Resume.css";
import { experience } from "../../data/experience";
import { skills } from "../../data/skills";
import { education } from "../../data/education";
import { ExperienceItem } from "./ExperienceItem";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";

export const Resume: React.FC = () => {
  const { ref: skillsRef, isVisible: skillsVisible } = useInViewAnimation();
  const { ref: expRef, isVisible: expVisible } = useInViewAnimation();
  const { ref: eduRef, isVisible: eduVisible } = useInViewAnimation();

  return (
    <section id="resume" className="resume">
      <div className="resume__inner">
        <h2 className="resume__title">Resume</h2>

        {/* DOWNLOAD BUTTON */}
        <a href="/resume.pdf" download className="resume__download">
          Download Resume
        </a>

        {/* SKILLS */}
        <div
          ref={skillsRef}
          className={`resume__skills animate ${
            skillsVisible ? "animate--visible" : ""
          }`}
        >
          {skills.map((group) => {
            const Icon = group.icon;
            return (
              <div key={group.category} className="resume__skill-group">
                <div className="resume__skill-header">
                  <Icon className="resume__skill-icon" />
                  <h3>{group.category}</h3>
                </div>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="resume__divider" />

        {/* EXPERIENCE */}
        <div
          ref={expRef}
          className={`resume__experience animate ${
            expVisible ? "animate--visible" : ""
          }`}
        >
          <h3 className="resume__section-title">Professional Experience</h3>
          {experience.map((job) => (
            <ExperienceItem key={job.role} {...job} />
          ))}
        </div>

        <div className="resume__divider" />

        {/* EDUCATION */}
        <div
          ref={eduRef}
          className={`resume__education animate ${
            eduVisible ? "animate--visible" : ""
          }`}
        >
          <h3 className="resume__section-title">Education</h3>
          <p className="resume__school">{education.school}</p>
          <p>
            {education.degree} — {education.year}
          </p>
          <p>{education.honors}</p>

          <h4 className="resume__section-title">Certifications</h4>
          <ul>
            {education.certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
