import { motion } from "framer-motion";
import React from "react";
import ReactTooltip from "react-tooltip";

import { INavigationDotProps } from "./types";

const NavigationDot: React.FC<INavigationDotProps> = ({
  name,
  icon,
  active,
  index,
}) => {
  const activeClass = active === name ? "app__navigation-dot--active" : "";
  const IconComponent = icon;
  return (
    <>
      <motion.a
        data-tip
        data-for={`${name}_nav-got`}
        transition={{ delay: 0.25 + index * 0.12 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        href={`#${name}`}
        className={`app__navigation-dot ${activeClass}`}
      >
        <IconComponent />
      </motion.a>
      <ReactTooltip id={`${name}_nav-got`} effect="solid" place="left" delayShow={500}>
        {name}
      </ReactTooltip>
    </>
  );
};

export default NavigationDot;
