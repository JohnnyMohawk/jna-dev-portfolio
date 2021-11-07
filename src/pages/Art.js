import ImageSlider from "../components/ImageSlider"
import { SliderData } from '../components/SliderData'

const Art = () => {
    return (
        <>
            <section className="contacts" id="projects-page">
                <h1>My Artwork</h1>
                <div className="art-wrapper">
                    <div className="art-container">
                        <ImageSlider slides={SliderData}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Art