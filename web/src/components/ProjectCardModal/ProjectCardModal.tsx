import { PortableText } from "@portabletext/react";
import { motion } from "framer-motion";
import React from "react";
import { RiGithubFill, RiLiveFill } from "react-icons/ri";

import ImageCarousel from "components/ImageCarousel";
import Overlay from "components/Overlay/Overlay";
import TechStack from "components/TechStack/TechStack";

import "./ProjectCardModal.scss";
import { IProjectCardProps } from "./types";

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
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={10000}
            swipeScrollTolerance={120}
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
            <motion.a
              {...motionAnimation.actionButton}
              href={sourceCodeURL}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-modal__button"
            >
              <RiGithubFill />
              <motion.span {...motionAnimation.actionButtonText}>
                Github
              </motion.span>
            </motion.a>
            <motion.a
              {...motionAnimation.actionButton}
              href={demoURL}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-modal__button"
            >
              <RiLiveFill />
              <motion.span {...motionAnimation.actionButtonText}>
                Live preview
              </motion.span>
            </motion.a>
          </div>
          <br />
          <div className="project-card-modal__header">
            <h3>{title}</h3>
            <TechStack skills={techStack} />
          </div>
          <div className="project-card-modal__description">
            <PortableText value={description} />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProjectCardModal;
