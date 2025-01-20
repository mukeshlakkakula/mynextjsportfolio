import React from "react";
import { FaHtml5, FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill, RiNextjsFill, RiNodejsLine } from "react-icons/ri";
import {
  SiExpress,
  SiPython,
  SiAppwrite,
  SiMongodb,
  SiSqlite,
} from "react-icons/si";
const Skills = () => {
  const frontendTechnologies = (
    <div className="max-w-sm mx-auto ">
      <div className="bg-white shadow-md rounded-lg text-center p-[0.6rem] lg:p-4 border-b-4 border-red-500">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
          Frontend Skills
        </h2>
        <div className="flex flex-wrap justify-start">
          <p className="flex gap-2 items-center text-base font-medium min-w-[50%] justify-start p-2">
            <span className="rounded-[50%] bg-red-500 lg:text-lg p-2 text-white">
              <FaHtml5 />
            </span>
            HTML
          </p>
          <p className="flex gap-2 items-center text-base font-medium min-w-[50%] justify-start p-2">
            <span className="rounded-[50%] bg-red-500 lg:text-lg p-2 text-white">
              <FaCss3Alt />
            </span>
            CSS
          </p>
          <p className="flex gap-2 items-center text-base font-medium min-w-[50%] justify-start p-2">
            <span className="rounded-[50%] bg-red-500 lg:text-lg p-2 text-white">
              <IoLogoJavascript />
            </span>
            JavaScript
          </p>
          <p className="flex gap-2 items-center text-base font-medium min-w-[50%] justify-start p-2">
            <span className="rounded-[50%] bg-red-500 lg:text-lg p-2 text-white">
              <RiTailwindCssFill />
            </span>
            Tailwind CSS
          </p>{" "}
          <p className="flex gap-2 items-center text-base font-medium min-w-[50%] justify-start p-2">
            <span className="rounded-[50%] bg-red-500 lg:text-lg p-2 text-white">
              <FaReact />
            </span>
            ReactJS
          </p>{" "}
          <p className="flex gap-2 items-center text-base font-medium min-w-[50%] justify-start p-2">
            <span className="rounded-[50%] bg-red-500 lg:text-lg p-2 text-white">
              <RiNextjsFill />
            </span>
            Next.js
          </p>
        </div>
      </div>
    </div>
  );

  const BackendTechnologies = (
    <div className="max-w-sm mx-auto ">
      <div className="bg-white shadow-md lg:min-h-[222px] rounded-lg text-center p-[0.6rem] lg:p-4 border-b-4 border-red-500">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
          Backend Skills
        </h2>
        <div className="flex flex-wrap justify-start  ">
          <p className="flex gap-2 items-center text-base font-medium min-w-[50%] justify-start p-2">
            <span className="rounded-[50%] bg-red-500 lg:text-lg p-2 text-white">
              <RiNodejsLine />
            </span>
            Node.js
          </p>
          <p className="flex gap-2 items-center text-base font-medium min-w-[50%] justify-start p-2">
            <span className="rounded-[50%] bg-red-500 lg:text-lg p-2 text-white">
              <SiExpress />
            </span>
            Express.js
          </p>
          <p className="flex gap-2 items-center text-base font-medium min-w-[50%] justify-start p-2">
            <span className="rounded-[50%] bg-red-500 lg:text-lg p-2 text-white">
              <SiPython />
            </span>
            Python
          </p>
        </div>
      </div>
    </div>
  );

  const DataBaseSkills = (
    <div className="max-w-sm mx-auto ">
      <div className="bg-white shadow-md rounded-lg text-center p-[0.6rem] lg:p-4 border-b-4 border-red-500">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
          DataBase Skills
        </h2>
        <div className="flex flex-wrap justify-start">
          <p className="flex gap-2 items-center text-base font-medium min-w-[50%] justify-start p-2">
            <span className="rounded-[50%] bg-red-500 lg:text-lg p-2 text-white">
              <SiSqlite />
            </span>
            SQLite
          </p>
          <p className="flex gap-2 items-center text-base font-medium min-w-[50%] justify-start p-2">
            <span className="rounded-[50%] bg-red-500 lg:text-lg p-2 text-white">
              <SiMongodb />
            </span>
            MongoDB
          </p>
          <p className="flex gap-2 items-center text-base font-medium min-w-[50%] justify-start p-2">
            <span className="rounded-[50%] bg-red-500 lg:text-lg p-2 text-white">
              <SiAppwrite />
            </span>
            Appwrite
          </p>
          <p className="flex gap-2 items-center text-base font-medium min-w-[50%] justify-start p-2">
            <span className="rounded-[50%] bg-red-500 lg:text-lg p-2 text-white">
              <IoLogoFirebase />
            </span>
            Firebase
          </p>
        </div>
      </div>
    </div>
  );
  return (
    <div className="flex flex-row gap-y-9 flex-wrap lg:w-[80%] m-auto">
      {frontendTechnologies}
      {BackendTechnologies}
      {DataBaseSkills}
    </div>
  );
};

export default Skills;
