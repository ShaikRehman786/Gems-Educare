/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#E8581A",
          dark: "#CC4D16",
          light: "#FFA07A",
        },

        secondary: {
          DEFAULT: "#111827",
          dark: "#000000",
          light: "#374151",
        },

        surface: "#FFFFFF",

        border: "#E5E5E5",

        text: {
          primary: "#111111",
          secondary: "#555555",
        },
      },

      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },

  plugins: [],
};