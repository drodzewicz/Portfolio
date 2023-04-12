import { urlFor } from "client";
import { format, formatDistance } from "date-fns";
import Markdown from "markdown-to-jsx";
import React, { useState } from "react";
import {
  RiAccountPinBoxLine,
  RiArrowUpSFill,
  RiMoreFill,
} from "react-icons/ri";
import ReactTooltip from "react-tooltip";

import Collapse from "components/Collapse/Collapse";
import TechStack from "components/TechStack/TechStack";

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
        <img
          src={urlFor(companyLogo).url()}
          title={companyName}
          alt={`${companyName} logo`}
          className="experience__header__logo"
        />
        <div>
          <h3 className="experience__header__name">{companyName}</h3>
          <p className="experience__header__location">{`${country}, ${city}`}</p>
        </div>
        <p
          data-tip
          data-for={`${companyName}-time-tooltip`}
          className="experience__header__time"
        >
          {`${format(new Date(dateStarted), dateFormat)} - ${
            dateFinished
              ? format(new Date(dateFinished), dateFormat)
              : "present"
          }`}
        </p>
        <ReactTooltip id={`${companyName}-time-tooltip`} effect="solid">
          {formatDistance(
            dateFinished ? new Date(dateFinished) : Date.now(),
            new Date(dateStarted),
            { addSuffix: false }
          )}
        </ReactTooltip>
      </div>
      <div className="experience__secondary-header">
        <span title="position" className="experience__position">
          <RiAccountPinBoxLine />
          {position}
        </span>
        <TechStack skills={techStack} />
      </div>
      <div className="experience__footer">
        <button
          className="experience__footer__more-btn"
          onClick={() => setIsExpanded((expaned) => !expaned)}
        >
          {isExpanded ? <RiArrowUpSFill /> : <RiMoreFill />}
        </button>
      </div>
      <Collapse show={isExpanded} className="experience__more-container ">
        <h4 className="experience__description-title">Job description</h4>
        <Markdown
          className="experience__description"
          options={{ wrapper: "p" }}
        >
          {description}
        </Markdown>
      </Collapse>
    </div>
  );
};

export default ExperienceCard;
