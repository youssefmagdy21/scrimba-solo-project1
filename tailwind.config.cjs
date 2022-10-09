/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryLight: "#F5F5F5",
        primaryDark: "#1A1B21",
        secondaryLight: "#D5D4D8",
        secondaryDark: "#161619",
        primaryFont: "#2B283A",
        secondaryFontLight: "#F47D27",
        secondaryFontDark: "#F3BF99",
        contentFontLight: "#4A4E74",
        contentFontDark: "#DCDCDC",
        headlinesDark: "#F5F5F5",
        btnLight: "#297FE5",
        btnDark: "#5093E2",
        body: "#23252C",
      },
      fontFamily: {
        inter: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
