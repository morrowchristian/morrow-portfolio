// src/data/projects.ts — CORRECTED 2026-11-13, updated 2026-11-14
// 2026-11-14 fixes: "Live Demo" buttons linked to GitHub repos, not live sites —
// the detail panel renders demoLink as "Live Demo", so demoLink is now kept ONLY where
// a live site was verified. Business Website Template (Vercel) and RealSync CRM
// (Vercel) have verified live demos; the other five projects keep repoLink only;
// no live demo is claimed for them.
// Hiawatha tags now include Next.js + Tailwind CSS (its repo README: Next.js 16,
// React 19, TypeScript, Tailwind v4). Timespan Calculator is a Chrome extension,
// not a generic web utility — description/tags corrected to say so.
// 2026-11-17: thumbnails now live in public/ — the image paths are
// public-folder URLs Vite serves as-is (e.g. "/project2.jpg").
// The old "src/assets/projects/..." strings 404'd because
// Vite does not bundle images referenced as bare strings.
// 2026-11-22: North Georgia Awning removed from the portfolio; Business Website
// Template added in its place (first, featured) with its verified Vercel demo.
// Thumbnail is a real screenshot of the live template's Component Explorer
// (public/business-website-template.png, 1280x853), captured 2026-11-22.
// 2026-11-23: RealSync CRM added second (featured) with its verified Vercel demo
// and a real screenshot of the live dashboard as its thumbnail
// (public/realsync-dashboard.png).
export const projects = [
  {
    title: "Business Website Template",
    description:
      "A reusable, component-driven website template for small business sites — 15 components with a live explorer, guides, and a complete example site.",
    image: "/business-website-template.png",
    tags: ["Astro", "Tailwind CSS", "TypeScript"],
    featured: true,
    demoLink: "https://business-website-template-three.vercel.app",
    repoLink: "https://github.com/morrowchristian/business-website-template",
    modal: {
      longDescription:
        "A reusable Astro + Tailwind CSS starter for building small business websites. Fifteen components with a live explorer (preview, variants, API docs, code examples), three guides (Page Catalog, Technical Checklist, Design Tokens), and a complete fictional example site — Cedar Creek Plumbing — built from the components. Dark mode ships as a component, and the template includes a sitemap and SEO meta tags.",
      images: ["/business-website-template.png"],
      highlights: [
        "15 reusable components with a live explorer",
        "Complete example site built from the components",
        "Guides: Page Catalog, Technical Checklist, Design Tokens",
      ],
    },
  },
  {
    title: "RealSync CRM",
    description:
      "A full-stack CRM for lead and contract management — Django REST API with JWT authentication, React frontend, PostgreSQL, and a real dashboard, deployed live.",
    image: "/realsync-dashboard.png",
    tags: ["Django", "React", "TypeScript", "PostgreSQL"],
    featured: true,
    demoLink: "https://real-sync-eta.vercel.app",
    repoLink: "https://github.com/morrowchristian/RealSync",
    modal: {
      longDescription:
        "A full-stack CRM for lead and contract management. JWT authentication with token refresh, lead and contract management with archive and restore, and a real dashboard with lead counts by status, contracts, pending signatures, and recent leads. The lead form is wide and professional — grouped Contact, Details, and Lead Info sections with company, lead source, notes, and preferred contact method, real labels, and frontend plus backend validation — and an admin can add custom fields and set field preferences in Settings, saved per user in the backend. Lead cards are clickable with a Cards/Sheet table toggle, archive and delete use in-app confirmations, and the sidebar has an active-page highlight.",
      images: ["/realsync-dashboard.png"],
      highlights: [
        "Lead & contract management with archive and restore",
        "Sophisticated lead form with validation and admin-configurable custom fields",
        "Dashboard, clickable cards, and Cards/Sheet views",
      ],
    },
  },
  {
    title: "personal-tracker",
    description:
      "Full-stack task tracker with a React frontend and Django REST API, GitHub sign-in, JWT authentication, and protected routes.",
    image: "/personal-tracker-dashboard.jpg",
    tags: ["React", "Django", "Python", "JavaScript"],
    featured: true,
    repoLink: "https://github.com/morrowchristian/personal-tracker",
    demoLink: "https://personal-tracker-indol.vercel.app",
    modal: {
      longDescription:
        "A full-stack React + Django REST API task tracker with GitHub sign-in, JWT authentication, and protected routes. Create, edit, complete, and delete tasks with due dates and priorities — each user only sees their own tasks.",
      images: ["/personal-tracker-dashboard.jpg"],
      highlights: [
        "Task CRUD with due dates and priorities",
        "GitHub OAuth sign-in",
        "JWT authentication and protected routes",
        "Per-user task isolation",
      ],
    },
  },
  {
    title: "Hiawatha Brown 2026 — City Council Campaign",
    description:
      "The campaign website for Hiawatha Brown for Cleveland, TN City Council 2026 — built as Campaign Manager & Digital Strategist. The campaign defeated the incumbent.",
    image: "/hiawatha-banner.jpg",
    tags: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    featured: false,
    demoLink: "https://www.hiawatha2026.com",
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
  {
    title: "Baseline",
    description:
      "Construction job costing & crew scheduling — a single-page dashboard with roles and auth, budget tracking, and a crew schedule. Next.js, Prisma, Postgres.",
    image: "/baseline-dashboard.png",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Auth.js", "TypeScript"],
    featured: true,
    demoLink: "https://baseline-omega-ochre.vercel.app",
    repoLink: "https://github.com/morrowchristian/baseline",
    modal: {
      longDescription:
        "A construction job costing and crew scheduling app. The journal is the dashboard: tabbed Jobs, Costs, Time Logs, Crew, Schedule, and Users views on a single page, with KPI cards, an over-budget alert banner, a budget-by-job donut, and a jobs-at-a-glance table. Auth.js sign-in with four roles (Owner, Project Manager, Crew Member, Viewer) scoping what each user can see, and a seeded demo dataset (5 jobs, 6 crew, $299,500 budget). Deployed on Vercel with a Neon Postgres database.",
      images: ["/baseline-dashboard.png"],
      highlights: [
        "Single-page journal dashboard with KPI cards and budget donut",
        "Role-based access: Owner, Project Manager, Crew Member, Viewer",
        "Job costing vs budget with over-budget alerts",
      ],
    },
  },
];
