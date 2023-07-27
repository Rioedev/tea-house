/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Quicksand", "sans-serif"],
      },
      colors: {
        primary: "#4d8a54",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
