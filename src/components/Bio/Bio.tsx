// src/components/Bio/Bio.tsx — landing page (route "/").
// EDITORIAL (03): warm paper, a serif headline, and a single
// deep-red block behind the portrait, taken from his shirt.
// The circuit art survives only as faint traces and one red ring.
// Magazine layout: an intro column on the left, the transparent
// paint cutout in the middle, and the Services list on the right
// — one viewport, no scroll on desktop. The numbered link index
// (01 About, 02 Portfolio, 03 Resume) now lives in the site
// footer, rendered on every page — not on this page. Services
// sits beside the portrait in the same hero grid (the /services
// route was removed 2026-11-23).
// GitHub, LinkedIn and Contact are not repeated here; they
// already live in the navbar. The
// résumé download lives in the navbar too (next to Connect), not
// on this page.
// The title is kept small (2.5rem max) and the section fills the
// viewport exactly (flex: 1, no fixed height lock), so the
// portrait is always fully in frame and the footer sits directly
// below — no scroll on desktop.
// A single circuit line with a square on each end closes the
// intro — it replaces the L-shaped trace that
// used to sit behind the stack (the stack itself was removed
// 2026-11-17 at Christian's request).
// Type: Newsreader serif for the headline, IBM Plex Mono for the
// furniture (kick, labels, index). Palette: #f6f1e7 warm paper,
// #211d16 espresso ink, #a02c1e shirt red, #4c463a soft brown.
// The portrait is portrait-cutout.png — the paint portrait
// (front-facing, white shirt, paint strokes) with the background
// removed — shown with object-fit: contain, so his face, hair
// and shoulders are always fully visible, never cropped,
// stretched or warped. The red block sits behind the portrait's
// lower part and tracks the figure exactly (see the frame below);
// the face stays against warm paper.
import "./Bio.css";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";
import { Services } from "../Services/Services";

export const Bio: React.FC = () => {
  const { ref, isVisible } = useInViewAnimation();

  return (
    <section className="bio-page">
      <div className="bio__inner">
        {/* Faint circuit traces across the paper — a nod to the
            original line-work, kept near-invisible. */}
        <svg
          className="bio__traces"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <g stroke="#211d16" strokeWidth="1" fill="none" opacity="0.16">
            <polyline points="700,80 900,80 900,160 1040,160" />
            <polyline points="980,300 1120,300 1120,380" />
          </g>
          <g fill="#211d16" opacity="0.16">
            <rect x="696" y="76" width="8" height="8" />
            <rect x="1036" y="156" width="8" height="8" />
            <rect x="1116" y="376" width="8" height="8" />
          </g>
          <rect
            x="896"
            y="76"
            width="9"
            height="9"
            fill="#a02c1e"
            opacity="0.55"
          />
        </svg>

        <div className="bio__main">
          <div
            ref={ref}
            className={`bio__text animate ${isVisible ? "animate--visible" : ""}`}
          >
            <p className="bio__kick">Christian Morrow</p>
            <h1 className="bio__title">
              Software, built end to end — built to last.
            </h1>
            <span className="bio__rule" aria-hidden="true" />
            <p className="bio__subtitle">
              Full-Stack Software Engineer — Cleveland, TN
            </p>
            <p className="bio__intro">
              B.S. Software Systems ’25 from the University of Tennessee at
              Chattanooga, Latin Honors, 3.7 GPA. I build full-stack web
              applications in React, TypeScript and Django — with real client
              websites shipped — and bring 7+ years of high-urgency service and
              team-lead experience to every project: calm problem-solving under
              pressure, clear communication, and code that stays maintainable.
            </p>
            {/* A single circuit line with a square on each end,
                closing the intro — it replaces the L-shaped trace
                that used to sit behind the stack. */}
            <div className="bio__divider" aria-hidden="true">
              <span className="bio__divider-square" />
              <span className="bio__divider-line" />
              <span className="bio__divider-square" />
            </div>
          </div>

          <div className="bio__portrait" aria-hidden="true">
            {/* One concentric ring, top-right of the portrait column,
                in flow above the portrait so it can never overlap it. */}
            <svg
              className="bio__ring"
              viewBox="0 0 220 220"
              aria-hidden="true"
              focusable="false"
            >
              <circle
                cx="110"
                cy="110"
                r="90"
                fill="none"
                stroke="#a02c1e"
                strokeWidth="1.5"
                opacity="0.35"
              />
              <circle
                cx="110"
                cy="110"
                r="58"
                fill="none"
                stroke="#211d16"
                strokeWidth="1"
                opacity="0.2"
              />
              <rect
                x="106"
                y="106"
                width="8"
                height="8"
                fill="#a02c1e"
                opacity="0.55"
              />
            </svg>
            {/* The frame shrink-wraps to the portrait image, so the
                red block (100% of the frame) always matches the
                figure exactly, whatever its aspect ratio. */}
            <div className="bio__portrait-frame">
              <span className="bio__redblock" aria-hidden="true" />
              <img
                src="/portrait-cutout.png"
                alt=""
                className="bio__portrait-img"
                fetchPriority="high"
              />
            </div>
          </div>

          {/* Services beside the portrait, in the same hero grid
              (2026-11-23): the compact list variant keeps every
              service's title, description and link, so the home
              page fits one viewport with no scroll on desktop. */}
          <Services variant="list" />
        </div>
      </div>
    </section>
  );
};
