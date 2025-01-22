import { Geist, Geist_Mono, Inter, Roboto } from "next/font/google";
import "./globals.css";
import Particle from "@/components/Particles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configure Inter and Roboto fonts
const inter = Inter({
  subsets: ["latin"], // Subset for performance
  weight: "500", // 500 weight
  variable: "--font-inter", // CSS variable for global use
});

const roboto = Roboto({
  subsets: ["latin"], // Subset for performance
  weight: "500", // 500 weight
  variable: "--font-roboto", // CSS variable for global use
});
export const metadata = {
  title: "LazerCode",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${roboto.variable} antialiased`}
      >
        {children}
        <Particle />
      </body>
    </html>
  );
}
