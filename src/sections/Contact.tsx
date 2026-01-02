// src/sections/Contact.tsx
import MotionSection from "../components/MotionSection";
import { motion } from "framer-motion";
import { contacts } from "../data/contacts";
import { fadeUpStagger, itemFadeUp } from "../utils/motionVariants";

const Contact = () => (
  <MotionSection id="contact" className="section contact">
    <div className="section-content">
      <motion.div
        variants={fadeUpStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className="section-title" variants={itemFadeUp}>
          Contact
        </motion.h2>

        <motion.p variants={itemFadeUp}>
          If you’d like to get in touch, here are the best ways to reach me:
        </motion.p>

        <motion.ul className="contact-list" variants={fadeUpStagger}>
          {contacts.map((c) => (
            <motion.li key={c.label} variants={itemFadeUp}>
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
    </div>
  </MotionSection>
);

export default Contact;
