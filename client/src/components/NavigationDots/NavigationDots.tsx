import sectionConfig from "constants/sections";
import React from "react";

import NavigationDot from "./NavigationDot";
import "./NavigationDots.scss";
import { INavigationDotsProps } from "./types";

const NavigationDots: React.FC<INavigationDotsProps> = ({ active }) => {
  return (
    <div className="app__navigation-container">
      <div className="app__navigation">
        {Object.entries(sectionConfig).map(([name, { icon, label }], index) => (
          <NavigationDot
            key={`link-${name}`}
            index={index}
            name={name}
            label={label}
            icon={icon}
            active={active}
          />
        ))}
      </div>
    </div>
  );
};

export default NavigationDots;
