// src/components/SinglePage/ParticleWave.tsx — halftone dot wave
// background for the single page (2026-11-26, rebuilt from the v1
// grid wave). DOTS ONLY — no connecting lines. The wave is a pair of
// flowing horizontal ribbons; each dot's size and opacity follow its
// distance from a ribbon's centreline (a Gaussian falloff), so the
// ribbons read as smooth halftone bands that dissolve into empty
// space at their edges. The ribbons drift (their sine phase advances
// slowly) and breathe (amplitude swells and settles on a ~9s rhythm),
// and dots near the mouse ripple outward and ease back.
//
// Palette-matched for BOTH themes: warm-white dots with a fraction
// in shirt red on the dark charcoal page; espresso-ink dots with a
// fraction in shirt red on the light paper page. Subtle in both —
// text stays perfectly readable. Respects prefers-reduced-motion
// (one static frame, no animation, no mouse response) and pauses
// when the tab is hidden. Mounted by SinglePage only, so the old
// routes are unaffected; everything is cleaned up on unmount.
import { useEffect, useRef } from "react";
import "./ParticleWave.css";

const SPACING = 34; // px between grid points (dense enough for halftone)
const MAX_COLS = 52;
const MAX_ROWS = 34;
const MOUSE_RADIUS = 170; // px — dots inside this ripple away
const MOUSE_PUSH = 26; // px max displacement from the mouse
const EASE = 0.14; // per-frame lerp toward the mouse target (springy)
const BREATHE_MS = 6000; // one full swell/settle cycle (a visible breath)

// One ribbon: a sine centreline that undulates across the viewport
// and drifts as its phase advances. `base` is the centreline's
// height as a fraction of viewport height, `amp` how far it rises
// and dips, `sigma` the ribbon's thickness (Gaussian falloff),
// `k` the wave number, `speed` the phase drift, `phase` an offset,
// and `weight` how strongly it shows (the secondary ribbon is
// fainter).
type Ribbon = {
  base: number;
  amp: number;
  sigma: number;
  k: number;
  speed: number;
  phase: number;
  weight: number;
};

const RIBBONS: Ribbon[] = [
  { base: 0.38, amp: 90, sigma: 85, k: 0.0021, speed: 0.00018, phase: 0, weight: 1 },
  { base: 0.72, amp: 70, sigma: 70, k: 0.0016, speed: -0.00014, phase: 1.7, weight: 0.6 },
];

// Dot palettes, as "r, g, b" triples. Dark: warm white + lightened
// shirt red on charcoal. Light: espresso ink + shirt red on paper.
const PALETTES = {
  dark: { dot: "232, 226, 214", red: "217, 96, 79" },
  light: { dot: "33, 29, 22", red: "160, 44, 30" },
} as const;

type Particle = {
  bx: number; // base grid x (css px)
  by: number; // base grid y (css px)
  red: boolean;
  phase: number; // per-particle shimmer phase
  ox: number; // eased mouse offset x
  oy: number; // eased mouse offset y
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
    let raf = 0;
    let width = 0;
    let height = 0;
    const mouse = { x: 0, y: 0, active: false };

    const buildGrid = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cols = Math.min(MAX_COLS, Math.ceil(width / SPACING) + 1);
      const rows = Math.min(MAX_ROWS, Math.ceil(height / SPACING) + 1);
      const x0 = (width - (cols - 1) * SPACING) / 2;
      const y0 = (height - (rows - 1) * SPACING) / 2;
      const next: Particle[] = [];
      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 1) {
          const i = row * cols + col;
          next.push({
            bx: x0 + col * SPACING,
            by: y0 + row * SPACING,
            // ~1 in 8 dots is shirt red; the rest are the theme dot color.
            red: i % 8 === 3,
            phase: (i * 0.7) % (Math.PI * 2),
            ox: 0,
            oy: 0,
          });
        }
      }
      particles = next;
    };

    // How strongly a dot belongs to the wave at time `t` (0..1).
    // The strongest ribbon wins; a slow factor along x makes the
    // density vary along each ribbon so it reads as a flowing wave
    // rather than a uniform band.
    const waveWeight = (bx: number, by: number, t: number, breathe: number) => {
      let w = 0;
      for (const r of RIBBONS) {
        const centre =
          height * r.base +
          r.amp * breathe * Math.sin(bx * r.k + t * r.speed + r.phase);
        const dy = by - centre;
        const g = Math.exp(-(dy * dy) / (2 * r.sigma * r.sigma));
        w = Math.max(w, g * r.weight);
      }
      const along = 0.8 + 0.2 * Math.sin(bx * 0.0013 + t * 0.00015);
      return Math.min(1, w * along);
    };

    // Draw one frame at time `t` (ms). Dots only — no lines. Each
    // dot's radius and opacity follow the wave weight, so the ribbons
    // are halftone bands: big and present at the crest, tiny and
    // faint at the edges, dissolving into empty space between bands.
    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      if (particles.length === 0) return;

      const breathe = 0.55 + 0.45 * Math.sin((t / BREATHE_MS) * Math.PI * 2);
      // The breath also swells the dots themselves (bigger/brighter on
      // the inhale, smaller/fainter on the exhale) so the swell reads
      // clearly instead of just shifting the centreline. It never
      // vanishes: at the deepest exhale the dots are still ~64% size.
      const breathScale = 0.6 + 0.4 * breathe;
      const palette = isDark() ? PALETTES.dark : PALETTES.light;
      // Light ink on paper needs a slightly lower ceiling than warm
      // white on charcoal to stay equally subtle.
      const alphaBase = isDark() ? 0.05 : 0.04;
      const alphaSpan = isDark() ? 0.25 : 0.2;
      const alphaRedBase = isDark() ? 0.1 : 0.08;
      const alphaRedSpan = isDark() ? 0.24 : 0.22;

      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        const w = waveWeight(p.bx, p.by, t, breathe);

        // Gentle drift so the field feels alive, plus the eased
        // mouse ripple (dots near the cursor push outward and settle
        // back when the mouse leaves).
        const sway =
          4 * Math.sin(p.by * 0.0021 - t * 0.00022 + p.bx * 0.0009);
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

        // Halftone size + opacity: big and present at the crest,
        // tiny and faint at the edges. A whisper of shimmer keeps
        // the field alive without ever getting bright. The breath
        // scales the wave-driven size/opacity so the whole field
        // visibly swells and settles.
        const shimmer = Math.sin(p.bx * 0.0016 + t * 0.00035 + p.phase);
        const radius = 0.6 + 3.1 * w * breathScale + 0.15 * shimmer * w;
        const alpha = p.red
          ? alphaRedBase + alphaRedSpan * w * breathScale
          : alphaBase + alphaSpan * w * breathScale;
        ctx.fillStyle = `rgba(${p.red ? palette.red : palette.dot}, ${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(
          p.bx + sway + p.ox,
          p.by + p.oy,
          Math.max(0.5, radius * (p.red ? 1.1 : 1)),
          0,
          Math.PI * 2,
        );
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
      buildGrid();
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

    buildGrid();
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
