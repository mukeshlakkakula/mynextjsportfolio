/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
