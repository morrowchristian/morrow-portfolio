// src/data/services.ts — what Christian can actually build, grounded
// in shipped work (2026-11-26). Each offering links to its proof:
// a live demo or the repo. No generic agency titles, no invented
// achievements or numbers. The services live in the hero (Bio) as
// "What I build" rows, not as a standalone section.
import { FaCode, FaLaptopCode, FaMobileAlt } from "react-icons/fa";

export const services = [
  {
    title: "Business websites",
    description:
      "A complete website for your business, designed, built, and put live. The North Georgia Awning site is live now, and the template I built from it is the starting point for the next one.",
    icon: FaLaptopCode,
    cta: {
      label: "See the live template",
      href: "https://business-website-template-three.vercel.app",
    },
  },
  {
    title: "Web apps & dashboards",
    description:
      "Full-stack apps with sign-in, a database, and the workflow built in. A CRM that makes sure no estimate goes cold, job costing that tracks budgets against actuals, a task manager with GitHub sign-in.",
    icon: FaCode,
    cta: {
      label: "See RealSync live",
      href: "https://real-sync-eta.vercel.app",
    },
  },
  {
    title: "iOS apps",
    description:
      "Native iPhone apps in SwiftUI. MyNotes is the one I'm building now — notes, lists, and tools that feel at home on iOS.",
    icon: FaMobileAlt,
    cta: {
      label: "See MyNotes on GitHub",
      href: "https://github.com/morrowchristian/MyNotes",
    },
  },
] as const;
