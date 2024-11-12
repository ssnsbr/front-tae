"use client";

import React, { useEffect, useState } from "react";
import { Theme } from "@radix-ui/themes";

const ThemeToggle = ({ children }: { children?: React.ReactNode }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Theme accentColor="plum" grayColor="mauve" radius="large">
      <div data-theme={theme} className="theme-wrapper p-4">
        <label className="flex items-center cursor-pointer space-x-3">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {theme === "light" ? "Light Mode" : "Dark Mode"}
          </span>
          <div
            className="relative w-14 h-8 bg-gray-300 dark:bg-gray-600 rounded-full shadow-inner transition-colors"
            onClick={toggleTheme}
          >
            <div
              className={`absolute top-1 left-1 w-6 h-6 rounded-full shadow-md transform transition-transform ${
                theme === "dark"
                  ? "translate-x-6 bg-plum-500"
                  : "translate-x-0 bg-white"
              }`}
            ></div>
          </div>
        </label>
        {children}
      </div>
    </Theme>
  );
};

export default ThemeToggle;
