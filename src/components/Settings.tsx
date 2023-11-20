import * as React from "react";
import { DarkModeCheckbox } from "./DarkmodeCheckbox";
import { setDarkModeClassFromLocalStorageOrSetting } from "../utils/colors";
import { useTheme } from "../hooks/useTheme";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

export const Settings = () => {
  const [theme, setTheme] = useTheme();
  const breakpoints = useBreakpoint();
  React.useEffect(() => {
    // Set Dark mode on load
    setDarkModeClassFromLocalStorageOrSetting();
  }, [theme]);

  return (
    <section
      id="settings"
      className={`text-xl gap-4 flex h-full ${!breakpoints.xs && "hidden"}`}
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
