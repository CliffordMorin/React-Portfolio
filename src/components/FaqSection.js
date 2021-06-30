import React from "react";
//style
import styled from "styled-components";
import { StyledAbout } from "../styles";
import Toggle from "./Toggle";
//animation
import { AnimateSharedLayout } from "framer-motion";
//scroll
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledFaq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Common Interview Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="What is your favorite language and why?">
          <div className="answer">
            <p>
              I personally am 100% open to learning any language. I enjoy the
              process of learning new languages. I believe this is something I
              learned from studying music. Similar to coding, music also has
              many different language's, and if you only focus on one language
              it really puts a barrier on you and what kind of projects you can
              create.
            </p>
            <p>
              By nature language's are constantly changing therefore a
              web-developer has to be constantly aware and studying new
              language's. Although, Currently I am having a ton of fun studying
              and creating applications with React and Javascript.
            </p>
          </div>
        </Toggle>
        <Toggle title="What are your preferences on location for working?">
          <div className="answer">
            <p>
              I currently live in Phildelphia, PA. I would prefer a remote job.
              Although, I am open to working in or around Philadelphia PA,
              Princeton NJ or New York City area for work.
            </p>
          </div>
        </Toggle>
        <Toggle title="What are the most important qualities that a Full Stack Developer must have?">
          <div className="answer">
            <p>I believe a Full Stack Developer should......</p>
            <ul>
              <li>
                Be open to learning any language or technology that is needed to
                complete a project.
              </li>
              <li>Be an independent problem solver.</li>
              <li>Have good social skills in order to work with a team.</li>
              <li>Have experience working with a team.</li>
              <li>Know how to use google and never give up.</li>
              <li>Have efficient typing skills.</li>
              <li>
                Have another activity/ passion that they enjoy doing, in order
                to keep a fresh and healthy mind when coding.
              </li>
            </ul>
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
    h4 {
      color: #22c68b;
    }
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
      font-size: 1.5rem;
    }
    li {
      padding: 0.5rem 1rem;
      font-size: 1.5rem;
    }
    ol {
      padding: 0.5rem 3rem;
    }
  }
`;

export default FaqSection;
