// src/components/ContactForm/ContactForm.tsx
import { useState } from "react";
import "./ContactForm.css";

interface ContactFormProps {
  onSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // No backend exists for /api/send-email in this static site, so open the
      // visitor's email client instead.
      const subject = encodeURIComponent(form.subject || "Portfolio contact");
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      );
      window.location.href = `mailto:morrowchristian@icloud.com?subject=${subject}&body=${body}`;

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        onSuccess?.();
        setStatus("idle");
      }, 1500);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2 className="contact-form__title">Send me a message</h2>

      <label className="contact-form__label">
        Name
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="contact-form__input"
        />
      </label>

      <label className="contact-form__label">
        Email
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="contact-form__input"
        />
      </label>

      <label className="contact-form__label">
        Subject
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
          className="contact-form__input"
        />
      </label>

      <label className="contact-form__label">
        Message
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          className="contact-form__textarea"
        />
      </label>

      <button
        type="submit"
        className="contact-form__submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="contact-form__success">
          Your email app should now be open — send the message from there to
          reach me.
        </p>
      )}

      {status === "error" && (
        <p className="contact-form__error">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
};

/* TODO (ContactForm)
- Add responsive layout (2-column on desktop)
- Add validation UI (invalid states, inline errors)
- Add success animation or confetti burst
- Add loading spinner instead of text
- Add keyboard accessibility improvements
*/
