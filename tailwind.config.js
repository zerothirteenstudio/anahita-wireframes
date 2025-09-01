/** @type {import('tailwindcss').Config} */
import containerQueries from "@tailwindcss/container-queries";
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#111827",       // main text
          muted: "#6B7280",         // secondary text
          surface: "#FFFFFF",
          border: "#D1D5DB",        // neutral border
          accent: "#7353BA",
          accentII: "#2F195F", // orange
          accentFg: "#FFFFFF",      // accent text
        },
      },
      borderRadius: {
      xs: "var(--radius-xs)",
      sm: "var(--radius-sm)",
      DEFAULT: "var(--radius-md)",
      lg: "var(--radius-lg)",
      xl: "var(--radius-xl)",
  },
      spacing: {
        xs: "var(--gap-xs)",
        sm: "var(--gap-sm)",
        md: "var(--gap-md)",
        lg: "var(--gap-lg)",
        xl: "var(--gap-xl)",
      "2xl": "var(--gap-2xl)",
},
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
      fontSize: {
        xs: ["clamp(12px, 0.75vw, 13px)", "1.5"],
        sm: ["clamp(14px, 1.1vw, 15px)", "1.6"],
        base: ["clamp(16px, 1.3vw, 18px)", "1.7"],
        lg: ["clamp(18px, 1.6vw, 20px)", "1.6"],
        xl: ["clamp(20px, 2vw, 24px)", "1.35"],
        "2xl": ["clamp(24px, 2.6vw, 30px)", "1.25"],
        "3xl": ["clamp(28px, 3.2vw, 36px)", "1.2"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.04), 0 6px 16px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};
