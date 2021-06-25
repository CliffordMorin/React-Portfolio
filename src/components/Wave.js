import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wave = () => {
  return (
    <WaveSvg
      width="1440"
      height="800"
      viewBox="0 0 1440 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{ pathLength: 1, pathOffset: 0 }}
        transition={{ duration: 1 }}
        d="M5 391C5 391 70 553 155.5 553C350.7 526.2 334.5 341.5 469.5 427.5C604.5 513.5 422 140.5 604.5 262.5C787 384.5 715.5 166 775.5 153.5C959.5 91.1 1122.75 84.6427 1257.5 218.5C1355.59 315.94 1373.5 524.5 1373.5 553C1373.5 581.5 1385.75 791.276 1291 886C1166.89 1010.08 990.503 998.531 842 905C729.282 834.007 660.546 749.711 660 616.5C659.637 527.965 667.724 456.519 739 404C810.014 351.675 899.137 336.155 1000.5 358C1091.91 377.701 1134.73 421.634 1203.5 485C1291.52 566.1 1260.37 779.053 1373.5 740C1401.4 730.368 1437 699 1437 699"
        stroke="#23D997"
        stroke-width="50"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </WaveSvg>
  );
};

const WaveSvg = styled.svg`
  position: absolute;
  left: 0;
  z-index: 1;
`;

export default Wave;
