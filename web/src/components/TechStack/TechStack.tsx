import React from "react";
import { Tooltip } from "react-tooltip";

import SkillIcon from "components/SkillIcon";

import "./TechStack.scss";
import { ITechStackProps } from "./types";

const TechStack: React.FC<ITechStackProps> = ({ skills }) => {
  return (
    <div className="tech-stack">
      {skills.map(({ name, logo }) => (
        <SkillIcon
          key={name}
          name={name}
          width={20}
          logo={logo}
          showTooltip
          tooltipId="tech-stack-tooltip"
          className="tech-stack__logo"
        />
      ))}
      <Tooltip id="tech-stack-tooltip" />
    </div>
  );
};

export default TechStack;
