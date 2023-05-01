// import SKILL_ICON from "constants/skillIcons";
import brokenImage from "assets/images/broken-image.png";
import Image from "gatsby-plugin-sanity-image";
import React from "react";

import { ISkillIconProps } from "./types";

const SkillIcon: React.FC<ISkillIconProps> = ({
  logo,
  name,
  showTooltip,
  tooltipId = "main-tooltip",
  width = 100,
  ...otherProps
}) => {
  const tooltipProps = showTooltip
    ? { "data-tooltip-id": tooltipId, "data-tooltip-content": name }
    : {};
  return (
    <Image
      {...logo}
      {...otherProps}
      {...tooltipProps}
      width={width}
      alt={name}
    />
  );
};

export default SkillIcon;
