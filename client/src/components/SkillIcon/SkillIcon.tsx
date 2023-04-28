import SKILL_ICON from "constants/skillIcons";
import React from "react";
import ReactTooltip from "react-tooltip";

import { ISkillIconProps } from "./types";

const SkillIcon: React.FC<ISkillIconProps> = ({
  logo,
  name,
  showTooltip,
  ...otherProps
}) => {
  return (
    <>
      <img
        {...otherProps}
        data-tip
        data-for={`${name}-tooltip`}
        src={logo || SKILL_ICON["BROKEN_IMAGE_ICON"]}
        alt={name}
      />
      {showTooltip && (
        <ReactTooltip id={`${name}-tooltip`} effect="solid">
          {name}
        </ReactTooltip>
      )}
    </>
  );
};

export default SkillIcon;
