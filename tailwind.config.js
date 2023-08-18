/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        gemunu: ["Gemunu Libre", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },
      colors: {
        "regal-blue": "#243c5a",
      },
    },
  },
  plugins: [],
};
