import { motion } from "framer-motion";
import React, { useState } from "react";
//Animation
import { lineAnim } from "../animation";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <motion.div variants={lineAnim} className="faq-line"></motion.div>
    </motion.div>
  );
};

export default Toggle;
