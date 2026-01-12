// src/data/services.ts
import { FaCode, FaLaptopCode, FaTools } from "react-icons/fa";

export const services = [
  {
    title: "Full‑Stack Web Development",
    description:
      "End‑to‑end development of modern, responsive, and scalable applications using React, Django, and TypeScript.",
    icon: FaLaptopCode,
    accent: "blue",
    cta: {
      label: "View full-stack work",
      href: "#portfolio",
    },
  },
  {
    title: "UI/UX‑Driven Frontend Engineering",
    description:
      "Pixel‑perfect interfaces with clean architecture, reusable components, and premium user experience.",
    icon: FaCode,
    accent: "purple",
    cta: {
      label: "See UI/UX projects",
      href: "#portfolio",
    },
  },
  {
    title: "Automation & Workflow Optimization",
    description:
      "Custom tools, scripts, and process automation that reduce manual work and improve team efficiency.",
    icon: FaTools,
    accent: "green",
    cta: {
      label: "Discuss automation ideas",
      href: "#contact",
    },
  },
] as const;
