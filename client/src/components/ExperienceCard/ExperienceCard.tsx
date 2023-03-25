import React, { useState } from "react";
import { IExperienceCardProps } from "./types";
import "./ExperienceCard.scss";
import ReactTooltip from "react-tooltip";
import {
  RiMoreFill,
  RiArrowUpSFill,
  RiStackFill,
  RiFileTextLine,
  RiAccountPinBoxLine,
} from "react-icons/ri";
import { images } from "constants/index";
import Collapse from "components/Collapse/Collapse";

const ExperienceCard: React.FC<IExperienceCardProps> = ({
  companyName,
  country,
  city,
  dateStarted,
  dateFinished,
  position,
  description,
  techStack,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="experience">
      <div className="experience__header">
        <img
          src={images.react}
          title={companyName}
          alt={`${companyName} logo`}
          className="experience__header__logo"
        />
        <div>
          <h3 className="experience__header__name">{companyName}</h3>
          <p className="experience__header__location">{`${country}, ${city}`}</p>
        </div>
        <p data-tip data-for="time-1" className="experience__header__time">
          {`${dateStarted} - ${dateFinished || "present"}`}
        </p>
        <ReactTooltip id="time-1" effect="solid">
          2 Years
        </ReactTooltip>
      </div>
      <span title="position" className="experience__position">
        <RiAccountPinBoxLine />
        {position}
      </span>
      <div className="experience__footer">
        <button
          className="experience__footer__more-btn"
          onClick={() => setIsExpanded((expaned) => !expaned)}>
          {isExpanded ? <RiArrowUpSFill /> : <RiMoreFill />}
        </button>
      </div>
      <Collapse show={isExpanded} className="experience__more-container ">
        <h4>
          <RiFileTextLine /> Job description
        </h4>
        <p className="experience__description">{description}</p>
        <h4>
          <RiStackFill /> Tech stack{" "}
        </h4>
        <section className="experience__tech-stack">
          {techStack.map((technology) => (
            <div key={technology}>
              <img
                data-tip
                data-for={`${companyName}-${technology}-techstach-tooltip`}
                src={images.react}
                alt="logo"
                className="experience__tech-stack-logo"
              />
              <ReactTooltip id={`${companyName}-${technology}-techstach-tooltip`} effect="solid">
                {technology}
              </ReactTooltip>
            </div>
          ))}
        </section>
      </Collapse>
    </div>
  );
};

export default ExperienceCard;
