import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
// import pokemonGif from "../img/pokemonGif.gif";
// import pokemonHome from "../img/pokemonHome.png";
import movie from "../img/movie.png";
import budgetGif from "../img/BudgetGif.gif";
import tech1 from "../img/tech1.png";
import workout1 from "../img/workout1.png";
// import mars1 from "../img/mars1.png";
import musicPlayerLibrary from "../img/music2.png";
import cliffHome from "../img/cliffHome.png";
import mindump2 from "../img/mindump2.png";
import martin1 from "../img/martin-site.png";
import glenn1 from "../img/glenn1.png";
import quoteQuiz from "../img/quote-quiz.png";
import eCommerce1 from "../img/eCommerce1.png";
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
  const [element5, controls5] = useScroll();
  const [element6, controls6] = useScroll();
  const [element7, controls7] = useScroll();
  const [element8, controls8] = useScroll();
  const [element9, controls9] = useScroll();
  const [element10, controls10] = useScroll();
  return (
    <StyledWork
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider} />
        <Frame2 variants={slider} />
        <Frame3 variants={slider} />
        <Frame4 variants={slider} />
      </motion.div>
      {/* <StyledProject>
				<motion.h2 variants={fadeAnim}>Mars Travel Agency</motion.h2>
				<motion.div variants={lineAnim} className="line" />
				<Link to="/work/MTA">
					<Hide>
						<motion.img variants={photoAnim} src={mars1} alt="mars1" />
					</Hide>
				</Link>
			</StyledProject> */}
      <StyledProject>
        <motion.h2 variants={fadeAnim}>Social Media App</motion.h2>
        <motion.div variants={lineAnim} className="line" />
        <Link to="/work/mindump">
          <Hide>
            <motion.img
              variants={photoAnim}
              src={mindump2}
              alt="mindump app image"
            />
          </Hide>
        </Link>
      </StyledProject>
      <StyledProject
        ref={element10}
        variants={fadeAnim}
        animate={controls10}
        initial="hidden"
      >
        <h2>E-Commerce App</h2>
        <motion.div variants={lineAnim} className="line" />
        <Link to="/work/e-commerce-app">
          <img src={eCommerce1} alt="e-commerce" />
        </Link>
      </StyledProject>
      <StyledProject
        ref={element8}
        variants={fadeAnim}
        animate={controls8}
        initial="hidden"
      >
        <h2>Professional Site</h2>
        <motion.div variants={lineAnim} className="line" />
        <Link to="/work/martin">
          <img src={martin1} alt="..." />
        </Link>
      </StyledProject>
      <StyledProject
        ref={element9}
        variants={fadeAnim}
        animate={controls9}
        initial="hidden"
      >
        <h2>Professional Site</h2>
        <motion.div variants={lineAnim} className="line" />
        <Link to="/work/glenn">
          <img src={glenn1} alt="..." />
        </Link>
      </StyledProject>
      {/* <StyledProject
        ref={element9}
        variants={fadeAnim}
        animate={controls9}
        initial="hidden"
      >
        <h2>Pokemon APP</h2>
        <motion.div variants={lineAnim} className="line" />
        <Link to="/work/pokemon-TCG-app">
          <img src={pokemonHome} alt="pokemonGif" />
        </Link>
      </StyledProject> */}
      <StyledProject
        ref={element}
        variants={fadeAnim}
        animate={controls}
        initial="hidden"
      >
        <h2> Music Website </h2>
        <motion.div variants={lineAnim} className="line" />
        <Link to="/work/cliff-music">
          <img src={cliffHome} alt="cliffHome" />
        </Link>
      </StyledProject>
      <StyledProject
        ref={element2}
        variants={fadeAnim}
        animate={controls2}
        initial="hidden"
      >
        <h2>Music Player</h2>
        <motion.div variants={lineAnim} className="line" />
        <Link to="/work/music-player-app">
          <img src={musicPlayerLibrary} alt="musicPlayerLibrary" />
        </Link>
      </StyledProject>
      <StyledProject
        ref={element7}
        variants={fadeAnim}
        animate={controls7}
        initial="hidden"
      >
        <h2>Quote Quiz</h2>
        <motion.div variants={lineAnim} className="line" />
        <Link to="/work/qoute-quiz">
          <img src={quoteQuiz} alt="quoteQuiz" />
        </Link>
      </StyledProject>
      <StyledProject
        ref={element3}
        variants={fadeAnim}
        animate={controls3}
        initial="hidden"
      >
        <h2>MSG App</h2>
        <motion.div variants={lineAnim} className="line" />
        <Link to="/work/movie-soundtrack-generator">
          <img src={movie} alt="movie" />
        </Link>
      </StyledProject>
      <StyledProject
        ref={element4}
        variants={fadeAnim}
        animate={controls4}
        initial="hidden"
      >
        <h2>Budget Tracker</h2>
        <motion.div variants={lineAnim} className="line" />
        <Link to="/work/budget-tracker">
          <img src={budgetGif} alt="budgetGif" />
        </Link>
      </StyledProject>
      <StyledProject
        ref={element5}
        variants={fadeAnim}
        animate={controls5}
        initial="hidden"
      >
        <h2>Fitness Tracker</h2>
        <motion.div variants={lineAnim} className="line" />
        <Link to="/work/fitness-tracker">
          <img src={workout1} alt="workout1" />
        </Link>
      </StyledProject>
      <StyledProject
        ref={element6}
        variants={fadeAnim}
        animate={controls6}
        initial="hidden"
      >
        <h2>Tech Blog</h2>
        <motion.div variants={lineAnim} className="line" />
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
