import { SanityImageOptions } from "gatsby-plugin-sanity-image";
import React from "react";
import { SkillType } from "types";

// type SkillIconImage = SkillType & React.ImgHTMLAttributes<HTMLImageElement>;

export interface ISkillIconProps extends SkillType {
  showTooltip?: boolean;
  className?: string;
  width?: number;
  tooltipId?: string;
}
