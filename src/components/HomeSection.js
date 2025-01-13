import React, { useEffect, useRef } from "react";

import NavBar from "./NavBar";
import { motion } from "framer-motion";
import Image from "next/image";
import centerimage from "@/Images/centerImage.png";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiScrollToBottomFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import gsap from 'gsap';

const HomeSection = (theme) => {
  console.log("thge", theme.theme);
  useEffect(() => {}, [theme]);
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
const scroll=useRef(null)

useEffect(() => {
  if (scroll.current) {
    gsap.to(scroll.current, {
      y: -13,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }
}, []);
  return (
    <motion.div
      id="home"
      className="min-h-screen w-full flex justify-center items-center"
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <NavBar theme={theme} />
      <div className="w-full lg:w-[60%]  flex flex-col gap-y-16 lg:flex-row justify-between items-center pb-[60px] lg:pb-[80px]">
        <div
          className={`${
            !theme.theme ? "text-black" : "text-white"
          }text-red-500 lg:order-1 order-3 flex lg:flex-col flex-row justify-between items-center gap-2 lg:gap-7`}
        >
          <p
            className={`${
              !theme.theme ? "text-black" : "text-white"
            } hidden lg:block lg:rotate-90 font-medium min-w-[80px] `}
          >
            follow on
          </p>
          <div  className={`${
              !theme.theme ? "border-black" : "border-white"
            } hidden lg:block border lg:max-w-[2px] w-[100px] lg:min-h-[100px]  block border-t-2 `}>

          </div>
           
          
          <div className="flex gap-x-6 lg:gap-2 lg:flex-col justify-between  ">
            <FaLinkedin
              className={`${
                !theme.theme ? "text-black" : "text-white"
              } text-[28px] hover:text-blue-600 hover:bg-transparent rounded `}
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
      <div className=" lg:order-2 order-2 flex flex-col justify-between gap-4">
      <p   className={`${
                !theme.theme ? "text-black" : "text-white bg-transparent"
              } text-[28px] text-center`}>Hello, Welcome to <span className="text-red-500 font-bold">Lazer</span>Code
              </p>
       <Image 
          src={centerimage}
          alt="centerImage"
          className="rounded-full w-[70%] lg:w-[40%] m-auto"
        /></div>
        <div 
          onClick={() => scrollToSection("about")}
          className="cursor-pointer lg:order-3 order-1 hidden lg:block"
        >
         
          
          <p ref={scroll}  className={`${
                !theme.theme ? "text-black" : "text-white bg-transparent"
              } text-[28px] hover:text-red-500 hover:bg-transparent rounded min-w-[60px]`}>
          <RiScrollToBottomFill  />
          </p>
         
        </div>
      </div>
    </motion.div>
  );
};

export default HomeSection;
