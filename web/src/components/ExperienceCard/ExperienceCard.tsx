import { PortableText } from "@portabletext/react";
import { format, formatDistance } from "date-fns";
import Image from "gatsby-plugin-sanity-image";
import React, { useState } from "react";
import { RiAccountPinBoxLine } from "react-icons/ri";

import TechStack from "components/TechStack";

import "./ExperienceCard.scss";
import { IExperienceCardProps } from "./types";

const ExperienceCard: React.FC<IExperienceCardProps> = ({
  companyName,
  country,
  city,
  dateStarted,
  dateFinished,
  position,
  description,
  techStack,
  companyLogo,
  dateFormat = "yyyy.LL",
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="experience">
      <div className="experience__header">
        <Image
          {...companyLogo}
          width={70}
          alt={`${companyName} logo`}
          className="experience__header__logo"
        />
        <div className="experience__header__main">
          <h3 className="experience__header__name" title={companyName}>
            {companyName}
          </h3>
          <p
            className="experience__header__location"
            title={`${country}, ${city}`}
          >{`${country}, ${city}`}</p>
        </div>
        <p
          data-tooltip-id="main-tooltip"
          data-tooltip-content={formatDistance(
            dateFinished ? new Date(dateFinished) : Date.now(),
            new Date(dateStarted)
          )}
          className="experience__header__time"
        >
          <span>{format(new Date(dateStarted), dateFormat)}</span>
          <span>-</span>
          <span>
            {dateFinished
              ? format(new Date(dateFinished), dateFormat)
              : "present"}
          </span>
        </p>
      </div>
      <div className="experience__secondary-header">
        <span title="position" className="experience__position">
          <RiAccountPinBoxLine />
          {position}
        </span>
        <TechStack skills={techStack} />
      </div>
      <div
        onClick={() => setIsExpanded((expaned) => !expaned)}
        className={`experience__description ${
          isExpanded ? "experience__description--expanded" : ""
        }`}
      >
        <PortableText value={description} />
      </div>
    </div>
  );
};

export default ExperienceCard;
