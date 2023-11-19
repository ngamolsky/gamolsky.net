import * as React from "react";
import { DarkModeCheckbox } from "./DarkmodeCheckbox";
import { useState } from "react";
import { setDarkModeClassFromLocalStorageOrSetting } from "../utils/colors";
import { IS_MOBILE } from "../utils/settings";
import { useTheme } from "../hooks/useTheme";

export const Settings = () => {
  const [theme, setTheme] = useTheme();
  React.useEffect(() => {
    // Set Dark mode on load
    setDarkModeClassFromLocalStorageOrSetting();
  }, [theme]);

  return (
    <section
      id="settings"
      className={`text-xl gap-4 flex h-full ${!IS_MOBILE && "hidden"}`}
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
