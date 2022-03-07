import VideoSlider from "../components/VideoSlider"
import { VideoData } from '../components/VideoData'

const Videos = () => {
    return (
        <>
            <section className="contacts" id="projects-page">
                <h1 className="page-title">My Videos</h1>
                <div className="art-wrapper">
                    <div className="art-container">
                        <VideoSlider slides={VideoData}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Videos