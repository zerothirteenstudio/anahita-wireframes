/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-border': '#D1D5DB',
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
        mono: [
          "Courier Prime",
          "Courier",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      fontSize: {
        /* Modular scale ~ perfect fourth (1.333) */
        xs: ["12px", "1.6"],
        sm: ["14px", "1.6"],
        base: ["16px", "1.7"],
        lg: ["21px", "1.55"],
        xl: ["28px", "1.35"],
        "2xl": ["37px", "1.25"],
        "3xl": ["49px", "1.18"],
        "4xl": ["65px", "1.10"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.04), 0 6px 16px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};
