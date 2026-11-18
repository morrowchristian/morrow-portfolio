// src/components/Navbar/Navbar.tsx — Editorial navbar: brand and
// the page menu (About, Portfolio, Resume, Services, Contact).
// The GitHub and LinkedIn links live in the footer, and the
// résumé download lives on the Resume page, so the bar holds
// only the brand and the menu — no buttons. Below 1200px the
// inline menu collapses into a hamburger button that opens a
// dropdown panel with the page links.
import "./Navbar.css";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useScrollOffset } from "../../hooks/useScrollOffset";

const NAV_ITEMS = [
  { label: "About", to: "/" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Resume", to: "/resume" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const MENU_BREAKPOINT = 1200;

export const Navbar: React.FC = () => {
  const isScrolled = useScrollOffset(24);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const location = useLocation();

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
            {NAV_ITEMS.map((item) => (
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
        {NAV_ITEMS.map((item) => (
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
