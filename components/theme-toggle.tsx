"use client";

import { useEffect, useState } from "react";

const applyTheme = (theme: "light" | "dark") => {
  const isDark = theme === "dark";
  document.documentElement.classList.toggle("dark", isDark);
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.setProperty(
    "--background",
    isDark ? "#0a0a0a" : "#ffffff",
  );
  document.documentElement.style.setProperty(
    "--foreground",
    isDark ? "#ededed" : "#171717",
  );
};

const getInitialTheme = (): "light" | "dark" => {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("dlec-theme");
  if (stored === "dark") return "dark";
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem("dlec-theme", theme);
  }, [theme]);

  const label = "切換主題";
}
