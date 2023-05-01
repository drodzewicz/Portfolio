import { format } from "date-fns";
import Image from "gatsby-plugin-sanity-image";
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
  dateFormat = "yyyy",
}) => {
  return (
    <div className="education-card">
      <div className="education-card__header">
        <Image
          {...institutionLogo}
          width={70}
          className="education-card__logo"
          alt="institution logo"
        />
        <span className="education-card__text">{`${format(
          new Date(yearStarted),
          dateFormat
        )} - ${format(new Date(yearEnded), dateFormat)}`}</span>
      </div>
      <h2 className="education-card__title">{institution}</h2>
      <p className="education-card__text">{degree}</p>
      <p className="education-card__text">{fieldOfStudy}</p>
    </div>
  );
};

export default Education;
