import { section } from "constants/sections";
import React, { useEffect, useState } from "react";
import { EducationType, ExperienceType } from "types";
import AppWrap from "wrapper/AppWrap";
import MotionWrap from "wrapper/MotionWrap/MotionWrap";
import PageWrap from "wrapper/PageWrap";

import EducationCard from "components/EducationCard";
import ExperienceCard from "components/ExperienceCard";

import { client } from "../../client";
import "./Experience.scss";

const Experience = () => {
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);
  const [educations, setEducations] = useState<EducationType[]>([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });

    const queryed = '*[_type == "education"]';

    client.fetch(queryed).then((data) => {
      setEducations(data);
    });
  }, []);

  return (
    <>
      <h3 className="head-text">Work Experience</h3>
      <div className="experiences-container">
        {experiences.map((experienceProps) => (
          <ExperienceCard
            key={`${experienceProps.companyName}-${experienceProps.position}`}
            {...experienceProps}
          />
        ))}
      </div>
      <h3 className="head-text">Education</h3>
      <div className="education-container">
        {educations.map((educationProps) => (
          <EducationCard
            key={`${educationProps.institution}-${educationProps.degree}`}
            {...educationProps}
          />
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(PageWrap(Experience, "My Professional **Experience**")),
  section.EXPERIENCE
);
