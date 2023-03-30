import { IconType } from "react-icons/lib";

export interface INavigationDotProps {
  active: string;
  name: string;
  icon: IconType;
  index: number;
}

export interface INavigationDotsProps {
  active: string;
}
