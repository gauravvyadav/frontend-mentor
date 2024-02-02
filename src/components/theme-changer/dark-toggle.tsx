"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

const DarkToggle = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center">
      {theme === "dark" ? (
        <button
          className="p-3 gap-3 flex items-center justify-center font-semibold"
          onClick={() => setTheme("light")}
        >
          <FaSun className="dark:text-white" />
          Light Mode
        </button>
      ) : (
        <button
          className="p-3 gap-3 flex items-center justify-center font-semibold"
          onClick={() => setTheme("dark")}
        >
          <FaMoon className="dark:text-white" />
          Dark Mode
        </button>
      )}
    </div>
  );
};

export default DarkToggle;
