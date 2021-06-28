import Typed from "typed.js";
import React from "react";
import styled from "styled-components";

// typing text animation script
// const typed = new Typed(".typing", {
//   strings: [
//     "Professional Musician",
//     "Saxophonist",
//     "Multi-Instrumentalist",
//     "Web-Developer",
//     "Web-Designer",
//   ],
//   typeSpeed: 100,
//   backSpeed: 60,
//   loop: true,
// });

const TypedHook = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        "Professional Musician",
        "Saxophonist",
        "Multi-Instrumentalist",
        "Web-Developer",
        "Web-Designer",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <StyledType className="type-wrap">
      <span style={{ whiteSpace: "pre" }} ref={el} />
    </StyledType>
  );
};

const StyledType = styled.div`
  @media (max-width: 1300px) {
    font-size: 2.5rem;
  }
`;

export default TypedHook;
