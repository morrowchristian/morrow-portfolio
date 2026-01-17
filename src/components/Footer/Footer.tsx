// src/components/Footer/Footer.tsx
import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Container } from "../Container/Container";

export const Footer: React.FC = () => {
  const { ref, isVisible } = useInViewAnimation();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <footer id="footer" className="footer">
      <Container className="footer__inner animate">
        <div
          ref={ref}
          className={`footer__content ${isVisible ? "animate--visible" : ""}`}
          style={{
            flexDirection: isMobile ? "column" : "row",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <div className="footer__left">
            <h3 className="footer__name heading-4">Christian Morrow</h3>

            <p className="footer__tagline text-description">
              Full‑Stack Software Engineer • Cleveland, TN
            </p>
          </div>

          <div className="footer__right">
            <a
              href="mailto:morrowchristian@icloud.com"
              className="footer__link text-body"
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

        <p className="footer__credit text-small text-muted">
          Made by Christian Morrow © 2026
        </p>
      </Container>
    </footer>
  );
};
