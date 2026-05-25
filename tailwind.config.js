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
          DEFAULT: "#003399",
          dark: "#002266",
          light: "#335CB2",
        },

        secondary: {
          DEFAULT: "#C41E3A",
          dark: "#9B182E",
          light: "#D04B61",
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