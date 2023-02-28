/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      noto: ["Noto Sans TC", "Helvetica", "sans-serif"],
    },
    backgroundSize: {
      500: "500px",
    },
    extend: {},
  },
  plugins: [],
};
