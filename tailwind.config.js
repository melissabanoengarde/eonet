/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      ips: ["IBM Plex Sans", "Helvetica", "sans-serif"],
    },
    backgroundSize: {
      500: "500px",
    },
    extend: {},
  },
  plugins: [],
};
