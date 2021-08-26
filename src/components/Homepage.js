import {FaLinkedin, FaGithub} from "react-icons/fa"

const Homepage = () => {
    return (
        <>
            <section className="homepage">
                <div className="overlay">
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