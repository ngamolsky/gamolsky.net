import * as React from "react";
import { DarkModeCheckbox } from "./DarkmodeCheckbox";
import { useState } from "react";
import { setDarkModeClassFromLocalStorageOrSetting } from "../utils/colors";
import { IS_MOBILE } from "../utils/settings";

export const Settings = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || "dark"
  );

  React.useEffect(() => {
    // Set Dark mode on load
    setDarkModeClassFromLocalStorageOrSetting();
  }, [theme]);

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === "system") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", value);
    }

    setTheme(value);
  };
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
    </section>
  );
};
