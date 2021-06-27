import React from "react";
//style
import styled from "styled-components";
import { StyledAbout } from "../styles";
import Toggle from "./Toggle";
//animation
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
  return (
    <StyledFaq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="What is your favorite language and why?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sapiente, quisquam.
            </p>
          </div>
        </Toggle>
        <Toggle title="What are the Success Factors for Successive Integration?">
          <div className="answer">
            <ol>
              <li>Maintain a code repository</li>
              <li>Automate the build</li>
              <li>Make the build self-testing</li>
              <li>Everyone commits to the baseline every day</li>
              <li>Every commit (to baseline) should be built</li>
              <li>Try to keep the build fast</li>
              <li>Test in a clone of the production environment</li>
              <li>Make it easy to get the latest deliverables</li>
              <li>Automate deployment</li>
            </ol>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Expedita, necessitatibus!
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sapiente, quisquam.
            </p>
          </div>
        </Toggle>
        <Toggle title="What products do you offer?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sapiente, quisquam.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </StyledFaq>
  );
};

const StyledFaq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
    li {
      padding: 0.5rem 1rem;
    }
    ol {
      padding: 0.5rem 3rem;
    }
  }
`;

export default FaqSection;
