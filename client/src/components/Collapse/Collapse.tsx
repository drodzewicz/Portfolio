import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import "./Collapse.scss";

type Props = { show: boolean; className?: string };

// const Collapse: React.FC<Props> = ({ show, children, className = "" }) => {
//   return (
//     <AnimatePresence initial={false}>
//       {show && (
//         <motion.section
//           className={`collapse__content ${className}`}
//           key="content"
//           initial="collapsed"
//           animate="open"
//           exit="collapsed"
//           variants={{
//             open: { height: "auto" },
//             collapsed: { height: 0 },
//           }}
//           transition={{ duration: 0.4 }}
//         >
//           {children}
//         </motion.section>
//       )}
//     </AnimatePresence>
//   );
// };

const Collapse: React.FC<Props> = ({ show, children, className = "" }) => {
  return (
    <section
      className={`collapse__content ${className} ${
        show ? "collapse__content--show" : ""
      }`}
    >
      {children}
    </section>
  );
};

export default Collapse;
