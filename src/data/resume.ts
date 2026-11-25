// src/data/resume.ts — CORRECTED 2026-11-13, extended 2026-11-17
// Fixes: the old file had placeholder experience — "Full-Stack Software Engineer, Your Company,
// 2022 – Present" and "Frontend Developer, Another Company, 2020 – 2022". Those were not real jobs.
// Replaced with Christian's actual work history from the resume he provided on 2026-11-13.
// 2026-11-17: the experience bullets were added from the same resume (they already lived in
// src/data/experience.ts, which nothing imports) so the Resume page can show the depth of each
// role, plus the education, certification and campaign sections from that resume. Nothing here
// is invented — every line comes from the resume Christian provided on 2026-11-13, except the
// Eagle Tele-Services bullets, rewritten 2026-11-24 from Eagle's own careers page, and the
// Technical Projects list, updated 2026-11-25 to lead with the live full-stack apps
// (Business Website Template, RealSync, Baseline) and to match the canonical resume file.
// 2026-11-25: skills gained proficiency tiers (strong / working / familiar), assigned from
// shipped-work evidence — strong = core across multiple shipped projects, working = used in a
// shipped project, familiar = occasional exposure. Levels are Christian's to correct.
export interface ResumeExperience {
  role: string;
  company: string;
  period: string;
  bullets?: string[];
}

export type ResumeSkillLevel = "strong" | "working" | "familiar";

export interface ResumeSkill {
  name: string;
  level: ResumeSkillLevel;
}

export interface ResumeSkillGroup {
  title: string;
  items: ResumeSkill[];
}

export interface ResumeProject {
  name: string;
  description: string;
  tech: string;
}

export interface ResumeEducation {
  title: string;
  detail: string;
}

export interface ResumeLeadership {
  role: string;
  org: string;
  period: string;
  bullets: string[];
}

export interface ResumeData {
  experience: ResumeExperience[];
  skills: ResumeSkillGroup[];
  projects: ResumeProject[];
  education: ResumeEducation[];
  leadership: ResumeLeadership[];
  earlierRoles: string;
}

