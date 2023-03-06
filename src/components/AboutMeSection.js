import React from "react";
//Import Icons
import home2 from "../img/home2.jpeg";
import Resume from "../Resume/Clifford-Morin-2023.pdf";
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
            Hello, I'm Clifford Morin, a Web Developer and Software Engineer
            based in Cardiff By The Sea, California. I hold a Full Stack Web
            Development Certificate from Rutgers University and have designed
            and developed custom websites and web applications for diverse
            clients using HTML, CSS, JavaScript, React, and Node.js. In addition
            to my technical skills, I bring a unique perspective to software
            engineering from my Bachelor's and Master's degrees in Jazz
            Performance for Saxophone and successful career as a performing
            musician. I am passionate about combining my skills and interests to
            create new forms of music software. When I'm not coding, you can
            find me on stages across the world performing with world-class
            musicians. Welcome to my portfolio webpage!
          </p>
          <a
            href={Resume}
            target="_blank"
            download="CLifford-Morin-2023.pdf"
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
