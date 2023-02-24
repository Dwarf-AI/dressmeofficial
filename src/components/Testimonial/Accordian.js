import React, { useState } from "react";
import { motion } from "framer-motion";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <motion.div
        className="accordion-item"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div className="border-line"></div>
          <div>{title}</div>
          <div>{isActive ? "-" : "+"}</div>
        </div>
        {isActive && <div className="accordion-content">{content}</div>}
      </motion.div>
    </>
  );
};

export default Accordion;
