import React from "react";
import { SkillType } from "types";

type SkillIconImage = SkillType & React.ImgHTMLAttributes<HTMLImageElement>;

export interface ISkillIconProps extends SkillIconImage {
  showTooltip?: boolean;
}
