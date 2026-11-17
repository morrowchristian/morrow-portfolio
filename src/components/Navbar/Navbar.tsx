// src/components/Navbar/Navbar.tsx — Editorial navbar: brand,
// socials and Connect only. The site menu moved to the footer.
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useScrollOffset } from "../../hooks/useScrollOffset";

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
          <span className="navbar__brand-text">
            <span className="navbar__brand-name">Christian Morrow</span>
            <span className="navbar__brand-subtitle">Full-Stack Software Engineer</span>
          </span>
        </Link>

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
- Add scroll progress bar
- Add responsive spacing + typography
*/
