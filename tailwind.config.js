/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        // fluid type examples
        xs: "clamp(0.75rem, 0.7rem + 0.2vw, 0.875rem)", // 12–14px
        sm: "clamp(0.875rem, 0.8rem + 0.3vw, 1rem)",   // 14–16px
        base: "clamp(1rem, 0.9rem + 0.4vw, 1.125rem)", // 16–18px
        lg: "clamp(1.125rem, 1rem + 0.5vw, 1.25rem)",  // 18–20px
        xl: "clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)",  // 20–24px
        "2xl": "clamp(1.5rem, 1.3rem + 0.8vw, 2rem)",  // 24–32px
        "3xl": "clamp(1.875rem, 1.5rem + 1vw, 2.25rem)", // etc.
      },
      spacing: {
        // fluid spacing examples
        1: "clamp(0.25rem, 0.2rem + 0.2vw, 0.5rem)",
        2: "clamp(0.5rem, 0.4rem + 0.3vw, 0.75rem)",
        4: "clamp(1rem, 0.9rem + 0.5vw, 1.25rem)",
        6: "clamp(1.5rem, 1.2rem + 0.6vw, 2rem)",
        8: "clamp(2rem, 1.6rem + 1vw, 3rem)",
      },
    },
  },
  plugins: [],
}