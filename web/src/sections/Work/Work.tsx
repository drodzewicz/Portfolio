import { section } from "constants/sections";
import { AnimatePresence, motion } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import { ProjectType } from "types";
import AppWrap from "wrapper/AppWrap";
import MotionWrap from "wrapper/MotionWrap/MotionWrap";
import PageWrap from "wrapper/PageWrap";

import ProjectCard from "components/ProjectCard";
import ProjectCardModal from "components/ProjectCardModal";

import "./Work.scss";

const Work = () => {
  const [selectedItem, setSelectedItem] = useState<ProjectType | null>(null);

  const { projects } = useStaticQuery<{
    projects: { nodes: ProjectType[] };
  }>(graphql`
    query PROJECTS {
      projects: allSanityProject {
        nodes {
          _id
          sourceCodeURL
          techStack {
            name
            logo {
              ...ImageWithPreview
            }
          }
          title
          demoURL
          images {
            ...ImageWithPreview
            _id: _key
          }
          description {
            children: _rawChildren
            style
            _key
            _type
          }
        }
      }
    }
  `);

  return (
    <motion.div className="app__work-portfolio">
      <div className="card-list">
        {projects.nodes.map((work) => (
          <ProjectCard
            key={work._id}
            onClick={() => setSelectedItem(work)}
            {...work}
          />
        ))}
      </div>
      <AnimatePresence>
        {selectedItem && (
          <ProjectCardModal
            key="modal-card"
            {...selectedItem}
            onClick={() => setSelectedItem(null)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AppWrap(
  MotionWrap(PageWrap(Work, "My Creative <strong>Portfolio</strong> Section")),
  section.WORK
);
