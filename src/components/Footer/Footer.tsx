// src/components/Footer/Footer.tsx — the site footer holds the
// links: GitHub and LinkedIn, Contact, and the copyright line.
// The page menu lives in the navbar now; the numbered index that
// used to be here is gone (it would duplicate the navbar menu).
import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface FooterProps {
  onConnectClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onConnectClick }) => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <nav className="footer__links" aria-label="Links">
          <a
            href="https://github.com/morrowchristian"
            target="_blank"
            rel="noreferrer"
            className="footer__social"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/morrowchristian"
            target="_blank"
            rel="noreferrer"
            className="footer__social"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <button
            type="button"
            className="footer__link footer__link--button"
            onClick={onConnectClick}
          >
            Contact
          </button>
        </nav>
        <p className="footer__credit">
          © 2026 Christian Morrow — Full-Stack Software Engineer
        </p>
      </div>
    </footer>
  );
};
