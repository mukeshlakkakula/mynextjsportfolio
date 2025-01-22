import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import adminpanelimg from "@/Images/Services/adminpanelImg.jpg";
import fullStackImg from "@/Images/Services/backendImg01.jpg";

import DmcProImg from "@/Images/ProjectImages/dmcpro.png";

import FlixgoImg from "@/Images/ProjectImages/flixgoImg.png";
import { HiOutlineCheck } from "react-icons/hi";
import gsap from "gsap";
import Image from "next/image";

import { IoMdClose } from "react-icons/io";
const PorfolioSection = (theme) => {
  console.log("theme", theme);
  const [activeService, setActiveService] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  const [themeAct, setActiveTheme] = useState(theme.theme);
  useEffect(() => {
    setActiveTheme(theme.theme);
  }, [theme]);
  const [activeServiceData, setActiveServiceData] = useState("");
  const modalRef = useRef(null);
  const serviceData = [
    {
      id: 1,
      ServiceName: "Frontend Development",
      Description: [
        "Responsive and mobile-friendly UI designs.",
        "Interactive components and seamless navigation using React.js and Next.js.",
        "Pixel-perfect layouts for businesses and personal projects.",
        "Reusable and modular React components for faster development.",
        "Cross-browser testing and debugging for a consistent user experience.",
      ],
      Skills: [
        "React.js",
        "Next.js",
        "HTML",
        "CSS",
        "Bootstrap",
        "Tailwind CSS",
      ],
      Image: FlixgoImg,
    },
    {
      id: 2,
      ServiceName: "Landing Page Development",
      Description: [
        "Custom-designed landing pages tailored to client needs.",
        "SEO-friendly and fast-loading designs to improve user engagement.",
        "Integration of interactive elements like forms, carousels, and animations.",
        "Cross-device compatibility for desktop, tablet, and mobile.",
        "Optimized call-to-action (CTA) placements to increase conversions.",
      ],
      Skills: [
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Bootstrap",
        "React.js",
        "Next.js",
      ],
      Image: DmcProImg,
    },
    {
      id: 3,
      ServiceName: "Full-Stack Web Development",
      Description: [
        "Scalable web applications with robust backends.",
        "Secure and efficient user authentication and authorization.",
        "End-to-end solutions like e-commerce platforms and dashboards.",
        "Seamless integration of APIs for third-party services.",
        "Optimization for performance, scalability, and cross-browser compatibility.",
      ],
      Skills: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "SQL",
        "Firebase",
        "Appwrite",
      ],
      Image: fullStackImg, // Example icon
    },

    {
      id: 4,
      ServiceName: "Admin Panel Development",
      Description: [
        "Admin dashboards for managing users, content, and analytics.",
        "Integration of real-time data and SSR for optimal performance.",
        "Secure role-based access and data visualization.",
        "Customizable dashboards with charts, tables, and graphs.",
        "Efficient backend logic to handle large-scale data management.",
      ],
      Skills: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "SQL",
        "Firebase",
        "Appwrite",
      ],
      Image: adminpanelimg,
    },
  ];
  console.log(activeService, "activedta", activeServiceData);

  const handleOpenModal = (service) => {
    setActiveServiceData(service);
    setActiveService(true);
  };

  const handleCloseModal = () => {
    gsap.to(modalRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      onComplete: () => {
        setActiveService(false);
        setActiveServiceData(null);
      },
    });
  };

  useEffect(() => {
    if (activeService) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5 }
      );
    }
  }, [activeService]);

  const serviceCards = serviceData.map((each) => (
    <div
      className="max-w-sm mx-auto lg:min-w-[288px] min-w-[80%] lg:max-w-[289px] p-4 relative z-10"
      key={each.id}
    >
      <div
        className="bg-gray-800 shadow-md  rounded-lg  "
        onClick={() => handleOpenModal(each)}
      >
        <div className="flex flex-wrap  flex-col justify-start items-start gap-y-2">
          <Image
            src={each.Image}
            alt={`img${each.id}`}
            className="w-full rounded-t-lg lg:max-h-[180px]"
          />
          <h2 className="text-lg md:text-lg font-semibold text-white mb-2 p-2">
            {each.ServiceName}
          </h2>
        </div>
      </div>
    </div>
  ));

  return (
    <motion.div
      id="portfolio"
      className="min-h-screen w-full flex flex-col  items-center lg:gap-7 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full lg:w-[100%]  flex flex-col pt-[20px] lg:pt-[40px]  gap-[2rem] ">
        <h1 className="text-2xl font-bold text-red-500 text-center">
          Portfolio
          <br />
          <span
            className={`${
              !themeAct ? "text-black" : "text-white"
            } font-medium   text-sm`}
          >
            All My Projects
          </span>
        </h1>
        <div className="flex gap-4 flex-wrap justify-center">
          <button
            onClick={() => {
              setActiveTab("All");
            }}
            className={`${
              activeTab === "All"
                ? "bg-red-500"
                : "border-2 border-red-500 lg:hover:bg-red-500"
            } ${
              themeAct ? "text-white" : "text-black"
            } font-bold text-lg rounded-[25px] pl-4 pr-4 pb-2 pt-2`}
          >
            All
          </button>
          <button
            onClick={() => {
              setActiveTab("Frontend");
            }}
            className={`${
              activeTab === "Frontend"
                ? "bg-red-500"
                : "border-2 border-red-500 lg:hover:bg-red-500"
            } ${
              themeAct ? "text-white" : "text-black"
            } font-bold text-lg rounded-[25px] pl-4 pr-4 pb-2 pt-2`}
          >
            Frontend
          </button>
          <button
            onClick={() => {
              setActiveTab("Full Stack");
            }}
            className={`${
              activeTab === "Full Stack"
                ? "bg-red-500"
                : "border-2 border-red-500 lg:hover:bg-red-500"
            } ${
              themeAct ? "text-white" : "text-black"
            } font-bold text-lg rounded-[25px] pl-4 pr-4 pb-2 pt-2`}
          >
            Full Stack
          </button>
          <button
            onClick={() => {
              setActiveTab("Responsive");
            }}
            className={`${
              activeTab === "Responsive"
                ? "bg-red-500"
                : "border-2 border-red-500 lg:hover:bg-red-500"
            } ${
              themeAct ? "text-white" : "text-black"
            } font-bold text-lg rounded-[25px] pl-4 pr-4 pb-2 pt-2`}
          >
            Responsive
          </button>
          <button
            onClick={() => {
              setActiveTab("Contributed");
            }}
            className={`${
              activeTab === "Contributed"
                ? "bg-red-500"
                : "border-2 border-red-500 lg:hover:bg-red-500"
            } ${
              themeAct ? "text-white" : "text-black"
            } font-bold text-lg rounded-[25px] pl-4 pr-4 pb-2 pt-2`}
          >
            Contributed
          </button>
        </div>
        <div className="flex flex-row gap-y-4 flex-wrap lg:w-[80%] m-auto">
          {serviceCards}
        </div>
      </div>
      <hr />
      {/* Modal */}
      {activeService && (
        <div className="fixed z-50 inset-0 bg-black bg-opacity-100 flex justify-center items-center">
          <div
            ref={modalRef}
            className="bg-white rounded-xl w-11/12 lg:w-1/2 h-auto max-h-[90vh] overflow-auto p-4 lg:p-6 relative shadow-lg"
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-red-500 text-2xl hover:text-red-600"
            >
              <IoMdClose />
            </button>
            {/* Modal Content */}
            <div className="flex flex-col items-start gap-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 border-b-2 border-red-500 pb-2">
                {activeServiceData.ServiceName}
              </h2>
              <Image
                src={activeServiceData.Image}
                alt={activeServiceData.ServiceName}
                className="rounded-lg  w-full lg:w-[80%]  object-cover mb-6 shadow-md m-auto"
              />
              <h3 className="text-xl font-semibold text-red-500 mb-2">
                Description:
              </h3>
              <div className=" flex flex-col gap-3">
                {activeServiceData.Description.map((skill, idx) => (
                  <p
                    className="flex  gap-2 items-center  text-sm  md:text-base text-black font-medium min-w-[50%] justify-start "
                    key={idx}
                  >
                    {" "}
                    <span className="rounded-[50%] bg-red-500 lg:text-sm font-bold p-1 text-white ">
                      <HiOutlineCheck />
                    </span>{" "}
                    {skill}
                  </p>
                ))}
              </div>
              <h3 className="text-xl font-semibold text-red-500 mb-2">
                Technologies:
                <br />
                <span className="text-gray-800 font-normal text-sm">
                  **As per the project requirements
                </span>
              </h3>

              <div className="flex gap-4 flex-row flex-wrap ">
                {activeServiceData.Skills.map((skill, idx) => (
                  <button
                    className="border rounded-[25px] pl-4 pr-4 pb-2 pt-2 flex  gap-2 items-center hover:underline underline-offset-1  text-base text-black font-bold  justify-start"
                    key={idx}
                  >
                    {" "}
                    <span className="rounded-[50%] bg-red-500 lg:text-sm font-bold p-1 text-white ">
                      <HiOutlineCheck />
                    </span>{" "}
                    {skill}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Scrollbar Styling */}
          <style jsx global>{`
            /* Custom Scrollbar */
            div::-webkit-scrollbar {
              width: 6px;
            }
            div::-webkit-scrollbar-thumb {
              background-color: #ef4444; /* Tailwind red-500 */
              border-radius: 4px;
            }
            div::-webkit-scrollbar-thumb:hover {
              background-color: #dc2626; /* Tailwind red-600 */
            }
            div::-webkit-scrollbar-track {
              background-color: #f3f4f6; /* Tailwind gray-100 */
              margin: 10px; /* Moves the track inward */
              border-radius: 6px;
            }
          `}</style>
        </div>
      )}
    </motion.div>
  );
};

export default PorfolioSection;
