// src/components/Navbar/Navbar.tsx — Editorial navbar: brand, the
// page menu (About, Portfolio, Resume, Services), résumé download
// and Connect. The GitHub and LinkedIn links live in the footer
// now, so the menu can sit at the top without crowding the bar.
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useScrollOffset } from "../../hooks/useScrollOffset";

interface NavbarProps {
  onConnectClick: () => void;
}

const NAV_ITEMS = [
  { label: "About", to: "/" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Resume", to: "/resume" },
  { label: "Services", to: "/services" },
];

export const Navbar: React.FC<NavbarProps> = ({ onConnectClick }) => {
  const isScrolled = useScrollOffset(24);

  return (
    <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
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
          <a
            href="/resume.pdf"
            download="Christian-Morrow-Resume.pdf"
            className="navbar__resume-button"
          >
            Download résumé
          </a>
          <button
            type="button"
            className="navbar__connect-button"
            onClick={onConnectClick}
          >
            Connect
          </button>
        </div>
      </div>
    </header>
  );
};

/* TODO (Navbar)
- Add scroll progress bar
- Add responsive spacing + typography
*/
