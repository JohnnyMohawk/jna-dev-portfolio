import {FaPlay, FaGithub} from "react-icons/fa"
import {useState} from "react"
import { projects } from "../data/projects"

const Projects = () => {
    // eslint-disable-next-line
    const [cards, setCards] = useState(projects)
    return (
        <>
            <section className="contacts projects">
                <h1>My Projects</h1>
                <div className="cards">
                    {cards.map(({id, title, desc, github, demo, image}) => (
                        <article key={id}>
                            <img src={image} alt={title} />
                            <h4>{title}</h4>
                            <p>{desc}</p>
                            <a href={github} target="_blank" rel="noopenner noreferrer" className="github"><FaGithub /></a>
                            <a href={demo} target="_blank" rel="noopenner noreferrer" className="launch"><FaPlay /></a>

                            {/* <ul>
                                <li><a href={github} target="_blank" rel="noopenner noreferrer">GitHub</a></li>
                                <li><a href={demo} target="_blank" rel="noopenner noreferrer">Deployed Link</a></li>
                            </ul> */}
                        </article>
                    ))}
                </div>


            </section>
        </>
    )
}

export default Projects