// src/data/projects.ts — CORRECTED 2026-11-13, updated 2026-11-14
// 2026-11-14 fixes: "Live Demo" buttons linked to GitHub repos, not live sites —
// ProjectCard renders demoLink as "Live Demo", so demoLink is now kept ONLY where
// a live site was verified (North Georgia Awning on Netlify). The other five
// projects keep repoLink only; no live demo is claimed for them.
// Hiawatha tags now include Next.js + Tailwind CSS (its repo README: Next.js 16,
// React 19, TypeScript, Tailwind v4). Timespan Calculator is a Chrome extension,
// not a generic web utility — description/tags corrected to say so.
export const projects = [
  {
    title: "North Georgia Awning Website",
    description:
      "A modern, responsive marketing website built for a local awning company, featuring clean UI, service pages, and a mobile-first layout.",
    image: "src/assets/projects/project1.jpg",
    tags: ["Astro", "Tailwind CSS", "TypeScript"],
    featured: true,
    demoLink: "https://north-georgia-awning.netlify.app",
    repoLink: "https://github.com/morrowchristian/north-georgia-awning-website",
    modal: {
      longDescription:
        "A full redesign and rebuild of a small business website with a focus on clarity, accessibility, and conversion-driven UI. Includes service listings, gallery sections, and responsive layouts.",
      images: ["src/assets/projects/project1.jpg"],
      highlights: [
        "Responsive marketing layout",
        "Service-driven content structure",
        "Clean, accessible UI",
      ],
    },
  },
  {
    title: "personal-tracker",
    description:
      "Full-stack task tracker with a React frontend and Django REST API, JWT authentication, and protected routes.",
    image: "src/assets/projects/project2.jpg",
    tags: ["React", "Django", "TypeScript", "Python"],
    featured: true,
    repoLink: "https://github.com/morrowchristian/personal-tracker",
    modal: {
      longDescription:
        "A full-stack React + Django REST API app with JWT authentication and protected routes. Add a live demo or screenshots before leading with it in applications.",
      images: ["src/assets/projects/project2.jpg"],
      highlights: [
        "React + Django REST API",
        "JWT authentication and protected routes",
        "Full-stack architecture",
      ],
    },
  },
  {
    title: "Hiawatha City Council / Hiawatha Brown 2026",
    description:
      "TypeScript civic and campaign websites for Cleveland, TN, including the campaign site, brand identity, and donation flow.",
    image: "src/assets/projects/project1.jpg",
    tags: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    featured: false,
    repoLink: "https://github.com/morrowchristian/hiawatha-brown-2026",
    modal: {
      longDescription:
        "Civic and campaign websites built as Campaign Manager & Digital Strategist for Hiawatha Brown for City Council, 2026.",
      images: ["src/assets/projects/project1.jpg"],
      highlights: [
        "Campaign website and donation flow",
        "Civic / community project",
        "Built with Next.js, React & TypeScript",
      ],
    },
  },
  {
    title: "MyNotes",
    description:
      "A lightweight SwiftUI note-taking application with local storage persistence and a clean, distraction-free interface.",
    image: "src/assets/projects/project2.jpg",
    tags: ["SwiftUI", "Swift"],
    featured: false,
    repoLink: "https://github.com/morrowchristian/MyNotes",
    modal: {
      longDescription:
        "A simple and fast note-taking tool designed for everyday use. Features instant saving, a minimal UI, and smooth interactions.",
      images: ["src/assets/projects/project2.jpg"],
      highlights: [
        "Local storage persistence",
        "Minimal, distraction-free UI",
        "Fast and lightweight",
      ],
    },
  },
  {
    title: "Event Dashboard",
    description:
      "A dashboard interface for managing events, attendees, and scheduling with a clean, data-driven layout.",
    image: "src/assets/projects/project1.jpg",
    tags: ["JavaScript", "HTML", "CSS", "Playwright"],
    featured: true,
    repoLink: "https://github.com/morrowchristian/event-dashboard",
    modal: {
      longDescription:
        "A dashboard application designed to manage event data with clarity and efficiency. Includes tables, filters, and responsive layouts. Playwright tests exist; the repo README says they need updating, so no coverage percentage is claimed.",
      images: ["src/assets/projects/project1.jpg"],
      highlights: [
        "Dashboard UI with clean data layout",
        "Event and attendee management",
        "Responsive and modular components",
      ],
    },
  },
  {
    title: "Timespan Calculator",
    description:
      "A Chrome extension for calculating time differences and adding minutes to times, with smart time parsing and a clean UI.",
    image: "src/assets/projects/project2.jpg",
    tags: ["JavaScript", "HTML", "CSS", "Chrome Extension"],
    featured: false,
    repoLink: "https://github.com/morrowchristian/timespan-calculator",
    modal: {
      longDescription:
        "A Chrome extension that calculates minutes between two times and adds minutes to a start time, with smart parsing of formats like 9a, 930a, and 9:30 AM. Built with vanilla JavaScript and the Chrome Extension API.",
      images: ["src/assets/projects/project2.jpg"],
      highlights: [
        "Smart time parsing",
        "Add-minutes calculation",
        "Clean and simple UI",
      ],
    },
  },
];
