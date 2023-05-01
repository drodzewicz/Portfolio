import React, { ComponentType } from "react";

import "./PageWrap.scss";

const PageWrap = (Component: ComponentType, title: string = "") =>
  function HOC() {
    return (
      <>
        {title && (
          <h2
            className="head-text page-title"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
        <Component />
      </>
    );
  };

export default PageWrap;
