// src/components/Navbar/Navbar.tsx — black bar, router links to pages
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useScrollOffset } from "../../hooks/useScrollOffset";

const NAV_ITEMS = [
  { label: "Bio", to: "/" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Resume", to: "/resume" },
  { label: "Services", to: "/services" },
];

interface NavbarProps {
  onConnectClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onConnectClick }) => {
  const isScrolled = useScrollOffset(24);

  return (
    <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand" aria-label="Christian Morrow — home">
          <span className="navbar__monogram">CM</span>
          <span className="navbar__brand-name">Christian Morrow</span>
        </Link>

        <nav className="navbar__nav">
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
          <button
            type="button"
            className="navbar__link navbar__link--button"
            onClick={onConnectClick}
          >
            Contact
          </button>
        </nav>

        <div className="navbar__right">
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
- Add mobile menu (hamburger → slide-out)
- Add scroll progress bar
- Add responsive spacing + typography
*/
