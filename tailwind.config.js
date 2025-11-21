const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      gray: colors.gray, // Using Tailwind's full gray scale
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      black: colors.black,
      blue: colors.blue, // Adding blue for consistent color usage
      indigo: colors.indigo, // Adding indigo for existing references
      red: colors.red, // Adding red for toast/error states
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
