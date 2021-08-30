import { Link } from 'react-router-dom';
import {FaLinkedin, FaGithub} from "react-icons/fa"

const Homepage = () => {
    return (
        <>
            <section className="homepage">
                <div className="overlay">
                    <Link to="/projects">
                        <img className="home-logo" id="edit-img" src="./images/project-6.png" />
                    </Link>
                    <h1>John Nelson-Alden</h1>
                    <p>Full-Stack Developer</p>

                    <ul>
                        <li><a href="https://www.linkedin.com/in/john-nelson-alden/" target="_blank" rel="noopennernoreferrer"><FaLinkedin /></a></li>
                        <li><a href="https://github.com/JohnnyMohawk" target="_blank" rel="noopennernoreferrer"><FaGithub /></a></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Homepage