import { Schema } from "constants/schemas";
import { FormMessage } from "container/Contact/types";
import { EducationType, ExperienceType, ProjectType, SkillType } from "types";

import { client } from "./client";

export const fetchProjects = async (): Promise<ProjectType[]> => {
  return client.fetch(`*[_type == "${Schema.PROJECT}"]{
    _id,
    title,
    description,
    demoURL,
    sourceCodeURL,
    techStack[]-> { name,  logo },
    images,
  }`);
};

export const fetchExperience = async (): Promise<ExperienceType[]> => {
  return client.fetch(`*[_type == "${Schema.EXPERIENCE}"]{
    _id,
    companyName,
    country,
    city,
    dateStarted,
    dateFinished,
    position,
    description,
    companyLogo,
    techStack[]-> { logo, name },
  }`);
};

export const fetchEducation = async (): Promise<EducationType[]> => {
  return client.fetch(`*[_type == "${Schema.EDUCATION}"]`);
};

export const fetchSkills = async (): Promise<SkillType[]> => {
  return client.fetch(`*[_type == "${Schema.SKILLS}"]`);
};

export const sendMessage = async (payload: FormMessage) => {
  const contact = {
    ...payload,
    _type: "contact",
  };
  return client.create(contact);
};
