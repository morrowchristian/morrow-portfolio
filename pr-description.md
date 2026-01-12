# Phase 2 — Portfolio Refactor (#28)

## Overview
This PR begins **Phase 2** of the portfolio redesign, focusing on upgrading the **Portfolio section** to align with the new design‑system architecture and the updated visual direction inspired by the project’s creative brief. The goal is to modernize the card layout, introduce featured variants, prepare for filtering, and elevate the overall UI polish.

This PR is opened as a **Draft** and will be updated as Phase 2 progresses.

---

## Completed Work (so far)

### 🎨 Design System Integration
- Added new design tokens for:
  - Tag color variants (React, TypeScript, JS, CSS, HTML)
  - Featured project styling (background, border, shadow, padding)
  - Modal animation primitives (fade/scale)

### 🧱 Portfolio Component Styling
- Added `.project-card--featured` variant
- Added `.project-card__tag--*` color classes
- Upgraded hover elevation + transitions for a premium feel
- Added `transition-delay` support to enable staggered animations

---

## Upcoming Work (Phase 2 Roadmap)

### 🔜 Step 3 — `ProjectCard.tsx` Enhancements
- Apply tag variant classes dynamically  
- Add featured variant logic  
- Add stagger animation inline  
- Prep for modal trigger  

### 🔜 Step 4 — Data Model Updates
- Add `featured: true` to select projects  
- Add `tags: [...]` for filtering  
- Add modal content fields  

### 🔜 Step 5 — Filtering UI
- Add filter bar  
- Add filter state + logic  
- Animate filtered results  

### 🔜 Step 6 — Modal View
- Inject project details  
- Add fade/scale animation  
- Add responsive modal sizes  

---

## Why This Matters
This PR lays the foundation for a **premium, expressive, scalable Portfolio section** that aligns with:

- The design system  
- The Mannucci‑inspired visual direction  
- The modular architecture  
- The roadmap for Phase 2 → Phase 5  

It ensures all future enhancements plug into a clean, token‑driven system.

---

## Related Issue
Closes #28
