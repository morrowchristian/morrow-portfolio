// src/data/projects.ts — CORRECTED 2026-11-13, updated 2026-11-14
// 2026-11-14 fixes: "Live Demo" buttons linked to GitHub repos, not live sites —
// ProjectCard renders demoLink as "Live Demo", so demoLink is now kept ONLY where
// a live site was verified (North Georgia Awning on Netlify). The other five
// projects keep repoLink only; no live demo is claimed for them.
// Hiawatha tags now include Next.js + Tailwind CSS (its repo README: Next.js 16,
// React 19, TypeScript, Tailwind v4). Timespan Calculator is a Chrome extension,
// not a generic web utility — description/tags corrected to say so.
// 2026-11-17: thumbnails now live in public/ — the image paths are
// "/project1.jpg" / "/project2.jpg" (public-folder URLs Vite serves
// as-is). The old "src/assets/projects/..." strings 404'd because
// Vite does not bundle images referenced as bare strings.
export const projects = [
  {
    title: "North Georgia Awning Website",
    description:
      "A responsive marketing website for a local awning company, with an interactive quote calculator and a mobile-first layout.",
    image: "/north-georgia-awning.png",
    tags: ["Astro", "Tailwind CSS", "TypeScript"],
    featured: true,
    demoLink: "https://north-georgia-awning.netlify.app",
    repoLink: "https://github.com/morrowchristian/north-georgia-awning-website",
    modal: {
      longDescription:
        "A marketing website built for North Georgia Awning LLC. Includes a responsive homepage and an interactive quote page with a price calculator (per-sq-ft pricing plus motor, lights, and sensor add-ons).",
      images: ["/north-georgia-awning.png"],
      highlights: [
        "Responsive marketing layout",
        "Interactive quote calculator",
        "Built for a real client",
      ],
    },
  },
  {
    title: "personal-tracker",
    description:
      "Full-stack task tracker with a React frontend and Django REST API, JWT authentication, and protected routes.",
    image: "/project2.jpg",
    tags: ["React", "Django", "Python", "JavaScript"],
    featured: true,
    repoLink: "https://github.com/morrowchristian/personal-tracker",
    modal: {
      longDescription:
        "A full-stack React + Django REST API task tracker with JWT authentication and protected routes. Create, edit, complete, and delete tasks with due dates and priorities — each user only sees their own tasks.",
      images: ["/project2.jpg"],
      highlights: [
        "Task CRUD with due dates and priorities",
        "JWT authentication and protected routes",
        "Per-user task isolation",
      ],
    },
  },
  {
    title: "Hiawatha City Council / Hiawatha Brown 2026",
    description:
      "The campaign website for Hiawatha Brown for Cleveland, TN City Council 2026 — built as Campaign Manager & Digital Strategist. The campaign defeated the incumbent.",
    image: "/hiawatha-banner.jpg",
    tags: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    featured: false,
    repoLink: "https://github.com/morrowchristian/hiawatha-brown-2026",
    modal: {
      longDescription:
        "The campaign website for Hiawatha Brown for City Council, 2026, built as Campaign Manager & Digital Strategist. A single-page site with the candidate's bio, platform, district map, and contact — and the campaign won, defeating the incumbent.",
      images: ["/hiawatha-banner.jpg"],
      highlights: [
        "Campaign website — bio, platform, district map",
        "Campaign defeated the incumbent",
        "Built with Next.js, React & TypeScript",
      ],
    },
  },
  {
    title: "MyNotes",
    description:
      "A lightweight SwiftUI note-taking application with local storage persistence and a clean, distraction-free interface.",
    image: "/project2.jpg",
    tags: ["SwiftUI", "Swift"],
    featured: false,
    repoLink: "https://github.com/morrowchristian/MyNotes",
    modal: {
      longDescription:
        "A simple and fast note-taking tool designed for everyday use. Features instant saving, a minimal UI, and smooth interactions.",
      images: ["/project2.jpg"],
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
      "A dashboard interface for managing events and tasks with a clean, data-driven layout.",
    image: "/eventflow-dashboard.png",
    tags: ["JavaScript", "HTML", "CSS", "Playwright"],
    featured: true,
    repoLink: "https://github.com/morrowchristian/event-dashboard",
    modal: {
      longDescription:
        "A dashboard application designed to manage event data with clarity and efficiency. Includes tables, filters, and responsive layouts. Playwright tests exist; the repo README says they need updating, so no coverage percentage is claimed.",
      images: ["/eventflow-dashboard.png"],
      highlights: [
        "Dashboard UI with clean data layout",
        "Event and task management",
        "Responsive and modular components",
      ],
    },
  },
  {
    title: "Timespan Calculator",
    description:
      "A Chrome extension for calculating time differences and adding minutes to times, with smart time parsing and a clean UI.",
    image: "/timespan-card.png",
    tags: ["JavaScript", "HTML", "CSS", "Chrome Extension"],
    featured: false,
    repoLink: "https://github.com/morrowchristian/timespan-calculator",
    modal: {
      longDescription:
        "A Chrome extension that calculates minutes between two times and adds minutes to a start time, with smart parsing of formats like 9a, 930a, and 9:30 AM. Built with vanilla JavaScript and the Chrome Extension API.",
      images: ["/timespan-card.png"],
      highlights: [
        "Smart time parsing",
        "Add-minutes calculation",
        "Clean and simple UI",
      ],
    },
  },
];
