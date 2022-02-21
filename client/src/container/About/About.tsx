import React, { useEffect, useState } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { images } from "constants/index";
interface AboutI {
  title: string;
  description: string;
  imageUrl: string;
}

const About = () => {
  const abouts: AboutI[] = [
    { title: "Web Development", description: "I am a good developer", imageUrl: images.about01 },
    { title: "Web Design", description: "I am a good developer", imageUrl: images.about02 },
    { title: "UI/UX", description: "I am a good developer", imageUrl: images.about03 },
  ];

  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Development</span><br />means <span>Good Buisness</span>
      </h2>
      <div className="app__profile">
        {abouts.map((about) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={`${about.title}`}>
            <img src={about.imageUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
