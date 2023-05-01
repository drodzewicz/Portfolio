import "assets/styles/index.scss";
import { HeadFC, Link, PageProps } from "gatsby";
import * as React from "react";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <div className="page-not-found__container">
      <h1 className="head-text ">Page not found</h1>
      <p className="p-text">
        The page you are looking for doesn't existr or other error occured.
      </p>
      <p className="p-text">
        <Link to="/">Go back</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Portfolio - Not found</title>;
