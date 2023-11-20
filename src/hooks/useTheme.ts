import { useState, useEffect } from "react";

export const useTheme: () => [string, (newTheme: string) => void] = () => {
  const [theme, setTheme] = useState<string>("system");

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "system");
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
