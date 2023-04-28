import type {TypedObject} from '@portabletext/types'

export type EducationType = {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  yearStarted: string;
  yearEnded?: string;
  institutionLogo: string;
};

export interface SkillType {
  name: string;
  logo: string;
}

export interface ExperienceType {
  companyLogo: string;
  companyName: string;
  country: string;
  city: string;
  dateStarted: string;
  dateFinished?: string;
  position: string;
  description: TypedObject | TypedObject[];
  techStack: SkillType[];
}

export type ImageItemType = { _id: string; src: string };

export type ProjectType = {
  _id: string;
  title: string;
  description: TypedObject | TypedObject[];
  demoURL: string;
  sourceCodeURL: string;
  techStack: SkillType[];
  images: ImageItemType[];
};
