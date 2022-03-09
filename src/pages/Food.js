import ImageSlider from "../components/ImageSlider"
import { FoodData } from '../components/FoodData'

const Food = () => {
    return (
        <>
            <section className="contacts" id="projects-page">
                <h1 className="page-title">My Plates</h1>
                <div className="art-wrapper">
                    <div className="art-container">
                        <ImageSlider slides={FoodData}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Food