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
          DEFAULT: "#2E7D32",
          dark: "#1B5E20",
          light: "#4CAF50",
        },

        accent: {
          DEFAULT: "#00AEEF",
        },

        navy: {
          DEFAULT: "#001B4D",
        },

        surface: "#FFFFFF",
        
        section: "#F8FAFC",

        border: "#E5E7EB",

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