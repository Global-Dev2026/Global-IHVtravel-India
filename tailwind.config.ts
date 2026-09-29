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
        background: "#0A0A0A",
        surface: {
          DEFAULT: "#141414",
          light: "#1C1C1C",
        },
        gold: {
          DEFAULT: "#D4AF37",
          highlight: "#F5D77A",
          deep: "#B8860B",
        },
        ivory: "#F5F1E8",
        muted: "#A8A08F",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-montserrat)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "var(--font-playfair)", "Georgia", "serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #B8860B 0%, #F5D77A 50%, #D4AF37 100%)",
        "glass-gradient": "linear-gradient(180deg, rgba(28, 28, 28, 0.7) 0%, rgba(20, 20, 20, 0.7) 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        "slide-up": "slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
        "shimmer": "shimmer 2s linear infinite",
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
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        gold: "0 4px 24px rgba(212, 175, 55, 0.15)",
        "gold-lg": "0 8px 40px rgba(212, 175, 55, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
