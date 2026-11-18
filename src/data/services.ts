// src/data/services.ts
import { FaCode, FaLaptopCode, FaTools } from "react-icons/fa";

export const services = [
  {
    title: "Full‑Stack Web Development",
    description:
      "End‑to‑end development of modern, responsive, and scalable applications using React, Django, and TypeScript.",
    icon: FaLaptopCode,
    cta: {
      label: "View full-stack work",
      to: "/portfolio",
    },
  },
  {
    title: "UI/UX‑Driven Frontend Engineering",
    description:
      "Pixel‑perfect interfaces with clean architecture, reusable components, and premium user experience.",
    icon: FaCode,
    cta: {
      label: "See UI/UX projects",
      to: "/portfolio",
    },
  },
  {
    title: "Automation & Workflow Optimization",
    description:
      "Custom tools, scripts, and process automation that reduce manual work and improve team efficiency.",
    icon: FaTools,
    cta: {
      label: "Discuss automation ideas",
      to: "/contact",
    },
  },
] as const;
