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
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out infinite 1s",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
