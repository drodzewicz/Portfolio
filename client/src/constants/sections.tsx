import { IconType } from "react-icons/lib";
import {
  RiHomeSmileLine,
  RiRocket2Fill,
  RiTimeLine,
  RiLightbulbFlashLine,
  RiMailLine,
} from "react-icons/ri";

enum section {
  COVER = "cover",
  EXPERIENCE = "experience",
  WORK = "work",
  SKILLS = "skills",
  CONTACT = "contact",
}

interface ISectionConfig {
  name: section;
  icon: IconType;
}

const sectionConfig: Record<section, IconType> = {
  [section.COVER]: RiHomeSmileLine,
  [section.EXPERIENCE]: RiTimeLine,
  [section.WORK]: RiRocket2Fill,
  [section.SKILLS]: RiLightbulbFlashLine,
  [section.CONTACT]: RiMailLine,
} 

export default sectionConfig;

export { section };
export type { ISectionConfig };
