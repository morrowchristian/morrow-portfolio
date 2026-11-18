// src/components/Footer/Footer.tsx — the site footer holds the
// links: GitHub and LinkedIn, Contact, and the copyright line.
// The page menu lives in the navbar now; the numbered index that
// used to be here is gone (it would duplicate the navbar menu).
// Contact is a link to the Contact page now, not a button that
// opened the old contact modal.
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer: React.FC = () => {
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
          <Link to="/contact" className="footer__link">
            Contact
          </Link>
        </nav>
        <p className="footer__credit">
          © 2026 Christian Morrow — Full-Stack Software Engineer
        </p>
      </div>
    </footer>
  );
};
