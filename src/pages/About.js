import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <div className="centering-div">
            <section className="contacts">
                <h1>About Me</h1>
                <Link to="/contact-me">
                    <img className="home-logo" id="about-img" src="./images/project-6.png" />
                </Link>
                <h3 id="about-header">writer && readerOfCode || maker && doerOfThings<br></br> cooker && eaterOfFood || rescuer && loverOfDogs</h3>
                <p className="bio">I am a full-stack software developer with a passion for problem solving, organization, efficiency, 
                and creativity. Having spent my early years working as a professional actor on screen and stage, and studying visual art, my creative energy turned 
                towards the culinary arts and I have logged two decades as a professional chef, working in some of the nation’s finest 
                restaurants. My unique experience has equipped me with tools to create efficient, real-world solutions to complex problems on-the-fly.</p>
                <div className="pdf">
                    <embed src="John_NelsonAlden_Dev_Resume.pdf" width="100%" height="1120px" />
                </div>
            </section>
            </div>
        </>
    )
}

export default About