import { Link } from 'react-router-dom';
import ArtDesignModal from '../components/ArtDesignModal';
import EducationModal from '../components/EducationModal';
import ExperienceModal from '../components/ExperienceModal';
import OtherModal from '../components/OtherModal';
import SkillsModal from '../components/SkillsModal';
// import GooeyBG from "../components/Gooey"
import './about.css'

const About = () => {

    const userPageResponse = () => {
        if(window.innerWidth >= 500){
            window.location.reload()
        }else if(window.innerWidth <= 500){
            window.location.reload()
        }
    }

    window.addEventListener('resize', userPageResponse);

    return window.innerWidth >= 500 ? (
        <>
            <div className="centering-div">
            {/* <GooeyBG className="gooeyBg" /> */}
            <video className='bgVid' src="./images/tech-bg.mp4" autoPlay loop muted />
            <section className="contacts1">
                <h1>About Me</h1>
                <div className='logoLink'>
                <Link to="/contact-me">
                    <img className="home-logo" id="about-img" src="./images/project-6.png" />
                </Link>
                </div>
                <h3 id="about-header"><span className='aboutln1'> <span className='aboutSpace'>&nbsp;</span> writer && readerOfCode || maker && doerOfThings</span><br></br> <span className='aboutSpace'>&nbsp;</span> cooker && eaterOfFood || rescuer && loverOfDogs</h3>
                <div className='centerModalDiv'>
                    <div className='modalDiv'>
                        <div className='skillExpWrap'>
                            <SkillsModal />
                            <ExperienceModal />
                        </div>
                        <div className='eduSplitWrap'>
                            <EducationModal />
                            <div className='eduArtOtherWrap'>
                                <ArtDesignModal />
                                <OtherModal />
                            </div>
                        </div>
                    </div>
                </div>
                <p className="bio">
                    I am a full-stack software developer with a passion for problem solving, organization, 
                    efficiency, and creativity. My background as a professional actor, visual artist, and chef has given me a 
                    unique set of skills that allow me to approach complex challenges with a creative and efficient mindset. 
                    I am currently working with Web3 and blockchain technologies, using my expertise to create real-world 
                    solutions that are both functional and elegant.
                </p>
            </section>
            </div>
        </>
    ) : (
        <>
            <div className="centering-div">
            {/* <GooeyBG className="gooeyBg" /> */}
            <img className="mobile-bg" src="./images/about-mobile-bg.jpg" />
            <section className="contacts1">
                <h1>About Me</h1>
                <Link to="/contact-me">
                    <img className="home-logo" id="about-img" src="./images/project-6.png" />
                </Link>
                <h3 id="about-header"><span className='aboutln1'> <span className='aboutSpace'>&nbsp;</span> writer && readerOfCode || maker && doerOfThings</span><br></br> <span className='aboutSpace'>&nbsp;</span> cooker && eaterOfFood || rescuer && loverOfDogs</h3>
                <div className='centerModalDiv'>
                    <div className='modalDiv'>
                        <div className='skillExpWrap'>
                            <SkillsModal />
                            <ExperienceModal />
                        </div>
                        <div className='eduSplitWrap'>
                            <EducationModal />
                            <div className='eduArtOtherWrap'>
                                <ArtDesignModal />
                                <OtherModal />
                            </div>
                        </div>
                    </div>
                </div>
                <p className="bio">
                    I am a full-stack software developer with a passion for problem solving, organization, 
                    efficiency, and creativity. My background as a professional actor, visual artist, and chef has given me a 
                    unique set of skills that allow me to approach complex challenges with a creative and efficient mindset. 
                    I am currently working with Web3 and blockchain technologies, using my expertise to create real-world 
                    solutions that are both functional and elegant.
                </p>
            </section>
            </div>
        </>
    )
}

export default About