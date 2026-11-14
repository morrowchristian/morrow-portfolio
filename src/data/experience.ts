// src/data/experience.ts — CORRECTED 2026-11-13
// Fixes: company name is Ascent Pro Support (not "Ascent Pro Staffing"),
// dates updated (Ascent ended May 2026; Eagle Tele-Services started May 2026 and is current),
// and the unverified numbers were removed — they are NOT in Christian's last resume:
// no "15-25 agents", no "500+ patient schedules, 100% accuracy", no "productivity by 40%",
// no "10 hours weekly" saved. Only claims from the resume Christian provided on 2026-11-13 remain.
export const experience = [
  {
    company: "Eagle Tele-Services",
    role: "Emergency Roadside Service Dispatcher / Roadside Support Specialist",
    dates: "May 2026 - Present",
    bullets: [
      "Handle high-volume inbound calls from commercial fleet drivers, performing rapid diagnostic intake and dispatching emergency support.",
      "Use digital mapping, fleet software, and repair manuals concurrently to pinpoint failures and pair drivers with qualified vendors.",
      "Maintain audit-ready dispatch logs, quotes, and billing entries.",
    ],
  },
  {
    company: "Ascent Pro Support",
    role: "Emergency Roadside Service Dispatcher / Shift Lead",
    dates: "April 2024 - May 2026",
    bullets: [
      "Directed frontline dispatch for high-volume commercial roadside events, acting as senior escalation lead for time-critical breakdowns.",
      "Coordinated vendor networks, negotiated ETAs, and resolved service bottlenecks.",
      "Coached team members, provided workflow guidance and real-time troubleshooting, and maintained multi-system documentation for audit compliance.",
    ],
  },
  {
    company: "Dakota Performance Solutions",
    role: "Patient Support Representative / Team Lead",
    dates: "June 2022 - January 2024",
    bullets: [
      "Led a patient support team, conducting quality checks and onboarding aligned with HIPAA compliance.",
      "Authored SOPs and training manuals that reduced repeat process errors.",
      "Navigated medical billing, insurance verification, and scheduling across multiple databases.",
    ],
  },
  {
    company: "58 Short Stop, Inc.",
    role: "Operations Manager",
    dates: "July 2019 - April 2022",
    bullets: [
      "Managed daily retail operations, inventory, vendor relationships, staffing, payroll, and scheduling.",
      "Used data-driven ordering and stock management to reduce shrinkage and waste.",
    ],
  },
];
