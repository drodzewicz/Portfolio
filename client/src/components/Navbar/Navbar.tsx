import { images } from "constants/index";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import React, { useState } from "react";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  const navigationitems: string[] = ["home", "about", "contact", "work", "skills"];

  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {navigationitems.map((navItem) => (
          <li className="app__flex p-text" key={`link-${navItem}`}>
            <div />
            <a href={`#/${navItem}`}>{navItem}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 className="hamburger" onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}>
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {navigationitems.map((navItem) => (
                <li key={navItem}>
                  <a onClick={() => setToggle(false)} href={`#/${navItem}`}>
                    {navItem}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
