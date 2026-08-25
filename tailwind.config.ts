import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#0a1931",
        "dark-secondary": "#1a3d63",
        "dark-accent": "#4a7fa7",
        "dark-text": "#b3cfe5",
        "light-bg": "#f6fafd",
        "light-accent": "#4a7fa7",
      },
      keyframes: {
        wave: {
          "0%": { transform: "translateX(-100%) skewX(-15deg)" },
          "100%": { transform: "translateX(200%) skewX(-15deg)" },
        },
      },
      animation: {
        wave: "wave 2s infinite linear",
      },
    },
  },
  plugins: [],
} satisfies Config;