import {FaPlay, FaGithub} from "react-icons/fa"
import {useState} from "react"
import { projects } from "../data/projects"

const Projects = () => {
    // eslint-disable-next-line
    const [cards, setCards] = useState(projects)
    return (
        <>
            <section className="contacts projects" id="projects-page">
                <h1>My Projects</h1>
                <div className="cards">
                    {cards.map(({id, title, desc, github, demo, image}) => (
                        <article key={id}>
                            <a href={demo} target="_blank" rel="noopenner noreferrer">
                                <img src={image} alt={title} />
                            </a>
                            <h4>{title}</h4>
                            <p id="project-desc">{desc}</p>
                            <a href={github} target="_blank" rel="noopenner noreferrer" className="github"><FaGithub /></a>
                            <a href={demo} target="_blank" rel="noopenner noreferrer" className="launch"><FaPlay /></a>
                        </article>
                    ))}
                </div>


            </section>
        </>
    )
}

export default Projects