import { Link } from 'react-router-dom';
import { SayButton } from 'react-say'

const Homepage = () => {
    return (
        <>
            <section className="homepage">
                <div className="overlay">
                <video src="./images/spiral.mp4" autoPlay loop muted />
                    <div className="home-wrapper"></div>
                    <Link to="/projects">
                        <img className="home-logo" id="edit-img" src="./images/project-6.png" />
                    </Link>
                    <SayButton
                        className="home-name"
                        onClick={ event => console.log(event) }
                        speak="John Nelson Allden"
                    >
                        John Nelson-Alden
                    </SayButton>                
                    <p className="home-text">Full-Stack Developer</p>

                    <ul>
                        <li className="home-text"><a href="https://www.linkedin.com/in/john-nelson-alden/" target="_blank" rel="noopennernoreferrer"><img className="icons" src="./images/li-bw.png" /></a></li>
                        <li className="home-text"><a href="https://github.com/JohnnyMohawk" target="_blank" rel="noopennernoreferrer"><img className="icons" src="./images/gh-bw.png" /></a></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Homepage