import React from "react";
import { IProjectCardProps } from "./types";
import "./ProjectCard.scss";
import { motion } from "framer-motion";
import { urlFor } from "client";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { images } from "constants/index";

interface OtherProps extends IProjectCardProps {
  onClick?: () => void;
}

const ProjectCard: React.FC<OtherProps> = ({
  id,
  imgUrl,
  title,
  projectLink,
  codeLink,
  description,
  onClick,
}) => {
  return (
    <motion.div layoutId={`project-card-${id}`} onClick={onClick} className="project-card">
      <img className="project-card__cover-image" src={images.about01} alt={title} />
      <h4 className="project-card__title">{title}</h4>
    </motion.div>
  );
};

export default ProjectCard;
