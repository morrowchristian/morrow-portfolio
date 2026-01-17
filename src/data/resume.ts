// src/data/resume.ts

export interface ResumeBullet {
  text: string;
}

export interface ResumeExperience {
  role: string;
  company: string;
  location?: string;
  period: string;
  bullets: ResumeBullet[];
  icon?: string;
  type: "work" | "leadership" | "other";
}

export interface ResumeSkill {
  name: string;
  level: number;
}

export interface ResumeSkillGroup {
  title: string;
  items: ResumeSkill[];
}

export interface ResumeEducation {
  school: string;
  degree: string;
  period: string;
  details?: string[];
}

export interface ResumeCertification {
  name: string;
  issuer: string;
  year: string;
}

export interface ResumeData {
  profile: string;
  experience: ResumeExperience[];
  skills: ResumeSkillGroup[];
  education: ResumeEducation[];
  certifications: ResumeCertification[];
}

export const resume: ResumeData = {
  profile:
    "Full-Stack Software Engineer with a B.S. in Software Systems and hands-on experience building responsive, client-ready web applications using React, Django, Next.js, Angular, and vanilla JavaScript. Skilled in transforming client needs into maintainable codebases, automating processes, and ensuring quality through rigorous testing.",

  experience: [
    {
      role: "Team Lead, Emergency Roadside Operations",
      company: "Ascent Pro Staffing",
      location: "Remote",
      period: "2024 – Present",
      type: "leadership",
      icon: "briefcase",
      bullets: [
        { text: "Acted as real-time technical expert for remote agents, translating complex systems and policies into actionable instructions." },
        { text: "Analyzed data to pinpoint inefficiencies and recommended tech improvements adopted by leadership." },
        { text: "Trained agents on troubleshooting, maintaining top performance in a dispatch environment." },
      ],
    },
    {
      role: "Team Lead, Healthcare Client Support",
      company: "Dakota Performance Solutions",
      location: "Remote",
      period: "2022 – 2024",
      type: "leadership",
      icon: "briefcase",
      bullets: [
        { text: "Led a team of 15–25 agents to top rankings in quality and resolution metrics." },
        { text: "Directed HIPAA-compliant CRM migration for 500+ patient schedules with 100% data accuracy." },
        { text: "Developed SOPs and custom tools that improved productivity by 40%." },
      ],
    },
    {
      role: "Operations Manager",
      company: "58 Short Stop, Inc.",
      location: "Georgetown, TN",
      period: "2019 – 2022",
      type: "other",
      icon: "store",
      bullets: [
        { text: "Implemented an inventory management system and custom software for finances, payroll, and scheduling." },
        { text: "Migrated all product data and trained staff on the new interface, saving 10 hours weekly." },
      ],
    },
  ],

  skills: [
    {
      title: "Languages & Core Web",
      items: [
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Python", level: 70 },
        { name: "Swift", level: 60 },
      ],
    },
    {
      title: "Frameworks & Libraries",
      items: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 80 },
        { name: "Angular", level: 70 },
        { name: "Django", level: 75 },
      ],
    },
    {
      title: "Styling & UI",
      items: [
        { name: "Tailwind CSS", level: 90 },
        { name: "Material UI", level: 80 },
        { name: "Bootstrap", level: 85 },
        { name: "SASS/SCSS", level: 75 },
      ],
    },
    {
      title: "Tools & Platforms",
      items: [
        { name: "Git", level: 90 },
        { name: "Vite", level: 85 },
        { name: "Postman", level: 80 },
        { name: "Power Automate", level: 70 },
        { name: "Playwright", level: 75 },
      ],
    },
    {
      title: "Development Concepts",
      items: [
        { name: "Responsive Design", level: 95 },
        { name: "Component Architecture", level: 90 },
        { name: "State Management", level: 80 },
        { name: "REST APIs", level: 85 },
        { name: "Performance Optimization", level: 80 },
      ],
    },
  ],

  education: [
    {
      school: "University of Tennessee at Chattanooga",
      degree: "B.S. in Software Systems",
      period: "2025",
      details: ["Latin Honors Graduate", "3.7 GPA"],
    },
  ],

  certifications: [
    {
      name: "Microsoft Office Specialist: Excel Associate",
      issuer: "Microsoft",
      year: "2025",
    },
  ],
};
