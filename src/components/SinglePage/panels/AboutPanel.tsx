// src/components/SinglePage/panels/AboutPanel.tsx — the About tab
// (sidebar-tabs redesign, 2026-11-26). The bio copy that used to
// live in the hero (intro, slogan, Currently line, circuit
// divider), then "What I build" (the three services, each with
// its proof link), then "At a glance" (the Stats strip). The
// portrait stays in the hero header above the tabs — it is not
// repeated here. The service rows carry NO numbers in this
// layout (the numbering system is gone). All copy is verbatim
// from the old Bio hero; the Stats numbers are unchanged
// (including the known-stale "3 Live demos").
import { services } from "../../../data/services";
import { ServiceRow } from "../../Services/ServiceRow";
import { Stats } from "../../Stats/Stats";
import "./AboutPanel.css";

export const AboutPanel: React.FC = () => (
  <div className="about-panel">
    <div className="tabs-panel__block">
      <p className="about-panel__slogan">
        Software, built end to end — built to last.
      </p>

      <p className="about-panel__intro">
        B.S. Computer Science: Software Systems ’25 from the University
        of Tennessee at Chattanooga, Cum Laude, 3.7 GPA. I build
        full-stack web applications in React, TypeScript and Django — with
        a real client website shipped — and bring 7+ years of
        high-urgency service and team-lead experience to every project:
        calm problem-solving under pressure, clear communication, and
        code that stays maintainable.
      </p>

      <p className="about-panel__currently">
        <span className="about-panel__currently-label">Currently</span> —
        Building RealSync &amp; Baseline · Dispatching at Eagle
        Tele-Services
      </p>

      {/* A single circuit line with a square on each end, the
          same furniture as the hero divider. */}
      <div className="about-panel__divider" aria-hidden="true">
        <span className="about-panel__divider-square" />
        <span className="about-panel__divider-line" />
        <span className="about-panel__divider-square" />
      </div>
    </div>

    <div className="tabs-panel__block">
      <h3 className="tabs-panel__subhead">What I build</h3>
      <div className="about-panel__services">
        {services.map((service) => (
          <ServiceRow
            key={service.title}
            title={service.title}
            description={service.description}
            cta={service.cta}
          />
        ))}
      </div>
    </div>

    <div className="tabs-panel__block">
      <h3 className="tabs-panel__subhead">At a glance</h3>
      <Stats />
    </div>
  </div>
);
