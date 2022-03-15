import Placeholder from "../assets/img/Placeholder.png";
import TeachAssistApp from "../assets/img/TeachAssistApp.png";
import Portfolio from "../assets/img/Portfolio.png";
import ChWordle from "../assets/img/ChWordle.png";
import MuseScoreStatistics from "../assets/img/MuseScore Statistics.png";

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
        name: "Teach Assist App",
        description:
          "A mobile app made for YRDSB students for viewing individual marks.",
        date: "Coming soon!",
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
        link: "https://teach-assist-app.github.io/",
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
          "An API that returns statistics (total and average views, favourites, etc.) from a user's MuseScore page. Currently unavailable for public use.",
        date: "December 2021",
        tags: [
          ["Python3", "#B59A51"],
          ["Flask", "#111111"],
          ["Selenium", "#43B02A"],
        ],
        image: MuseScoreStatistics,
      },
    ],
  },
};

export default portfolio_data;
