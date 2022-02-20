import { images } from "constants/index";
import React from "react";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  const navigationitems: string[] = ["home", "about", "contact", "work", "skills"];

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {navigationitems.map((navItem) => (
          <li className="app__flex p-text" key={navItem}>
            <div />
            <a href={`#/${ navItem }`}>{navItem}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
