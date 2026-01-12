// src/data/resume.ts
export interface ResumeExperience {
  role: string;
  company: string;
  period: string;
}

export interface ResumeSkillGroup {
  title: string;
  items: string[];
}

export interface ResumeData {
  experience: ResumeExperience[];
  skills: ResumeSkillGroup[];
}

export const resume: ResumeData = {
  experience: [
    {
      role: "Full‑Stack Software Engineer",
      company: "Your Company",
      period: "2022 – Present",
    },
    {
      role: "Frontend Developer",
      company: "Another Company",
      period: "2020 – 2022",
    },
  ],
  skills: [
    {
      title: "Frontend",
      items: ["React", "TypeScript", "CSS Grid", "Tailwind"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express", "PostgreSQL"],
    },
  ],
};
