// src/components/SinglePage/PanelHeader.tsx — the ONE header pattern
// every tab panel uses (sidebar-tabs redesign, 2026-11-26, modelled
// on sakshi.is-cool.dev): a small rounded-square icon tile, a large
// bold heading, and a short grey introductory line. The shell
// (SinglePage) renders this above the active panel body, so the
// header is identical on every tab — the shared frame is what
// makes the sections feel consistent. Styles live in
// SinglePage.css (.panel-header*).
import type { ComponentType } from "react";

interface PanelHeaderProps {
  icon: ComponentType<{ className?: string }>;
  title: string;
  intro: string;
}

export const PanelHeader: React.FC<PanelHeaderProps> = ({
  icon: Icon,
  title,
  intro,
}) => (
  <header className="panel-header">
    <span className="panel-header__tile" aria-hidden="true">
      <Icon className="panel-header__tile-icon" />
    </span>
    <div className="panel-header__text">
      <h2 className="panel-header__title">{title}</h2>
      <p className="panel-header__intro">{intro}</p>
    </div>
  </header>
);
