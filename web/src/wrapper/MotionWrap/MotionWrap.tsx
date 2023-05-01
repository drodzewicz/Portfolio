import { motion } from "framer-motion";
import React, { ComponentType } from "react";

const MotionWrap = (Component: ComponentType) =>
  function HOC() {
    return (
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
      >
        <Component />
      </motion.div>
    );
  };

export default MotionWrap;
