import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { IoMdOpen, IoMdClose } from "react-icons/io";
import { HiOutlineCheck } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa6";
import gsap from "gsap";
import Image from "next/image";
import DmcProImg from "@/Images/ProjectImages/dmcpro.png";

import FlixgoImg from "@/Images/ProjectImages/flixgoImg.png";
import nxtWatchImg from "@/Images/ProjectImages/nxtwatchimg.png";
import bookhubImg from "@/Images/ProjectImages/bookhub.png";
import MyKitchenImg from "@/Images/ProjectImages/MyKitchen.png";
import NxtTrendsImg from "@/Images/ProjectImages/NxtTrends.png";
import FoodMunchImg from "@/Images/ProjectImages/FoodMunch.png";
import FyleImg from "@/Images/ProjectImages/Fyle.png";
import BharatNewsImg from "@/Images/ProjectImages/BharatNews.png";
import TodoAppImg from "@/Images/ProjectImages/TodoApp.png";
import WeFrameImg from "@/Images/ProjectImages/WeFrame.png";
import ShoppinAppleImg from "@/Images/ProjectImages/ShoppinApple.png";
import ExploreImg from "@/Images/ProjectImages/Explore.png";
import Link from "next/link";
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
      ServiceName: "Flixgo",
      category: "Full Stack",
      project_link: "https://flyyourtechflixgonewone.vercel.app/",
      special_points: "",
      Description: [
        "Developed a production-ready movie streaming application with a robust backend and secure frontend.",
        "Implemented Admin authentication and authorization to ensure data protection and secure access.",
        "Built a dynamic admin panel to manage movies and web series efficiently.",
        "Designed a fully responsive and interactive UI for seamless user experience across devices.",
      ],
      Skills: ["React.js", "HTML", "CSS", "Bootstrap", "Appwrite"],
      Image: FlixgoImg,
    },
    {
      id: 2,
      ServiceName: "DMCPro",
      category: "Contributed",
      project_link: "https://dmcprowebsite.vercel.app/",
      special_points:
        "Played a crucial role in website design, specifically working on sliders and ensuring a seamless user experience.",
      Description: [
        "DMCPro is a digital marketing company offering tailored solutions to clients.",
        "Contributed to designing and optimizing sliders to enhance interactivity and user engagement.",
        "Improved overall website aesthetics and usability by implementing responsive and visually appealing designs.",
      ],
      Skills: ["HTML", "CSS", "Bootstrap", "React.js"],
      Image: DmcProImg,
    },
    {
      id: 3,
      ServiceName: "Book Hub",
      category: "Frontend",
      project_link: "https://mukeshminipj.ccbp.tech/",
      special_points: "Credentials for demo Name: rahul, Password: rahul@2021",
      Description: [
        "A React-based project designed for seamless user experience and responsiveness.",
        "Integrated APIs to fetch data from the backend, ensuring dynamic content updates.",
        "Focused on efficient state management and modular component structure for maintainability.",
        "Enhanced usability through intuitive design and smooth navigation.",
      ],
      Skills: ["React.js", "CSS"],
      Image: bookhubImg, // Example icon
    },

    {
      id: 4,
      ServiceName: "NxtWatch",
      category: "Frontend",
      project_link: "https://mukeshwatchnxt.ccbp.tech/",
      special_points: "Credentials for demo Name: rahul, Password: rahul@2021",
      Description: [
        "NxtWatch is a YouTube-inspired platform developed using React.js.",
        "Implemented a global state management system using Context API for seamless theme toggling.",
        "Focused on creating an interactive and responsive user interface.",
        "Designed reusable components to ensure scalability and maintainability.",
        "Enhanced user experience through smooth transitions and optimized performance.",
      ],
      Skills: ["React.js", "Bootstrap"],
      Image: nxtWatchImg,
    },
    {
      id: 5,
      ServiceName: "My Kitchen",
      category: "Full Stack",
      project_link: "https://cloud-kitchenfullone-frontend.vercel.app/",
      special_points: "",
      Description: [
        "My Kitchen is a food delivery application inspired by leading platforms in the industry.",
        "Developed both frontend and backend to provide seamless and dynamic user interactions.",
        "Implemented Glassmorphism design principles to achieve a sleek and modern glassy effect.",
        "Integrated user authentication, order management, and real-time updates for a robust user experience.",
        "Ensured scalability and performance with a well-structured backend using Node.js, Express.js, and MongoDB.",
      ],
      Skills: ["React.js", "Node.js", "Express.js", "MongoDB"],
      Image: MyKitchenImg,
    },
    {
      id: 6,
      ServiceName: "NxtTrends",
      category: "Frontend",
      project_link: "https://mukeshtrends.ccbp.tech/",
      special_points: "Credentials for demo Name: rahul, Password: rahul@2021",
      Description: [
        "NxtTrends is an e-commerce website developed using React.js.",
        "Features include dynamic product listings, category-based filtering, and search functionality.",
        "Integrated APIs to fetch product data and enable a seamless user experience.",
        "Focused on responsive design to ensure compatibility across devices.",
        "Built with reusable components and efficient state management for scalability and maintainability.",
      ],
      Skills: ["React.js", "Bootstrap", "API's"],
      Image: NxtTrendsImg,
    },
    {
      id: 7,
      ServiceName: "FoodMunch",
      category: "Responsive",
      project_link: "https://mukeshfoodsite.ccbp.tech/",
      special_points: "",
      Description: [
        "One of my favorite websites, designed with a stunning and user-friendly UI.",
        "FoodMunch is a food delivery platform with a visually appealing and responsive design.",
        "Focused on delivering an intuitive user experience with easy navigation and fast interactions.",
        "Optimized for mobile devices, ensuring consistent performance across all screen sizes.",
        "Designed with modern UI trends and visual appeal.",
      ],
      Skills: ["HTML", "Bootstrap", "CSS", "JavaScript"],
      Image: FoodMunchImg,
    },
    {
      id: 8,
      ServiceName: "Fyle",
      category: "Responsive",
      project_link: "https://fylecompany.vercel.app/",
      special_points: "",
      Description: [
        "Fyle is a fully responsive website developed using jQuery, with a focus on creating a seamless user experience.",
        "Incorporated smooth animations and dynamic elements powered by jQuery for an engaging and interactive interface.",
        "Optimized for various devices, ensuring the design adapts gracefully across different screen sizes.",
        "Built with a modern, sleek UI to offer users an intuitive and visually appealing browsing experience.",
      ],
      Skills: ["jquery", "HTML", "CSS"],
      Image: FyleImg,
    },
    {
      id: 9,
      ServiceName: "Bharat News",
      category: "Frontend",
      project_link: "https://mukeshnewsapp.ccbp.tech/",
      special_points: "",
      Description: [
        "Bharat News is a news-based application developed using React.js, offering users a news feed experience.",
        "Implemented a theme toggle feature to allow users to switch between light and dark modes for personalized viewing.",
        "Focused on clean, minimalistic UI design to enhance readability and user engagement.",
        "Optimized for mobile devices with a responsive design to ensure smooth navigation across all screen sizes.",
        "Built with reusable components to allow for easy scalability and maintainability of the app.",
      ],
      Skills: ["React.js", "Bootstrap"],
      Image: BharatNewsImg,
    },
    {
      id: 10,
      ServiceName: "Todo App",
      category: "Responsive",
      project_link: "https://mukeshtodoslist.ccbp.tech/",
      special_points: "",
      Description: [
        "Todo App is a task management application built with HTML, CSS, and JavaScript, designed to help users organize and track their daily tasks efficiently.",
        "Implemented local storage to persist tasks across sessions, ensuring users' data is saved even after page refreshes.",
        "Optimized for a smooth user experience with responsive design, ensuring compatibility across various devices.",
      ],
      Skills: ["HTML", "CSS", "JavaScript"],
      Image: TodoAppImg,
    },
    {
      id: 11,
      ServiceName: "WeFrame",
      category: "Responsive",
      project_link: "https://weframeassignmentnextjs.vercel.app/",
      special_points: "",
      Description: [
        "WeFrame is a fully responsive website built using Next.js and Tailwind CSS, offering a seamless user experience across devices.",
        "The website leverages Next.js for server-side rendering (SSR) to ensure fast load times and optimal performance.",
        "Tailwind CSS is used to create a modern, clean design with a mobile-first approach, ensuring the site is fully responsive and user-friendly.",
        "The project includes intuitive navigation and interactive components for enhanced user engagement.",
      ],
      Skills: ["Next.js", "Tailwind CSS"],
      Image: WeFrameImg,
    },
    {
      id: 12,
      ServiceName: "ShoppinApple",
      category: "Responsive",
      project_link: "https://shoppinappleweb.vercel.app/",
      special_points: "",
      Description: [
        "ShoppinApple is a visually stunning, responsive e-commerce website that showcases Apple Watches with smooth animations powered by GSAP.",
        "The website features dynamic, interactive animations to engage users and bring the Apple Watch product to life.",
        "Built with Next.js for fast server-side rendering (SSR) and optimized for performance, ensuring quick load times and seamless browsing.",
        "Tailwind CSS is used for a sleek, modern design, making it mobile-friendly and responsive across all screen sizes.",
      ],
      Skills: ["Next.js", "Tailwind CSS", "GSAP"],
      Image: ShoppinAppleImg,
    },
    {
      id: 13,
      ServiceName: "Explore",
      category: "Contributed",
      project_link: "https://tripplannercompany.vercel.app/",
      special_points: "",
      Description: [
        "Explore is a travel planning platform where I contributed significantly, focusing on adding interactive animations and improving the user interface.",
        "Played a key role in implementing smooth transitions and animations to enhance user engagement and create a seamless browsing experience.",
        "Developed additional features that improved functionality, such as user-friendly navigation.",
        "Optimized the website for mobile responsiveness, ensuring consistent performance across different devices.",
        "Collaborated with the team to ensure the website is both visually appealing and highly functional, contributing to its success as a travel planning tool.",
      ],
      Skills: ["React.js", "Bootstrap"],
      Image: ExploreImg,
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
  const filterCards =
    activeTab !== "All"
      ? serviceData.filter((each) => each.category === activeTab)
      : serviceData;

  const serviceCards = filterCards.map((each) => (
    <div
      className=" max-w-sm mx-auto lg:min-w-[288px] min-w-[80%] lg:max-w-[289px] p-4 relative z-10"
      key={each.id}
    >
      <div
        className="bg-gray-800 shadow-md  rounded-lg  "
        onClick={() => handleOpenModal(each)}
      >
        <div className="flex flex-wrap  flex-col justify-start items-start gap-y-2">
          <div className="relative w-full">
            <Image
              src={each.Image}
              alt={`img${each.id}`}
              className="w-full rounded-t-lg lg:max-h-[180px]"
            />{" "}
            <span className="absolute top-2 right-2 lg:hidden rounded-[50%] bg-red-500 md:text-lg p-2 text-white ">
              <IoMdOpen />
            </span>
            <div className="rounded-t-lg absolute bg-gradient-to-r from-pink-500 to-purple-500   top-0 w-full h-full transition-opacity delay-150 duration-300 cursor-pointer opacity-0 hover:opacity-75 flex items-center justify-center">
              <h1 className="text-white hover:opacity-1 flex items-center gap-1 ">
                ClickMe <IoMdOpen className="font-bold text-xl" />
              </h1>
            </div>
          </div>
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
        </h1>
        <div className="flex gap-4 flex-wrap justify-center relative z-10">
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
        <div className="fixed z-50 inset-0 min-h-screen bg-black bg-opacity-100 flex justify-center items-center">
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
              <div className="relative w-full">
                <Image
                  src={activeServiceData.Image}
                  alt={activeServiceData.ServiceName}
                  className="rounded-lg  w-full lg:w-[100%]  object-cover mb-6 shadow-md m-auto"
                />
                <Link href={`${activeServiceData.project_link}`}>
                  <span className="absolute top-0 right-0 lg:hidden rounded flex items-center gap-1 bg-red-500 text-sm p-2 pt-1 pb-1 text-white ">
                    View Project <IoMdOpen />
                  </span>

                  <div className="rounded-lg absolute bg-gradient-to-r from-purple-500 to-pink-500  top-0 w-full h-[95.5%] transition-opacity delay-150 duration-300 cursor-pointer opacity-0 hover:opacity-75 flex items-center justify-center">
                    <h1 className="text-white hover:opacity-1 flex items-center gap-1 ">
                      Live Project{" "}
                      <FaArrowRight className="font-bold text-xl" />
                    </h1>
                  </div>
                </Link>
              </div>
              {activeServiceData.special_points !== "" && (
                <>
                  {" "}
                  <h3 className="text-xl font-semibold text-red-500 mb-2">
                    Good to Know:
                  </h3>
                  <div className=" flex flex-col gap-3">
                    <p className="flex  gap-2 items-center  text-sm  md:text-base text-black font-medium min-w-[50%] justify-start ">
                      {" "}
                      <span className="rounded-[50%] bg-red-500 lg:text-sm font-bold p-1 text-white ">
                        <FaArrowRight />
                      </span>{" "}
                      {activeServiceData.special_points}
                    </p>
                  </div>
                </>
              )}

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
                  **Developed using these Technologies
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
