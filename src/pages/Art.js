import ImageSlider from "../components/ImageSlider"
import { SliderData } from '../components/SliderData'

const Art = () => {
    return (
        <>
            <section className="contacts" id="projects-page">
                <h1>My Artwork</h1>
                <ImageSlider slides={SliderData}/>
            </section>
        </>
    )
}

export default Art