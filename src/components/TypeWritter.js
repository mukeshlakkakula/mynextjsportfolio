import React, { useState, useEffect, useMemo } from "react";
import { FaDownload } from "react-icons/fa6";


const ProfileTypewriter = (theme) => {
    const [newTheme, setNewTheme] = useState(theme.theme.theme);
    const [displayedText, setDisplayedText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = 150;
    const deletingSpeed = 50;

    // Memoize the roles array
    const roles = useMemo(() => ["Frontend Developer", "Backend Developer", "Fullstack Developer"], []);

    useEffect(() => {
        const handleTypingEffect = () => {
            let currentText = roles[roleIndex];
            if (isDeleting) {
                if (displayedText.length > 0) {
                    setDisplayedText(displayedText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
                }
            } else {
                if (displayedText.length < currentText.length) {
                    setDisplayedText(currentText.slice(0, displayedText.length + 1));
                } else {
                    setIsDeleting(true);
                }
            }
        };

        const interval = setInterval(handleTypingEffect, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearInterval(interval);
    }, [displayedText, isDeleting, roleIndex, roles]); // Keep 'roles' in the dependency array

    useEffect(() => {
        setNewTheme(theme.theme.theme);
    }, [theme]);

    console.log("the", theme, newTheme);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="flex flex-col gap-3 lg:gap-6 justify-between">

            <p
                className={`${!newTheme ? "text-black" : "text-white"
                    } text-2xl font-medium `}
            >
                Hello, I am Mukesh
            </p>
            <h2 className={`${!newTheme ? "text-black" : "text-white"
                }  font-medium text-2xl`}>I&apos;m a {" "}
                <span className="text-red-500 font-bold">
                    {displayedText}
                </span>
            </h2>
            <p
                className={`${!newTheme ? "text-black" : "text-white"
                    } font-medium  opacity-85 text-sm`}
            >
                I am  skilled  with a proven track record of delivering high-quality web applications tailored to client needs.
                I specialize in building scalable and user-centric solutions.
                I have successfully led website redevelopment projects and implemented advanced features like Server-Side Rendering (SSR), secure authentication using JWT, and real-time updates.
            </p>
            <div className="flex gap-3">
                <button onClick={() => { scrollToSection("contact") }} className={`${!newTheme ? "text-black" : "text-white"
                    } bg-red-500 hover:bg-transparent font-medium text-base lg:text-lg font-bold border-2 rounded-full pl-6 pr-6 pt-2 pb-2`}>Hire Me
                </button>
                <a type="button"
                    download={true}
                    href={`/MukeshResume.pdf`}

                    className={`${!newTheme ? "text-black" : "text-white"
                        } font-medium flex items-center gap-1 text-base lg:text-lg font-bold border-2 rounded-full pl-6 pr-6 pt-1 pb-1 hover:bg-red-500`}
                >
                    Resume <FaDownload />
                </a>
            </div>
        </div>
    );
};

export default ProfileTypewriter;
