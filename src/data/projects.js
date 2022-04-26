import { Link } from 'react-router-dom';
import {v4 as uuidv4} from "uuid"


export const projects = [
    {
        id: uuidv4(),
        title: "Shy Jack",
        desc: "Shy Jack is a MERN stack application that allows users to map and graph Chicago carjacking data from 2001 to Present based on their specific search parameters. Stay safe Chicago!",
        github: "https://github.com/JohnnyMohawk/chi-jack-app",
        demo: "https://www.shyjack.com/",
        image: "./images/shy-jack-project.png"
    },
    {
        id: uuidv4(),
        title: "Johnny Mohawk Blog",
        desc: "This blog is a place for me to share my longer-form writings about life, art, code, food, Chicago, and various other things that interest me. Built with React and Netlify CMS. ",
        github: "https://github.com/JohnnyMohawk/jna-netlify-cms-blog",
        demo: "https://blog.johnnelsonalden.com/",
        image: "./images/jna-blog.png"
    },
    {
        id: uuidv4(),
        title: "Self-portrait in Code",
        desc: "This piece is an exploration of front-end developer tools as visual art media. The text is advice from my late father on how to improve on a design: “Tear it all apart. What are you left with? Save the good stuff.” - My Dad",
        github: "https://github.com/JohnnyMohawk/self-portrait",
        demo: "https://iam.johnnelsonalden.com/",
        image: "./images/coded-self-portrait.jpg"
    },
    {
        id: uuidv4(),
        title: "UNleash",
        desc: "UNleash is a MERN stack application designed to help people locate dog parks in their area and enables users to connect with the communities that exist in these dog friendly public spaces.",
        github: "https://github.com/JohnnyMohawk/unleash",
        demo: "https://barks-rec-unleash.herokuapp.com/",
        image: "./images/project-1.png"
    },
    {
        id: uuidv4(),
        title: "People, Places & Things Challenge",
        desc: "The People, Places & Things Challenge is a full-stack Django application designed to increase the users curiousity, network and foster an attitude of gratitude!",
        github: "https://github.com/JohnnyMohawk/ppt-challenge",
        demo: "https://ppt-challenge.herokuapp.com/",
        image: "./images/project-2.png"
    },
    {
        id: uuidv4(),
        title: "Dog Rescue-O-Matic",
        desc: "Dog-Rescue-O-Matic is a MEN stack application to aid dog rescues, maintain and update pertinent information for dogs within their rescue network.",
        github: "https://github.com/JohnnyMohawk/dog-rescue-app",
        demo: "https://dog-o-matic-rescue-app.herokuapp.com/dogs",
        image: "./images/project-3.png"
    },
    {
        id: uuidv4(),
        title: "Project Four",
        desc: "Jumble Hunt is a shooting gallery style word jumble game built with vanilla JavaScript. The letters of a word will be rearranged in a random order, the player must “shoot” the letters in the correct order to unscramble the word.",
        github: "https://github.com/JohnnyMohawk/jumble-hunt-game",
        demo: "https://jumble-hunt.netlify.app/",
        image: "./images/project-4.png"
    },
    {
        id: uuidv4(),
        title: "Tar-Get-Toe",
        desc: "While not a full project, Tar-Get-Get displays my desire to make everything as interesting, engaging and visually appealing as possible!",
        github: "https://github.com/JohnnyMohawk/ttt-weekend",
        demo: "https://tar-get-toe.netlify.app/",
        image: "./images/project-5.png"
    },
    {
        id: uuidv4(),
        title: "Moonwalker Cafe",
        desc: "This is a static React App I am building for friends who opened a cafe in my neighborhood. Because Moonwalker is a quick-service restaurant, the design of the app is mobile first. Finalized copy and more food photos coming soon!.",
        github: "https://github.com/JohnnyMohawk/moonwalker",
        demo: "https://moonwalker-cafe.netlify.app/",
        image: "./images/moonwalker-cafe.png"
    },
]