import React, { useEffect } from "react";

import NavBar from "./NavBar";
import { motion } from "framer-motion";
import Image from "next/image";
import centerimage from "../../public/Images/centerimage.jpeg";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
const HomeSection = (theme) => {
  console.log("thge", theme.theme);
  useEffect(() => {}, [theme]);
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
            !theme.theme ? "text-white" : "text-black"
          }text-red-500 flex lg:flex-col flex-row justify-between items-center gap-2 lg:gap-20`}
        >
          <p
            className={`${
              !theme.theme ? "text-black" : "text-white"
            } lg:rotate-90`}
          >
            follow on
          </p>
          <hr className="w-[100px] lg:rotate-90 block" />
          <div>
            <FaLinkedin />
            <FaSquareXTwitter />
            <FaInstagram />
          </div>
        </div>

        <Image
          src={centerimage}
          alt="centerImage"
          className="rounded-full w-[70%] lg:w-[30%] m-auto"
        />
        <div>scroll to down</div>
      </div>
    </motion.div>
  );
};

export default HomeSection;
