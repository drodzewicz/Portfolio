import SKILL_ICON from "constants/skillIcons";
import React from "react";

import { ISkillIconProps } from "./types";

const SkillIcon: React.FC<ISkillIconProps> = ({
  icon,
  skill,
  ...otherProps
}) => {
  return (
    <img
      {...otherProps}
      src={SKILL_ICON[`${icon}_ICON`] || SKILL_ICON["BROKEN_IMAGE_ICON"]}
      alt={skill}
    />
  );
};

export default SkillIcon;
