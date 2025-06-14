"use client";

import React, { useEffect, useState } from "react";
import "../styles/ToggleThemeButton.css";

function ToggleThemeButton() {
  const [theme, setTheme] = useState("dark");

  const updateTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    const AppContainer = document.querySelector(".App");
    localStorage.setItem("theme", newTheme);
    AppContainer.className = `App ${newTheme === "light" ? "lightTheme" : ""}`;
  };

  useEffect(() => {
    const getTheme = localStorage.getItem("theme");

    if (getTheme === null || getTheme === "")
      localStorage.setItem("theme", "dark");
    else {
      setTheme(getTheme);
      const AppContainer = document.querySelector(".App");
      AppContainer.className = `App ${getTheme === "light" ? "lightTheme" : ""}`;
    }
  }, []);

  return (
    <button
      type="button"
      className={`theme-change-btn`}
      onClick={updateTheme}
      aria-label="Theme Toggle Button"
      data-aos="zoom-in-up"
      data-aos-offset="0"
      title="Toggle Theme"
    >
      <i
        className={`fa-solid ${theme === "dark" ? "fa-moon" : "fa-lightbulb"} `}
      ></i>
      <span className="sr-only">Theme Toggle Button</span>
    </button>
  );
}

export default ToggleThemeButton;
