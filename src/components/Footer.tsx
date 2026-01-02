// src/components/Footer.tsx
import type { Section } from "../App";

interface FooterProps {
  setActiveSection?: (section: Section) => void;
}

const Footer = ({ setActiveSection }: FooterProps) => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Christian Morrow</p>

        <div className="footer-links">
          <a
            href="https://github.com/morrowchristian"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          {setActiveSection && (
            <button
              className="footer-contact-btn"
              onClick={() => setActiveSection("contact")}
              aria-label="Jump to Contact section"
            >
              Contact
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
