import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1F3A",
          dark: "#081426",
          light: "#13294D",
        },
        gold: {
          DEFAULT: "#D4AF6A",
          dark: "#BF9A52",
          light: "#E6CFA0",
        },
        cream: "#F7F3EC",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "Helvetica", "sans-serif"],
        display: ["var(--font-space-grotesk)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
