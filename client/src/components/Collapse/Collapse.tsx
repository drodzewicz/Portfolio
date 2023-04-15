import React from "react";

import "./Collapse.scss";

type Props = { show: boolean; className?: string };

const Collapse: React.FC<Props> = ({ show, children, className = "" }) => {
  return (
    <section
      className={`collapse__content ${className} ${
        show ? "collapse__content--show" : ""
      }`}
    >
      {children}
    </section>
  );
};

export default Collapse;
