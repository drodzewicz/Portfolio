import { ComponentType } from "react";
import { section } from "constants/sections";

import Cover from "./Cover";
import Contact from "./Contact";
import Skills from "./Skills";
import Experience from "./Experience";
import Work from "./Work";

const pages: Record<string, ComponentType> = {
  [section.COVER]: Cover,
  [section.EXPERIENCE]: Experience,
  [section.WORK]: Work,
  [section.SKILLS]: Skills,
  [section.CONTACT]: Contact,
};

export { Cover, Contact, Skills, Experience, Work };

export default pages;
