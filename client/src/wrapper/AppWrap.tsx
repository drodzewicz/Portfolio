import NavigationDots from "components/NavigationDots/NavigationDots";
import ScoialMedia from "components/SocialMedia/SocialMedia";
import React, { ComponentType } from "react"

const AppWrap = (Component: ComponentType, idName: string, classNames: string = "") => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <ScoialMedia />
      <div className="app__wrapper app__flex">
        <Component />

        <div className="copyright">
          <p className="p-text">@2020 MICHAEL</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap;