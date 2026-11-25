// src/components/Resume/ResumeSections.tsx — reusable Resume content blocks
// (Phase 1 redesign, 2026-11-25). The Resume page and the single page
// share these blocks so the content renders identically in both places.
// Each block is content-only (no section wrapper or h3 title) — the
// parent supplies the wrapper and heading. Markup and classes are
// copied verbatim from Resume.tsx; nothing is reworded or reordered.
import { resume, type ResumeSkillLevel } from "../../data/resume";

const levelLabel: Record<ResumeSkillLevel, string> = {
  strong: "Strong",
  working: "Working",
  familiar: "Familiar",
};

const levelDots = (level: ResumeSkillLevel) => (
  <span
    className={`resume__dots resume__dots--${level}`}
    role="img"
    aria-label={levelLabel[level]}
  >
    <i aria-hidden="true" />
    <i aria-hidden="true" />
    <i aria-hidden="true" />
  </span>
);

export const ExperienceContent: React.FC = () => (
  <>
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
  </>
);

export const SkillsContent: React.FC = () => (
  <>
    <p className="resume__skill-legend">
      {levelDots("strong")} Strong · {levelDots("working")} Working ·{" "}
      {levelDots("familiar")} Familiar
    </p>
    {resume.skills.map((group) => (
      <div key={group.title} className="resume__skill-group">
        <h4 className="resume__skill-group-title">{group.title}</h4>
        <div className="resume__chips">
          {group.items.map((skill) => (
            <span key={skill.name} className="resume__chip">
              {skill.name}
              {levelDots(skill.level)}
            </span>
          ))}
        </div>
      </div>
    ))}
  </>
);

export const ProjectsContent: React.FC = () => (
  <>
    {resume.projects.map((project) => (
      <div key={project.name} className="resume__item">
        <h4 className="resume__role">{project.name}</h4>
        <p className="resume__company">{project.tech}</p>
        <p className="resume__project-desc">{project.description}</p>
      </div>
    ))}
  </>
);

export const EducationContent: React.FC = () => (
  <>
    {resume.education.map((item) => (
      <div key={item.title} className="resume__education">
        <h4 className="resume__role">{item.title}</h4>
        <p className="resume__company">{item.detail}</p>
      </div>
    ))}
    <a
      href="/diploma.pdf"
      target="_blank"
      rel="noreferrer"
      className="resume__diploma"
    >
      View diploma (PDF)
    </a>
  </>
);

export const LeadershipContent: React.FC = () => (
  <>
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
  </>
);
