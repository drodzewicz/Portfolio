import React from "react";
import { motion } from "framer-motion";
import "./NavigationDots.scss";
import { INavigationDotProps } from "./types";

const NavigationDot: React.FC<INavigationDotProps> = ({ name, icon, active }) => {
  const activeClass = active === name ? "app__navigation-dot--active" : "";
  const IconComponent = icon;
  return (
    <motion.a href={`#${name}`} className={`app__navigation-dot ${activeClass}`}>
      <IconComponent />
    </motion.a>
  );
};

export default NavigationDot;
