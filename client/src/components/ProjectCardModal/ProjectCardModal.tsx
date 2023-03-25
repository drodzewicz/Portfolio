import React, { useEffect, useRef, useState } from "react";
import { IProjectCardProps } from "./types";
import "./ProjectCardModal.scss";
import { motion } from "framer-motion";
import { urlFor } from "client";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import Overlay from "components/Overlay/Overlay";
import { images } from "constants/index";
import Markdown from "markdown-to-jsx";
import { RiGithubFill, RiLiveFill } from "react-icons/ri";
import { Carousel } from "react-responsive-carousel";
import ImageCarousel from "components/ImageCarousel/ImageCarousel";

interface OtherProps extends IProjectCardProps {
  onClick?: () => void;
}

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

const ProjectCardModal: React.FC<OtherProps> = ({
  id,
  imgUrl,
  title,
  projectLink,
  codeLink,
  description,
  onClick,
}) => {
  const imageList = [
    { id: "jeden", src: images.about01 },
    { id: "dwa", src: images.about02 },
    { id: "trzy", src: images.about03 },
  ];
  return (
    <>
      <Overlay onClick={onClick} />
      <motion.div className="project-card-modal">
        <motion.div layoutId={`project-card-${id}`} className="project-card-modal__image-container">
          <ImageCarousel
            images={imageList}
            swipeable
            autoPlay
            emulateTouch
            showThumbs={false}
            showStatus={false}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto", transition: { delay: 0.3, duration: 0.3 } }}
          exit={{ opacity: 0, height: 0, transition: { duration: 0 } }}
          className="project-card-modal__content">
          <div className="project-card-modal__button-container">
            <motion.button {...motionAnimation.actionButton} className="project-card-modal__button">
              <RiGithubFill />
              <motion.span {...motionAnimation.actionButtonText}>Github</motion.span>
            </motion.button>
            <motion.button {...motionAnimation.actionButton} className="project-card-modal__button">
              <RiLiveFill />
              <motion.span {...motionAnimation.actionButtonText}>Live preview</motion.span>
            </motion.button>
          </div>
          <h4>Tech stack</h4>
          <div className="project-card-modal__tech-stack-container">
            <img className="project-card-modal__tech-stack-icon" src={images.react} alt="react" />
            <img className="project-card-modal__tech-stack-icon" src={images.react} alt="react" />
            <img className="project-card-modal__tech-stack-icon" src={images.react} alt="react" />
            <img className="project-card-modal__tech-stack-icon" src={images.react} alt="react" />
          </div>
          <h4>Description</h4>
          <p className="project-card-modal__description">
            <Markdown>{description}</Markdown> Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Corporis ea porro nihil possimus rerum provident, consectetur pariatur modi ipsam
            fuga vitae quis itaque explicabo, temporibus id facere blanditiis voluptatum,
            repellendus optio atque nam. Quod, exercitationem laborum sequi nihil aliquid omnis
            cumque laboriosam placeat doloribus, aliquam rem eos soluta, in voluptatibus?
            <Markdown>{description}</Markdown> Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Corporis ea porro nihil possimus rerum provident, consectetur pariatur modi ipsam
            fuga vitae quis itaque explicabo, temporibus id facere blanditiis voluptatum,
            repellendus optio atque nam. Quod, exercitationem laborum sequi nihil aliquid omnis
            cumque laboriosam placeat doloribus, aliquam rem eos soluta, in voluptatibus?
            <Markdown>{description}</Markdown> Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Corporis ea porro nihil possimus rerum provident, consectetur pariatur modi ipsam
            fuga vitae quis itaque explicabo, temporibus id facere blanditiis voluptatum,
            repellendus optio atque nam. Quod, exercitationem laborum sequi nihil aliquid omnis
            cumque laboriosam placeat doloribus, aliquam rem eos soluta, in voluptatibus?
            <Markdown>{description}</Markdown> Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Corporis ea porro nihil possimus rerum provident, consectetur pariatur modi ipsam
            fuga vitae quis itaque explicabo, temporibus id facere blanditiis voluptatum,
            repellendus optio atque nam. Quod, exercitationem laborum sequi nihil aliquid omnis
            cumque laboriosam placeat doloribus, aliquam rem eos soluta, in voluptatibus?
            <Markdown>{description}</Markdown> Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Corporis ea porro nihil possimus rerum provident, consectetur pariatur modi ipsam
            fuga vitae quis itaque explicabo, temporibus id facere blanditiis voluptatum,
            repellendus optio atque nam. Quod, exercitationem laborum sequi nihil aliquid omnis
            cumque laboriosam placeat doloribus, aliquam rem eos soluta, in voluptatibus?
          </p>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ProjectCardModal;
