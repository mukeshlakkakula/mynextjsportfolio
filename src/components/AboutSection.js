import React from "react";
import { motion } from "framer-motion";
const AboutSection = (theme) => {
  if (theme) {
    console.log("theme", theme.theme);
  }
  return (
    <motion.div
    id="about" className="min-h-screen w-full " initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
      <h1>AboutSection</h1>
      </motion.div>
  );
};

export default AboutSection;
