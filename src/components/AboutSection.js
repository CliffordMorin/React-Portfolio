import React from "react";
import home1 from "../img/home1.jpeg";
import { Link } from "react-router-dom";
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
//Typing text
import TypedHook from "../components/TypedHook";

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
            <motion.h2 variants={titleAnim}>
              and I am a <TypedHook />
            </motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fadeAnim}>
          Take a Scroll through my Portfolio Website. Go to "My Work" to see
          what my recent projects have been. Enjoy!
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fadeAnim}>Contact Me</motion.button>
        </Link>
      </StyledDescription>
      <StyledImage>
        <motion.img
          variants={photoAnim}
          src={home1}
          alt="Cliff with a saxophone"
        />
      </StyledImage>
      <Wave />
    </StyledAbout>
  );
};

//Styled Components

export default AboutSection;
