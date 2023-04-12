import SKILL_ICON from "constants/skillIcons";
import React from "react";
import ReactTooltip from "react-tooltip";

import { ISkillIconProps } from "./types";

const SkillIcon: React.FC<ISkillIconProps> = ({
  icon,
  skill,
  showTooltip,
  ...otherProps
}) => {
  return (
    <>
      <img
        {...otherProps}
        data-tip
        data-for={`${skill}-tooltip`}
        src={SKILL_ICON[`${icon}_ICON`] || SKILL_ICON["BROKEN_IMAGE_ICON"]}
        alt={skill}
      />
      {showTooltip && (
        <ReactTooltip id={`${skill}-tooltip`} effect="solid">
          {skill}
        </ReactTooltip>
      )}
    </>
  );
};

export default SkillIcon;
