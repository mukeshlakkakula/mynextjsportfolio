"use client";
import Image from "next/image";

import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import { useEffect, useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";
import { motion } from "framer-motion";
import ResumeSection from "@/components/ResumeSection";
export default function Home() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme !== null) {
      setTheme(savedTheme === "true"); // Convert string to boolean
    } else {
      localStorage.setItem("theme", false); // Default theme value
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !theme;
    setTheme(newTheme); // Toggle theme state
    localStorage.setItem("theme", newTheme); // Persist new theme state
  };
  return (
    <motion.div id="home"  animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
      className={`${
        theme ? "darkTheme" : "lightTheme"
      } flex flex-col justify-center items-center p-[0.6rem] md:pl-[3rem] md:pr-[3rem] md:pt-[1rem] lg:pl-[4rem] lg:pr-[4rem] lg:pt-[1.3rem]`}
    >
      <div className="flex justify-between w-full">
        <h1 className="text-3xl text-red-h">
          Lazer
          <span className={`${theme ? "text-white" : "text-black"}`}>Code</span>
        </h1>
        <div className="flex items-center gap-2">
          <button className="pl-4 pr-4 pt-2 pb-2 text-red-h text-sm lg:text-md font-normal border-[2px] rounded-full">
            Let's talk
          </button>
          <button
            className="p-2"
            onClick={toggleTheme}
          >
            {theme ? (
              <p className="text-white text-2xl">
                <IoSunnyOutline />{" "}
              </p>
            ) : (
              <p className="text-black text-2xl">
                <IoIosMoon />
              </p>
            )}
          </button>
        </div>
      </div>

      <HomeSection theme={theme} />

      <AboutSection theme={theme} />
      <ResumeSection theme={theme}/>
    </motion.div>
  );
}
