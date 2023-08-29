/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        // You may customize your own custom color here
        primary: "#3B82F6",
        secondary: "#1D4ED8",
        tertiary: "#CFF0FF",
        black: "#000",
      },
    },
  },
  plugins: [],
};
