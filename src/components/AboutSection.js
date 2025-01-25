import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import myProfile from "@/Images/pixelcut-myimage02.jpg";
import ProfileTypingEffect from "./TypeWritter";

import TimelineExperience from "./TimelineExperience";
import Skills from "./Skills";

const AboutSection = (theme) => {
  const [activeTab, setActiveTab] = useState("Skills");
  const [themeAct, setActiveTheme] = useState(theme.theme);
  useEffect(() => {
    setActiveTheme(theme.theme);
  }, [theme]);
  if (theme) {
    console.log("theme abt", theme.theme, "themeAct", themeAct);
  }
  return (
    <motion.div
      id="about"
      className="min-h-screen w-full flex flex-col justify-center items-center lg:gap-7  "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full lg:w-[60%]  flex flex-col pt-[20px] lg:pt-[40px] m-auto gap-[2rem] ">
        <h1 className="text-2xl font-bold text-red-500 text-center">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-around overflow-auto">
          <Image
            src={myProfile}
            alt="myprofile"
            className="border min-w-[200px] max-w-[220px] lg:min-w-[250px]  lg:max-w-[260px] rounded-2xl w-full relative z-10 "
          />

          <div className="w-full h-full p-4 lg:p-5 relative z-10">
            <ProfileTypingEffect theme={theme} />
          </div>
        </div>
      </div>
      <hr />

      <div className="p-[0.6rem] w-full flex flex-col gap-y-10 ">
        <p
          className={`${
            !themeAct ? "text-black" : "text-white"
          } text-2xl font-medium text-center `}
        >
          My Skills & Experience
        </p>
        <div className="flex gap-4 flex-wrap justify-center relative z-10">
          <button
            onClick={() => {
              setActiveTab("Skills");
            }}
            className={`${
              activeTab === "Skills"
                ? "bg-red-500"
                : "border-2 border-red-500 lg:hover:bg-red-500"
            } ${
              themeAct ? "text-white" : "text-black"
            } font-bold text-xl rounded-[25px] pl-4 pr-4 pb-2 pt-2`}
          >
            Skills
          </button>
          <button
            onClick={() => {
              setActiveTab("Experience");
            }}
            className={`${
              activeTab === "Experience"
                ? "bg-red-500"
                : "border-2 border-red-500 lg:hover:bg-red-500"
            } ${
              themeAct ? "text-white" : "text-black"
            } font-bold text-xl rounded-[25px] pl-4 pr-4 pb-2 pt-2`}
          >
            Experience
          </button>
        </div>
        {activeTab === "Experience" && <TimelineExperience />}
        {activeTab === "Skills" && <Skills />}
      </div>
    </motion.div>
  );
};

export default AboutSection;
