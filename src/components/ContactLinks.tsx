// src/components/ContactLinks.tsx
import GitHubIcon from "./icons/GitHubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import "../styles/components/ContactLinks.css";

export default function ContactLinks() {
  return (
    <div className="contact-links">
      <a
        href="mailto:morrowchristian@icloud.com"
        className="contact-link"
        aria-label="Email Christian"
      >
        <EnvelopeIcon className="icon" />
        morrowchristian@icloud.com
      </a>

      <a
        href="https://github.com/morrowchristian"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
        aria-label="Christian's GitHub"
      >
        <GitHubIcon className="icon" />
        github.com/morrowchristian
      </a>

      <a
        href="https://www.linkedin.com/in/christian-morrow-b19a09329/"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
        aria-label="Christian's LinkedIn"
      >
        <LinkedInIcon className="icon" />
        linkedin.com/in/christian-morrow
      </a>

      <a
        href="/resume.pdf"
        download
        className="contact-link"
        aria-label="Download Resume"
      >
        <span className="icon">📄</span>
        Download Resume
      </a>
    </div>
  );
}
