import React from "react";
//Animation
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
//Scroll
import ScrollTop from "../components/ScrollTop";

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
            <h2>Get In Touch!</h2>
          </motion.div>
        </Hide>
      </Title>
      <div>
        <Hide>
          <SocialStyle variants={titleAnim}>
            <Circle />
            <h2>Linkden</h2>
          </SocialStyle>
        </Hide>
        <Hide>
          <SocialStyle variants={titleAnim}>
            <Circle />
            <h2>Email</h2>
          </SocialStyle>
        </Hide>
        <Hide>
          <SocialStyle variants={titleAnim}>
            <Circle />
            <h2>GitHub</h2>
          </SocialStyle>
        </Hide>
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
  @media (max-width: 1300px) {
    margin-top: 5rem;
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

const SocialStyle = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;
