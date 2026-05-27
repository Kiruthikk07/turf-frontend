"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "dark",
  toggle: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = (localStorage.getItem("turfpro-theme") as Theme) ?? "dark";
    apply(saved);
  }, []);

  function apply(t: Theme) {
    setTheme(t);
    const html = document.documentElement;
    html.classList.toggle("light", t === "light");
    localStorage.setItem("turfpro-theme", t);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle: () => apply(theme === "dark" ? "light" : "dark") }}>
      {children}
    </ThemeContext.Provider>
  );
}
