import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { client } from "../../client";
import AppWrap from "wrapper/AppWrap";
import MotionWrap from "wrapper/MotionWrap/MotionWrap";
import PageWrap from "wrapper/PageWrap";
import { section } from "constants/sections";
import SkillIcon from "components/SkillIcon/SkillIcon";
import { SkillType } from "types";
import "./Skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState<SkillType[]>([]);

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
          {skills.map(({ skill, icon }) => (
            <div className="app__skills-item app__flex" key={skill}>
              <div className="app__flex">
                <SkillIcon icon={icon} skill={skill} />
              </div>
              <h3>{skill}</h3>
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
