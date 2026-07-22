/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        purple: {
          1000: "#1A0A3F",
          900: "#260A6E",
          600: "#5B27D4",
          500: "#7849E0",
          400: "#9D78EC",
          300: "#C0A4F4",
          100: "#EFE6FB",
        },
        black: "#0A0A0B",
        ink: "#141319",
        coal: "#1F1D26",
        shale: "#2A2733",
        gold: {
          700: "#B58B00",
          500: "#FFCE1A",
          300: "#FFE889",
        },
        paper: "#FAF8F3",
        bone: "#F1ECE2",
        ash: {
          100: "#E5DFD3",
          300: "#BFB7A8",
          500: "#807A6E",
          700: "#4A463E",
        },
      },
    },
  },
  plugins: [],
};
