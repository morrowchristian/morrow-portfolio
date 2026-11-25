# Christian Morrow — Developer Portfolio  
A handcrafted, React‑powered portfolio built with intentional UI/UX, clean architecture, and expressive motion.

**Live site:** [morrow-portfolio.vercel.app](https://morrow-portfolio.vercel.app)

This project is a ground‑up build designed to showcase my engineering style: modular components, maintainable structure, handcrafted CSS, and a layout system that feels deliberate and signature.

---

## 🌐 Overview

This portfolio is built from scratch using a modern React + TypeScript + Vite stack.  
Four pages — Home (About/Bio), Portfolio, Resume, Contact — built around reusable components, custom CSS layers, and animation logic that supports directional stagger, hover overlays, and scroll‑based interactions. Services are folded onto the Home page below the bio; the footer was removed and GitHub/LinkedIn live in the navbar.

Key goals of this project:

- Intentional UI/UX — layouts that feel designed, not templated  
- Clean architecture — modular components, readable structure  
- Maintainability — clear naming, reusable logic, scalable patterns  
- Expressive motion — animations that support meaning, not noise  

---

## 🧱 Tech Stack

- React + TypeScript — component-driven, strongly typed  
- Vite — fast dev server and optimized builds  
- Custom CSS architecture — layout.css, animations.css, variables, grids  
- Reusable components — data-driven project and resume rendering  
- Git discipline — feature branches, pull requests, clean commit history  
- Editorial design — warm paper, espresso ink, shirt red; Newsreader serif + IBM Plex Mono  

---

## 💼 Featured Projects

The portfolio's project lineup (8 projects, in display order):

- **Business Website Template** — A reusable, component-driven website template for small business sites — 15 components with a live explorer, guides, and a complete example site. [Live demo](https://business-website-template-three.vercel.app) · [Repo](https://github.com/morrowchristian/business-website-template)
- **RealSync CRM** — A full-stack CRM for lead and contract management — Django REST API with JWT authentication, React frontend, PostgreSQL, and a real dashboard, deployed live. [Live demo](https://real-sync-eta.vercel.app) · [Repo](https://github.com/morrowchristian/RealSync)
- **personal-tracker** — Full-stack task tracker with a React frontend and Django REST API, JWT authentication, and protected routes. [Repo](https://github.com/morrowchristian/personal-tracker)
- **Hiawatha Brown 2026 — City Council Campaign** — The campaign website for Hiawatha Brown for Cleveland, TN City Council 2026 — built as Campaign Manager & Digital Strategist. The campaign defeated the incumbent. [Repo](https://github.com/morrowchristian/hiawatha-brown-2026)
- **MyNotes** — A lightweight SwiftUI note-taking application with local storage persistence and a clean, distraction-free interface. [Repo](https://github.com/morrowchristian/MyNotes)
- **Event Dashboard** — A dashboard interface for managing events and tasks with a clean, data-driven layout. [Repo](https://github.com/morrowchristian/event-dashboard)
- **Timespan Calculator** — A Chrome extension for calculating time differences and adding minutes to times, with smart time parsing and a clean UI. [Repo](https://github.com/morrowchristian/timespan-calculator)
- **Baseline** — Construction job costing & crew scheduling — Next.js + Prisma + Postgres, budgets vs actuals, time logs, Gantt-style schedule, role-based auth. [Live demo](https://baseline-omega-ochre.vercel.app) · [Repo](https://github.com/morrowchristian/baseline)

---

## 🎨 UI & Interaction Design

This portfolio emphasizes handcrafted UI over template-driven design.  
Some of the expressive elements include:

- Hover overlays on project cards  
- Directional stagger animations for section reveals  
- Responsive CSS grid tuned for desktop, tablet, and mobile  
- Minimalist, modern layout with intentional spacing and hierarchy  

---

## 🧩 Architecture & Components

The codebase is structured for clarity and scalability:

- Four-page routing — Home, Portfolio, Resume, Contact (HashRouter)  
- Custom CSS layers — layout, animations, variables, grids  
- Data-driven rendering — project and resume lists mapped from arrays  
- Clean folder structure — `src/components`, `src/data`, `src/styles`  

This structure makes it easy to add new sections, animations, or components without refactoring the entire codebase.

---

## 🚀 Development Workflow

This portfolio project follows a professional Git workflow:

- Feature branches for isolated development  
- Pull requests for review and merge clarity  
- Descriptive commit messages documenting architectural decisions  

Recent work includes:

- Rebuilding the Home page to a full-viewport Editorial layout with a News timeline, skills proficiency tiers, a stats strip, and a Currently line  
- Adding Baseline and RealSync as featured projects with live-demo thumbnails  
- Cleaning up orphaned files, dead code, and stale comments  

---

## 📦 Getting Started

Clone the repo:

```
git clone https://github.com/morrowchristian/morrow-portfolio
cd morrow-portfolio
```

Install dependencies:

```
npm install
```

Run the dev server:

```
npm run dev
```

Build for production:

```
npm run build
```

---

## 🧭 Roadmap

Planned enhancements:

- Directional stagger animations across all sections  
- Scroll‑based parallax for hero and project imagery  
- Accessibility improvements for keyboard and screen readers  

---

## 📄 License

This portfolio project is open-source under the MIT License.
