// src/data/projects.ts — CORRECTED 2026-11-13
// Fixes: North Georgia Awning demo now points to the live Netlify site (was the GitHub repo),
// tags now match the actual stack (Astro, not React; MyNotes is SwiftUI, not JS/HTML;
// EventFlow is vanilla JS, not React). No 100% test-coverage claim anywhere.
// Added: personal-tracker and Hiawatha, the two strongest software projects missing from the portfolio.
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
    demoLink: "https://github.com/morrowchristian/personal-tracker",
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
    tags: ["TypeScript", "React"],
    featured: false,
    demoLink: "https://github.com/morrowchristian/hiawatha-brown-2026",
    repoLink: "https://github.com/morrowchristian/hiawatha-brown-2026",
    modal: {
      longDescription:
        "Civic and campaign websites built as Campaign Manager & Digital Strategist for Hiawatha Brown for City Council, 2026.",
      images: ["src/assets/projects/project1.jpg"],
      highlights: [
        "Campaign website and donation flow",
        "Civic / community project",
        "TypeScript",
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
    demoLink: "https://github.com/morrowchristian/MyNotes",
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
    demoLink: "https://github.com/morrowchristian/event-dashboard",
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
      "A utility tool for calculating time differences with a clean UI and instant results.",
    image: "src/assets/projects/project2.jpg",
    tags: ["JavaScript", "HTML", "CSS"],
    featured: false,
    demoLink: "https://github.com/morrowchristian/timespan-calculator",
    repoLink: "https://github.com/morrowchristian/timespan-calculator",
    modal: {
      longDescription:
        "A simple calculator for determining time spans between dates. Built with a focus on clarity and ease of use.",
      images: ["src/assets/projects/project2.jpg"],
      highlights: [
        "Instant time calculations",
        "Clean and simple UI",
        "Lightweight and fast",
      ],
    },
  },
];
