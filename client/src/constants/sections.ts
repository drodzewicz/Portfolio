import { IconType } from "react-icons/lib";
import { RiHomeSmileLine, RiLightbulbFlashLine, RiMailLine, RiRocket2Fill, RiTimeLine } from "react-icons/ri";


enum section {
  COVER = "cover",
  EXPERIENCE = "experience",
  WORK = "work",
  SKILLS = "skills",
  CONTACT = "contact",
}

interface ISectionConfig {
  name: string;
  icon: IconType;
}

const sectionConfig: Record<section, ISectionConfig> = {
  [section.COVER]: { icon: RiHomeSmileLine, name: "Home" },
  [section.EXPERIENCE]: { icon: RiTimeLine, name: "Experience" },
  [section.WORK]: { icon: RiRocket2Fill, name: "Projects" },
  [section.SKILLS]: { icon: RiLightbulbFlashLine, name: "Skills" },
  [section.CONTACT]: { icon: RiMailLine, name: "Contact" },
};

export default sectionConfig;

export { section };
export type { ISectionConfig };