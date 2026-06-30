/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,html}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "var(--color-brand-bg)",
        darkCard: "var(--color-brand-card)",
        accentNeon: "var(--color-brand-accent)",
        lightText: "#FFFFFF",
        secondaryText: "var(--color-brand-text-sec)",
        brand: {
          bg: "var(--color-brand-bg)",
          "sec-bg": "var(--color-brand-sec-bg)",
          card: "var(--color-brand-card)",
          accent: "var(--color-brand-accent)",
          hover: "var(--color-brand-hover)",
          border: "var(--color-brand-border)",
          "text-sec": "var(--color-brand-text-sec)",
        }
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(219, 46, 46, 0.12)",
        cardGlow: "0 4px 30px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};
