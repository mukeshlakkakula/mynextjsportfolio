import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import adminpanelimg from "@/Images/Services/adminpanelImg.jpg";
import fullStackImg from "@/Images/Services/backendImg01.jpg";
import frontEndImg from "@/Images/Services/frontendimg01.jpg";
import landingpageImg from "@/Images/Services/landingpageimg.jpg";
import { HiOutlineCheck } from "react-icons/hi";
import gsap from "gsap";
import Image from "next/image";

import { IoMdOpen, IoMdClose } from "react-icons/io";
const ServicesSection = (theme) => {
  console.log("theme", theme);
  const [activeService, setActiveService] = useState(false);
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
      Image: frontEndImg,
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
      Image: landingpageImg,
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
      <div className="bg-white shadow-md  rounded-lg text-center p-[0.6rem] lg:p-2 border-b-4 border-red-500">
        <div className="flex flex-wrap  flex-col justify-center items-center gap-y-2">
          <Image
            src={each.Image}
            alt={`img${each.id}`}
            className="w-full rounded lg:max-h-[180px]"
          />
          <h2 className="text-lg md:text-lg font-semibold text-gray-800 ">
            {each.ServiceName}
          </h2>
          <button
            onClick={() => handleOpenModal(each)}
            className="flex cursor-pointer gap-2 items-center underline lg:no-underline hover:underline hover:font-bold underline-offset-1  text-base text-black font-medium min-w-[50%] justify-start p-2"
          >
            Read more{" "}
            <span className="rounded-[50%] bg-red-500 lg:text-lg p-2 text-white ">
              <IoMdOpen />
            </span>
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <motion.div
      id="services"
      className=" w-full flex flex-col  items-center lg:gap-7  "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full md:w-[100%]  flex flex-col pt-[20px] lg:pt-[40px]  gap-[2rem] ">
        <h1 className="text-2xl font-bold text-red-500 text-center">
          My Services
        </h1>
        <div className="flex flex-row gap-y-4 flex-wrap md:w-[80%] m-auto">
          {serviceCards}
        </div>
      </div>
      <hr />
      {/* Modal */}
      {activeService && (
        <div className="fixed z-50 min-h-screen inset-0 bg-black bg-opacity-100 flex justify-center items-center ">
          <div
            ref={modalRef}
            className="bg-white rounded-xl w-11/12 md:w-2/3 lg:w-1/2 h-auto max-h-[90vh] overflow-auto p-4 lg:p-6 relative shadow-lg"
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

export default ServicesSection;
