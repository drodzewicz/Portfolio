import sectionConfig, { section } from "constants/sections";
import React, { useState } from "react";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";

import "./MobileMenu.scss";
import MobileMenuItem from "./MobileMenuItem";
import { IMobileMenuProps } from "./types";

const MobileMenu: React.FC<IMobileMenuProps> = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className={`mobile-menu ${show ? "mobile-menu--show" : ""}`}>
      <button
        onClick={() => setShow((state) => !state)}
        className="mobile-menu__button"
      >
        {show ? <RiCloseLine /> : <RiMenuLine />}
      </button>
      <ul className="mobile-menu__container">
        {show &&
          Object.entries(sectionConfig).map(([name, itemProps], index) => (
            <MobileMenuItem
              onClick={() => setShow(false)}
              key={`mobile-link-${name}`}
              name={name as section}
              index={index}
              {...itemProps}
            />
          ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
