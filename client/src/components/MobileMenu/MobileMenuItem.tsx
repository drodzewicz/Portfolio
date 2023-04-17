import { motion } from "framer-motion";
import React from "react";

import { IMobileMenuItemProps } from "./types";

const MobileMenuItem: React.FC<IMobileMenuItemProps> = ({
  label,
  icon,
  name,
  onClick,
  index,
}) => {
  const IconComponent = icon;
  return (
    <motion.li
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: index * 0.05 + 0.5 }}
    >
      <a className="mobile-menu__item" href={`#${name}`} onClick={onClick}>
        <IconComponent className="mobile-menu__item__icon" />
        <span className="mobile-menu__item__label">{label}</span>
      </a>
    </motion.li>
  );
};

export default MobileMenuItem;
