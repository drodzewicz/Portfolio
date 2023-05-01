import { motion } from "framer-motion";
import Image from "gatsby-plugin-sanity-image";
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
      <Image
        loading="eager"
        className="project-card__cover-image"
        {...images[0]}
        width={900}
        alt={title}
      />
    </motion.div>
  );
};

export default ProjectCard;
