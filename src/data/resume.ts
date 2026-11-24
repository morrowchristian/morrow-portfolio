// src/data/resume.ts — CORRECTED 2026-11-13, extended 2026-11-17
// Fixes: the old file had placeholder experience — "Full-Stack Software Engineer, Your Company,
// 2022 – Present" and "Frontend Developer, Another Company, 2020 – 2022". Those were not real jobs.
// Replaced with Christian's actual work history from the resume he provided on 2026-11-13.
// 2026-11-17: the experience bullets were added from the same resume (they already lived in
// src/data/experience.ts, which nothing imports) so the Resume page can show the depth of each
// role, plus the education, certification and campaign sections from that resume. Nothing here
// is invented — every line comes from the resume Christian provided on 2026-11-13.
export interface ResumeExperience {
  role: string;
  company: string;
  period: string;
  bullets?: string[];
}

export interface ResumeSkillGroup {
  title: string;
  items: string[];
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
  education: [
    {
      title: "B.S. Software Systems, University of Tennessee at Chattanooga",
      detail: "Graduated May 2025 — Latin Honors, GPA 3.7",
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
      period: "2026",
      bullets: [
        "Direct campaign operations, voter outreach, and field strategy across Bradley County.",
      ],
    },
    {
      role: "Campaign Manager & Digital Strategist",
      org: "Hiawatha Brown for City Council",
      period: "2026",
      bullets: [
        "Directed campaign operations, built the campaign website and donation flow, and managed social media and grassroots canvassing.",
      ],
    },
  ],
  earlierRoles:
    "Earlier roles: Server, Copper Cellar Family of Restaurants, Knoxville, TN, 2013–2015; Host / Server Assistant, Darden Restaurants (Red Lobster), Knoxville, TN, 2012–2013.",
};
