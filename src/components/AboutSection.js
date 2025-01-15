import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import myProfile from "@/Images/pixelcut-myImage01.jpg"
import ProfileTypingEffect from "./TypeWritter";
const AboutSection = (theme) => {
  if (theme) {
    console.log("theme", theme.theme);
  }
  return (
    <motion.div
      id="about" className="min-h-screen w-full " initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >

      <div className="w-full lg:w-[60%]  flex flex-col pt-[20px] lg:pt-[40px] m-auto gap-[2rem] ">

        <h1 className="text-2xl font-bold text-red-500 text-center">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-around overflow-auto">
          <Image src={myProfile} alt="myprofile" className="border min-w-[200px] max-w-[220px] rounded-2xl w-full " />

          <div className="w-full h-full p-4 lg:p-5">
            <ProfileTypingEffect theme={theme} />

          </div>
        </div>


      </div>
    </motion.div>
  );
};

export default AboutSection;
