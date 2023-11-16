/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lower: ["Poiret One", "cursive"],
        upper: ["Lato", "sans-serif"],
        hind: ["Hind", "sans-serif"],
      },
      colors: {
        lightblue: "#54bfc7",
        pink: "#b81f4e",
        darkerblue: "#0755b4",
        yellow: "#f6b300",
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
