// src/components/ContactForm/ContactForm.tsx
// Sends the message for real: the form POSTs to FormSubmit's
// AJAX endpoint, which emails the submission to
// morrowchristian@icloud.com. No backend, no signup, no API
// key — the first submission triggers a one-time activation
// email to that address (click "Activate Form" once, and every
// submission after that lands in the inbox). The old mailto:
// flow (which just opened the visitor's email client) is gone.
import { useState } from "react";
import "./ContactForm.css";

const FORMSUBMIT_URL =
  "https://formsubmit.co/ajax/morrowchristian@icloud.com";

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
      const response = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          // FormSubmit options: a clear subject line, a table
          // layout in the email, and no captcha challenge (it
          // does not work over AJAX).
          _subject: `Portfolio contact: ${form.subject || "New message"}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await response.json().catch(() => ({}));

      // FormSubmit returns success as the STRING "true" /
      // "false" — a plain truthiness check would treat the
      // string "false" as success, so compare exactly.
      if (data && data.success === "true") {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => {
          onSuccess?.();
          setStatus("idle");
        }, 4000);
      } else {
        setStatus("error");
      }
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
          Message sent — thanks for reaching out. I&apos;ll get back to
          you soon.
        </p>
      )}

      {status === "error" && (
        <p className="contact-form__error">
          Something went wrong sending that. You can reach me directly
          at morrowchristian@icloud.com.
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
