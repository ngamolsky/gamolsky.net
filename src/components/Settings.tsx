import * as React from "react";
import { DarkModeCheckbox } from "./DarkmodeCheckbox";
import { useTheme } from "../hooks/useTheme";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

export const Settings = () => {
  const [theme, setTheme] = useTheme();
  const breakpoints = useBreakpoint();

  return (
    <section
      id="settings"
      className={`text-xl gap-4  h-full ${breakpoints.sm ? "flex" : "hidden"}`}
    >
      <div className="my-auto mx-auto">
        <div className="flex gap-4">
          <div>Dark Mode: </div>
          <div className="flex gap-2 items-center">
            <DarkModeCheckbox
              value="system"
              isChecked={theme === "system"}
              onChange={() => {
                setTheme("system");
              }}
            />
            <DarkModeCheckbox
              value="light"
              isChecked={theme === "light"}
              onChange={() => {
                setTheme("light");
              }}
            />
            <DarkModeCheckbox
              value="dark"
              isChecked={theme === "dark"}
              onChange={() => {
                setTheme("dark");
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
