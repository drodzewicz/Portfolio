import { images } from "constants/index";
import sectionConfig, { section } from "constants/sections";
import { motion } from "framer-motion";
import React from "react";
import AppWrap from "wrapper/AppWrap/AppWrap";

import "./Cover.scss";

const Cover = () => {
  const displaySections = [section.WORK, section.EXPERIENCE, section.SKILLS];
  return (
    <div className="cover-container">
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
          <div className="app_flex cover-link-container">
            {displaySections.map((sectionName) => {
              const SectionIcon = sectionConfig[sectionName]?.icon;
              const sectionLabel = sectionConfig[sectionName]?.name;
              return (
                <motion.a
                  key={`cover-nav-${sectionName}`}
                  className="cover-link"
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
        className="cover-computer-img"
        src={images.computer}
        alt="document-item"
      />
    </div>
  );
};

export default AppWrap(Cover, section.COVER);
