import { motion } from "framer-motion";
import React from "react";

import "./Overlay.scss";
import { IOverlayProps } from "./types";

const Overlay: React.FC<IOverlayProps> = ({ onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      transition={{ duration: 0.2, delay: 0.15 }}
      style={{ pointerEvents: "auto" }}
      className="overlay"
      onClick={onClick}
    />
  );
};

export default Overlay;
