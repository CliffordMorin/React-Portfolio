import React from "react";
import home1 from '../img/home1.png';

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>
          Contact us for sny photography or videography idea that you have.. We
          have pro's with amazing skills.
        </p>
        <button>Contact us</button>
      </div>
      <img src={home1} alt="guy with camera" />
    </div>
  );
};

export default AboutSection;
