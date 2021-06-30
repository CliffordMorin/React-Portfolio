import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ProjectState } from "../projectState";
//Animation
import { motion } from "framer-motion";
import { pageAnimation, lineAnim } from "../animation";
//Scroll
import ScrollTop from "../components/ScrollTop";

const ProjectDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [projects, setProjects] = useState(ProjectState);
  const [project, setProject] = useState(null);

  //useEffect
  useEffect(() => {
    const currentProject = projects.filter(
      (stateProject) => stateProject.url === url
    );
    setProject(currentProject[0]);
  }, [projects, url]);

  return (
    <>
      {project && (
        <StyledDetails
          variants={pageAnimation}
          exit="exit"
          initial="hidden"
          animate="show"
        >
          <StyledHeadline>
            <h2>{project.title}</h2>
            <motion.div variants={lineAnim} className="line"></motion.div>
            <img src={project.mainImg} alt={project.title} />
          </StyledHeadline>
          <StyledBlurbs>
            {project.blurbs.map((blurb) => (
              <Blurb
                title={blurb.title}
                description={blurb.description}
                key={blurb.title}
              />
            ))}
          </StyledBlurbs>
          <ImageDisplay>
            <img src={project.secondaryImg} alt="project" />
          </ImageDisplay>
          <ScrollTop />
        </StyledDetails>
      )}
    </>
  );
};

const StyledDetails = styled(motion.div)`
  color: white;
  .line {
    width: 75%;
    background: #23d997;
    height: 0.5rem;
    margin: 2rem 0rem;
  }
`;
const StyledHeadline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  @media (max-width: 1300px) {
    min-height: 0;
    padding-top: 20%;
    height: 25%;
  }
  h2 {
    position: absolute;
    font-size: 4rem;
    font-family: "Inter";
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
    @media (max-width: 1300px) {
      font-size: 40px;
      width: 75%;
      text-align: center;
    }
  }
  img {
    width: 100%;
    height: 20%;
    object-fit: contain;
  }
`;
const StyledBlurbs = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1300px) {
    display: block;
    margin: 2rem 2rem;
  }
`;

const StyledBlurb = styled.div`
  font-size: 5rem;
  width: 25%;
  @media (max-width: 1300px) {
    width: 100%;
  }
  h3 {
    font-size: 2rem;
  }

  p {
    padding: 2rem 0rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 20%;
  img {
    width: 100%;
    height: 100vh;
    object-fit: contain;
    @media (max-width: 1300px) {
      height: 25%;
    }
  }
`;
//Blurb Component
const Blurb = ({ title, description }) => {
  return (
    <StyledBlurb>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledBlurb>
  );
};

export default ProjectDetail;
