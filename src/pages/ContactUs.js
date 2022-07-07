import React from "react";
//Animation
import { motion } from "framer-motion";
import { pageAnimation, titleAnim, lineAnim } from "../animation";
import styled from "styled-components";
import Wave2 from "../components/Wave2";
//Scroll
import ScrollTop from "../components/ScrollTop";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faGoogleDrive,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelopeSquare,
  faMapMarkedAlt,
  faUserAstronaut,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

//style
import "bootstrap/dist/css/bootstrap.min.css";

const ContactUs = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
      style={{ background: "white" }}
    >
      <Title>
        <Hide>
          <motion.div variants={titleAnim}>
            <h2>Get in touch</h2>
            <motion.div variants={lineAnim} className="line" />
          </motion.div>
        </Hide>
      </Title>
      <Wave2 />
      <div className="row">
        <div className="col border-right border-dark border-4">
          <Hide>
            <SocialStyle variants={titleAnim}>
              <FontAwesomeIcon
                icon={faUserAstronaut}
                size="3x"
                color="#2314d0"
              />
              <h2>Clifford Morin</h2>
            </SocialStyle>
          </Hide>

          <Hide>
            <SocialStyle variants={titleAnim}>
              <FontAwesomeIcon icon={faEnvelopeSquare} size="3x" color="Grey" />
              <a
                href="mailto:cemorin21@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Cemorin21@gmail.com</h2>
              </a>
            </SocialStyle>
          </Hide>
          <Hide>
            <SocialStyle variants={titleAnim}>
              <FontAwesomeIcon icon={faPhone} size="3x" color="#3ded0c" />
              <a href="tel:1+609-602-7201" target="_blank" rel="noreferrer">
                <h2>(609)602-7201</h2>
              </a>
            </SocialStyle>
          </Hide>

          <Hide>
            <SocialStyle variants={titleAnim}>
              <FontAwesomeIcon icon={faMapMarkedAlt} size="3x" color="Green" />
              <a
                href="https://www.google.com/maps/place/Philadelphia,+PA/@40.0026767,-75.2581132,11z/data=!3m1!4b1!4m5!3m4!1s0x89c6b7d8d4b54beb:0x89f514d88c3e58c1!8m2!3d39.9525839!4d-75.1652215"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Philadelphia, PA, USA</h2>
              </a>
            </SocialStyle>
          </Hide>
        </div>
        <div className="col border-left border-dark border-4 ">
          <Hide>
            <SocialStyle variants={titleAnim}>
              <FontAwesomeIcon icon={faLinkedin} size="3x" color="blue" />

              <a
                className="linkedin"
                href="https://www.linkedin.com/in/morin-clifford-129888a9"
                target="_blank"
                rel="noreferrer"
              >
                <h2>Linkedin</h2>
              </a>
            </SocialStyle>
          </Hide>

          <Hide>
            <SocialStyle variants={titleAnim}>
              <FontAwesomeIcon icon={faGithub} size="3x" color="black" />
              <a
                className="github"
                href="https://github.com/CliffordMorin"
                target="_blank"
                rel="noreferrer"
              >
                <h2>GitHub</h2>
              </a>
            </SocialStyle>
          </Hide>
          <Hide>
            <SocialStyle variants={titleAnim}>
              <FontAwesomeIcon icon={faGoogleDrive} size="3x" color="Green" />
              <a
                href="https://docs.google.com/document/d/1SGbLzTigEKFuGwJoe0QEC9VKz_F7J1aKcZ1hB2X7SsY/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <h2>My Resume</h2>
              </a>
            </SocialStyle>
          </Hide>
        </div>
      </div>

      <ScrollTop />
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
  color: black;
  margin-bottom: 4rem;
  text-align: center;
  font-family: "Lobster";
  @media (max-width: 1300px) {
    margin-top: 5rem;
    padding: 2rem;
    font-size: 1rem;
  }
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

// const Circle = styled.div`
// 	border-radius: 50%;
// 	width: 3rem;
// 	height: 3rem;
// 	background: #353535;
// `;

const SocialStyle = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
    @media (max-width: 1300px) {
      font-size: 3rem;
    }
    @media (max-width: 700px) {
      font-size: 1rem;
    }
  }
  a {
    color: Black;
    z-index: 10;
  }
`;

export default ContactUs;
