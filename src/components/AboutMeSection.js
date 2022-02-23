import React from "react";
//Import Icons
import home2 from "../img/home2.jpeg";
import Resume from "../Resume/resume-2022.pdf";
//Style
import styled from "styled-components";
import { StyledAbout, StyledImage, StyledDescription } from "../styles";
//Scroll
import { useScroll } from "./useScroll";
import { scrollReveal, fadeAnim, lineAnim } from "../animation";
//Animation
import { motion } from "framer-motion";

const AboutMeSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledAboutMe
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <StyledDescription>
        <h2>
          About <span> Me </span>
        </h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <StyledCards>
          <p>
            Hello! I am Clifford Morin, and welcome to my portfolio webpage! I
            am currently attending a six month coding bootcamp at Rutgers
            University in order to learn how to become a full-stack
            web-developer and designer. Through recieving a Bachelor's and a
            Master's in Jazz Performance for Saxophone, as well as having a
            successful full time performing career, I have obtained a certain
            skill set that I can apply to my software engineering skills. In my
            career I hope to be able to combine both of my passions to work with
            and create new forms of music software. When I am not coding you can
            find me on bandstand's across the world performing with world class
            musicians!
          </p>
          <a
            href={Resume}
            target="_blank"
            download="resume-2022"
            rel="noreferrer"
          >
            <motion.button variants={fadeAnim}>Download Resume</motion.button>
          </a>
        </StyledCards>
      </StyledDescription>
      <StyledImage>
        <img src={home2} alt="home 2" />
      </StyledImage>
    </StyledAboutMe>
  );
};

const StyledAboutMe = styled(StyledAbout)`
  p {
    width: 90%;
    padding: 0rem 0rem 4rem 0rem;
    font-size: 2rem;
  }
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
`;
const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

export default AboutMeSection;
