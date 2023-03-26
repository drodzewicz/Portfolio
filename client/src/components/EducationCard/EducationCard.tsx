import { urlFor } from "client";
import React from "react";

import "./EducationCard.scss";
import { IEducationProps } from "./types";

const Education: React.FC<IEducationProps> = ({
  institution,
  yearStarted,
  yearEnded = "present",
  degree,
  fieldOfStudy,
  institutionLogo,
}) => {
  return (
    <div className="education-card">
      <div className="education-card__header">
        <img
          className="education-card__logo"
          src={urlFor(institutionLogo).url()}
          alt="institution logo"
        />
        <span className="education-card__text">{`${yearStarted} - ${yearEnded}`}</span>
      </div>
      <h2 className="education-card__title">{institution}</h2>
      <p className="education-card__text">{degree}</p>
      <p className="education-card__text">{fieldOfStudy}</p>
    </div>
  );
};

export default Education;
