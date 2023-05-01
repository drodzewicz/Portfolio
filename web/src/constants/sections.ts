import { IconType } from "react-icons/lib";
import {
  RiHomeSmileLine,
  RiLightbulbFlashLine,
  RiMailLine,
  RiRocket2Fill,
  RiTimeLine,
} from "react-icons/ri";

enum section {
  HOME = "home",
  EXPERIENCE = "experience",
  WORK = "work",
  SKILLS = "skills",
  CONTACT = "contact",
}

interface ISectionConfig {
  label: string;
  icon: IconType;
}

const sectionConfig: Record<section, ISectionConfig> = {
  [section.HOME]: { icon: RiHomeSmileLine, label: "Home" },
  [section.EXPERIENCE]: { icon: RiTimeLine, label: "Experience" },
  [section.WORK]: { icon: RiRocket2Fill, label: "Projects" },
  [section.SKILLS]: { icon: RiLightbulbFlashLine, label: "Skills" },
  [section.CONTACT]: { icon: RiMailLine, label: "Contact" },
};

export default sectionConfig;

export { section };
export type { ISectionConfig };
