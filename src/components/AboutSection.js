import React from "react";
import home1 from "../img/home1.png";
//Styled
// import styled from "styled-components";
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from "../styles";
//Framer motion
import { motion } from "framer-motion";
//Animation
import { fadeAnim, titleAnim, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div>
          <StyledHide>
            <motion.h2 variants={titleAnim}>Hello, my name is</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>
              Clifford <span>Morin</span>
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>and I am a</motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fadeAnim}>
          Contact us for sny photography or videography idea that you have.. We
          have pro's with amazing skills.
        </motion.p>
        <motion.button variants={fadeAnim}>Contact us</motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img variants={photoAnim} src={home1} alt="guy with camera" />
      </StyledImage>
      <Wave />
    </StyledAbout>
  );
};

//Styled Components

export default AboutSection;
