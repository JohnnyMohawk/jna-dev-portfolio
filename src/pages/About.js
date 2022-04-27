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
                <p className="bio">I am a full-stack software developer with a passion for problem solving, organization, efficiency, 
                and creativity. Having spent my early years working as a professional actor on screen and stage, and studying visual art, my creative energy turned 
                towards the culinary arts and I have logged two decades as a professional chef, working in some of the nation’s finest 
                restaurants. My unique experience has equipped me with tools to create efficient, real-world solutions to complex problems on-the-fly.</p>
            </section>
            </div>
        </>
    ) : (
        <>
            <div className="centering-div">
            {/* <GooeyBG className="gooeyBg" /> */}
            <img className="mobile-bg" src="./images/mobile-goo-img.png" />
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
                <p className="bio">I am a full-stack software developer with a passion for problem solving, organization, efficiency, 
                and creativity. Having spent my early years working as a professional actor on screen and stage, and studying visual art, my creative energy turned 
                towards the culinary arts and I have logged two decades as a professional chef, working in some of the nation’s finest 
                restaurants. My unique experience has equipped me with tools to create efficient, real-world solutions to complex problems on-the-fly.</p>
            </section>
            </div>
        </>
    )
}

export default About