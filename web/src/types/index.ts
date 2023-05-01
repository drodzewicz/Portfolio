import type { TypedObject } from "@portabletext/types";

export type GatsbySanityImageType = {
  asset: object;
  hotspot?: object;
};

export type EducationType = {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  yearStarted: string;
  yearEnded?: string;
  institutionLogo: GatsbySanityImageType;
};

export interface SkillType {
  name: string;
  logo: GatsbySanityImageType;
}

export interface ExperienceType {
  companyLogo: GatsbySanityImageType;
  companyName: string;
  country: string;
  city: string;
  dateStarted: string;
  dateFinished?: string;
  position: string;
  description: TypedObject | TypedObject[];
  techStack: SkillType[];
}

export interface ImageItemType extends GatsbySanityImageType {
  _id: string;
}

export type ProjectType = {
  _id: string;
  title: string;
  description: TypedObject | TypedObject[];
  demoURL: string;
  sourceCodeURL: string;
  techStack: SkillType[];
  images: ImageItemType[];
};
