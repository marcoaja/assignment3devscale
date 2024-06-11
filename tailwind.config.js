const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
      },
      colors: {
        primary: { ...colors.indigo, DEFAULT: colors.indigo[600] },
      },
      fontFamily: {
        custom: ["Poppins", "sans-serif"],
      },
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
      },

      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
