import React from "react";
//Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faBootstrap,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

import home3 from "../img/home3.png";
//Style
import styled from "styled-components";
import { StyledAbout, StyledDescription, StyledImage } from "../styles";
//Scroll
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";
//TypedHook2
import TypedHook2 from "../components/TypedHook2";
//Animations
import { motion } from "framer-motion";
import { lineAnim } from "../animation";

const SkillsSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledSkills
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <StyledDescription>
        <h2>
          My <span> Skills </span>
        </h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <h3>
          Some of my skills include... <TypedHook2 />
        </h3>
        <StyledCards>
          <StyledCard>
            <div className="icon">
              <FontAwesomeIcon icon={faHtml5} color="#ffa200f7" size="7x" />
            </div>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <FontAwesomeIcon
                icon={faCss3Alt}
                color="rgb(0, 0, 255)"
                size="7x"
              />
            </div>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <FontAwesomeIcon
                icon={faJsSquare}
                color="rgb(255, 234, 0)"
                size="7x"
              />
            </div>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <FontAwesomeIcon
                icon={faBootstrap}
                color="rgb(149, 0, 255)"
                size="7x"
              />
            </div>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <FontAwesomeIcon icon={faNode} color="rgb(0, 255, 8)" size="7x" />
            </div>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <FontAwesomeIcon
                icon={faReact}
                color="rgb(0, 255, 251)"
                size="7x"
                spin
              />
            </div>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
      <StyledImage>
        <img src={home3} alt="home 2" />
      </StyledImage>
    </StyledSkills>
  );
};

const StyledSkills = styled(StyledAbout)`
  h3 {
    font-size: 2rem;
  }
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 5rem;
  }
`;
const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
    text-align: center;
  }
`;
const StyledCard = styled.div`
  flex-basis: 15rem;
  .icon {
    display: flex;
    align-items: center;
    padding-bottom: 3rem;
    @media (max-width: 1300px) {
      justify-content: center;
    }
  }
`;

export default SkillsSection;
