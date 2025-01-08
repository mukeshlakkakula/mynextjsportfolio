/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
      shake: {
        '0%, 100%': { transform: 'translateX(0)' },
        '25%': { transform: 'translateX(-4px)' },
        '50%': { transform: 'translateX(4px)' },
        '75%': { transform: 'translateX(-2px)' },
      },
    },
    animation: {
      shake: 'shake 0.8s ease-in-out infinite',
    },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "black-800": "#1a1a1a",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"], // Add Inter font
        roboto: ["var(--font-roboto)", "sans-serif"], // Add Roboto font
      },
    },
  },
  plugins: [],
};
