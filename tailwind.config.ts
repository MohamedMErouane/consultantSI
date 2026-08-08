import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#050816",
          elevated: "#0A0F20",
          panel: "#0D1326",
        },
        border: {
          DEFAULT: "#1B2338",
          soft: "#151B2E",
        },
        primary: {
          DEFAULT: "#2563EB",
          dim: "#1D4ED8",
          soft: "#1E3A6E",
        },
        accent: {
          DEFAULT: "#38BDF8",
          dim: "#0EA5E9",
        },
        ink: {
          DEFAULT: "#E7ECF7",
          muted: "#8B94AC",
          faint: "#586080",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-dot":
          "radial-gradient(circle, rgba(56,189,248,0.14) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(60% 50% at 50% 0%, rgba(37,99,235,0.20) 0%, rgba(5,8,22,0) 70%)",
      },
      backgroundSize: {
        "grid-dot-size": "28px 28px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(56,189,248,0.15), 0 8px 30px -8px rgba(37,99,235,0.35)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        blink: "blink 1.1s steps(1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
