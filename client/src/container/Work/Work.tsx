import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

import { client, urlFor } from "client";
import AppWrap from "wrapper/AppWrap";
import MotionWrap from "wrapper/MotionWrap/MotionWrap";
import PageWrap from "wrapper/PageWrap";
import { section } from "constants/sections";
import ProjectCard from "components/ProjectCard";
import ProjectCardModal from "components/ProjectCardModal";
import { IProjectCardProps } from "components/ProjectCard/types";
import "./Work.scss";

const Work = () => {
  const [works, setWorks] = useState<IProjectCardProps[]>([]);
  const [filterWork, setFilterWork] = useState<IProjectCardProps[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data: IProjectCardProps[]) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const computedWork = filterWork.map((work, index) => ({ ...work, id: `${work.title}` }));

  const testList: IProjectCardProps[] = [
    {
      id: "jeden",
      imgUrl: "dwdw",
      title: "test 1",
      projectLink: "dwd",
      codeLink: "dwd",
      description: "lorem upsun",
    },
    {
      id: "dwa",
      imgUrl: "dwdw",
      title: "test 2",
      projectLink: "dwd",
      codeLink: "dwd",
      description: "lorem upsun",
    },
  ];

  return (
    <motion.div className="app__work-portfolio">
      <div className="card-list">
        {testList.map((work) => (
          <ProjectCard key={work.id} onClick={() => setSelectedItem(work)} {...work} />
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
