// src/components/SinglePage/ParticleWave.tsx — breathing particle
// wave background for the single page (2026-11-26). A grid of small
// particles in a flowing sine-wave field, drawn on a fixed canvas
// behind the page content. The wave breathes (its amplitude swells
// and settles on a slow ~9s rhythm) and ripples outward from the
// mouse, easing back when the mouse moves away.
//
// Subtlety is the point: faint warm-white dots with a small fraction
// in shirt red, low opacity, sparse grid — text stays perfectly
// readable. Dark theme only (the palette is built for the charcoal
// page); in light mode the canvas is hidden by CSS and the loop
// never runs. Respects prefers-reduced-motion (one static frame,
// no animation, no mouse response) and pauses when the tab is
// hidden. Mounted by SinglePage only, so the old routes are
// unaffected; everything is cleaned up on unmount.
import { useEffect, useRef } from "react";
import "./ParticleWave.css";

const SPACING = 64; // px between grid points
const MAX_COLS = 42;
const MAX_ROWS = 26;
const MOUSE_RADIUS = 170; // px — particles inside this ripple away
const MOUSE_PUSH = 26; // px max displacement from the mouse
const EASE = 0.14; // per-frame lerp toward the mouse target (springy)
const BREATHE_MS = 9000; // one full swell/settle cycle
const WAVE_SPEED = 0.00035; // wave travel, radians per ms
const BASE_AMPLITUDE = 16; // px, before the breathing multiplier

const WARM_WHITE = "232, 226, 214";
const SHIRT_RED = "217, 96, 79"; // #d9604f — lightened shirt red

type Particle = {
  bx: number; // base grid x (css px)
  by: number; // base grid y (css px)
  red: boolean;
  r: number; // radius px
  phase: number; // per-particle alpha shimmer
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
            // ~1 in 8 dots is shirt red; the rest are warm white.
            red: i % 8 === 3,
            r: 1.1 + ((i * 37) % 10) / 10, // 1.1–2.0px, deterministic
            phase: (i * 0.7) % (Math.PI * 2),
            ox: 0,
            oy: 0,
          });
        }
      }
      particles = next;
    };

    // Draw one frame at time `t` (ms). Pure function of the particle
    // grid, the breathing phase, and the eased mouse offsets.
    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      if (particles.length === 0) return;

      const breathe = 0.6 + 0.4 * Math.sin((t / BREATHE_MS) * Math.PI * 2);
      const amp = BASE_AMPLITUDE * breathe;

      // Resolve each particle's drawn position first (wave + eased
      // mouse offset), so the faint neighbour lines bend with the
      // wave instead of staying on the rigid grid.
      const pts: { x: number; y: number }[] = new Array(particles.length);
      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        const wave =
          amp *
          Math.sin(p.bx * 0.0016 + t * WAVE_SPEED + p.by * 0.0012);
        const sway =
          6 * breathe * Math.sin(p.by * 0.0021 - t * 0.00022 + p.bx * 0.0009);

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
        pts[i] = { x: p.bx + sway + p.ox, y: p.by + wave + p.oy };
      }

      // Faint vector lines between grid neighbours — the circuit-trace
      // feel, kept barely visible so the page stays calm.
      const cols = Math.min(MAX_COLS, Math.ceil(width / SPACING) + 1);
      ctx.strokeStyle = `rgba(${WARM_WHITE}, 0.05)`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let i = 0; i < particles.length; i += 1) {
        const col = i % cols;
        if (col < cols - 1 && pts[i + 1]) {
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[i + 1].x, pts[i + 1].y);
        }
        if (pts[i + cols]) {
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[i + cols].x, pts[i + cols].y);
        }
      }
      ctx.stroke();

      // Dots. Alpha shimmers gently with the wave phase so the field
      // feels alive without ever getting bright.
      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        const shimmer = Math.sin(
          p.bx * 0.0016 + t * WAVE_SPEED + p.by * 0.0012 + p.phase,
        );
        const alpha = p.red
          ? 0.26
          : Math.min(0.26, Math.max(0.05, 0.12 + 0.08 * shimmer));
        ctx.fillStyle = `rgba(${p.red ? SHIRT_RED : WARM_WHITE}, ${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(pts[i].x, pts[i].y, p.r, 0, Math.PI * 2);
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
      if (raf || !isDark() || reducedMotion.matches) return;
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
      if (!isDark()) {
        ctx.clearRect(0, 0, width, height);
        return;
      }
      // One still frame at a fixed, pleasant phase.
      draw(2600);
    };

    // Decide what should be running right now: nothing in light
    // mode, one static frame for reduced motion, the live loop
    // otherwise.
    const refresh = () => {
      if (!isDark()) {
        stop();
        ctx.clearRect(0, 0, width, height);
      } else if (reducedMotion.matches) {
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
      if (
        mutations.some((m) => m.attributeName === "data-theme")
      ) {
        refresh();
      }
    });

    buildGrid();
    refresh();
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.documentElement.addEventListener(
      "mouseleave",
      onMouseLeave,
    );
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
      document.documentElement.removeEventListener(
        "mouseleave",
        onMouseLeave,
      );
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      reducedMotion.removeEventListener("change", onMotionChange);
      themeObserver.disconnect();
      ctx.clearRect(0, 0, width, height);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particle-wave"
      aria-hidden="true"
    />
  );
};
