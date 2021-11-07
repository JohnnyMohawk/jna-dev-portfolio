import FoodSlider from "../components/FoodSlider"
import { FoodData } from '../components/FoodData'

const Food = () => {
    return (
        <>
            <section className="contacts" id="projects-page">
                <h1>My Plates</h1>
                <div className="art-wrapper">
                    <div className="art-container">
                        <FoodSlider slides={FoodData}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Food