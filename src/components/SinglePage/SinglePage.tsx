// src/components/SinglePage/SinglePage.tsx — the single scrolling page
// (Phase 1 redesign, 2026-11-25). One centered column:
// Hero (About) → Stats → Services → Skills → Projects → Experience
// → News → Contact. The Skills, Projects, and Experience sections
// are carousels (SkillsCarousel, ProjectsCarousel,
// ExperienceCarousel), and Contact/Services/Stats/News render
// as-is. No copy, numbers, or project data are changed here.
// The old /portfolio, /resume, and /contact routes stay live in
// App.tsx alongside this page until the single page is verified.
import { useEffect } from "react";
import "./SinglePage.css";
import { Bio } from "../Bio/Bio";
import { Stats } from "../Stats/Stats";
import { Services } from "../Services/Services";
import { News } from "../News/News";
import { Contact } from "../Contact/Contact";
import { Container } from "../Container/Container";
import { EducationContent } from "../Resume/ResumeSections";
import { SkillsCarousel } from "./SkillsCarousel";
import { ProjectsCarousel } from "./ProjectsCarousel";
import { ExperienceCarousel } from "./ExperienceCarousel";
import { ParticleWave } from "./ParticleWave";

export const SinglePage: React.FC = () => {
  // Scroll snap (2026-11-26): section-by-section locking, like
  // kartavya-singh.com. The snap rules live in SinglePage.css
  // under `html.single-page--snap`; this toggles that class on
  // the document element while the single page is mounted and
  // removes it on unmount, so the old routes never snap.
  // The particle wave (2026-11-26) uses the same pattern:
  // `single-page--wave` lets the fixed canvas show through the
  // section backgrounds (dark mode only — in dark mode the paper
  // and page backgrounds are the same hex, so nothing visible
  // changes). Both classes are removed on unmount.
  useEffect(() => {
    document.documentElement.classList.add("single-page--snap");
    document.documentElement.classList.add("single-page--wave");
    return () => {
      document.documentElement.classList.remove("single-page--snap");
      document.documentElement.classList.remove("single-page--wave");
    };
  }, []);

  return (
    <div className="single-page">
      <ParticleWave />

      <Bio />

      <Stats />

      <Services variant="cards" />

      <section id="skills" className="single-page__section" aria-label="Skills">
        <Container>
          <header className="single-page__header">
            <p className="single-page__kick">Technical Skills</p>
            <h2 className="single-page__title">Skills</h2>
            <span className="single-page__rule" aria-hidden="true" />
          </header>
          <SkillsCarousel />
        </Container>
      </section>

      <div id="projects">
        <ProjectsCarousel />
      </div>

      <section
        id="experience"
        className="single-page__section"
        aria-label="Experience"
      >
        <Container>
          <header className="single-page__header">
            <p className="single-page__kick">Work &amp; Leadership</p>
            <h2 className="single-page__title">Experience</h2>
            <span className="single-page__rule" aria-hidden="true" />
          </header>
          <ExperienceCarousel />

          <div className="resume__sections">
            <section
              className="resume__section"
              aria-label="Education and certification"
            >
              <h3 className="resume__section-title">
                Education &amp; Certification
              </h3>
              <EducationContent />
            </section>
          </div>
        </Container>
      </section>

      <News />

      <Contact />
    </div>
  );
};
