// src/components/DarkModeToggle.tsx
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // We'll add icons below

const DarkModeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  // Load preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDark = savedTheme === "dark" || (!savedTheme && prefersDark);
    setIsDark(initialDark);
    document.documentElement.setAttribute("data-theme", initialDark ? "dark" : "light");
  }, []);

  // Sync attribute and save to localStorage on change
  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    setIsDark(!isDark);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default DarkModeToggle;