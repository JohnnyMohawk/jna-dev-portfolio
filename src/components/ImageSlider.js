import React, { useState } from 'react'
import { SliderData } from './SliderData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import ImgInfoPopover from './ImgInfoModal'

const ImageSlider = ({ slides }) => {
    const [currentImage, setCurrentImage] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
        console.log(slides)
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
            {SliderData.map((slide, index) => {
                return (
                    <div className='spaceWrap'>
                    <div className={index === currentImage ? "slide active" : "slide"} key={index}>
                        {index === currentImage && (<img src={slide.image} alt={index} className="art-image" />)}
                    </div>
                    <div className='imgButtWrap'>
                        {index === currentImage && (<ImgInfoPopover info={slide} />)}
                    </div>
                    </div>
                )
            })}
        </section>
    )
}

export default ImageSlider