export const resume: ResumeData = {
  experience: [
    {
      role: "Emergency Roadside Service Dispatcher / Roadside Support Specialist",
      company: "Eagle Tele-Services, Remote",
      period: "May 2026 – Present",
      bullets: [
        "Pinpoint commercial vehicle breakdown locations across the U.S. and Canada with digital mapping tools, often working from minimal information.",
        "Coordinate tire replacements for broken-down commercial vehicles with drivers, fleets, servicing dealers, and technicians by phone and email, following detailed customer profiles to ensure product accuracy and fleet satisfaction.",
        "Verify tire sizes and all breakdown data before transmitting to tire shops, and enter critical service details in real time during calls.",
      ],
    },
    {
      role: "Emergency Roadside Service Dispatcher / Shift Lead",
      company: "Ascent Pro Support, Remote",
      period: "April 2024 – May 2026",
      bullets: [
        "Directed frontline dispatch for high-volume commercial roadside events, acting as senior escalation lead for time-critical breakdowns.",
        "Coordinated vendor networks, negotiated ETAs, and resolved service bottlenecks.",
        "Coached team members, provided workflow guidance and real-time troubleshooting, and maintained multi-system documentation for audit compliance.",
      ],
    },
    {
      role: "Patient Support Representative / Team Lead",
      company: "Dakota Performance Solutions, Remote",
      period: "June 2022 – January 2024",
      bullets: [
        "Led a patient support team, conducting quality checks and onboarding aligned with HIPAA compliance.",
        "Authored SOPs and training manuals that reduced repeat process errors.",
        "Navigated medical billing, insurance verification, and scheduling across multiple databases.",
      ],
    },
    {
      role: "Operations Manager",
      company: "58 Short Stop Inc., Georgetown, TN",
      period: "July 2019 – April 2022",
      bullets: [
        "Managed daily retail operations, inventory, vendor relationships, staffing, payroll, and scheduling.",
        "Used data-driven ordering and stock management to reduce shrinkage and waste.",
      ],
    },
    {
      role: "General Manager",
      company: "Angela's Homestyle Restaurant, Cleveland, TN",
      period: "December 2015 – March 2019",
      bullets: [
        "Directed front- and back-of-house operations, recruitment, onboarding, and scheduling.",
        "Supervised kitchen workflows, food safety, and supply-chain inventory.",
      ],
    },
  ],
  skills: [
    {
      title: "Languages / Frameworks",
      items: [
        { name: "React", level: "strong" },
        { name: "Next.js", level: "working" },
        { name: "TypeScript", level: "strong" },
        { name: "JavaScript", level: "strong" },
        { name: "Python", level: "strong" },
        { name: "Django", level: "strong" },
        { name: "Django REST Framework", level: "working" },
        { name: "SwiftUI", level: "working" },
        { name: "Swift", level: "working" },
        { name: "Astro", level: "working" },
        { name: "Tailwind CSS", level: "working" },
        { name: "HTML/CSS", level: "strong" },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Git & GitHub", level: "strong" },
        { name: "VS Code", level: "familiar" },
        { name: "npm", level: "familiar" },
        { name: "Postman", level: "familiar" },
        { name: "Playwright", level: "familiar" },
        { name: "Vite", level: "familiar" },
        { name: "Figma", level: "familiar" },
      ],
    },
    {
      title: "Concepts",
      items: [
        { name: "Responsive design", level: "strong" },
        { name: "Component architecture", level: "working" },
        { name: "State management", level: "working" },
        { name: "REST APIs", level: "strong" },
        { name: "JWT authentication", level: "working" },
        { name: "Testing & QA", level: "working" },
        { name: "Debugging & problem isolation", level: "strong" },
        { name: "Technical writing / SOPs", level: "familiar" },
      ],
    },
  ],
  projects: [
    {
      name: "Business Website Template",
      description:
        "Reusable Astro + Tailwind CSS v4 business-website starter and template with a component explorer (15 components, style variants, preview-first pages) and a complete Cedar Creek Plumbing example site. Live demo: business-website-template-three.vercel.app",
      tech: "Astro · Tailwind CSS v4",
    },
    {
      name: "RealSync CRM",
      description:
        "Full-stack CRM for home service businesses (Django + React + Postgres): leads, estimates, follow-ups, contracts, signup/trial, per-user isolation. Live: real-sync-eta.vercel.app",
      tech: "Django · React · Postgres",
    },
    {
      name: "Baseline",
      description:
        "Construction job costing & crew scheduling (Next.js + Prisma + Postgres): single-page dashboard, roles/auth (Owner/PM/Crew/Viewer), job costing, crew scheduling. Live: baseline-omega-ochre.vercel.app",
      tech: "Next.js · Prisma · Postgres",
    },
    {
      name: "North Georgia Awning Website",
      description:
        "Real client site for North Georgia Awning LLC. Responsive, component-driven site in Astro + Tailwind CSS. Live: north-georgia-awning.netlify.app",
      tech: "Astro · Tailwind CSS",
    },
    {
      name: "personal-tracker",
      description:
        "Full-stack React + Django REST API task tracker with JWT authentication and protected routes.",
      tech: "React · Django REST API",
    },
    {
      name: "Hiawatha City Council / Hiawatha Brown 2026",
      description:
        "TypeScript civic and campaign websites for Cleveland, TN. Built the campaign site and brand identity as Campaign Manager & Digital Strategist.",
      tech: "TypeScript · Next.js · Tailwind CSS",
    },
    {
      name: "EventFlow / event-dashboard",
      description:
        "Vanilla JavaScript event/task dashboard with localStorage persistence and Playwright tests.",
      tech: "JavaScript · Playwright",
    },
    {
      name: "MyNotes",
      description:
        "SwiftUI iOS note-taking app with modular, block-based UI.",
      tech: "SwiftUI · Swift",
    },
    {
      name: "Timespan Calculator",
      description:
        "JavaScript utility for calculating time spans with a clean, user-friendly UI.",
      tech: "JavaScript · Chrome Extension",
    },
  ],
  education: [
    {
      title: "B.S. Computer Science: Software Systems, Cum Laude, University of Tennessee at Chattanooga",
      detail: "Graduated May 2025 — GPA 3.7",
    },
    {
      title: "Microsoft Office Specialist: Excel Associate",
      detail:
        "Issued April 28, 2025 — Formulas, functions, data organization, pivot tables, and workbook automation.",
    },
  ],
  leadership: [
    {
      role: "Lead, Bradley County Division",
      org: "Anna Galloway for U.S. Congress (TN-3)",
      period: "2026 – Present",
      bullets: [
        "Direct campaign operations, voter outreach, and field strategy across Bradley County.",
      ],
    },
    {
      role: "Campaign Manager & Digital Strategist",
      org: "Hiawatha Brown for City Council",
      period: "2026",
      bullets: [
        "Directed campaign operations, built the campaign website, and managed social media and grassroots canvassing.",
      ],
    },
  ],
  earlierRoles:
    "Earlier roles: Server, Copper Cellar Family of Restaurants, Knoxville, TN, 2013–2015; Host / Server Assistant, Darden Restaurants (Red Lobster), Knoxville, TN, 2012–2013.",
};
