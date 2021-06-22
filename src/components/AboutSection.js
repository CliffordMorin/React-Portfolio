import React from "react";
import home1 from "../img/home1.png";
//Styled
// import styled from "styled-components";
import { StyledAbout, StyledDescription, StyledImage, StyledHide } from "../styles";


const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <StyledHide>
            <h2>We work to make</h2>
          </StyledHide>
          <StyledHide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </StyledHide>
          <StyledHide>
            <h2>true.</h2>
          </StyledHide>
        </div>
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
