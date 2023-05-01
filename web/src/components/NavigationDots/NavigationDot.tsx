import { motion } from "framer-motion";
import React from "react";

import { INavigationDotProps } from "./types";

const NavigationDot: React.FC<INavigationDotProps> = ({ name, label, icon, active, index }) => {
  const activeClass = active === name ? "app__navigation-dot--active" : "";
  const IconComponent = icon;
  return (
    <motion.a
      data-tooltip-id="main-tooltip"
      data-tooltip-delay-show={500}
      data-tooltip-content={label}
      data-tooltip-place="left"
      transition={{ delay: 0.25 + index * 0.12 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      href={`#${name}`}
      className={`app__navigation-dot ${activeClass}`}>
      <IconComponent />
    </motion.a>
  );
};

export default NavigationDot;
