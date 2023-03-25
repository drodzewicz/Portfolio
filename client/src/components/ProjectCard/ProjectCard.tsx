import React from "react";
import { IProjectCardProps } from "./types";
import "./ProjectCard.scss";
import { motion } from "framer-motion";

const ProjectCard: React.FC<IProjectCardProps> = ({ _id, title, onClick, images }) => {
  return (
    <motion.div layoutId={`project-card-${_id}`} onClick={onClick} className="project-card">
      <img className="project-card__cover-image" src={images[0]?.src} alt={title} />
      <h4 className="project-card__title">{title}</h4>
    </motion.div>
  );
};

export default ProjectCard;
