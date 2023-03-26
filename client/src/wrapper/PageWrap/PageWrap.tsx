import Markdown from "markdown-to-jsx";
import React, { ComponentType } from "react";

import "./PageWrap.scss";

const PageWrap = (Component: ComponentType, title: string = "") =>
  function HOC() {
    return (
      <>
        {title && (
          <Markdown
            className="head-text page-title"
            options={{ wrapper: "h2" }}
          >
            {title}
          </Markdown>
        )}
        <Component />
      </>
    );
  };

export default PageWrap;
