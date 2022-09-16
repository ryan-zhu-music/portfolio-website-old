import Sapphire from "../assets/audio/Piano/9 - Sapphire.mp3";
import RachmaninoffFugue from "../assets/audio/Piano/RachmaninoffFugue.mp3";

import Concerto3 from "../assets/audio/Ensemble/Concerto 3.mp3";
import AceOfSpades from "../assets/audio/Ensemble/AceOfSpades.mp3";

import Silvergreen from "../assets/audio/Soundtracks/Silvergreen.mp3";
import Amazon from "../assets/audio/Soundtracks/Amazon.mp3";
import Windward from "../assets/audio/Soundtracks/Windward.mp3";

import IMG_Birthstones from "../assets/images/TheBirthstones.png";
import IMG_RachmaninoffFugue from "../assets/images/RachmaninoffFugue.png";
import IMG_Concerto from "../assets/images/Concerto.png";
import IMG_TheHighCards from "../assets/images/TheHighCards.png";
import IMG_Silvergreen from "../assets/images/Silvergreen.png";
import IMG_Amazon from "../assets/images/Amazon.png";
import IMG_Windward from "../assets/images/Windward.png";

export const tracks = [
  [
    {
      title: "Windward",
      album: "Natura",
      source: Windward,
      image: IMG_Windward,
    },
    {
      title: "Silvergreen",
      album: "Medieval Times",
      source: Silvergreen,
      image: IMG_Silvergreen,
    },
    {
      title: "Amazon",
      album: "Natura",
      source: Amazon,
      image: IMG_Amazon,
    },
  ],
  [
    {
      title: "IX - Sapphire",
      album: "The Birthstones Suite",
      source: Sapphire,
      image: IMG_Birthstones,
    },
    {
      title: "Fugue On A Theme By Rachmaninoff",
      album: "",
      source: RachmaninoffFugue,
      image: IMG_RachmaninoffFugue,
    },
  ],
  [
    {
      title: "III - Allegro Maestoso",
      album: "Piano Concerto in C Major",
      source: Concerto3,
      image: IMG_Concerto,
    },
    {
      title: "I - Ace Of Spades",
      album: "The High Cards",
      source: AceOfSpades,
      image: IMG_TheHighCards,
    },
  ],
];

export const players = [
  {
    title: "Soundtracks",
  },
  {
    title: "Piano",
  },
  {
    title: "Ensemble",
  },
];
