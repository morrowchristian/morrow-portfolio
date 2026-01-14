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
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send");

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
      <h2 className="contact-form__title heading-2">Send me a message</h2>

      <label className="contact-form__label text-small text-muted">
        Name
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="contact-form__input text-body"
        />
      </label>

      <label className="contact-form__label text-small text-muted">
        Email
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="contact-form__input text-body"
        />
      </label>

      <label className="contact-form__label text-small text-muted">
        Subject
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
          className="contact-form__input text-body"
        />
      </label>

      <label className="contact-form__label text-small text-muted">
        Message
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          className="contact-form__textarea text-body"
        />
      </label>

      <button
        type="submit"
        className="contact-form__submit text-small"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="contact-form__success text-small">
          Message sent successfully!
        </p>
      )}

      {status === "error" && (
        <p className="contact-form__error text-small">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
};
