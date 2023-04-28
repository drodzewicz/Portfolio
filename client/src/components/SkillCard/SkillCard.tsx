import React from "react";
import { usePalette } from "react-palette";

import SkillIcon from "components/SkillIcon/SkillIcon";

import "./SkillCard.scss";
import { ISkillCardProps } from "./types";

const SkillCard: React.FC<ISkillCardProps> = (props) => {
  const { data } = usePalette(props.logo);
  return (
    <div
      className="skill-card"
      style={{ "--hightlight-color": data.vibrant } as React.CSSProperties}
    >
      <div className="skill-card__container">
        <SkillIcon className="skill-card__icon" {...props} />
      </div>
      <p className="skill-card__title">{props.name}</p>
    </div>
  );
};

export default SkillCard;
