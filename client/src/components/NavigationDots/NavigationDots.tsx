import React from "react";
import sectionConfig from "constants/sections";
import NavigationDot from "./NavigationDot";
import { INavigationDotsProps } from "./types";


const NavigationDots: React.FC<INavigationDotsProps> = ({ active }) => {
  return (
    <div className="app__navigation">
      {Object.entries(sectionConfig).map(([name, icon]) => (
        <NavigationDot
          key={`link-${name}`}
          name={name}
          icon={icon}
          active={active} 
          />
      ))}
    </div>
  );
};

export default NavigationDots;
