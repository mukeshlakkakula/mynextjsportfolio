import React, { useState, useEffect } from "react";
const Footer = (theme) => {
  const [themeAct, setActiveTheme] = useState(theme.theme);
  useEffect(() => {
    setActiveTheme(theme.theme);
  }, [theme]);
  return (
    <footer className="w-[100vw]   py-4 pb-[60px]">
      <div className="flex flex-col  border-t-2 p-4 md:flex-row items-center justify-center mx-auto text-center gap-6">
        <p className={` ${themeAct ? "text-white" : "text-black"}`}>
          Your satisfaction, is our priority.
        </p>
        <p className={` ${themeAct ? "text-white" : "text-black"}`}>
          © {new Date().getFullYear()} All Rights Reserved. Thank you for
          visiting my website.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
