import React from "react";
//Import Icons
import home2 from "../img/home2.png";
//Style
import styled from "styled-components";
import { StyledAbout, StyledDescription, StyledImage } from "../styles";
//Scroll
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const AboutMeSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledAboutMe
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <StyledImage>
        <img src={home2} alt="home 2" />
      </StyledImage>
      <StyledDescription>
        <h2>
          High <span> AboutMe </span>
        </h2>
        <StyledCards></StyledCards>
      </StyledDescription>
    </StyledAboutMe>
  );
};

const StyledAboutMe = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
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
