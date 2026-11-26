// src/components/SinglePage/SinglePage.tsx — the single page,
// rebuilt as a sidebar-profile layout (2026-11-26). The long
// scrolling page is gone and so is the top hero (Bio): the
// identity now lives in a persistent left sidebar — portrait,
// availability badge, and the static "Built end to end" tagline
// (SidebarProfile) — above the six section tabs, with the
// copyright at the bottom of the sidebar. A top bar (Navbar)
// carries the name, the résumé button, and the socials. To the
// right of the sidebar, ONE wide content card swaps when a tab
// is clicked. Same sidebar, same card, same top bar on every
// tab. Every panel uses the same header (PanelHeader: icon tile
// + title + intro) and the same sub-block rhythm (thin rules
// between blocks) — the shared frame is what makes the sections
// feel consistent, instead of each section being a different
// layout. There is NO max-width on this page: the top bar,
// sidebar, and card stretch to 100% of the viewport width.
// There is NO scroll-snap — the tabbed layout is one panel at
// a time and scrolls freely. The three carousels are gone — the
// panels show all of their content at once. The old /portfolio,
// /resume, and /contact routes stay live in App.tsx alongside
// this page. No copy, numbers, or project data are changed here.
//
// APP SHELL (2026-11-26): the single page is a fixed-height
// layout — exactly the viewport height below the 56px top bar —
// so the PAGE itself never scrolls. The CONTENT CARD is the
// scroll container (overflow-y: auto in SinglePage.css). A tab
// switch resets the card's scroll to the top (see the useEffect
// on activeTab below). The sidebar is percentage-based, ~25% of
// the viewport width. The top bar, sidebar, and card always
// occupy the same viewport area on every tab, so the dimensions
// feel consistent, and the content can never overlap the
// sidebar footer.
import { useEffect, useRef, useState } from "react";
import {
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaFolderOpen,
  FaNewspaper,
  FaUser,
} from "react-icons/fa";
import "./SinglePage.css";
import { SidebarProfile } from "./SidebarProfile";
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
  // The content card is the scroll container (the page itself
  // never scrolls). Keep a ref so a tab switch can reset the
  // card to the top — each tab is a different panel, and
  // starting scrolled-down would feel broken.
  const cardRef = useRef<HTMLDivElement>(null);

  // The particle wave uses the `single-page--wave` class on the
  // document element to let the fixed canvas show through the
  // section backgrounds; this toggles it while the single page
  // is mounted and removes it on unmount, so the old routes
  // never show the wave. There is NO scroll-snap anymore — the
  // tabbed layout is one panel at a time and scrolls freely.
  useEffect(() => {
    document.documentElement.classList.add("single-page--wave");
    return () => {
      document.documentElement.classList.remove("single-page--wave");
    };
  }, []);

  const activeIndex = TABS.findIndex((tab) => tab.id === activeTab);
  const active = TABS[activeIndex];

  // Reset the card's scroll to the top on every tab change —
  // clicks and keyboard both go through setActiveTab, so this
  // one effect covers both. The card is the scroll container,
  // so scrollTop (not window.scrollTo) is what moves.
  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  const selectTab = (id: TabId) => {
    setActiveTab(id);
  };

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

      <div className="tabs-layout" id="tabs">
        <div className="tabs-layout__inner">
          <aside className="tabs-layout__sidebar">
            <SidebarProfile />

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

            {/* The footer lives at the bottom of the sidebar now
                (margin-top: auto) — the page-level footer is gone;
                GitHub and LinkedIn are in the top bar. */}
            <p className="tabs-layout__footer">
              © 2026 Christian Morrow
              <span className="tabs-layout__footer-location">
                Cleveland, TN
              </span>
            </p>
          </aside>

          <div className="tabs-layout__card" ref={cardRef}>
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
    </div>
  );
};
