// src/sections/Contact.tsx
import ContactLinks from "../components/ContactLinks.tsx";
import "../styles/sections/Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <h2>Let’s Get In Touch</h2>

      <p>
        My inbox is always open. Whether you have a question or just want to say
        hello, I’ll do my best to respond.
      </p>

      <ContactLinks />
    </div>
  );
}
