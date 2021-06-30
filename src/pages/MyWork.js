import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import pokemonGif from "../img/pokemonGif.gif";
import movie from "../img/movie.png";
import budgetGif from "../img/BudgetGif.gif";
import tech1 from "../img/tech1.png";
import workout1 from "../img/workout1.png";
//Animation
import { motion } from "framer-motion";
import {
  pageAnimation,
  fadeAnim,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation";
//Scroll
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const MyWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();
  return (
    <StyledWork
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <StyledProject>
        <motion.h2 variants={fadeAnim}>Pokemon TCG APP</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/pokemon-TCG-app">
          <Hide>
            <motion.img
              variants={photoAnim}
              src={pokemonGif}
              alt="pokemonGif"
            />
          </Hide>
        </Link>
      </StyledProject>
      <StyledProject
        ref={element}
        variants={fadeAnim}
        animate={controls}
        initial="hidden"
      >
        <h2>Movie Soundtrack Generator</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/movie-soundtrack-generator">
          <img src={movie} alt="movie" />
        </Link>
      </StyledProject>
      <StyledProject
        ref={element2}
        variants={fadeAnim}
        animate={controls2}
        initial="hidden"
      >
        <h2>Budget Tracker</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/budget-tracker">
          <img src={budgetGif} alt="budgetGif" />
        </Link>
      </StyledProject>
      <StyledProject
        ref={element3}
        variants={fadeAnim}
        animate={controls3}
        initial="hidden"
      >
        <h2>Fitness Tracker</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/fitness-tracker">
          <img src={workout1} alt="workout1" />
        </Link>
      </StyledProject>
      <StyledProject
        ref={element4}
        variants={fadeAnim}
        animate={controls4}
        initial="hidden"
      >
        <h2>Tech Blog</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/tech-blog">
          <img src={tech1} alt="tech1" />
        </Link>
      </StyledProject>
      <ScrollTop />
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
    @media (max-width: 1300px) {
      font-size: 3rem;
    }
  }
`;

const StyledProject = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 20%;
    object-fit: contain;
  }
  img:hover {
    box-shadow: inset 0px 0px 50px #23d997, 0 0 35px #23d997;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border-radius: 30px;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #f4ccf4;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default MyWork;