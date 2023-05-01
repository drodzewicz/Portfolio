import { ISectionConfig, section } from "constants/sections";

export interface IMobileMenuProps {}

export interface IMobileMenuItemProps extends ISectionConfig {
  name: section;
  index: number;
  onClick?: () => void;
}
