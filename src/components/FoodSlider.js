import React, { useState } from 'react'
import { FoodData } from './FoodData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const FoodSlider = ({ slides }) => {
    const [currentImage, setCurrentImage] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1)
    }

    const prevSlide = () => {
        setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1)
    }

    console.log(currentImage)

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <section className="slider">
            <div>
                <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            </div>
            <div>
                <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            </div>
            {FoodData.map((slide, index) => {
                return (
                    <div className={index === currentImage ? "slide active" : "slide"} key={index}>
                        {index === currentImage && (<img src={slide.image} alt={index} className="art-image" />)}
                    </div>
                )
            })}
        </section>
    )
}

export default FoodSlider
