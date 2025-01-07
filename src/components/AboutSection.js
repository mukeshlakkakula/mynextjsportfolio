import React from "react";

const AboutSection = (theme) => {
  if (theme) {
    console.log("theme", theme.theme);
  }
  return (
    <div className="min-h-screen w-full ">
      <h1>AboutSection</h1>
    </div>
  );
};

export default AboutSection;
