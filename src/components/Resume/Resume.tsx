// src/components/Resume/Resume.tsx — Editorial résumé page: warm
// paper, Newsreader headings, IBM Plex Mono furniture, a timeline
// for experience (with the bullets from his résumé), skill chips,
// and the education, certification and campaign sections. The
// content is his verified résumé (2026-11-13); nothing is invented
// here — see src/data/resume.ts.
import "./Resume.css";
import { resume } from "../../data/resume";
import { Container } from "../Container/Container";

export const Resume: React.FC = () => {
  return (
    <section id="resume" className="resume">
      <Container>
        <header className="resume__header">
          <p className="resume__kick">Experience &amp; Skills</p>
          <h2 className="resume__title">Resume</h2>
          <span className="resume__rule" aria-hidden="true" />
          <p className="resume__intro">
            Full-stack software engineer — B.S. Software Systems &rsquo;25,
            UTC, Latin Honors — with 7+ years in high-urgency service and
            team-lead roles.
          </p>
          <a
            href="/resume.pdf"
            download="Christian-Morrow-Resume.pdf"
            className="resume__download"
          >
            Download résumé (PDF)
          </a>
        </header>

        <div className="resume__sections">
          <section className="resume__section" aria-label="Experience">
            <h3 className="resume__section-title">Experience</h3>
            <ol className="resume__timeline">
              {resume.experience.map((item) => (
                <li key={item.company} className="resume__item">
                  <p className="resume__period">{item.period}</p>
                  <h4 className="resume__role">{item.role}</h4>
                  <p className="resume__company">{item.company}</p>
                  {item.bullets && (
                    <ul className="resume__bullets">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
            <p className="resume__earlier">{resume.earlierRoles}</p>
          </section>

          <section className="resume__section" aria-label="Technical skills">
            <h3 className="resume__section-title">Technical Skills</h3>
            {resume.skills.map((group) => (
              <div key={group.title} className="resume__skill-group">
                <h4 className="resume__skill-group-title">{group.title}</h4>
                <div className="resume__chips">
                  {group.items.map((skill) => (
                    <span key={skill} className="resume__chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section
            className="resume__section"
            aria-label="Education and certification"
          >
            <h3 className="resume__section-title">
              Education &amp; Certification
            </h3>
            {resume.education.map((item) => (
              <div key={item.title} className="resume__education">
                <h4 className="resume__role">{item.title}</h4>
                <p className="resume__company">{item.detail}</p>
              </div>
            ))}
          </section>

          <section
            className="resume__section"
            aria-label="Campaign and community leadership"
          >
            <h3 className="resume__section-title">
              Campaign &amp; Community Leadership
            </h3>
            {resume.leadership.map((item) => (
              <div key={item.org} className="resume__item">
                <p className="resume__period">{item.period}</p>
                <h4 className="resume__role">{item.role}</h4>
                <p className="resume__company">{item.org}</p>
                <ul className="resume__bullets">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>
      </Container>
    </section>
  );
};
