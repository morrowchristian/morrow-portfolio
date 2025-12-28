// src/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Christian Morrow</p>

        <div className="footer-links">
          <a href="https://github.com/morrowchristian" target="_blank">
            GitHub
          </a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
