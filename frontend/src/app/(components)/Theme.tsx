import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState<boolean | null>(null);

  // Get theme from localStorage on client-side after mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setDarkMode(storedTheme === "dark");
  }, []);

  // Update document and localStorage when darkMode changes
  useEffect(() => {
    if (darkMode === null) return;

    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return { darkMode, setDarkMode };
};

export default useDarkMode;
