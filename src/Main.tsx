// src/Main.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/Main.css"; // optional CSS for layout

const Main: React.FC = () => {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="page-wrapper">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Main;