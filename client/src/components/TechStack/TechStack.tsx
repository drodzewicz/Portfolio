import React from "react";
import { urlFor } from "service/client";

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
          logo={urlFor(logo).url()}
          showTooltip
          className="tech-stack__logo"
        />
      ))}
    </div>
  );
};

export default TechStack;
