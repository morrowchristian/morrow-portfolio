// src/components/Navbar/Navbar.tsx — Editorial navbar: brand and the
// menu, plus the GitHub and LinkedIn links at the top right (moved
// here from the footer when the footer was removed 2026-11-24), and
// a light/dark theme toggle.
// (2026-11-25, Phase 1): the home page is now a single scrolling
// page, so on "/" the menu is section links (About, Skills,
// Projects, Experience, Contact) that scroll to the section, with
// the active section highlighted in shirt red via scroll-spy
// (IntersectionObserver). On the old /portfolio, /resume, and
// /contact routes the menu is still the page links, so those
// routes keep working until the single page is verified live.
// The résumé download lives on the Resume page and in the hero,
// so the bar holds no buttons besides the theme toggle.
// Below 1200px the inline menu collapses into a hamburger button
// that opens a dropdown panel with the links; the social links
// and the theme toggle stay visible in the bar at every width.
import "./Navbar.css";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { useScrollOffset } from "../../hooks/useScrollOffset";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import type { Theme } from "../../hooks/useTheme";

const SECTION_ITEMS = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
] as const;

const SECTION_IDS = SECTION_ITEMS.map((item) => item.id);

const PAGE_ITEMS = [
  { label: "About", to: "/" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", to: "/contact" },
];

const MENU_BREAKPOINT = 768;

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme }) => {
  const isScrolled = useScrollOffset(24);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const isSinglePage = location.pathname === "/";
  const activeSection = useScrollSpy(SECTION_IDS, location.pathname);

  // Close the dropdown whenever the route changes (a link was
  // followed), so it never stays open on the new page.
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Close on Escape, on a tap outside the bar, and when the window
  // grows past the breakpoint (so the menu never stays open on
  // desktop after a resize).
  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    const onPointerDown = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    const onResize = () => {
      if (window.innerWidth > MENU_BREAKPOINT) setIsMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("resize", onResize);
    };
  }, [isMenuOpen]);

  const handleSectionClick = (id: string) => {
    setIsMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      ref={headerRef}
      className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}
    >
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand" aria-label="Christian Morrow — home">
          <span className="navbar__monogram">CM</span>
          <span className="navbar__brand-text">
            <span className="navbar__brand-name">Christian Morrow</span>
            <span className="navbar__brand-subtitle">Full-Stack Software Engineer</span>
          </span>
        </Link>

        <div className="navbar__right">
          <nav className="navbar__menu" aria-label="Site menu">
            {isSinglePage
              ? SECTION_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSectionClick(item.id)}
                    className={
                      activeSection === item.id
                        ? "navbar__link navbar__link--active"
                        : "navbar__link"
                    }
                    aria-current={activeSection === item.id ? "true" : undefined}
                  >
                    {item.label}
                  </button>
                ))
              : PAGE_ITEMS.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      isActive
                        ? "navbar__link navbar__link--active"
                        : "navbar__link"
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
          </nav>
          <div className="navbar__socials" aria-label="Social links">
            <span className="navbar__socials-divider" aria-hidden="true" />
            <a
              href="https://github.com/morrowchristian"
              target="_blank"
              rel="noreferrer"
              className="navbar__social"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/morrowchristian"
              target="_blank"
              rel="noreferrer"
              className="navbar__social"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
          <button
            type="button"
            className="navbar__theme-toggle"
            onClick={onToggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
            }
            title={theme === "dark" ? "Light theme" : "Dark theme"}
          >
            {theme === "dark" ? <FaSun aria-hidden="true" /> : <FaMoon aria-hidden="true" />}
          </button>
          <button
            type="button"
            className={`navbar__hamburger ${isMenuOpen ? "navbar__hamburger--open" : ""}`}
            aria-expanded={isMenuOpen}
            aria-controls="navbar-menu-dropdown"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      <nav
        id="navbar-menu-dropdown"
        className={`navbar__dropdown ${isMenuOpen ? "navbar__dropdown--open" : ""}`}
        aria-label="Site menu"
      >
        {isSinglePage
          ? SECTION_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSectionClick(item.id)}
                className={
                  activeSection === item.id
                    ? "navbar__dropdown-link navbar__dropdown-link--active"
                    : "navbar__dropdown-link"
                }
              >
                {item.label}
              </button>
            ))
          : PAGE_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  isActive
                    ? "navbar__dropdown-link navbar__dropdown-link--active"
                    : "navbar__dropdown-link"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
      </nav>
    </header>
  );
};

/* TODO (Navbar)
- Add scroll progress bar
- Add responsive spacing + typography
*/
