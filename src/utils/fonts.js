// utils/fonts.js

import { Inter, Roboto } from "next/font/google";

// Configure Inter font with weight 500
export const inter = Inter({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-inter",
});

// Configure Roboto font with weight 500
export const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-roboto",
});
