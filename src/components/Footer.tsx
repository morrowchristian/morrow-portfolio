// src/components/Footer.tsx
import React from "react";
import "../styles/Footer.css";
import { EnvelopeIcon, ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import GitHubIcon from "./icons/GitHubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-links">
          <a href="mailto:morrowchristian@icloud.com" aria-label="Email">
            <EnvelopeIcon className="icon" />
            morrowchristian@icloud.com
          </a>
          <a href="https://github.com/morrowchristian" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon className="icon" />
            github.com/morrowchristian
          </a>
          <a href="https://www.linkedin.com/in/christian-morrow-b19a09329/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon className="icon" />
            linkedin.com/in/christian-morrow
          </a>
          <a href="/resume.pdf" download className="resume-link" aria-label="Download Resume">
            <ArrowDownTrayIcon className="icon" />
            Download Resume
          </a>
        </div>

        <div className="footer-meta">
          © 2026 Christian Morrow<br />
          Full-Stack Software Engineer
        </div>

      </div>
    </footer>
  );
};

export default Footer;
