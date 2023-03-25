import { ProjectType } from "types";

export interface IProjectCardProps extends Pick<ProjectType, "_id" | "title" | "images"> {
  onClick?: () => void;
}
