// src/data/resume.ts — CORRECTED 2026-11-13
// Fixes: the old file had placeholder experience — "Full-Stack Software Engineer, Your Company,
// 2022 – Present" and "Frontend Developer, Another Company, 2020 – 2022". Those were not real jobs.
// Replaced with Christian's actual work history from the resume he provided on 2026-11-13.
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
      role: "Emergency Roadside Service Dispatcher / Roadside Support Specialist",
      company: "Eagle Tele-Services, Remote",
      period: "May 2026 – Present",
    },
    {
      role: "Emergency Roadside Service Dispatcher / Shift Lead",
      company: "Ascent Pro Support, Remote",
      period: "April 2024 – May 2026",
    },
    {
      role: "Patient Support Representative / Team Lead",
      company: "Dakota Performance Solutions, Remote",
      period: "June 2022 – January 2024",
    },
    {
      role: "Operations Manager",
      company: "58 Short Stop Inc., Georgetown, TN",
      period: "July 2019 – April 2022",
    },
    {
      role: "General Manager",
      company: "Angela's Homestyle Restaurant, Cleveland, TN",
      period: "December 2015 – March 2019",
    },
  ],
  skills: [
    {
      title: "Frontend",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Astro"],
    },
    {
      title: "Backend",
      items: ["Python", "Django", "Django REST Framework", "REST APIs", "JWT Auth"],
    },
    {
      title: "Tools & Testing",
      items: ["Git & GitHub", "Vite", "Postman", "Playwright", "VS Code"],
    },
  ],
};
