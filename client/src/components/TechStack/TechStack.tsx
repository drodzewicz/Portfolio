import React from "react";

import "./TechStack.scss";
import { ITechStackProps } from "./types";
import SkillIcon from "components/SkillIcon/SkillIcon";

const TechStack: React.FC<ITechStackProps> = ({ skills }) => {
  return (
    <div className="tech-stack">
      {skills.map(({ skill, icon }) => (
        <div key={skill}>
          <SkillIcon
            icon={icon}
            skill={skill}
            showTooltip
            className="tech-stack__logo"
          />
        </div>
      ))}
    </div>
  );
};

export default TechStack;
