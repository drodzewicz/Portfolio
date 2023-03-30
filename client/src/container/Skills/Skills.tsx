import { section } from "constants/sections";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { SkillType } from "types";
import AppWrap from "wrapper/AppWrap";
import MotionWrap from "wrapper/MotionWrap/MotionWrap";
import PageWrap from "wrapper/PageWrap";

import SkillIcon from "components/SkillIcon/SkillIcon";

import { client } from "../../client";
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
              <p className="app__skills-name">{skill}</p>
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
