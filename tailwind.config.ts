import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E2C97E",
          dark: "#A07830",
          50: "#FDF8EC",
          100: "#F9EDCC",
          200: "#F2D98A",
          300: "#E8C55A",
          400: "#C9A84C",
          500: "#A07830",
          600: "#7A5A20",
          700: "#5A4018",
          800: "#3A2810",
          900: "#1E1408",
        },
        charcoal: {
          DEFAULT: "#1A1A2E",
          light: "#16213E",
          dark: "#0F0F1A",
        },
        cream: {
          DEFAULT: "#FAF7F0",
          dark: "#F0EBE0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #C9A84C 0%, #E2C97E 50%, #A07830 100%)",
        "dark-gradient":
          "linear-gradient(180deg, #0F0F1A 0%, #1A1A2E 50%, #16213E 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.4s ease-out",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        gold: "0 4px 24px rgba(201, 168, 76, 0.3)",
        "gold-lg": "0 8px 40px rgba(201, 168, 76, 0.4)",
        luxury: "0 20px 60px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
