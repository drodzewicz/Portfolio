import { ComponentType } from "react";
import { section } from "constants/sections";

import Home from "./Home";
import Contact from "./Contact";
import Skills from "./Skills";
import Experience from "./Experience";
import Work from "./Work";

const sections: Record<string, ComponentType> = {
  [section.HOME]: Home,
  [section.EXPERIENCE]: Experience,
  [section.WORK]: Work,
  [section.SKILLS]: Skills,
  [section.CONTACT]: Contact,
};

export { Home, Contact, Skills, Experience, Work };

export default sections;
