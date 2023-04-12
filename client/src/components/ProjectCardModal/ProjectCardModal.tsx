import { motion } from "framer-motion";
import Markdown from "markdown-to-jsx";
import React from "react";
import { RiGithubFill, RiLiveFill } from "react-icons/ri";

import ImageCarousel from "components/ImageCarousel/ImageCarousel";
import Overlay from "components/Overlay/Overlay";
import SkillIcon from "components/SkillIcon/SkillIcon";

import "./ProjectCardModal.scss";
import { IProjectCardProps } from "./types";
import TechStack from "components/TechStack/TechStack";

const motionAnimation = {
  actionButtonText: {
    transition: { delay: 1, duration: 0.3 },
    initial: { width: 0 },
    animate: { width: "auto" },
  },
  actionButton: {
    transition: { duration: 0.3, delay: 0.5 },
    initial: { translateY: -50 },
    animate: { translateY: 0 },
  },
};

const ProjectCardModal: React.FC<IProjectCardProps> = ({
  _id,
  images,
  title,
  demoURL,
  sourceCodeURL,
  description,
  techStack,
  onClick,
}) => {
  return (
    <>
      <Overlay onClick={onClick} />
      <motion.div className="project-card-modal">
        <motion.div
          layoutId={`project-card-${_id}`}
          className="project-card-modal__image-container"
        >
          <ImageCarousel
            images={images}
            swipeable
            autoPlay
            emulateTouch
            showThumbs={false}
            showStatus={false}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: 1,
            height: "auto",
            transition: { delay: 0.3, duration: 0.3 },
          }}
          exit={{ opacity: 0, height: 0, transition: { duration: 0 } }}
          className="project-card-modal__content"
        >
          <div className="project-card-modal__button-container">
            <motion.button
              {...motionAnimation.actionButton}
              className="project-card-modal__button"
            >
              <RiGithubFill />
              <motion.span {...motionAnimation.actionButtonText}>
                Github
              </motion.span>
            </motion.button>
            <motion.button
              {...motionAnimation.actionButton}
              className="project-card-modal__button"
            >
              <RiLiveFill />
              <motion.span {...motionAnimation.actionButtonText}>
                Live preview
              </motion.span>
            </motion.button>
          </div>
          <h3>{title}</h3>
          <br />
          <TechStack skills={techStack} />
          <h4>Description</h4>
          <Markdown
            className="project-card-modal__description"
            options={{ wrapper: "p" }}
          >
            {description}
          </Markdown>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProjectCardModal;
