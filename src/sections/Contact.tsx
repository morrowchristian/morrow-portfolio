import RevealSection from "../components/RevealSection";
import { motion } from "framer-motion";

const contacts = [
  { label: "Email", href: "mailto:morrowchristian@icloud.com" },
  { label: "GitHub", href: "https://github.com/morrowchristian" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/christian-morrow" }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Contact = () => (
  <RevealSection id="contact" className="section contact">
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2 variants={itemVariants}>Contact</motion.h2>
      <motion.p variants={itemVariants}>
        If you’d like to get in touch, here are the best ways to reach me:
      </motion.p>
      <motion.ul className="contact-list">
        {contacts.map((c) => (
          <motion.li key={c.label} variants={itemVariants}>
            <a
              href={c.href}
              target={c.label !== "Email" ? "_blank" : undefined}
              rel="noreferrer"
            >
              {c.label === "Email" ? "morrowchristian@icloud.com" : c.label}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  </RevealSection>
);

export default Contact;
