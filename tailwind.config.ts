import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm brown — replaces the old navy as our "dark" anchor color
        navy: {
          DEFAULT: "#4C4541",
          dark: "#332E2B",
          light: "#6B625C",
        },
        // Warm amber — primary accent
        gold: {
          DEFAULT: "#F2C46A",
          dark: "#C98B2E",
          light: "#F8D896",
        },
        // Olive/sage — secondary accent
        sage: {
          DEFAULT: "#AEAC78",
          dark: "#8E8C5E",
          light: "#C4C296",
        },
        // Warm beige — page background
        cream: "#FCF0DA",
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
