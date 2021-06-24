import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wave = () => {
  return (
    <WaveSvg
      viewBox="0 0 1440 461"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d)">
        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 1 }}
          d="M0 321.649C14.9517 329.231 28.9182 338.454 44.0929 345.995C55.3904 351.608 66.7951 354.388 78.5688 359.069C102.289 368.498 128.813 372.181 153.69 377.643C177.279 382.823 202.048 385.443 226.089 387.832C316.092 396.777 409.334 396.233 499.628 389.094C540.077 385.897 577.567 375.816 617.119 368.356C645.975 362.913 675.546 357.63 701.585 343.47C750.303 316.977 796.359 286.06 827.24 239.597C840.429 219.754 857.361 195.433 857.361 170.619C857.361 147.38 854.989 124.728 854.095 101.642C853.771 93.273 847.483 89.1816 843.662 82.2556C837.394 70.897 834.408 58.19 824.518 49.3446C812.678 38.7543 801.584 30.2386 787.23 23.106C775.839 17.4454 762.515 16.5428 750.123 14.9008C725.994 11.7033 701.567 5.62439 677.179 5.16273C661.116 4.85865 645.743 4.56541 630.274 8.40875C616.679 11.7866 600.755 24.852 591.262 34.2867C584.066 41.4376 580.429 49.4393 574.477 57.4597C565.573 69.4594 557.028 82.8491 551.977 96.9529C539.357 132.192 526.625 172.717 531.655 210.563C533.355 223.355 535.25 237.571 540.364 249.516C550.33 272.791 558.652 297.822 573.026 318.854C581.595 331.393 588.453 343.961 598.611 355.372C610.403 368.621 620.725 379.59 634.901 391.078C692.165 437.483 761.279 448.244 833.682 448.244C885.228 448.244 937.264 450.355 988.733 447.523C1015.23 446.065 1042.16 446.737 1068.57 444.637C1123.6 440.262 1180.67 427.432 1228.88 399.554C1265.16 378.578 1303.79 359.415 1334.76 330.756C1349.06 317.529 1357.83 300.601 1368.51 284.681C1388.07 255.529 1409.88 228.024 1426.85 196.768C1431.84 187.58 1439.44 177.644 1442 167.464"
          stroke="#23D997"
          stroke-opacity="0.3"
          stroke-width="15"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="-8.00085"
          y="0.99884"
          width="1458"
          height="460.001"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </WaveSvg>
  );
};

const WaveSvg = styled.svg`
    position: absolute;
    left: 0;
    z-index: 1;
`

export default Wave;
