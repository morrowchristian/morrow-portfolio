// src/components/SinglePage/SinglePage.tsx — the single page,
// rebuilt as a tabbed, app-like layout (sidebar-tabs redesign,
// 2026-11-26, modelled on sakshi.is-cool.dev). The long scrolling
// page is gone: a compact hero header (Bio) sits at the top, then
// a two-column area — a narrow persistent sidebar with the six
// section tabs, and ONE wide content card that swaps when a tab
// is clicked. Same hero, same sidebar, same card, same footer on
// every tab. Every panel uses the same header (PanelHeader: icon
// tile + title + intro) and the same sub-block rhythm (thin rules
// between blocks) — the shared frame is what makes the sections
// feel consistent, instead of each section being a different
// layout. The scroll-snap is gone with the scrolling page (the
// panels scroll freely), and the three carousels are gone — the
// panels show all of their content at once. The old /portfolio,
// /resume, and /contact routes stay live in App.tsx alongside
// this page. No copy, numbers, or project data are changed here.
import { useCallback, useEffect, useRef, useState } from "react";
import {
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaFolderOpen,
  FaGithub,
  FaLinkedin,
  FaNewspaper,
  FaUser,
} from "react-icons/fa";
import "./SinglePage.css";
import { Bio } from "../Bio/Bio";
import { ParticleWave } from "./ParticleWave";
import { PanelHeader } from "./PanelHeader";
import { AboutPanel } from "./panels/AboutPanel";
import { SkillsPanel } from "./panels/SkillsPanel";
import { ProjectsPanel } from "./panels/ProjectsPanel";
import { ExperiencePanel } from "./panels/ExperiencePanel";
import { NewsPanel } from "./panels/NewsPanel";
import { ContactPanel } from "./panels/ContactPanel";

type TabId = "about" | "skills" | "projects" | "experience" | "news" | "contact";

type IconComponent = React.ComponentType<{ className?: string }>;

interface TabDef {
  id: TabId;
  label: string;
  icon: IconComponent;
  title: string;
  intro: string;
  body: React.ReactNode;
}

// The six tabs, in order. The intros are the panels' existing
// intro lines where one exists (Projects, Contact); the others
// are short neutral descriptions of what the panel holds —
// no claims, no numbers.
const TABS: TabDef[] = [
  {
    id: "about",
    label: "About",
    icon: FaUser,
    title: "About",
    intro: "Full-Stack Software Engineer — Cleveland, TN",
    body: <AboutPanel />,
  },
  {
    id: "skills",
    label: "Skills",
    icon: FaCode,
    title: "Skills",
    intro: "Languages, frameworks, tools, and concepts.",
    body: <SkillsPanel />,
  },
  {
    id: "projects",
    label: "Projects",
    icon: FaFolderOpen,
    title: "Portfolio",
    intro: "Client work, campaign sites and tools — built end to end.",
    body: <ProjectsPanel />,
  },
  {
    id: "experience",
    label: "Experience",
    icon: FaBriefcase,
    title: "Experience",
    intro: "Work history, campaign leadership, and education.",
    body: <ExperiencePanel />,
  },
  {
    id: "news",
    label: "News",
    icon: FaNewspaper,
    title: "News",
    intro: "Milestones, most recent first.",
    body: <NewsPanel />,
  },
  {
    id: "contact",
    label: "Contact",
    icon: FaEnvelope,
    title: "Contact",
    intro:
      "Have a project, a role, or just a question? Here is how to reach me — or send a message with the form.",
    body: <ContactPanel />,
  },
];

export const SinglePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>("about");
  const tabRefs = useRef<Map<TabId, HTMLButtonElement>>(new Map());
  const tabsLayoutRef = useRef<HTMLDivElement>(null);

  // The particle wave uses the `single-page--wave` class on the
  // document element to let the fixed canvas show through the
  // section backgrounds; this toggles it while the single page
  // is mounted and removes it on unmount, so the old routes
  // never show the wave. There is NO scroll-snap anymore — the
  // tabbed layout is one short panel at a time and scrolls
  // freely, like Sakshi's. (The `single-page--snap` class and
  // its mandatory snap rules were removed with the redesign.)
  useEffect(() => {
    document.documentElement.classList.add("single-page--wave");
    return () => {
      document.documentElement.classList.remove("single-page--wave");
    };
  }, []);

  const activeIndex = TABS.findIndex((tab) => tab.id === activeTab);
  const active = TABS[activeIndex];

  const selectTab = useCallback((id: TabId, scrollIntoView = false) => {
    setActiveTab(id);
    if (scrollIntoView && tabsLayoutRef.current) {
      const reducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      tabsLayoutRef.current.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start",
      });
    }
  }, []);

  // Arrow keys move between tabs (and move focus with the
  // selection, per the tablist pattern); Home/End jump to the
  // first/last tab. Only the active tab is in the tab order.
  const handleTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    let next: number | null = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      next = (index + 1) % TABS.length;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      next = (index - 1 + TABS.length) % TABS.length;
    } else if (e.key === "Home") {
      next = 0;
    } else if (e.key === "End") {
      next = TABS.length - 1;
    }
    if (next === null) return;
    e.preventDefault();
    const id = TABS[next].id;
    setActiveTab(id);
    tabRefs.current.get(id)?.focus();
  };

  return (
    <div className="single-page">
      <ParticleWave />

      <Bio onViewProjects={() => selectTab("projects", true)} />

      <div className="tabs-layout" id="tabs" ref={tabsLayoutRef}>
        <div className="container tabs-layout__inner">
          <aside className="tabs-layout__sidebar">
            <nav
              className="tabs-list"
              role="tablist"
              aria-label="Sections"
              aria-orientation="vertical"
            >
              {TABS.map((tab, i) => {
                const Icon = tab.icon;
                const isActive = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    id={`tab-${tab.id}`}
                    aria-selected={isActive}
                    aria-current={isActive ? "true" : undefined}
                    aria-controls={`panel-${tab.id}`}
                    tabIndex={isActive ? 0 : -1}
                    ref={(el) => {
                      if (el) {
                        tabRefs.current.set(tab.id, el);
                      } else {
                        tabRefs.current.delete(tab.id);
                      }
                    }}
                    className={`tabs-tab${isActive ? " is-active" : ""}`}
                    onClick={() => selectTab(tab.id)}
                    onKeyDown={(e) => handleTabKeyDown(e, i)}
                  >
                    <Icon className="tabs-tab__icon" aria-hidden="true" />
                    <span className="tabs-tab__label">{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </aside>

          <div className="tabs-layout__card">
            <PanelHeader
              icon={active.icon}
              title={active.title}
              intro={active.intro}
            />
            <div
              key={active.id}
              role="tabpanel"
              id={`panel-${active.id}`}
              aria-labelledby={`tab-${active.id}`}
              className="tabs__panel"
            >
              {active.body}
            </div>
          </div>
        </div>
      </div>

      <footer className="single-page__footer">
        <div className="container single-page__footer-inner">
          <span className="single-page__footer-text">
            © 2026 Christian Morrow · Cleveland, TN
          </span>
          <span className="single-page__footer-links">
            <a
              href="https://github.com/morrowchristian"
              target="_blank"
              rel="noreferrer"
              className="single-page__footer-link"
              aria-label="GitHub"
            >
              <FaGithub aria-hidden="true" /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/morrowchristian"
              target="_blank"
              rel="noreferrer"
              className="single-page__footer-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin aria-hidden="true" /> LinkedIn
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};
