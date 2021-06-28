import React from "react";
//Page Components
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection.js";
import FaqSection from "../components/FaqSection.js";
import AboutMeSection from "../components/AboutMeSection";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
//Scroll
import ScrollTop from "../components/ScrollTop";

const About = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <AboutMeSection />
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
};

export default About;
