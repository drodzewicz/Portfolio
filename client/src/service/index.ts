import { Schema } from "constants/schemas";
import { FormMessage } from "container/Contact/types";
import { EducationType, ExperienceType, ProjectType, SkillType } from "types";

import { client } from "./client";

export const fetchProjects = async (): Promise<ProjectType[]> => {
  return client.fetch(`*[_type == "${Schema.PROJECT}"]`);
};

export const fetchExperience = async (): Promise<ExperienceType[]> => {
  return client.fetch(`*[_type == "${Schema.EXPERIENCE}"]`);
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
