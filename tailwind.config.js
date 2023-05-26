/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      // Override tailwind fontFamily
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      backgroundImage: {
        hero: "url('assets/imgs/banner.png')",
      },
      colors: {
        primary: {
          DEFAULT: "#0e3758",
        },
        secondary: {
          DEFAULT: "#1E75BA",
        },
        orange: {
          DEFAULT: "#faaf42",
        },
        primary50: {
          DEFAULT: "#f6fafe",
        },
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    // require("@tailwindcss/line-clamp"),
    function ({ addComponents }) {
      // Create our own container component
      // and ask tailwind to take it into account.
      addComponents({
        ".container": {
          maxWidth: "80vw",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen sm": {
            maxWidth: "75vw",
          },
          "@screen xl": {
            maxWidth: "1080px",
          },
        },
        ".container-other": {
          maxWidth: "90vw",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen sm": {
            maxWidth: "85vw",
          },
          "@screen xl": {
            maxWidth: "1280px",
          },
        },
      });
    },
  ],
};
