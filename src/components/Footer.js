import React from "react";

const Footer = () => {
  return (
    <footer className="w-[100vw] bg-gray-800 text-white py-4 pb-[80px]">
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto text-center gap-6">
        <p className="text-sm">Your satisfaction, our priority.</p>
        <p className="text-xs ">
          © {new Date().getFullYear()} All Rights Reserved. Thank you for
          visiting my website.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
