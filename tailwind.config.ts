import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          950: "#062017",
        },
        brand: {
          50: "#f0f7f2",
          100: "#dcebe0",
          200: "#b8d7c3",
          300: "#8cbc9e",
          400: "#5f9a76",
          500: "#3f7d58",
          600: "#2c6244",
          700: "#1f4d34",
          800: "#153a27",
          900: "#0e2a1c",
          950: "#081b12",
        },
        gold: {
          50: "#fdf9ec",
          100: "#f9edc4",
          200: "#f3da8b",
          300: "#ecc352",
          400: "#e3ab2c",
          500: "#c9891c",
          600: "#a86a17",
          700: "#864f17",
          800: "#6f4118",
          900: "#5f3818",
        },
        cream: {
          50: "#fffdf8",
          100: "#fbf6e9",
          200: "#f5ecd2",
        },
      },
      fontFamily: {
        arabic: ["'Amiri Quran'", "'Traditional Arabic'", "serif"],
        display: ["'Cormorant Garamond'", "serif"],
      },
      backgroundImage: {
        "islamic-pattern":
          "radial-gradient(circle at 1px 1px, rgba(63,125,88,0.15) 1px, transparent 0)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(201,137,28,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
