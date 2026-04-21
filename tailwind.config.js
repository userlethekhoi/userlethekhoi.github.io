/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        ink: "#0B0B0F",
        paper: "#FAFAF7",
        accent: "#7C5CFF",
        mint: "#B8F2D4",
        peach: "#FFD6B8",
        butter: "#FFF1B8",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(20,20,40,0.12)",
        pop: "0 20px 60px -20px rgba(124,92,255,0.35)",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
