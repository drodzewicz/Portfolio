import React, { ComponentType } from "react";

import NavigationDots from "components/NavigationDots";

import "./AppWrap.scss";

const AppWrap = (Component: ComponentType, idName: string) =>
  function HOC() {
    return (
      <div id={idName} className="app__container">
        <div className="app__wrapper">
          <Component />
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
