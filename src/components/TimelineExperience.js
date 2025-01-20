"use client";
import React, { useState, useEffect } from "react";
import { Timeline } from "antd";

const TimelineExperience = () => {
  const [timelineMode, setTimelineMode] = useState("alternate");
  // Update mode based on screen width
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768; // Tailwind's md breakpoint
      setTimelineMode(isMobile ? "left" : "alternate");
    };

    // Set the mode initially
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const experience = (name, description, comapny = "") => {
    return (
      <div className="max-w-sm mx-auto ">
        <div className="bg-white shadow-md rounded-lg text-center p-[0.6rem] lg:p-4 border-b-4 border-red-500">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
            {name}
          </h2>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
          <button className="px-4 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600">
            {comapny}
          </button>
        </div>
      </div>
    );
  };
  const timelineItems = [
    {
      children: experience(
        "Full Stack Development • Internship",
        "During my internship, I gained expertise in technologies like Tailwind CSS, Appwrite, Next.js, and Firebase.",
        "FLY YOUR TECH"
      ),
      color: "green",
    },
    {
      children: experience(
        "Web Development • Internship",
        "Played a key role in developing and maintaining the company's official website.Contributed significantly to developing a tourism website, which included creating engaging layouts, and integrating interactive features.",
        "Explorers Company Private Limited"
      ),
      color: "blue",
    },
  ];
  return (
    <Timeline
      mode={timelineMode}
      items={timelineItems}
      className="w-full m-auto"
    />
  );
};

export default TimelineExperience;
