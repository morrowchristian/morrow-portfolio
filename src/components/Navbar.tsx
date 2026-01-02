// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav style={{ padding: "1rem", background: "#f4f4f4", textAlign: "center" }}>
      <Link to="/" style={{ margin: "0 1rem" }}>Home</Link>
      <Link to="/project-a" style={{ margin: "0 1rem" }}>Project A</Link>
      <Link to="/project-b" style={{ margin: "0 1rem" }}>Project B</Link>
      <Link to="/project-c" style={{ margin: "0 1rem" }}>Project C</Link>
      <a href="https://github.com/morrowchristian" target="_blank" rel="noopener noreferrer" style={{ margin: "0 1rem" }}>More → GitHub</a>
    </nav>
  );
};

export default Navbar;
