import { motion } from "framer-motion";
import React from "react";

import "./ProjectCard.scss";
import { IProjectCardProps } from "./types";

const ProjectCard: React.FC<IProjectCardProps> = ({
  _id,
  title,
  onClick,
  images,
}) => {
  return (
    <motion.div
      layoutId={`project-card-${_id}`}
      onClick={onClick}
      className="project-card"
    >
      <img
        className="project-card__cover-image"
        src={images[0]?.src}
        alt={title}
      />
    </motion.div>
  );
};

export default ProjectCard;
