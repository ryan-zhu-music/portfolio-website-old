import MuseBench from "../assets/images/MuseBench.png";
import ReactMusicKeyboard from "../assets/images/ReactMusicKeyboard.png";
import TheBrainScramble from "../assets/images/TheBrainScramble.png";
import TeachAssistApp from "../assets/images/TeachAssistApp.png";
import Portfolio from "../assets/images/Portfolio Website.png";
import ChWordle from "../assets/images/ChWordle.png";
import MuseScoreStatistics from "../assets/images/MuseScore Statistics.png";
import RZMusic from "../assets/images/RZMusic.png";

const portfolio_data = {
  Header: {
    title: "Portfolio",
    subtitle: "Ryan Zhu",
  },
  About: {
    paragraph: "Lorem ipsum dolor sit amet.",
  },
  Projects: {
    title: "Projects",
    projects: [
      {
        name: "MuseBench",
        description:
          "An interactive digital benchmark tool for training your musical skills through your ears.",
        date: "October 2022",
        tags: [
          ["Next", "#000"],
          ["Tailwind CSS", "#38bdf8"],
          ["TypeScript", "#007acc"],
          ["Firebase", "#ffa611"],
        ],
        image: MuseBench,
        link: "https://musebench.vercel.app/",
      },
      {
        name: "react-music-keyboard",
        description:
          "A simple easy-to-use and highly customizable React component emulating a musical keyboard.",
        date: "September 2022",
        tags: [
          ["React", "#61dafb"],
          ["TypeScript", "#007acc"],
          ["npm", "#cb3837"],
        ],
        image: ReactMusicKeyboard,
        link: "https://www.npmjs.com/package/react-music-keyboard",
      },
      {
        name: "The BrainScramble",
        description: "An online magazine for young writers and artists.",
        date: "June 2022",
        tags: [
          ["Wordpress", "#21759B"],
          ["HTML5", "#E34C26"],
          ["CSS3", "#264DE4"],
        ],
        image: TheBrainScramble,
        link: "https://thebrainscramble.com/",
      },
      {
        name: "TeachAssist App",
        description:
          "A mobile app made for YRDSB students for viewing individual marks, booking guidance appointments, and more.",
        date: "May 2022",
        tags: [
          ["React Native", "#589DB0"],
          ["React", "#589DB0"],
          ["HTML5", "#E34C26"],
          ["CSS3", "#264DE4"],
          ["Bootstrap", "#563D7C"],
          ["Tailwind", "#4DC0B5"],
          ["Python3", "#B59A51"],
          ["Flask", "#111111"],
          ["Selenium", "#43B02A"],
        ],
        image: TeachAssistApp,
        link: "https://teachassistapp.github.io/",
      },
      {
        name: "ChWordleBot",
        description: "A Discord bot with Wordle and Chordle games!",
        date: "February 2022",
        tags: [
          ["Python3", "#B59A51"],
          ["Discord.py", "#7289D9"],
        ],
        link: "https://github.com/ryan-zhu-music/chwordle-bot",
        image: ChWordle,
      },
      {
        name: "Portfolio Website",
        description:
          "My personal website, the one you are viewing right now. Started as a project during a co-op placement at ",
        date: "January 2022",
        tags: [
          ["React", "#589DB0"],
          ["HTML5", "#E34C26"],
          ["CSS3", "#264DE4"],
          ["Bootstrap", "#563D7C"],
        ],
        image: Portfolio,
        link2: ["NVision", "https://nvision.co/"],
      },
      {
        name: "MuseScore Statistics.py",
        description:
          "An API that returns statistics (total and average views, favourites, etc.) from a user's MuseScore page.",
        date: "December 2021",
        tags: [
          ["Python3", "#B59A51"],
          ["Flask", "#111111"],
          ["Selenium", "#43B02A"],
        ],
        image: MuseScoreStatistics,
      },
      {
        name: "RZ Music",
        description:
          "My public musician persona. Hundreds of sheet music including arrangements and compositions.",
        date: "February 2020",
        tags: [
          ["Spotify", "#1DB954"],
          ["MuseScore", "#196AAF"],
          ["Soundcloud", "#FE6D35"],
          ["Instagram", "#DD2A7B"],
          ["YouTube", "#FF0000"],
        ],
        image: RZMusic,
        link: "https://musescore.com/ryan_zhu_music",
      },
    ],
  },
};

export default portfolio_data;
