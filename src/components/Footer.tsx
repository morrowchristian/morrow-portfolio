// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: "1rem", background: "#f4f4f4", textAlign: "center", marginTop: "2rem" }}>
      <p>
        <a href="mailto:morrowchristian@icloud.com">morrowchristian@icloud.com</a> | 
        <a href="https://github.com/morrowchristian" target="_blank" rel="noopener noreferrer"> GitHub</a> | 
        <a href="https://www.linkedin.com/in/christian-morrow/" target="_blank" rel="noopener noreferrer"> LinkedIn</a> | 
        <a href="/resume.pdf" download>Download Resume</a>
      </p>
    </footer>
  );
};

export default Footer;
