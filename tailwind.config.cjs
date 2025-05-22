/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#041A2F", // Dark blue background
        secondary: "#b0c4de", // Light steel blue text
        tertiary: "#0F2C4C", // Slightly lighter blue for cards
        "black-100": "#102942",
        "black-200": "#081E34",
        "white-100": "#f3f3f3",
        accent: "#3BC2BC", // Teal accent color
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
