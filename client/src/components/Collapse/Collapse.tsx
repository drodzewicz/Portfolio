import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Collapse.scss";

type Props = { show: boolean; className?: string };

const Collapse: React.FC<Props> = ({ show, children, className = "" }) => {
  return (
    <AnimatePresence initial={false}>
      {show && (
        <motion.section
          className={`collapse__content ${className}`}
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { height: "auto" },
            collapsed: { height: 0 },
          }}
          transition={{ duration: 0.4 }}>
          {children}
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Collapse;
