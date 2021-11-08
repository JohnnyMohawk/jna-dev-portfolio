import { Link } from 'react-router-dom';
import { SayButton } from 'react-say'

const Homepage = () => {

    const userPageResponse = () => {
        if(window.innerWidth >= 960){
            window.location.reload()
        }else if(window.innerWidth <= 960){
            window.location.reload()
        }
    }

    window.addEventListener('resize', userPageResponse);


    return window.innerWidth >= 500 ? (
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
                        speak="John Nelson Allden. Maker and Doer of things. Writer and Reader of code. Cooker and Eater of food. Rescuer and Lover of dogs"
                    >
                        John Nelson-Alden
                    </SayButton>                
                    <p className="home-title">Full-Stack Developer</p>

                    <ul>
                        <li className="home-text"><a href="https://www.linkedin.com/in/john-nelson-alden/" target="_blank" rel="noopennernoreferrer"><img className="icons" src="./images/li-bw.png" /></a></li>
                        <li className="home-text"><a href="https://github.com/JohnnyMohawk" target="_blank" rel="noopennernoreferrer"><img className="icons" src="./images/gh-bw.png" /></a></li>
                    </ul>
                </div>
            </section>
        </>
    ) : (
        <>
        <section className="homepage">
            <div className="overlay">
            <img className="mobile-bg" src="./images/spiral-still.png" />
                <div className="home-wrapper"></div>
                <Link to="/projects">
                    <img className="home-logo" id="edit-img" src="./images/project-6.png" />
                </Link>
                <h1 className="home-name1">John Nelson-Alden</h1>               
                <p className="home-title">Full-Stack Developer</p>

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