import { useState, useEffect } from "react";

export const useTheme: () => [string, (newTheme: string) => void] = () => {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "dark");
  }, []);

  const handleThemeChange = (newTheme: string) => {
    if (newTheme === "system") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", newTheme);
    }

    setTheme(newTheme);
  };

  return [theme, handleThemeChange];
};
