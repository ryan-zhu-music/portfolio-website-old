import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";
import useWindowDimensions from "../hooks/useWindowDimensions";
import useScrollPosition from "../hooks/useScrollPosition";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMusic,
  faFolderOpen,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const links = [
  {
    name: "Home",
    icon: <FontAwesomeIcon icon={faHouse} size="1x" />,
    link: "/",
  },
  {
    name: "Music",
    icon: <FontAwesomeIcon icon={faMusic} size="1x" />,
    link: "/music",
  },
  {
    name: "Portfolio",
    icon: <FontAwesomeIcon icon={faFolderOpen} size="1x" />,
    link: "/portfolio",
  },
  {
    name: "Contact",
    icon: <FontAwesomeIcon icon={faEnvelope} size="1x" />,
    link: "/contact",
  },
];
const Navbar = () => {
  const { width } = useWindowDimensions();
  const scrollPosition = useScrollPosition();

  return (
    <nav id="nav">
      <div
        className={`navigation ${
          scrollPosition.y > 30 ? "nav-active" : "nav-inactive"
        }`}
      />
      <ul style={{ width: scrollPosition.y > 30 ? "90%" : "100%" }}>
        {links.map((link) => (
          <li key={link.name}>
            <Link to={link.link}>{width >= 768 ? link.name : link.icon}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
