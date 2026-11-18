// src/components/Contact/Contact.tsx — EDITORIAL contact page:
// warm paper, Newsreader headings, IBM Plex Mono furniture,
// matching the Bio, Portfolio, Resume and Services pages. His
// contact info on the left (email, phone, location, LinkedIn,
// GitHub) and the message form on the right. The form opens the
// visitor's email client (mailto:) — there is no backend on
// this static site.
import "./Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { ContactForm } from "../ContactForm/ContactForm";
import { Container } from "../Container/Container";

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

export const Contact: React.FC = () => {
  return (
    <section className="contact">
      <Container>
        <header className="contact__header">
          <p className="contact__kick">Get in Touch</p>
          <h2 className="contact__title">Contact</h2>
          <span className="contact__rule" aria-hidden="true" />
          <p className="contact__intro">
            Have a project, a role, or just a question? Here is how to
            reach me — or send a message with the form.
          </p>
        </header>

        <div className="contact__body">
          <ul className="contact__methods">
            {CONTACT_METHODS.map((method) => {
              const Icon = method.icon;
              return (
                <li key={method.label} className="contact__method">
                  <Icon className="contact__method-icon" aria-hidden="true" />
                  <span className="contact__method-label">{method.label}</span>
                  {method.href ? (
                    <a
                      className="contact__method-value"
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {method.value}
                    </a>
                  ) : (
                    <span className="contact__method-value">{method.value}</span>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="contact__form-card">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
};
