// src/components/Footer/Footer.tsx
import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";

export const Footer: React.FC = () => {
  const { ref, isVisible } = useInViewAnimation();

  return (
    <footer id="footer" className="footer">
      <div className="footer__inner animate">
        <div
          ref={ref}
          className={`footer__content ${isVisible ? "animate--visible" : ""}`}
        >
          <div className="footer__left">
            <h3 className="footer__name">Christian Morrow</h3>
            <p className="footer__tagline">
              Full‑Stack Software Engineer • Cleveland, TN
            </p>
          </div>

          <div className="footer__right">
            <a
              href="mailto:morrowchristian@icloud.com"
              className="footer__link"
            >
              morrowchristian@icloud.com
            </a>

            <div className="footer__socials">
              <a
                href="https://github.com/morrowchristian"
                target="_blank"
                className="footer__icon"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/morrowchristian"
                target="_blank"
                className="footer__icon"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__divider" />

        <p className="footer__credit">Made by Christian Morrow © 2026</p>
      </div>
    </footer>
  );
};
