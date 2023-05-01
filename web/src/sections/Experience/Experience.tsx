import { section } from "constants/sections";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { EducationType, ExperienceType } from "types";
import AppWrap from "wrapper/AppWrap";
import MotionWrap from "wrapper/MotionWrap/MotionWrap";
import PageWrap from "wrapper/PageWrap";

import EducationCard from "components/EducationCard";
import ExperienceCard from "components/ExperienceCard";

import "./Experience.scss";

const Experience = () => {
  const { experiences, education } = useStaticQuery<{
    experiences: { nodes: ExperienceType[] };
    education: { nodes: EducationType[] };
  }>(graphql`
    query EXPERIENCES_AND_EDUCATION {
      experiences: allSanityExperiences {
        nodes {
          _id
          city
          companyName
          country
          dateFinished
          dateStarted
          position
          description {
            children: _rawChildren
            style
            _key
            _type
          }
          techStack {
            name
            logo {
              ...ImageWithPreview
            }
          }
          companyLogo {
            ...ImageWithPreview
          }
        }
      }
      education: allSanityEducation {
        nodes {
          degree
          fieldOfStudy
          institution
          yearEnded
          yearStarted
          institutionLogo {
            ...ImageWithPreview
          }
        }
      }
    }
  `);

  return (
    <>
      <h3 className="head-text">Work Experience</h3>
      <div className="experiences-container">
        {experiences.nodes.map((experienceProps) => (
          <ExperienceCard
            key={`${experienceProps.companyName}-${experienceProps.position}`}
            {...experienceProps}
          />
        ))}
      </div>
      <h3 className="head-text">Education</h3>
      <div className="education-container">
        {education.nodes.map((educationProps) => (
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
  MotionWrap(
    PageWrap(Experience, "My Professional <strong>Experience</strong>")
  ),
  section.EXPERIENCE
);
