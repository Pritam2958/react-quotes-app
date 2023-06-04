/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, ts, jsx, tsx}"],
  theme: {
    extend: {
      colors: {
        wetAsphalt: "#2C3E50",
      },
      fontSize: {
        vsm: "10px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
