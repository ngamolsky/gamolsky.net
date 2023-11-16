import { Tag } from "../hooks/useProjects";

export const setDarkModeClassFromLocalStorageOrSetting = () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

export const interpolateHexColors = (
  value: number,
  color1: string,
  color2: string
): string => {
  const hexToRgb = (hex: string): number[] => {
    return hex.match(/\w\w/g)!.map((x) => parseInt(x, 16));
  };

  const rgbToHex = (r: number, g: number, b: number): string => {
    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
  };

  const [r1, g1, b1] = hexToRgb(color1);
  const [r2, g2, b2] = hexToRgb(color2);

  const r = Math.round(r1 + (r2 - r1) * value);
  const g = Math.round(g1 + (g2 - g1) * value);
  const b = Math.round(b1 + (b2 - b1) * value);

  return rgbToHex(r, g, b);
};

export const TAG_TO_COLOR_MAP: {
  [key in Tag]?: string;
} = {
  [Tag.Technology]: "lightblue",
  [Tag.Education]: "yellow",
  [Tag.Health]: "pink",
  [Tag.Environment]: "green-500",
  [Tag.Puzzles]: "purple-500",
};
