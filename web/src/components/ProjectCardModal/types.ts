import { ProjectType } from "types";

export interface IProjectCardProps extends ProjectType {
  onClick?: () => void;
}
