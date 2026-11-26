// src/components/SinglePage/panels/ContactPanel.tsx — the Contact
// tab (sidebar-tabs redesign, 2026-11-26). The contact methods
// and the message form from the old Contact section, inside the
// shared panel frame. The form POSTs to FormSubmit's AJAX
// endpoint, which emails the submission to
// morrowchristian@icloud.com — there is no backend on this
// static site. The old /contact route keeps rendering <Contact />
// untouched. The methods list and the form stack vertically
// here (the other panels are single-column too) instead of the
// old two-column layout.
import "./ContactPanel.css";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { ContactForm } from "../../ContactForm/ContactForm";

const CONTACT_METHODS = [
  {
    label: "Email",
    value: "morrowchristian@icloud.com",
    href: "mailto:morrowchristian@icloud.com",
    icon: FaEnvelope,
  },
  {
    label: "Phone",
    value: "423-710-4223",
    href: "tel:+14237104223",
    icon: FaPhone,
  },
  {
    label: "Location",
    value: "Cleveland, TN",
    href: undefined,
    icon: FaMapMarkerAlt,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/morrowchristian",
    href: "https://linkedin.com/in/morrowchristian",
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    value: "github.com/morrowchristian",
    href: "https://github.com/morrowchristian",
    icon: FaGithub,
  },
];

export const ContactPanel: React.FC = () => (
  <div className="contact-panel">
    <ul className="contact-panel__methods">
      {CONTACT_METHODS.map((method) => {
        const Icon = method.icon;
        return (
          <li key={method.label} className="contact-panel__method">
            <Icon className="contact-panel__method-icon" aria-hidden="true" />
            <span className="contact-panel__method-label">{method.label}</span>
            {method.href ? (
              <a
                className="contact-panel__method-value"
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {method.value}
              </a>
            ) : (
              <span className="contact-panel__method-value">{method.value}</span>
            )}
          </li>
        );
      })}
    </ul>

    <div className="contact-panel__form-card">
      <ContactForm />
    </div>
  </div>
);
