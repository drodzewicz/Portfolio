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
import Collapse from "components/Collapse/Collapse";
import SkillIcon from "components/SkillIcon/SkillIcon";
import Markdown from "markdown-to-jsx";
import { urlFor } from "client";

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
        <Markdown className="experience__description" options={{ wrapper: "p" }}>
          {description}
        </Markdown>
        <h4>
          <RiStackFill /> Tech stack{" "}
        </h4>
        <section className="experience__tech-stack">
          {techStack.map(({ skill, icon }) => (
            <div key={skill}>
              <SkillIcon
                data-tip
                data-for={`${companyName}-${skill}-techstach-tooltip`}
                icon={icon}
                skill={skill}
                className="experience__tech-stack-logo"
              />
              <ReactTooltip id={`${companyName}-${skill}-techstach-tooltip`} effect="solid">
                {skill}
              </ReactTooltip>
            </div>
          ))}
        </section>
      </Collapse>
    </div>
  );
};

export default ExperienceCard;
