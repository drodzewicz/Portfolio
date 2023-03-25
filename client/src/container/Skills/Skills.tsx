import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { urlFor, client } from "../../client";
import "./Skills.scss";
import AppWrap from "wrapper/AppWrap";
import MotionWrap from "wrapper/MotionWrap/MotionWrap";
import PageWrap from "wrapper/PageWrap";
import { section } from "constants/sections";

interface SkillI {
  name: string;
  bgColor: string;
  icon: string;
}

const Skills = () => {
  const [skills, setSkills] = useState<SkillI[]>([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(skillsQuery).then((data) => {
      setSkills([...data]);
    });
  }, []);

  return (
    <>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <div className="app__skills-item app__flex" key={skill.name}>
              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon).url()} alt={skill.name} />
              </div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(PageWrap(Skills, "**Skills** I aquired along the way")),
  section.SKILLS
);
