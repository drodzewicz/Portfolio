import computerImage from "assets/images/computer-image.png";
import sectionConfig, { section } from "constants/sections";
import { motion } from "framer-motion";
import React from "react";
import AppWrap from "wrapper/AppWrap";

import "./Home.scss";

const Home = () => {
  const displaySections = [section.WORK, section.EXPERIENCE, section.SKILLS];
  return (
    <div className="home-container">
      <div>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="head-text">Let me introduce myself</h3>
          <h3 className="head-text">My name is</h3>
          <h2 className="head-text">
            <strong>Dariusz Rodzewicz</strong>
          </h2>
          <h3 className="head-text">Here you can find out more about my...</h3>
          <div className="app_flex home-link-container">
            {displaySections.map((sectionName) => {
              const SectionIcon = sectionConfig[sectionName]?.icon;
              const sectionLabel = sectionConfig[sectionName]?.label;
              return (
                <motion.a
                  key={`home-nav-${sectionName}`}
                  className="home-link"
                  href={`#${sectionName}`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: [0, 1] }}
                >
                  {SectionIcon && <SectionIcon className="icon" />}
                  <motion.span>{sectionLabel}</motion.span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
      <img
        className="home-computer-img"
        src={computerImage}
        alt="document-item"
      />
    </div>
  );
};

export default AppWrap(Home, section.HOME);
