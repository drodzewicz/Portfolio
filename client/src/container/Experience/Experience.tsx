import React, { useState, useEffect } from "react";

import { client } from "../../client";
import "./Experience.scss";
import AppWrap from "wrapper/AppWrap";
import MotionWrap from "wrapper/MotionWrap/MotionWrap";
import PageWrap from "wrapper/PageWrap";
import { section } from "constants/sections";
import ExperienceCard from "components/ExperienceCard";
import EducationCard from "components/EducationCard";
import { IExperienceCardProps } from "components/ExperienceCard/types";
import { IEducationProps } from "components/EducationCard/types";

interface WorkExperienceI {
  name: string;
  company: string;
  desc: string;
}

interface ExperienceI {
  year: string;
  works: WorkExperienceI[];
}

const Experience = () => {
  const tempExperiences: IExperienceCardProps[] = [
    {
      companyName: "Lime Brains Sp. Z o.o.",
      country: "Poland",
      city: "Gdynia",
      dateStarted: "2021-05-16",
      dateFinished: "2021-08-16",
      position: "Intern Fullstack Developer",
      description: "lorem lorem lorem lore",
      techStack: ["Vue", "Python"],
    },
    {
      companyName: "SolDevelo Sp. Z o.o.",
      country: "Poland",
      city: "Gdynia",
      dateStarted: "2022-03-16",
      position: "Junior Software Developer",
      description: "lorem lorem lorem lore",
      techStack: ["REACT", "GROOVY", "GRAILS", "JIRA"],
    },
  ];

  const tempEducation: IEducationProps[] = [
    {
      institution: "Univesity of Gdansk",
      fieldOfStudy: "Computer Science",
      yearEnded: "2020",
      yearStarted: "2017",
      degree: "Bachelor's",
    },
    {
      institution: "Univesity of Gdansk",
      fieldOfStudy: "Computer Science",
      yearEnded: "2022",
      yearStarted: "2020",
      degree: "Master's",
    },
  ];

  const [experiences, setExperiences] = useState<ExperienceI[]>([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });
  }, []);

  return (
    <>
      <h3 className="head-text">Work Experience</h3>
      <div className="experiences-container">
        {tempExperiences.map((experienceProps) => (
          <ExperienceCard
            key={`${experienceProps.companyName}-${experienceProps.position}`}
            {...experienceProps}
          />
        ))}
      </div>
      <h3 className="head-text">Education</h3>
      <div className="education-container">
        {tempEducation.map((educationProps) => (
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
