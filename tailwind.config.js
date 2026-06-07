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
          DEFAULT: "#6B3FA0",
          dark: "#5A3290",
        },

        secondary: {
          DEFAULT: "#8B5CF6",
        },

        accent: {
          DEFAULT: "#FF6B35",
          hover: "#E85A2A",
        },

        navy: {
          DEFAULT: "#2D1B45",
        },

        surface: "#FFFFFF",
        
        section: "#FAFAFA",

        border: "#E5E7EB",

        text: {
          primary: "#1F2937",
          secondary: "#6B7280",
        },

        success: "#22C55E",
        error: "#EF4444",
        warning: "#F59E0B",
      },

      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },

  plugins: [],
};