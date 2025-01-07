import React from "react";
import { RxCross2 } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";
import { LuHeartHandshake, LuMessageCircleMore } from "react-icons/lu";
import { MdHomeRepairService } from "react-icons/md";
const NavBar = (theme) => {
  return (
    <div>
      {/* <!-- Bottom Navigation Menu --> */}
      <div className="bottom-nav-container">
        <div className="bottom-nav">
          <div className="bottom-nav-inner relative ">
            <ul className="flex justify-between min-w-[350px] items-center bottom-4 fixed bg-gray-300 pl-4 pr-4 pb-2 pt-2 rounded-full left-1/2 transform -translate-x-1/2">
              <li className="menu-item relative group">
                <a href="#home" className="current">
                  {/* <!-- Icon --> */}
                  <p
                    className={`text-xl hover:bg-red-500 rounded-full p-2 ${
                      theme.theme ? "hover:text-white" : ""
                    }`}
                  >
                    <FaHome />
                  </p>

                  {/* <!-- Tooltip text --> */}
                  <span className="absolute top-[-40px] left-[-8px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm bg-red-500 py-1 px-2 rounded-lg shadow-lg pointer-events-none">
                    Home
                    {/* <!-- Arrow indicator --> */}
                    <svg
                      className="absolute left-1/2 transform -translate-x-1/2 bottom-[-5px] fill-current text-red-500"
                      width="10"
                      height="5"
                      viewBox="0 0 10 5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon points="0,0 10,0 5,5" />
                    </svg>
                  </span>
                </a>
              </li>
              <li className="menu-item relative group">
                <a href="#about" className="current group">
                  <p
                    className={`hover:bg-red-500 rounded-full p-2 ${
                      theme.theme ? "hover:text-white" : ""
                    }`}
                  >
                    <FaUser />
                  </p>

                  <span className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm bg-red-500 py-1 px-2 rounded-lg shadow-lg pointer-events-none">
                    About
                    <svg
                      className="absolute left-1/2 transform -translate-x-1/2 bottom-[-5px] fill-current text-red-500"
                      width="10"
                      height="5"
                      viewBox="0 0 10 5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon points="0,0 10,0 5,5" />
                    </svg>
                  </span>
                </a>
              </li>
              <li className="menu-item relative group">
                <a href="#resume" className="current group">
                  <p
                    className={`hover:bg-red-500 text-xl rounded-full p-2 ${
                      theme.theme ? "hover:text-white" : ""
                    }`}
                  >
                    <GrCertificate />
                  </p>

                  <span className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm bg-red-500 py-1 px-2 rounded-lg shadow-lg pointer-events-none">
                    Resume
                    <svg
                      className="absolute left-1/2 transform -translate-x-1/2 bottom-[-5px] fill-current text-red-500"
                      width="10"
                      height="5"
                      viewBox="0 0 10 5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon points="0,0 10,0 5,5" />
                    </svg>
                  </span>
                </a>
              </li>
              <li className="menu-item relative group">
                <a href="#services" className="current group">
                  <p
                    className={`hover:bg-red-500 text-xl rounded-full p-2 ${
                      theme.theme ? "hover:text-white" : ""
                    }`}
                  >
                    <LuHeartHandshake />
                  </p>

                  <span className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm bg-red-500 py-1 px-2 rounded-lg shadow-lg pointer-events-none">
                    Service
                    <svg
                      className="absolute left-1/2 transform -translate-x-1/2 bottom-[-5px] fill-current text-red-500"
                      width="10"
                      height="5"
                      viewBox="0 0 10 5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon points="0,0 10,0 5,5" />
                    </svg>
                  </span>
                </a>
              </li>
              <li className="menu-item relative group">
                <a href="#portfolio" className="current group">
                  <p
                    className={`hover:bg-red-500 rounded-full text-xl p-2 ${
                      theme.theme ? "hover:text-white" : ""
                    }`}
                  >
                    <MdHomeRepairService />
                  </p>

                  <span className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm bg-red-500 py-1 px-2 rounded-lg shadow-lg pointer-events-none">
                    Portfolio
                    <svg
                      className="absolute left-1/2 transform -translate-x-1/2 bottom-[-5px] fill-current text-red-500"
                      width="10"
                      height="5"
                      viewBox="0 0 10 5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon points="0,0 10,0 5,5" />
                    </svg>
                  </span>
                </a>
              </li>
              <li className="menu-item relative group">
                <a href="#contact" className="current group">
                  <p
                    className={`hover:bg-red-500 text-xl rounded-full p-2 ${
                      theme.theme ? "hover:text-white" : ""
                    }`}
                  >
                    <LuMessageCircleMore />
                  </p>

                  <span className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm bg-red-500 py-1 px-2 rounded-lg shadow-lg pointer-events-none">
                    Contact
                    <svg
                      className="absolute left-1/2 transform -translate-x-1/2 bottom-[-5px] fill-current text-red-500"
                      width="10"
                      height="5"
                      viewBox="0 0 10 5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon points="0,0 10,0 5,5" />
                    </svg>
                  </span>
                </a>
              </li>{" "}
              <li className="absolute text-white  top-[-5px] hover:text-xl hover:font-extrabold z-10 right-0 transform translate-x-1/4 translate-y-1/10 bg-red-500 p-1 rounded-full">
                <RxCross2 />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* 
<!-- Menu Show Button (for mobile view to show the menu) --> */}
      <div className="menu-show-btn">
        <div className="bar-01"></div>
        <div className="bar-02"></div>
      </div>
    </div>
  );
};

export default NavBar;
