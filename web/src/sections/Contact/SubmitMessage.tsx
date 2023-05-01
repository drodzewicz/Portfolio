import EmailImage from "assets/images/email.png";
import { motion } from "framer-motion";
import React from "react";

const SubmitMessage: React.FC = () => (
  <div className="app__submit-message">
    <motion.img
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="app__submit-message__img"
      src={EmailImage}
      alt="email"
    />
    <motion.h3
      className="head-text"
      initial={{ translateY: -60, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <strong>Thank you</strong> for getting in touch!
    </motion.h3>
  </div>
);

export default SubmitMessage;
