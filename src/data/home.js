import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

export const socials = [
  {
    name: "Github",
    url: "https://github.com/ryan-zhu-music",
    component: <FontAwesomeIcon icon={faGithub} size="1x" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ryanzhu0819/",
    component: <FontAwesomeIcon icon={faLinkedin} size="1x" />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/r.y.a.n.z.h.u/",
    component: <FontAwesomeIcon icon={faInstagram} size="1x" />,
  },
  {
    name: "Discord",
    url: "https://discordapp.com/users/401127703698210816",
    component: <FontAwesomeIcon icon={faDiscord} size="1x" />,
  },
];
