import { section } from "constants/sections";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { fetchSkills } from "service";
import { urlFor } from "service/client";
import { SkillType } from "types";
import AppWrap from "wrapper/AppWrap";
import MotionWrap from "wrapper/MotionWrap/MotionWrap";
import PageWrap from "wrapper/PageWrap";

import SkillCard from "components/SkillCard/SkillCard";

import "./Skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState<SkillType[]>([]);

  useEffect(() => {
    fetchSkills().then((data) => {
      setSkills([...data]);
    });
  }, []);

  return (
    <>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map(({ name, logo }) => (
            <SkillCard key={name} name={name} logo={urlFor(logo).url()} />
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
