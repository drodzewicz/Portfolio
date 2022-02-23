import React from "react";

interface NavigationDotsProps {
    active: string
}

const NavigationDots: React.FC<NavigationDotsProps> = ({ active }) => {
  const navigationitems: string[] = ["home", "about", "contact", "work", "skills"];

  return (
    <div className="app__navigation">
      {navigationitems.map((navItem) => (
        <a
          key={`link-${navItem}`}
          href={`#${navItem}`}
          className="app__navigation-dot"
          style={active === navItem ? { backgroundColor: "#313BAC" } : {}}>
        </a>
      ))}
    </div>
  );
};

export default NavigationDots;
