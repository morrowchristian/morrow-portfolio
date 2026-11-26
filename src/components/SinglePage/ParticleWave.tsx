// src/components/SinglePage/ParticleWave.tsx — plexus / constellation
// network background for the single page (2026-11-26, replacing the
// halftone dot-wave ribbons). Dots AND connecting lines: a sparse
// field of small dots scattered across the whole viewport (a jittered
// grid plus a few denser clusters, so the network is uneven the way
// a real constellation is), with thin straight lines joining dots
// that are near each other — local links only, so the lines form
// irregular polygons and triangles instead of a dense mesh. The
// reference is Joseph Mansilla's portfolio background
// (josephmansilla.github.io/portfolio), which is static; this one
// keeps a whisper of life — the dots drift almost imperceptibly
// (a slow sway around their home positions, so lines fade in and
// out as distances cross the cutoff) and dots near the mouse ripple
// outward and ease back.
//
// Palette-matched for BOTH themes, in the portfolio's own colours
// ONLY — no multicolour dots: warm-white dots with ~1 in 8 in shirt
// red on the dark charcoal page; espresso-ink dots with ~1 in 8 in
// shirt red on the light paper page. The lines are the theme dot
// colour at very low opacity, much fainter than the dots. Subtle in
// both — text stays perfectly readable. Respects
// prefers-reduced-motion (one static frame, no animation, no mouse
// response) and pauses when the tab is hidden. Mounted by SinglePage
// only, so the old routes are unaffected; everything is cleaned up
// on unmount. (The `single-page--wave` html class and the
// `particle-wave` canvas class are historical names from the wave
// version — they now gate this plexus backdrop.)
import { useEffect, useRef } from "react";
import "./ParticleWave.css";

// Jittered-grid spacing (px). ~85px keeps the field sparse: at
// 1440x900 the grid is ~18x12 dots, plus the clusters below.
const SPACING = 85;
// Max link distance (px). Only dots closer than this are joined,
// so every line is local and the network stays open, not meshy.
// Also the spatial-grid cell size, so neighbour lookup is cheap.
const LINK_DIST = 120;
const MAX_COLS = 26;
const MAX_ROWS = 18;
// A few denser clusters over the even grid, so the network is
// uneven (dense in places, sparse in others) like the reference.
const CLUSTER_COUNT = 5;
const CLUSTER_DOTS = 10;
const CLUSTER_SPREAD = 90; // px — cluster radius (Gaussian-ish)
const MOUSE_RADIUS = 170; // px — dots inside this ripple away
const MOUSE_PUSH = 26; // px max displacement from the mouse
const EASE = 0.14; // per-frame lerp toward the mouse target (springy)

// Dot palettes, as "r, g, b" triples. Dark: warm white + lightened
// shirt red on charcoal. Light: espresso ink + shirt red on paper.
// Lines always use the theme dot colour (never red), at very low
// opacity — they read as faint structure, not as colour.
const PALETTES = {
  dark: { dot: "232, 226, 214", red: "217, 96, 79" },
  light: { dot: "33, 29, 22", red: "160, 44, 30" },
} as const;

type Particle = {
  bx: number; // home x (css px)
  by: number; // home y (css px)
  red: boolean;
  radius: number; // base radius (px)
  phase: number; // per-particle sway phase
  phaseY: number; // second sway phase (y axis)
  swayAmp: number; // px — how far it wanders from home
  swaySpeed: number; // rad/ms — very slow (periods of ~80-150s)
  ox: number; // eased mouse offset x
  oy: number; // eased mouse offset y
};

