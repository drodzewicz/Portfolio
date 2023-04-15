import React from "react";

import SkillIcon from "components/SkillIcon";

import "./TechStack.scss";
import { ITechStackProps } from "./types";

const TechStack: React.FC<ITechStackProps> = ({ skills }) => {
  return (
    <div className="tech-stack">
      {skills.map(({ skill, icon }) => (
        <SkillIcon
          key={skill}
          icon={icon}
          skill={skill}
          showTooltip
          className="tech-stack__logo"
        />
      ))}
    </div>
  );
};

export default TechStack;
