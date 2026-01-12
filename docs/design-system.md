# 🎨 Design System Documentation

Your design system is a modular, token‑driven UI framework powering all components in the portfolio.  
It emphasizes clarity, consistency, responsiveness, and expressive UI patterns.

---

## 🧱 Core Architecture

The system is built on four layers:

### **1. Tokens**
The single source of truth for:
- Colors  
- Spacing  
- Typography  
- Radius  
- Shadows  
- Transitions  

Tokens ensure consistency and eliminate hardcoded values.

### **2. Primitives**
Reusable UI building blocks:
- Button  
- Card  
- SectionHeader  

Each primitive is:
- variant‑driven  
- token‑driven  
- layout‑agnostic  
- responsive‑ready  

### **3. Layout**
Structural components:
- Container  
- Grid  

These handle:
- max‑width  
- horizontal padding  
- responsive column logic  
- spacing  

### **4. Utilities**
Global helpers for:
- spacing  
- flex/grid alignment  
- animations  
- visibility  
- typography  

---

## 🎛️ Component Library

### **Button**
A flexible action component with:
- Variants: `primary`, `secondary`, `ghost`
- Sizes: `sm`, `md`, `lg`
- Features: `fullWidth`, `loading`, `leftIcon`, `rightIcon`

**Usage:**
```tsx
<Button variant="primary" size="lg">Click me</Button>
```

---

### **Card**
A content container with padding + radius control:
- Padding: `sm`, `md`, `lg`
- Radius: `sm`, `md`, `lg`

**Usage:**
```tsx
<Card padding="lg" radius="md">Content</Card>
```

---

### **SectionHeader**
A section intro component with:
- Alignment: `left`, `center`
- Optional subtitle
- Future accent variants

**Usage:**
```tsx
<SectionHeader title="Portfolio" subtitle="Selected work" />
```

---

## 🧩 Layout Components

### **Container**
Handles:
- max‑width  
- horizontal padding  
- responsive centering  

### **Grid**
Supports:
- string column definitions  
- responsive objects (`{ base: 1, md: 2 }`)  
- gap tokens  

**Usage:**
```tsx
<Grid columns={{ base: 1, md: 2 }} gap="32px">
  ...
</Grid>
```

---

## 🌀 Animation System

Animations are powered by:
- CSS transitions  
- IntersectionObserver for scroll‑reveal  
- Motion tokens for easing + duration  

Future enhancements:
- stagger utilities  
- parallax  
- velocity‑based easing  

---

## 🌗 Theme System (Future)

The design system is structured to support:
- light/dark mode  
- accent color variants  
- theme‑aware components  

---

## 📐 Design Principles

### **Token‑Driven**
No hardcoded spacing, colors, or typography.

### **Layout‑Agnostic Components**
Components never define layout — Grid and Container handle structure.

### **Responsive via JS**
`useMediaQuery` drives responsive behavior instead of CSS media queries.

### **Variants Over Overrides**
Every component uses variants instead of ad‑hoc overrides.

### **Minimal CSS, Maximum Reuse**
CSS is:
- co‑located  
- token‑driven  
- variant‑driven  
- never duplicated  

---

## 📘 Component Roadmap

### Button
- spinner  
- focus ring  
- icon‑only  
- motion polish  
- destructive variant  

### Card
- hover elevation  
- skeleton  
- interactive mode  
- responsive padding  

### SectionHeader
- accent underline  
- scroll animation  
- icon support  
- compact variant  

### Grid
- full responsive support  
- alignment variants  
- stagger utilities  

---

## 🧭 Summary

This design system provides:
- a consistent visual language  
- scalable UI primitives  
- responsive layout tools  
- a foundation for premium, expressive UI  

It is intentionally minimal, extensible, and aligned with modern product‑grade design systems used by companies like Vercel, Linear, and Notion.
