import React from "react";
import home1 from "../img/home1.png";
//Styled
// import styled from "styled-components";
import { StyledAbout, StyledDescription, StyledImage, StyledHide } from "../styles";
//Framer motion
import {motion} from 'framer-motion';
//Animation
import {containerAnim} from "../animation";
import {titleAnim} from "../animation";


const AboutSection = () => {

  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div 
          variants={containerAnim} 
          initial="hidden" 
          animate="show" 
          className="title"
        >
          <StyledHide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>
              true.
            </motion.h2>
          </StyledHide>
        </motion.div>
        <p>
          Contact us for sny photography or videography idea that you have.. We
          have pro's with amazing skills.
        </p>
        <button>Contact us</button>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt="guy with camera" />
      </StyledImage>
    </StyledAbout>
  );
};

//Styled Components


export default AboutSection;
