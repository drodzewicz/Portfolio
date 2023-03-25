import React, { ComponentType } from "react";
import "./App.scss";
import pages from "container";
import sectionConfig from "constants/sections";

const App = () => {
  return (
    <div className="app">
      {Object.keys(sectionConfig).map((name) => {
        const Page: ComponentType = pages[name];
        return <Page key={`page-${name}`} />;
      })}
    </div>
  );
};

export default App;