// Deterministic pseudo-random generator (mulberry32) so a rebuild
// at the same viewport size reproduces the same field instead of
// reshuffling the dots on every resize.
const mulberry32 = (seed: number) => () => {
  let s = seed >>> 0;
  s = (s + 0x6d2b79f5) | 0;
  let t = Math.imul(s ^ (s >>> 15), 1 | s);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

export const ParticleWave: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const isDark = () =>
      document.documentElement.getAttribute("data-theme") !== "light";

    let particles: Particle[] = [];
    // Drawn positions for this frame (parallel to `particles`),
    // so the lines and the dots agree exactly.
    let px: Float32Array = new Float32Array(0);
    let py: Float32Array = new Float32Array(0);
    let raf = 0;
    let width = 0;
    let height = 0;
    const mouse = { x: 0, y: 0, active: false };

    const buildField = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const rnd = mulberry32(20261126);
      const cols = Math.min(MAX_COLS, Math.ceil(width / SPACING) + 1);
      const rows = Math.min(MAX_ROWS, Math.ceil(height / SPACING) + 1);
      const x0 = (width - (cols - 1) * SPACING) / 2;
      const y0 = (height - (rows - 1) * SPACING) / 2;
      const next: Particle[] = [];
      let i = 0;
      // Jittered grid: even coverage with organic placement. The
      // jitter (±32px) is well under half the spacing, so dots never
      // collide or leave big gaps.
      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 1) {
          const jx = (rnd() - 0.5) * 64;
          const jy = (rnd() - 0.5) * 64;
          next.push({
            bx: x0 + col * SPACING + jx,
            by: y0 + row * SPACING + jy,
            // ~1 in 8 dots is shirt red; the rest are the theme dot
            // colour. A few dots (1 in ~12) are larger.
            red: i % 8 === 3,
            radius: i % 12 === 5 ? 2.4 + rnd() * 0.8 : 0.8 + rnd() * 1.2,
            phase: rnd() * Math.PI * 2,
            phaseY: rnd() * Math.PI * 2,
            swayAmp: 4 + rnd() * 4,
            // Period 80-150s: the drift is almost imperceptible.
            swaySpeed: (Math.PI * 2) / (80000 + rnd() * 70000),
            ox: 0,
            oy: 0,
          });
          i += 1;
        }
      }
      // Clusters: a few denser patches over the grid, so the network
      // is uneven (dense in places, sparse in others).
      for (let c = 0; c < CLUSTER_COUNT; c += 1) {
        const cx = rnd() * width;
        const cy = rnd() * height;
        for (let k = 0; k < CLUSTER_DOTS; k += 1) {
          // Gaussian-ish spread via the average of two uniforms.
          const gx = ((rnd() + rnd()) / 2 - 0.5) * 2 * CLUSTER_SPREAD;
          const gy = ((rnd() + rnd()) / 2 - 0.5) * 2 * CLUSTER_SPREAD;
          next.push({
            bx: cx + gx,
            by: cy + gy,
            red: i % 8 === 3,
            radius: 0.8 + rnd() * 1.2,
            phase: rnd() * Math.PI * 2,
            phaseY: rnd() * Math.PI * 2,
            swayAmp: 4 + rnd() * 4,
            swaySpeed: (Math.PI * 2) / (80000 + rnd() * 70000),
            ox: 0,
            oy: 0,
          });
          i += 1;
        }
      }
      particles = next;
      px = new Float32Array(particles.length);
      py = new Float32Array(particles.length);
    };

    // Draw one frame at time `t` (ms). Lines first (behind the
    // dots), then the dots. A dot's drawn position is its home plus
    // a very slow sway plus the eased mouse ripple; lines join dots
    // within LINK_DIST of each other and fade out as they approach
    // it, so the constellation re-forms almost imperceptibly as the
    // dots wander.
    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      if (particles.length === 0) return;

      const palette = isDark() ? PALETTES.dark : PALETTES.light;
      // Dots are clearly visible small points; lines are a faint
      // whisper of structure. Light ink on paper needs slightly
      // lower ceilings than warm white on charcoal to stay equally
      // subtle.
      const dotAlpha = isDark() ? 0.5 : 0.42;
      const redAlpha = isDark() ? 0.62 : 0.52;
      const lineAlphaMax = isDark() ? 0.07 : 0.055;

      // Resolve every drawn position first.
      for (let n = 0; n < particles.length; n += 1) {
        const p = particles[n];
        const swayX = p.swayAmp * Math.sin(t * p.swaySpeed + p.phase);
        const swayY =
          p.swayAmp * Math.sin(t * p.swaySpeed * 0.83 + p.phaseY);
        let tx = 0;
        let ty = 0;
        if (mouse.active) {
          const dx = p.bx - mouse.x;
          const dy = p.by - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d > 0.01 && d < MOUSE_RADIUS) {
            const f = 1 - d / MOUSE_RADIUS;
            const push = MOUSE_PUSH * f * f;
            tx = (dx / d) * push;
            ty = (dy / d) * push;
          }
        }
        p.ox += (tx - p.ox) * EASE;
        p.oy += (ty - p.oy) * EASE;
        px[n] = p.bx + swayX + p.ox;
        py[n] = p.by + swayY + p.oy;
      }

      // Lines: bucket dots into a spatial grid (cell = LINK_DIST)
      // and only test the 3x3 neighbourhood of each cell, so the
      // neighbour search is O(n), not O(n^2). Each pair is drawn
      // once (only when the neighbour's index is higher).
      const cell = LINK_DIST;
      const grid = new Map<number, number[]>();
      for (let n = 0; n < particles.length; n += 1) {
        const key =
          Math.floor(px[n] / cell) * 100000 + Math.floor(py[n] / cell);
        const bucket = grid.get(key);
        if (bucket) bucket.push(n);
        else grid.set(key, [n]);
      }
      ctx.lineWidth = 1;
      for (let n = 0; n < particles.length; n += 1) {
        const cx = Math.floor(px[n] / cell);
        const cy = Math.floor(py[n] / cell);
        for (let gx = cx - 1; gx <= cx + 1; gx += 1) {
          for (let gy = cy - 1; gy <= cy + 1; gy += 1) {
            const bucket = grid.get(gx * 100000 + gy);
            if (!bucket) continue;
            for (const m of bucket) {
              if (m <= n) continue;
              const dx = px[m] - px[n];
              const dy = py[m] - py[n];
              const d2 = dx * dx + dy * dy;
              if (d2 >= LINK_DIST * LINK_DIST) continue;
              const d = Math.sqrt(d2);
              const alpha = lineAlphaMax * (1 - d / LINK_DIST);
              ctx.strokeStyle = `rgba(${palette.dot}, ${alpha.toFixed(3)})`;
              ctx.beginPath();
              ctx.moveTo(px[n], py[n]);
              ctx.lineTo(px[m], py[m]);
              ctx.stroke();
            }
          }
        }
      }

      // Dots on top of the lines. A whisper of slow shimmer keeps
      // the field alive without ever getting bright.
      for (let n = 0; n < particles.length; n += 1) {
        const p = particles[n];
        const shimmer = 0.05 * Math.sin(t * 0.00005 + p.phase);
        const alpha = p.red
          ? redAlpha + shimmer
          : dotAlpha + shimmer * 0.6;
        ctx.fillStyle = `rgba(${p.red ? palette.red : palette.dot}, ${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(px[n], py[n], p.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const stop = () => {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    const start = () => {
      if (raf || reducedMotion.matches) return;
      const tick = (t: number) => {
        if (document.hidden) {
          raf = 0;
          return;
        }
        draw(t);
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const drawStatic = () => {
      stop();
      // One still frame at a fixed, pleasant phase, in the current
      // theme's palette.
      draw(2600);
    };

    // Decide what should be running right now: one static frame for
    // reduced motion, the live loop otherwise — in BOTH themes.
    const refresh = () => {
      if (reducedMotion.matches) {
        drawStatic();
      } else {
        start();
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const onMouseLeave = () => {
      mouse.active = false;
    };
    const onResize = () => {
      buildField();
      if (reducedMotion.matches) drawStatic();
    };
    const onVisibility = () => {
      if (!document.hidden) refresh();
    };
    const onMotionChange = () => refresh();
    const themeObserver = new MutationObserver((mutations) => {
      if (mutations.some((m) => m.attributeName === "data-theme")) {
        // The palette is resolved per frame, so a theme toggle just
        // needs the loop (re)started in the new theme.
        refresh();
      }
    });

    buildField();
    refresh();
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);
    reducedMotion.addEventListener("change", onMotionChange);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      stop();
      window.removeEventListener("mousemove", onMouseMove);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      reducedMotion.removeEventListener("change", onMotionChange);
      themeObserver.disconnect();
      ctx.clearRect(0, 0, width, height);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="particle-wave" aria-hidden="true" />
  );
};
