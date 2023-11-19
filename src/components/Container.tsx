import React, { useEffect, useState } from "react";
import GithubIcon from "../images/github.svg";
import LinkedInIcon from "../images/linkedin.svg";
import { setDarkModeClassFromLocalStorageOrSetting } from "../utils/colors";
import { motion } from "framer-motion";
import { DarkModeCheckbox } from "./DarkmodeCheckbox";

type ContainerProps = {
  children: React.ReactNode;
  borderColor?: string;
};

const Container = ({ children, borderColor }: ContainerProps) => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "dark"
  );

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === "system") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", value);
    }

    setTheme(value);
  };

  useEffect(() => {
    // Set Dark mode on load
    setDarkModeClassFromLocalStorageOrSetting();
  }, [theme]);

  return (
    <div className="dark:bg-black bg-white dark:text-white absolute inset-0 font-upper transition-colors duration-300">
      <div className="fixed top-2 right-4 md:top-4 md:right-10  gap-2 hidden md:flex">
        <a href="https://github.com/ngamolsky" target="_blank">
          <GithubIcon
            className="dark:fill-white h-4 w-4 cursor-pointer"
            viewBox="0 0 100 100"
          />
        </a>
        <a href="https://www.linkedin.com/in/ngamolsky/" target="_blank">
          <LinkedInIcon
            className="dark:fill-white cursor-pointer"
            viewBox="0 0 24 24"
            width="16"
            height="16"
          />
        </a>
      </div>
      <motion.div
        className={`border inset-4 md:inset-10 absolute overflow-scroll`}
        style={{
          borderColor: borderColor,
        }}
      >
        {children}
      </motion.div>
      <div className="fixed bottom-4 right-10 hidden md:block">
        <div className="flex gap-2">
          <DarkModeCheckbox
            value="system"
            isChecked={theme === "system"}
            onChange={handleThemeChange}
          />
          <DarkModeCheckbox
            value="light"
            isChecked={theme === "light"}
            onChange={handleThemeChange}
          />
          <DarkModeCheckbox
            value="dark"
            isChecked={theme === "dark"}
            onChange={handleThemeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Container;
