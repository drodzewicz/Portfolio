import { client, urlFor } from "client";
import { section } from "constants/sections";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { ProjectType } from "types";
import AppWrap from "wrapper/AppWrap";
import MotionWrap from "wrapper/MotionWrap/MotionWrap";
import PageWrap from "wrapper/PageWrap";

import ProjectCard from "components/ProjectCard";
import ProjectCardModal from "components/ProjectCardModal";

import "./Work.scss";

const Work = () => {
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [selectedItem, setSelectedItem] = useState<ProjectType | null>(null);

  const transformData = (data: ProjectType[]): ProjectType[] => {
    return data.map((project: ProjectType) => {
      project.images = project.images.map((image: any) => ({
        _id: image?._key,
        src: urlFor(image).url(),
      }));
      return project;
    });
  };

  useEffect(() => {
    const query = '*[_type == "project"]';

    client.fetch(query).then((data: ProjectType[]) => {
      setProjects(transformData(data));
    });
  }, []);

  return (
    <motion.div className="app__work-portfolio">
      <div className="card-list">
        {projects.map((work) => (
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
  MotionWrap(PageWrap(Work, "My Creative **Portfolio** Section")),
  section.WORK
);
