import React, { useEffect } from "react";

import NavBar from "./NavBar";
import { motion } from "framer-motion";
import Image from "next/image";
import centerimage from "@/Images/centerImage.png";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
const HomeSection = (theme) => {
  console.log("thge", theme.theme);
  useEffect(() => {}, [theme]);
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <motion.div
      id="home"
      className="min-h-screen w-full flex justify-center items-center"
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <NavBar theme={theme} />
      <div className="w-full lg:w-[60%]  flex flex-col lg:flex-row justify-between items-center pb-[60px] lg:pb-[80px]">
        <div
          className={`${
            !theme.theme ? "text-black" : "text-white"
          }text-red-500 flex lg:flex-col flex-row justify-between items-center gap-2 lg:gap-20`}
        >
          <p
            className={`${
              !theme.theme ? "text-black" : "text-white"
            } lg:rotate-90 font-medium`}
          >
            follow on
          </p>
          <hr
            className={`${
              !theme.theme ? "border-black" : "border-white"
            } w-[100px] lg:rotate-90 block border-t-2`}
          />
          <div className="flex gap-2 lg:flex-col justify-between ">
            <FaLinkedin
              className={`${
                !theme.theme ? "text-black" : "text-white"
              } text-[28px] hover:text-blue-600 hover:bg-white rounded `}
            />
            <FaSquareXTwitter
              className={`${
                !theme.theme ? "text-black" : "text-white"
              } text-[28px] hover:text-white hover:bg-black hover:rotate-12 rounded`}
            />
            <FaInstagram
              className={`${
                !theme.theme ? "text-black" : "text-white"
              } text-[28px] hover:text-white hover:bg-pink-500 rounded transition-colors duration-300`}
            />
          </div>
        </div>

        <Image
          src={centerimage}
          alt="centerImage"
          className="rounded-full w-[70%] lg:w-[30%] m-auto"
        />
        <div
          onClick={() => scrollToSection("about")}
          className="cursor-pointer"
        >
          scroll to down
        </div>
      </div>
    </motion.div>
  );
};

export default HomeSection;
