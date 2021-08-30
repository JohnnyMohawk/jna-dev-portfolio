import FoodSlider from "../components/FoodSlider"
import { FoodData } from '../components/FoodData'

const Food = () => {
    return (
        <>
            <section className="contacts" id="projects-page">
                <h1>My Plates</h1>
                <FoodSlider slides={FoodData}/>
            </section>
        </>
    )
}

export default Food