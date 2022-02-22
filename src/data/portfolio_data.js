import Placeholder from "../assets/img/Placeholder.png"


const portfolio_data = {
    Header: {
        title: "Portfolio",
        subtitle: "Ryan Zhu"
    },
    About: {
        paragraph: "Lorem ipsum dolor sit amet."
    },
    Projects: {
        title: "Projects",
        projects: [
            {
                name: "Teach Assist App",
                description: "Lorem ipsum dolor sit amet.",
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
                    ["Selenium", "#43B02A"]
                ],
                link: "teach-assist-app.github.io",
                image: Placeholder
            },
            {
                name: "WordleBot",
                description: "Lorem ipsum dolor sit amet.",
                date: "February 2022",
                tags: [
                    ["Python3", "#B59A51"],
                    ["Discord.py", "#7289D9"]
                ],
                link: "https://discord.com/api/oauth2/authorize?client_id=945329906739458098&permissions=103079216128&scope=bot",
                image: Placeholder
            },
            {
                name: "Portfolio Website",
                description: "Lorem ipsum dolor sit amet.",
                date: "January 2022",
                tags: [
                    ["React", "#589DB0"],
                    ["HTML5", "#E34C26"],
                    ["CSS3", "#264DE4"],
                    ["Bootstrap", "#563D7C"],
                ],
                image: Placeholder
            },
            {
                name: "MuseScore Statistics.py",
                description: "Lorem ipsum dolor sit amet.",
                date: "December 2021",
                tags: [
                    ["Python3", "#B59A51"],
                    ["Flask", "#111111"],
                    ["Selenium", "#43B02A"]
                ],
                link: "/#/musescore-statistics",
                image: Placeholder
            }
        ]

    }
}

export default portfolio_data