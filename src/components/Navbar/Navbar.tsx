// src/components/Navbar/Navbar.tsx — black bar, like the designer/coder reference
import "./Navbar.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useScrollOffset } from "../../hooks/useScrollOffset";

const NAV_ITEMS = [
  { label: "Bio", href: "#bio" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Resume", href: "#resume" },
  { label: "Services", href: "#services" },
];

interface NavbarProps {
  onConnectClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onConnectClick }) => {
  const isScrolled = useScrollOffset(24);

  return (
    <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#bio" className="navbar__brand" aria-label="Christian Morrow — home">
          <span className="navbar__monogram">CM</span>
          <span className="navbar__brand-name">Christian Morrow</span>
        </a>

        <nav className="navbar__nav">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="navbar__link">
              {item.label}
            </a>
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
- Add active section highlighting
- Add scroll progress bar
- Add responsive spacing + typography
*/
