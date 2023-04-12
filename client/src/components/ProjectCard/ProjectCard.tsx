import { motion } from "framer-motion";
import React from "react";
import { usePalette } from "react-palette";

import "./ProjectCard.scss";
import { IProjectCardProps } from "./types";

const ProjectCard: React.FC<IProjectCardProps> = ({
  _id,
  title,
  onClick,
  images,
}) => {
  const { data } = usePalette(images[0]?.src);
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
      <h2
        className="project-card__title"
        style={{ "--hightlight-color": data.vibrant } as React.CSSProperties}
      >
        {title}
      </h2>
    </motion.div>
  );
};

export default ProjectCard;
