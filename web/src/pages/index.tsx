import "assets/styles/index.scss";
import sectionConfig from "constants/sections";
import type { HeadFC, PageProps } from "gatsby";
import React, { ComponentType } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import sections from "sections";

import MobileMenu from "components/MobileMenu/MobileMenu";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="app">
      {Object.keys(sectionConfig).map((name) => {
        const Page: ComponentType = sections[name];
        return <Page key={`page-${name}`} />;
      })}
      <MobileMenu />
      <Tooltip id="main-tooltip" />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Portfolio - Dariusz Rodzewicz</title>;
