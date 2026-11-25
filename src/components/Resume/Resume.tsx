// src/components/Resume/Resume.tsx — Editorial résumé page: warm
// paper, Newsreader headings, IBM Plex Mono furniture, a timeline
// for experience (with the bullets from his résumé), skill chips,
// a Technical Projects section, and the education, certification
// and campaign sections. The content is his verified résumé
// (2026-11-13), with the Eagle bullets rewritten 2026-11-24 from
// Eagle's careers page and the project list updated 2026-11-25;
// nothing is invented here — see src/data/resume.ts.
// (2026-11-25, Phase 1): the section bodies moved to
// ResumeSections.tsx so the single page can reuse them; this page
// renders identically — same wrappers, titles, markup, and order.
import "./Resume.css";
import { Container } from "../Container/Container";
import {
  EducationContent,
  ExperienceContent,
  LeadershipContent,
  ProjectsContent,
  SkillsContent,
} from "./ResumeSections";

export const Resume: React.FC = () => {
  return (
    <section id="resume" className="resume">
      <Container>
        <header className="resume__header">
          <p className="resume__kick">Experience &amp; Skills</p>
          <h2 className="resume__title">Resume</h2>
          <span className="resume__rule" aria-hidden="true" />
          <p className="resume__intro">
            Full-stack software engineer — B.S. Computer Science: Software
            Systems &rsquo;25, UTC, Cum Laude — with 7+ years in high-urgency
            service and team-lead roles.
          </p>
          <p className="resume__contact">
            Cleveland, TN · 423-710-4223 · morrowchristian@icloud.com
            <br />
            linkedin.com/in/morrowchristian · github.com/morrowchristian ·
            morrow-portfolio.vercel.app
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
            <ExperienceContent />
          </section>

          <section className="resume__section" aria-label="Technical skills">
            <h3 className="resume__section-title">Technical Skills</h3>
            <SkillsContent />
          </section>

          <section className="resume__section" aria-label="Technical projects">
            <h3 className="resume__section-title">Technical Projects</h3>
            <ProjectsContent />
          </section>

          <section
            className="resume__section"
            aria-label="Education and certification"
          >
            <h3 className="resume__section-title">
              Education &amp; Certification
            </h3>
            <EducationContent />
          </section>

          <section
            className="resume__section"
            aria-label="Campaign and community leadership"
          >
            <h3 className="resume__section-title">
              Campaign &amp; Community Leadership
            </h3>
            <LeadershipContent />
          </section>
        </div>
      </Container>
    </section>
  );
};
