import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'pulse-scale': {
          '0%, 100%': { transform: 'scale(0.9)' },
          '50%': { transform: 'scale(1.03)' },
        }
      },
      animation: {
        'pulse-scale': 'pulse-scale 1s ease-in-out infinite',
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
