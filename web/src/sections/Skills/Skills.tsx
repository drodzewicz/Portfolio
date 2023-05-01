import { section } from "constants/sections";
import { motion } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { SkillType } from "types";
import AppWrap from "wrapper/AppWrap";
import MotionWrap from "wrapper/MotionWrap/MotionWrap";
import PageWrap from "wrapper/PageWrap";

import SkillCard from "components/SkillCard/SkillCard";

import "./Skills.scss";

const Skills = () => {
  const { skills } = useStaticQuery<{
    skills: { nodes: SkillType[] };
  }>(graphql`
    query SKILLS {
      skills: allSanitySkills {
        nodes {
          name
          logo {
            ...ImageWithPreview
          }
        }
      }
    }
  `);

  return (
    <div className="app__skills-container">
      <motion.div className="app__skills-list">
        {skills.nodes.map(({ name, logo }) => (
          <SkillCard key={name} name={name} logo={logo} />
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(
    PageWrap(Skills, "<strong>Skills</strong> I aquired along the way")
  ),
  section.SKILLS
);
