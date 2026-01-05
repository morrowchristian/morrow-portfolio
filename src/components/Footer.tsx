// src/components/Footer.tsx
import "../styles/Footer.css";
import GitHubIcon from "./icons/GitHubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container fade-in">
        <div className="footer-links">
          <a
            href="mailto:morrowchristian@icloud.com"
            aria-label="Email Christian"
          >
            <EnvelopeIcon className="icon" />
            <span>Email</span>
          </a>

          <a
            href="https://github.com/morrowchristian"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Christian's GitHub"
          >
            <GitHubIcon className="icon" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/christian-morrow-b19a09329/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Christian's LinkedIn"
          >
            <LinkedInIcon className="icon" />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="footer-meta">
          <p>Made by Christian Morrow</p>
          <p>© {new Date().getFullYear()} — All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
